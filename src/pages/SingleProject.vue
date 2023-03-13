<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
    };
  },
  mounted() {
    this.store.loading = true;
    axios
      .get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data.results;
      });
  },
};
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>{{ project.title }}</h2>
                </div>
                <div class="cover_img">
                    <!-- <img class="img-fluid" :src="`${this.store.baseUrl}/storage/${this.project.cover_image}`" alt="{{ project.title }}"> -->
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