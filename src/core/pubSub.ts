import { CommandEvent, EventBus, Topic } from "./index";

export class PubSub implements EventBus {
  private handlers: Set<Topic>;

  constructor() {
    console.log("PubSub EventBus initialisation");

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
