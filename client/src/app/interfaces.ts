export interface User {
  id?: number
  name?: string
  email: string
  password?: string
  role: string
}

export class Event {
  id?: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  imageSrc?: string
}
