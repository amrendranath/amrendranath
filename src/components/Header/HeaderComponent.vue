<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

onMounted(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });
});
</script>

<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item logo_wrapper" to="/">
          <img src="@/assets/an_logo.webp" height="50" />
          <span>Amrendra Nath</span>
        </RouterLink>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <RouterLink class="navbar-item" to="/">Home</RouterLink>
          <RouterLink class="navbar-item" to="/about">About</RouterLink>
          <RouterLink class="navbar-item" to="/experience"
            >Experience</RouterLink
          >
          <RouterLink class="navbar-item" to="/education">Education</RouterLink>
          <RouterLink class="navbar-item" to="/resume">Resume</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo_wrapper {
  display: flex;
  align-items: center;
}

.logo_wrapper span {
  display: inline-block;
  margin-left: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  background: -webkit-linear-gradient(
    30deg,
    rgba(9, 65, 172, 1) 35%,
    rgba(52, 144, 213, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar-menu {
  box-shadow: none;
}

header {
  box-shadow: rgb(52 144 214) 0px 5px 20px -10px;
  width: 100vw;
  padding: 1rem;
}

a {
  text-decoration: none;
  padding: 10px;
  position: relative;
  background: -webkit-linear-gradient(
    330deg,
    rgba(9, 65, 172, 1) 35%,
    rgba(52, 144, 213, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
}

@media (max-width: 425px) {
  .logo_wrapper span {
    display: none;
  }
}

@media (min-width: 1024px) {
  a {
    text-align: center;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #0058ca;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
}
</style>
