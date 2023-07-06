import React from 'react';
import { ReactComponent as Logout } from '../../assets/img/sign_out.svg';
import Button from '../../ds/components/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo_white.png';

import './styles.css';
import { Card } from './Card';

export const EventList = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-g1">
            <header className="bg-blue-b1 text-white-w1 pt-4 pb-4 pl-40 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-12" />
                    <span className="ml-2 text-3xl font-gilroy-bold">BORA? PRODUTOR</span>
                </div>
                <div className="flex items-center gap-14">
                    <div className="flex items-center">
                        <div className="circle-image mr-2 bg-white-w1" />
                        <div>
                            <p className="font-gilroy-medium">John Doe</p>
                            <p className="text-sm font-gilroy-light">john.doe@example.com</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 pr-20 text-base font-gilroy-regular" onClick={() => {}}>
                        <Logout className="w-6 h-6" />
                        Sair
                    </button>
                </div>
            </header>
            <main className='ml-30 mr-30 flex flex-col items-center'>
                <Button text="Criar evento" onClick={() => navigate('/add-event')}/>
                <div>
                    <h1 className='font-gilroy-bold text-3xl text-black-b1 text-opacity-70'>
                        Eventos publicados
                    </h1>
                </div>
                <Card />
            </main>
        </div>
    );
};
