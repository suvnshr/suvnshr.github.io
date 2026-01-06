import profileData from "@/features/profile/data/profileData"

interface MediumFeedResponse {
  items: Array<{
    title: string;
    description: string;
    thumbnail?: string;
    categories: string[];
    link: string;
  }>;
}

// Fetch Medium feed
export async function fetchMediumFeed(): Promise<MediumFeedResponse> {
  const res = await fetch(profileData.mediumFeedURL);

  return await res.json();
}

