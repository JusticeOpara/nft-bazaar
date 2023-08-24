import { useState, useEffect, useRef, CSSProperties } from "react";

interface Hover3DProps {
  x?: number;
  y?: number;
  z?: number;
}

export default function Hover3D({
  x = 0,
  y = 0,
  z = 0
}: Hover3DProps): CSSProperties {

  const ref = useRef<HTMLDivElement>(null);
  
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current) {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      const { clientX, clientY } = e;

      const xCoord = (clientX - width / 2) / width;
      const yCoord = (clientY - height / 2) / height;

      setCoords({ x: xCoord, y: yCoord });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;

    if (current) {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        current.removeEventListener("mousemove", handleMouseMove);
        current.removeEventListener("mouseenter", handleMouseEnter);
        current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.5s ease";

  return { transform, transition };
}
