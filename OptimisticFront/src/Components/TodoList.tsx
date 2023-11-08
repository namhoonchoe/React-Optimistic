import {
  Button,
  Flex,
  Text,
  chakra
} from "@chakra-ui/react"
import { useState } from "react"
import ProgressSelector from "./ProgressSelector"
import AddIcon from "./SvgIcons/AddIcon"
import { Options, OptionsType, TodoListItemType } from "./types"

const TodoListLayout = chakra(Flex,{
  baseStyle:{
    width:"25rem",
    maxHeight:"30rem",
    flexDirection:"column",
    justifyContent:"start",
    alignItems:"center",
    borderRadius:"0.8rem",
    overflow:"hidden",
    boxShadow:"xs",
  }
})

const TodoListHeader = chakra(Flex, {
  baseStyle:{
    flexDirection:"column",
    width:"100%",
    height:"7rem",
 
  }
})


const TodoListHeading = chakra(Flex,{
  baseStyle:{
    width:"100%",
    height:"4rem",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green.400"
  }
})



const ListContainer = chakra(Flex, {
  baseStyle:{
    width:"100%",
    maxHeight:"40vh",
    overflowY:"scroll",
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"center"
  }
})

/**
 * chakra ui form 사용법 자세히 알아보자
 * Form?? => div태그로 인식됨
 *  그냥 form 적용해야함!
 */

const AddTodoForm = chakra('form', {
  baseStyle:{
    width:"100%",
    height:"3.5rem",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:`0.25rem 0.5rem`
  }
})

const AddTodoInput = chakra('input',{
  baseStyle:{
    width:"88%",
    height:"80%",
    borderRadius:"0.8rem",
    border:"1px",
    borderColor:"gray.400",
    paddingX:"0.5rem",
    textTransform:"capitalize"
  }
})

/**
 * 이 부분은 조금더 연구가 필요함!
 * https://velog.io/@sensecodevalue/Typescript-Enum-%EC%99%9C-%EC%93%B0%EC%A7%80-%EB%A7%90%EC%95%84%EC%95%BC%ED%95%98%EC%A3%A0
 */

export default function TodoList() {
  const [selectedStatus, setSelectedStatus] = useState<OptionsType>(Options.TO_DO)

  const [newTodo, setNewTodo] = useState<TodoListItemType>({
    task: "",
    id: "",
    progress: Options.TO_DO,
  });

  const [todos, setTodos] = useState<Array<TodoListItemType>>([])


  const changeHandler:React.ChangeEventHandler<HTMLInputElement>=(e) => {
      e.preventDefault()
      /*스프레드 순서 기억! 뒤에 붙이면 앞의 값이 초기화됨 */
        setNewTodo({
          ...newTodo,
          task:e.target.value,
          id:crypto.randomUUID(),
        })
  }

  const submitHandler:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
      setTodos([...todos,newTodo])
      setNewTodo({
        task:"",
        id:"",
        progress: Options.TO_DO,
      })
      console.log(todos)
  }

  const handleProgress = (target:OptionsType) => {
    return setSelectedStatus(target)
  } 

  return (
    <TodoListLayout>
      <TodoListHeader>
        <TodoListHeading>
          <Text color={"white"} fontSize={"2xl"} casing={"capitalize"} fontWeight={"semibold"}>
            TodoList
          </Text>
        </TodoListHeading>
      <ProgressSelector 
        selectedOption={selectedStatus} 
        handleProgress={handleProgress}/>
      </TodoListHeader>
      <ListContainer>

      </ListContainer>
      <AddTodoForm onSubmit={submitHandler} >
        <AddTodoInput onChange={changeHandler} value={newTodo.task} placeholder="add new todos here" />
        <Button width={"2rem"} height={"2rem"} justifyContent={"center"} alignItems={"center"} padding={0} type={"submit"} >
          <AddIcon/>
        </Button>
      </AddTodoForm>
    </TodoListLayout>
  )
}
