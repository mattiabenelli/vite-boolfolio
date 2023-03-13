<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
      loading: true,
    };
  },
  mounted() {
    // this.store.loading = true;
    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data.results;
        this.loading = false;
      });
  },
};
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-12 d-flex justify-content-center" v-if="loading">
                        <div class="loader"></div>
                    </div>
                    <div v-else class="col-12">
                        <h2>{{ project.title }}</h2>
                        <div class="cover_img">
                            <img class="img-fluid" :src="this.project.cover_image != null ? `${this.store.baseUrl}/storage/${this.project.cover_image}` : 'https://picsum.photos/300/200'">
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