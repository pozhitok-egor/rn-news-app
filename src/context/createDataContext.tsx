import React, { Dispatch, useReducer } from "react";

interface Action {
  type: string;
  payload?: any;
}

interface Actions {
  [key: string]: (dispatch: Dispatch<Action>) => (value?: any) => void;
}

type BoundActionsType = {
  [key: string]: () => void
}

type ContextType<T> = {
  state: T | null
}

export default (reducer: any, actions: Actions, initialState: any) => {
  const Context = React.createContext<Partial<ContextType<typeof initialState>>>({})

  const Provider:React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: BoundActionsType = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>
  }

  return { Context, Provider }
};
