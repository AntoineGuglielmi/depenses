<template>
    <div>

        <div class="container maxw">

            <!-- Titre de la page -->
            <Atoms-H1
            :titre="page.titre"
            />
            
            <!-- Introduction -->
            <Organisms-Introduction>
                <template v-slot:text>
                  {{ page.introduction }}
                </template>
            </Organisms-Introduction>

            <!-- Contenu de la page -->
            <Nuxt />

        </div>

        <!-- Navigation -->
        <Molecules-Nav />

    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    page() {
      return this.$store.getters['pages/getPage'](this.$route.name);
    }
  }
}
</script>