(function(){"use strict";var e={5520:function(e,t,n){var o=n(9242),s=n(3396),i=(n(7658),n(7139)),a=n(7998),r=n(6309),c=n(5956),l=n(3082);const u={class:"nav"},d={class:"container"},A={class:"nav__wrapper"},m=(0,s._)("div",{class:"nav__logo"},[(0,s._)("img",{src:a,alt:"logo"})],-1),p={class:"nav__link dropdown"},f=(0,s._)("span",null,"Выбрать профессию",-1),g=(0,s._)("img",{class:"nav__arrow",src:r,alt:"arrow"},null,-1),h={class:"dropdown__content"},_={class:"nav__link dropdown"},v=(0,s._)("span",null,"Поступить в вуз",-1),w=(0,s._)("img",{class:"nav__arrow",src:r,alt:"arrow"},null,-1),k={class:"dropdown__content"},b=(0,s._)("span",{class:"burger-item"},"Menu",-1),y=[b],C={class:"nav__right"},x=(0,s._)("img",{src:c,alt:"Search"},null,-1),U=[x],R={class:"nav__account"},I={key:0,class:"search"},S={class:"container"};function E(e,t,n,a,r,b){const x=(0,s.up)("router-link"),E=(0,s.up)("notification");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",u,[(0,s._)("div",d,[(0,s._)("div",A,[m,(0,s._)("nav",{class:(0,i.C_)(["nav__links",a.toggle?"shown":""])},[(0,s.Wm)(x,{to:"/tests",class:"nav__link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Тесты")])),_:1}),a.store.getters.getAdmin?((0,s.wg)(),(0,s.j4)(x,{key:0,to:"/admin",class:"nav__link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Админ")])),_:1})):(0,s.kq)("",!0),(0,s._)("div",p,[f,g,(0,s._)("div",h,[(0,s.Wm)(x,{to:"/tests"},{default:(0,s.w5)((()=>[(0,s.Uk)("Тесты на выбор профессии")])),_:1}),(0,s.Wm)(x,{to:"/professions"},{default:(0,s.w5)((()=>[(0,s.Uk)("Все профессии")])),_:1}),(0,s.Wm)(x,{to:"/faq"},{default:(0,s.w5)((()=>[(0,s.Uk)("FAQ: Как выборать профессию")])),_:1})])]),(0,s._)("div",_,[v,w,(0,s._)("div",k,[(0,s.Wm)(x,{to:"/edu/Алматы"},{default:(0,s.w5)((()=>[(0,s.Uk)("Вузы Алматы")])),_:1}),(0,s.Wm)(x,{to:"/edu/Нур-Султан"},{default:(0,s.w5)((()=>[(0,s.Uk)("Вузы Нур-Султана")])),_:1}),(0,s.Wm)(x,{to:"/edu/Шымкент"},{default:(0,s.w5)((()=>[(0,s.Uk)("Вузы Шымкента")])),_:1}),a.store.getters.getAuth?((0,s.wg)(),(0,s.iD)("a",{key:0,href:"#",onClick:t[0]||(t[0]=t=>e.$router.push(`/edu/${a.location}`))}," Вузы в вашем городе")):(0,s.kq)("",!0)])])],2),(0,s._)("div",{class:"burger__item",onClick:t[1]||(t[1]=e=>a.toggle=!a.toggle)},[(0,s._)("button",{class:(0,i.C_)(["burger",a.toggle?"shown":""]),type:"button"},y,2)]),(0,s._)("div",C,[(0,s._)("div",{class:"nav__search",onClick:t[2]||(t[2]=e=>a.searchActive=!a.searchActive)},U),(0,s._)("div",R,[(0,s._)("img",{src:l,alt:"Account",onClick:t[3]||(t[3]=(...e)=>a.showAccBlock&&a.showAccBlock(...e))}),(0,s._)("div",{class:(0,i.C_)(["dropdown__account",a.account?"active":""])},[(0,s._)("a",{onClick:t[4]||(t[4]=(...e)=>a.goToAcc&&a.goToAcc(...e))},"Аккаунт"),(0,s._)("a",{onClick:t[5]||(t[5]=(...e)=>a.goToHistory&&a.goToHistory(...e))},"История"),(0,s._)("a",{href:"#",onClick:t[6]||(t[6]=(...e)=>a.exitAcc&&a.exitAcc(...e))},"Выход")],2)])])]),(0,s.Wm)(o.uT,{name:"fadeHeight"},{default:(0,s.w5)((()=>[a.searchActive?((0,s.wg)(),(0,s.iD)("div",I,[(0,s.wy)((0,s._)("input",{class:"search__input",type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>a.search=e),placeholder:"Введите тест, профессию или вуз",onKeyup:t[8]||(t[8]=(0,o.D2)(((...e)=>a.searchFunction&&a.searchFunction(...e)),["enter"]))},null,544),[[o.nr,a.search,void 0,{trim:!0}]]),(0,s._)("img",{class:"search__icon",src:c,alt:"icon",onClick:t[9]||(t[9]=(...e)=>a.searchFunction&&a.searchFunction(...e))})])):(0,s.kq)("",!0)])),_:1})])]),(0,s._)("div",S,[a.notification.openedNotification?((0,s.wg)(),(0,s.j4)(E,{key:0,title:a.notification.title,text:a.notification.text,mode:a.notification.mode},null,8,["title","text","mode"])):(0,s.kq)("",!0)])],64)}var B=n(4870),Z=n(2644);const T={class:"notification__intro"},j={class:"notification__name"},N=(0,s._)("img",{src:Z,alt:"close"},null,-1),Q=[N],D={class:"notification__text"};function M(e,t,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["notification",n.mode])},[(0,s._)("div",T,[(0,s._)("h2",j,(0,i.zw)(n.title),1),(0,s._)("div",{class:"notification__image",onClick:t[0]||(t[0]=e=>o.store.commit("setNotificationBool"))},Q)]),(0,s._)("p",D,(0,i.zw)(n.text),1)],2)}var P=n(368),H={name:"notification",props:["title","text","mode"],setup(){return{store:P.Z}}},L=n(89);const O=(0,L.Z)(H,[["render",M]]);var F=O,Y=n(1120),q=n(65),G={name:"TheNavbar",components:{Notification:F},setup(){const e=(0,q.oR)();(0,s.bv)((()=>e.dispatch("setAllUsers")));const t=(0,s.Fl)((()=>e.getters.getUsers));let n=(0,B.iH)(""),o=(0,B.iH)(""),i=(0,B.iH)(!1),a=(0,B.iH)(!1);const r=(0,s.Fl)((()=>e.getters));let c=e.getters.getNotificationInfo,l=function(){Y.Z.push("/search/"+n.value),i.value=!0},u=async function(){localStorage.removeItem("jwt_token"),e.commit("setAuth"),o.value=!o.value,e.commit("setNotificationInfo",{titleValue:"Успех",text:"Вы успешно вышли со своего аккаунта",mode:"success"}),await Y.Z.push("/")},d=function(){e.getters.getAuth?o.value=!o.value:(e.commit("toggleOpenedAuth"),document.body.style.overflow="hidden",document.documentElement.scrollTop=0)},A=function(){Y.Z.push("/account"),o.value=!o.value},m=function(){Y.Z.push("/history"),o.value=!o.value},p=(0,s.Fl)((()=>t.value.filter((t=>t.id.toString()===e.getters.getUserId))[0].location));return{search:n,searchActive:i,toggle:a,account:o,showAccBlock:d,store:e,storeGetters:r,exitAcc:u,notification:c,goToAcc:A,goToHistory:m,location:p,searchFunction:l}}};const K=(0,L.Z)(G,[["render",E]]);var W=K;const X={class:"footer"},z={class:"container"},J={class:"footer__wrapper"},V={class:"footer__block"},$=(0,s._)("div",{class:"footer__block-title"},"Тесты",-1),ee={class:"footer__block"},te=(0,s._)("div",{class:"footer__block-title"},"Выбор профессии",-1),ne={class:"footer__block"},oe=(0,s._)("div",{class:"footer__block-title"},"Поступление в вуз",-1),se={class:"footer__block"},ie=(0,s._)("div",{class:"footer__block-title"},"Полезное",-1);function ae(e,t,n,o,i,a){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("div",z,[(0,s._)("div",J,[(0,s._)("div",V,[$,(0,s._)("div",null,[(0,s.Wm)(r,{to:"/tests",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Тесты на профориентацию")])),_:1})])]),(0,s._)("div",ee,[te,(0,s._)("div",null,[(0,s.Wm)(r,{to:"/professions",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Список профессий")])),_:1})]),(0,s._)("div",null,[(0,s.Wm)(r,{to:"/faq",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("FAQ")])),_:1})])]),(0,s._)("div",ne,[oe,(0,s._)("div",null,[(0,s.Wm)(r,{to:"/",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Куда поступать?")])),_:1})]),(0,s._)("div",null,[(0,s.Wm)(r,{to:"/",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Вузы Казахстана")])),_:1})])]),(0,s._)("div",se,[ie,(0,s._)("div",null,[(0,s.Wm)(r,{to:"/",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Контакты")])),_:1})]),(0,s._)("div",null,[(0,s._)("a",{onClick:t[0]||(t[0]=(...e)=>o.login&&o.login(...e)),href:"#",class:"footer__block-link"},"Вход")]),(0,s._)("div",null,[(0,s.Wm)(r,{to:"/",class:"footer__block-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Статьи")])),_:1})])])])])])}var re={name:"TheFooter",setup(){const e=function(){P.Z.getters.getAuth?P.Z.commit("setNotificationInfo",{titleValue:"Упс",text:"Похоже, что вы уже авторизованы",mode:"danger"}):(P.Z.commit("toggleOpenedAuth"),document.body.style.overflow="hidden")};return{login:e,store:P.Z}}};const ce=(0,L.Z)(re,[["render",ae]]);var le=ce,ue=n(4696);const de={key:0,class:"auth"},Ae={class:"auth__intro"},me=(0,s._)("h1",{class:"auth__name"},"Вход",-1),pe={class:"auth__inputs"},fe={class:"auth__inputs-item"},ge={class:"auth__inputs-item"},he=(0,s._)("button",{type:"submit",class:"btn blue auth__button"},"Войти",-1),_e={key:1,class:"auth__wrapper"},ve={class:"auth__intro"},we=(0,s._)("h1",{class:"auth__name"},"Регистрация",-1),ke={class:"auth__inputs"},be={class:"auth__inputs-item"},ye={class:"auth__inputs-item"},Ce={class:"auth__inputs-item"},xe={class:"auth__inputs-item"},Ue={class:"auth__inputs-item"},Re=(0,s.uE)('<option value>Выберите город</option><option selected value="Алматы">Алматы</option><option value="Нур-Султан">Нур-Султан</option><option value="Шымкент">Шымкент</option><option value="Туркестан">Туркестан</option>',5),Ie=[Re];function Se(e,t,n,i,a,r){const c=(0,s.up)("router-link");return i.store.getters.getOpenedAuth?((0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("div",{class:"auth__mask",onClick:t[0]||(t[0]=(...e)=>i.closeAuthBlock&&i.closeAuthBlock(...e))}),i.isLogin?((0,s.wg)(),(0,s.iD)("form",{key:0,class:"auth__wrapper",onSubmit:t[7]||(t[7]=(0,o.iM)(((...e)=>i.auth&&i.auth(...e)),["prevent"]))},[(0,s._)("div",Ae,[me,(0,s._)("img",{class:"auth__close",src:Z,alt:"close",onClick:t[1]||(t[1]=(...e)=>i.closeAuthBlock&&i.closeAuthBlock(...e))})]),(0,s._)("div",pe,[(0,s._)("div",fe,[(0,s.wy)((0,s._)("input",{placeholder:"Логин",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>i.name=e),ref:"mailRef"},null,512),[[o.nr,i.name,void 0,{trim:!0}]])]),(0,s._)("div",ge,[(0,s.wy)((0,s._)("input",{placeholder:"Пароль",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>i.password=e),ref:"passwordRef"},null,512),[[o.nr,i.password,void 0,{trim:!0}]]),(0,s._)("img",{onClick:t[4]||(t[4]=e=>i.passwordToggle(i.passwordRef,i.passwordImage)),class:"auth__inputs-itemEye",src:ue,alt:"visible/invisible password",ref:"passwordImage"},null,512)])]),he,(0,s.Wm)(c,{to:"/reset",class:"auth__forgot",onClick:t[5]||(t[5]=e=>i.store.commit("toggleOpenedAuth"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Забыли пароль?")])),_:1}),(0,s._)("button",{class:"auth__reg",type:"button",onClick:t[6]||(t[6]=e=>i.isLogin=!1)},"Быстрая регистрация")],32)):((0,s.wg)(),(0,s.iD)("form",_e,[(0,s._)("div",ve,[we,(0,s._)("img",{class:"auth__close",src:Z,alt:"close",onClick:t[8]||(t[8]=(...e)=>i.closeAuthBlock&&i.closeAuthBlock(...e))})]),(0,s._)("div",ke,[(0,s._)("div",be,[(0,s.wy)((0,s._)("input",{placeholder:"Логин",type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>i.name=e),ref:"nameReg"},null,512),[[o.nr,i.name,void 0,{trim:!0}]])]),(0,s._)("div",ye,[(0,s.wy)((0,s._)("input",{placeholder:"Почта",type:"text","onUpdate:modelValue":t[10]||(t[10]=e=>i.mail=e),ref:"mailReg"},null,512),[[o.nr,i.mail,void 0,{trim:!0}]])]),(0,s._)("div",Ce,[(0,s.wy)((0,s._)("input",{placeholder:"Пароль",type:"password","onUpdate:modelValue":t[11]||(t[11]=e=>i.password=e),ref:"passwordRef"},null,512),[[o.nr,i.password,void 0,{trim:!0}]]),(0,s._)("img",{onClick:t[12]||(t[12]=e=>i.passwordToggle(i.passwordRef,i.passwordImage)),class:"auth__inputs-itemEye",src:ue,alt:"visible/invisible password",ref:"passwordImage"},null,512)]),(0,s._)("div",xe,[(0,s.wy)((0,s._)("input",{placeholder:"Подтвердить пароль",type:"password","onUpdate:modelValue":t[13]||(t[13]=e=>i.repeatedPassword=e),ref:"passwordRef_2"},null,512),[[o.nr,i.repeatedPassword,void 0,{trim:!0}]]),(0,s._)("img",{onClick:t[14]||(t[14]=e=>i.passwordToggle(i.passwordRef_2,i.passwordImage_2)),class:"auth__inputs-itemEye",src:ue,alt:"visible/invisible password",ref:"passwordImage_2"},null,512)]),(0,s._)("div",Ue,[(0,s.wy)((0,s._)("select",{name:"",id:"","onUpdate:modelValue":t[15]||(t[15]=e=>i.selectLocation=e),ref:"selectLocationRef"},Ie,512),[[o.bM,i.selectLocation]])])]),(0,s._)("button",{type:"submit",class:"auth__button btn blue",onClick:t[16]||(t[16]=(0,o.iM)(((...e)=>i.register&&i.register(...e)),["prevent"]))},"Регистрация"),(0,s._)("a",{onClick:t[17]||(t[17]=e=>i.isLogin=!0),class:"auth__forgot",href:"#"},"Назад")]))])):(0,s.kq)("",!0)}n(2801);var Ee=n(4161),Be={name:"Login",async setup(){let e=(0,B.iH)(!0);function t(e){let t=e.split(".")[1],n=t.replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(o)}await P.Z.dispatch("setAllUsers");let o=localStorage.getItem("jwt_token");if(o){const e=t(o),n=(0,s.Fl)((()=>P.Z.getters.getUsers.filter((t=>t.username===e.sub))));"ROLE_ADMIN"===e.auth&&P.Z.commit("setAdmin"),P.Z.commit("setAuth"),P.Z.commit("setUserId",P.Z.getters.getUsers.filter((e=>e.username===n.value[0].username)).map((e=>e.id)).toString())}const i=(0,B.iH)(null),a=(0,B.iH)(null),r=(0,B.iH)(null),c=(0,B.iH)(null),l=(0,B.iH)(null),u=(0,B.iH)(null),d=(0,B.iH)(null),A=(0,B.iH)(null);let m=(0,B.iH)(""),p=(0,B.iH)(""),f=(0,B.iH)(""),g=(0,B.iH)(""),h=(0,B.iH)(""),_=function(){P.Z.commit("toggleOpenedAuth"),document.body.style.overflow="auto"},v=function(e,t){e.setAttribute("type","password"===e.getAttribute("type")?"text":"password"),t.setAttribute("src",t.getAttribute("src")===n(4696)?n(7524):n(4696))},w=async()=>{let e=P.Z.getters.getUsers.filter((e=>e.username===m.value));e?e=e[0]:console.log("Такой пользователь не найден");try{const{data:t}=await Ee.Z.post("auth/login",{username:m.value,password:f.value}).catch((e=>console.log(e.message)));t?(Ee.Z.defaults.headers.common.Authorization=`Bearer ${t.token}`,localStorage.setItem("jwt_token",t.token),console.log(e.role),"ROLE_ADMIN"===e.role&&P.Z.commit("setAdmin"),P.Z.commit("setAuth"),P.Z.commit("setUserId",P.Z.getters.getUsers.filter((e=>e.username===m.value)).map((e=>e.id)).toString()),_(),P.Z.commit("setNotificationInfo",{titleValue:"Успех",text:"Авторизация успешно пройдена",mode:"success"})):(l.value.style.outline="1px solid red",a.value.style.outline="1px solid red")}catch(t){console.log("Ошибка: ",t.message)}};function k(){return f.value!==g.value?(c.value.style.outline="1px solid red",!1):(c.value.style.outline="1px solid black",!0)}let b=async function(){if(k()){const e=await Ee.Z.post("auth/register",{username:m.value,email:p.value,password:f.value,location:h.value}).then((e=>{if(200===e.request.status)return e.data;{const t=e.response.data.error;console.log(t),t.includes("Username shouldn't be empty")||t.includes("Username must contain between 3 and 20 characters")?d.value.style.outline="1px solid red":d.value.style.outline="1px solid black",t.includes("Email address should not be empty")||t.includes("Invalid email address")?A.value.style.outline="1px solid red":A.value.style.outline="1px solid black",t.includes("Password should not be empty")||t.includes("Password must contain between 5 and 32 characters")?a.value.style.outline="1px solid red":a.value.style.outline="1px solid black",t.includes("Password should contain 1 Uppercase letter 1 digit and 1 special symbol and more than 6 characters")?a.value.style.outline="1px solid red":a.value.style.outline="1px solid black",t.includes("Location should not be empty")?u.value.style.outline="1px solid red":u.value.style.outline="1px solid black"}})).catch((e=>console.error(e.message)));e&&(Ee.Z.defaults.headers.common.Authorization=`Bearer ${e.token}`,localStorage.setItem("jwt_token",e.token),await P.Z.dispatch("setAllUsers"),P.Z.commit("setAuth"),P.Z.commit("setUserId",P.Z.getters.getUsers.filter((e=>e.email===p.value)).map((e=>e.id)).toString()),_(),P.Z.commit("setNotificationInfo",{titleValue:"Успех",text:"Регистрация успешно пройдена",mode:"success"}))}};return{name:m,mail:p,password:f,repeatedPassword:g,selectLocation:h,passwordToggle:v,passwordImage:i,passwordRef:a,passwordImage_2:r,passwordRef_2:c,selectLocationRef:u,store:P.Z,closeAuthBlock:_,isLogin:e,auth:w,register:b,nameReg:d,mailReg:A,mailRef:l}}};const Ze=(0,L.Z)(Be,[["render",Se]]);var Te=Ze;const je={class:"container"};var Ne={__name:"App",setup(e){return(e,t)=>{const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(),(0,s.j4)(s.n4,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Te)])),_:1})),(0,s.Wm)(W),(0,s._)("div",je,[(0,s._)("main",null,[(0,s.Wm)(n)])]),(0,s.Wm)(le)],64)}}};const Qe=Ne;var De=Qe;Ee.Z.defaults.baseURL="http://careerguidance-387416.uc.r.appspot.com/api/";let Me=!1;Ee.Z.interceptors.response.use((e=>e),(async e=>(401!==e.response.status||Me||(console.log("401"),Me=!0),Me=!1,e))),(0,o.ri)(De).use(P.Z).use(Y.Z).mount("#app");const Pe=localStorage.getItem("jwt_token");Pe&&(Ee.Z.defaults.headers.common.Authorization=`Bearer ${Pe}`)},1120:function(e,t,n){var o=n(2483),s=n(368);const i=[{path:"/",redirect:"/tests"},{path:"/tests",name:"tests",component:()=>n.e(403).then(n.bind(n,5403))},{path:"/prof/:name",name:"prof",component:()=>n.e(916).then(n.bind(n,3916)),props:!0},{path:"/test/:name",name:"test",component:()=>n.e(920).then(n.bind(n,1700)),props:!0},{path:"/result",name:"result",component:()=>n.e(96).then(n.bind(n,9096))},{path:"/reset",name:"reset",component:()=>n.e(228).then(n.bind(n,8228))},{path:"/professions",name:"Professions",component:()=>n.e(126).then(n.bind(n,2126))},{path:"/professions/:name",name:"Exact_Professions",component:()=>n.e(845).then(n.bind(n,6845))},{path:"/professions/:name/:prof",name:"Profession",component:()=>n.e(538).then(n.bind(n,6538))},{path:"/edu/:city",name:"Edu",component:()=>n.e(4).then(n.bind(n,4004))},{path:"/university/:uniName",name:"University",component:()=>n.e(495).then(n.bind(n,9495)),props:!0},{path:"/request/:uniName",name:"Request",component:()=>n.e(254).then(n.bind(n,6254)),props:!0},{path:"/faq",name:"faq",component:()=>n.e(454).then(n.bind(n,9454))},{path:"/search/:text",name:"search",component:()=>n.e(994).then(n.bind(n,3994)),props:!0},{path:"/account",name:"Account",component:()=>n.e(45).then(n.bind(n,4045)),meta:{requiresAuth:!0}},{path:"/history",name:"History",component:()=>n.e(615).then(n.bind(n,615)),meta:{requiresAuth:!0}},{path:"/admin",name:"Admin",component:()=>n.e(312).then(n.bind(n,8312)),exact:!1,children:[{path:"admin_prof",name:"admin_prof",component:()=>n.e(855).then(n.bind(n,4855)),exact:!0},{path:"",name:"admin_user",component:()=>n.e(922).then(n.bind(n,2922)),exact:!0},{path:"admin_university",name:"admin_university",component:()=>n.e(563).then(n.bind(n,563)),exact:!0},{path:"admin_additional",name:"admin_additional",component:()=>n.e(81).then(n.bind(n,9081)),exact:!0}],meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",component:()=>n.e(512).then(n.bind(n,3512))}],a=(0,o.p7)({history:(0,o.PO)("/"),routes:i,linkActiveClass:"active",linkExactActiveClass:"exact-active"});a.beforeEach(((e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?localStorage.getItem("jwt_token")||s.Z.getters.getAuth||s.Z.getters.getAdmin?n():n({name:"tests"}):n()})),t["Z"]=a},368:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(65),s=n(4161);const i={state:{university:[]},getters:{getUniversity(e){return e.university}},mutations:{setAllUniversities(e,t){e.university=t}},actions:{async setAllUniversities({commit:e}){const t=await s.Z.get("universities");return e("setAllUniversities",t.data),t.data}}};var a=i,r=n(6647);n(7658);const c={state:{professionsArray:[]},getters:{getProfessionsArray(e){return e.professionsArray}},actions:{async initialProfessionsList({commit:e}){const t="https://proffesion-choose-default-rtdb.firebaseio.com/professionsArray.json",n=await fetch(t).then((e=>e.json()));e("setAllProfessions",n)}},mutations:{setAllProfessions(e,t){e.professionsArray=t},async addProf(e,t){await fetch("https://proffesion-choose-default-rtdb.firebaseio.com/professionsArray.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.professionsArray.push(t)}}};var l=c;const u={state:{users:[]},getters:{getUsers(e){return e.users}},mutations:{removeUser(e,t){e.users.splice(t,1)},setAllUsers(e,t){e.users=t}},actions:{async setAllUsers({commit:e}){const t=await s.Z.get("user/all");return e("setAllUsers",t.data),t.data}}};var d=u,A=n(4870);const m={state:{notification:(0,A.iH)({title:"",text:"",mode:"",openedNotification:!1})},getters:{getNotificationInfo(e){return e.notification}},mutations:{setNotificationBool(e){e.notification.openedNotification=!1},setNotificationInfo(e,t){e.notification.title=t.titleValue,e.notification.text=t.text,e.notification.mode=t.mode,e.notification.openedNotification=!0}}};var p=m;const f={state:{tests:[{name:"Тест на профориентацию",image:n(6417),linkTo:"/prof/test",questions:[]},{name:"Ты гуманитарий или технарь?",image:n(4146),linkTo:"",questions:[]},{name:"Какую IT профессию выбрать?",image:n(1113),linkTo:"",questions:[]},{name:"Можешь ли ты быть юристом?",image:n(2619),linkTo:"",questions:[]},{name:"Кем стать: фронтенд или бэкенд разработчиком?",image:n(3660),linkTo:"/pageNotFound",questions:[]},{name:"Тест на профориентацию по школьным предметам",image:n(5119),linkTo:"",questions:[]}]},getters:{getTests(e){return e.tests}},mutations:{setQuestions(e,t){e.tests[0].questions=t}},actions:{async initialQuestionList({commit:e}){const t=await s.Z.get("questions/getAll");e("setQuestions",t.data)}}};var g=f;const h={state:{comments:[]},getters:{getComments(e){return e.comments}},mutations:{setComments(e,t){e.comments=t}},actions:{async initialCommentsList({commit:e}){const t="https://proffesion-choose-default-rtdb.firebaseio.com/comments.json",n=await fetch(t).then((e=>e.json()));e("setComments",n)}}};var _=h;const v={state:{tags:[]},getters:{getTags(e){return e.tags}},mutations:{setAllTags(e,t){e.tags=t}},actions:{async setAllTags({commit:e}){const t=await s.Z.get("tags");return e("setAllTags",t.data),t.data}}};var w=v;const k={state:{subjects:[]},getters:{getSubjects(e){return e.subjects}},mutations:{setAllSubjects(e,t){e.subjects=t}},actions:{async setAllSubjects({commit:e}){const t=await s.Z.get("subjects");return e("setAllSubjects",t.data),t.data}}};var b=k,y=(0,o.MT)({state:{isAuth:!1,isAdmin:!1,userId:null,openedAuth:!1,status:"",token:localStorage.getItem("token")||"",user:{}},getters:{getAuth(e){return e.isAuth},getAdmin(e){return e.isAdmin},getOpenedAuth(e){return e.openedAuth},getUserId(e){return e.userId}},mutations:{toggleOpenedAuth(e){e.openedAuth=!e.openedAuth},setAuth(e){e.isAuth=!e.isAuth},setAdmin(e){e.isAdmin=!e.isAdmin},setUserId(e,t){e.userId=t}},modules:{university:a,category:r.Z,professionsArray:l,users:d,notification:p,testsArr:g,comments:_,tags:w,subjects:b}})},6647:function(e,t,n){const o={state:{category:{name:{IT:"Information Technology",Medicine:"Medicine",Economy:"Economy",Management:"Management",Art:"Art",Science:"Science",Marketing:"Marketing",Finance:"Finance",Jour:"Jour",Law:"Law",Education:"Education",Design:"Design",Trade:"Trade",Logistics:"Logistics",Natural:"Natural",Technology:"Technology",Architecture:"Architecture"},img:{IT:n(645),Medicine:n(5392),Economy:n(5113),Management:n(2161),Art:n(2752),Science:n(8648),Marketing:n(7180),Finance:n(20),Jour:n(872),Law:n(7728),Education:n(1378),Design:n(6333),Trade:n(6440),Logistics:n(5891),Natural:n(2191),Technology:n(7851),Architecture:n(3431)}}},getters:{getProfCategory(e){return e.category}}};t["Z"]=o},3431:function(e,t,n){e.exports=n.p+"img/Architecture.1ebc3fff.jpg"},2752:function(e,t,n){e.exports=n.p+"img/Art.1f79e192.avif"},6333:function(e,t,n){e.exports=n.p+"img/Design.4ef64820.avif"},5113:function(e,t,n){e.exports=n.p+"img/Economy.20cff5cd.avif"},1378:function(e,t,n){e.exports=n.p+"img/Education.51d8f823.avif"},20:function(e,t,n){e.exports=n.p+"img/Finance.87ea8e47.avif"},645:function(e,t,n){e.exports=n.p+"img/IT.8c895dfb.avif"},872:function(e,t,n){e.exports=n.p+"img/Jour.3dfec48a.avif"},7728:function(e,t,n){e.exports=n.p+"img/Law.b8b06749.avif"},5891:function(e,t,n){e.exports=n.p+"img/Logistics.868070fa.avif"},2161:function(e,t,n){e.exports=n.p+"img/Management.8fb8bf4e.avif"},7180:function(e,t,n){e.exports=n.p+"img/Marketing.8772542f.avif"},5392:function(e,t,n){e.exports=n.p+"img/Medicine.f0ca743a.avif"},2191:function(e,t,n){e.exports=n.p+"img/Natural.83b8a79e.jpg"},8648:function(e,t,n){e.exports=n.p+"img/Science.51c7ff45.avif"},7851:function(e,t,n){e.exports=n.p+"img/Technology.a6e2d456.webp"},6440:function(e,t,n){e.exports=n.p+"img/Trade.94f09774.avif"},3660:function(e,t,n){e.exports=n.p+"img/BackOrFront.3d3dffef.jpg"},5119:function(e,t,n){e.exports=n.p+"img/BySchoolSubjects.9364ad7c.jpg"},2619:function(e,t,n){e.exports=n.p+"img/CanUBeALawyer.e8712592.jpg"},1113:function(e,t,n){e.exports=n.p+"img/IT Profession.4e625fa0.jpg"},6417:function(e,t,n){e.exports=n.p+"img/Proforientation.f3b38e08.jpg"},4146:function(e,t,n){e.exports=n.p+"img/humanist and technician.cdfabeeb.jpg"},3082:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7ZrLcdswEIb/PA458pjjdhB1EHYQd0B2IKUCqgMfc6SOuSWugEoFciqgXIHdgYw1oTFNQTB2AVI68Jv5Rw+Su1hiCSwEATMzMz4+IC2Z0Y3RNyOyn8ke2xs92dd/Rvf2/dXAjV0aNUYHoXZGBV6DvQgcwNroEfIAXKpxgYBWSBdAXy26Hhod7oUNkDwAV+9kGAlCl9OHidRihFQja/gwsZIGk+EyQRy1Q0CafcL7/DLKIYfnjN9Gf4229vMXyHP/q9UdIighv4M8mi09DWabmh5eQQkpHIbmtMY23yDVSFYrHBHCIcjnogpCSOhA5cReM2qvlJAHQpCTKfwsIUA68e2gpxX6akINk9CwyLiDRuHvJL0+OgwvcP38GH7hCuQ75MQEr7n25BpXIAQ53NU55OTQzQ00/MIViLZ8riCngI6gNkpHkb7WCGcd4acNcRATSGgw60gfQYE0kU6Ojgq8TQF+Xyay3wwb/fk0jpdyOxZCtyTu20u5dD1poyuQPdIyxtp7P/zCNWr9x/WzDTlJU8hNLRo2+twzsoV+eXvf0xPe5vPCNmKhtA8If2rlUjn07vAa4Q+60kb6PHDNVEPWGwUEZHh/9cbHK6R5mAnhARGEVPCP44T0EPzzTA0F53rlFuNzC/ckS1CySm0wAIK7TCoQyQbTBUNwB6FKqSGcYq41PDuMvks9buBO5RYJqwPC+aq4RlzvELrh22V7lJ4n+Et8DihHOHxu47G3gyAI6WYodzGPKKXnnOPsvjV6GBzjTdKFlS9dNkY/kaYS91JinK2G4w/gk0KQlxe+ACqMuN0WAqHrIc22XAP/FkQwqf8wQOiegxz+PwzwM3SHCZ6BmZmZjmcC9tNrjL6apwAAAABJRU5ErkJggg=="},2644:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7ZhRDoIwEEQnXtR3M3pT5UMSTFCR7hbXzEv2C7r7hpDSIBljjDGmFm2uq+JhrknJtLluj4oMwapvWoi2GhIZgo2+KSHYGNQbgoSewwaiwfKRg9FJ8hECPWtD4YDIkTWpoP1C39w7FPRZbM89p4JeC7679lOgbdES8guosPwCGih/kXkC/fn7X24HKrGNosIfMlT4KIEKH+boEOlZGwIBAuikEAQORoNDkDAQDQzRkgax0XdSEk05TwkNkF9oKvxr0RhjjDGR3AFZMAi/mtDdGAAAAABJRU5ErkJggg=="},5956:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHnSURBVHgB7ZmBcYIwFIa/tgu4QbNB3aCM0A20E9QNYANHgA06AjqBdgLcQDewyQFXLwQEEiD2+O7+855C4p/khSTAzMzMzCPxhB0LqQ+pNylRxIqL1FFqL7XDYwKpVOraQplUTG7UGwTtDeg6S23wAEHeuldLbRmAtjkipA785cAtKh925DlxKq5R1y/Jh6CJROqTkRGYe0INlRCzudt7Y0bsmSZMf+RAt+RdkxvXywkYiQCziYWjsjJGIjVULOjPhgl6RRgqXWGP3jgpA7Ommtwu+Bqo3Fq2WoXfuGFBtadfseS54belFh9xw6XQLQJLnjtce8IdkxrpM+W25YIlTUZOWixwh9DiUY0scYOpnB8GJKA6uwjsiamuFAZF5YS+PoqxQzDMQ/YuoeOK9ad6xkg7R1OvqLhPviRUGyVkREwLPaWo5f0C8/Z48KWJiYT6gwU11IThnoDc7Jn6bW/EBCRw93AhK3Sm/R4+YgJC2v9Bkw54ZGZN99OUcn8P9Y0RMRFr8qV90zBKMR9QeGemRE3H7+SJvyrie4tMb830wZmZF6ZlX3wG2vcqVoeHO1oytRGFEzM+GFFYm/HFiMLKjE9GFM5yxhfqZjMv3q90RTeT4dlbry6UZh7aRIk6YhXMzMzM/Ct+ASDxOZLMyfnaAAAAAElFTkSuQmCC"},6309:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABzSURBVHgB7Y/RDYAwCAVfnIQR3UA3cxRHwcaQSAxtBOkfl/BVetcCRZHN2oYQh8RhsrfhNidiEZK7LK6bRS2wWjzgi7zvcG9xk0PPTwjPy1kcQzwRt9wTCcu/RH7LR5E0eS+SKrci6XIrki7XkWnyorC5APt7PJ+I9GRjAAAAAElFTkSuQmCC"},7524:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB7ZO9DcIwEIWfQkXnDfAIjOANyAZkk6zCBoiSimxASxdKurR05iwukjlbDonp8Cc92fH9+eQLUCj8CkWqec1Fk4zMdSRZ0h75NJzr4j4qPuw8Yy47Xg/+oWtn4MoGy9Gcw/L+g5YNPZa9heJYy7mSDlfMK6I4ZrxgFO0VGB01pjHfxPnJexHgJsxN11b4N3hPio3EBUWaiKH1glMa2FeJi9ayixpha7IzK/YDwrfSmPE/aS+RZBzrTSpBhTSG1y5i64RPlBWmeZJOpJs4X5PupDPpgcL/8gJCpE94De4MFQAAAABJRU5ErkJggg=="},4696:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgB7VTRDYIwFLw4QUfoCGygm8AGugFswAi4ASMwgiMwAm6grb6mx5MiGD804ZJLE+551/daC2z4Bxwca8fe8Sa8ODaifQzr2JFpio3UrkLhOIiBX0vHPemZGPdUk2MhKtpd62hmaq0EhfoKK8yPyqhD7KrFeCzlkpATFeXKfMDr7AcVUpB20uaWxFJpLeJhGqk9y7cusUkfnrFQk4lGCLb0zZCRRvDyK3ZKvE784DqhGbViQhshQ5yznl/4L4T77g3OiIfNqDDd8QPfPOQjEkhdN4t42IN0ZRObK/EGHNJg/hkwFLzIPKBAHEsvQXztDnh2yM9JjpWwGD8DKepxrcZegi5k6ruqMX4AN/wo7s8BhKkUfL2ZAAAAAElFTkSuQmCC"},7998:function(e,t,n){e.exports=n.p+"img/logo.c9b7490b.png"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<a&&(a=i));if(r){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{4:"a5885f02",45:"789e2d89",81:"bbd0d32f",96:"32c94d2d",126:"5634cdad",228:"1dc98930",254:"64500104",312:"d0286322",403:"6164bb45",454:"ed531480",495:"97e63765",512:"743d2021",538:"8b17f99d",563:"43c6f3af",615:"11ed30d2",845:"0d4c9e4c",855:"a5eb8943",916:"8e72ee78",920:"fa16be6e",922:"75b926f3",994:"e083f850"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{96:"fc654f2d",312:"3dc478b9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="career_guidance:";n.l=function(o,s,i,a){if(e[o])e[o].push(s);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+i),r.src=o),e[o]=[s];var A=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var s=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(A.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=A.bind(null,r.onerror),r.onload=A.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,s){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=r,i.parentNode.removeChild(i),s(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var s=n[o],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===t))return s}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){s=a[o],i=s.getAttribute("data-href");if(i===e||i===t)return s}},o=function(o){return new Promise((function(s,i){var a=n.miniCssF(o),r=n.p+a;if(t(a,r))return s();e(o,r,null,s,i)}))},s={143:0};n.f.miniCss=function(e,t){var n={96:1,312:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var i=new Promise((function(n,o){s=e[t]=[n,o]}));o.push(s[2]=i);var a=n.p+n.u(t),r=new Error,c=function(o){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,s[1](r)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkcareer_guidance"]=self["webpackChunkcareer_guidance"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5520)}));o=n.O(o)})();
//# sourceMappingURL=app.9a2c8d92.js.map