<template>
  <div class="layout">
    <header class="header">
      <g-link class="header__link" to="/">
        <g-image alt="Wazaby Tech LLC" src="~/assets/images/wazaby-logo-black.png" width="100" />
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/services/">Services</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      &copy; 2021 Wazaby Tech LLC
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
  color: #2C3539;
}

.nav__link, .footer__link {
  margin-left: 20px;
}

a {
  color: #27B60A;
}

a:visited {
  color: #27B60A;
}

a.nav__link {
  color: #27B60A;
}

a.header__link {
  color: #27B60A;
  text-decoration: none;
  font-weight: bold;
  font-size: 2em;
}

a.nav__link:visited, a.header__link:visited {
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
  height: 100px;
  background-color: black;
  margin-bottom: 20px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 15px;
}

.footer {
  color: #27B60A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 50px;
  border-top: solid 1px #848482;
}
</style>
