export interface Query<T, R> {
  execute(param: T): R;
}

export interface Command<T> {
  execute(param: T): void;
}
