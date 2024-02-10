"use client"; 
// marca que es un componente del lado del cliente
// Recolectar info y enviarla al backend - con NEXT js estamos trayendo gran parte del backend
// sacando la necesidade de metodo o hooks de react como , componeDidMount - useEffect - entre otras cosas

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

// axios tira una falla po que se pisa on al de typescritpt


export default function SignupPage(){

    const router = useRouter() // Next method


    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const [ buttonDisabled, setButtonDisabled] = React.useState(false)

    // Casi siempre cuando se consulta una base de datos , se usa la asyncronia
    const onSignup = async () => {
    }

    React.useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />

            {/* Username - Input */}
            <label htmlFor="username">username</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})} 
                placeholder="username"
                />


            {/* Email - Input */}
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})} 
                placeholder="email"
                />


            {/* Password - Input */}
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})} 
                placeholder="password"
                />


            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                { buttonDisabled ? "No signup" : "Signup" }
            </button>

            <Link href={"/login"}>Visit Login Page</Link>

        </div>
    )
}

 