import { persist } from "mobx-persist";
import { action, observable } from "mobx";
import { User } from "../models/User";

class UserStore {
    @persist @observable name: string = '';
    @persist @observable email: string = '';
    @persist @observable token: string = '';

    @action
    setUser = (user: User) => {
        this.name = user.name;
        this.email = user.email;
    };

    @action
    setToken = (token: string) => {
        this.token = token;
    };
}

export const userState = new UserStore();