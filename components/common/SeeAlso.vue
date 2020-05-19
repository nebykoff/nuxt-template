<template>
    <div :class="$style.SeeAlso">
        <div :class="$style.SeeAlso__title">СМОТРИТЕ ТАКЖЕ</div>
        <div :class="$style.SeeAlso__link">
            <nuxt-link :to="link.url">
                {{ link.title }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SeeAlso',

        props: {
            link: {
                type: Object,
                required: true,
            }
        }
    };
</script>

<style module lang="scss">
    .SeeAlso {
        height: 214px;
        padding: 50px 160px;
        background-color: $clr-gray;

        &__title {
            color: $clr-dark-gray;
        }

        &__link a {
            position: relative;
            display: inline-block;
            max-width: 350px;
            margin-top: 14px;
            padding-right: 70px;
            font-size: 28px;
            line-height: 140%;

            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 15px;
                width: 52px;
                height: 10px;
                background: url('~@/assets/images/next-arrow.svg');
            }
        }
    }
</style>