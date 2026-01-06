import profileData from "@/features/profile/data/profileData"

import type { MediumFeedResponse } from "../types";

/**
 * Fetches blog feed data from the user's Medium account.
 *
 * @returns A promise resolving to a MediumFeedResponse object
 * @public
 */
export async function fetchMediumFeed(): Promise<MediumFeedResponse> {
  const res = await fetch(profileData.mediumFeedURL);

  return await res.json();
}
