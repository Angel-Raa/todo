export {};

declare global {
  export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
}
