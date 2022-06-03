export interface Query<T, R> {
  execute(param: T): Promise<R>;
}

export interface CommandEvent {
  name: string;
}

export interface Command<T> {
  execute(param: T): Promise<CommandEvent>;
}
