import { appConfig } from "@/src/configs/app-config.ts";

export const getRandomCronSchedule = () => {
  const randomMinute = Math.floor(Math.random() * 60);
  const randomHour = Math.floor(Math.random() * 24);
  return `${randomMinute} ${randomHour} * * *`;
};

export const timeout = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getPRTitle = (ref: string, upstream: string): string =>
  `[pull] ${ref} from ${upstream}`;

export const getPRBody = (fullName: string, prNumber?: number): string =>
  (prNumber
    ? `See [Commits](/${fullName}/pull/${prNumber}/commits) and [Changes](/${fullName}/pull/${prNumber}/files) for more details.`
    : `See Commits and Changes for more details.`) +
  `\n\n-----\nCreated by [<img src="https://prod.download/pull-18h-svg" valign="bottom"/> **pull[bot]**](https://github.com/wei/pull) (v${appConfig.version})` +
  "\n\n_Can you help keep this open source service alive? **[💖 Please sponsor : )](https://prod.download/pull-pr-sponsor)**_";
