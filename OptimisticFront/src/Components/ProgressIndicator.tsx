import { Flex, chakra } from "@chakra-ui/react";
import React from "react";
import CheckBoxBlank from "./SvgIcons/CheckBoxBlank";
import DoneIcon from "./SvgIcons/DoneIcon";
import RocketIcon from "./SvgIcons/RocketIcon";

import { Options } from "./types";

type ProgressIndicatorProps = {
  progress: Options;
};

const IconContainer = chakra(Flex, {
  baseStyle: {
    width: "2rem",
    height: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  if (progress === Options.TO_DO) {
    return <IconContainer>
      <CheckBoxBlank/>
    </IconContainer>;
  }

  if (progress === Options.DOING) {
    return <IconContainer>
      <RocketIcon/>
    </IconContainer>;
  }

  if (progress === Options.DONE) {
    return <IconContainer>
      <DoneIcon/>
    </IconContainer>;
  }
};

export default ProgressIndicator;
