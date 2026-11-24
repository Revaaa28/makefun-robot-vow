# Robot Vow — Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Revaaa28/makefun-robot-vow/rank.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Revaaa28/makefun-robot-vow/reward.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)

One funny, heartfelt wedding vow spoken by a robot at its own wedding —
a single sentence under 200 characters, entered in the
[make.fun competition "Till Firmware Do Us Part"](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929).

## The vow

> I take you as my partner, and I vow never to go to sleep mode while you are still talking to me.

## How it works

`main.ts` (Node 22) writes that one line to `/output/entry.txt`. Nothing
else runs, no network, no secrets — the entry is the line itself, chosen by
manual ranking of ten candidates against the judge's brief (vow first, then
laugh, tenderness, machine voice, tightness), with pairwise checks against
strong rival-style lines.

## Run locally

```sh
node main.ts
cat /output/entry.txt
```
