export interface PagedResponse {
  limit: number; // Page size
  next?: string; // URL to the next page of items
  previous?: string; // URL to the previous page of items
  offset: number; // Number of items to skip
  total: number; // Total number of albums
}
