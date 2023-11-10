import { Button, Flex, Text, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import ProgressIndicator from "./ProgressIndicator";
import DeleteIcon from "./SvgIcons/DeleteIcon";
import EditIcon from "./SvgIcons/EditIcon";
import { Options } from "./types";

type TodoCardPropType = {
  progress: Options;
  task: string;
  id: string;
  deleteTodo: (id: string) => void;
};

const CardLayout = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "4rem",
    minHeight: "4rem",
    padding: "0.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: ` 0 1px rgba(113,	128,	150, 0.4)`,
  },
});


const EditFormContainer = chakra(Flex, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const EditForm = chakra("form", {
  baseStyle: {
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0.25rem 0.5rem`,
  },
});

const EditFormInput = chakra("input", {
  baseStyle: {
    width: "88%",
    height: "80%",
    borderRadius: "0.8rem",
    border: "1px",
    borderColor: "gray.400",
    paddingX: "0.5rem",
    textTransform: "capitalize",
  },
}); 

const IconContainer = chakra(Flex, {
  baseStyle: {
    width: "1.5rem",
    height: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TodoTask = chakra(Text, {
  baseStyle: {
    textTransform: "capitalize",
    fontWeight: "semibold",
    color: "gray.500",
  },
});

const ControlPanel = chakra(Flex, {
  baseStyle: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0,
    _hover: {
      opacity: 1,
    },
  },
});

const DeleteForm = chakra(Flex, {
  baseStyle: {
    flexDirection:"column",
    width: "100%",
    height: "20vh",
    justifyContent: "center",
    alignItems: "start",
  },
});

const ModalButtonContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "30%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

const TodoCard: React.FC<TodoCardPropType> = ({
  task,
  id,
  deleteTodo,
  progress,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  //const [newTask, setNewTask] = useState<string>("");

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleDelete = () => {
    setIsDeleting(!isDeleting);
  };

  const handleDelte = () => {
    deleteTodo(id);
  };

  return (
    <>
      <ModalWrapper isEditting={isEditing} editHandler={toggleEdit}>
        <EditFormContainer>
          <EditForm>
            <EditFormInput/>
            <ModalButtonContainer>
            <Button colorScheme="blue" mr={3} >
              수정
            </Button>
            <Button onClick={toggleEdit}>닫기</Button>
          </ModalButtonContainer>
          </EditForm>
        </EditFormContainer>
        
      </ModalWrapper>

      <ModalWrapper isEditting={isDeleting} editHandler={toggleDelete}>
        <DeleteForm>
          <p>정말로 삭제 하시겠습니까?</p>
          <ModalButtonContainer>
            <Button colorScheme="blue" mr={3} onClick={handleDelte}>
              삭제
            </Button>
            <Button onClick={toggleDelete}>닫기</Button>
          </ModalButtonContainer>
        </DeleteForm>
      </ModalWrapper>
      <CardLayout>
        <ProgressIndicator progress={progress} />
        <TodoTask>{task}</TodoTask>

        <ControlPanel>
          <IconContainer onClick={toggleEdit}>
            <EditIcon />
          </IconContainer>
          <IconContainer onClick={toggleDelete}>
            <DeleteIcon />
          </IconContainer>
        </ControlPanel>
      </CardLayout>
    </>
  );
};

export default TodoCard;
