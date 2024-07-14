import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";
import {IUser} from "@/common/types/user/user.types";

@Module({name: 'user', store, dynamic: true})
class UserStore extends VuexModule {
    user: null | IUser = null;

    get currentUser(): IUser | null {
        return this.user
    }

    @Mutation
    setUser(user: IUser) {
        this.user = user;
    }

    @Mutation
    removeUserState() {
        this.user = null;
    }

    @Action
    updateUser(user: IUser) {
        this.context.commit('setUser', user);
    }

    @Action
    clearUser() {
        this.context.commit('removeUserState');
    }

}

const UserModule = getModule(UserStore);

export default UserModule;
