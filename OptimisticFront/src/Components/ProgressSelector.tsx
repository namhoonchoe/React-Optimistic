import { Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";
import CheckBox from "./SvgIcons/CheckBox";
import CheckBoxBlank from "./SvgIcons/CheckBoxBlank";


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
  firstOption: Progress.TO_DO;
  secondOption: Progress.DOING;
  thirdOption: Progress.DONE;
  selectedOption: Progress;
  handleProgress:(target: ProgressType) => void
};

const ProgressSelector: React.FC<ProgressSelectorProps> = ({
  firstOption,
  secondOption,
  thirdOption,
  selectedOption,
  handleProgress
}) => {
  return (
    <SelectOption>
      <OptionContainer onClick={() => handleProgress(firstOption)}>
        <IconContainer>
          {selectedOption === firstOption ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle>{firstOption}</OptionTitle>
      </OptionContainer>
      <OptionContainer  onClick={() => handleProgress(secondOption)}>
        <IconContainer>
          {selectedOption === secondOption ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle> {secondOption}</OptionTitle>
      </OptionContainer>
      <OptionContainer  onClick={() => handleProgress(thirdOption)}>
        <IconContainer>
          {selectedOption === thirdOption ? <CheckBox /> : <CheckBoxBlank />}
        </IconContainer>
        <OptionTitle>{thirdOption} </OptionTitle>
      </OptionContainer>
    </SelectOption>
  );
};

export default ProgressSelector;
