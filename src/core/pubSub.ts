import { CommandEvent } from "./index";

interface Topic {
  event: string;
  handler: () => void;
}

export class PubSub {
  private handlers: Set<Topic>;

  constructor() {
    this.handlers = new Set();
  }

  subscribe(event: string, handler: () => void) {
    this.handlers.add({ event, handler });
  }

  dispatch(event: CommandEvent) {
    console.log("subscribers", this.handlers.size);
    this.handlers.forEach((topic) => {
      if (topic.event === event.name) {
        topic.handler();
      }
    });
  }
}
