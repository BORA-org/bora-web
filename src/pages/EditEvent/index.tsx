import React from "react";

import Button from "../../ds/components/Button";
import Input from "../../ds/components/Input";
import TextArea from "../../ds/components/TextArea";
import Date from "../../ds/components/Date";
import Time from "../../ds/components/Time";
import Cep from "../../ds/components/Cep";
import Select from "../../ds/components/Select";
import IOContext from "../../ds/components/IOContext";
import PreviewImage from "../../ds/components/PreviewImage";
import ImageInput from "../../ds/components/ImageInput";
import Section from "../../ds/components/Title";
import Money from "../../ds/components/Money";

import { UF, TYPES_TICKETS } from "../../utils/constants";

import useForm from "./hook";

const AddEvent = () => {
  const {
    formValues,
    imageValues,
    handleChange,
    handleImageSelection,
    handleImageDeletion,
    handleImageInclusion,
    handleSubmit,
  } = useForm(
    {
      title: "",
      responsible: "",
      descripton: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      localName: "",
      cep: "",
      address: "",
      number: "",
      complement: "",
      city: "",
      uf: "RN",
      nameTicket: "",
      typeTicket: "",
      priceTicket: "",
      descriptonTicket: "",
      startDateTicket: "",
      startTimeTicket: "",
      endDateTicket: "",
      endTimeTicket: "",
    },
    {
      selected: 0,
      images: [],
    }
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      {/* Seção de Anexar Imagens */}

      <Section styles="flex-row">
        <PreviewImage
          images={imageValues.images || []}
          selected={imageValues.selected}
          onSelected={handleImageSelection}
        />
        <div className="flex flex-col">
          <div className="mt-[34px]">
            <ImageInput
              text="Adicionar Imagens"
              onChange={handleImageInclusion}
            />
          </div>
          <div className="mt-[40px]">
            <Button
              text="Remover"
              textColor="text-white-w2"
              backgroundColor="bg-gray-g6"
              onClick={handleImageDeletion}
              disabled={imageValues.images.length === 0}
            />
          </div>
        </div>
      </Section>

      {/* Seção de Informações Gerais do Evento */}

      <Section styles="flex-col">
        <div className="flex flex-row">
          <IOContext label="Título  do Evento" required>
            <Input
              name="title"
              value={formValues.title}
              onChange={handleChange}
              width="w-[320px]"
              required
            />
          </IOContext>
          <IOContext label="CPF ou CNPJ" marginLeft="ml-[37px]" required>
            <Input
              name="responsible"
              value={formValues.responsible}
              onChange={handleChange}
              width="w-[333px]"
              required
            />
          </IOContext>
        </div>
      </Section>

      {/* Seção de Descrição do Evento */}

      <Section styles="flex-col">
        <IOContext label="Detalhes sobre o seu evento!" required>
          <TextArea
            name="descripton"
            value={formValues.descripton}
            onChange={handleChange}
            width="w-[690px]"
            height="h-[350px]"
            required
          />
        </IOContext>
      </Section>

      {/* Seção de Horário do Evento */}

      <Section styles="flex-row">
        <IOContext label="Início do Evento" required>
          <div className="flex flex-row">
            <Date
              name="startDate"
              value={formValues.startDate}
              onChange={handleChange}
              required
            />
            <div className="ml-[23px]">
              <Time
                name="startTime"
                value={formValues.startTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </IOContext>
        <IOContext label="Fim do Evento" marginLeft="ml-[103px]" required>
          <div className="flex flex-row">
            <Date
              name="endDate"
              value={formValues.endDate}
              onChange={handleChange}
              required
            />
            <div className="ml-[23px]">
              <Time
                name="endTime"
                value={formValues.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </IOContext>
      </Section>

      {/* Seção de Endereço do Evento */}

      <Section
        title="Endereço"
        subtitle="Preencha o endereço do evento"
        styles="flex-col"
      >
        <div className="flex flex-row mb-[40px]">
          <IOContext label="Nome do Local" required>
            <Input
              name="localName"
              value={formValues.localName}
              onChange={handleChange}
              placeholder="Insira onde acontecerá o evento"
              width="w-[520px]"
              required
            />
          </IOContext>
          <IOContext label="CEP" marginLeft="ml-[20px]">
            <Cep name="cep" value={formValues.cep} onChange={handleChange} />
          </IOContext>
        </div>
        <div className="mb-[40px]">
          <IOContext label="Endereço" required>
            <Input
              name="address"
              value={formValues.address}
              onChange={handleChange}
              placeholder="Insira o nome da rua ou avenida"
              width="w-[690px]"
              required
            />
          </IOContext>
        </div>
        <div className="flex flex-row">
          <IOContext label="Número">
            <Input
              name="number"
              value={formValues.number}
              onChange={handleChange}
              type="number"
              placeholder="001"
              width="w-[150px]"
            />
          </IOContext>
          <IOContext label="Complemento" marginLeft="ml-[37px]">
            <Input
              name="complement"
              value={formValues.complement}
              onChange={handleChange}
              width="w-[200px]"
            />
          </IOContext>
          <IOContext label="Cidade" marginLeft="ml-[37px]" required>
            <Input
              name="city"
              value={formValues.city}
              onChange={handleChange}
              width="w-[160px]"
              required
            />
          </IOContext>
          <IOContext label="Estado" marginLeft="ml-[37px]" required>
            <Select
              name="uf"
              data={UF}
              value={formValues.uf}
              onChange={handleChange}
              width="w-[70px]"
              required
            />
          </IOContext>
        </div>
      </Section>

      {/* Seção de Ingresso do Evento */}

      <Section
        title="Ingresso"
        subtitle="Preencha informações sobre o ingresso do evento"
        styles="flex-col"
      >
        <div className="flex flex-row mb-[34px]">
          <IOContext label="Nome do Ingresso" required>
            <Input
              name="nameTicket"
              value={formValues.nameTicket}
              onChange={handleChange}
              width="w-[393px]"
              required
            />
          </IOContext>
          <IOContext label="Tipo" marginLeft="ml-[25px]" required>
            <Select
              name="typeTicket"
              data={TYPES_TICKETS}
              value={formValues.typeTicket}
              onChange={handleChange}
              width="w-[120px]"
              required
            />
          </IOContext>
          <IOContext label="Preço" marginLeft="ml-[25px]" required>
            <Money
              name="priceTicket"
              value={formValues.priceTicket}
              onChange={handleChange}
              required
            />
          </IOContext>
        </div>
        <div className="mb-[34px]">
          <IOContext label="Descrição do Ticket">
            <TextArea
              name="descriptonTicket"
              value={formValues.descriptonTicket}
              onChange={handleChange}
              width="w-[690px]"
              height="h-[170px]"
            />
          </IOContext>
        </div>
        <div className="flex flex-row justify-center">
          <IOContext label="Início das Vendas" required>
            <div className="flex flex-row">
              <Date
                name="startDateTicket"
                value={formValues.startDateTicket}
                onChange={handleChange}
                required
              />
              <div className="ml-[23px]">
                <Time
                  name="startTimeTicket"
                  value={formValues.startTimeTicket}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </IOContext>
          <IOContext label="Fim das Vendas" marginLeft="ml-[103px]" required>
            <div className="flex flex-row">
              <Date
                name="endDateTicket"
                value={formValues.endDateTicket}
                onChange={handleChange}
                required
              />
              <div className="ml-[23px]">
                <Time
                  name="endTimeTicket"
                  value={formValues.endTimeTicket}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </IOContext>
        </div>
      </Section>

      <Button type="submit" text="Criar evento" />
    </form>
  );
};

export default AddEvent;
