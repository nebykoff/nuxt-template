<template>
    <div :class="$style.GalleryItem">
        <img :src="item.img" alt="">
        <div :class="$style.text">
            <div :class="$style.title">{{ item.title }}</div>
            <div :class="$style.tags">
                <span v-for="(tag, index) of item.tags" :key="tag">
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

        &:hover {
            .text {
                display: block;
            }
        }
    }

    .text {
        position: absolute;
        bottom: 0;
        display: none;
        width: 100%;
        height: 90px;
        padding: 18px 22px;
        background-color: $clr-gray;
    }
</style>