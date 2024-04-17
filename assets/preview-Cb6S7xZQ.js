function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-BvsXwE6s.js","assets/chunk-HLWAVYOI-Dsm4RDvW.js","assets/iframe-YzC87kCq.js","assets/index-B3ehnkiM.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/react-18-ep-XZ8cl.js","assets/index-DeIys0fC.js","assets/index-DGQ2PN9F.js","assets/index-C0WyxOS1.js","assets/index-B_J8iUie.js","assets/index-8sIbGq5v.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-YzC87kCq.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BvsXwE6s.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
