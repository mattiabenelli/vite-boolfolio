<script>
export default {
  name: "ProjectMain",
  data() {
    return {
      projects: [],
      loading: true,
      baseUrl: "http://http://127.0.0.1:8000",
    };
  },
  methods: {
    getPost() {
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
};
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Boolpress</h2>
            </div>
            <div class="col-12">
                LISTA PROGETTI
            </div>
        </div>
    </div>
</template>


<style lang="scss">
</style>