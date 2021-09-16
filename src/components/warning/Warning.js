import { useSelector } from 'react-redux';

import './Warning.css';

const Warning = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className='warning'>
            Deleting account cannot be undone <b>{user?.name}</b>! You should confirm your
            password to delete your account.
        </div>
    );
};

export default Warning;
