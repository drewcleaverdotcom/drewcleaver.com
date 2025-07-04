export async function subscribeToList({ email, listId, apiKey }) {
  const response = await fetch(`https://a.klaviyo.com/api/v2/list/${listId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      profiles: [{ email }],
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }
  return await response.json();
}
