import { Button, Flex, Text, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import DeleteIcon from "./SvgIcons/DeleteIcon";
import EditIcon from "./SvgIcons/EditIcon";
import SaveIcon from "./SvgIcons/SaveIcon";
import { Options } from "./types";

type TodoCardPropType = {
  progress?: Options;
  task: string;
  id: string;
  deleteTodo:(id: string) => void
};

const CardLayout = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "4rem",
    padding: "0.5rem",
    justifyContent:"space-between",
    alignItems: "center",
    boxShadow:` 0 1px rgba(113,	128,	150, 0.4)`,
  },
});

const EditFormContainer = chakra(Flex, {
  display: "flex",
  justifyContent: "spaceBetween",
  alignItems: "center",
});

const EditForm = chakra("form", {
  baseStyle: {
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "spaceBetween",
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
  baseStyle: {},
});

const TodoCard: React.FC<TodoCardPropType> = ({  task, id, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //const [newTask, setNewTask] = useState<string>("");

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDelte = () => {
    deleteTodo(id)
  }

  return (
    <CardLayout>
      {isEditing ? (
        <EditFormContainer>
          <EditForm>
            <EditFormInput />
            <Button
              width={"2rem"}
              height={"2rem"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={0}
              type={"submit"}
            >
              <SaveIcon />
            </Button>
          </EditForm>
        </EditFormContainer>
      ) : (
        <>
          {/**진행상황 아이콘 표시하기 */}
          <TodoTask>{task}</TodoTask>

          {/**진행상황 선택할 수 있도록 수정 */}
          <ControlPanel>
            <IconContainer onClick={toggleEdit}>
              <EditIcon />
            </IconContainer>
            <IconContainer onClick={handleDelte}>
              <DeleteIcon />
            </IconContainer>
          </ControlPanel>
        </>
      )}
    </CardLayout>
  );
};

export default TodoCard;
