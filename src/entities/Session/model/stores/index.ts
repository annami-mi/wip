import {defineStore} from "pinia";
import {useCookie} from "@/shared/libs/useCookie.ts";
import {TOKEN_KEY} from "@/shared/config";
import {ref} from "vue";
import {generateId} from "@/shared/libs/generate.ts";

export const useSessionStore = defineStore('session', () => {
    const { value: tokenValue, setCookieValue: setCookieValue } = useCookie(TOKEN_KEY, '')
    const token = ref(tokenValue)

    function setToken(value: string) {
        token.value = value
        setCookieValue(value)
    }

    const authUser = () => {
        if(token.value){
            return
        } else {
            setToken(generateId())
        }
    }

    return{
        token,
        authUser,
    }
})
