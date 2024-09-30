import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import  router  from "@/router";


const auth = getAuth();
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user){
    //Faça funcionar a persistencia de login.
  }
})

setPersistence(auth, browserLocalPersistence);

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      displayName: "",
      email: "",
      photoURL: "",
      accessToken: "",
    },
  }),
  actions: {
    async login() {
      const result = await signInWithPopup(auth, provider);
      this.user = result.user;
      router.push("/admin/dashboard");
    },
    async logout() {
      await signOut(auth);
      this.user = {};
      this.user.accessToken = '';
      router.push("/login");
    }
  },
  getters: {
    isLogin: (state) => !!state.user.accessToken,
  }
});
