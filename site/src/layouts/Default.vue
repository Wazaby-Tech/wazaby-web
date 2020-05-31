<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/services/">Services</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      &copy; 2020 Wazaby Tech
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #848482;
}

a {
  color: #27B60A;
  text-decoration: none;
}

a:active {
  color: black;
}

a:visited {
  color: #27B60A;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  background-color: #5EFB6E;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}

.footer {
  color: #27B60A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 50px;
}
</style>
