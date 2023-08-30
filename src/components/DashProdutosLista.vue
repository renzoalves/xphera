<template>
    <div class="col-12 border rounded mt-1 ml-2" style="padding-left: 0">
        <div class="img-texto-lateral">
            <div>
                <img
                    class="rounded-left align-top"
                    :src="dashItem.img"
                    :alt="dashItem.alt"
                    style="height: 100px;"
                />
            </div>
            <div class="mb-2">
                <h6 class="ml-2 text-left">
                    <strong>{{ dashItem.title }}</strong>
                </h6>
                <p class="ml-2 text-left">{{ dashItem.text }}</p>
                <button
                    class="btn btn-outline-dark btn-sm mb-2"
                    @click.stop.prevent="$emit('emit-select-post', dashItem.id)"
                >
                    Ler
                </button>
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

a {
    align-items: left;
}

li {
    list-style-type: none;
}

ul {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}
</style>
