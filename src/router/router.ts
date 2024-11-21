import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import {useUserStoreWithOut} from "~/store/modules/user";
import {ElMessage} from "element-plus";
import HomePageView from "~/components/HomePageView.vue";
import SignUpView from "~/components/SignUpView.vue";
import LoginView from "~/components/LoginView.vue";
import AdminPageView from "~/components/AdminPageView.vue";
import TermsPage from "~/components/layouts/TermsPage.vue";
import NotFound from "~/components/layouts/errors/NotFound.vue";
import AdminViewTask from "~/components/layouts/admin/AdminViewTask.vue";
import AdminCreateTask from "~/components/layouts/admin/AdminCreateTask.vue";
import AdminManageTask from "~/components/layouts/admin/AdminManageTask.vue";
import AdminViewTaskHistory from "~/components/layouts/admin/task/AdminViewTaskHistory.vue";
import AdminMessage from "~/components/layouts/admin/message/AdminMessage.vue";

const routes = [
    { path: '/home', component: HomePageView },
    { path: '/signup', component: SignUpView },
    { path: '/login', component: LoginView },
    { path: '/signup/terms', component: TermsPage },
    { path: '/admin', component: AdminPageView,
        children: [
            {
                path: 'viewTask',
                component: AdminViewTask,
            },
            {
                path: '',
                redirect: '/admin/viewTask',
            },
            {
                path: 'createTask',
                component: AdminCreateTask,
            },
            {
                path: 'manageTask',
                component: AdminManageTask,
            },
            {
                path: 'history',
                component: AdminViewTaskHistory
            },
            {
                path: 'message',
                component: AdminMessage
            },
        ],
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    Memory: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.path === '/') {
        return { path: '/home' };
    }
});

router.beforeEach(async (to, from) => {
    const userStore = useUserStoreWithOut();
    let isAuthenticated = !!userStore.getToken;
    console.log('IsAuthenticated:', isAuthenticated);

    if (isAuthenticated && (to.path == '/login' || to.path == '/signup')) {
        return { path: '/admin' };
    }
    else if (!isAuthenticated && to.path == '/admin' ) {
        console.log('Redirecting to login page.');
        ElMessage.success('You have not signed in!')
        return { path: '/login' };
    }
});

export default router;