import {useFetch, UseFetchArguments} from "../libs/useFetch.ts";
import {useMockRequest, UseMockUpArguments} from "@/shared/libs/useMockRequest.ts";

export type RepositoryArguments<T, U> = Omit<UseFetchArguments<T, U>, 'METHOD'>;

export default{
    post<Response, Request>(arg: RepositoryArguments<Response, Request>){
        return useFetch<Response, Request>({METHOD: 'POST', ...arg})
    },

    get<Response, Request>(arg: RepositoryArguments<Response, Request>){
        return useFetch<Response, Request>({METHOD: 'GET', ...arg})
    },

    async test<Response>(arg: UseMockUpArguments<Response>){
        const request = useMockRequest<Response>(arg)
        try{
            const response = await request
            console.log(response)
        } catch (e){
            console.log(e)
        }
        return request
    },
}
