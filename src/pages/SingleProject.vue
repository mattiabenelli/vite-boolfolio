<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
      loadingLocal: true,
    };
  },
  mounted() {
    // this.store.loadingLocal = true;
    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data.results;
        this.loadingLocal = false;
      });
  },
};
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-12 d-flex justify-content-center" v-if="loadingLocal">
                        <div class="loader"></div>
                    </div>
                    <div v-else class="col-12">
                        <div class="d-flex justify-content-end my-5">
                            <router-link class="btn btn-success" :to="{ name: 'project_list' }">Torna alla lista dei progetti</router-link>
                        </div>
                        <div class="card mt-5">
                            <div class="card-img-top">
                                <div class="cover_img">
                                    <img class="img-fluid" :src="this.project.cover_image != null ? `${this.store.baseUrl}/storage/${this.project.cover_image}` : 'https://picsum.photos/300/200'">
                                </div>
                            </div>
                            <div class="card-title">
                                <h2>{{ project.title }}</h2>
                            </div>
                            <div class="card-body">
                                <p class="mb-3">{{ project.content }}</p>
                                <em><strong>type:</strong> {{ project.type ? project.type.name : 'non disponibile'  }}</em> <br>
                                <em><strong>tecnologie:</strong></em>
                                <em v-if="project.technologies == false">
                                <em>non disponibile<br></em>
                                </em>
                                <em v-else>
                                    <em v-for="tech in project.technologies" :key="project.technologies.id"><br>{{ tech.name }}</em>
                                </em>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.cover_img {
  width: 300px;
}
</style>