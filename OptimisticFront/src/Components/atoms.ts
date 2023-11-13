import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TodoListItemType } from "./types";
const { persistAtom } = recoilPersist();


export const todoListState = atom<Array<TodoListItemType>>({
  key:"todoList",
  default:[],
  effects_UNSTABLE: [persistAtom]
})