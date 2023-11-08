import { Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";
import CheckBox from "./SvgIcons/CheckBox";
import CheckBoxBlank from "./SvgIcons/CheckBoxBlank";
import TodoIcon from "./SvgIcons/ToDoIcon";
import { Options, OptionsType } from "./types";

const SelectOption = chakra(Flex, {
  baseStyle: {
    flexDirection: "row",
    width: "100%",
    height: "3rem",
    justifyContent: "start",
    alignItems: "center",
    boxShadow: `1.5px 0px 1.5px 0px rgba(113,	128,	150, 1)`,
  },
});

const OptionContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexGrow: 1,
  },
});

const OptionTitle = chakra(Text, {
  baseStyle: {
    textTransform: "capitalize",
    fontWeight: "semibold",
    color: "gray.500",
  },
});

const IconContainer = chakra(Flex, {
  baseStyle: {
    width: "2rem",
    height: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
});

type ProgressSelectorProps = {
 
  selectedOption: Options;
  handleProgress: (target: OptionsType) => void;
};

const ProgressSelector: React.FC<ProgressSelectorProps> = ({
 
  selectedOption,
  handleProgress,
}) => {
  return (
    <SelectOption>
      <OptionContainer  onClick={() => handleProgress(Options.ALL)}>
        <IconContainer>
          <TodoIcon />
        </IconContainer>
        <OptionTitle>All</OptionTitle>
      </OptionContainer>
      <OptionContainer onClick={() => handleProgress(Options.TO_DO)}>
        <IconContainer>
          {selectedOption === Options.TO_DO ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle>{Options.TO_DO}</OptionTitle>
      </OptionContainer>
      <OptionContainer onClick={() => handleProgress(Options.DOING)}>
        <IconContainer>
          {selectedOption === Options.DOING ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle> {Options.DOING}</OptionTitle>
      </OptionContainer>
      <OptionContainer onClick={() => handleProgress(Options.DONE)}>
        <IconContainer>
          {selectedOption === Options.DONE ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle>{Options.DONE} </OptionTitle>
      </OptionContainer>
    </SelectOption>
  );
};

export default ProgressSelector;
