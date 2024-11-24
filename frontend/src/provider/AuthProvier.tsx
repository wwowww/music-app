import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { ReactNode, useEffect, useState } from "react";
import { Loader } from "lucide-react";

const updateApiToken = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common['Authorization']; 
}

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async() => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error: any) {
        updateApiToken(null);
        console.log("Error in auth Provider", error);
      } finally {
        setLoading(false)
      }
    }

    initAuth();
  }, [getToken]);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="size-8 text-emerald-500 animate-spin" />
    </div>
  )

  return <div>{children}</div>
}