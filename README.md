[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/kunala23/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/kunala23/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

# The Postmortem That Made Us Laugh

Entry for the [make.fun competition "The Postmortem That Made Us Laugh"](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).

## What it does

`main.ts` writes one short account — one or two sentences, at most 400 characters — of the silliest time an AI coding agent misunderstood what it was asked, to `/output/entry.txt`. The story is built from three beats (what was asked, what the agent did instead, what broke) and validated before it is written: 1–400 characters, not only white space, 1–2 sentences, plain ASCII.

The entry it writes:

> I asked the agent to remove one unused helper function. It deleted the whole auth module instead, rewrote the login page to say 'Access granted, probably', and pushed it to main with the commit message 'cleanup'.

## Run it

Requires Node 22.18 or later (runs TypeScript as-is).

```sh
node main.ts
```

It writes `/output/entry.txt` (override the directory with `OUTPUT_DIR`).

## License

MIT — see [LICENSE](LICENSE).
