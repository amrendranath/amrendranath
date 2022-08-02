import { useEffect } from "react";
import { Box, Container, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    let typed = new Typed(".auto-input", {
      strings: ["Amrendra Nath.", "Frontend Engineer."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#111", color: "#fff" }}>
      <Container sx={{ height: "inherit", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 className="text-5xl uppercase font-bold text-[#4169e1]">
          I'm <span className="auto-input italic"></span>
        </h1>
        <p className="my-7 font-medium text-2xl">
          I'm a front‑end engineer focused on crafting clean & user‑friendly experiences, <br /> I am passionate about building excellent
          software that improves the lives of those around me.
        </p>
        <Box className="flex justify-center">
          <IconButton size="large" color="primary" href="https://github.com/amrendranath">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton size="large" color="primary" href="https://www.linkedin.com/in/amrendranath">
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
