"use strict";let activate5=()=>{const t=document.getElementById("earth"),e=document.getElementById("date"),n=document.getElementById("datePicker"),i=document.getElementById("ellipse");var a=!1;const r=150;var h=new Date,u=h.getFullYear(),o=new Date(h.getFullYear(),0,0),s=h-o;var d=Math.floor(s/864e5),l=D(d);e.children[0].innerText=b(l.getDate())+"/"+b(l.getMonth()+1)+"/"+l.getFullYear();var c=2*Math.asin((d-1)/(182.5+(f()?.5:0))-1),g=r*Math.cos(c),v=73*Math.sin(c);t.setAttribute("x",r+g-7.5+25),t.setAttribute("y",73-v-7.5+10),t.addEventListener("mousedown",m),t.addEventListener("touchstart",m),addEventListener("mousemove",y),addEventListener("touchmove",y),addEventListener("mouseup",L),addEventListener("touchend",L);var M=e.getBoundingClientRect();function m(t){a=!0}function y(n){if(!a)return;const{clientX:o,clientY:s}=null!=n.touches?n.touches[0]:n,d=i.getBoundingClientRect(),g=d.x+d.width/2+25,v=d.y+d.height/2+10;c=Math.atan2(v-s,o-g);let M=r*Math.cos(c),m=73*Math.sin(c);t.setAttribute("x",r+M-7.5+25),t.setAttribute("y",73-m-7.5+10);let y=l;var L=(182.5+(f()?.5:0))*(Math.sin(c/2)+1)+1;l=D(L),1==y.getDate()&&0==y.getMonth()&&31==l.getDate()&&11==l.getMonth()?u--:31==y.getDate()&&11==y.getMonth()&&1==l.getDate()&&0==l.getMonth()&&u++,L=(182.5+(f()?.5:0))*(Math.sin(c/2)+1)+1,(l=D(L)).getTime()>h.getTime()?(e.children[0].classList.add("future"),e.children[0].innerText="你转反方向了，未来战士",birthday=null,birthdayLabel.innerHTML=""):(e.children[0].classList.remove("future"),e.children[0].innerText=b(l.getDate())+"/"+b(l.getMonth()+1)+"/"+l.getFullYear(),birthday=l,birthdayLabel.innerHTML=l.toDateString())}function D(t){var e=new Date(u,0);return new Date(e.setDate(t))}function L(t){a=!1}function b(t){return t<10?"0"+t:t}function f(){return u%100==0?u%400==0:u%4==0}n.style.top=M.height+"px",n.style.right=0,e.style.height=M.height+"px"};