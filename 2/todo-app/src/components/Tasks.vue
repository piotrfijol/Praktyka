<template>
    <div class="tasks">
        <div class="container loading-screen" v-if="isLoading">
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
        <slot v-else />
    </div>
</template>

<script>
export default {
    name: 'tasks',
    props: {
        isLoading: Boolean
    }
}
</script>

<style scoped>
    .tasks {
        margin-bottom: 60px;
    }

    .dots {
        display: flex;
    }

    .dot {
        width: 15px;
        height: 15px;
        display: block;
        border-radius: 50%;
        background-color: #DDD;
        margin-left: 10px;
        transform: translateY(-10px) scale(.6);
        animation-name: loading;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
    }

    .dot:nth-child(2) {
        animation-delay: .3s;
    } 

    .dot:nth-child(3) {
        animation-delay: .6s;
    }

    .loading-screen {
        display: flex;
        justify-content: center;
    }

    @keyframes loading {
        50% {transform: translateY(0) scale(1)};
    }

</style>