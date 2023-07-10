import React, { useState, useEffect, ReactNode } from "react";

type UserContextType = {
  token: string | null;
  setToken: (token: string) => void;
};

export const UserContext = React.createContext<UserContextType>({
  token: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToken: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("access_token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
