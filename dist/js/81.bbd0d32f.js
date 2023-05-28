"use strict";(self["webpackChunkcareer_guidance"]=self["webpackChunkcareer_guidance"]||[]).push([[81],{9081:function(t,e,a){a.r(e),a.d(e,{default:function(){return E}});var l=a(3396),i=a(9242),n=a(7139),s=a(1581),c=a(7013);const A={class:"admin__table-wrapper"},d={class:"admin__table-block"},o=(0,l._)("h2",{class:"admin__subtitle"},"Добавление тегов",-1),u={class:"table admin__table-additional"},m=(0,l._)("tr",null,[(0,l._)("th",null,"Название"),(0,l._)("th",null,"Удалить/Добавить")],-1),r=["id"],g=["onClick"],_={class:"admin__table-block"},h=(0,l._)("h2",{class:"admin__subtitle mt50"},"Добавление предметов",-1),b={class:"table admin__table-additional"},v=(0,l._)("tr",null,[(0,l._)("th",null,"Название"),(0,l._)("th",null,"Удалить/Добавить")],-1),p=["id"],w=["onClick"];function B(t,e,a,B,f,j){return(0,l.wg)(),(0,l.iD)("div",A,[(0,l._)("div",d,[o,(0,l._)("table",u,[m,(0,l._)("tr",null,[(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{class:"admin__table-input newUser",type:"text",placeholder:"Тег","onUpdate:modelValue":e[0]||(e[0]=t=>B.tag=t)},null,512),[[i.nr,B.tag,void 0,{trim:!0,lazy:!0}]])]),(0,l._)("td",null,[(0,l._)("img",{class:"admin__table-edit",src:s,alt:"save",onClick:e[1]||(e[1]=(...t)=>B.sendTags&&B.sendTags(...t))})])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(B.tags.slice().reverse(),(t=>((0,l.wg)(),(0,l.iD)("tr",{id:t.id},[(0,l._)("td",null,(0,n.zw)(t.name),1),(0,l._)("td",null,[(0,l._)("img",{class:"admin__table-edit",src:c,alt:"remove",onClick:e=>B.removeTag(t.id)},null,8,g)])],8,r)))),256))])]),(0,l._)("div",_,[h,(0,l._)("table",b,[v,(0,l._)("tr",null,[(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{class:"admin__table-input newUser",type:"text",placeholder:"Предмет","onUpdate:modelValue":e[2]||(e[2]=t=>B.subject=t)},null,512),[[i.nr,B.subject,void 0,{trim:!0,lazy:!0}]])]),(0,l._)("td",null,[(0,l._)("img",{class:"admin__table-edit",src:s,alt:"save",onClick:e[3]||(e[3]=(...t)=>B.sendSubjects&&B.sendSubjects(...t))})])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(B.subjects.slice().reverse(),(t=>((0,l.wg)(),(0,l.iD)("tr",{id:t.id},[(0,l._)("td",null,(0,n.zw)(t.name),1),(0,l._)("td",null,[(0,l._)("img",{class:"admin__table-edit",src:c,alt:"remove",onClick:e=>B.removeSubject(t.id)},null,8,w)])],8,p)))),256))])])])}var f=a(4870),j=a(65),C=a(4161),U={name:"AdminAdditional",setup(){(0,l.bv)((async()=>{await a.dispatch("setAllTags"),await a.dispatch("setAllSubjects")}));let t=(0,f.iH)(""),e=(0,f.iH)("");const a=(0,j.oR)(),i=(0,l.Fl)((()=>a.getters.getTags)),n=(0,l.Fl)((()=>a.getters.getSubjects)),s=async function(){t.value.length>3?(await C.Z.post("tags",{name:t.value}).then((async e=>{a.commit("setNotificationInfo",{titleValue:"Успех",text:"Тег добавлен успешно!",mode:"success"}),t.value="",await a.dispatch("setAllTags")})).catch((t=>console.log(t))),document.documentElement.scrollTop=0):a.commit("setNotificationInfo",{titleValue:"Упс",text:"Название тега должно быть больше трех символов в длину",mode:"danger"})},c=async function(){e.value.length>3?(await C.Z.post("subjects",{name:e.value}).then((async t=>{a.commit("setNotificationInfo",{titleValue:"Успех",text:"Предмет добавлен успешно!",mode:"success"}),await a.dispatch("setAllSubjects"),e.value=""})).catch((t=>console.log(t))),document.documentElement.scrollTop=0):a.commit("setNotificationInfo",{titleValue:"Упс",text:"Название предмета должно быть больше трех символов в длину",mode:"danger"})},A=async function(t){await C.Z["delete"]("subjects/"+t).then((async t=>{a.commit("setNotificationInfo",{titleValue:"Успех",text:"Предмет успешно удален!",mode:"success"}),await a.dispatch("setAllSubjects")})).catch((t=>console.log(t))),document.documentElement.scrollTop=0},d=async function(t){await C.Z["delete"]("tags/"+t).then((async t=>{a.commit("setNotificationInfo",{titleValue:"Успех",text:"Тег успешно удален!",mode:"success"}),await a.dispatch("setAllTags")})).catch((t=>console.log(t))),document.documentElement.scrollTop=0};return{tags:i,subjects:n,sendTags:s,sendSubjects:c,removeSubject:A,removeTag:d,tag:t,subject:e}}},V=a(89);const x=(0,V.Z)(U,[["render",B]]);var E=x},7013:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF0SURBVEiJ1dU9SxxRFMbxn2aCq64EFC0MCAFtQgrBkCa1XZoUNhYW4ifQVj+JoNjb2adLI6aySCOEFIE0IcoajLBginuWDHqvO66VB4YZzsv93/Pcl+Gp21CDnNc4wi9chO8FpvABX+8rHm4AOMJcxj8XsXutagA4j+fdLf+XBrV3JJrCHt7iO/5gqTBg3d+WOjrBuiQn8h1UmMVlAH4WJlf3T0ZNE0VUuMF2k+Swnai5A8gtchdXUtuwis34XsABnmMRu5LM7ajpNgGQ5JmI74+SrvAea3iJZWxgPHIvcwOVAJ0a4C9GMjkjtfhE1AwMaBUA3XgeDKhLdF0AtAJuEEDH/0UudVAHtAcB9JPo0R3UJarwrA/gQbuovga9QW530Qp4D/CoNSgBerHxEqB0d3QiNopP2MdvfJZO8g8cxszHIjcLKNmWdLdMN8ididzNXLDUQe+UHuOsD2A+3rmdVvxlVpIEb/CtD+AVTrEic9k9ffsHOd1SaGw1QXYAAAAASUVORK5CYII="},1581:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAtQAAALUBOdDOnwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFmSURBVEiJ7daxalRREMbx3yxLbEICNhqwscgLhBSpBYXt0ojYmS5a5QFSir2kWfIGQbCxELUQUoi1lWDaECVBElhhibBjsWchuewmN3uDhfjBNDPnfv9z7lzmHljCOwyQDeMjZjPTKKKYf0a3QF5iD1vqaxMt3MFNdDKzB23cx5PMPICI6KOXmT8muUVEFyv4jTX8KqWHeIW3EdHJzF4LUY53Fa1iuzy7PEpm5mmB/CyQ2dYVjc/qE46qyQrkTbsBYKIy8zQinmK/yQnWcPeC+oBh56vq48Yl5s8xj128L+v74xaOe0Wv0Y2IrzieAPhWAu7hMR7UBXzACzwru7xMh9jIzC/jiqNPdCEzv9cwq62IuI2DJk2upXOAiNiKiGwY50ZMtQeL2MDOlBt+hM5FADiZth8RcVLN/d0e/Af8u4A0HBnXrUC2DYfbevnPzmAuIm5NaTqHmYhYwHrxvtZryygGxXPpD158mliABpn5AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=81.bbd0d32f.js.map