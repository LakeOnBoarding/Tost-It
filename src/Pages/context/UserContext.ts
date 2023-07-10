import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextType {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);
