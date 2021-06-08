<template>
  <Layout>
    <h1>{{$static.metadata.siteDescription}}</h1>

    <div class="image-row">
      <g-image src="~/assets/images/home-page-4.jpg" width="360" height="200" fit="fill" />
      <g-image src="~/assets/images/home-page-1.jpg" width="360" height="200" fit="fill" />
      <g-image src="~/assets/images/home-page-2.jpg" width="360" height="200" fit="fill" />
    </div>

    <p>Wazaby Tech is a technology services company determined to hack your business one transformative, impactful and efficiency boosting solution at a time.</p>

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
  display: flex;
  align-items: center;
  align-content: space-around;
}
</style>
