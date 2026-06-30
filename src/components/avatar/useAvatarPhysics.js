import { useEffect, useRef } from "react";

export default function useAvatarPhysics() {

  const ref = useRef(null);

  useEffect(() => {

    const el = ref.current;

    if (!el) return;

    let dragging = false;

    let startX = 0;

    let startY = 0;

    let x = 0;

    let y = 0;

    function down(e) {

      dragging = true;

      startX =
        e.clientX - x;

      startY =
        e.clientY - y;

      window.addEventListener(
        "mousemove",
        move
      );

      window.addEventListener(
        "mouseup",
        up
      );
    }

    function move(e) {

      if (!dragging)
        return;

      x =
        e.clientX -
        startX;

      y =
        e.clientY -
        startY;

      el.style.transform =
        `translate(${x}px, ${y}px)`;

    }

    function up() {

      dragging = false;

      el.style.transform =
        "translate(0px,0px)";

      x = 0;

      y = 0;

      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseup",
        up
      );
    }

    el.addEventListener(
      "mousedown",
      down
    );

    return () => {
      el.removeEventListener(
        "mousedown",
        down
      );
    };

  }, []);

  return ref;
}