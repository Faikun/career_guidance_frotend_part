"use strict";(self["webpackChunkcareer_guidance"]=self["webpackChunkcareer_guidance"]||[]).push([[916],{3916:function(e,t,A){A.r(t),A.d(t,{default:function(){return F}});var s=A(3396),n=A(7139),i=A(4796);const o={class:"prof"},a={class:"prof__info"},r={class:"prof__title"},l=(0,s._)("div",{class:"prof__text"},"По прохождению данного теста, вы узнаете к чему вы предрасположены, таким образом, данный тест поможет вам с определением вашей профориентации",-1),u=(0,s._)("div",{class:"prof__image"},[(0,s._)("video",{autoplay:"",loop:"",src:i})],-1);function p(e,t,A,i,p,c){const m=(0,s.up)("prof-orientation-template");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",r,(0,n.zw)(i.routeName),1),l,((0,s.wg)(),(0,s.j4)(s.n4,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{routeName:i.routeName},null,8,["routeName"])])),_:1}))]),u])}var c=A(2483),m=(A(7658),A(4095)),g=A(9051);const w={class:"prof__details"},d={class:"prof__details-block"},Q=(0,s._)("img",{class:"prof__details-img",src:m,alt:"questions"},null,-1),f={class:"prof__details-block"},I=(0,s._)("img",{class:"prof__details-img",src:g,alt:"Time"},null,-1);function E(e,t,A,i,o,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",w,[(0,s._)("div",d,[Q,(0,s._)("span",null,(0,n.zw)(i.testQuestionsNum?i.testQuestionsNum:"Неизвестное количество")+" вопросов",1)]),(0,s._)("div",f,[I,(0,s._)("span",null,(0,n.zw)(i.testQuestionsNum?"20":"Неизвестное количество")+" мин",1)])]),(0,s._)("button",{type:"button",class:"btn green",onClick:t[0]||(t[0]=t=>i.testQuestionsNum?e.$router.push({name:"test",props:{name:A.routeName}}):"")},"Начать")],64)}var N=A(65),k={name:"ProfOrientationTemplate",props:["routeName"],async setup(e){let t=(0,N.oR)();await t.dispatch("initialQuestionList");const A=(0,s.Fl)((()=>t.getters.getTests));let n;try{const t=A.value.filter((t=>t.name===e.routeName))[0].questions;let s=[];for(let e=0;e<t.length;e++){const A=t[e].questions;for(let n=0;n<A.length;n++)s.push(A[n]),s[s.length-1]["isAnswered"]=!1,s[s.length-1]["name"]=t[e].name}n=s.length}catch(i){console.log(i.message)}return{testQuestionsNum:n}}},L=A(89);const B=(0,L.Z)(k,[["render",E]]);var C=B,V={name:"ProfOrientation",components:{ProfOrientationTemplate:C},setup(){const e=(0,c.yj)(),t=(0,s.Fl)((()=>e.params.name));return{routeName:t}}};const v=(0,L.Z)(V,[["render",p]]);var F=v},4796:function(e,t,A){e.exports=A.p+"media/Main.3653555e.mp4"},4095:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHwSURBVHgB7ZlBTsJAFIbfGxuE6MIj4A3wBMJNZAGBlXoDOQGwQ1jADYwnwBvIETgCiSZEQ3nOjzQhKHQG2mlJ+i1g2mSmX5vpvPemTGtq/c+Sx2dtIikR8RWlCaGpEL2RT61eszDFKcZPoz+/Y6YhpR3cgE8VyKvGcF5kljadAkxFPqMxmh4v+F7/p2tq7EPLNwYfZfU7p08N71bRiZKJuyYTd00m7prkxXUYX4h/w8QTm27Jiq9zj0H9cpLzzis28smJbyRMOOxUeWYjn4z4lnQA5ElU1WQI9+I7pAEyVVH+i8kwbsVDpNnXKatQ0WQod+IRSgMrcV0+PWHp0q2ZTb+opYGxOKR7tUILS9dClhVj+RikgZF4IB0cG8vHJA3CxfXF816+u306VD5GaRAurmu878XX+GEof+rSnfIxSwPDqSIlY3kH0kRWL2e4PMK1C2nAzcEc+xRl4w5aDjnFKjwbErU0FgvrALTvyf9H1NIBB0VOU/m4pMHBIT9MPk5pcFSusks+bmlwdJK1Le9CGkSSHQby2GN3IQ08igjI6w8D71irXJBtT7gmE3dNJu4aRcJ2hW9KUMJ2m41pQGg5UXkv17XebkgSXWE91y5eFQoCEX6kU2BdFqK5ejl79cJIPLrWn8VH6Xz6cOLOZln4AxIVdNcxIY1TAAAAAElFTkSuQmCC"},9051:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB7VldUhpBEO5eNhHUB24g3kBvgCdQT6BWiQF9EE8QPIHmIYUBKuAJ1BNIbsANgicIVUm5iLvb6QFBwJ0fmDWVVPxeLHd6e3q/6d8B4B8EQkzIl72Maj2ZTHbO97ADMSAWow9r9+dEeKyXpPNybvEELGFtdLFO6Qe/+8NU3sFk5vM+3oEFHIgFZHbsBG1bgwVcsITw03zdW0cfj4korZINIPgE/ytiyx7Ct7t+dw0oyAAmVkYLFNwBUjvpLrf+iuwhDPUeH3YcpC3+N2vwSpM/qLGQeHdj8wFzGS2M7fndIgFxmsP0zAo4IBHDy/fu4vnQ+HzVy/LzHbaofZFLnUKcRgvliFDnDTJgCzYenPCEQifd1/mEkLD45SApDdqZskehel/kP2e8WTxA/nByrnCKOkR1FjLO04dVr8TqzuC1Idj34VIlYuQewmAm9yO8OqhDPq5fFFJtlZSW6Vzl19qfMViAg9r1MzoprdGuk7gCG/Bxkw+r5VwKCZySThzJrYvspJJRGt33Y9ss4UBpeNwXuQWRyppKeQ5OLlLHapUKEHLetAGzXN5PXU4+glPdawhUVK1Ljc5XvN04WJ5+xIWjCTq22bfz1Z9ZuVrZa4CbYIMIlp+X9GwDudJTlrsHhlmwQQTLQ5iwjYN+RqI6AoeV3tpcPcUQESwXar2dSREd25g+qtFK1EpkGQ/fBR2uSiXQwOFI58Z/68UHTrE8iA//jFPZqLsTbH+odIuqkh08diOLn3U/3W+gAG5HDwTLB6nVcZlCzfsugprZLek6OBNYz4gv/DOS5UEWEqlMVzhMEMtgO/LPCF9GZ7wFQJ7cPeuWINI9RL/hYkLZ0S24ye3x6aNQ9W5ZW2PcaMHyeJ/8vCm2yGCC93vBSfVouTX9PDIQE0GiwytZUOCp1I780yfeIDe5QZ/liN6bDV4DAywtLrWjnksDcRg8IAV1FtzUqmzWk7FsjIiAHkLu04TXoASmVY3NpC/PDlIUH0f+Et2ABrJsEEffwi7QkK1JjRapTAQMqFVHsm3L8pNrfJMtK1NeCKS94Zxm+7W6w8k9NeinMt1FDNE1Id/TEWYQnTObvkX4Mp/yhkpGe4VALuxhwGVaxR7iFoK7Zd0UiEk8gD2dmNE2g2Lj3Fp1fgbgXL9ePVhu6eSMyrhQ5FO4YXwPPTNYLyZ2TQwWmOlA+4yL6TyOK7Eh2CV8CLZNDRaYqWESiikBG1zpGhADRNBRABuzGCwwd+gcfn3YDIOwiGZXvBMQxvIlSEmVi1WwHgIGQdofQrOgbIT6haop0uO8xo40QcwQc10YPl9tOY4by49Db3iDIX4Dbu+q15cA2PUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=916.8e72ee78.js.map