export interface Query<T, R> {
  execute(param: T): Promise<R>;
}

export interface CommandEvent {
  name: string;
}

export interface Command<T> {
  execute(param: T): Promise<CommandEvent>;
}

export interface EventBus {
  subscribe(event: string, handler: () => void): void;

  dispatch(event: CommandEvent): void;
}

export interface Topic {
  event: string;
  handler: () => void;
}

export interface PermaUtils {
  getNewDate: () => number;
  getNewId: () => string;
}
