<template>
    <div>
        <div class="container maxw">
            <!-- Titre de la page -->
            <Atoms-h1
            :titre="titreDeLaPage"
            />
            <!-- Introduction -->
            <!-- ... -->
            <!-- Contenu de la page -->
            <Nuxt />
            <!-- Navigation -->
            <!-- ... -->
        </div>
        <Molecules-Nav />
    </div>
</template>

<script>
export default {
  data() {
    return {
      titreDeLaPage: 'Titre',
      introduction: null
    }
  }
}
</script>