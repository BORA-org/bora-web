import { action, observable } from "mobx";
import { User } from "../models/User";

class UserStore {
    @observable name: string = '';
    @observable email: string = '';
    @observable token: string = '';

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