(self["webpackChunkcareer_guidance"]=self["webpackChunkcareer_guidance"]||[]).push([[994],{3994:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return $}});var s=i(3396),n=i(7139);const r={class:"searchPage"},A={class:"searchPage__title"},a=(0,s._)("h2",{class:"searchPage__subtitle"},"Тесты:",-1),o=(0,s._)("h2",{class:"searchPage__subtitle"},"Университеты:",-1),g=(0,s._)("h2",{class:"searchPage__subtitle"},"Профессии:",-1);function c(e,t,i,c,p,u){const f=(0,s.up)("search-tests"),l=(0,s.up)("search-universities"),d=(0,s.up)("search-professions");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("h1",A,"Результаты по запросу "+(0,n.zw)(i.text),1),a,((0,s.wg)(),(0,s.j4)(f,{requestText:i.text,key:i.text},null,8,["requestText"])),o,((0,s.wg)(),(0,s.j4)(l,{requestText:i.text,key:i.text},null,8,["requestText"])),g,((0,s.wg)(),(0,s.j4)(d,{requestText:i.text,key:i.text},null,8,["requestText"]))])}i(7658);const p={key:0,class:"tests"},u={class:"tests__wrapper"},f=["onClick"],l=["src"],d={class:"tests__name"},m={key:1};function v(e,t,i,r,A,a){return r.tests.length>0?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.tests,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"test__block",key:t.name,onClick:i=>e.$router.push({name:"prof",params:{name:t.name}})},[(0,s._)("img",{class:"test__block-img",src:t.image,alt:"image"},null,8,l),(0,s._)("span",d,(0,n.zw)(t.name),1)],8,f)))),128))])])):((0,s.wg)(),(0,s.iD)("span",m,"Список пуст"))}var x=i(65),w={name:"SearchTests",props:["requestText"],setup(e){const t=(0,x.oR)(),i=(0,s.Fl)((()=>t.getters.getTests)),n=i.value.filter((t=>t.name.toLowerCase().includes(e.requestText.toLowerCase())));return{tests:n}}},B=i(89);const C=(0,B.Z)(w,[["render",v]]);var U=C;const P={class:"edu__results"},h={class:"edu__results-list"},j={class:"edu__results-top"},I=(0,s._)("span",null,"Проходной балл",-1),D=(0,s._)("span",null,"Бюджетных мест",-1),k=(0,s._)("span",null,"Внебюджетных мест",-1),b={class:"edu__results-block"},R={class:"edu__results-data first"},L=["src"],H={class:"edu__results-additional"},T={key:0},z={key:1},y={class:"edu__results-data"},E={class:"edu__results-data"},O={class:"edu__results-data"};function Y(e,t,i,r,A,a){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",P,[(0,s._)("ul",h,[(0,s._)("li",j,[(0,s._)("span",null,"Найдено: "+(0,n.zw)(r.searchEdu.length),1),I,D,k]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.searchEdu,(e=>((0,s.wg)(),(0,s.iD)("li",b,[(0,s._)("div",R,[(0,s.Wm)(o,{to:"/university/"+e.name,href:"#",class:"edu__results-link"},{default:(0,s.w5)((()=>[(0,s._)("img",{class:"edu__results-logo",src:r.getImgUrl(e.image),alt:"logo"},null,8,L),(0,s._)("h2",null,(0,n.zw)(e.name),1)])),_:2},1032,["to"]),(0,s._)("div",H,[e.hotel?((0,s.wg)(),(0,s.iD)("span",T,"Общежитие")):(0,s.kq)("",!0),e.military?((0,s.wg)(),(0,s.iD)("span",z,"Военная кафедра")):(0,s.kq)("",!0)])]),(0,s._)("div",y,(0,n.zw)(e.passScores),1),(0,s._)("div",E,(0,n.zw)(e.budget),1),(0,s._)("div",O,(0,n.zw)(e.offBudget),1)])))),256))])])}var Q={name:"SearchUniversity",props:["requestText"],setup(e){const t=(0,x.oR)(),n=(0,s.Fl)((()=>t.getters.getUniversity)),r=n.value.filter((t=>t.name.toLowerCase().includes(e.requestText.toLowerCase()))),A=function(e){return e.includes("http")?e:i(6303)("./"+e)};return{searchEdu:r,getImgUrl:A}}};const F=(0,B.Z)(Q,[["render",Y]]);var X=F;const M={class:"exactProfession__table"},S={class:"table"},V=(0,s._)("tr",null,[(0,s._)("th",null,"Профессия"),(0,s._)("th",null,"Описание")],-1),G=["onClick"];function J(e,t,i,r,A,a){return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("table",S,[V,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filteredArray,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.name},[(0,s._)("td",null,[(0,s._)("a",{href:"#",onClick:t=>r.goToProf(e)},(0,n.zw)(e.name),9,G)]),(0,s._)("td",null,(0,n.zw)(e.description)+"}",1)])))),128))])])}var N=i(2483),Z={name:"SearchProfession",props:["requestText"],setup(e){(0,s.bv)((()=>t.dispatch("initialProfessionsList")));const t=(0,x.oR)(),i=(0,N.tv)(),n=(0,s.Fl)((()=>t.getters.getProfessionsArray));let r=n.value.filter((t=>t.name.toLowerCase().includes(e.requestText.toLowerCase()))),A=function(e){i.push({name:"Profession",params:{name:e.category,prof:e.name}})};return{filteredArray:r,goToProf:A}}};const K=(0,B.Z)(Z,[["render",J]]);var q=K,W={name:"Search",props:["text"],components:{SearchTests:U,SearchUniversities:X,SearchProfessions:q},setup(){const e=(0,x.oR)();(0,s.bv)((()=>e.dispatch("setAllUniversities")))}};const _=(0,B.Z)(W,[["render",c]]);var $=_},6303:function(e,t,i){var s={"./Other/ProfOrientation.jpg":4633,"./Other/faq.jpg":8574,"./Prof/Architecture.jpg":3431,"./Prof/Art.avif":2752,"./Prof/Certain/IT_specialist.webp":2884,"./Prof/Certain/accountant.jpg":9046,"./Prof/Certain/actor.webp":9399,"./Prof/Certain/analyst.jpg":8908,"./Prof/Certain/architect.jpg":2,"./Prof/Certain/art_director.png":2496,"./Prof/Certain/artist.jpeg":7407,"./Prof/Certain/attorney.avif":9906,"./Prof/Certain/biologist.jpg":3481,"./Prof/Certain/builder.jpg":5609,"./Prof/Certain/business.jpg":1101,"./Prof/Certain/constructor.jpg":7242,"./Prof/Certain/designer.avif":258,"./Prof/Certain/doctor.avif":4298,"./Prof/Certain/ecolog.jpg":4953,"./Prof/Certain/engineer.avif":157,"./Prof/Certain/finanalitic.jpg":8931,"./Prof/Certain/financier.avif":4759,"./Prof/Certain/frontEnd.jpg":9227,"./Prof/Certain/garden.jpg":2546,"./Prof/Certain/genetics.jpg":4145,"./Prof/Certain/hr.jpg":5843,"./Prof/Certain/journalist.avif":8774,"./Prof/Certain/lawyer.jpg":4585,"./Prof/Certain/logistician.webp":8385,"./Prof/Certain/manager.avif":3109,"./Prof/Certain/marketer.avif":5741,"./Prof/Certain/mechanic.jpg":7269,"./Prof/Certain/musician.avif":5371,"./Prof/Certain/neurosurgeon.jpg":3261,"./Prof/Certain/pr-spetsialist.jpg":4776,"./Prof/Certain/producer.jpg":9397,"./Prof/Certain/programmer.avif":5006,"./Prof/Certain/psychologists.jpg":4734,"./Prof/Certain/ranger.jpg":7255,"./Prof/Certain/seller.avif":8289,"./Prof/Certain/teacher.avif":9147,"./Prof/Certain/technical_writer.avif":1783,"./Prof/Certain/vet.jpg":838,"./Prof/Certain/webdev.avif":8862,"./Prof/Certain/writer.jpg":552,"./Prof/Design.avif":6333,"./Prof/Economy.avif":5113,"./Prof/Education.avif":1378,"./Prof/Finance.avif":20,"./Prof/IT.avif":645,"./Prof/Jour.avif":872,"./Prof/Law.avif":7728,"./Prof/Logistics.avif":5891,"./Prof/Management.avif":2161,"./Prof/Marketing.avif":7180,"./Prof/Medicine.avif":5392,"./Prof/Natural.jpg":2191,"./Prof/Science.avif":8648,"./Prof/Technology.webp":7851,"./Prof/Trade.avif":6440,"./Tests/BackOrFront.jpg":3660,"./Tests/BySchoolSubjects.jpg":5119,"./Tests/CanUBeALawyer.jpg":2619,"./Tests/IT Profession.jpg":1113,"./Tests/Proforientation.jpg":6417,"./Tests/humanist and technician.jpg":4146,"./Universities/AUPE.jpg":3510,"./Universities/IITU.jpg":2953,"./Universities/logos/IITU.png":9561,"./Universities/logos/KAZGUU.jpg":8266,"./Universities/logos/KBTU.jpg":1287,"./Universities/logos/alfarabi.png":3041,"./Universities/logos/astanaMed.png":1067,"./Universities/logos/aues.png":8482,"./Universities/logos/auezov.svg":4351,"./Universities/logos/gumilev.png":1011,"./Universities/logos/iitu.jpg":4120,"./Universities/logos/kaznaru.png":5933,"./Universities/logos/kaznmu.png":8335,"./Universities/logos/kaznui.png":649,"./Universities/logos/kimep.png":4731,"./Universities/logos/krmu.png":2091,"./Universities/logos/kurmangasy.jpeg":6526,"./Universities/logos/nazarbayev.png":8415,"./Universities/logos/ped.svg":9883,"./Universities/logos/riskulov.png":4678,"./Universities/logos/satpaev.png":4198,"./Universities/logos/shakarim.jpg":5421,"./Universities/logos/zhangir.png":3629,"./gif/Main.mp4":4796,"./gif/Prof.gif":5669,"./png/Account.png":3082,"./png/ArrowToRightBlue.png":8375,"./png/Check.png":4095,"./png/Close.png":2644,"./png/Search.png":5956,"./png/Star-black.png":1791,"./png/Star-black.svg":8070,"./png/Star.png":2361,"./png/Time.png":9051,"./png/arrow_toButton.png":6309,"./png/edit.png":9173,"./png/eye_closed.png":7524,"./png/eye_opened.png":4696,"./png/logo.png":7998,"./png/mdi_dislike.png":6258,"./png/mdi_like.png":1027,"./png/remove.png":7013,"./png/save.png":1581};function n(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=6303},4351:function(e,t,i){"use strict";e.exports=i.p+"img/auezov.a1921bd7.svg"},9883:function(e,t,i){"use strict";e.exports=i.p+"img/ped.6bd94ca3.svg"},8070:function(e,t,i){"use strict";e.exports=i.p+"img/Star-black.8274f528.svg"},4633:function(e,t,i){"use strict";e.exports=i.p+"img/ProfOrientation.2fd304fa.jpg"},8574:function(e,t,i){"use strict";e.exports=i.p+"img/faq.6c2d3f71.jpg"},2884:function(e,t,i){"use strict";e.exports=i.p+"img/IT_specialist.81174cd0.webp"},9046:function(e,t,i){"use strict";e.exports=i.p+"img/accountant.cc09b90f.jpg"},9399:function(e,t,i){"use strict";e.exports=i.p+"img/actor.cf358a08.webp"},8908:function(e,t,i){"use strict";e.exports=i.p+"img/analyst.5f6c2d1f.jpg"},2:function(e,t,i){"use strict";e.exports=i.p+"img/architect.373eada3.jpg"},2496:function(e,t,i){"use strict";e.exports=i.p+"img/art_director.b941a55f.png"},7407:function(e,t,i){"use strict";e.exports=i.p+"img/artist.efef28f0.jpeg"},9906:function(e,t,i){"use strict";e.exports=i.p+"img/attorney.1197644e.avif"},3481:function(e,t,i){"use strict";e.exports=i.p+"img/biologist.742866cc.jpg"},5609:function(e,t,i){"use strict";e.exports=i.p+"img/builder.1b620454.jpg"},1101:function(e,t,i){"use strict";e.exports=i.p+"img/business.010e2414.jpg"},7242:function(e,t,i){"use strict";e.exports=i.p+"img/constructor.c64bd6a6.jpg"},258:function(e,t,i){"use strict";e.exports=i.p+"img/designer.10a5221e.avif"},4298:function(e,t,i){"use strict";e.exports=i.p+"img/doctor.1f6b9ee9.avif"},4953:function(e,t,i){"use strict";e.exports=i.p+"img/ecolog.76fb021f.jpg"},157:function(e,t,i){"use strict";e.exports=i.p+"img/engineer.58ca82aa.avif"},8931:function(e,t,i){"use strict";e.exports=i.p+"img/finanalitic.df7a88e3.jpg"},4759:function(e,t,i){"use strict";e.exports=i.p+"img/financier.1c32f4d4.avif"},9227:function(e,t,i){"use strict";e.exports=i.p+"img/frontEnd.635468b7.jpg"},2546:function(e,t,i){"use strict";e.exports=i.p+"img/garden.4de5b436.jpg"},4145:function(e,t,i){"use strict";e.exports=i.p+"img/genetics.4cc04c1b.jpg"},5843:function(e,t,i){"use strict";e.exports=i.p+"img/hr.5d9f0561.jpg"},8774:function(e,t,i){"use strict";e.exports=i.p+"img/journalist.2d8fcb11.avif"},4585:function(e,t,i){"use strict";e.exports=i.p+"img/lawyer.d38171da.jpg"},8385:function(e,t,i){"use strict";e.exports=i.p+"img/logistician.272d5aa3.webp"},3109:function(e,t,i){"use strict";e.exports=i.p+"img/manager.3bdc41dc.avif"},5741:function(e,t,i){"use strict";e.exports=i.p+"img/marketer.8811ac45.avif"},7269:function(e,t,i){"use strict";e.exports=i.p+"img/mechanic.4353712c.jpg"},5371:function(e,t,i){"use strict";e.exports=i.p+"img/musician.8adaa66e.avif"},3261:function(e,t,i){"use strict";e.exports=i.p+"img/neurosurgeon.5a3aa106.jpg"},4776:function(e,t,i){"use strict";e.exports=i.p+"img/pr-spetsialist.e57c25c2.jpg"},9397:function(e,t,i){"use strict";e.exports=i.p+"img/producer.0ed562ce.jpg"},5006:function(e,t,i){"use strict";e.exports=i.p+"img/programmer.7753af3e.avif"},4734:function(e,t,i){"use strict";e.exports=i.p+"img/psychologists.f45897f4.jpg"},7255:function(e,t,i){"use strict";e.exports=i.p+"img/ranger.1defb90d.jpg"},8289:function(e,t,i){"use strict";e.exports=i.p+"img/seller.eb3d87bc.avif"},9147:function(e,t,i){"use strict";e.exports=i.p+"img/teacher.7eb9ea7b.avif"},1783:function(e,t,i){"use strict";e.exports=i.p+"img/technical_writer.f6586049.avif"},838:function(e,t,i){"use strict";e.exports=i.p+"img/vet.03730ffa.jpg"},8862:function(e,t,i){"use strict";e.exports=i.p+"img/webdev.a7d0a2c4.avif"},552:function(e,t,i){"use strict";e.exports=i.p+"img/writer.59d7f325.jpg"},3510:function(e,t,i){"use strict";e.exports=i.p+"img/AUPE.489701ee.jpg"},2953:function(e,t,i){"use strict";e.exports=i.p+"img/IITU.f5b97503.jpg"},9561:function(e){"use strict";e.exports="data:image/png;base64,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"},8266:function(e,t,i){"use strict";e.exports=i.p+"img/KAZGUU.6c9f2067.jpg"},1287:function(e,t,i){"use strict";e.exports=i.p+"img/KBTU.0aa66b03.jpg"},3041:function(e,t,i){"use strict";e.exports=i.p+"img/alfarabi.8a195d5a.png"},1067:function(e,t,i){"use strict";e.exports=i.p+"img/astanaMed.2ccc6cf8.png"},8482:function(e,t,i){"use strict";e.exports=i.p+"img/aues.fd1c2d4a.png"},1011:function(e,t,i){"use strict";e.exports=i.p+"img/gumilev.47aa49ce.png"},4120:function(e,t,i){"use strict";e.exports=i.p+"img/iitu.8744c877.jpg"},5933:function(e,t,i){"use strict";e.exports=i.p+"img/kaznaru.dc6de47e.png"},8335:function(e,t,i){"use strict";e.exports=i.p+"img/kaznmu.3f87983b.png"},649:function(e,t,i){"use strict";e.exports=i.p+"img/kaznui.a3c7586a.png"},4731:function(e,t,i){"use strict";e.exports=i.p+"img/kimep.a5976e3e.png"},2091:function(e,t,i){"use strict";e.exports=i.p+"img/krmu.a467de75.png"},6526:function(e,t,i){"use strict";e.exports=i.p+"img/kurmangasy.b2be55f6.jpeg"},8415:function(e,t,i){"use strict";e.exports=i.p+"img/nazarbayev.56f1beb9.png"},4678:function(e,t,i){"use strict";e.exports=i.p+"img/riskulov.48e17f25.png"},4198:function(e,t,i){"use strict";e.exports=i.p+"img/satpaev.c7b3be8f.png"},5421:function(e,t,i){"use strict";e.exports=i.p+"img/shakarim.2ba7ce98.jpg"},3629:function(e,t,i){"use strict";e.exports=i.p+"img/zhangir.a4b46493.png"},4796:function(e,t,i){"use strict";e.exports=i.p+"media/Main.3653555e.mp4"},5669:function(e,t,i){"use strict";e.exports=i.p+"img/Prof.08482cda.gif"},8375:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7ZdRToNAEIZnqS+kmvQIPYI3sL2BnsDyQC2+2BtIT6BPSsCE3qBHqN6gR+gRmmitRsvKlCiSlDrAxiXpfI+Thf34ITMLAMMwDMMw+8DAX/Vs/+WYvD5ctZ3gdQiKMagLUVgICA+EMaWIo7BYwxRA3FwGSxcUIiiLnIf3U5DRJK3IxaeMukH/cLZt/Y+whHa6UTS6s5suKICUtGxEs3jXeVoRrV2Je5Y5jx/yKXMPMK5VJU5KGtmW3l+JO8FyHOdynt2weuJkaaQu4oWkkTqIF5ZGdIuXkkZ0ipeWRnSJV5JGdIiTJ2Ie2JOlBCtbjfs4NCZ519zbzV627yd9fBA8d4BAZelN0vF4z1bjpGF9lnfNJunMm0FpcD376BEI1OKbToTNERDR3j2KCiNa+3QZYUTbRCwrjGg5e1QRRv79lFdVGCFJ10kYofXpD+gUER6GsgXCOPldUyWMkKS9vjlOp95uYeTWEgvZgO731FMpXJgyf+MX/tsVMAzDMAzDJHwBJTR4G5hsLGQAAAAASUVORK5CYII="},4095:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHwSURBVHgB7ZlBTsJAFIbfGxuE6MIj4A3wBMJNZAGBlXoDOQGwQ1jADYwnwBvIETgCiSZEQ3nOjzQhKHQG2mlJ+i1g2mSmX5vpvPemTGtq/c+Sx2dtIikR8RWlCaGpEL2RT61eszDFKcZPoz+/Y6YhpR3cgE8VyKvGcF5kljadAkxFPqMxmh4v+F7/p2tq7EPLNwYfZfU7p08N71bRiZKJuyYTd00m7prkxXUYX4h/w8QTm27Jiq9zj0H9cpLzzis28smJbyRMOOxUeWYjn4z4lnQA5ElU1WQI9+I7pAEyVVH+i8kwbsVDpNnXKatQ0WQod+IRSgMrcV0+PWHp0q2ZTb+opYGxOKR7tUILS9dClhVj+RikgZF4IB0cG8vHJA3CxfXF816+u306VD5GaRAurmu878XX+GEof+rSnfIxSwPDqSIlY3kH0kRWL2e4PMK1C2nAzcEc+xRl4w5aDjnFKjwbErU0FgvrALTvyf9H1NIBB0VOU/m4pMHBIT9MPk5pcFSusks+bmlwdJK1Le9CGkSSHQby2GN3IQ08igjI6w8D71irXJBtT7gmE3dNJu4aRcJ2hW9KUMJ2m41pQGg5UXkv17XebkgSXWE91y5eFQoCEX6kU2BdFqK5ejl79cJIPLrWn8VH6Xz6cOLOZln4AxIVdNcxIY1TAAAAAElFTkSuQmCC"},1791:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGBSURBVFiF7daxThRRGMXxn4tSkoAVDYRlCUEIMRpCLKm3kQSfQh4JEwhUxjewsKSEYLQSaAAlGm2kADRQzKwZZtgZ9u7MbiEnOclO5n73f757984M9+pOy3jZL/gM/sae60eALVzF3uw1vIHLRIA/mO5lgI0EvOX1XsEn3ew+uQpTvQjw5hZ4y2tVw8dwnhPgAhNVwUfd/Oe381Y89k56kLoeRj3hWTwR7e1Qh4HPcYzP+ISDlDPgfcXdleUvMVMtDjCAkQ477EaPE+x/eoYfqu/+FxbbJXuK7xXCf2KhaHlmcFIB/BTzRfCWpnFUIvybgDfmBA5LgJ+IjnKQ6rpbieN4jrbKHIWUDvA1NL2o+8xDpxPV8Fv4CpwpbjJXjS7gLTeKOsxTGd96uXP0PcDDguLZnHtXeBf/XpF9s95ljkJ9dPu+vsfzxLg5vG0zdi8U/kj262cbSzk1L/AhVXOBwZAA44lJdtDsoLaJ3UT9WEgAWBXtb8hZruEVXofC/w9dA1RhFydewrA9AAAAAElFTkSuQmCC"},2361:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7ZlNctNAEIV7NIIt4gZiy8KRHFPFDnECnBPEnCDJCZycALgBN4CcwGbHIkTGLtYoJ8BrnJmmR3Yo/0sz1ROnKv4WljUaTT2333S3bIA9e/Y8LjBPIvBIAL4Iwh54xItwHLUyEJjgr9Y78ISfiCMel0eFp+AJAcxg/joGOfn9f0CJtyK96gMz/BGXtyeL59qLXTxYBduL56LjI8OwCsdhs0OHeGk4giA4AWZ4Iy7E8YZx9k3KJhzzVwkgZBsuR5i3MmCEL+JSb7eDxC4wwpIOV1LgJhhTI0/E5d+s3jy+1Lg14mUkn6gIJpoiihHNfgYYxHTFvI9AY1weQcRQGyxoL4xpw47ppKB76b0e09gNqKCYzgkLkX4vwEY4jg57tEgCJo3tHvPhBqDUkUgH4/kLq1a5VUf02oeHANK3o9T7ZdGGjVbBUbMLKM5hZ+BnUPpsnWjDdo/vSjziuTi4vtg2pTIdYk5lXIoPcF+eRzwl0Z+qptXK42VVDNQXygQxeAPHlOfJzz++1plduwBRhxdTs9TzIt5sQq1N5hjUvcWqcs7Em8gnwMVUNFXUQWFzm1PJp/aVPM/S8fXX5eg6uJV89bRy89RbR1y4iDa4CZcTHquE+gAccWyy8A1wgCIDR9yE823ODByx3pzlg6+Uf4CLUMfiZX4DlthHPAz5UqFBBxk44GAVXe1vk5tBtafHquXQKRAOwrdtKCrb1CBRQUlFY3BJPccL+hnurOIDtMEBe48PD42/1zVc/VnvXKzcYyquDLrmx6G1iyr13DafW5Z8arakzhcHKZoCO6KRf6u+P0lmLUO8JKMtGleXYIGdVaSa8+O8LapFl/KoiVpvH52BJZYeF3dP6WQLEkzNvkvJFun1R9NYlU850xHeTLUM+buHw5Snat6tSfbBn83c618vvv/X2bPHA/8ANwYUa5X6ayMAAAAASUVORK5CYII="},9051:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB7VldUhpBEO5eNhHUB24g3kBvgCdQT6BWiQF9EE8QPIHmIYUBKuAJ1BNIbsANgicIVUm5iLvb6QFBwJ0fmDWVVPxeLHd6e3q/6d8B4B8EQkzIl72Maj2ZTHbO97ADMSAWow9r9+dEeKyXpPNybvEELGFtdLFO6Qe/+8NU3sFk5vM+3oEFHIgFZHbsBG1bgwVcsITw03zdW0cfj4korZINIPgE/ytiyx7Ct7t+dw0oyAAmVkYLFNwBUjvpLrf+iuwhDPUeH3YcpC3+N2vwSpM/qLGQeHdj8wFzGS2M7fndIgFxmsP0zAo4IBHDy/fu4vnQ+HzVy/LzHbaofZFLnUKcRgvliFDnDTJgCzYenPCEQifd1/mEkLD45SApDdqZskehel/kP2e8WTxA/nByrnCKOkR1FjLO04dVr8TqzuC1Idj34VIlYuQewmAm9yO8OqhDPq5fFFJtlZSW6Vzl19qfMViAg9r1MzoprdGuk7gCG/Bxkw+r5VwKCZySThzJrYvspJJRGt33Y9ss4UBpeNwXuQWRyppKeQ5OLlLHapUKEHLetAGzXN5PXU4+glPdawhUVK1Ljc5XvN04WJ5+xIWjCTq22bfz1Z9ZuVrZa4CbYIMIlp+X9GwDudJTlrsHhlmwQQTLQ5iwjYN+RqI6AoeV3tpcPcUQESwXar2dSREd25g+qtFK1EpkGQ/fBR2uSiXQwOFI58Z/68UHTrE8iA//jFPZqLsTbH+odIuqkh08diOLn3U/3W+gAG5HDwTLB6nVcZlCzfsugprZLek6OBNYz4gv/DOS5UEWEqlMVzhMEMtgO/LPCF9GZ7wFQJ7cPeuWINI9RL/hYkLZ0S24ye3x6aNQ9W5ZW2PcaMHyeJ/8vCm2yGCC93vBSfVouTX9PDIQE0GiwytZUOCp1I780yfeIDe5QZ/liN6bDV4DAywtLrWjnksDcRg8IAV1FtzUqmzWk7FsjIiAHkLu04TXoASmVY3NpC/PDlIUH0f+Et2ABrJsEEffwi7QkK1JjRapTAQMqFVHsm3L8pNrfJMtK1NeCKS94Zxm+7W6w8k9NeinMt1FDNE1Id/TEWYQnTObvkX4Mp/yhkpGe4VALuxhwGVaxR7iFoK7Zd0UiEk8gD2dmNE2g2Lj3Fp1fgbgXL9ePVhu6eSMyrhQ5FO4YXwPPTNYLyZ2TQwWmOlA+4yL6TyOK7Eh2CV8CLZNDRaYqWESiikBG1zpGhADRNBRABuzGCwwd+gcfn3YDIOwiGZXvBMQxvIlSEmVi1WwHgIGQdofQrOgbIT6haop0uO8xo40QcwQc10YPl9tOY4by49Db3iDIX4Dbu+q15cA2PUAAAAASUVORK5CYII="},9173:function(e,t,i){"use strict";e.exports=i.p+"img/edit.2e2d70a5.png"},6258:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7ZTRCYUgGEY/vAs4gqO4QSPUnaA2aIRGcJRGaIY26LG3+iUEkQijvuihA+ellIOKAh8XMWIvLpl20VyX/Cv9R7UTaUWLfBqxOBqgdlZR4TwaJyIWBNJICwJxpMK2XdRICRIhYkA6jzhSg0iIaBBReIAQmfAARhyQ/16lFriB+iDgcBOOHfAM7IBmBzyWHfDoq4FfxphZHLHdpT/eygo5XkUtyHe/BAAAAABJRU5ErkJggg=="},1027:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZXhDYMgEEa/dIJu0Nuk3aztBI6gKzgBOolsoBvoXYKJUUSinPGHL3lR//CCEAAuDLHGPdUCDdu7kGpAbJEYmgWiZ/JAHAT/GlRIBGE5g9E3EkCBgPhEAvJAYMtsPpiB/zeYAxHxI4PELvxeXmdEcEbEakcsW2tHfuOLVsSypXakYjvtyH/6oREp4HZVbMRiX8TL2rFCCB+QU+UC++LmKANI11fHUSkWRAAAAABJRU5ErkJggg=="},7013:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF0SURBVEiJ1dU9SxxRFMbxn2aCq64EFC0MCAFtQgrBkCa1XZoUNhYW4ifQVj+JoNjb2adLI6aySCOEFIE0IcoajLBginuWDHqvO66VB4YZzsv93/Pcl+Gp21CDnNc4wi9chO8FpvABX+8rHm4AOMJcxj8XsXutagA4j+fdLf+XBrV3JJrCHt7iO/5gqTBg3d+WOjrBuiQn8h1UmMVlAH4WJlf3T0ZNE0VUuMF2k+Swnai5A8gtchdXUtuwis34XsABnmMRu5LM7ajpNgGQ5JmI74+SrvAea3iJZWxgPHIvcwOVAJ0a4C9GMjkjtfhE1AwMaBUA3XgeDKhLdF0AtAJuEEDH/0UudVAHtAcB9JPo0R3UJarwrA/gQbuovga9QW530Qp4D/CoNSgBerHxEqB0d3QiNopP2MdvfJZO8g8cxszHIjcLKNmWdLdMN8ididzNXLDUQe+UHuOsD2A+3rmdVvxlVpIEb/CtD+AVTrEic9k9ffsHOd1SaGw1QXYAAAAASUVORK5CYII="},1581:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAtQAAALUBOdDOnwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFmSURBVEiJ7daxalRREMbx3yxLbEICNhqwscgLhBSpBYXt0ojYmS5a5QFSir2kWfIGQbCxELUQUoi1lWDaECVBElhhibBjsWchuewmN3uDhfjBNDPnfv9z7lzmHljCOwyQDeMjZjPTKKKYf0a3QF5iD1vqaxMt3MFNdDKzB23cx5PMPICI6KOXmT8muUVEFyv4jTX8KqWHeIW3EdHJzF4LUY53Fa1iuzy7PEpm5mmB/CyQ2dYVjc/qE46qyQrkTbsBYKIy8zQinmK/yQnWcPeC+oBh56vq48Yl5s8xj128L+v74xaOe0Wv0Y2IrzieAPhWAu7hMR7UBXzACzwru7xMh9jIzC/jiqNPdCEzv9cwq62IuI2DJk2upXOAiNiKiGwY50ZMtQeL2MDOlBt+hM5FADiZth8RcVLN/d0e/Af8u4A0HBnXrUC2DYfbevnPzmAuIm5NaTqHmYhYwHrxvtZryygGxXPpD158mliABpn5AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=994.e083f850.js.map