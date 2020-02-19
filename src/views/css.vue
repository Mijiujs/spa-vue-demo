<template>
    <div>
        <center></center>
        <threeColumnLayout></threeColumnLayout>
        <twoColumnLayout></twoColumnLayout>
    </div>
</template>
<script>
import center from '@/components/cssLayout/center'
import twoColumnLayout from '@/components/cssLayout/twoColumnLayout'
import threeColumnLayout from '@/components/cssLayout/threeColumnLayout'
export default {
    components:{
        center,
        twoColumnLayout,
        threeColumnLayout
    }
}
</script>
<style lang="scss" scoped>

</style>