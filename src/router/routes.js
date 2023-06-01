
const routes = [
    { path: '/', component: () => import('../pages/Home.vue'), name: 'Home' },
    { path: '/country/:name', component: () => import('../pages/Country/CountryDetails.vue'), name: 'country-profile' }
]

export default routes