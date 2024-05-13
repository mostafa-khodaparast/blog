import { CategoryProps, NavLink } from "@/types/types";

export const navlinks: NavLink[] = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Contact',
        path: '#contact'
    },
    {
        title: 'About',
        path: '#about'
    },
]

export const categories: CategoryProps[] = [
    {
        title: 'Style',
        image: '/images/style.svg',
        path: '/style',
        color: '#A5DD9B'
    },
    {
        title: 'Fashion',
        image: '/images/fashion.svg',
        path: '/fashion',
        color: '#F2C18D'
    },
    {
        title: 'Food',
        image: '/images/food.svg',
        path: '/food',
        color: '#CA8787'
    },
    {
        title: 'Travel',
        image: '/images/travel.svg',
        path: '/travel',
        color: '#FDA403'
    },
    {
        title: 'Culture',
        image: '/images/culture.png',
        path: '/culture',
        color: '#F6995C'
    },
    {
        title: 'Coding',
        image: '/images/coding.svg',
        path: '/coding',
        color: '#41C9E2'
    }
]

export const cardList = [
    {
        id: 1,
        date: '2024-12-14',
        category: 'culture',
        description: 'description description description description',
        image: '/images/culture.png'
    },
    {
        id: 2,
        date: '2024-12-14',
        category: 'culture',
        description: 'description description description description',
        image: '/images/culture.png'
    }, {
        id: 3,
        date: '2024-12-14',
        category: 'culture',
        description: 'description description description description',
        image: '/images/culture.png'
    }

]