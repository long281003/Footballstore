
import y from '@/styles/style.module.css'
import { Container } from '@mui/material'
const Appheader = () => {
    return (
        <>
            <nav className="">
                <div className="flex flex-wrap items-center justify-between mx-3 px-5  p-2">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col  md:p-0 md:flex-row ">
                            <li>
                                <a href="/" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-4 no-underline ">Trang chủ</a>
                            </li>
                            <li className="group relative" >
                                <a href="#" className="flex inline-block font-bold text-stone-500 hover:text-black hover:border-b-2 border-b-red-500  block no-underline px-3  ">Về WholngSport  <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></a>
                                <div id="dropdownNavbar" className="invisible absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600 group-hover:visible">
                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-400">
                                        <li>
                                            <a href="#" className="block py-2 no-underline hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trải nghiệm web</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 no-underline hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Khách hàng vip</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className=" flex text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Giày đá bóng <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></a>
                                <div id="dropdownNavbar" className="invisible absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-47 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tất cả sản phẩm</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hàng mới về</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày cỏ tự nhiên</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày cỏ nhân tạo</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày FUTSAL</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày giá rẻ</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày trẻ em</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block pr-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Phiên bản giới hạn</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="flex text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Thương hiệu <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></a>
                                <div id="dropdownNavbar" className="invisible absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-45 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block pr-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng NIKE</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block pr-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng ADIDAS</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng PUMA</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng MIZUNO</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng ASICS</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng KAMITO</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng MIZUNO</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng ASICS</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng KAMITO</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng ZOCKER</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng NMS</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Giày đá bóng JOMA</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="flex text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Phụ kiện <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></a>
                                <div id="dropdownNavbar" className="invisible absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bọc ống đồng</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Quả bóng</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Quần áo bóng đá chính hãng</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Balo túi xách</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Huy chương</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="flex text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 block font-bold px-4 no-underline " >Dịch vụ <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></a>
                                <div id="dropdownNavbar" className="invisible absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BOOT ID giày</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">In balo-Túi hộp-Áo</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sửa chữa giày đá bóng</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Hướng dẫn</a>
                            </li>
                            <li>
                                <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Tin tức giày</a>
                            </li>
                            <li>
                                <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Hệ thống cửa hàng</a>
                            </li>
                            <li>
                                <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Tuyển dụng</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="home-header-banner mb-5">
                <div className={y['video']}>
                    <video src="/video.mp4" autoPlay loop muted />
                </div>
            </div>

        </>
    )
}
export default Appheader