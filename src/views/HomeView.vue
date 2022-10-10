<template>
  <main>
    <p>Hey there! 👋</p>
    <h1>My name is <em>Amrendra Nath</em> 🇮🇳</h1>
    <h2>I like to build softwares.</h2>
    <p class="intro">
      I'm a Software Engineer - Frontend focused on crafting clean &
      user-friendly experiences, I am passionate about building excellent
      software that improves the lives of those around me.
    </p>
  </main>
</template>

<style scoped>
.intro {
  margin-top: 1rem;
  width: 90vw;
  text-align: justify;
}

main {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  height: calc(100vh - 160px);
}

p {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 2rem;
  color: rgba(9, 65, 172, 1);
  font-weight: 900;
}

h2 {
  font-size: 3rem;
  color: rgba(52, 144, 213, 1);
  font-weight: 700;
  margin-top: 0.5rem;
}

em {
  text-decoration: none;
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

em::after {
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

em:hover::after {
  transform: scaleX(1);
  transform-origin: bottom right;
}

@media (min-width: 768px) {
  .intro {
    width: 60vw;
  }
}
</style>
