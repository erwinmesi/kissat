/* eslint-disable react-refresh/only-export-components */
import { Breed } from '@/types'
import { createContext, ReactNode, useContext, useState } from 'react'

interface AppContextType {
  selectedBreed: Breed | null;
  setSelectedBreed: (breed: Breed | null) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

// Create the AppContext
const AppContext = createContext<AppContextType>({
  selectedBreed: null,
  setSelectedBreed: () => {},
})

// Wrapper Component to provide the AppContext to its children
export function AppProvider({ children }: AppProviderProps) {
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null)

  return (
    <AppContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext)
