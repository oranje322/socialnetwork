import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9179f9ad-aa07-46b5-abd1-3602fafa972f'}
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
        ).then(response => response.data)
    },
    unfollow(userId) {
        return (instance.delete(`follow/${userId}`))
    },
    follow(userId) {
        return (instance.post(`follow/${userId}`))
    },
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`))

    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    }



}
