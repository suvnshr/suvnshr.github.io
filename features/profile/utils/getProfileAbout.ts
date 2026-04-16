import { intervalToDuration } from "date-fns";

// Keep this as a UTC date to avoid timezone drift in month/day boundaries.
const EXPERIENCE_START_DATE = new Date(Date.UTC(2021, 5, 28));

const getExperienceDuration = (
  startDate: Date,
  currentDate: Date = new Date(),
): string => {
  // date-fns gives a calendar-aware split into years/months.
  const duration = intervalToDuration({
    start: startDate,
    end: currentDate,
  })
  const years = duration.years ?? 0;
  const months = duration.months ?? 0;

  const durationParts: string[] = [];

  if (years > 0) {
    durationParts.push(`${years} year${years === 1 ? "" : "s"}`);
  }

  if (months > 0 || years === 0) {
    durationParts.push(`${months} month${months === 1 ? "" : "s"}`);
  }

  return durationParts.join(" ");
};

export const getProfileAbout = (): string =>
  `Software engineer with ${getExperienceDuration(EXPERIENCE_START_DATE)} of experience building real-world, performance-driven web applications.`;