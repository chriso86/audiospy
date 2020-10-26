export interface ArtistInfoResponse {
  "external_urls": {
    "spotify": string; // Spotify artist URL
  };
  "href": string; // Full artist URL
  "id": string; // Unique ID
  "name": string; // Artist name,
  "type": string; // Value: 'artist'
  "uri": string; // Spotify URI
}
