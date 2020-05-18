<template>
    <div :class="$style.GalleryItem">
        <img :src="item.img" alt="">
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
        //
    }
</style>