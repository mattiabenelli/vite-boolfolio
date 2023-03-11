<script>
import axios from "axios";

export default {
  name: "ProjectMain",
  data() {
    return {
      projects: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
  },

  methods: {
    getProject() {
      this.loading = true;
      axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        if (response.data.success) {
          this.projects = response.data.results;
          this.loading = false;
        } else {
          //failed message
        }
      });
    },
  },

  mounted() {
    this.getProject();
  },
};
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Boolpress</h2>
            </div>
            <div class="col-12">
                <div v-if="loading" class="d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
                <div v-else class="">
                    <div class="card my-3" v-for="project in projects" :key="project.id">
                        <div class="card-body">
                            <div class="card-img-top">
                                <img class="img-fluid" :src="project.cover_image != null ? `${baseUrl}${project.cover_image}` : 'https://picsum.photos/200/300'" alt="">
                            </div>
                            <div class="card-title">
                                <h5>{{ project.title }}</h5>
                            </div>
                            <a href="#" class="btn-success">
                                Leggi l'articolo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>