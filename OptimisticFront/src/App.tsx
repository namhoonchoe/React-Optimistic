import TodoList from "@Components/TodoList";
import { Flex, chakra } from "@chakra-ui/react";

const CenterdLayout = chakra(Flex, {
  baseStyle: {
    justifyContent:"center",
    alignItems:"start",
    paddingTop:"20vh",
    width: "100%",
    minHeight: "100vh",
    position: "absolute",
    left: "50%",
    transform:"translateX(-50%)",
  },
});

function App() {
  return (
    <CenterdLayout>
      <TodoList />
    </CenterdLayout>
  );
}

export default App;
