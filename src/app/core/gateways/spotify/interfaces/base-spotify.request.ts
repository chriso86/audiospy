export interface BaseSpotifyRequest {
  market?: string; // E.g. ES or ZA
  limit?: number; // Page size (Paging)
  offset?: number; // Items to skip (Paging)
}
