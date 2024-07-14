import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";

export enum ModalWindow {
    HIDDEN = 'hidden',
    AUTH = 'auth',
}

@Module({name: 'modal-window', store, dynamic: true})
class ModalWindowStore extends VuexModule {
    modalWindow: | ModalWindow = ModalWindow.HIDDEN;

    get currentModalWindow(): ModalWindow {
        return this.modalWindow
    }

    @Mutation
    setModalWindow(modalWindow: ModalWindow) {
        this.modalWindow = modalWindow;
    }

    @Mutation
    clearModalWindow() {
        this.modalWindow = ModalWindow.HIDDEN;
    }

    @Action
    showModalWindow(modalWindow: ModalWindow) {
        this.context.commit('setModalWindow', modalWindow);
    }

    @Action
    hideModalWindow() {
        this.context.commit('clearModalWindow');
    }
}

const ModalWindowModule = getModule(ModalWindowStore);

export default ModalWindowModule;