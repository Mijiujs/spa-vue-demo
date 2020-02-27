<template>
    <div>
        <div @click="$emit('sunMethod',10)">child2:{{str2}}</div>
    </div>
</template>
<script>
export default {
    props:['str2'],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>


</style>