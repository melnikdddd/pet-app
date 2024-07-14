import Vuex from 'vuex';
import {IUser} from "@/common/types/user/user.types";
import {ModalWindow} from "@/store/modules/modal-window.module";

export interface IRootState {
    user: IUser | null;
    modalWindow: ModalWindow;
}

const store = new Vuex.Store<IRootState>({});
export default store;
