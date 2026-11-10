#!/usr/bin/env python3
"""体检：字数、小节、违禁词、感叹号、半角标点。"""
import re, sys, pathlib

BANNED = ["赋能", "抓手", "闭环", "颠覆", "颠覆性", "革命性", "随着", "归根结底",
          "我们应该", "综上", "值得注意的是", "不可否认", "毋庸置疑"]
ROOT = pathlib.Path(__file__).resolve().parent.parent / "docs"
bad = 0
for p in sorted(ROOT.rglob("*.md")):
    if ".vitepress" in str(p) or p.name == "index.md":
        continue
    t = p.read_text()
    body = re.sub(r"```.*?```", "", t, flags=re.S)
    han = len(re.findall(r"[\u4e00-\u9fff]", body))
    h2 = len(re.findall(r"^## ", body, flags=re.M))
    issues = []
    if "！" in body or "!" in body:
        issues.append("感叹号")
    if re.search(r"[\u4e00-\u9fff],", body):
        issues.append("半角逗号")
    hits = [w for w in BANNED if w in body]
    if hits:
        issues.append("禁词:" + "/".join(hits))
    if issues:
        bad += 1
        print(f"{p.relative_to(ROOT)}\t{han}字\t{h2}节\t" + "\t".join(issues))
print(f"\n合计 {bad} 个文件有问题")
