import { usePathname } from 'next/navigation';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import z from '@/styles/payment.module.css'
import x from '@/styles/css.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '50ch',
//         },
//     },
// }));


const SideBar = () => {

    const pathname = usePathname()

    const user = useSelector((state: any) => {
        return state.auth.loginUser.currenUser
    })
    const dispatch = useDispatch()

    // const item = useSelector((state: any) => {
    //     return state.cart
    // })
    const { items } = useSelector((state: any) => {
        return state.cart
    })

    return (
        <div>

            {pathname !== '/Login' && pathname !== '/Register' ?
                <>
                    <div className='my-3'>
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 1 }}
                                            className='mx-4'
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Image
                                            src="/logo.png"
                                            width={60}
                                            height={60}
                                            alt='Logo store'
                                        />
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 1 }}
                                            className='ms-4'
                                            href='/'
                                        >
                                            <HomeIcon />
                                        </IconButton>
                                        {/* <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search> */}
                                    </Nav>

                                    {user ? (
                                        <Nav>
                                            <div>
                                                <span>{user.username}</span>
                                            </div>
                                        </Nav>
                                    ) : (
                                        <Nav>
                                            {/* <Nav className="">
                                                <Image className='cursor-pointer' src='/icon-user.webp' width={26} height={26} alt='icon-user' />
                                                <ul className='border border-indigo-600'>
                                                    <li><Link href='/Login' className="no-underline list-image-none text-black my-4">Log in</Link></li>
                                                    <li><Link href='/Register' className="no-underline list-image-none text-black">Register</Link></li>
                                                </ul>
                                            </Nav> */}

                                            {/* <div className="relative inline-block text-left">
                                                <div className="group">
                                                     <a type="button"
                                                         className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                                         Open Menu
                                                         <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                         </svg>
                                                     </a>
                                                     <div
                                                         className="absolute left-0 w-40 mt-1 origin-top-left bg-slate-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                         <div className="py-1">
                                                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div> */}
                                        </Nav>
                                        // <div className="flex mr-3 relative">
                                        //     <div className="relative">
                                        //         <a className="group relative flex mx-2 mb-1 no-underline text-black  ">
                                        //             <Image src='/icon-user.webp' width={26} height={26} alt='icon-user' />
                                        //             <span className='mx-1'>Tài khoản</span>
                                        //         </a>
                                        //         <div className="w-56 border absolute bg-slate-200 group-hover:visible">
                                        //             <div className=' hover:border-b w-30 border-current mx-2 my-3'><a href="/Register" className=' block ml-6 no-underline text-black' title="Đăng ký">Đăng ký</a></div>
                                        //             <div className=' hover:border-b w-30 border-current mx-2 my-3 '><a href="/Login" className='block ml-6 no-underline text-black border-b-2 ' title="Đăng nhập">Đăng nhập</a></div>
                                        //             <div className=' hover:border-b w-30 border-current mx-2 mx-2 my-3'><a href="/checkout" className='block ml-6 no-underline text-black ' >Thanh toán</a></div>
                                        //             <div className=' hover:border-b w-30 border-current mx-2 my-3'><a href="/tra-cuu-don-hang" className='block ml-6 no-underline text-black ' >Đơn hàng</a></div>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                    )}
                                    {/* <div>
                                        <Link href='/Cart'>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{ mr: 1 }}
                                                className='ms-2 text-black'
                                            >
                                                <ShoppingCartIcon />
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <div className={z['icon-cart']}>
                                        <span className={z['count']}>{items.length}</span>
                                    </div> */}
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <div className='mx-5'>
                            <hr />
                        </div>
                    </div>
                </>
                :
                <>
                </>
            }
        </div>
    )

}

// const mapStateToProps = (state: any) => {
//     return {
//         count: state.counter.count,
//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         increaseCounter: () => dispatch(increaseCounter()),

//         decreaseCounter: () => dispatch(decreaseCounter()),
//     }
// }

export default SideBar