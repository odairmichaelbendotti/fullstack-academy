"use client";
import { ReactNode, useEffect } from "react";
import { useUser } from "@/store/user";
import { fetchWrapper } from "@/lib/fetch-wrapper/client";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setUser } = useUser();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetchWrapper({
          url: "/api/user/me",
          method: "POST",
        });

        if (!response?.ok) {
          return setUser(null);
        }

        const data = await response?.json();
        setUser(data);
      } catch (error) {
        return console.error("Erro ao verificar autenticação:", error);
      }
    }
    checkAuth();
  }, [setUser]);

  return <>{children}</>;
};

export default AuthProvider;
