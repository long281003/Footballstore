'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchGroup } from '@/services/groupService';
import { fetchCreate } from '@/services/userService';
import { fetchDiscount, fetchDiscountID } from '@/services/productServices'
const _ = require('lodash')

interface Iprops {
    blogs: Discount[]
    show: boolean;
    setShow: (value: boolean) => void
}
const ModalDiscount = (props: Iprops) => {

    const { blogs } = props;
    // console.log("check blog: ", blogs[0].condition)


    // const { show, setShow } = props; 
    const [show, setShow] = useState<boolean>(false)
    const [groupIdUser, setgroupIdUser] = useState<any>([])
    const [ActionModal, setActoinModal] = useState()
    const [dataModal, setDataModal] = useState<object>({})


    return (
        <>

            <a className='mx-1 text-stone-600' onClick={() => setShow(true)}>
                Điều kiện
            </a>

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
                        <span>Nhập mã: </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="relative dark:bg-gray-700">
                        <div className="p-4 md:p-5">
                            <div className=" text-lg font-normal text-gray-500 dark:text-gray-400"></div>
                            <div className="text-lg font-normal text-gray-500 dark:text-gray-400"></div>
                            <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
                                     hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                                      dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShow(false)}>Đóng</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalDiscount