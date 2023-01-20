export const routes = [
    {
        path: '/',
        page: () => import('@/pages/main')
    },
    {
        path: '/main',
        page: () => import('@/pages/main')
    },
    {
        path: '/news',
        page: () => import('@/pages/news')
    },
    {
        path: '/profile',
        page: () => import('@/pages/profile')
    }
]
