<!-- <template>
    <div class="col mt-2 mb-2 text-left">
        <button
            v-for="btnItem in lstMenuButtons"
            :key="btnItem.id"
            type="button"
            class="btn btn-primary btn-sm mr-1"
            @click.stop.prevent="$emit('emit-select-panel', btnItem.slug); $emit('emit-select-title', btnItem.title)"
        >
            {{ btnItem.label }}
        </button>
    </div>
</template> -->

<template>
    <div class="col">
        &nbsp;
        <ul class="nav justify-content-end">
            <li
                v-for="btnItem in lstMenuButtons"
                :key="btnItem.id"
                class="nav-item btn btn-primary btn-sm mr-1"
                @click.stop.prevent="
                    $emit('emit-select-panel', btnItem.slug);
                    $emit('emit-select-title', btnItem.title);
                "
            >
                {{ btnItem.label }}
            </li>
        </ul>
    </div>
</template>

<script>
import dashMenuButtons from "@/assets/data/dataButtons.js";

export default {
    name: "DashMenuButtons",
    props: {
        payload: Object,
    },

    data() {
        return {
            dashItem: this.payload,
        };
    },

    mixins: [dashMenuButtons],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button,
div {
    background-color: #2e354c;
}
.img-texto-lateral {
    display: flex;
    align-items: center;
}

li {
    list-style-type: none;
    background-color: #2e354c;
}

ul {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    background-color: #2e354c;
}
</style>
