(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{2519:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/problems/[pid]",function(){return t(498)}])},498:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return T},default:function(){return F}});var l=t(5893),r=t(5483),i=t(7294),n=t(2770);let a=()=>(0,l.jsx)("div",{className:"space-y-2.5 animate-pulse max-w-lg",children:(0,l.jsx)("div",{className:"flex items-center w-full space-x-2",children:(0,l.jsx)("div",{className:"w-6 h-6 rounded-full bg-dark-fill-3"})})}),d=()=>(0,l.jsx)("div",{className:"space-y-2.5 animate-pulse",children:(0,l.jsx)("div",{className:"flex items-center w-full space-x-2",children:(0,l.jsx)("div",{className:"h-6 w-12 rounded-full bg-dark-fill-3"})})});var c=t(3654),o=t(8193),x=t(3750),m=t(9327),u=t(7516);let p=e=>{let{problem:s,_solved:t}=e,{currentProblem:r,loading:n,problemDifficultyClass:p,setCurrentProblem:h}=function(e){let[s,t]=(0,i.useState)(null),[l,r]=(0,i.useState)(!1),[n,a]=(0,i.useState)("");return(0,i.useEffect)(()=>{let s=async()=>{r(!0);let s=c.S[e];t(s),a("Easy"===s.difficulty?"bg-olive text-olive":"Medium"===s.difficulty?"bg-dark-yellow text-dark-yellow":" bg-dark-pink text-dark-pink"),r(!1)};s()},[e]),{currentProblem:s,loading:l,problemDifficultyClass:n,setCurrentProblem:t}}(s.id),{liked:f,disliked:j,solved:v,setData:g,starred:N}=function(e){let[s,t]=(0,i.useState)({liked:!1,disliked:!1,starred:!1,solved:!1});return(0,i.useEffect)(()=>()=>t({liked:!1,disliked:!1,starred:!1,solved:!1}),[e]),{...s,setData:t}}(s.id),[b,w]=(0,i.useState)(!1);return(0,l.jsxs)("div",{className:"bg-dark-layer-1",children:[(0,l.jsx)("div",{className:"flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden",children:(0,l.jsxs)("div",{className:"flex bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer whitespace-nowrap",children:[(0,l.jsx)(u.ZbI,{className:"w-4 h-4 mr-1"}),"题目描述"]})}),(0,l.jsx)("div",{className:"flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto",children:(0,l.jsx)("div",{className:"px-5",children:(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("div",{className:"flex space-x-4",children:(0,l.jsx)("div",{className:"flex-1 mr-2 text-lg text-white font-medium",children:null==s?void 0:s.title})}),!n&&r&&(0,l.jsxs)("div",{className:"flex items-center mt-3",children:[(0,l.jsx)("div",{className:"".concat(p," inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize "),children:r.difficulty}),(v||t)&&(0,l.jsx)("div",{className:"rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s",children:(0,l.jsx)(x.U4Q,{})}),(0,l.jsxs)("div",{className:"flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6",children:[f&&!b&&(0,l.jsx)(o.L7p,{className:"text-dark-blue-s"}),!f&&!b&&(0,l.jsx)(o.L7p,{}),b&&(0,l.jsx)(o.Z7b,{className:"animate-spin"}),(0,l.jsx)("span",{className:"text-xs",children:r.likes})]}),(0,l.jsxs)("div",{className:"flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6",children:[j&&!b&&(0,l.jsx)(o.Ov5,{className:"text-dark-blue-s"}),!j&&!b&&(0,l.jsx)(o.Ov5,{}),b&&(0,l.jsx)(o.Z7b,{className:"animate-spin"}),(0,l.jsx)("span",{className:"text-xs",children:r.dislikes})]}),(0,l.jsxs)("div",{className:"cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ",children:[N&&!b&&(0,l.jsx)(o.pHD,{className:"text-dark-yellow"}),!N&&!b&&(0,l.jsx)(m.ofN,{}),b&&(0,l.jsx)(o.Z7b,{className:"animate-spin"})]})]}),n&&(0,l.jsxs)("div",{className:"mt-3 flex space-x-2",children:[(0,l.jsx)(d,{}),(0,l.jsx)(a,{}),(0,l.jsx)(d,{}),(0,l.jsx)(d,{}),(0,l.jsx)(a,{})]}),(0,l.jsx)("div",{className:"text-white text-sm",children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:s.problemStatement}})}),(0,l.jsx)("div",{className:"mt-4",children:s.examples.map((e,s)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"font-medium text-white ",children:["示例 ",s+1,"："]}),e.img&&(0,l.jsx)("img",{src:e.img,alt:"",className:"mt-3"}),(0,l.jsx)("div",{className:"example-card",children:(0,l.jsxs)("pre",{children:[(0,l.jsx)("strong",{className:"text-white",children:"输入："})," ",e.inputText,(0,l.jsx)("br",{}),(0,l.jsx)("strong",{children:"输出："}),e.outputText," ",(0,l.jsx)("br",{}),e.explanation&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("strong",{children:"解释："})," ",e.explanation]})]})})]},e.id))}),(0,l.jsxs)("div",{className:"my-8 pb-4",children:[(0,l.jsx)("div",{className:"text-white text-sm font-medium",children:"提示："}),(0,l.jsx)("ul",{className:"text-white ml-5 list-disc ",children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:s.constraints}})})]})]})})})]})};var h=t(155);let f=(e,s)=>{let[t,l]=(0,i.useState)(()=>{try{{let t=window.localStorage.getItem(e);return t?JSON.parse(t):s}}catch(e){return console.error(e),s}});return(0,i.useEffect)(()=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e)}},[e,t]),[t,l]},j=["12px","13px","14px","15px","16px","17px","18px"],v=e=>{let{setSettings:s,settings:t}=e,[r,i]=f("lcc-fontSize","16px"),n=e=>{e.stopPropagation(),s({...t,dropdownIsOpen:!t.dropdownIsOpen})};return(0,l.jsx)("div",{className:"text-white z-40",children:(0,l.jsx)("div",{"aria-modal":"true",role:"dialog",className:"fixed inset-0 overflow-y-auto z-modal",children:(0,l.jsxs)("div",{className:"flex min-h-screen items-center justify-center px-4",children:[(0,l.jsx)("div",{className:"opacity-100",onClick:()=>s({...t,settingsModalIsOpen:!1}),children:(0,l.jsx)("div",{className:"fixed inset-0 bg-gray-8 opacity-60"})}),(0,l.jsxs)("div",{className:"my-8 inline-block min-w-full transform rounded-[13px] text-left transition-all bg-overlay-3 md:min-w-[420px] shadow-level4 shadow-lg p-0 bg-[rgb(40,40,40)] w-[600px] !overflow-visible opacity-100 scale-100",children:[(0,l.jsxs)("div",{className:"flex items-center border-b px-5 py-4 text-lg font-medium  border-dark-divider-border-2",children:["代码编辑器设置",(0,l.jsx)("button",{className:"ml-auto cursor-pointer rounded transition-all",onClick:()=>s({...t,settingsModalIsOpen:!1}),children:(0,l.jsx)(h.bjh,{})})]}),(0,l.jsx)("div",{className:"px-6 pt-4 pb-6",children:(0,l.jsxs)("div",{className:"mt-6 flex justify-between first:mt-0",children:[(0,l.jsxs)("div",{className:"w-[340px]",children:[(0,l.jsx)("h3",{className:" text-base font-medium",children:"字体设置"}),(0,l.jsx)("h3",{className:"text-dark-gray-6 mt-1.5",children:"调整适合你的字体大小。"})]}),(0,l.jsx)("div",{className:"w-[170px]",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("button",{onClick:n,className:"flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 w-full justify-between",type:"button",children:[r,(0,l.jsx)(x.IAR,{})]}),t.dropdownIsOpen&&(0,l.jsx)("ul",{className:"absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg w-full bg-dark-layer-1",style:{filter:"drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)"},children:j.map((e,r)=>(0,l.jsx)(g,{fontSize:e,selectedOption:t.fontSize,handleFontSizeChange:e=>{i(e),s({...t,fontSize:e})}},r))})]})})]})})]})]})})})},g=e=>{let{fontSize:s,selectedOption:t,handleFontSizeChange:r}=e;return(0,l.jsxs)("li",{className:"relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-label-2 dark:text-dark-label-2 hover:bg-dark-fill-3 rounded-lg",children:[(0,l.jsx)("div",{className:"flex h-5 flex-1 items-center pr-2 ".concat(t===s?"font-medium":""),onClick:()=>r(s),children:(0,l.jsx)("div",{className:"whitespace-nowrap",children:s})}),(0,l.jsx)("span",{className:"text-blue dark:text-dark-blue flex items-center pr-2 ".concat(t===s?"visible":"invisible"),children:(0,l.jsx)(x.IQF,{})})]})},N=e=>{let{setSettings:s,settings:t}=e,[r,n]=(0,i.useState)(!1),a=()=>{r?document.exitFullscreen():document.documentElement.requestFullscreen(),n(!r)};return(0,i.useEffect)(()=>{function e(e){if(!document.fullscreenElement){n(!1);return}n(!0)}document.addEventListener&&(document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e))},[r]),(0,l.jsxs)("div",{className:"flex items-center justify-between bg-dark-layer-2 h-11 w-full ",children:[(0,l.jsx)("div",{className:"flex items-center text-white",children:(0,l.jsx)("button",{className:"flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium",children:(0,l.jsx)("div",{className:"flex items-center px-1",children:(0,l.jsx)("div",{className:"text-xs text-label-2 dark:text-dark-label-2",children:"JavaScript"})})})}),(0,l.jsxs)("div",{className:"flex items-center m-2",children:[(0,l.jsxs)("button",{className:"preferenceBtn group",onClick:()=>s({...t,settingsModalIsOpen:!0}),children:[(0,l.jsx)("div",{className:"h-4 w-4 text-dark-gray-6 font-bold text-lg",children:(0,l.jsx)(o.zPD,{})}),(0,l.jsx)("div",{className:"preferenceBtn-tooltip",children:"代码编辑器设置"})]}),(0,l.jsxs)("button",{className:"preferenceBtn group",onClick:a,children:[(0,l.jsx)("div",{className:"h-4 w-4 text-dark-gray-6 font-bold text-lg",children:r?(0,l.jsx)(o.sz8,{}):(0,l.jsx)(o.vju,{})}),(0,l.jsx)("div",{className:"preferenceBtn-tooltip",children:"全屏"})]})]}),t.settingsModalIsOpen&&(0,l.jsx)(v,{settings:t,setSettings:s})]})};var b=t(8468),w=t(752),k=t(7580);let y=e=>{let{handleSubmit:s}=e;return(0,l.jsx)("div",{className:"flex bg-dark-layer-1 absolute bottom-0 z-10 w-full",children:(0,l.jsxs)("div",{className:"mx-5 my-[10px] flex justify-between w-full",children:[(0,l.jsx)("div",{className:"mr-2 flex flex-1 flex-nowrap items-center space-x-4",children:(0,l.jsxs)("button",{className:"px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2",children:["Console",(0,l.jsx)("div",{className:"ml-1 transform transition flex items-center",children:(0,l.jsx)(x.E0f,{className:"fill-gray-6 mx-1 fill-dark-gray-6"})})]})}),(0,l.jsxs)("div",{className:"ml-auto flex items-center space-x-4",children:[(0,l.jsx)("button",{className:"px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded",onClick:s,children:"▶ 执行代码"}),(0,l.jsx)("button",{className:"px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded",onClick:s,children:"提交"})]})]})})};var S=t(2920),E=t(1163);let z=e=>{let{problem:s,setSuccess:t,setSolved:r}=e,[a,d]=(0,i.useState)(0),[o,x]=(0,i.useState)(s.starterCode),[m,u]=f("lcc-fontSize","16px"),[p,h]=(0,i.useState)({fontSize:m,settingsModalIsOpen:!1,dropdownIsOpen:!1}),{query:{pid:j}}=(0,E.useRouter)(),v=async()=>{try{o=o.slice(o.indexOf(s.starterFunctionName));let e=Function("return ".concat(o))(),l=c.S[j].handlerFunction;if("function"==typeof l){let s=l(e);s&&(S.Am.success("恭喜！所有测试都通过了！",{position:"top-center",autoClose:3e3,theme:"dark"}),t(!0),setTimeout(()=>{t(!1)},4e3),r(!0))}}catch(e){console.log(e.message),e.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")?S.Am.error("解答错误！一个或多个测试用例失败",{position:"top-center",autoClose:3e3,theme:"dark"}):S.Am.error(e.message,{position:"top-center",autoClose:3e3,theme:"dark"})}};(0,i.useEffect)(()=>{let e=localStorage.getItem("code-".concat(j));x(e?JSON.parse(e):s.starterCode)},[j,s.starterCode]);let g=e=>{x(e),localStorage.setItem("code-".concat(j),JSON.stringify(e))};return(0,l.jsxs)("div",{className:"flex flex-col bg-dark-layer-1 relative overflow-x-hidden",children:[(0,l.jsx)(N,{settings:p,setSettings:h}),(0,l.jsxs)(n.Z,{className:"h-[calc(100vh-94px)]",direction:"vertical",sizes:[60,40],minSize:60,children:[(0,l.jsx)("div",{className:"w-full overflow-auto",children:(0,l.jsx)(b.ZP,{value:o,theme:w.Pc,onChange:g,extensions:[(0,k.eJ)()],style:{fontSize:p.fontSize}})}),(0,l.jsxs)("div",{className:"w-full px-5 overflow-auto",children:[(0,l.jsx)("div",{className:"flex h-10 items-center space-x-6",children:(0,l.jsxs)("div",{className:"relative flex h-full flex-col justify-center cursor-pointer",children:[(0,l.jsx)("div",{className:"text-sm font-medium leading-5 text-white",children:"测试用例"}),(0,l.jsx)("hr",{className:"absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white"})]})}),(0,l.jsx)("div",{className:"flex",children:s.examples.map((e,s)=>(0,l.jsx)("div",{className:"mr-2 items-start mt-2 ",onClick:()=>d(s),children:(0,l.jsx)("div",{className:"flex flex-wrap items-center gap-y-4",children:(0,l.jsxs)("div",{className:"font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap\n										".concat(a===s?"text-white":"text-gray-500","\n									"),children:["Case ",s+1]})})},e.id))}),(0,l.jsxs)("div",{className:"font-semibold my-4",children:[(0,l.jsx)("p",{className:"text-sm font-medium mt-4 text-white",children:"输入："}),(0,l.jsx)("div",{className:"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2",children:s.examples[a].inputText}),(0,l.jsx)("p",{className:"text-sm font-medium mt-4 text-white",children:"输出："}),(0,l.jsx)("div",{className:"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2",children:s.examples[a].outputText})]})]})]}),(0,l.jsx)(y,{handleSubmit:v})]})};var C=t(725),_=t.n(C);let O=e=>{let{problem:s}=e,{width:t,height:r}=function(){let[e,s]=(0,i.useState)({width:window.innerWidth,height:window.innerHeight});function t(){s({width:window.innerWidth,height:window.innerHeight})}return(0,i.useEffect)(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),e}(),[a,d]=(0,i.useState)(!1),[c,o]=(0,i.useState)(!1);return(0,l.jsxs)(n.Z,{className:"split",minSize:0,children:[(0,l.jsx)(p,{problem:s,_solved:c}),(0,l.jsxs)("div",{className:"bg-dark-fill-2",children:[(0,l.jsx)(z,{problem:s,setSuccess:d,setSolved:o}),a&&(0,l.jsx)(_(),{gravity:.3,tweenDuration:4e3,width:t-1,height:r-1})]})]})};var I=t(6100);let L=e=>{let{problem:s}=e,t=(0,I.Z)();return t?(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Z,{problemPage:!0}),(0,l.jsx)(O,{problem:s})]}):null};var T=!0,F=L}},function(e){e.O(0,[13,445,260,617,762,90,874,589,334,990,774,888,179],function(){return e(e.s=2519)}),_N_E=e.O()}]);