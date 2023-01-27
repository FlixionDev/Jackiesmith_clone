var init={
    CreatedAcc:[
        
    ],
    Cart:[

    ],
    isAuth:false,
    total:0,
};
export const Reducer=(data=init,action)=>{
    switch(action.type){
        case "CREATEACC":{
            
            return {
                ...data,
                CreatedAcc:[action.payload]
            }
        }
        case "LOGAUTH":{
            
            return {
                ...data,
                isAuth:action.payload
            }
        }
        case "ADDTOCART":{
            
            return {
                ...data,
                Cart:[...data.Cart,action.payload]
            }
        }
        case "TOTALAMT":{
            
            return {
                ...data,
                total:action.payload,
            }
        }
        case "DELETE":{
            return {
                ...data,
                Cart:action.payload
            }
        }
        default:{
            return data
        }
    }
    // return data;
}