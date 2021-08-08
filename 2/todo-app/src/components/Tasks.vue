<template>
    <div class="tasks">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'tasks',
    components: {
    }
}
</script>

<style scoped>
    .tasks {
        margin-bottom: 60px;
    }
</style>