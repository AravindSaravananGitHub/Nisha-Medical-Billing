import React, { useEffect, useRef, useState } from "react";
import "../CSS/mobileMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import gsap from "gsap";

const MobilMenu = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const menus = ["Home", "About", "Experience", "Projects", "Contact"];

  const mobileMenuItems = document.querySelectorAll(".menu-list li");

  // Open Menu
  const openMenu = () => {
    setOpen(true);
    gsap.to(containerRef.current, {
      width: 256,
      height: 256,
      borderRadius: 20,
      duration: 0.4,
      ease: "back.out(1.6)",
    });
  };

  // Close Menu
  const closeMenu = () => {
    gsap.to(containerRef.current, {
      width: 56,
      height: 56,
      borderRadius: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
  };

  // Outside click close menu
  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [open]);

  // Hover effect for anchor
  mobileMenuItems.forEach((item) => {
    const link = item.querySelector("a");

    item.addEventListener("mouseenter", () => {
      gsap.to(link, {
        scale: 1.3,
        duration: 0.25,
        ease: "back.out(2)",
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });

  return (
    <div className="burger-wrap">
      <div className="burger-container" ref={containerRef}>
        {!open && (
          <button className="burger-icon" onClick={openMenu}>
            <MenuIcon />
          </button>
        )}

        {open && (
          <ul className="menu-list">
            {menus.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase}`} onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobilMenu;
