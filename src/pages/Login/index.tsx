import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AxiosResponse, AxiosError } from 'axios';
import loginImage from "../../assets/img/login.png";
import { login } from '../../services/Api/auth';
import Button from '../../ds/components/Button';

import API from "../../services/Api";
import SwalMixin from '../../ds/components/SwalMixin';

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
            navigate('/event-list')
        })
        .catch((error: AxiosError) => {
            SwalMixin.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro au autenticar usuário, por favor, tente novamente!',
            });
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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col-reverse md:flex-row rounded-3xl shadow shadow-gray-400 my-20 sm:max-w-4xl">
                <div className="w-full md:w-11/12 rounded-l-3xl h-64 md:h-auto">
                    <img className="rounded-l-3xl" src={loginImage} alt="Logo" />
                </div>
                <div className="w-full md:w-8/12 p-10 flex min-h-full flex-2 flex-col justify-center bg-gradient-to-b from-amber-200 to-yellow-100 rounded-r-3xl">
                    <h2 className="pb-2 text-4xl my-swal-title mb-7 text-center leading-0 tracking-tight">Acesso ao sistema</h2>
                    <form className="space-y-6 mx-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-base my-swal-label leading-6 text-gray-900">
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
                                className=" px-3 block w-full h-11 rounded-2xl border-0 py-1.5 text-gray-900 shadow-3xl placeholder:text-gray-400 my-swal-placeholder focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
        
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-base my-swal-label leading-6 text-gray-900">
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
                                className=" px-3 block w-full h-11 rounded-2xl border-0 py-1.5 text-gray-900 shadow-3xl placeholder:text-gray-400 my-swal-placeholder focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                
                                />
                            </div>
                        </div>
                        <div className="space-y-8 pt-10">
                            <Button
                                type="submit"
                                value="submit"
                                text="Entrar"
                                width='w-[100%]'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  };

export default Login;