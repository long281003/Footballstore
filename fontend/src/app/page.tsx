'use client'
import PayMent from '@/components/PayMent';
import x from '@/styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '@/components/SideBar';
import Appheader from '@/components/Appheader';
import y from '@/styles/style.module.css'


export default function Home() {
  return (
    <>
      {/* <Appheader /> */}
      <div className="home-header-banner mb-5">
        <div className={y['video']}>
          <video src="/video.mp4" autoPlay loop muted />
        </div>
      </div>
      <PayMent />

    </>
  )
}
