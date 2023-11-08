import {
  Button,
  Flex,
  FormControl,
  Text,
  chakra
} from "@chakra-ui/react"
import { useState } from "react"
import ProgressSelector from "./ProgressSelector"


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

  }
})


const AddTodoForm = chakra(FormControl, {
  baseStyle:{
    width:"100%",
    height:"3.5rem",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:`0.25rem`
  }
})

const AddTodoInput = chakra('input',{
  baseStyle:{
    width:"84%",
    height:"80%",
    borderRadius:"0.8rem",
    border:"1px",
    borderColor:"gray.400"
  }
})

enum Progress {
  "TO_DO" = "todo",
  "DOING" = "doing",
  "DONE" ="done",
}

type ProgressType = typeof Progress[keyof typeof Progress];
//이 부분은 조금더 연구가 필요함!

export default function TodoList() {
  const [selectedStatus, setSelectedStatus] = useState<ProgressType>(Progress.TO_DO)

  const handleProgress = (target:ProgressType) => {
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
      firstOption={Progress.TO_DO} 
      secondOption={Progress.DOING} 
      thirdOption={Progress.DONE} 
      selectedOption={selectedStatus} 
      handleProgress={handleProgress}/>
      </TodoListHeader>
      <ListContainer>

      </ListContainer>
      <AddTodoForm>
        <AddTodoInput/>
        <Button/>
      </AddTodoForm>
    </TodoListLayout>
  )
}
