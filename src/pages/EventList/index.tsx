import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../ds/components/Button';
import { Header } from '../../ds/components/Header';
import SwalMixin from '../../ds/components/SwalMixin';
import { Card } from './Card';

import { Event } from '../../models/Event';
import API from '../../services/Api';

import './styles.css';

export const EventList = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await API.get('events');
                setEvents(response.data);
            } catch(err) {
                SwalMixin.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um problema ao recuperar os eventos',
                });
            }
        };

        getEvents();
    }, []);

    return (
        <div className="bg-gray-g1 flex flex-col min-h-screen">
            <Header />
            <main className='flex-grow w-2/5 mx-auto flex flex-col mt-12 pb-10'>
                <Button width='w-100' text="+ Criar evento" onClick={() => navigate('/add-event')} />
                <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                    {events.length === 0 
                        ?'Nenhum evento encontrado' 
                        : 'Eventos pendentes'
                    }
                </h1>
                <div className="flex flex-col gap-10">
                    {events.map((item) => (
                        <Card key={item.id} event={item} />
                    ))}
                </div>
            </main>
        </div>
    );
};
