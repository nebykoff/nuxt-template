<template>
    <div :class="$style.SocialLinks">
        <ul>
            <li v-for="link of links"
                :key="link.url">

                <a :href="link.url">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SocialLinks',

        props: {
            links: {
                type: Array,
                required: true,
                default: () => [],
            }
        }
    };
</script>

<style module lang="scss">
    .SocialLinks {
        ul {
            display: flex;

            li {
                padding-left: 10px;
            }
        }
    }
</style>