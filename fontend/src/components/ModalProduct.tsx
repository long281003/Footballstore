import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import z from '@/styles/style.module.css'
import { toast } from 'react-toastify';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { fetchGroup } from '@/services/groupService';
import { fetchCreateProduct } from '@/services/productServices';
const _ = require('lodash')


function ModalProduct() {
    const [show, setShow] = useState(false);

    const [groupIdProduct, setgroupIdProduct] = useState<any>([])
    const [ActionModal, setActoinModal] = useState('UPDATE')
    const [dataModal, setDataModal] = useState<object>({})
    const [PreviewIamgeUrl, setPreviewImageUrl] = useState<any>([])


    const ValidDefault = {
        name: true,
        price: true,
        description: true,
        image: true,
        groupId: true
    }

    const defaultProductData = {
        name: '',
        price: '',
        image: '',
        description: '',
        groupId: ''
    }

    const [productData, setProductData] = useState<any>(defaultProductData)
    const [ValidInputs, setValidInputs] = useState(ValidDefault)
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
    }

    const CheckValidInput = () => {
        setValidInputs(ValidDefault)
        let arr = ['name', 'price', 'image', 'description', 'groupId']
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!productData[arr[i]]) {
                let _valiInputs = _.cloneDeep(ValidDefault)
                _valiInputs[arr[i]] = false
                setValidInputs(_valiInputs)
                toast.error(`emty input ${arr[i]}`)
                check = false
                break
            }
        }
        return check
    }
    const handleOnchangeProduct = (value: any, name: any) => {
        let _productData = _.cloneDeep(productData)
        _productData[name] = value;
        setProductData(_productData)
    }

    const handleSubmit = async () => {
        let check = CheckValidInput()
        if (check === true) {
            let res = await fetchCreateProduct({ ...productData, groupId: productData['groupId'], image: productData['image'] })
            if (res && res.data && res.data.EC === 0) {
                handleClose()
                handleOnchangeImage
                setProductData({ ...defaultProductData, groupId: groupIdProduct[0].id })
                toast.success(res.data.EM)
            } else {
                toast.error(res.data.EM)
            }
        }
    }

    useEffect(() => {
        getgroupId()
        console.log('checK: ', productData.name)
        // console.log('check: ', groupIdProduct)
    }, [])
    const getgroupId = async () => {
        let res = await fetchGroup();
        if (res && res.data.EC === 1) {
            setgroupIdProduct(res.data.DT)
            if (res.data.DT && res.data.DT.length > 0) {
                let groupId = res.data.DT;
                setProductData({ ...productData, group: groupId[0].id })
            }
        } else {
            toast.error(res.data.EM)
        }
    }

    const handleUpload = () => {
        const formData = new FormData();

    }

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error)
        })
    }

    const handleOnchangeImage = async (e: any) => {
        let data = e.target.files
        let file = data[0];
        if (file) {
            let base64 = await getBase64(file)
            console.log('check: ', base64)
            let objectUrl = URL.createObjectURL(file)
            setPreviewImageUrl({
                PreviewIamgeUrl: objectUrl,
                image: base64
            })
        }
        // setPreviewImageUrl(e.target.files);
    }

    const PreviewImage = () => {
        return [...PreviewIamgeUrl].map(ImageFiles => (
            <div>
                <img src={URL.createObjectURL(ImageFiles)} width='50px' />
            </div>
        ));
    }

    return (
        <>
            <Button className='mx-1' variant="primary" onClick={handleShow}>
                Add new product
            </Button>

            <Modal
                size="lg"
                show={show}
                action={ActionModal}
                onHide={handleClose}
                className='modal-user'
                dataModal={dataModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span>{ActionModal === 'CREATE' ? 'Create new user' : 'Edit user'}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-body row'>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>name</label>
                            <input type='text' className={ValidDefault.name ? 'form-control' : 'form-control is-invalid'} placeholder='name'
                                value={productData.name} onChange={(event) => handleOnchangeProduct(event.target.value, 'name')}
                            />
                        </div >
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>price (<span className={z['red']}>*</span>):</label>
                            <input type='text' className={ValidDefault.price ? 'form-control' : 'form-control is-invalid'} placeholder='price'
                                value={productData.price} onChange={(event) => handleOnchangeProduct(event.target.value, 'price')}
                            />
                        </div>
                        <div className='col-12 form-groupId'>
                            <label>description (<span className={z['red']}>*</span>):</label>
                            <input type='text' className={ValidDefault.description ? 'form-control' : 'form-control is-invalid'} placeholder='description'
                                value={productData.description} onChange={(event) => handleOnchangeProduct(event.target.value, 'description')}
                            />
                        </div>

                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>groupId (<span className={z['red']}>*</span>):</label>
                            <select className={ValidInputs.groupId ? 'form-select' : 'form-select is-invalid'}
                                value={productData.groupId} onChange={(event) => handleOnchangeProduct(event.target.value, 'groupId')}>
                                {groupIdProduct.length > 0 && groupIdProduct.map((item: any, index: any) => {
                                    return (
                                        <option key={`groupId-${index}`} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>Image</label>
                            <div className={z['preview-image-container']}>
                                <input type="file" id="previewImg" hidden
                                    multiple
                                    accept='image/*'
                                    onChange={handleOnchangeImage} />
                                <label className={z['label-upload']} htmlFor='previewImg'>Tải ảnh <FileUploadIcon /></label>
                                <div className={z['preview-image']}
                                >
                                    <div className={z['image']}>
                                        <img src={PreviewIamgeUrl} width='50px' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-secondary' onClick={handleClose}>Close</Button>
                    <Button className='btn' onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}
export default ModalProduct