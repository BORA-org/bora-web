import React, { ChangeEvent } from "react";
import Button from "../Button";
import { ReactComponent as Exclamation } from "../../../assets/img/exclamation.svg";
import { ReactComponent as CloseBtn } from "../../../assets/img/close.svg";

interface RemoveEventModalProps {
  eventName: string;
  show: boolean;
  onClose: () => void;
}

const RemoveEventModal = ({
  eventName,
  show,
  onClose,
}: RemoveEventModalProps) => (
  <>
    {show && (
      <div className="fixed h-screen w-screen bg-black-b1 bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-g1 w-[480px] h-[385px] z-50 text-center flex flex-col justify-around p-[40px] rounded-md relative">
          <button
            className="absolute top-0 right-0 p-[8px]"
            onClick={() => {
              onClose();
            }}
          >
            <CloseBtn />
          </button>
          <Exclamation className="w-[100px] h-[100px] mx-auto" />
          <h2 className="text-5xl font-gilroy-bold text-gray-g5">
            Tem certeza?
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
              className="bg-gray-g6 text-white-w1 font-gilroy-bold mr-[10px] w-[160px] py-[10px] rounded-md"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                //
              }}
              className="bg-red-r1 text-white-w1 font-gilroy-bold ml-[10px] w-[160px] py-[10px] rounded-md"
            >
              Sim, excluir evento!
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);

export default RemoveEventModal;
