"use client"; // marca que es un componente del lado del cliente

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function SignupPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })


    const onSignup = async () => {

    }


    return (
        <div className="flex">
            <h1 className="text-center text-amber-300 text-4xl">Signup</h1>



           
        </div>
    )
}

 // Recolectar info y enviarla al backend - con NEXT js estamos trayendo gran parte del backend
// sacando la necesidade de metodo o hooks de react como , componeDidMount - useEffect - entre otras cosas