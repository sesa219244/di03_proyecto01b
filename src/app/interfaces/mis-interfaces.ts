export interface IPersona {
    id: string;
    nombre: string;
    apellido: string;
}

export interface IDatos {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IPersonas[];
    support: Support;
}
  
  export interface Support {
    url: string;
    text: string;
  }
  
  export interface IPersonas {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
