import { ChangeEvent, useState } from "react";
import toast from 'react-hot-toast';
import { ErrorInterface } from "../interface/ErrorInterface";
import { UserInterface } from "../interface/UserInterface";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const context = useAuth();
  const navigate = useNavigate()
  const [user, setUser] = useState<UserInterface>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorInterface>({
    email: false,
    password: false,
  });

  function isValidEmail(email: string): boolean {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.dismiss();


    setError(() => ({
      email: user.email === '' || user.email === null || !isValidEmail(user.email),
      password: user.password === '' || user.password === null,
    }));

    if (user.email && isValidEmail(user.email) && user.password) {
      toast.promise(
        context.signIn(user),
        {
          loading: <b>Logging in...</b>,
          success: <b>Succesfully logged in!</b>,
          error: <b>Wrong credentials</b>,
        }
      );
    } else {
      toast.error("Invalid email or password")
    }

  }

  async function handleLogOut() {
    await context.signOut();
    toast.success('Successfully logged out!')
  }

  async function handleSendResetPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.dismiss();

    setError((prevState) => ({
      ...prevState,
      email: user.email === '' || user.email === null || !isValidEmail(user.email),
    }));

    if (user.email && isValidEmail(user.email)) {
      toast.success('Successfully sent an email to your account!')
    } else {
      toast.error("Invalid email")
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  function goToLogin() {
    navigate('/')
  }

  return {
    user,
    error,
    handlePasswordChange,
    handleEmailChange,
    handleLogin,
    handleLogOut,
    handleSendResetPassword,
    goToLogin
  }
}