import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { remove, updateUser2 } from 'features/user';
// import { updateUser } from 'features/apiCalls';
import Warning from '../warning/Warning';
import './Update.css';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const { user, error, pending } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const userData = {
      name,
      email,
    };

    // updateUser(userData, dispatch);
    dispatch(updateUser2(userData));
  };

  const handleDelete = () => {
    dispatch(remove());
  };

  return (
    <div className='update'>
      <div className='updateWrapper'>
        <h3 className='updateTitle'>Update Your Account</h3>
        <Warning />
        <button className='delete' onClick={handleDelete}>Delete Account</button>
        <div className='updateContainer'>
          <form>
            <div className='formItem'>
              <label>Profile Picture</label>
              <div className='profilePic'>
                <img
                  className='avatar'
                  src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <span className='change'>Change</span>
              </div>
            </div>
            <div className='formItem'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                className='formInput'
                placeholder={user?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='text'
                className='formInput'
                placeholder={user?.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                className='formInput'
                placeholder='********'
              />
            </div>
            <button
              disabled={pending}
              className='updateButton'
              onClick={handleClick}
            >
              Update
            </button>
            {error && <span className='error'>Something went wrong!</span>}
            {pending === false && (
              <span className='success'>Account has been updated!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
