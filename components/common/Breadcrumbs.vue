<template>
    <div :class="$style.Breadcrumbs">
        <ul>
            <li v-for="title of breadcrumbs"
                :key="title">
                {{ title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumbs',

        props: {
            breadcrumbs: {
                type: Array,
                default: () => [],
            }
        }
    };
</script>

<style module lang="scss">
    .Breadcrumbs {
        ul {
            display: flex;
            justify-content: flex-start;
            font-size: 14px;

            li {
                position: relative;
                margin-left: 25px;
                padding-right: 10px;

                &:before {
                    content: '';
                    position: absolute;
                    background: url('~@/assets/images/arrow.svg');
                    top: 50%;
                    transform: translateY(-50%);
                    left: -15px;
                    width: 8px;
                    height: 8px;
                }

                &:first-child {
                    margin: 0;
                    padding: 0;

                    &:before {
                        display: none;
                    }
                }
            }
        }
    }
</style>