type Action = {
  type: string;
  payload: any;
};

export const todoReducer = (state: any[], action: Action) => {
  switch (action.type) {
    case "add":
      return [action.payload, ...state];
    case "delete":
      return state.filter(
        (todo: {
          id: { id: number; title: string; desc: string; done: boolean };
        }) => todo.id !== action.payload
      );
    case "check":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
