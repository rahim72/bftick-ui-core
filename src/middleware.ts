import {  NextResponse } from "next/server";
import type {NextRequest} from "next/server"
// import AuthUserService from "./lib/server/AuthUser";

let isLoggedIn: boolean = true;
export async function middleware(request: NextRequest) {
  // const data = await AuthUserService();
  // let token = request.cookies.get("access-token");
  // // console.log(token);
  // if(token?.value){
  //   if(data){
  //     isLoggedIn = true;
  //   }
  // }else{
  //   isLoggedIn = false;
  // }

  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login-otp", request.url));
}

export const config = {
  matcher: ['/v1","/v1/admin','/v1/admin/:path*']
};
