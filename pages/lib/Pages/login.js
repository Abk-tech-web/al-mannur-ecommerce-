import { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
      alert(err.message);
    }
  };

  const sendOtp = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, auth);
    signInWithPhoneNumber(auth, '+234' + phone, window.recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmResult(confirmationResult);
        alert('OTP sent');
      })
      .catch((err) => alert(err.message));
  };

  const verifyOtp = () => {
    confirmResult.confirm(otp)
      .then(() => alert('OTP verified'))
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <h3>Email Login</h3>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={loginWithEmail}>Login</button>
      </div>

      <div>
        <h3>Phone Login (OTP)</h3>
        <input placeholder="Phone (080...)" onChange={(e) => setPhone(e.target.value)} />
        <button onClick={sendOtp}>Send OTP</button>
        <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
        <button onClick={verifyOtp}>Verify</button>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
  }
