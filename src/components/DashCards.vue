<template>
    <div class="card-deck">
        <div class="card" v-for="(index, dCard) in dashList" :key="dCard.id" >
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
                <small class="text-muted"> Post {{ dCard.dtalt }} </small>
            </div>
        </div>
    </div>
</template>

<script>
import dataCards from "@/assets/data/dataSourceCards.js";

export default {
    name: "DashCards",

    mixins: [dataCards],

    data() {
        return {
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
