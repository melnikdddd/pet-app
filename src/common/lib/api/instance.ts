import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class BaseApi {
    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    protected async get<T = any>(path: string): Promise<AxiosResponse<T>> {
        try {
            return await this.instance.get<T>(path);
        } catch (error) {
            console.error('GET request error', error);
            throw error;
        }
    }

    protected async post<T = any>(path: string, payload: any): Promise<AxiosResponse<T>> {
        try {
            return await this.instance.post<T>(path, payload);
        } catch (error) {
            console.error('POST request error', error);
            throw error;
        }
    }

    protected async delete<T = any>(path: string): Promise<AxiosResponse<T>> {
        try {
            return await this.instance.delete<T>(path);
        } catch (error) {
            console.error('DELETE request error', error);
            throw error;
        }
    }

    protected async put<T = any>(path: string, payload: any): Promise<AxiosResponse<T>> {
        try {
            return await this.instance.put<T>(path, payload);
        } catch (error) {
            console.error('PUT request error', error);
            throw error;
        }
    }
}