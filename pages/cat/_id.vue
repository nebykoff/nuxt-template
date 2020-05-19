<template>
    <div :class="$style.CatDetail">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        <div :class="$style.CatDetail__info">
            <ul>
                <li>место: Vel pharetra vel turpis nunc eget lorem dolor sed viverra.</li>
                <li>статус: Condimentum lacinia quis</li>
                <li>архитектор: Condimentum lacinia</li>
            </ul>
        </div>
        <div :class="$style.CatDetail__wrapper">
            <section :class="$style.CatDetail__content">
                <h2 :class="$style.CatDetail__title">{{ cat.title }}</h2>
                <div :class="$style.CatDetail__year">2019</div>
                <div :class="$style.CatDetail__img">
                    <img :src="'/' + cat.img"
                         :alt="cat.title">
                    <div :class="$style.CatDetail__imgDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </div>
                </div>
                <div :class="$style.CatDetail__text">
                    <h3>Lorem ipsum dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Vel pharetra vel turpis nunc eget lorem. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Et molestie ac feugiat sed lectus. Semper quis lectus nulla at volutpat. Eget nunc scelerisque viverra mauris in aliquam. Et netus et malesuada fames ac turpis egestas maecenas pharetra.
                    </p>
                </div>
            </section>
            <TheSidebar :class="$style.CatDetail__sidebar">
                <div>БЛОК 1</div>
                <div>БЛОК 2</div>
                <div>БЛОК 3</div>
            </TheSidebar>
        </div>
        <SeeAlso :class="$style.CatDetail__seeAlso"
                 :link="nextCatLink"/>
    </div>
</template>

<script>
    import Breadcrumbs from '~/components/common/Breadcrumbs';
    import TheSidebar from '~/components/layout/TheSidebar';
    import SeeAlso from '~/components/common/SeeAlso';

    export default {
        name: 'CatDetail',

        components: {
            SeeAlso,
            TheSidebar,
            Breadcrumbs,
        },

        computed: {
            cat() {
                return this.$store.getters.getCat(this.$route.params.id);
            },
            nextCat() {
              return this.$store.getters.getNextCat(this.cat.id)  ;
            },
            nextCatLink() {
                return { url: '/cat/' + this.nextCat.id, title: this.nextCat.title };
            },
            breadcrumbs() {
                return ['Кошки', this.cat.title];
            }
        }
    };
</script>

<style module lang="scss">
    .CatDetail {
        &__wrapper {
            display: flex;
            justify-content: space-between;
        }

        &__content {
            width: 100%;
            padding: 0 110px;
        }

        &__info {
            max-width: 470px;
            margin: 80px auto;
            font-size: 16px;
            color: $clr-dark-gray;

            li {
                margin-bottom: 16px;
            }
        }

        &__title {
            font-size: 42px;
            line-height: 150%;
        }

        &__year {
            margin-top: 35px;
            margin-bottom: 53px;
            font-size: 20px;
            color: $clr-dark-gray;
        }

        &__img {
            position: relative;
            left: -110px;
        }

        &__imgDesc {
            margin-top: 32px;
        }

        &__text {
            margin-top: 98px;

            h3 {
                margin-bottom: 25px;
                font-size: 22px;
                line-height: 160%;
                text-transform: uppercase;
                font-weight: bold;
            }

            p {
                max-width: 734px;
                font-size: 18px;
                line-height: 200%;
                letter-spacing: .01em;
            }
        }

        &__seeAlso {
            margin: 100px -50px 140px -50px;
        }
    }
</style>