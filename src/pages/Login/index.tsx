import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AxiosResponse, AxiosError } from 'axios';
import loginImage from "../../assets/img/login.png";
import { login } from '../../services/Api/auth';

import API from "../../services/Api";

interface LoginState {
    email: string;
    password: string;
    rememberPassword: boolean;
}

interface ApiResponse {
    id_token: string;
}
  
const Login: React.FC = () => {
    const [loginState, setLoginState] = useState<LoginState>({
      email: '',
      password: '',
      rememberPassword: false,
    });
    const navigate = useNavigate();
  
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            email: loginState.email,
            password: loginState.password
        }

        API.post<ApiResponse>('/authenticate', payload)
        .then((response: AxiosResponse<ApiResponse>) => {
            login(response.data.id_token);
            console.log('Autenticação bem-sucedida!');
            navigate('/event-list')
        })
        .catch((error: AxiosError) => {
            console.log('Autenticação falhou!', error);
        });
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      const inputValue = type === 'checkbox' ? checked : value;
  
      setLoginState((prevState) => ({
        ...prevState,
        [name]: inputValue,
      }));
    };
  
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col-reverse md:flex-row rounded-3xl shadow shadow-gray-400 my-20 sm:max-w-4xl">
                    <div className="w-full md:w-11/12 bg-blue-500 rounded-l-3xl h-64 md:h-auto">
                        <img className="rounded-l-3xl" src={loginImage} alt="Logo" />
                    </div>
                    <div className="w-full md:w-8/12 p-10 flex min-h-full flex-2 flex-col justify-center bg-gradient-to-b from-amber-200 to-yellow-100 rounded-r-3xl">
                        <h2 className="text-4xl font-gilroybold mb-7 text-center font-bold leading-0 tracking-tight">Acesso ao sistema</h2>
                        <form className="space-y-6 mx-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-base font-gilroyregular leading-6 text-gray-900">
                                    Email:
                                </label>
                                <div className="scroll-pl-6">
                                    <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    required
                                    placeholder='Digite seu email'
                                    value={loginState.email}
                                    onChange={handleInputChange}
                                    className=" px-3 block w-full  h-10 rounded-2xl border-0 py-1.5 text-gray-900 shadow shadow-gray-400 placeholder:text-gray-400 font-gilroylight focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
            
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-base font-gilroyregular leading-6 text-gray-900">
                                    Senha:
                                    </label>
                                </div>
                                <div className="">
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder='Digite sua senha'
                                    value={loginState.password}
                                    onChange={handleInputChange}
                                    className=" px-3 block w-full h-10 rounded-2xl border-0 py-1.5 text-gray-900 shadow shadow-gray-400 placeholder:text-gray-400 font-gilroylight focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                   
                                    />
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="rememberPassword"
                                            checked={loginState.rememberPassword}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        <span className="text-sm font-gilroyregular">Lembrar de mim</span>
                                    </label>
                                </div>
                            </div>
            
                            <div>
                                <button
                                    type="submit" value="submit"
                                    style={{backgroundColor: "#fdcf01"}}
                                    className="mt-10 flex w-full h-10 justify-center items-center rounded-2xl text-lg font-gilroymedium leading-6 text-white shadow shadow-gray-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
  };

export default Login;