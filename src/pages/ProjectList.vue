<script>
import axios from "axios";
import { store } from "../store";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectList",
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: null,
    };
  },
  components: {
    ProjectCard,
  },

  methods: {
    getProject(project_page) {
      this.store.loading = true;
      axios
        .get(`${this.store.baseUrl}/api/projects`, {
          params: { page: project_page },
        })
        .then((response) => {
          if (response.data.success) {
            this.projects = response.data.results.data;
            this.currentPage = response.data.results.current_page;
            this.lastPage = response.data.results.last_page;
            this.store.loading = false;
          } else {
            //failed message
          }
        });
    },
  },

  mounted() {
    this.getProject(this.current_page);
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
              <div v-if="store.loading" class="d-flex justify-content-center">
                  <div class="loader"></div>
              </div>
              <div v-else class="col-12 d-flex justify-content-center flex-wrap">
                <div class="row">
                  <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" :baseUrl="store.baseUrl"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <nav>
                    <ul class="pagination">
                      <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                        <button class="page-link" @click="getProject(currentPage - 1)">Prev</button>
                      </li>
                      <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                        <button class="page-link" @click="getProject(currentPage + 1)">next</button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
</style>