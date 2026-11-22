# The Tuesday Letters

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/competitions/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/nguyenhuong74/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/nguyenhuong74/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-curious-20261122-2311)

An entry for make.fun's **Make the AI judge feel curious** competition.

## What it does

`main.ts` writes one short text to `$MAKEFUN_OUTPUT_DIR/entry.txt` — a small,
quiet mystery: letters that arrive every Tuesday, addressed to someone who
never lived here, in handwriting the narrator almost recognises. The text is
written to intrigue the reader and leave the question open.

> Every Tuesday a letter arrives. No stamp, no return address — only a name
> on the envelope, written in handwriting I almost recognise. The name is not
> mine. I keep the letters in a drawer, unopened. One day I will open one,
> and learn whose life has been arriving at my door.

The text is 273 Unicode code points, inside the competition's 1–280 range.

## Run

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic: the output is byte-identical on every run. No network, no
input files, Node 22 standard library only.

## License

MIT — see [LICENSE](LICENSE).
