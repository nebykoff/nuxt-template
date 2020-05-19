<template>
    <footer :class="$style.TheFooter">
        <div :class="$style.TheFooter__contacts">
            <div :class="$style.TheFooter__phone">
                <a href="tel:+74954567812">+7 (495) 456-78-12</a>
            </div>

            <div :class="$style.TheFooter__email">
                <a href="mailto:welcome-cats@cat.ru">welcome-cats@cat.ru</a>
            </div>
        </div>
        <div :class="$style.TheFooter__social">
            <SocialLinks :links="$store.state.socialLinks"/>
        </div>
    </footer>
</template>

<script>
    import SocialLinks from '~/components/common/SocialLinks';

    export default {
        components: {
            SocialLinks,
        },
    };
</script>

<style lang="scss" module>
    .TheFooter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: $footer-h;
        margin: 0 -50px;
        margin-top: 80px;
        padding: 0 50px;
        font-size: 18px;
        background-color: $clr-gray;

        &__contacts {
            display: flex;
        }

        &__phone {
            margin-right: 62px;
        }
    }
</style>
