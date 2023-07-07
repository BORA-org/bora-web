import { ChangeEvent, FormEvent, useState } from "react";
import { AxiosResponse } from "axios";

import SwalMixin from "../../ds/components/SwalMixin";
import { Image } from "../../ds/components/PreviewImage";

import { Event } from "../../models/Event";
import { Location } from "../../models/Location";
import { Ticket } from "../../models/Ticket";

import API from "../../services/Api";

import { convertDateTime, convertToNumber } from "../../utils/converters";

type ImageValues = {
    selected: number;
    images: Image[];
}

type FormValues = {
    title: string;
    responsible: string;
    urlImage: string;
    descripton: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    localName: string;
    cep: string;
    address: string;
    number: string;
    complement: string;
    city: string;
    uf: string;
    nameTicket: string;
    typeTicket: string;
    priceTicket: string;
    descriptonTicket: string;
    startDateTicket: string;
    startTimeTicket: string;
    endDateTicket: string;
    endTimeTicket: string;
};

const useForm = (initialFormValues: FormValues, initialImageValues: ImageValues) => {
    const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
    const [imageValues, setImageValues] = useState<ImageValues>(initialImageValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleImageSelection = (selected: number) => {
        setImageValues(prevValues => ({
            ...prevValues,
            selected,
        }));
    };

    const handleImageDeletion = () => {
        setImageValues(prevValues => ({
            ...prevValues,
            selected: 0,
            images: imageValues.images.filter((_, i) => i !== imageValues.selected),
        }));
    };

    const handleImageInclusion = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const imagemPreview = e.target?.result as string;
                const images: Image[] = imageValues.images;
                /** Add multiple images
                images.push({
                    name: file.name,
                    value: imagemPreview,
                });
                */
                images[0] = {
                    name: file.name,
                    value: imagemPreview,
                };
                setImageValues(prevValues => ({
                    ...prevValues,
                    images,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleValidate = (): boolean => {
        return true;
    };

    const getLocation = (): Location => {
        return {
            latitude: 0,
            longitude: 0,
            number: formValues.number,
            address: formValues.address,
            city: formValues.city,
            state: formValues.uf,
            country: 'Brasil',
        } as Location;
    };

    const getTicket = (): Ticket => {
        return {
            price: convertToNumber(formValues.priceTicket),
            name: formValues.nameTicket,
            type: formValues.typeTicket,
        } as Ticket;
    };

    const getEvent = (location: AxiosResponse<Location>, ticket: AxiosResponse<Ticket>): Event => {
        return {
            title: formValues.title,
            organization: formValues.responsible,
            urlImage: formValues.urlImage,
            dateStart: convertDateTime(formValues.startDate, formValues.startTime),
            dateEnd: convertDateTime(formValues.endDate, formValues.endTime),
            description: formValues.descripton,
            location: location.data,
            ticket: ticket.data,
        } as Event;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (handleValidate()) {
            try {
                const locationResponse: AxiosResponse<Location> = await API.post('locations', getLocation());
                console.log(locationResponse);
                try {
                    const ticketResponse: AxiosResponse<Ticket> = await API.post<Ticket>('tickets', getTicket());
                    console.log(ticketResponse);
                    try {
                        const eventResponse: AxiosResponse<Event> = await API.post<Event>('events', getEvent(locationResponse, ticketResponse));
                        if (eventResponse.status >= 200 && eventResponse.status < 300) {
                            SwalMixin.fire({
                                icon: 'success',
                                title: 'Evento criado com Sucesso!',
                                text: `O evento "${formValues.title}" foi criado com sucesso!`,
                            }).then(result => {
                                if (result.isConfirmed) {
                                    window.location.pathname = '/event-list';
                                }
                            });
                        }
                    } catch (error) {
                        SwalMixin.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ocorreu um problema ao registrar o evento',
                        });
                        console.error('Error to register event:', error);

                    }
                } catch (error) {
                    SwalMixin.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocorreu um problema ao registrar o ticket',
                    });
                    console.error('Error to register location:', error);
                }
            } catch (error) {
                SwalMixin.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um problema ao registrar o endereço',
                });
                console.error('Error to register ticket:', error);
            }
        }
    };

    return {
        formValues,
        imageValues,
        handleChange,
        handleImageSelection,
        handleImageDeletion,
        handleImageInclusion,
        handleSubmit
    };
};

export default useForm;