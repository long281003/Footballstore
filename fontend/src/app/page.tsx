'use client'
import PayMent from '@/components/PayMent';
import x from '@/styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '@/components/SideBar';
import Appheader from '@/components/Appheader';

export default function Home() {
  return (
    <>
      <Appheader />
      <PayMent />
    </>
  )
}
