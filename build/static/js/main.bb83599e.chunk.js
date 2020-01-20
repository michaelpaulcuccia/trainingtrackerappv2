(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),i=a.n(l),o=a(23),c=a(24),s=(a(82),a(14)),u=a(15),m=a(18),h=a(16),p=a(17),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"BJJ Training Tracker"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Training")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/create",className:"nav-link"},"Create Training Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),t}(n.Component),d=a(6),b=a(11),v=a.n(b),E=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.training.username),r.a.createElement("td",null,e.training.type),r.a.createElement("td",null,e.training.instructional?"Yes":"No"),r.a.createElement("td",null,e.training.openmat?"Yes":"No"),r.a.createElement("td",null,e.training.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/edit/"+e.training._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteTraining(e.training._id)}},"delete")))},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).deleteTraining=a.deleteTraining.bind(Object(d.a)(a)),a.state={training:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/training/").then((function(t){e.setState({training:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteTraining",value:function(e){v.a.delete("/training/"+e).then((function(e){console.log(e.data)})),this.setState({training:this.state.training.filter((function(t){return t._id!==e}))})}},{key:"trainingList",value:function(){var e=this;return this.state.training.map((function(t){return r.a.createElement(E,{training:t,deleteTraining:e.deleteTraining,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Training"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Training Details"),r.a.createElement("th",null,"Class"),r.a.createElement("th",null,"Open Mat"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.trainingList())))}}]),t}(n.Component),C=a(35),y=a.n(C),O=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(d.a)(a)),a.onChangeType=a.onChangeType.bind(Object(d.a)(a)),a.onChangeInstructional=a.onChangeUsername.bind(Object(d.a)(a)),a.onChangeOpenmat=a.onChangeOpenmat.bind(Object(d.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.state={username:"",type:"",instructional:!1,openmat:!1,date:new Date,users:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/training/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,type:t.data.type,instructional:t.data.instructional,openmat:t.data.openmat,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),v.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeInstructional",value:function(){this.setState({instructional:!1})}},{key:"onChangeOpenmat",value:function(){this.setState({openmat:!1})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,type:this.state.type,instructional:this.state.instructional,openmat:this.state.openmat,date:this.state.date};console.log(t),v.a.post("http://localhost:5000/training/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Training Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Type: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.type,onChange:this.onChangeType})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructional "),r.a.createElement("input",{type:"checkbox",className:"form-control",value:this.state.instructional,onChange:this.onChangeInstructional})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Open Mat "),r.a.createElement("input",{type:"checkbox",className:"form-control",value:this.state.openmat,onChange:this.onChangeOpenmat}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Training Log",className:"btn btn-primary"}))))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleCheck=function(e,t){a.setState({instructional:t?e.target.checked:e.target.value})},a.handleCheckTwo=function(e,t){a.setState({openmat:t?e.target.checked:e.target.value})},a.onChangeUsername=a.onChangeUsername.bind(Object(d.a)(a)),a.onChangeType=a.onChangeType.bind(Object(d.a)(a)),a.onChangeInstructional=a.onChangeUsername.bind(Object(d.a)(a)),a.onChangeOpenmat=a.onChangeOpenmat.bind(Object(d.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.state={username:"",type:"",instructional:!1,openmat:!1,date:new Date,users:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangeInstructional",value:function(){this.setState({instructional:!0})}},{key:"onChangeOpenmat",value:function(){this.setState({openmat:!0})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,type:this.state.type,instructional:this.state.instructional,openmat:this.state.openmat,date:this.state.date};console.log(t),v.a.post("http://localhost:5000/training/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Training Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description (technique, rounds, etc.): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.type,onChange:this.onChangeType})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Instructional "),r.a.createElement("input",{type:"checkbox",className:"form-control",value:this.state.instructional,onChange:function(t){return e.handleCheck(t,"instructional",!0)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Open Mat "),r.a.createElement("input",{type:"checkbox",className:"form-control",value:this.state.openmat,onChange:function(t){return e.handleCheckTwo(t,"openmat",!0)}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Training Log",className:"btn btn-primary"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.state={username:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),v.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),window.location="/create"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),t}(n.Component);var j=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement(c.a,{path:"/",exact:!0,component:f}),r.a.createElement(c.a,{path:"/edit/:id",component:O}),r.a.createElement(c.a,{path:"/create",component:k}),r.a.createElement(c.a,{path:"/user",component:N})))};i.a.render(r.a.createElement(j,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(162)}},[[77,1,2]]]);
//# sourceMappingURL=main.bb83599e.chunk.js.map