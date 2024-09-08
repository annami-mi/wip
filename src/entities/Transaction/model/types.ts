import {Payment} from "../../Payment/model/types.ts";
import {Price} from "../../Price/model/types.ts";

export interface Transaction extends Price{
    payment: Payment
}
