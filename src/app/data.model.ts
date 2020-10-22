
export interface TaskObject {
  message: string;
  due_date?: string;
  priority?: 1 | 2 | 3;
  assigned_to?: number;
}
export interface TaskUpdateObject extends TaskObject {
  taskId: number;
}

export interface DeleteTaskObject {
  taskId: number;
}

export interface Users {
  id: number;
  name: string;
  picture: string;
}
