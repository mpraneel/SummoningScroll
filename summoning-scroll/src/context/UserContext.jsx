import { auth, db } from "../firebase/firebase"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            const userRef = doc(db, "users", authUser.uid)
            const userSnap = getDoc(userRef)
            setUser({ ...authUser, ...userSnap.data()})
        })

        return () => unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{ setUser, user }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}