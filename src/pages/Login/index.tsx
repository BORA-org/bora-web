import React, { useState } from 'react';
import axios, {AxiosResponse, AxiosError } from 'axios';
import loginImage from "../../assets/img/login.png";

interface LoginState {
    cpfCnpj: string;
    password: string;
    rememberPassword: boolean;
}

interface ApiResponse {
    token: string;
}
  
const Login: React.FC = () => {
    const [loginState, setLoginState] = useState<LoginState>({
      cpfCnpj: '',
      password: '',
      rememberPassword: false,
    });
  
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            email: loginState.cpfCnpj,
            password: loginState.password
        }

        axios.post<ApiResponse>('/api/autenticacao', payload)
        .then((response: AxiosResponse<ApiResponse>) => {
            // Autenticação bem-sucedida, você pode obter o token de autenticação ou outras informações relevantes da resposta
            const token = response.data.token;
            console.log('Autenticação bem-sucedida!');
        })
        .catch((error: AxiosError) => {
            // Autenticação falhou, exiba uma mensagem de erro ou tome outras medidas apropriadas
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
  
    const handleForgotPassword = () => {
      // Lógica para lidar com a recuperação de senha
    };
  
    return (
        <>
        <div className="grid grid-cols-2 divide-x rounded-full" style={{margin: "200px"}}>
            <div className="flex min-h-full flex-2 flex-col justify-center">
                <img src={loginImage} alt="Logo" />
            </div>
            <div>
                <div className="flex min-h-full flex-2 flex-col justify-center" style={{backgroundColor: "#ffeda0"}}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center font-bold leading-0 tracking-tight text-gray-900"  style={{fontSize: "30px"}}>
                            Acesso ao sistema
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="cpfCnpj" className="block text-sm font-medium leading-6 text-gray-900">
                                    CPF/CNPJ:
                                </label>
                                <div className="mt-2 scroll-pl-6">
                                    <input
                                    id="cpfCnpj"
                                    name="cpfCnpj"
                                    type="text"
                                    autoComplete="cpfCnpj"
                                    required
                                    placeholder='Digite seu CPF ou CNPJ'
                                    value={loginState.cpfCnpj}
                                    onChange={handleInputChange}
                                    className=" px-3 rounded-lg block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
            
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha:
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder='Digite sua senha'
                                    value={loginState.password}
                                    onChange={handleInputChange}
                                    className=" px-3 rounded-lg block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300 sm:text-sm sm:leading-6"
                                   
                                    />
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="rememberPassword"
                                            checked={loginState.rememberPassword}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        <span className="text-sm">Lembrar de mim</span>
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold hover:text-indigo-500">
                                            Esqueceu a senha?
                                        </a>
                                    </div>
                                </div>
                            </div>
            
                            <div>
                                <button
                                    type="submit" value="submit"
                                    style={{backgroundColor: "#fdcf01", boxShadow: "#808080 0px 2px 4px"}}
                                    className="mt-10 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Entrar
                                </button>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    style={{backgroundColor: "#ffeda0", boxShadow: "#808080 0px 2px 4px"}}
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Não tenho conta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
  };

export default Login;