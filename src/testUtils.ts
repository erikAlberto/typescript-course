export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

// Reto 1: crea el tipo PublicUser (User sin password) usando un utility type
export type PublicUser = Omit<User, 'password'>
// Reto 2: escribe una función genérica que reciba un ApiResponse<T>
// y retorne solo el campo `data`, tipado correctamente
export function unwrapResponse<T>(response: ApiResponse<T>): T {
  // completa
  return response.data;
}

// Reto 3: escribe una función que reciba un array de objetos genéricos
// y un array de keys, y retorne solo esas propiedades de cada objeto
export function pickFields<T, K extends keyof T>(items: T[], keys: K[]): Pick<T, K>[] {
  // completa
  return items.map(item => {
    const picked: Partial<Pick<T, K>> = {};
    for (const key of keys) {
      picked[key] = item[key];
    }
    return picked as Pick<T, K>;
  });
}