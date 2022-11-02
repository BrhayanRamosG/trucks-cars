export interface Vehicle {
  id: number;
  status: number;
  price: number;
  description: string;
  vehicle_slug: string;
  businesses: Business;
  categories: Category;
  condition: string;
  cover: string;
  created_at: string;
  updated_at: string;
  year: string;
  versions: Version;
  photos: Photo[];
}

export interface Link {
  active: boolean;
  label: string;
  url: string;
}

interface Business {
  business_name: string;
  business_owner: number;
  id: number;
  telephone: string;
  web_site: string;
}

interface Category {
  id: number;
  category_name: string;
  category_slug: number;
}

interface Version {
  id: number;
  version_name: string;
  version_slug: number;
  makes: Make;
}

interface Make {
  id: number;
  make_name: string;
  make_slug: number;
}

interface Photo {
  id: number;
  photo_url: string;
}
