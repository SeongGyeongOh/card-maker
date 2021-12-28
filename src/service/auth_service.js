import { getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseApp } from './firebase';

class AuthService {
  async login(provider) {
    const auth = getAuth()
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(`로그인 결과 ${result}`)
      // const credential = provider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      return result
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default AuthService