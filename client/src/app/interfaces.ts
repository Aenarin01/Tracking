export interface User {
  id?: number
  name?: string
  email: string
  password?: string
  role: string
}

export class Events {
  id?: string;
  title: string;
  description?: string;
  start: string;
  end?: string;
}
