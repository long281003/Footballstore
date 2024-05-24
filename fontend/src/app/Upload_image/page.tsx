'use client'
import { Container } from '@mui/material'
import { useState } from 'react'

const upload = () => {
    const [ImageFile, setImageFile] = useState([]);
    // console.log('check: ', ImageFile)
    const onFileUploadHandler = (e: any) => {
        setImageFile(e.target.files)

    }

    const Image = () => {
        return [...ImageFile].map(ImageFiles => (
            <div>
                <img src={URL.createObjectURL(ImageFiles)} width='200px' />
            </div>
        ));
    };

    const handleUpload = () => {
        Image()
    }

    return (
        <>
            <Container>
                <div>
                    <input type='file' name='file' multiple accept='image/*'
                        onChange={onFileUploadHandler} />
                    <input type='button' name='Upload' value='Upload' onClick={handleUpload} />
                </div>
            </Container>
            {Image()}
        </>

    )
}

export default upload