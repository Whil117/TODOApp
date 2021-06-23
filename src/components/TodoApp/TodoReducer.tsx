type Action = {
    type:string
    payload:{
        id:number
        title:string
        desc:string
        done:boolean
    }
}
export const todoReducer = (state = [], action:Action) =>{
    switch (action.type) {
        case 'add':
            return [action.payload,...state]
        default:
            return state
    }
}