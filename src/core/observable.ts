import { CommandEvent, EventBus, Topic } from "./index";
import {
  BehaviorSubject,
  filter,
  map,
  mergeAll,
  tap,
  withLatestFrom,
} from "rxjs";

export class Observable implements EventBus {
  private topics: BehaviorSubject<Topic[]>;
  private events: BehaviorSubject<CommandEvent>;

  constructor() {
    console.log("Observable EventBus initialisation");
    this.topics = new BehaviorSubject<Topic[]>([]);
    this.events = new BehaviorSubject<CommandEvent>(null as any);

    this.events
      .pipe(
        withLatestFrom(this.topics),
        map(([event, topics]) =>
          topics.filter((topic) => topic.event === event.name)
        ),
        mergeAll(),
        filter((topic) => !!topic),
        tap((topic) => topic.handler && topic.handler())
      )
      .subscribe({ next: (e) => console.log("trigger event: ", e.event) });
  }

  subscribe(event: string, handler: () => void) {
    this.topics.next([...this.topics.value, { event, handler }]);
  }

  dispatch(event: CommandEvent) {
    this.events.next(event);
  }
}
