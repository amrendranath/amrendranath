<template>
  <footer>
    <p>
      Built and Designed by <strong><em>Amrendra Nath</em></strong>
    </p>
    <nav>
      <a href="https://github.com/amrendranath">Github</a>
      <a href="https://www.linkedin.com/in/amrendranath">LinkedIn</a>
    </nav>
  </footer>
</template>

<style scoped>
strong {
  background: -webkit-linear-gradient(
    30deg,
    rgba(9, 65, 172, 1) 35%,
    rgba(52, 144, 213, 1) 100%
  );
  font-weight: 800;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

footer {
  display: flex;
  position: absolute;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 1rem;
  width: 100vw;
  border-top: 3px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(
    30deg,
    rgba(9, 65, 172, 1) 35%,
    rgba(52, 144, 213, 1) 100%
  );
}

nav a {
  margin: 0 1rem;
  font-size: 1rem;
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

@media (min-width: 1024px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
