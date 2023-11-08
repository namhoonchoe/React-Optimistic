
export enum Options {
  "ALL" ="all",
  "TO_DO" = "todo",
  "DOING" = "doing",
  "DONE" ="done",
}


export type TodoListItemType = {
  id: string;
  task: string;
  progress: Options;
}


export type OptionsType = typeof Options[keyof typeof Options];
 