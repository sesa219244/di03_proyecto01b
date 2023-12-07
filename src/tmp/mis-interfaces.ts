export interface IDatos {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IPersona[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}

interface IPersona {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}