import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from './firebase';

class AuthService {
  auth = getAuth()
  
  async login(provider) {
    try {
      const result = await signInWithPopup(this.auth, provider);
      console.log(`로그인 결과 ${result.user}`)
      const user = result.user;
      return result
    } catch (error) {
      console.log(error.message);
    }
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user)
    })
  }

  logout() {
    this.auth.signOut()
  }
}

export default AuthService