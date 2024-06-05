
const Appheader = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between mx-3 px-5  p-2">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col  md:p-0 md:flex-row ">
                        <li className="group" >
                            <a href="/" className="text-stone-500 group-hover:text-black border-b-red-500 group-hover:border-b-2 font-bold px-4 no-underline ">Trang chủ</a>
                        </li>
                        <li className="group relative" >
                            <a href="#" className="flex font-bold text-stone-500 group-hover:text-black border-b-red-500 group-hover:border-b-2  no-underline px-3  ">Về WholngSport  <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></a>
                            <div id="dropdownNavbar" className=" hidden group-hover:block  absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-40">
                                <ul className=" py-2 text-base  ">
                                    <li>
                                        <a href="/Wholng" className="block  py-2 no-underline text-stone-500 hover:text-red-600 ">Trải nghiệm web</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Khách hàng vip</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a href="#" className="flex text-stone-500 group-hover:text-black group-hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Giày đá bóng <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></a>
                            <div id="dropdownNavbar" className=" hidden group-hover:block absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-base ">
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Tất cả sản phẩm</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Hàng mới về</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Giày cỏ tự nhiên</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Giày cỏ nhân tạo</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Giày FUTSAL</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Giày giá rẻ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Giày trẻ em</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block pr-3 py-2 no-underline text-stone-500 hover:text-red-600 ">Phiên bản giới hạn</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a href="#" className="flex text-stone-500 group-hover:text-black group-hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Thương hiệu <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></a>
                            <div id="dropdownNavbar" className="hidden group-hover:block absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-base ">
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày NIKE</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block  py-2 no-underline text-stone-500 hover:text-red-600">Giày ADIDAS</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày PUMA</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày MIZUNO</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày ASICS</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày KAMITO</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày MIZUNO</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày ASICS</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày KAMITO</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày ZOCKER</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày NMS</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Giày JOMA</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a href="#" className="flex text-stone-500 group-hover:text-black group-hover:border-b-2 border-b-red-500 block font-bold no-underline px-3 ">Phụ kiện <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></a>
                            <div id="dropdownNavbar" className="hidden group-hover:block absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-base  " >
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Bọc ống đồng</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Quả bóng</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Quần áo bóng đá chính hãng</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Balo túi xách</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Huy chương</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a href="#" className="flex text-stone-500 group-hover:text-black group-hover:border-b-2 border-b-red-500 block font-bold px-4 no-underline " >Dịch vụ <svg className="ml-2 mt-2 w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></a>
                            <div id="dropdownNavbar" className="hidden group-hover:block absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-base ">
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">BOOT ID giày</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">In balo-Túi hộp-Áo</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600">Sửa chữa giày đá bóng</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group relative">
                            <a href="#" className="block text-stone-500 group-hover:text-black group-hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Hướng dẫn</a>
                        </li>
                        <li className="group relative">
                            <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Tin tức giày</a>
                        </li>
                        <li className="group relative">
                            <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Hệ thống cửa hàng</a>
                        </li>
                        <li className="group relative">
                            <a href="#" className="block text-stone-500 hover:text-black hover:border-b-2 border-b-red-500 font-bold px-3 no-underline " >Tuyển dụng</a>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    )
}
export default Appheader