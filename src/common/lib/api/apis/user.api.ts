import {BaseApi} from "@/common/lib/api/instance";

class UserApi extends BaseApi {
    public async signIn(phone: string, password: string) {
        return await this.post('/auth/sign-in', {phone, password});
    }

    public async signUp(phone: string, password: string) {
        return await this.post('/auth/sign-up', {phone, password});
    }
}

export default new UserApi();