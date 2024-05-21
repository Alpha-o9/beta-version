/*import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useState, useCallback } from 'react';
import Input from '../Input';
import Modal from '../Modal';

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModal.onOpen();
        loginModal.onClose();
    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // authentication logic

            loginModal.onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using Twitter?</p>
            <span
                onClick={onToggle}
                className="
                text-white
                cursor-pointer
                hover:underline
            ">
                Create an Account
            </span>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;
*/
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useState, useCallback } from 'react';
import Input from '../Input';
import Modal from '../Modal';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName]  = useState('');
    const [userName,setUserName] = useState('');
    const [isLoading, setIsLoading] = useState('');

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // Authentication logic here ToDo Register

            RegisterModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder = "Name"
                onChange = {(e)=>setName(e.target.value)}
                value = {name}
                disabled = {isLoading}
                />
            <Input 
                placeholder = "Username"
                onChange = {(e)=>setUserName(e.target.value)}
                value = {userName}
                disabled = {isLoading}
                />
            
            <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
                type="password"
            />

        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account?</p>
            <span
                onClick={onToggle}
                className="text-white cursor-pointer hover:underline"
            >
                Sign In
            </span>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an Account"
            actionLabel="Sign up"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;
