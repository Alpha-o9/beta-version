import {useState,useCallback} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {signIn} from 'next-auth/react';


import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';



const RegisterModal = ()=>{
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [isLoading,setIsLoading] = useState('');


    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    },[isLoading,registerModal,loginModal]);

    const onSubmit = useCallback (async ()=>{
        try{
            setIsLoading(true);
                await axios.post('/api/register',{
                    email,
                    password,
                    username,
                    name
                });
                
                toast.success('Account Created!');

                signIn('credentials',{
                    email,
                    password
                });

            registerModal.onClose();
        }catch (error) {
            console.log(error);
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              toast.error(error.response.data.error || 'Something went wrong!');
            } else if (error.request) {
              // The request was made but no response was received
              toast.error('No response from the server');
            } else {
              // Something happened in setting up the request that triggered an Error
              toast.error('An error occurred while sending the request');
            }
          } finally {
            setIsLoading(false);
          }
        }, [registerModal, email, password, username, name]);

    const bodyContent = (
        <div className = "flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value = {email}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Name"
                onChange = {(e)=>setName(e.target.value)}
                value = {name}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Username"
                onChange = {(e)=>setUsername(e.target.value)}
                value = {username}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Password"
                onChange = {(e)=>setPassword(e.target.value)}
                value = {password}
                type = 'password'
                disabled = {isLoading}
                />
        </div>
    )
    const footerContent = (
        <div className = "text-neutral-400 text-center mt-4">
            <p> Already have an account?</p>
            <span onClick = {onToggle}
                className="
                    text-white
                    cursor-white
                    cursor-pointer
                    hover:underline">Log In</span>
        </div>
    )
        return (

            <Modal 
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Create an Account"
                actionLabel="Sign up"
                onClose={registerModal.onClose}
                onSubmit = {onSubmit}
                body = {bodyContent}
                footer = {footerContent} />
        );
}

export default RegisterModal;

/*
import {useState,useCallback} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {signIn} from 'next-auth/react';


import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';



const RegisterModal = ()=>{
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [isLoading,setIsLoading] = useState('');


    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    },[isLoading,registerModal,loginModal]);

    const onSubmit = useCallback (async ()=>{
        try{
            setIsLoading(true);
                await axios.post('/api/register',{
                    email,
                    password,
                    username,
                    name
                });
                
                toast.success('Account Created!');

                signIn('credentials',{
                    email,
                    password
                });

            registerModal.onClose();
        }catch(error){
            console.log(error);
            toast.error("something went Wrong!");
        }finally{
            setIsLoading(false);
        }
    },[registerModal,email,password,username,name]);

    const bodyContent = (
        <div className = "flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value = {email}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Name"
                onChange = {(e)=>setName(e.target.value)}
                value = {name}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Username"
                onChange = {(e)=>setUsername(e.target.value)}
                value = {username}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Password"
                onChange = {(e)=>setPassword(e.target.value)}
                value = {password}
                type = 'password'
                disabled = {isLoading}
                />
        </div>
    )
    const footerContent = (
        <div className = "text-neutral-400 text-center mt-4">
            <p> Already have an account?</p>
            <span onClick = {onToggle}
                className="
                    text-white
                    cursor-white
                    cursor-pointer
                    hover:underline">Log In</span>
        </div>
    )
        return (

            <Modal 
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Create an Account"
                actionLabel="Sign up"
                onClose={registerModal.onClose}
                onSubmit = {onSubmit}
                body = {bodyContent}
                footer = {footerContent} />
        );
}

export default RegisterModal;*/