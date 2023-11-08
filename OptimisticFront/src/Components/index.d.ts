
enum Progress {
  "TO_DO" = "todo",
  "DOING" = "doing",
  "DONE" ="done",
}


type TodoListItemType = {
  id: string;
  task: string;
  progress: Progress;
}


type ProgressType = typeof Progress[keyof typeof Progress];
 