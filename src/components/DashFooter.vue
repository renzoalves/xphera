<template>
    <div class="row mb-0 mt-4 tfca-footer">
        <!--
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-5">
            <div class="tfca-footer-titles">Info</div>
            <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                sed illum molestiae voluptas pariatur amet incidunt sunt
                officia, quidem iusto tenetur corrupti iure dolorem. Aspernatur
                at facilis dolore rem perspiciatis.
            </p>
            <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                sed illum molestiae voluptas pariatur amet incidunt sunt
                officia, quidem iusto tenetur corrupti iure dolorem. Aspernatur
                at facilis dolore rem perspiciatis.
            </p>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <div class="tfca-footer-titles">Social</div>

            <div class="tfca-social text-left">
                <i class="fa-regular fa-user"></i>
                <span class="tfca-social-text">@xPhetaAt</span><br />
                <i class="fa-solid fa-camera"></i>
                <span class="tfca-social-text">@xPhetaAt</span><br />
                <i class="fa-brands fa-whatsapp"></i>
                <span class="tfca-social-text">@xPhetaAt</span><br />
                <i class="fa-brands fa-facebook"></i>
                <span class="tfca-social-text">@xPhetaAt</span><br />
            </div>
        </div>

        <div class="col-2 col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <div class="tfca-footer-titles">Onde</div>

            <p class="text-left">Rua Javari, 3600</p>
            <p class="text-left">Ipiranga - Ribeirão Preto/SP</p>
            <p class="text-left">(16) 99119-1631</p>
        </div>

        <div class="col-3 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div class="tfca-footer-titles">Contato</div>

            <p class="text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                sit dicta nostrum placeat? Velit, sint doloribus maxime minima
                tempore sed nihil eos maiores voluptates veritatis. Culpa beatae
                cum exercitationem necessitatibus!
            </p>
        </div>
        -->

        <div class="col-12 mt-3">
            <p class="text-center tfca-footer-last-line">
                xPhera - Absolute Techology &copy;2023.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashFooter",
    props: {},

    data() {
        return {};
    },
};
</script>

<style scoped>
.tfca-footer {
    background-color: #000;
    color: #2c3e50;
}
.tfca-footer-last-line {
    color: #2c3e50;
}
.tfca-footer-titles {
    color: #ccc;
    font-weight: bold;
    font-size: 1.6em;
    text-align: left;
    margin-bottom: 1rem;
}

/* MÍDIAS SOCIAIS */
.tfca-social {
    font-size: 1.6em;
    color: #fff;
}
.tfca-social-text {
    font-size: 0.7em;
    color: #ccc;
}
</style>
