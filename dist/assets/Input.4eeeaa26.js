var y=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var r=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))v.call(e,o)&&r(t,o,e[o]);if(a)for(var o of a(e))b.call(e,o)&&r(t,o,e[o]);return t},n=(t,e)=>f(t,h(e));import{c as l,e as g,a as w,b as x}from"./index.0699fed6.js";import{r as c,d,c as j,j as A}from"./vendor.b30708ff.js";const D=()=>{const t=d(i=>i.modalForm),e=d(i=>i.selectedActivity),o=j(),m=async()=>{const i=await w(`/activity-groups/${e.id}`);o(x(i))},p=async()=>{if(!t.title)return;const i={title:t.title,priority:t.priority==="Medium"?"normal":t.priority.replace(" ","-").toLowerCase(),activity_group_id:e.id};await g("/todo-items",i).finally(()=>o(l({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))),await m()},u=c.exports.useMemo(()=>i=>{o(l(n(s({},t),{title:i.target.value})))},[t.title,t.priority]);return A("input",{onChange:u,onKeyDown:async i=>{i.key==="Enter"&&await p()},"data-cy":"modal-add-name-input",id:"item-name",placeholder:"Tambahkan nama list item",className:"block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-neutral-400 focus:border-primary-500",value:t.title})};var F=c.exports.memo(D);export{F as default};