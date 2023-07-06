import React from 'react';
import Button from '../../ds/components/Button';
import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import { Header } from '../../ds/components/Header';
import './styles.css';

export const EventList = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-g1 flex flex-col min-h-screen">
            <Header />
            <main className='flex-grow w-2/5 mx-auto flex flex-col mt-12 pb-10'>
                <Button width='w-100' text="+ Criar evento" onClick={() => navigate('/add-event')} />
                <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                    Eventos publicados
                </h1>
                <div className="flex flex-col gap-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70 mt-12 mb-2'>
                    Eventos pendentes
                </h1>
                <div className="flex flex-col gap-10">
                    <Card />
                </div>
            </main>
        </div>
    );
};
