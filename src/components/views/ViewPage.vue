<template>
    <div class="col-12 border rounded mt-1" style="padding-left: 0">
        <div class="img-texto-lateral">
            <div>
                <img
                    class="rounded-rigth-0"
                    :src="dashItem.img"
                    :alt="dashItem.alt"
                    style="height: 120px"
                />
            </div>
            <div>
                <h6 class="ml-2 text-left">
                    <strong>{{ dashItem.title }}</strong>
                </h6>
                <p class="ml-2 text-left">{{ dashItem.text }}</p>
                <footer class="blockquote-footer text-rigth ml-2" style="text-align: right !important;"><cite>Criado em: {{ dashItem.date }}</cite></footer>
            </div>
        </div>
        <div>&nbsp;</div>
        <div v-if="article">
            <div v-for="(line, index) in article" :key="index">

                <!-- TÍTULOS -->
                <h1 class="text-left ml-2"                  v-if="(line.type == 't1')">{{ line.text }}</h1>
                <h3 class="text-left ml-2"                  v-if="(line.type == 't3')">{{ line.text }}</h3>
                <h4 class="text-left ml-2"                  v-if="(line.type == 't4')">{{ line.text }}</h4>

                <h5 class="text-left ml-2"                  v-if="(line.type == 't5')">{{ line.text }}</h5>
                <h5 class="text-left font-italic ml-2"      v-if="(line.type == 't5-i')">{{ line.text }}</h5>

                <!-- PARÁGRAFOS -->
                <p  class="text-left ml-2 mr-2"             v-if="(line.type == 'p')">{{ line.text }}</p>
                <p  class="text-left font-italic ml-2 mr-2" v-if="(line.type == 'pi')">{{ line.text }}</p>

                <!-- PARÁGRAFOS COM FORMATAÇÃO HTML-->
                <p  class="text-left ml-2 mr-2"             v-if="(line.type == 'pf')"> <span v-html="line.text"></span> </p>

                <!-- IMAGEM -->
                <img  class="text-left ml-2 mr-2"           v-if="(line.type == 'img')" :src="line.text">


                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashProdutosLista",
    props: {
        payload: Object,
    },

    data() {
        return {
            dashItem: this.payload,
            myDate: "",
            article: this.payload.article,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-texto-lateral {
    display: flex;
    align-items: center;
}

li {
    list-style-type: none;
}

ul {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}
</style>
