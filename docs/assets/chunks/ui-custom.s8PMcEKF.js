import{u as i,a as l}from"./theme.D3A9bHIM.js";import{d as p,h as f,y as c,l as u,o as _,c as m,_ as b}from"./framework.7pWjBRCP.js";const v=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),a=r.carbonAds,{isAsideEnabled:s}=l(),o=f();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>d.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&u(()=>{s.value?t():c(s,e=>e&&t())}),(e,h)=>(_(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}}),k=b(v,[["__scopeId","data-v-2e1efd59"]]);export{k as default};