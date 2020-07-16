import { useState, useEffect, useRef } from "react";

interface user {
  isLogin: boolean,
  userName: string,
}

export default function useLoginData () {
  
  const [user, setUser] = useState<user>({
    isLogin: false,
    userName: ''
  })

  let setInt = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    setInt.current = setTimeout(() => {
      const login = localStorage.getItem('cloudUser')
      if (login) {
        setUser({
          isLogin: true,
          userName: login
        })
      }
    }, 1000)

    return () => {
      if (setInt.current) {
        clearInterval(setInt.current)
      }
    };
  }, []);

  return user
}