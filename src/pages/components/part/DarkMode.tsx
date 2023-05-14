"use client";
import React from "react";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {MdNightlight, MdLightMode} from "react-icons/md";
import {DarkModeSwitch} from "react-toggle-dark-mode";

export default function Button() {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <DarkModeSwitch
        moonColor="black"
        sunColor="white"
        checked={currentTheme === "light" ? true : false}
        onChange={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
      />
  );
}
