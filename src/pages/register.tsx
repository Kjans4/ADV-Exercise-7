import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDewS_OwUGOWmrRdvAHBD747OCGaBmXPpA",
  authDomain: "exercise-7-adv.firebaseapp.com",
  projectId: "exercise-7-adv",
  storageBucket: "exercise-7-adv.appspot.com",
  messagingSenderId: "948490468974",
  appId: "1:948490468974:web:dfa31a97e610ff68f4f07f",
  measurementId: "G-N42BWH57ZC"
};

initializeApp(firebaseConfig);

type RegisterFormInputs = {
  email: string;
  password: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; /* Light gray background */
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc; /* Gray border */
  background-color: #fff; /* White background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
  border-radius: 8px; /* Rounded corners */
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm


  <RegisterFormInputs>();
const [error, setError] = useState<string | null>(null);

const onSubmit = async (data: RegisterFormInputs) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    console.log('Successfully registered:', userCredential.user);
  } catch (error: any) {
    console.error('Registration failed:', error.message);
    setError(error.message);
  }
};



  return (
    <Container>
      <FormContainer>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Email is required and must be valid</span>}
          </FormGroup>
          
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && <span>Password is required and must be at least 8 characters long</span>}
          </FormGroup>

          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;
