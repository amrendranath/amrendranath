<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="logo_wrapper">
      <img alt="an logo" class="logo" src="@/assets/an_logo.webp" height="50" />
      <span>Amrendra Nath</span>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/education">Education</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  box-shadow: rgb(52 144 214) 0px 5px 20px -10px;
  width: 100vw;
  max-height: 100px;
}
@media (min-width: 1024px) {
  .logo_wrapper {
    display: flex;
    align-items: center;
  }

  .logo_wrapper span {
    display: inline-block;
    margin-left: 0.8rem;
    font-size: 1.6rem;
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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  nav a {
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    position: relative;
    background: -webkit-linear-gradient(
      330deg,
      rgba(9, 65, 172, 1) 35%,
      rgba(52, 144, 213, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
