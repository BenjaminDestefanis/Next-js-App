import { NextRequest, NextResponse } from "next/server";

// This function can be marked 'async' if using 'await' inside

export function middleware( request: NextRequest){
    // The token cant' see for others users
    const path = request.nextUrl.pathname // a Public Path

    const isPublicPath = path === '/login' || path === '/signup' // this two path , public , in this path i can't see the token

    const token = request.cookies.get('token')?.value || '' // Si esta el token - lo elimina

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl)) // redirecciona
    }
    
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more

export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}