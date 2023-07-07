import React, { ChangeEvent } from "react";
import Button from "../Button";
import { ReactComponent as Success } from "../../../assets/img/success_modal.svg";
import { ReactComponent as CloseBtn } from "../../../assets/img/close.svg";

interface CreateEventSuccessModalProps {
  eventName: string;
  show: boolean;
  onClose: () => void;
}

const CreateEventSuccessModal = ({
  eventName,
  show,
  onClose,
}: CreateEventSuccessModalProps) => (
  <>
    {show && (
      <div className="fixed h-screen w-screen bg-black-b1 bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-g1 w-[480px] h-[385px] z-50 text-center flex flex-col justify-around p-[30px] rounded-md relative">
          <button
            className="absolute top-0 right-0 p-[8px]"
            onClick={() => {
              onClose();
            }}
          >
            <CloseBtn />
          </button>
          <Success className="w-[100px] h-[100px] mx-auto" />
          <h2 className="text-4/5xl font-gilroy-bold text-gray-g5">
            Evento criado com sucesso!
          </h2>
          <p className="text-gray-g5 font-gilroy-regular">
            Se excluir o evento{" "}
            <span className="font-gilroy-bold">{eventName}</span> não será
            possível voltar atrás!
          </p>
          <div className="btns-wrapper flex justify-center">
            <button
              onClick={() => {
                onClose();
              }}
              className="bg-green-g2 text-white-w1 font-gilroy-bold mr-[10px] w-[160px] py-[10px] rounded-md"
            >
              OK!
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);

export default CreateEventSuccessModal;
