import { ArrowDropDown } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import './NavBar.css';

const NavBar = () => {
    const { user } = useSelector((state) => state.user);

    console.log('Navbar re-rendered');
    return (
        <div className='navbar'>
            <div className='navbarWrapper'>
                <div className='navbarLeft'>
                    <span className='logo'>Redux App</span>
                    <span className='navbarLink'>Home</span>
                    <span className='navbarLink'>About</span>
                    <span className='navbarLink'>Contact</span>
                </div>
                <div className='navbarCenter'>
                    <div className='search'>
                        <input
                            type='text'
                            placeholder='search for something...'
                            className='searchInput'
                        />
                    </div>
                </div>
                <div className='navbarRight'>
                    <img
                        className='avatar'
                        src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                        alt=''
                    />
                    <span className='navbarName'>{user?.name}</span>
                    <ArrowDropDown />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
