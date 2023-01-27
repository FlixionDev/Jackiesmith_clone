import Store from "../Store/Store"

export const createAccdata=(data,dispatch)=>{
    dispatch({
        type:"CREATEACC",
        payload:data,
    })
}
export const logAuth=(data,dispatch)=>{
    dispatch({
        type:"LOGAUTH",
        payload:data,
    })
}
export const actionCart=(arr,dispatch)=>{
    dispatch({
        type:"ADDTOCART",
        payload:arr,
    })
}
export const actiontotal=(data,dispatch)=>{
    dispatch({
        type:"TOTALAMT",
        payload:data,
    })
}
export const deleteProduct=(data,dispatch)=>{
    dispatch({
        type:"DELETE",
        payload:[...data],
    })
}