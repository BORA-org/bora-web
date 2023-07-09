import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';

import Button from '../../ds/components/Button';
import { Header } from '../../ds/components/Header';
import SwalMixin from '../../ds/components/SwalMixin';
import { Card } from './Card';

import { Event } from '../../models/Event';
import API from '../../services/Api';

import './styles.css';
import { userState } from '../../store/user';
import { getToken } from '../../services/Api/auth';

export const EventList = observer(() => {
    const [events, setEvents] = useState<Event[]>([]);
    const publishedEvents = events.filter((item) => item.isPublic);
    const pendingEvents = events.filter((item) => !item.isPublic);

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

        if (userState.token !== '' || getToken() !== '') {
            getEvents();
        }

    }, []);

    return (
        <div className="bg-gray-g1 flex flex-col min-h-screen">
            <Header />
            <main className='flex-grow w-2/5 mx-auto flex flex-col mt-12 pb-10'>
                <Button width='w-100' text="+ Criar evento" onClick={() => navigate('/add-event')} />
                {events.length === 0 && (
                    <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                        Nenhum evento encontrado
                    </h1>
                )}

                {publishedEvents.length > 0 && (
                    <Fragment>
                        <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                            Eventos publicados
                        </h1>
                        <div className="flex flex-col gap-10">
                            {publishedEvents.map((event) => (
                                <Card key={event.id} event={event} />
                            ))} 
                        </div>
                    </Fragment>
                )}
                
                {pendingEvents.length > 0 && (
                    <Fragment>
                        <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                            Eventos pendentes
                        </h1>
                        <div className="flex flex-col gap-10">
                        {pendingEvents.map((event) => (
                            <Card key={event.id} event={event} />
                        ))}
                        </div>
                    </Fragment>
                )}
            </main>
        </div>
    );
});
