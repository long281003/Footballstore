import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import z from '@/styles/style.module.css'
import { toast } from 'react-toastify';
import { fetchGroup } from '@/services/groupService';
import { fetchCreate } from '@/services/userService';
const _ = require('lodash')
function ModalUser() {
    const [show, setShow] = useState(false);
    const [groupIdUser, setgroupIdUser] = useState<any>([])
    const [ActionModal, setActoinModal] = useState('UPDATE')
    const [dataModal, setDataModal] = useState<object>({})


    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const defaultUserDate = {
        email: '',
        username: '',
        phonenumber: '',
        password: '',
        address: '',
        gender: '',
        groupId: '',
    }

    const [userData, setUserData] = useState<any>(defaultUserDate)
    const ValidDefault = {
        email: true,
        phonenumber: true,
        username: true,
        password: true,
        address: true,
        gender: true,
        groupId: true
    }
    const [ValidInputs, setValidInputs] = useState<any>(ValidDefault)


    const handleOnchange = (value: any, name: any) => {
        let _userData = _.cloneDeep(userData)
        _userData[name] = value;
        setUserData(_userData)
    }

    const CheckValidInput = () => {
        setValidInputs(ValidDefault)
        let arr = ['username', 'email', 'phonenumber', 'groupId']
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (!userData[arr[i]]) {
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

    const handleSubmit = async () => {
        let check = CheckValidInput()
        if (check === true) {
            let res = await fetchCreate({ ...userData, groupId: userData['groupId'] })
            if (res && res.data && res.data.EC === 0) {
                handleClose()
                setUserData({ ...defaultUserDate, groupId: groupIdUser[0].id })
                console.log('chek: ', groupIdUser[0].id)
                toast.success(res.data.EM)
            } else {
                toast.error(res.data.EM)
            }
        }
        // setUserData('')
    }

    useEffect(() => {
        getgroupId()
    }, [])
    const getgroupId = async () => {
        let res = await fetchGroup();
        if (res && res.data.EC === 1) {
            setgroupIdUser(res.data.DT)
            if (res.data.DT && res.data.DT.length > 0) {
                let groupId = res.data.DT;
                setUserData({ ...userData, group: groupId[0].id })
            }
            toast.success(res.data.EM)
        } else {
            toast.error(res.data.EM)
        }

    }
    return (
        <>
            <Button className='mx-1' variant="primary" onClick={handleShow}>
                Add new user
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
                            <label>username</label>
                            <input type='text' className={ValidInputs.username ? 'form-control' : 'form-control is-invalid'} placeholder='username'
                                value={userData.username} onChange={(event) => handleOnchange(event.target.value, 'username')} />
                        </div >
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>email (<span className={z['red']}>*</span>):</label>
                            <input type='text' className={ValidInputs.email ? 'form-control' : 'form-control is-invalid'} placeholder='email'
                                value={userData.email} onChange={(event) => handleOnchange(event.target.value, 'email')} />
                        </div>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>phonenumber (<span className={z['red']}>*</span>):</label>
                            <input type='text' className={ValidInputs.phonenumber ? 'form-control' : 'form-control is-invalid'} placeholder='phonenumbernumber'
                                value={userData.phonenumber} onChange={(event) => handleOnchange(event.target.value, 'phonenumber')} />
                        </div>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>password (<span className={z['red']}>*</span>):</label>
                            <input type='password' className={ValidInputs.password ? 'form-control' : 'form-control is-invalid'} placeholder='password'
                                value={userData.password} onChange={(event) => handleOnchange(event.target.value, 'password')} />
                        </div>
                        <div>
                            <label>address</label>
                            <input type='text' className={ValidInputs.address ? 'form-control' : 'form-control is-invalid'} placeholder='address'
                                value={userData.address} onChange={(event) => handleOnchange(event.target.value, 'address')} />
                        </div>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>gender</label>
                            <select className='form-select' value={userData.gender} onChange={(event) => handleOnchange(event.target.value, 'gender')}>
                                <option defaultValue="Male" >Male</option>
                                <option value="Famale">Female</option>
                                <option value="Othor">Other</option>
                            </select>
                        </div>
                        <div className='col-12 col-sm-6 form-groupId'>
                            <label>groupId (<span className={z['red']}>*</span>):</label>
                            <select className={ValidInputs.groupId ? 'form-select' : 'form-select is-invalid'} value={userData.groupId} onChange={(event) => handleOnchange(event.target.value, 'groupId')}>
                                {groupIdUser.length > 0 && groupIdUser.map((item: any, index: any) => {
                                    return (
                                        <option key={`groupId-${index}`} value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
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
export default ModalUser