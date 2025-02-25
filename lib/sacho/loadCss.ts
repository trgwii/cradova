// #Cradova-app-wrappper {
//   bottom: 0;
//   display: flex;
//   flex-direction: column;
//   left: 0;
//   position: fixed;
//   right: 0;
//   top: 0;
//   z-index: 0;
//   padding: 0px;
//   margin: 0px;
// }
// #cradova-screen-set {
//   display: flex;
//   flex-grow: 1;
//   overflow-y: auto;
//   padding: 0px;
//   margin: 0px;
// }
export function loadCradovaUICss(seconds = 0.3) {
  const css = `:root {
--animation-timing: ${seconds + ""}s;
}

/* cradova roots*/

/*screen animations*/
.CRADOVA-UI-CIRCLE-OUT {
  animation: circle-out var(--animation-timing) ease forwards; 
}

.CRADOVA-UI-CIRCLE-IN {
  animation: circle-in var(--animation-timing) ease forwards; 
}

.CRADOVA-UI-SCALE-IN {
  animation: scale-in var(--animation-timing) ease forwards;
}

.CRADOVA-UI-SCALE-OUT {
  animation: scale-out var(--animation-timing) ease forwards;
}

.CRADOVA-UI-SLIDE-RIGHT {
  animation: slide-right var(--animation-timing) ease forwards;
}

.CRADOVA-UI-SLIDE-LEFT {
  animation: slide-left var(--animation-timing) ease forwards;
}

.CRADOVA-UI-SLIDE-UP {
  animation: slide-up var(--animation-timing) ease forwards;
}

.CRADOVA-UI-SLIDE-DOWN {
  animation: slide-down var(--animation-timing) ease forwards;
}

/* not done yet */ 

.CRADOVA-UI-FADE-IN {
  animation: fade-in var(--animation-timing) ease forwards;
}

.CRADOVA-UI-FADE-OUT {
  animation: fade-out var(--animation-timing) ease forwards;
}

/* ultility classes */

.CIRCLE-OUT {
  animation: fadeoff var(--animation-timing) ease forwards;
}

.CIRCLE-IN {
  animation: fadein var(--animation-timing) ease forwards;
}

/* animations  */

@keyframes circle-out {
  from {
    border-radius: 49%;
    /* width: 100%; */
    /* height: 100%; */
    margin: auto;
    margin-top: 40%;
  }
  
  to  {
    border-radius: 100%;
    /* width: 0%; */
    /* height: 0%; */
    margin: auto;
    margin-top: 50%;
  }
}

@keyframes circle-in {
  from {
    border-radius: 100%;
    /* width: 0%; */
    /* height: 0%; */
    margin: auto;
    margin-top: 40%;
  }
  to  {
    border-radius: 0%;
    /* width: 100vw; */
    /* height: 100vh; */
    margin: auto;
    margin-top: 0%;
  }
}

@keyframes scale-in {
  from {
   transform: scale(1);
  } 
  to {
   transform: scale(0);
  }
}


@keyframes scale-out {
  from {
    transform: scale(0);
    } 
  to {
    transform: scale(1);
   }
}

@keyframes slide-right {
  from {
  margin-left: -140%;
  }
  to  {
  margin-left: 0%;
  }
}

@keyframes slide-left {
  from {
  margin-left: 140%;
  }
  to  {
  margin-left: 0%;
  }
}

@keyframes slide-up {
  from {
  margin-top: 140%;
  }
  to  {
  margin-top: 0%;
  }
}

@keyframes slide-down {
  from {
  margin-top: -140%;
  }
  to  {
  margin-top: 0%;
  }
}

@keyframes fade-in {
  from {
  opacity: 0;
  }
  to  {
  opacity: 1;
  }
}

@keyframes fade-out {
  from {
  opacity: 1;
  }
  to  {
  opacity: 0;
  }
}

/* ultility animations */


@keyframes fadeoff {
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
} 

@keyframes fadein {
  0% { 
    opacity: 0;
}
  70%{
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
} `;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}
