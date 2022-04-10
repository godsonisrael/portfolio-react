import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-g.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="415pt"
        height="377pt"
        version="1.0"
        viewBox="0 0 415 377"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M1310 4230 c-24 -7 -1221 -1197 -1229 -1221 -4 -13 2194 -2217 2224 -2229 16 -6 28 0 57 27 l37 36 26 -32 c15 -17 36 -31 48 -31 16 0 252 229 810 788 433 433 787 792 787 797 0 6 -213 224 -474 484 l-475 475 -108 7 c-134 10 -1019 11 -1209 3 l-139 -7 -152 -150 c-98 -97 -153 -158 -153 -172 0 -24 918 -947 947 -951 10 -2 35 13 55 33 l37 36 26 -32 c15 -17 36 -31 48 -31 25 0 317 285 317 310 0 8 -107 122 -237 252 l-238 238 225 0 224 0 248 -247 248 -248 -432 -432 -433 -433 -747 747 c-412 412 -748 752 -748 758 0 6 170 180 378 388 l377 377 805 1 c443 1 816 4 830 8 21 6 36 36 106 206 103 252 100 241 72 249 -34 9 -2129 5 -2158 -4z m2157 -8 c8 -5 -12 -66 -73 -212 -46 -112 -89 -209 -94 -214 -8 -8 -269 -12 -833 -14 l-822 -2 -380 -380 c-208 -208 -380 -385 -381 -393 -2 -17 1495 -1517 1514 -1517 7 0 11 -4 8 -8 -3 -5 9 -23 27 -39 27 -26 36 -29 57 -21 14 5 233 216 486 470 329 328 460 465 457 477 -2 10 -114 127 -249 262 l-244 244 -83 1 -82 2 77 -7 78 -6 245 -245 c135 -135 245 -250 245 -255 0 -17 -925 -935 -942 -935 -9 0 -28 14 -43 32 l-27 31 431 431 c237 237 431 436 431 441 0 6 -112 122 -248 258 l-248 247 -232 0 c-178 0 -232 -3 -232 -12 0 -7 107 -120 237 -250 l238 -238 -150 -150 c-82 -82 -154 -150 -160 -150 -13 0 -929 916 -933 933 -1 7 63 77 143 156 80 80 143 147 140 149 -9 9 -303 -289 -301 -305 1 -8 196 -207 432 -444 l429 -429 -38 -37 -37 -38 -470 470 c-258 258 -470 474 -470 480 0 6 69 79 153 162 l152 150 130 7 c167 8 1014 8 1176 0 l124 -6 478 -477 477 -476 -787 -787 c-434 -434 -793 -788 -799 -788 -6 0 -56 46 -110 103 -54 56 -550 554 -1102 1108 l-1003 1005 598 603 c329 331 594 602 588 602 -14 0 -1195 -1192 -1195 -1205 0 -6 421 -432 936 -946 514 -514 994 -997 1066 -1073 l131 -138 -28 -29 c-16 -17 -34 -30 -39 -30 -6 0 -509 498 -1118 1108 l-1108 1107 605 605 c332 332 612 608 622 611 25 10 2135 11 2150 1z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo


/* <path xmlns="http://www.w3.org/2000/svg" d="M1310 4230 c-24 -7 -1221 -1197 -1229 -1221 -4 -13 2194 -2217 2224 -2229 16 -6 28 0 57 27 l37 36 26 -32 c15 -17 36 -31 48 -31 16 0 252 229 810 788 433 433 787 792 787 797 0 6 -213 224 -474 484 l-475 475 -108 7 c-134 10 -1019 11 -1209 3 l-139 -7 -152 -150 c-98 -97 -153 -158 -153 -172 0 -24 918 -947 947 -951 10 -2 35 13 55 33 l37 36 26 -32 c15 -17 36 -31 48 -31 25 0 317 285 317 310 0 8 -107 122 -237 252 l-238 238 225 0 224 0 248 -247 248 -248 -432 -432 -433 -433 -747 747 c-412 412 -748 752 -748 758 0 6 170 180 378 388 l377 377 805 1 c443 1 816 4 830 8 21 6 36 36 106 206 103 252 100 241 72 249 -34 9 -2129 5 -2158 -4z m2157 -8 c8 -5 -12 -66 -73 -212 -46 -112 -89 -209 -94 -214 -8 -8 -269 -12 -833 -14 l-822 -2 -380 -380 c-208 -208 -380 -385 -381 -393 -2 -17 1495 -1517 1514 -1517 7 0 11 -4 8 -8 -3 -5 9 -23 27 -39 27 -26 36 -29 57 -21 14 5 233 216 486 470 329 328 460 465 457 477 -2 10 -114 127 -249 262 l-244 244 -83 1 -82 2 77 -7 78 -6 245 -245 c135 -135 245 -250 245 -255 0 -17 -925 -935 -942 -935 -9 0 -28 14 -43 32 l-27 31 431 431 c237 237 431 436 431 441 0 6 -112 122 -248 258 l-248 247 -232 0 c-178 0 -232 -3 -232 -12 0 -7 107 -120 237 -250 l238 -238 -150 -150 c-82 -82 -154 -150 -160 -150 -13 0 -929 916 -933 933 -1 7 63 77 143 156 80 80 143 147 140 149 -9 9 -303 -289 -301 -305 1 -8 196 -207 432 -444 l429 -429 -38 -37 -37 -38 -470 470 c-258 258 -470 474 -470 480 0 6 69 79 153 162 l152 150 130 7 c167 8 1014 8 1176 0 l124 -6 478 -477 477 -476 -787 -787 c-434 -434 -793 -788 -799 -788 -6 0 -56 46 -110 103 -54 56 -550 554 -1102 1108 l-1003 1005 598 603 c329 331 594 602 588 602 -14 0 -1195 -1192 -1195 -1205 0 -6 421 -432 936 -946 514 -514 994 -997 1066 -1073 l131 -138 -28 -29 c-16 -17 -34 -30 -39 -30 -6 0 -509 498 -1118 1108 l-1108 1107 605 605 c332 332 612 608 622 611 25 10 2135 11 2150 1z"/> */
