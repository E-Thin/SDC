export class AboutUsForResponse {
  id: string;
  created_at: Date;
  updated_at: Date;
  name?: string;
  description?: string;
  image: Array<{
    id: string;
    url: string;
  }>;
}
