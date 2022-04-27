import { signInWithPopup } from "firebase/auth"
import { providerG } from "../Providers/auth"
import { auth } from "../../../../config/fireBaseConnecting"

const SignInGoogle = async()=>{
     await signInWithPopup(auth, providerG)
     .then((v)=>{
        console.log("Sucesso no login"+v)
     }).catch((err)=>{
            console.log("Não foi possível efetuar o login")
     });
}

const SignOutGoogle = async()=>{
    await auth.signOut()
    .then(()=>{
        console.log("Sucesso no logout");
        setTimeout(()=>{window.location = "/"},2000)
    }
    ).catch((err)=>{
        console.log("Não foi possível efetuar o logout")
    }
    );
}

export { SignInGoogle, SignOutGoogle }