
export interface TaskPostObject {
  message: string;
  due_date?: string;
  priority?: 1 | 2 | 3;
  assigned_to?: number;
}
export interface TaskUpdateObject extends TaskPostObject {
  taskId: number;
}
export interface TaskGetObject extends TaskPostObject {
  assigned_name: string,
  created_on: string,
  id: string,
}

export interface DeleteTaskPostObject {
  taskId: number;
}

export interface Users {
  id: number;
  name: string;
  picture: string;
}
