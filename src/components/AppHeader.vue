<script>
export default {
  name: "Appheader",
  data() {
    return {
      menuItems: [
        {
          label: "Homepage",
          routeName: "homepage",
        },
        {
          label: "Blog",
          routeName: "project_list",
        },
        {
          label: "contatti",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>
<template lang="">
    <header>
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container">
                <div class="navbar-brand">
                    <img src="/img/ygo_logo.png" class="logo" alt="" >
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menuItems" ::key="index">
                            <!-- <a :href="item.routeName" class="text-white">{{ item.label }}</a> -->
                            <router-link :to="{ name:item.routeName }" class="nav-link text-white">
                                {{item.label}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss">
.background-nav {
  background-color: rgb(204, 148, 127);
}
.logo {
  width: 300px;
}
</style>