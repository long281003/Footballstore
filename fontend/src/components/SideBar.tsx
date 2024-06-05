import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
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
                                            <div className="flex mr-3 relative ">
                                                <div className="group relative">
                                                    <a className="flex cursor-pointer mx-2 mb-1 no-underline text-black  ">
                                                        <Image src='/icon-user.webp' width={26} height={26} alt='icon-user' />
                                                        <span className='mx-1'>Tài khoản</span>
                                                    </a>
                                                    <div id="dropdownNavbar" className=" hidden group-hover:block absolute z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul className="py-2 text-base ">
                                                            <li>
                                                                <a href="/Register" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Đăng ký</a>
                                                            </li>
                                                            <li>
                                                                <a href="/Login" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Đăng nhập</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Thanh toán</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 no-underline text-stone-500 hover:text-red-600 ">Đơn hàng</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Nav>

                                    )}
                                    <div>
                                        <span className="absolute right-32 top-1 ">{items.length}</span>
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