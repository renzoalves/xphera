<!-- CARDs QUE ESTÃO ABAIXO DO CAROUSEL -->
<template>
    <div class="card-deck">
        {{ recarregar }}

        <div id="cardsDestak" class="card" v-for="dCard in dCardList" :key="dCard.id">
            <!-- TITULO -->
            <div class="card-body">
                <h5 class="card-title">
                    {{ dCard.title }}
                </h5>
                <p class="card-text">
                    <span v-html="dCard.body"></span>
                </p>
            </div>

            <!-- RODAPE -->
            <div class="card-footer">
                <small class="text-muted">Post {{ dCard.dtalt }}</small>
            </div>
        </div>
    </div>
</template>

<script>
import dashFrontDataCards from "@/assets/data/dataSourceCards.js";

export default {
    name: "DashCards",

    mixins: [dashFrontDataCards],

    data() {
        return {
            dCardList: "",
        };
    },

    computed: {
        // Aqui estou forçando a atualização das variáveis para preenchimento correto do Template Contrato.
        recarregar() {
            return this.Setup();
        },
    },

    methods: {
        Setup() {
            this.dCardList = this.dashList;
        },
    },

    mounted() {
        // this.cliente = this.p_dados;
        // this.plano = this.p_plano;
        // this.Setup();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.cardsDestak {
    background-color: #ccc;
}

.img-texto-lateral {
    display: flex;
    align-items: center;
}

img {
    height: 5rem;
}

li {
    list-style-type: none;
}

ul {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}
</style>
