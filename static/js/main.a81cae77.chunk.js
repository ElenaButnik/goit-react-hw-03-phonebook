(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__WUpef",button:"Form_button__3kzV1",label:"Form_label__1e26M",input:"Form_input__1pNQ7"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(18),n(12)),s=n(3),l=n(4),u=n(6),m=n(5),b=(n(19),n(11)),d=n(22),h=n(2),j=n.n(h),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number};t.props.addNewContact(a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t.prodIdName=Object(d.a)(),t.prodIdNumber=Object(d.a)(),t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.prodIdName,n=this.handleChange,a=this.prodIdNumber,c=this.state,r=c.name,o=c.number;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:t,children:[Object(p.jsxs)("label",{className:j.a.label,htmlFor:e,children:[" ","Name"]}),Object(p.jsx)("input",{className:j.a.input,id:e,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n}),Object(p.jsx)("label",{className:j.a.label,htmlFor:a,children:"Number"}),Object(p.jsx)("input",{className:j.a.input,id:a,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=n(7),v=n.n(O),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("ul",{className:v.a.list,children:this.props.contacts.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(p.jsxs)("li",{className:v.a.list__item,children:[a," : ",c,Object(p.jsx)("button",{className:v.a.button,onClick:t.props.removeContact,type:"button",id:n,children:"Delete"})]},n)}))})}}]),n}(a.Component),C=n(9),g=n.n(C),x=function(t){var e=t.value,n=t.changeFilter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{className:g.a.label,children:"Find contacts by name"}),Object(p.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:n,number:a,id:Object(d.a)()}])}}))},t.renderContacts=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log(e),console.log(this.state)}},{key:"render",value:function(){var t=this.addNewContact,e=this.changeFilter,n=this.renderContacts,a=this.removeContact;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{addNewContact:t}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{value:this.state.filter,changeFilter:e}),Object(p.jsx)(_,{contacts:n(),removeContact:a})]})}}]),n}(a.Component),y=N,F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),F()},7:function(t,e,n){t.exports={list:"ContactList_list__1uFkM",list__item:"ContactList_list__item__leprD",button:"ContactList_button__1ivuz"}},9:function(t,e,n){t.exports={label:"Filter_label__1X7mP",input:"Filter_input__1zbyl"}}},[[21,1,2]]]);
//# sourceMappingURL=main.a81cae77.chunk.js.map