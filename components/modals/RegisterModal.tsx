import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal'
import {useState,useCallback} from 'react';
import Input from '../Input';
import Modal from '../Modal';



const RegisterModal = ()=>{
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email,setEmal] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [userName,setUseName] = useState('');
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
                //Authentication 

            registerModal.onClose();
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    },[registerModal]);

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
                onChange = {(e)=>setEmail(e.target.value)}
                value = {name}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Username"
                onChange = {(e)=>SetUserName(e.targer.value)}
                value = {userName}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Password"
                onChange = {(e)=>setPassword(e.target.value)}
                value = {password}
                disabled = {isLoading}
                />
        </div>
    )
    const footerContent = (
        <div className = "text-neutral-400 text-center-mt-4">
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
                isOpen={RegisterModal.isOpen}
                title="Create an Account"
                actionLabel="Sign up"
                onClose={RegisterModal.onClose}
                onSubmit = {onSubmit}
                body = {bodyContent}
                footer = {footerContent} />
        );
}

export default RegisterModal;