(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9945)}])},9945:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var a=s(5893),r=s(1664),l=s.n(r),i=s(7294),n=s(3750),d=s(8193),o=s(155),c=s(3913);let m=[{id:"two-sum",title:"两数之和",difficulty:"Easy",acRate:"52.9%",videoId:"8-k1C6ehKuw"},{id:"add-two-numbers",title:"两数相加",difficulty:"Medium",acRate:"42.4%",videoId:""},{id:"longest-substring-without-repeating-characters",title:"无重复字符的最长子串",difficulty:"Medium",acRate:"39.1%",videoId:""},{id:"median-of-two-sorted-arrays",title:"寻找两个正序数组的中位数",difficulty:"Hard",acRate:"41.5%",videoId:"xty7fr-k0TU"},{id:"longest-palindromic-substring",title:"最长回文字串",difficulty:"Medium",acRate:"37.6%",videoId:"ZfFl4torNg4"},{id:"regular-expression-matching",title:"正则表达式匹配",difficulty:"Hard",acRate:"30.8%",videoId:""},{id:"container-with-most-water",title:"盛最多水的容器",difficulty:"Medium",acRate:"60.3%",videoId:""},{id:"3sum",title:"三数之和",difficulty:"Medium",acRate:"37.0%",videoId:"4qYTqOiRMoM"},{id:"letter-combinations-of-a-phone-number",title:"电话号码的字母组合",difficulty:"Medium",acRate:"58.1%",videoId:""},{id:"remove-nth-node-from-end-of-list",title:"删除链表的倒数第 N 个结点",difficulty:"Medium",acRate:"45.6%",videoId:""}],x=()=>{let[e,t]=(0,i.useState)({isOpen:!1,videoId:""}),s=()=>{t({isOpen:!1,videoId:""})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("tbody",{className:"text-white",children:m.map((e,s)=>{let r="Easy"===e.difficulty?"text-dark-green-s":"Medium"===e.difficulty?"text-dark-yellow":"text-dark-pink";return(0,a.jsxs)("tr",{className:"".concat(s%2==1?"bg-dark-layer-1":""),children:[(0,a.jsx)("th",{className:"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s",children:(0,a.jsx)(n.nRB,{fontSize:"18",width:"18"})}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)(l(),{className:"hover:text-blue-600 cursor-pointer",href:"/problems/".concat(e.id),children:e.title})}),(0,a.jsx)("td",{className:"px-6 py-4 ".concat(r),children:e.difficulty}),(0,a.jsx)("td",{className:"px-6 py-4",children:e.acRate}),(0,a.jsx)("td",{className:"px-6 py-4",children:e.videoId?(0,a.jsx)(d.b1v,{fontSize:"28",className:"cursor-pointer hover:text-red-600",onClick:()=>t({isOpen:!0,videoId:e.videoId})}):(0,a.jsx)("p",{className:"text-gray-400",children:"Coming soon"})})]},e.id)})}),e.isOpen&&(0,a.jsxs)("tfoot",{className:"fixed top-0 left-0 h-screen w-screen flex items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute",onClick:s}),(0,a.jsx)("div",{className:"w-full z-50 h-full px-6 relative max-w-4xl",children:(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center relative",children:(0,a.jsxs)("div",{className:"w-full relative",children:[(0,a.jsx)(o.bjh,{fontSize:"35",className:"cursor-pointer absolute -top-16 right-0",onClick:s}),(0,a.jsx)(c.Z,{videoId:e.videoId,loading:"lazy",iframeClassName:"w-full min-h-[500px]"})]})})})]})]})};var u=s(5483),p=s(6100),h=s(718),f=s(1163),g=s(4480),b=s(2920),j=s(5675),y=s.n(j),w=s(1649),N=s(5434);let v=()=>{(0,f.useRouter)();let[e,t]=(0,i.useState)({phone:"",password:""}),[s,r]=(0,i.useState)(!1),l=(0,g.Zl)(h.c),n=e=>{l(t=>({...t,type:e}))},d=e=>{t(t=>({...t,[e.target.name]:e.target.value}))},o=()=>{r(e=>!e)},c=async t=>{if(t.preventDefault(),!e.phone||!e.password)return b.Am.error("请完整填写表单",{position:"top-center"})};return(0,a.jsxs)("form",{className:"space-y-5 px-6 pb-4",onSubmit:c,children:[(0,a.jsx)(y(),{alt:"logo",src:"./logo.svg",width:59,height:22,className:"mx-auto"}),(0,a.jsx)("h3",{className:"text-xl font-medium text-white",children:"账号密码登录"}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{onChange:d,type:"phone",name:"phone",id:"phone",className:" border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full  p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white",placeholder:"手机/邮箱"})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{onChange:d,type:"password",name:"password",id:"password",className:" border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full  p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white",placeholder:"输入密码"})}),(0,a.jsx)("button",{type:"submit",className:"w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s",children:"登录"}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("div",{className:"text-sm font-medium text-gray-300",onClick:()=>n("register"),children:"验证码登录"}),(0,a.jsx)("div",{className:"text-sm font-medium text-gray-300",onClick:()=>n("forgotPassword"),children:"忘记密码"})]}),(0,a.jsxs)("div",{className:"w-full flex justify-center items-center",children:[s?(0,a.jsx)(w.mMY,{className:"h-5 w-5 text-dark-blue-s mr-1",onClick:o}):(0,a.jsx)(N.hrt,{className:"h-5 w-5 text-gray-400 hover:text-dark-blue-s mr-1",onClick:o}),(0,a.jsxs)("span",{className:"text-xs font-medium text-gray-400",children:["同意力扣",(0,a.jsx)("a",{className:"text-gray-300 cursor-pointer",children:"《用户协议》"}),"和",(0,a.jsx)("a",{className:"text-gray-300 cursor-pointer",children:"《隐私协议》"})]})]})]})},k=()=>{let[e,t]=(0,i.useState)(""),s=async e=>{e.preventDefault(),b.Am.success("验证码已发送到您的手机号或电子邮箱",{position:"top-center",autoClose:3e3,theme:"dark"})};return(0,a.jsxs)("form",{className:"space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8",onSubmit:s,children:[(0,a.jsx)("h3",{className:"text-xl font-medium  text-white",children:"重置密码"}),(0,a.jsx)("p",{className:"text-sm text-white ",children:"忘记密码了？请输入您的11位手机号或者电子邮箱，我们将发送验证码到您手机或者电子邮箱。"}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"email",name:"email",onChange:e=>t(e.target.value),id:"email",className:"border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white",placeholder:"手机号/邮箱"})}),(0,a.jsx)("button",{type:"submit",className:"w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center \n                bg-brand-orange hover:bg-brand-orange-s ",children:"获取验证码"})]})},C=()=>{(0,f.useRouter)();let e=(0,g.Zl)(h.c),[t,s]=(0,i.useState)({phone:"",password:""}),[r,l]=(0,i.useState)(!1),n=()=>{e(e=>({...e,type:"login"}))},d=e=>{s(t=>({...t,[e.target.name]:e.target.value}))},o=()=>{l(e=>!e)},c=async e=>{if(e.preventDefault(),!t.phone||!t.password)return b.Am.error("请完整填写表单",{position:"top-center"});try{b.Am.loading("正在创建您的账户",{position:"top-center"})}catch(e){b.Am.error(e.message,{position:"top-center"})}finally{b.Am.dismiss("loadingToast")}};return(0,a.jsxs)("form",{className:"space-y-5 px-6 pb-4",onSubmit:c,children:[(0,a.jsx)(y(),{alt:"logo",src:"./logo.svg",width:152,height:100}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{onChange:d,type:"phone",name:"phone",id:"phone",className:" border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 pl-[82px] bg-dark-input border-transparent placeholder-gray-400 text-white",placeholder:"输入手机号"}),(0,a.jsx)("div",{className:"absolute top-[50%] left-0 translate-y-[-50%] w-[64px] sm:text-sm text-center text-gray-400 after:block after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gray-400",children:"+86"})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{onChange:d,type:"password",name:"password",id:"password",className:" border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-dark-input border-transparent placeholder-gray-400 text-white",placeholder:"验证码"}),(0,a.jsx)("div",{className:"absolute top-[50%] right-5 translate-y-[-50%] sm:text-sm text-gray-300 cursor-pointer",children:"获取验证码"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s",children:"登录 / 注册"}),(0,a.jsx)("div",{className:"text-sm font-medium text-gray-300 cursor-pointer",onClick:n,children:"账号密码登录"}),(0,a.jsxs)("div",{className:"w-full flex justify-center items-center",children:[r?(0,a.jsx)(w.mMY,{className:"h-5 w-5 text-dark-blue-s mr-1",onClick:o}):(0,a.jsx)(N.hrt,{className:"h-5 w-5 text-gray-400 hover:text-dark-blue-s mr-1",onClick:o}),(0,a.jsxs)("span",{className:"text-xs font-medium text-gray-400",children:["同意力扣",(0,a.jsx)("a",{className:"text-gray-300 cursor-pointer",children:"《用户协议》"}),"和",(0,a.jsx)("a",{className:"text-gray-300 cursor-pointer",children:"《隐私协议》"})]})]})]})},I=()=>{let e=(0,g.sJ)(h.c),t=function(){let e=(0,g.Zl)(h.c),t=()=>{e(e=>({...e,isOpen:!1,type:"register"}))};return(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),t}();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"fixed left-0 bottom-0 right-0 top-0 z-[99] flex items-center justify-center bg-black bg-opacity-60",children:(0,a.jsx)("div",{className:"w-full sm:w-[450px] flex justify-center items-center animate-fadeInUp",children:(0,a.jsx)("div",{className:"relative w-full h-full mx-auto flex items-center justify-center",children:(0,a.jsxs)("div",{className:"rounded-lg shadow relative w-full bg-dark-layer-1 mx-6",children:[(0,a.jsx)("div",{className:"flex justify-end p-2",children:(0,a.jsx)("button",{type:"button",className:"bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-brand-orange text-white",onClick:t,children:(0,a.jsx)(o.bjh,{className:"h-5 w-5"})})}),"login"===e.type?(0,a.jsx)(v,{}):"register"===e.type?(0,a.jsx)(C,{}):(0,a.jsx)(k,{})]})})})})})};function R(){let e=(0,g.sJ)(h.c),[t,s]=(0,i.useState)(!0);setTimeout(()=>{s(!1)},2e3);let r=(0,p.Z)();return r?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{className:"bg-dark-layer-2 min-h-screen",children:[e.isOpen&&(0,a.jsx)(I,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)("h1",{className:"text-2xl text-center text-white dark:text-gray-400 font-medium mt-10 mb-5",children:"\uD83D\uDD25 LeetCode 热题 HOT 100"}),(0,a.jsxs)("div",{className:"relative overflow-x-auto mx-auto px-6 pb-10",children:[t&&(0,a.jsx)("div",{className:"max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse",children:m.map((e,t)=>(0,a.jsx)(S,{},t))}),!t&&(0,a.jsxs)("table",{className:"text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto",children:[(0,a.jsx)("thead",{className:"text-sm text-gray-400 border-b ",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-1 py-3 w-0 font-medium",children:"状态"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 w-0 font-medium whitespace-nowrap",children:"题目"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 w-0 font-medium",children:"难度"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 w-0 font-medium",children:"通过率"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 w-0 font-medium",children:"题解"})]})}),(0,a.jsx)(x,{})]})]})]})}):null}let S=()=>(0,a.jsxs)("div",{className:"flex items-center space-x-12 mt-4 px-6",children:[(0,a.jsx)("div",{className:"w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"}),(0,a.jsx)("div",{className:"h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"}),(0,a.jsx)("div",{className:"h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"}),(0,a.jsx)("div",{className:"h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"})]})}},function(e){e.O(0,[13,445,260,617,228,866,589,913,990,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);