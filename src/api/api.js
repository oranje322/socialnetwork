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
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`))

    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus (status) {
        return instance.put('profile/status/', {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    },
    login (email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')

    }



}
