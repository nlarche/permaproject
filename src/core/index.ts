export interface Query<T, R> {
  execute(param: T): Promise<R>;
}

export interface Command<T> {
  execute(param: T): void;
}
