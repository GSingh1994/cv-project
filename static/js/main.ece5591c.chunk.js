(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);c(10),c(11);var n=c(1),s=c.n(n),a=c(9),i=c.n(a),l=(c(16),c(4)),j=c(2),r=(c(17),c(6)),o=c.p+"static/media/person.eec43b10.svg",d=c(0),b=function(e){var t=e.headerValues,c=Object(n.useState)({name:"",website:"",address:"",email:"",summary:""}),s=Object(j.a)(c,2),a=s[0],i=s[1],b=function(e){var t=e.target,c=t.name,n=t.value;i(Object(l.a)(Object(l.a)({},a),{},Object(r.a)({},c,n)))};return Object(n.useEffect)((function(){t(a)}),[a]),Object(d.jsxs)("div",{className:"Header",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:o,alt:""}),Object(d.jsx)("h1",{className:"heading",children:"Personal Details"})]}),Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{name:"name",value:a.name,onChange:b,type:"text"}),Object(d.jsx)("label",{htmlFor:"website",children:"Website:"}),Object(d.jsx)("input",{name:"website",value:a.website,onChange:b,type:"text"}),Object(d.jsx)("label",{htmlFor:"address",children:"address:"}),Object(d.jsx)("input",{name:"address",value:a.address,onChange:b,type:"text"}),Object(d.jsx)("label",{htmlFor:"email",children:"email:"}),Object(d.jsx)("input",{name:"email",value:a.email,type:"email",onChange:b}),Object(d.jsx)("label",{htmlFor:"summary",children:"summary:"}),Object(d.jsx)("textarea",{name:"summary",onChange:b,value:a.summary})]})]})},h=c(3),u=c.p+"static/media/exp.24b96528.svg",m=function(e){var t=e.experienceValues,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],i=s[1],l=function(e,t){var c=e.target,n=c.name,s=c.value,l=Object(h.a)(a);l[t][n]=s,i(l)};Object(n.useEffect)((function(){t(a)}),[a]);return Object(d.jsxs)("div",{className:"Experience",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:u,alt:""}),Object(d.jsx)("h1",{className:"heading",children:"Work Experience"})]}),a.map((function(e,t){return Object(d.jsxs)("fieldset",{className:"exp-field",children:[Object(d.jsx)("button",{className:"delete-btn button-clear",onClick:function(){return function(e){var t=Object(h.a)(a);t.splice(e,1),i(t)}(t)},children:"DELETE"}),Object(d.jsxs)("label",{htmlFor:"employer",children:["Employer",Object(d.jsx)("input",{name:"employer",value:e.employer,onChange:function(e){return l(e,t)},type:"text"})]}),Object(d.jsxs)("label",{htmlFor:"jobTitle",children:["jobTitle",Object(d.jsx)("input",{name:"jobTitle",value:e.jobTitle,onChange:function(e){return l(e,t)},type:"text"})]}),Object(d.jsxs)("div",{className:"form-location",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{name:"city",value:e.city,onChange:function(e){return l(e,t)},type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"province",children:"Province"}),Object(d.jsx)("input",{name:"province",value:e.province,onChange:function(e){return l(e,t)},type:"text"})]})]}),Object(d.jsxs)("div",{className:"form-time",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"startJob",children:"Start date"}),Object(d.jsx)("input",{onChange:function(e){return l(e,t)},type:"month",name:"startJob",value:e.startJob})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"endJob",children:"End date"}),Object(d.jsx)("input",{onChange:function(e){return l(e,t)},type:"month",name:"endJob",value:e.endJob})]})]})]},t)})),Object(d.jsx)("button",{className:"button-clear add-btn",onClick:function(){i([].concat(Object(h.a)(a),[{employer:"",jobTitle:"",startJob:"",endJob:"",jobDuties:"",city:"",province:""}]))},children:"Add"})]})},O=c.p+"static/media/edu.aa34c026.svg",x=function(e){var t=e.educationValues,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],i=s[1],l=function(e,t){var c=e.target,n=c.name,s=c.value,l=Object(h.a)(a);l[t][n]=s,i(l)};Object(n.useEffect)((function(){t(a)}),[a]);return Object(d.jsxs)("div",{className:"Education",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:O,alt:""})," ",Object(d.jsx)("h1",{className:"heading",children:"Education"})]}),a.map((function(e,t){return Object(d.jsxs)("fieldset",{className:"edu-field",children:[Object(d.jsx)("button",{className:"button-clear delete-btn",onClick:function(){return function(e){var t=Object(h.a)(a);t.splice(e,1),i(t)}(t)},children:"DELETE"}),Object(d.jsx)("label",{htmlFor:"school",children:"School:"}),Object(d.jsx)("input",{value:e.school,name:"school",onChange:function(e){return l(e,t)},type:"text"}),Object(d.jsx)("label",{htmlFor:"degree",children:"degree"}),Object(d.jsx)("input",{value:e.degree,name:"degree",onChange:function(e){return l(e,t)},type:"text"}),Object(d.jsxs)("div",{className:"form-location",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{name:"city",value:e.city,onChange:function(e){return l(e,t)},type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"province",children:"Province"}),Object(d.jsx)("input",{name:"province",value:e.province,onChange:function(e){return l(e,t)},type:"text"})]})]}),Object(d.jsxs)("div",{className:"form-time",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"startSchool",children:"From:"}),Object(d.jsx)("input",{onChange:function(e){return l(e,t)},type:"month",value:e.startSchool,name:"startSchool"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"endSchool",children:"To:"}),Object(d.jsx)("input",{onChange:function(e){return l(e,t)},type:"month",value:e.endSchool,name:"endSchool"})]})]})]},t)})),Object(d.jsx)("button",{className:"button-clear add-btn",onClick:function(){i([].concat(Object(h.a)(a),[{school:"",degree:"",startSchool:"",endSchool:"",city:"",province:""}]))},children:"Add"})]})},v=c.p+"static/media/mail.f7baf2d2.svg",p=c.p+"static/media/github.16a9304e.svg",f=c.p+"static/media/location.7850949a.svg",g=c(19),y=function(e){var t=e.headerState,c=e.expState,n=e.eduState;return Object(d.jsxs)("div",{className:"CvPage",children:[Object(d.jsxs)("div",{className:"cv-header",children:[Object(d.jsx)("h1",{children:t.name}),Object(d.jsxs)("div",{className:"personal-info",children:[Object(d.jsx)("img",{src:p,alt:"gitHub icon"})," ",t.website]}),Object(d.jsxs)("div",{className:"personal-info",children:[Object(d.jsx)("img",{src:f,alt:"location icon"}),t.address]}),Object(d.jsxs)("div",{className:"personal-info",children:[Object(d.jsx)("img",{src:v,alt:"mail icon"}),t.email]})]}),Object(d.jsxs)("div",{className:"cv-body",children:[Object(d.jsx)("div",{className:"summary",children:t.summary}),Object(d.jsx)("h1",{children:"Work History"}),c.map((function(e){return Object(d.jsxs)("div",{className:"cv-experience",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[e.startJob," -"]}),Object(d.jsx)("div",{children:e.endJob})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bold",children:e.employer}),Object(d.jsx)("div",{children:e.jobTitle})]}),Object(d.jsxs)("div",{className:"cv-location",children:[Object(d.jsxs)("div",{children:[e.city,","]}),Object(d.jsx)("div",{children:e.province})]})]},g())})),Object(d.jsx)("h1",{children:"Education"}),n.map((function(e){return Object(d.jsxs)("div",{className:"cv-education",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.startSchool}),Object(d.jsx)("div",{children:e.endSchool})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bold",children:e.school}),Object(d.jsx)("div",{children:e.degree})]}),Object(d.jsxs)("div",{className:"cv-location",children:[Object(d.jsxs)("div",{children:[e.city,","]}),Object(d.jsx)("div",{children:e.province})]})]},g())}))]})]})},N=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(j.a)(a,2),r=i[0],o=i[1],h=Object(n.useState)([]),u=Object(j.a)(h,2),O=u[0],v=u[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)(b,{headerValues:function(e){s(Object(l.a)({},e))}}),Object(d.jsx)(m,{experienceValues:function(e){o(e)}}),Object(d.jsx)(x,{educationValues:function(e){v(e)}})]}),Object(d.jsx)("div",{className:"cv",children:Object(d.jsx)(y,{headerState:c,expState:r,eduState:O})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),C()}},[[21,1,2]]]);
//# sourceMappingURL=main.ece5591c.chunk.js.map