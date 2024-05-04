import {create} from 'zustand';

interface loginModalStore{
    isOpen:boolean;
    onOpen: ()=>void;
    onClose: ()=>void;
};

const useLoginModal = create<loginModalStore>((set)=>({
    isOpen:true,
    onOpen: ()=>set({isOpen:true}),
    onClose: ()=>set({isOpen:false})
}));

export default useLoginModal;