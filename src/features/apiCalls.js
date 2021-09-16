import { updateError, updateStart, updateSuccess } from './user';
import { editUser } from '../services/userService';

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());

    try {
        const { data } = await editUser(user);
        dispatch(updateSuccess(data));
    } catch (err) {
        dispatch(updateError());
        console.error(err);
    }
};
