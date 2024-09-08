import {RouteRecordRaw} from "vue-router";
import {route as UnsuccessfulPage} from "./unsuccessful";
import {route as TransactionPage} from "./transaction";
import {route as SuccessfulPage} from "./successful";
import {route as EnjoyPage} from "./enjoy";

export const routes: readonly RouteRecordRaw[] = [
    UnsuccessfulPage,
    TransactionPage,
    SuccessfulPage,
    EnjoyPage
] as const
