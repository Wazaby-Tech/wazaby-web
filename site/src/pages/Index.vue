<template>
  <Layout>
    <h1>{{$static.metadata.siteDescription}}</h1>

    <div class="image-row">
      <g-image src="~/assets/images/home-page-3.jpg" width="360" height="200" fit="fill" />
      <g-image src="~/assets/images/home-page-1.jpg" width="360" height="200" fit="fill" />
      <g-image src="~/assets/images/home-page-2.jpg" width="360" height="200" fit="fill" />
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.image-row {
  width: 100%;
  margin: 0 auto;
}

.home-links a {
  margin-right: 1rem;
}
</style>
