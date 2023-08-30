export default {
    name: "vuejs-1",
    props: {
        payload: Object,
    },

    template: `
        <div class="col-12 border rounded mt-1" style="padding-left: 0">
            <div class="img-texto-lateral">
                <div>
                    <img
                        class="rounded"
                        :src="dashItem.img"
                        :alt="dashItem.alt"
                        style="height: 100px"
                    />
                </div>

                <div>
                    <h3 class="ml-2 text-left">
                        <strong>{{ dashItem.title }}</strong>
                    </h3>
                    <p class="ml-2 text-left">{{ dashItem.text }}</p>
                    
                </div>
            </div>

            <div>Meu texto vem aqui</div>
        </div>`,

    data() {
        return {
            dashItem: this.payload,
            listData: []
        };
    },

    methods:{
        
    }
   
};