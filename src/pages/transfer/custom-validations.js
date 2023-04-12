import {api} from "./trasnsfer.api"

const validatortype = "ValidatorAccount";

export const myValidator = (value, id) => {
    const validationResult = {
        succeeded: false,
        type: validatortype,
        message: "Excede el saldo de la cuenta"
    }
    api.getAccount(id).then(result => {
     return result.data.balance <= value? {
        ...validationResult,
        succeeded: true,
        message: ""
     }:validationResult
        
      })}
    
