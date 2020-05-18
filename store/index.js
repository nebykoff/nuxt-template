export const state = () => ({
    cats: [
        {
            id: 1,
            name: 'Сибирская кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/1.jpg',
        },
        {
            id: 2,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/2.jpg',
        },
        {
            id: 3,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/3.jpg',
        },
        {
            id: 4,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/4.jpg',
        },
        {
            id: 5,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/5.jpg',
        },
        {
            id: 6,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/6.jpg',
        },
        {
            id: 7,
            name: 'Кошка',
            tags: ['Не рыжая', 'Чистокровная', 'Паспорт имеется'],
            img: 'cats/7.jpg',
        },

    ],
});

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        console.log('Nuxt Server Init');
    }
};

export const mutations = {};
