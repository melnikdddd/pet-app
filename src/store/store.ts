import Vuex from 'vuex';
import {IUser} from "@/common/types/user/user.types";

export interface IRootState {
    user: IUser | null;
}

const store = new Vuex.Store<IRootState>({});
export default store;
