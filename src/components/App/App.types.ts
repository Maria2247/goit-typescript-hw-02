export type Query = {
  total: number;
  total_pages: number;
  results: IImage[];
};

export interface IImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
