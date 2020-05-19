<template>
    <header :class="$style.TheHeader">
        <nuxt-link to="/">
            <img src="@/assets/images/logo.png"
                 alt="Кошки">
        </nuxt-link>
        <ul :class="$style.TheHeader__menu">
            <li>
                <nuxt-link
                    :active-class="$style.active"
                    exact
                    to="/">
                    Кошки
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                        :active-class="$style.active"
                        to="/contacts">
                    Контакты
                </nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {};
</script>

<style lang="scss" module>
    .TheHeader {
        display: flex;
        justify-content: space-between;
        height: 96px;
        padding: 18px 0;

        &__menu {
            display: flex;
            margin-top: 16px;

            li {
                display: block;
                margin-left: 42px;
                text-transform: uppercase;
                font-size: 12px;
            }
        }

        .active {
            font-weight: bold;
        }
    }
</style>