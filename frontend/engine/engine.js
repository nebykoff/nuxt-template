import Vue from 'vue';

/**
 * SCSS
 **/
import './engine.scss';

/**
 * Import Components
 **/
// import Button from '~/engine/button/Button';

const components = [
    // Button,
];

/**
 * Install Engine
 **/
components.forEach(component => {
    Vue.component(component.name, component);
});
