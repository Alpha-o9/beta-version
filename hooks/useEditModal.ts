import {create} from 'zustand';

interface EditModalStore{
    isOpen:boolean;
    onOpen: ()=>void;
    onClose: ()=>void;
};


const useLoginModal = create<EditModalStore>((set) => ({
    isOpen:true,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
}));

export default useLoginModal;