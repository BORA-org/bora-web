import { ChangeEvent, FormEvent, useState } from "react";

import { Image } from "../../ds/components/PreviewImage";
import { post } from "../../services/Api";
import { Event } from "../../models/Event";
import { Location } from "../../models/Location";
import { Ticket } from "../../models/Ticket";

import { convertDateTime, convertToNumber } from "../../utils/converters";

type ImageValues = {
    selected: number;
    images: Image[];
}

type FormValues = {
    title: string;
    responsible: string;
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
                images.push({
                    name: file.name,
                    value: imagemPreview,
                });
                setImageValues(prevValues => ({
                    ...prevValues,
                    images,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const getLocation = (): Location => {
        return {
            number: formValues.number,
            address: formValues.address,
            city: formValues.city,
            state: formValues.uf,
        } as Location;
    };

    const getTicket = (): Ticket => {
        return {
            price: convertToNumber(formValues.priceTicket),
            name: formValues.nameTicket,
            type: formValues.typeTicket,
        } as Ticket;
    };

    const getEvent = (location: Location, ticket: Ticket): Event => {
        return {
            title: formValues.title,
            organization: formValues.responsible,
            dateStart: convertDateTime(formValues.startDate, formValues.startTime),
            dateEnd: convertDateTime(formValues.endDate, formValues.endTime),
            description: formValues.descripton,
            location,
            ticket,
        } as Event;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const api: string = 'http://3.139.60.209/v3/api';
        try {
            const locationResponse = await post<Location>(`${api}/locations`, getLocation());
            console.log(locationResponse);
            try {
                const ticketResponse = await post<Ticket>(`${api}/tickets`, getTicket());
                console.log(ticketResponse);
                try {
                    const eventResponse = await post<Event>(`${api}/events`, getEvent(locationResponse, ticketResponse));
                    console.log(eventResponse);
                } catch (error) {
                    console.error('Error to register event:', error);

                }
            } catch (error) {
                console.error('Error to register ticket:', error);
            }
        } catch (error) {
            console.error('Error to register location:', error);
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