<template>
    <div id="app" class="container-fluid mt-0">
        <!-- CABEÇALHO -->
        <div class="row sticky-top">
            <div class="col text-center" style="background-color: #2e354c">
                <!-- <img class="mx-auto d-block" :src="imageLogo" alt="Logo TFCA" /> -->
                <!-- <img class="rounded float-left mt-2 mb-2" :src="imageLogo" alt="Logo TFCA" style="width: 20%;"/> -->
                <img
                    class="rounded float-left w-25 mt-2 mb-2"
                    :src="imageLogo"
                    alt="Logo TFCA"
                />
            </div>
        </div>

        <!-- MENU -->
        <div class="row">
            <dash-menu-buttons
                v-on:emit-select-panel="SelectPanel"
                v-on:emit-select-title="SelectTitle"
            />
        </div>

        <!-- PAINÉIS SELECIONADOS -->
        <div class="row mt-1" v-if="panelSelected == 'home'">
            <div class="cointainer">
                <div class="row ml-3 mr-3">
                    <div class="col-12">
                        <!-- CAROUSSEL -->
                        <div class="row">
                            <div
                                class="col mt-1 border border-info rounded"
                                style="padding-left: 0; padding-right: 0"
                            >
                                <!-- <dash-caroussel/> -->
                            </div>
                        </div>

                        <!-- CARDS -->
                        <div class="row mt-2">
                            <dash-cards />
                        </div>

                        <!-- LISTA-DE-PRODUTOS -->
                        <div class="row mt-1">
                            <dash-produtos-lista
                                v-for="dash in dashList"
                                :key="dash.id"
                                :payload="dash"
                                v-on:emit-select-post="SelectPost"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-1 mr-1 ml-1" v-if="idSelected > 0">
            <h1 class="text-alert col-12">{{ titlePageSelected }}</h1>
            <br />

            <view-page :payload="postSelected" />
        </div>

        <!-- Exibe lista de CARDs quando é selecionado um botão do menu -->
        <div class="row mt-1" v-else>
            <h1 class="text-alert col-12">{{ titlePageSelected }}</h1>
            <br />

            <div class="card-columns mr-3 ml-3">
                <dash-produtos-card
                    v-for="dash in listSelected"
                    :key="dash.id"
                    :payload="dash"
                    v-on:emit-select-post="SelectPost"
                />
            </div>
        </div>

        <!-- RODAPÉ -->
        <dash-footer />
    </div>
</template>

<script>
import DashCards from "./components/DashCards.vue";
import DashProdutosLista from "./components/DashProdutosLista.vue";
import DashMenuButtons from "./components/DashMenuButtons.vue";
import DashFooter from "./components/DashFooter.vue";
import DashProdutosCard from "./components/DashProdutosCard.vue";
// import DashCaroussel from './components/DashCaroussel.vue';
import ViewPage from "./components/views/ViewPage.vue";

import dashFrontData from "@/assets/data/dataSource.js";

export default {
    name: "App",
    components: {
        DashCards,
        DashFooter,
        DashProdutosLista,
        // DashCaroussel,
        DashMenuButtons,
        DashProdutosCard,
        ViewPage,
    },

    data() {
        return {
            panelSelected: "home",
            titlePageSelected: "",
            idSelected: 0,
            postSelected: {},
            listSelected: [],
            imageLogo: require("@/assets/imgs/logo/logo-imds.png"),
            categoria: "",
        };
    },

    mixins: [dashFrontData],

    methods: {
        SelectPanel(value) {
            const lista = this.dashList;

            this.panelSelected = value;
            this.listSelected = lista.filter((lista) => lista.slug == value);

            this.idSelected = 0;
            this.postSelected = {};
            this.titlePageSelected = "";
        },

        SelectTitle(value) {
            this.titlePageSelected = value;
        },

        SelectPost(value) {
            const lista = this.dashList;

            this.idSelected = value;
            var _postSelected = lista.filter((lista) => lista.id == value);

            this.postSelected = _postSelected[0];
            this.panelSelected = _postSelected[0].slug;

            console.log("idSelected", this.idSelected);
            // console.log("postSelected", this.postSelected);
            console.log("titlePageSelected", this.titlePageSelected);
        },
    },

    watch: {
        panelSelected() {
            if (this.panelSelected == "home") {
                this.idSelected = 0;
                this.postSelected = {};
                this.titlePageSelected = "";
            }
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
