import { FC, useReducer, useContext } from 'react'
import { SidebarContext } from '.'

interface ISidebarProviderProps {
  reducer: any
  initialState: {}
}

export const SidebarProvider: FC<ISidebarProviderProps> = ({
  reducer,
  initialState,
  children
}): JSX.Element => {
  return (
    <SidebarContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarValue = () => useContext(SidebarContext)
