<template>
    <div class="Carrousel">
        <!-- swiper1 -->
        <swiper ref="swiperTop"
                class="swiper gallery-top"
                :options="swiperOptionTop">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
            <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
            <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper ref="swiperThumbs"
                class="swiper gallery-thumbs"
                :options="swiperOptionThumbs">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        name: 'Carrousel',
        title: 'Thumbs gallery with Two-way control',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 4, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: true,
                    loopedSlides: 4, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            };
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper;
                const swiperThumbs = this.$refs.swiperThumbs.$swiper;
                swiperTop.controller.control = swiperThumbs;
                swiperThumbs.controller.control = swiperTop;
            });
        }
    };
</script>

<style lang="scss" scoped>
    .Carrousel {
        width: 860px;
        height: 680px;
    }

    .swiper {
        .swiper-slide {
            background-size: cover;
            background-position: center;

            &.slide-1 {
                background-image: url('/cats/1.jpg');
            }

            &.slide-2 {
                background-image: url('/cats/2.jpg');
            }

            &.slide-3 {
                background-image: url('/cats/3.jpg');
            }

            &.slide-4 {
                background-image: url('/cats/4.jpg');
            }

            &.slide-5 {
                background-image: url('/cats/5.jpg');
            }
        }

        &.gallery-top {
            height: 80%;
            width: 100%;
        }

        &.gallery-thumbs {
            height: 150px;
            box-sizing: border-box;
            padding: 10px 0;
        }

        &.gallery-thumbs .swiper-slide {
            width: 200px;
            height: 100%;
        }

        &.gallery-thumbs .swiper-slide-active {
            opacity: 1;
        }
    }
</style>