'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import z from '@/styles/style.module.css'
import { toast } from 'react-toastify';
import { fetchGroup } from '@/services/groupService';
import { fetchCreate } from '@/services/userService';
const _ = require('lodash')

interface Iprops {
    blogs: Discount[]
    show: boolean;
    setShow: (value: boolean) => void
}
const ModalDiscount = (props: Iprops) => {

    const { blogs } = props;
    console.log("check blog: ", blogs[0].condition)

    const { show, setShow } = props;
    const [groupIdUser, setgroupIdUser] = useState<any>([])
    const [ActionModal, setActoinModal] = useState(blogs)
    const [dataModal, setDataModal] = useState<object>({})


    // const handleClose = () => setShow(false);
    // const handleShow = () => {
    //     setShow(true);
    // }

    // const defaultUserDate = {
    //     email: '',
    //     username: '',
    //     phonenumber: '',
    //     password: '',
    //     address: '',
    //     gender: '',
    //     groupId: '',
    // }

    // const [userData, setUserData] = useState<any>(defaultUserDate)
    // const ValidDefault = {
    //     email: true,
    //     phonenumber: true,
    //     username: true,
    //     password: true,
    //     address: true,
    //     gender: true,
    //     groupId: true
    // }
    // const [ValidInputs, setValidInputs] = useState<any>(ValidDefault)


    // const handleOnchange = (value: any, name: any) => {
    //     let _userData = _.cloneDeep(userData)
    //     _userData[name] = value;
    //     setUserData(_userData)
    // }

    // const CheckValidInput = () => {
    //     setValidInputs(ValidDefault)
    //     let arr = ['username', 'email', 'phonenumber', 'groupId']
    //     let check = true;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (!userData[arr[i]]) {
    //             let _valiInputs = _.cloneDeep(ValidDefault)
    //             _valiInputs[arr[i]] = false
    //             setValidInputs(_valiInputs)
    //             toast.error(`emty input ${arr[i]}`)
    //             check = false
    //             break
    //         }
    //     }
    //     return check
    // }

    // const handleSubmit = async () => {
    //     let check = CheckValidInput()
    //     if (check === true) {
    //         let res = await fetchCreate({ ...userData, groupId: userData['groupId'] })
    //         if (res && res.data && res.data.EC === 0) {
    //             handleClose()
    //             setUserData({ ...defaultUserDate, groupId: groupIdUser[0].id })
    //             console.log('chek: ', groupIdUser[0].id)
    //             toast.success(res.data.EM)
    //         } else {
    //             toast.error(res.data.EM)
    //         }
    //     }
    //     // setUserData('')
    // }

    // useEffect(() => {
    //     getgroupId()
    // }, [])
    // const getgroupId = async () => {
    //     let res = await fetchGroup();
    //     if (res && res.data.EC === 1) {
    //         setgroupIdUser(res.data.DT)
    //         if (res.data.DT && res.data.DT.length > 0) {
    //             let groupId = res.data.DT;
    //             setUserData({ ...userData, group: groupId[0].id })
    //         }
    //         toast.success(res.data.EM)
    //     } else {
    //         toast.error(res.data.EM)
    //     }

    // }
    return (
        <>

            <Button className='mx-1' variant="primary" onClick={() => setShow(true)}>
                Add new user
            </Button>

            <Modal
                size="lg"
                show={show}
                action={ActionModal}
                onHide={() => setShow(false)}
                className='modal-user'
            // dataModal={dataModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span>{ }</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="relative dark:bg-gray-700">
                        <div className="p-4 md:p-5">
                            <div className=" text-lg font-normal text-gray-500 dark:text-gray-400">{blogs[0].description}</div>
                            <div className="text-lg font-normal text-gray-500 dark:text-gray-400">{blogs[0].condition}</div>

                            <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, I'm sure
                            </button>
                            <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
                                     hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                                      dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShow(false)}>No, cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalDiscount