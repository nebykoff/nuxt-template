<template>
    <aside :class="$style.TheSidebar">
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name: 'TheSidebar'
    };
</script>

<style module lang="scss">
    .TheSidebar {
        width: 200px;
    }
</style>