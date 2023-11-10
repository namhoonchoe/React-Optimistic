import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

type ModalWrapperProps = {
  isEditting: boolean;
  editHandler: () => void;
  children: ReactNode;
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  editHandler,
  isEditting,
}) => {
  return (
    <Modal isOpen={isEditting} onClose={editHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
