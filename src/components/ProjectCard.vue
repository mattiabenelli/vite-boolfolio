<script>
import { store } from "../store";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
    <div class="card my-3">
        <div class="card-body">
            <div class="card-img-top text-center">
                <img class="img-fluid" :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" alt="">
            </div>
            <div class="card-title py-1">
                <h5>{{ project.title }}</h5>
                <em><strong>type:</strong> {{ project.type ? project.type.name : 'non disponibile'  }}</em> <br>
                <em><strong>tecnologie:</strong></em>
                <em v-if="project.technologies == false">
                <em>non disponibile<br></em>
                </em>
                <em v-else>
                <em v-for="tech in project.technologies" :key="project.technologies.id"><br>{{ tech.name }}</em>
                </em>
            </div>
            <div class="card-text py-1">
            {{ project.content }}
            </div>
            <!-- <a href="#" class="btn btn-success">
                Leggi l'articolo
            </a> -->
            <router-link class="btn btn-success" :to="{ name: 'single_project', params: { slug: project.slug } }">Leggi l'articolo</router-link>
        </div>
    </div>
</template>
<style lang="">
</style>