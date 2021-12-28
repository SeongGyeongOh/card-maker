import { getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseApp } from './firebase';

class AuthService {
  async login(provider) {
    const auth = getAuth()
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default AuthService