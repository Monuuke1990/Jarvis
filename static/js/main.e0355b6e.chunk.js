(window["webpackJsonpdemo-practice"]=window["webpackJsonpdemo-practice"]||[]).push([[0],{24:function(e,a,t){e.exports=t(38)},29:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(20),r=t.n(s),c=(t(29),t(30),t(7)),i=t(12);t(31),t(32);var o=t(1),m=t(2),d=t(4),u=t(3),p=t(11),E=t(5),h=(n.Component,t(21)),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handleChangeupdate=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value)),console.log("Usename",e.target.value)},t.state={email:"",fullname:""},t.SubmitForm=t.SubmitForm.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"SubmitForm",value:function(e){alert(JSON.stringify(this.state)),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{class:"box box-info"},l.a.createElement("div",{class:"box-header with-border"},l.a.createElement("h3",{class:"box-title"},"User Information")),l.a.createElement("form",{class:"form-horizontal",onSubmit:this.SubmitForm},l.a.createElement("div",{class:"box-body"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"inputEmail3",class:"col-sm-2 control-label"},"Email"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"text",class:"form-control",name:"email",value:this.state.email,onChange:this.handleChangeupdate,placeholder:"Email"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"inputPassword3",class:"col-sm-2 control-label"},"Fullname"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"text",name:"fullname",value:this.state.fullname,onChange:this.handleChangeupdate,class:"form-control",id:"inputPassword3",placeholder:"Password"})))),l.a.createElement("div",{class:"box-footer"},l.a.createElement("button",{type:"submit",class:"btn btn-default"},"Cancel"),l.a.createElement("input",{type:"submit",value:"Submit",class:"btn btn-info pull-right"}))))))))}}]),a}(n.Component),b=(n.Component,function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"main-header"},l.a.createElement("a",{href:"index2.html",className:"logo"},l.a.createElement("img",{src:"".concat("/react","/assets/images/group-30.png"),alt:"User Avatar"})),l.a.createElement("nav",{className:"navbar navbar-static-top"},l.a.createElement("a",{href:"#",className:"sidebar-toggle","data-toggle":"push-menu",role:"button"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"))))}}]),a}(n.Component)),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).flip=function(){t.setState({flipped:!t.state.flipped})},t.state={flipped:!1},t.flip=t.flip.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{onMouseEnter:this.flip,onMouseLeave:this.flip,className:"card-container"+(this.state.flipped?" flipped":"")},l.a.createElement(f,null),l.a.createElement(N,null)))))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"front"},l.a.createElement(y,null),l.a.createElement(w,null))}}]),a}(l.a.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"back"},l.a.createElement("div",null,"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised"))}}]),a}(l.a.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{className:"card-image",src:"https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"}),l.a.createElement("h1",{className:"title"},"An example blog post"))}}]),a}(l.a.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-area"},l.a.createElement("div",{className:"blog-post"},l.a.createElement("p",{className:"date"},(new Date).toLocaleDateString()),l.a.createElement("p",{className:"blog-content"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),l.a.createElement("p",{className:"read-more"},"Hover to read more...")))}}]),a}(l.a.Component),x=function(e){return l.a.createElement("div",null,l.a.createElement("div",{class:"col-md-3 col-sm-6 col-xs-12"},l.a.createElement("div",{class:"info-box"},l.a.createElement("span",{class:"info-box-icon bg-green"},e.Count),l.a.createElement("div",{class:"info-box-content"},l.a.createElement("span",{class:"info-box-text"},e.title),l.a.createElement("span",{class:"info-box-text"},e.desc)))))},j=function(e){var a=[{id:1,title:"Atos",desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",count:"102"},{id:2,title:"IBM",desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",count:"103"},{id:3,title:"TCS",desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",count:"104"},{id:3,title:"TCS",desc:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",count:"105"}],t=a.map(function(e,t){return l.a.createElement("div",null,l.a.createElement(x,{id:a[t].id,title:a[t].title,desc:a[t].desc,Count:a[t].count}),"    ")});return l.a.createElement("div",null,t)},O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handlechange=function(){t.setState({showDiv:!t.state.showDiv})},t.state={showDiv:!1},t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-block btn-info",onClick:this.handlechange},"Click me to see profile info"),l.a.createElement("br",null))),this.state.showDiv?l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",null,l.a.createElement("div",{class:"box box-widget widget-user-2"},l.a.createElement("div",{class:"widget-user-header bg-yellow"},l.a.createElement("div",{class:"widget-user-image"},l.a.createElement("img",{class:"img-circle",src:"".concat("/react","/assets/images/user4-128x128.jpg"),alt:"User Avatar"})),l.a.createElement("h3",{class:"widget-user-username"},"Nadia Carmichael"),l.a.createElement("h5",{class:"widget-user-desc"},"Lead Developer")),l.a.createElement("div",{class:"box-footer no-padding"},l.a.createElement("ul",{class:"nav nav-stacked"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Projects ",l.a.createElement("span",{class:"pull-right badge bg-blue"},"31"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tasks ",l.a.createElement("span",{class:"pull-right badge bg-aqua"},"5"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Completed Projects ",l.a.createElement("span",{class:"pull-right badge bg-green"},"12"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Followers ",l.a.createElement("span",{class:"pull-right badge bg-red"},"842")))))))),l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{class:"box box-widget widget-user"},l.a.createElement("div",{class:"widget-user-header bg-black"},l.a.createElement("h3",{class:"widget-user-username"},"Elizabeth Pierce"),l.a.createElement("h5",{class:"widget-user-desc"},"Web Designer")),l.a.createElement("div",{class:"widget-user-image"},l.a.createElement("img",{class:"img-circle",src:"".concat("/react","/assets/images/user4-128x128.jpg"),alt:"User Avatar"})),l.a.createElement("div",{class:"box-footer"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-4 border-right"},l.a.createElement("div",{class:"description-block"},l.a.createElement("h5",{class:"description-header"},"3,200"),l.a.createElement("span",{class:"description-text"},"SALES"))),l.a.createElement("div",{class:"col-sm-4 border-right"},l.a.createElement("div",{class:"description-block"},l.a.createElement("h5",{class:"description-header"},"13,000"),l.a.createElement("span",{class:"description-text"},"FOLLOWERS"))),l.a.createElement("div",{class:"col-sm-4"},l.a.createElement("div",{class:"description-block"},l.a.createElement("h5",{class:"description-header"},"35"),l.a.createElement("span",{class:"description-text"},"PRODUCTS"))))))),l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{class:"box box-widget widget-user-2"},l.a.createElement("div",{class:"widget-user-header bg-yellow"},l.a.createElement("div",{class:"widget-user-image"},l.a.createElement("img",{class:"img-circle",src:"".concat("/react","/assets/images/user3-128x128.jpg"),alt:"User Avatar"})),l.a.createElement("h3",{class:"widget-user-username"},"Nadia Carmichael"),l.a.createElement("h5",{class:"widget-user-desc"},"Lead Developer")),l.a.createElement("div",{class:"box-footer no-padding"},l.a.createElement("ul",{class:"nav nav-stacked"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Projects ",l.a.createElement("span",{class:"pull-right badge bg-blue"},"31"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tasks ",l.a.createElement("span",{class:"pull-right badge bg-aqua"},"5"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Completed Projects ",l.a.createElement("span",{class:"pull-right badge bg-green"},"12"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Followers ",l.a.createElement("span",{class:"pull-right badge bg-red"},"842")))))))):null)}}]),a}(n.Component),k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={user:[{id:"mon",name:"Monika",lastname:"Uke",Designation:"Ui developer",src:"./assets/images/user3-128x128.jpg"},{id:"amr",name:"Amar",lastname:"Patil",Designation:"Ux Designer",src:"./assets/images/user2-160x160.jpg"},{id:"mah",name:"Mahesh",lastname:"Powar",Designation:"Ux/Ui Developer",src:"./assets/images/user1-128x128.jpg"}]},t.removeContact=function(e){t.setState({user:t.state.user.filter(function(a){return a.name!==e.target.id})})},t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"box-header with-border"},l.a.createElement("h1",{className:"box-title"},"User List")),this.state.user.map(function(a){return l.a.createElement("div",{className:"box-footer",key:a.id},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-xs-6"},l.a.createElement("div",{className:"description-block border-right "},l.a.createElement("div",{className:"user-img-block",style:{backgroundImage:"url(".concat(a.src,")")}}))),l.a.createElement("div",{className:"col-sm-4 col-xs-6"},l.a.createElement("div",{className:"description-block "},l.a.createElement("h5",{className:"description-header"},a.name),l.a.createElement("div",{className:"description-text"},a.lastname),l.a.createElement("div",{className:"description-percentage text-green"},a.Designation)),l.a.createElement("button",{style:{width:100},className:"btn btn-block btn-info",id:a.name,onClick:e.removeContact},"Remove"))))}))))),l.a.createElement("section",{class:"content"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("h1",null,"Client"))),l.a.createElement("div",{class:"row"},l.a.createElement(j,null)),l.a.createElement(O,null))))}}]),a}(n.Component),C=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).submit=function(e){e.preventDefault(),console.log("hi");var a=t.state.data,n={Name:t.refs.name.value,LastName:t.refs.lastname.value};a.push(n),t.setState({data:a}),t.refs.Myform.reset(),t.refs.name.focus()},t.remove=function(e){var a=t.state.data;a.splice(e.currentTarget.id,1),t.setState({data:a}),t.refs.Myform.reset(),t.refs.name.focus()},t.edit=function(e){var a=t.state.data;t.refs.lastname.value=a[e.currentTarget.id].LastName,t.refs.name.value=a[e.currentTarget.id].Name,t.refs.name.focus(),t.setState({act:1,index:e,lastnameId:e.currentTarget.id})},t.update=function(e){e.preventDefault();var a=t.state.data,n={Name:t.refs.name.value,LastName:t.refs.lastname.value},l=Array.from(t.state.data);a.push(n),l[t.state.lastnameId]=n,t.setState({data:l,act:0}),t.refs.Myform.reset()},t.state={title:"Hello",act:0,index:"",data:[],lastnameId:""},t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.data;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{class:"box box-info"},l.a.createElement("div",{class:"box-header with-border"},l.a.createElement("h3",{class:"box-title"},"User Information")),l.a.createElement("form",{class:"form-horizontal",ref:"Myform"},l.a.createElement("div",{class:"box-body"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"inputEmail3",class:"col-sm-2 control-label"},"Name"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"text",class:"form-control",name:"Name",ref:"name",placeholder:"Name"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"col-sm-2 control-label"},"Last Name"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"text",name:"Desc",class:"form-control",ref:"lastname",placeholder:"lastname"})))),l.a.createElement("div",{class:"box-footer"},l.a.createElement("input",{style:1===this.state.act?{display:"none"}:{display:"block"},type:"submit",value:"Submit",onClick:this.submit,class:"btn btn-info pull-right"}),l.a.createElement("input",{style:1===this.state.act?{display:"block"}:{display:"none"},id:"updateBtn",type:"submit",value:"Update",onClick:this.update,class:"btn btn-info pull-right"})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("ul",{className:"ul-value"},a.map(function(a,t){return l.a.createElement("li",{id:a.Name,key:t},l.a.createElement("div",{className:"tbl-value"}," ",l.a.createElement("span",null,t+1,". ",a.Name),",",l.a.createElement("span",null,a.LastName)),l.a.createElement("div",{className:"btn-action"},l.a.createElement("input",{id:t,type:"submit",value:"Remove",onClick:e.remove,class:"btn btn-danger pull-right"}),l.a.createElement("input",{id:t,type:"submit",value:"Edit",onClick:e.edit,class:"btn btn-primary pull-right"})))})))))))}}]),a}(n.Component),S=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(u.a)(a).call(this))).state={items:[{desc:"Hi Monika",id:"1",src:"./assets/images/la.jpg"},{desc:"Hi Mahesh",id:"2",src:"./assets/images/chicago.jpg"},{desc:"Hi Sanjay",id:"3",src:"./assets/images/ny.jpg"}]},e}return Object(E.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{id:"myCarousel",class:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{class:"carousel-indicators"},this.state.items.map(function(e,a){return l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":a,class:0==a?"active":""})})),l.a.createElement("div",{class:"carousel-inner"},this.state.items.map(function(e,a){return l.a.createElement("div",{class:0==a?"item active":"item",key:e.id},l.a.createElement("div",{style:{backgroundImage:"url(".concat(e.src,")"),height:"500px",positio:"relative"}},l.a.createElement("h1",{style:{color:"#fff",textAlign:"center",bottom:"50px",position:"absolute",left:"42%"}},e.desc," ")))})),l.a.createElement("a",{class:"left carousel-control",href:"#myCarousel","data-slide":"prev"},l.a.createElement("span",{class:"glyphicon glyphicon-chevron-left"}),l.a.createElement("span",{class:"sr-only"},"Previous")),l.a.createElement("a",{class:"right carousel-control",href:"#myCarousel","data-slide":"next"},l.a.createElement("span",{class:"glyphicon glyphicon-chevron-right"}),l.a.createElement("span",{class:"sr-only"},"Next")))))))}}]),a}(n.Component),D=function(e){return l.a.createElement("div",{className:"Wrapper_dashboard"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"jarvis_title"},e.title))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("div",{className:"jarvis_subtitle"},e.subtitle))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"desctitle"},e.desctitle),l.a.createElement("div",{className:"jarvis_desc"},e.desc)),l.a.createElement("div",{className:"col-md-7"},l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:"".concat("/react","/assets/images/group-2.png")})))))))};var I=function(e){var a=[{title:"Jarvis Interaction Guidelines",subtitle:"Strategic and tactical guidelines for making your Equinix application future-ready",desctitle:"Bring on your Suggestions",desc:"This is a living document. Feel free to get in touch with us with your feedback and we would be happy to incorporate them into the guidelines. We are all in this together in this, after all. "}],t=a.map(function(e,t){return l.a.createElement("div",null,l.a.createElement(D,{title:a[t].title,subtitle:a[t].subtitle,desctitle:a[t].desctitle,desc:a[t].desc}))});return l.a.createElement("div",null,t)};var L=function(e){return l.a.createElement("div",{className:"Sooncontainer"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"main-title"},"Coming Soon"))))))};var T=function(e){var a=[{title:"Jarvis Design Principles",subtitle:"These principles reflect the Jarvis design philosophy and underline how you can apply these (loosely even) to supercharge your user\u2019s productivity. ",desctitle:"Do the hard work for your users",desc:"Prioritization of data, surfacing relevant information and delivering timely  prompts are the bedrock of Jarvis. The priority list is a prime, but not only, example of this. The priority list parses all the tickets and activities that a user might have to go through and provides a concise list of the tasks that the user absolutely needs to address at that particular moment in time. For an IBX tech, this leads to a huge reduction in decision fatigue freeing up a ton of cognitive power to the actual work they have to do. Other examples of this include targetted notifications. Jarvis proposes rich personalized prompts and alerts based on the user\u2019s profile and task history enabling more recognition, less recall leading lower cognitive friction. Another important example is providing contextual information and controls for the user. For example, the right toolbars are context specific. The right toolbar shows a list of tools that are context-specific to the page the user is in. Even within the toolbar, starting a conversation in Teams from a ticket details page, gives users a pre-filled message as.a starting point while providing context to the user at the other end of the conversation. "}],t=a.map(function(e,t){return l.a.createElement("div",null,l.a.createElement(U,{title:a[t].title,subtitle:a[t].subtitle,desctitle:a[t].desctitle,desc:a[t].desc}))});return l.a.createElement("div",null,t)};function U(e){return l.a.createElement("div",{className:"Subcontainer"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("section",{className:"content-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"main-title"},e.title),l.a.createElement("div",{className:"jarvis_para"},e.subtitle),l.a.createElement("div",{className:"sub-title"},e.desctitle),l.a.createElement("div",{className:"jarvis_para"},e.desc))))))}var P=function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(c.a,null,l.a.createElement("aside",{className:"main-sidebar"},l.a.createElement("section",{className:"sidebar"},l.a.createElement("div",{className:"user-panel"},l.a.createElement("div",{className:"pull-left image"})),l.a.createElement("ul",{className:"sidebar-menu","data-widget":"tree"},l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/dashboard"},"Cover")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/designprinciple"},"Jarvis Design principle")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Color pallette")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Content Handling")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"UI Components")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Interactions")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Icons")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Navigation")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Gestures")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Heirarchy")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Tone of voice & Personality")),l.a.createElement("li",{className:"header"},l.a.createElement(c.b,{to:"/comingsoon"},"Jarvis Logo"))))),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/dashboard",component:I}),l.a.createElement(i.a,{path:"/designprinciple",component:T}),l.a.createElement(i.a,{path:"/comingsoon",component:L}),l.a.createElement(i.a,{path:"/userinfo",component:k}),l.a.createElement(i.a,{path:"/form",component:v}),l.a.createElement(i.a,{path:"/Crud",component:C}),l.a.createElement(i.a,{path:"/Carousel",component:S}),l.a.createElement(i.a,{path:"/blogcard",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.e0355b6e.chunk.js.map