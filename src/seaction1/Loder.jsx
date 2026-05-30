import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Loader = () => {
  const loaderRef = useRef(null);
  const svgRef = useRef(null);

  useGSAP(() => {
    const body = document.body;
    const paths = svgRef.current.querySelectorAll("path");

    const tl = gsap.timeline();

    // Initial setup
    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: "#735F25",
      fill: "none",
        strokeWidth: 20,
      });
    });

    // Lock scroll
    gsap.set(body, {
      overflow: "hidden",
    });

    // Draw SVG
    tl.to(paths, {
      fill: "#735F25",
      strokeDashoffset: 0,
      duration: 5,
      ease: "power4.in",
    });

    // Exit animation
    tl.to(svgRef.current, {
      y: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
    });

    // Loader close
    tl.to(loaderRef.current, {
      height: 0,
      duration: 1,
      ease: "power4.out",
      onComplete: () => {
        gsap.set(loaderRef.current, {
          display: "none",
        });

        gsap.set(body, {
          overflow: "auto",
        });
      },
    },"-=0.3");
  });

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 z-999 flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <div className="mb-20 flex w-88 items-center justify-center overflow-hidden">
        <svg
          ref={svgRef}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid meet"
          className="h-auto w-full">
          <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)" fill="#735F25" stroke="none" class="" fill="#735F25"
          stroke="none"><path d="M2950 3617 c-20 -17 -202 -183 -405 -367 -204 -184 -424 -385 -490 -445 -191 -176 -591 -543 -681 -625 l-82 -75 154 -3 154 -3 0 -914 0 -915 250 0 250 0 0 518 0 517 207 0 207 0 137 190 137 190 -347 3 -346 2 2 246 2 246 243 221 c476 436 643 587 649 587 3 0 111 -91 240 -201 129 -111 287 -246 352 -301 l117 -99 0 -309 c0 -169 -3 -316 -6 -325 -13 -33 -59 -45 -179 -45 l-115 0 0 343 -1 342 -181 140 c-100 77 -213 164 -250 193 l-68 53 0 -1255 0 -1256 425 0 c270 0 443 4 477 11 95 20 176 67 264 154 141 140 184 242 191 461 7 173 -11 276 -64 377 -38 73 -116 152 -178 181 l-36 17 52 26 c166 83 268 294 256 528 l-6 100 160 -1 c87 -1 159 2 159 7 0 4 -5 9 -10 11 -6 2 -96 77 -200 168 l-190 165 0 432 0 433 35 0 35 0 0 50 0 50 -323 0 -322 0 1 -52 0 -53 37 3 37 4 0 -158 0 -158 -32 30 c-18 17 -105 93 -193 169 -327 284 -470 410 -473 418 -6 12 -16 8 -52 -26z m123 -198 c45 -40 208 -180 362 -312 154 -132 301 -260 328 -286 l47 -45 0 282 0 282 138 0 137 0 -3 -455 -2 -454 108 -93 109 -93 -88 -3 c-49 -1 -89 -4 -89 -6 0 -1 10 -29 22 -62 17 -48 22 -82 22 -179 1 -142 -14 -203 -74 -293 -48 -72 -116 -121 -226 -163 -90 -35 -104 -45 -104 -69 0 -23 27 -45 75 -60 156 -49 258 -156 296 -310 18 -76 16 -260 -5 -339 -37 -143 -134 -263 -263 -324 l-68 -32 -387 -3 -388 -3 -2 1073 c-2 590 -2 1074 -2 1076 1 2 63 -46 138 -105 l136 -108 0 -372 0 -373 178 0 c193 0 235 7 283 47 58 49 59 58 59 451 l0 358 -297 254 c-164 140 -349 299 -411 353 l-112 98 -104 -93 c-57 -51 -284 -257 -504 -458 l-402 -365 0 -330 0 -330 296 3 297 3 -25 -33 c-13 -18 -42 -57 -64 -86 l-39 -53 -232 3 -233 3 0 -512 0 -512 -130 -3 -130 -3 0 908 0 907 -75 0 -75 0 175 160 c144 131 572 521 1144 1042 53 48 97 87 99 88 2 0 40 -32 85 -71z" class=""></path>  <path d="M3290 1013 l0 -264 213 3 214 3 37 29 c60 46 81 102 81 221 0 89 -3 106 -28 158 -22 44 -39 63 -75 84 -45 27 -48 27 -244 29 l-198 2 0 -265z m397 125 c32 -30 47 -114 33 -182 -17 -85 -29 -90 -186 -94 l-134 -4 0 149 c0 82 2 152 4 154 2 2 62 3 133 1 113 -3 131 -6 150 -24z" class=""></path> </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;