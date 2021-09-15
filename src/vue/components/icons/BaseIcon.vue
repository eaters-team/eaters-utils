<template>
    <svg class="icon">
        <use :xlink:href="url"></use>
    </svg>
</template>
<script>
export default{
    name: "BaseIcon",
    props: {
        name: String
    },
    data(){
        return {
            url: null
        }
    },
    mounted () {
        if(this.spriteUrl){
            this.url = this.spriteUrl+'#'+this.name
        }
    }
}
</script>
