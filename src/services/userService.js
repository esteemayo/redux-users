import http from './httpService';

const apiEndPoint = '/123/update';

export function editUser(userData) {
    return http.post(apiEndPoint, userData);
};
