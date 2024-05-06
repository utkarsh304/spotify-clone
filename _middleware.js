import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({req, secret: process.env.JWT_SECRET});
    const { pathname } = req.nextUrl;

    // Allow the req if :- 
    // 1) It's a req for next-auth session & provider fetching.
    // 2) token exists
    if(pathname.includes("/api/auth" || token)){
        return NextResponse.next();
    }

    // Redirect them to login if they don't have token AND are requesting a protected route :-
    if(!token && pathname !== '/login'){
        return NextResponse.redirect('/login');
    }
}