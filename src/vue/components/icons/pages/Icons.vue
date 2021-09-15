<template>
    <div class="base-icons-container">
        <h1> Icons </h1>
        <div class="base-icons-list">
            <div class="base-icon" v-for="(icon, index) in icons" :key="index">
                <div class="base-icon-header">
                    <eat-icon :name="icon"></eat-icon>
                </div>
                <div class="base-icon-body">
                    {{icon}}
                    <div>#{{icon}}</div>
                </div>
                <div class="base-icon-foot">
<!--                    <div class="line">-->
<!--                        <div>Id</div>-->
<!--                        &lt;!&ndash; The text field &ndash;&gt;-->
<!--                        <input type="text" :value="'#'+icon" id="myInput">-->

<!--                        &lt;!&ndash; The button used to copy the text &ndash;&gt;-->
                        <button @click="copy(icon)">Copy</button>
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            icons: []
        }
    },
    mounted () {
        let $vue = this;
        fetch(this.spriteUrl).then(async function (data){
            let html = await data.text();
            var template = document.createElement('template');
            html = html.trim(); // Never return a text node of whitespace as the result
            template.innerHTML = html;
            let sprite = template.content.firstChild;
            template.content.firstChild.setAttribute('id', 'base-svg-sprite')
            document.body.appendChild(sprite);
            let elements = sprite.querySelectorAll("symbol")
            for(let element of elements){
                $vue.icons.push(element.getAttribute('id'));
            }
        })

    },
    methods:{
        copy(text){
            navigator.clipboard.writeText(text);
        }
    }
}
</script>
<style>
html, body{
    height: 100%;
    background: white;
}
h1{
    font-size: 20px;
    margin: 40px auto;
    text-align: center;
}
.base-icons-container{
    max-width: 960px;
    margin: auto;
    background: white;
    height: 100%;
}
.base-icons-list{
    display: grid;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 200px);
    grid-gap: 40px;
}
.base-icon{
    border:1px solid whitesmoke;
    background: white;
    min-width: 200px;
    margin: 20px;
    border-radius: 15px;
    overflow: hidden;
}
.base-icon-header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: whitesmoke;
}
.base-icon-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
}
.base-icon-foot{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
}
.base-icon-foot>button{
    background: white;
    border:1px solid lightgrey;
    padding: 8px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.75px;
    cursor: pointer;
    transition: all 300ms;

}
.base-icon-foot>button:hover{
    background: whitesmoke;
}
.base-icon-foot>button:active{
    background: lightgrey;

}
</style>
