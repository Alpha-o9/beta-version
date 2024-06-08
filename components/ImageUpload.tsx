import {useDropzone} from 'react-dropzone';
import {useCallback,useEffect} from 'react';

interface ImageUploadProps{
    label:string;
    value?:string;
    disabled?:boolean;
}
const ImageUpload:REACT.FC<ImageUploadProps> = ({
    onChange,
    label,
    value,
    disabled
})=>{
    const [base64,setBase64] = useState(value);
    return (
        <div>
        </div>
    )
}

export default ImageUpload;