export const state = () => ({
    cats: [
        {
            id: 1,
            title: 'Сибирская кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/1.jpg',
        },
        {
            id: 2,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/2.jpg',
        },
        {
            id: 3,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/3.jpg',
        },
        {
            id: 4,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/4.jpg',
            big: true,
        },
        {
            id: 5,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/5.jpg',
        },
        {
            id: 6,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/6.jpg',
        },
        {
            id: 7,
            title: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/7.jpg',
            big: true,
        },

    ],
    socialLinks: [
        {
            name: 'Instagram',
            url: 'https://instagram.com',
        },
        {
            name: 'Facebook',
            url: 'https://fb.com',
        },
        {
            name: 'Vkontakte ',
            url: 'https://vk.com',
        },
    ],
});

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        console.log('Nuxt Server Init');
    },
};

export const getters = {
    getCat: state => id => {
        return state.cats.filter(cat => cat.id === +id)[0];
    }
};

export const mutations = {};
