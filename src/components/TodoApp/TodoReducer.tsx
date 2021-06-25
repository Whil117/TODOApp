type Action = {
    type:string
    payload:any
}

export const todoReducer = (state: any[], action:Action) =>{
    switch (action.type) {
        case 'add':
            return [action.payload,...state]
        case 'delete':
                return state.filter((todo: { id: { id: number; title: string; desc: string; done: boolean } })=> todo.id !== action.payload)
        default:
            return state
    }
}