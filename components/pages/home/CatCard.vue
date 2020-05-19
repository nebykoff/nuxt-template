<template>
    <div :class="$style.GalleryItem"
         :style="{ 'background-image': `url(${item.img})`}">

        <div :class="$style.GalleryItem__text">
            <div :class="$style.GalleryItem__title">{{ item.title }}</div>
            <div :class="$style.GalleryItem__tags">
                <span v-for="(tag, index) of item.tags"
                      :key="tag">
                    {{ tag.toLowerCase() }}<span v-if="index < item.tags.length - 1">,</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GalleryItem',

        props: {
            item: {
                type: Object,
                required: true,
            },
        }
    };
</script>

<style module lang="scss">
    .GalleryItem {
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 100%;
        background: no-repeat center;
        background-size: cover;

        &:hover {
            .GalleryItem__text {
                visibility: visible;
                opacity: 1;
            }
        }

        &__text {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 90px;
            padding: 18px 22px;
            background-color: $clr-gray;
            visibility: hidden;
            opacity: 0;
            transition: opacity .4s ease;
        }
    }
</style>