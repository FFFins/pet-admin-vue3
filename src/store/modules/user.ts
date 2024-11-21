import { defineStore } from 'pinia'
import { store } from '~/store'
import { UserLoginType, UserType } from '~/api/login/types'
import { ElMessageBox } from 'element-plus'
import request from "~/axios";

export const loginOutApi = (): Promise<IResponse> => {
    return request.get({ url: '/mock/user/loginOut' })
}

export interface UserType {
    username: string
    password: string
    role: string
    roleId: string
}

export interface UserLoginType {
    username: string
    password: string
}

interface UserState {
    userInfo?: UserType
    tokenKey: string
    token: string
    roleRouters?: string[] | AppCustomRouteRecordRaw[]
    rememberMe: boolean
    loginInfo?: UserLoginType
}

export const useUserStore = defineStore('user', {
    state: (): UserState => {
        return {
            userInfo: undefined,
            tokenKey: 'Authorization',
            token: '',
            roleRouters: undefined,
            rememberMe: true,
            loginInfo: undefined
        }
    },
    getters: {
        getTokenKey(): string {
            return this.tokenKey
        },
        getToken(): string {
            return this.token
        },
        getUserInfo(): UserType | undefined {
            return this.userInfo
        },
        getRoleRouters(): string[] | AppCustomRouteRecordRaw[] | undefined {
            return this.roleRouters
        },
        getRememberMe(): boolean {
            return this.rememberMe
        },
        getLoginInfo(): UserLoginType | undefined {
            return this.loginInfo
        }
    },
    actions: {
        setTokenKey(tokenKey: string) {
            this.tokenKey = tokenKey
        },
        setToken(token: string) {
            this.token = token
        },
        setUserInfo(userInfo?: UserType) {
            this.userInfo = userInfo
        },
        setRoleRouters(roleRouters: string[] | AppCustomRouteRecordRaw[]) {
            this.roleRouters = roleRouters
        },
        logoutConfirm() {
            ElMessageBox.confirm(('Are you sure to logout?'), {
                confirmButtonText: "Yes",
                cancelButtonText:"Cancel",
                type: 'warning'
            })
                .then(async () => {
                    const res = await loginOutApi().catch(() => {})
                    if (res) {
                    }
                })
                .catch(() => {})
        },
        setRememberMe(rememberMe: boolean) {
            this.rememberMe = rememberMe
        },
        setLoginInfo(loginInfo: UserLoginType | undefined) {
            this.loginInfo = loginInfo
        },
        removeToken() {
            this.token = null;
            localStorage.removeItem('token');
        },
    },
    persist: true
})

export const useUserStoreWithOut = () => {
    return useUserStore(store)
}
