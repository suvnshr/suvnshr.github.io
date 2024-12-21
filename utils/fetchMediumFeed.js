import profileData from "../data/profileData";

// Fetch Medium feed
export async function fetchMediumFeed() {
  const res = await fetch(profileData.mediumFeedURL);

  return await res.json();
}
