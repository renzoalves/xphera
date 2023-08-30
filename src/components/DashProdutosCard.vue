<template>
    <div class="card col-sm-12 mt-2" style="padding-left: 0">
        <div class="img-texto-lateral">
            <div>
                <img
                    class="rounded-left"
                    :src="dashItem.img"
                    :alt="dashItem.alt"
                    style="height: 100px; padding: 0; margin: 0"
                />
            </div>
            <div class="mb-2">
                <h6 class="ml-2 text-left">
                    <strong>{{ dashItem.title }}</strong>
                </h6>
            </div>
        </div>
        <p class="ml-2 text-left">{{ dashItem.text }}</p>

        <button
            class="btn btn-outline-dark btn-sm mb-2"
            @click.stop.prevent="$emit('emit-select-post', dashItem.id)"
        >
            Ler post
        </button>
    </div>
</template>

<script>
export default {
    name: "DashProdutosCard",
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
