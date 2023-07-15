import Logo from '../../../assets/img/logo_white.png';
import { ReactComponent as Logout } from '../../../assets/img/sign_out.svg';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/Api/auth';
import { observer } from 'mobx-react';
import { userState } from '../../../store/user';
import { useEffect } from 'react';
import { User } from '../../../models/User';
import API from '../../../services/Api';

export const Header = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfos = async () => {
      try {
        const userResponse = await API.get<User>(`/admin/users/${userState.email}`);

        userState.setUser({
          name: userResponse.data.name,
          email: userResponse.data.email
        });
      } catch(err) {

      }
    };

    getUserInfos();
  }, []);

  return (
    <header className="bg-blue-b1 text-white-w1 pt-3 pb-3 pl-20 pr-20 flex justify-between items-center">
      <div className="flex items-center">
          <button onClick={() => navigate('/event-list')}>
            <img src={Logo} alt="Logo" className="w-12" />
          </button>
          <div className="ml-4">
            <p className="text-xl font-gilroy-bold">BORA?</p>
            <p className="text-xl font-gilroy-bold">PRODUTOR</p>
          </div>
      </div>
      <div className="flex items-center gap-14">
          <div className="flex items-center">
              <div className="circle-image mr-2 bg-white-w1" />
              <div>
                <p className="font-gilroy-medium">{userState.name}</p>
                <p className="text-sm font-gilroy-light">{userState.email}</p>
              </div>
          </div>
          <button 
            className="flex items-center gap-2 text-base font-gilroy-regular" 
            onClick={() => {
              logout();
              userState.setToken('');
              navigate('/');
            }}
          >
            <Logout className="w-6 h-6" />
            Sair
          </button>
      </div>
    </header>
  );
});
