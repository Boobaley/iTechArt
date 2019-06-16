(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){e.exports=n(244)},132:function(e,t,n){},133:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=n.n(o),i=(n(132),n(133),n(20)),u=n(21),c=n(23),s=n(22),d=n(24),m=n(260),p=n(261),h=Object(m.a)(function(){return{button:{marginRight:10,padding:20,fontWeight:700}}});function g(e){var t=h();return r.a.createElement(p.a,Object.assign({variant:"contained",className:t.button},e))}var E={fontSize:50,color:"#e59067",fontWeight:700,margin:"0 auto",width:200,padding:"10px 50px",borderRadius:"20px",border:"2px solid #e0e0e0",textAlign:"center",marginBottom:50,boxShadow:"inset 0px 0px 0px 10px black",backgroundColor:"#3b3a3a"},f={display:"flex",justifyContent:"center"},b={padding:50,backgroundColor:"#883e3e",width:320,margin:"0 auto",borderRadius:70,marginBottom:50},v=function(e){return r.a.createElement("div",{style:b},r.a.createElement("div",{style:E},e.value),r.a.createElement("div",{style:f},r.a.createElement(g,{onClick:e.remove},"DECREMENT"),r.a.createElement(g,{onClick:e.reset},"RESET"),r.a.createElement(g,{onClick:e.add},"INCREMENT")))},y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleAdd=function(){n.props.increment(n.props.id)},n.handleRemove=function(){n.props.decrement(n.props.id)},n.handleReset=function(){n.props.reset(n.props.id)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("Component # ".concat(this.props.id+1," rendered"))}},{key:"shouldComponentUpdate",value:function(e){return this.props.value!==e.value?(console.log("Component # ".concat(this.props.id+1," changed")),!0):(console.log("Component # ".concat(this.props.id+1," not changed")),!1)}},{key:"componentWillUnmount",value:function(){console.log("Component # ".concat(this.props.id+1," unmounted"))}},{key:"render",value:function(){return r.a.createElement(v,{value:this.props.value,add:this.handleAdd,remove:this.handleRemove,reset:this.handleReset})}}]),t}(r.a.Component),w=Object(m.a)(function(e){return{button:{margin:e.spacing(1),width:150},input:{display:"none"}}});function O(e){var t=w();return r.a.createElement(p.a,Object.assign({variant:"contained",color:"primary",className:t.button},e))}var x={backgroundColor:"#afafaf",padding:10,width:"max-content",borderRadius:25},C={margin:"0 auto 50px auto",width:"max-content"},j=function(e){return r.a.createElement("div",{style:C},r.a.createElement("div",{style:x},r.a.createElement(O,{onClick:e.remove},"DELETE TIMER"),r.a.createElement(O,{onClick:e.reset},"RESET"),r.a.createElement(O,{onClick:e.add},"ADD TIMER")))},R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).increment=function(e){var t=n.state.counters.map(function(t){if(e===t.id){var n=t.value+1;return{id:e,value:n}}return t});n.setState({counters:t})},n.decrement=function(e){var t=n.state.counters.map(function(t){var n=t.value;return e===t.id?n>0?{id:e,value:--n}:{id:e,value:n}:t});n.setState({counters:t})},n.resetCounter=function(e){var t=n.state.counters.map(function(t){t.value;return e===t.id?{id:e,value:0}:t});n.setState({counters:t})},n.addCounter=function(){var e=n.state.counters.map(function(e){return e.value%2===0&&0!==e.value?{id:e.id,value:e.value+1}:e}),t=n.state.lastId+1;e.push({id:t,value:0}),n.setState({counters:e,lastId:t})},n.removeCounter=function(){var e=n.state.counters.map(function(e){return e.value%2!==0&&0!==e.value?{id:e.id,value:e.value-1}:e}),t=n.state.lastId;e.length>1&&e.pop(),t>0&&n.setState({counters:e,lastId:t-1})},n.generaReset=function(){var e=n.state.counters;e.splice(1),e[0].value=0,n.setState({counters:e,lastId:0})},n.renderCounters=function(){return n.state.counters.map(function(e){return r.a.createElement(y,{value:e.value,id:e.id,key:e.id,increment:n.increment,decrement:n.decrement,reset:n.resetCounter})})},n.state={counters:[{id:0,value:0}],lastId:0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return t}},{key:"componentDidUpdate",value:function(e,t,n){console.log("This is previous state of App",n)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{add:this.addCounter,remove:this.removeCounter,reset:this.generaReset}),this.renderCounters())}}]),t}(r.a.Component),S=n(122),k=n(262),A=n(266),I=n(263),T={marginBottom:20},W=n(31),D=Object(m.a)({root:{flexGrow:1}});function P(e){var t=D(),n=r.a.useState(e.current),a=Object(S.a)(n,2),o=a[0],l=a[1];return r.a.createElement(k.a,{className:t.root},r.a.createElement(A.a,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){l(t)},centered:!0,style:T},r.a.createElement(I.a,{label:"About Us",component:W.b,to:"/about"}),r.a.createElement(I.a,{label:"Counters",component:W.b,to:"/counters"}),r.a.createElement(I.a,{label:"Log In",component:W.b,to:"/login"}),r.a.createElement(I.a,{label:"Log In With Redux",component:W.b,to:"/login-redux"}),r.a.createElement(I.a,{label:"Log In With Redux Form",component:W.b,to:"/login-redux-form"})))}var U=n(39),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Some text about us...")}}]),t}(a.Component),L={textAlign:"center",fontSize:80,color:"red"},H=function(){return r.a.createElement("div",{style:L},"404 Not Found!")},B={fontSize:70,fontWeight:800,color:"red",marginBottom:10,textAlign:"center"},G={borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,marginRight:20,outline:"none",fontWeight:600,lastOfType:{borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,outline:"none",fontWeight:600,marginRight:0}},M={width:"max-content",margin:"0 auto 30px auto",display:"flex",flexDirection:"column"},V={margin:"20px auto 0 auto",width:200,border:"3px solid red",fontWeight:800,borderRadius:50,color:"black"},q={margin:"0 auto",width:"50vw",border:"3px solid  #3f51b5",borderRadius:20,padding:100},F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:M,onSubmit:e.submit},r.a.createElement("div",{style:B},"LOG IN"),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",style:G,onChange:e.email,value:e.emailOutput,required:!0}),r.a.createElement("input",{type:"password",minLength:"6",placeholder:"Password",style:G&&G.lastOfType,onChange:e.password,value:e.passwordOutput,required:!0})),r.a.createElement(p.a,{type:"submit",variant:"outlined",color:"primary",style:V},"Sign In")),r.a.createElement("div",{style:q},r.a.createElement("div",null,"User Email: ",e.emailOutput),r.a.createElement("hr",null),r.a.createElement("div",null,"User Password: ",e.passwordOutput)))},Y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).onHandleSubmit=function(e){e.preventDefault(),console.log("User Email: ".concat(n.state.email,"  User Password: ").concat(n.state.password)),n.setState({email:"",password:""}),alert(JSON.stringify(n.state))},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.state={email:"",password:""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(F,{email:this.onEmailChange,emailOutput:this.state.email,password:this.onPasswordChange,passwordOutput:this.state.password,submit:this.onHandleSubmit})}}]),t}(a.Component),z=n(16),_=Object(z.b)(function(e){return{inputs:e.inputs}})(function(e){var t=e.inputs;return r.a.createElement("div",null,r.a.createElement("h1",null,"Your Entire Data:"),r.a.createElement("div",null,"Your Email: ",t.email),r.a.createElement("div",null,"Your Password: ",t.password))}),J={fontSize:70,fontWeight:800,color:"red",marginBottom:10,textAlign:"center"},X={borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,marginRight:20,outline:"none",fontWeight:600,lastOfType:{borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,outline:"none",fontWeight:600,marginRight:0}},K={width:"max-content",margin:"0 auto 30px auto",display:"flex",flexDirection:"column",alignItems:"center"},Q={margin:"20px auto 0 auto",width:200,border:"3px solid red",fontWeight:800,borderRadius:50,color:"black"},Z={margin:"0 auto",width:"50vw",border:"3px solid  #3f51b5",borderRadius:20,padding:100},$=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:K,onSubmit:e.onSubmit},r.a.createElement("div",{style:J},"LOG IN WITH REDUX"),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",style:X,onChange:e.emailInputChange,required:!0}),r.a.createElement("input",{type:"password",minLength:"6",placeholder:"Password",style:X&&X.lastOfType,onChange:e.passwordInputChange,required:!0})),r.a.createElement(p.a,{type:"submit",variant:"outlined",color:"primary",style:Q},"Sign In")),r.a.createElement("div",{style:Z},r.a.createElement("div",null,"User Email: ",e.emailOutput),r.a.createElement("hr",null),r.a.createElement("div",null,"User Password: ",e.passwordOutput)))},ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleEmailChange=function(e){(0,n.props.changeEmail)(e.target.value)},n.handlePasswordChange=function(e){(0,n.props.changePassword)(e.target.value)},n.onHandleSubmit=function(e){e.preventDefault(),n.props.history.replace("/login-redux/success")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.inputs;return r.a.createElement($,{emailInputChange:this.handleEmailChange,passwordInputChange:this.handlePasswordChange,emailOutput:e.email,passwordOutput:e.password,onSubmit:this.onHandleSubmit})}}]),t}(a.Component),te=Object(U.f)(Object(z.b)(function(e){return{inputs:e.inputs}},{changeEmail:function(e){return{type:"CHANGE_EMAIL",text:e}},changePassword:function(e){return{type:"CHANGE_PASSWORD",text:e}}})(ee)),ne={fontSize:70,fontWeight:800,color:"red",marginBottom:10,textAlign:"center"},ae={borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,marginRight:20,outline:"none",fontWeight:600,lastOfType:{borderRadius:20,border:"3px solid #a0a0a0",backgroundColor:"white",padding:20,outline:"none",fontWeight:600,marginRight:0}},re={width:"max-content",margin:"0 auto 30px auto",display:"flex",flexDirection:"column",alignItems:"center"},oe={margin:"20px auto 0 auto",width:200,border:"3px solid red",fontWeight:800,borderRadius:50,color:"black"},le={margin:"0 auto",width:"50vw",border:"3px solid  #3f51b5",borderRadius:20,padding:100},ie=n(265),ue=n(264),ce=n(268),se=function(e){var t=e.handleSubmit,n=e.emailValue,a=e.passwordValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{style:re,onSubmit:t},r.a.createElement("div",{style:ne},"LOG IN WITH REDUX FORM"),r.a.createElement("div",null,r.a.createElement(ie.a,{name:"email",component:"input",type:"email",placeholder:"Email",style:ae,required:!0}),r.a.createElement(ie.a,{name:"password",component:"input",type:"password",minLength:"6",placeholder:"Password",style:ae&&ae.lastOfType,required:!0})),r.a.createElement(p.a,{type:"submit",variant:"outlined",color:"primary",style:oe},"Sign In")),r.a.createElement("div",{style:le},r.a.createElement("div",null,"User Email: ",n),r.a.createElement("hr",null),r.a.createElement("div",null,"User Password: ",a)))};se=Object(ue.a)({form:"login",destroyOnUnmount:!1})(se);var de,me=Object(ce.a)("login"),pe=se=Object(z.b)(function(e){return{emailValue:me(e,"email"),passwordValue:me(e,"password")}})(se),he=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){return n.props.history.replace("/login-redux-form/success"),e},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(pe,{onSubmit:this.submit})}}]),t}(a.Component),ge=Object(U.f)(he),Ee=function(e){var t=e.emailValue,n=e.passwordValue;return r.a.createElement("div",null,r.a.createElement("h1",null,"Your Entire Data:"),r.a.createElement("div",null,"Your Email: ",t),r.a.createElement("div",null,"Your Password: ",n))},fe=Object(ce.a)("login"),be=Ee=Object(z.b)(function(e){return{emailValue:fe(e,"email"),passwordValue:fe(e,"password")}})(Ee),ve=function(){return r.a.createElement(W.a,{basename:"/iTechArt"},r.a.createElement("div",null,r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/iTechArt/",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:null}))}}),r.a.createElement(U.a,{path:"/iTechArt/about",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:0}),r.a.createElement(N,null))}}),r.a.createElement(U.a,{path:"/iTechArt/counters",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:1}),r.a.createElement(R,null))}}),r.a.createElement(U.a,{path:"/iTechArt/login",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:2}),r.a.createElement(Y,null))}}),r.a.createElement(U.a,{exact:!0,path:"/iTechArt/login-redux",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:3}),r.a.createElement(te,null))}}),r.a.createElement(U.a,{path:"/iTechArt/login-redux/success",render:function(){return r.a.createElement("div",null,r.a.createElement(_,null))}}),r.a.createElement(U.a,{exact:!0,path:"/iTechArt/login-redux-form",render:function(){return r.a.createElement("div",null,r.a.createElement(P,{current:4}),r.a.createElement(ge,null))}}),r.a.createElement(U.a,{path:"/iTechArt/login-redux-form/success",render:function(){return r.a.createElement("div",null,r.a.createElement(be,null))}}),r.a.createElement(U.a,{path:"/iTechArt*",render:function(){return r.a.createElement(H,null)}}))))},ye=function(){return r.a.createElement(ve,null)},we=n(8),Oe={email:"",password:""},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.text;switch(t.type){case"CHANGE_EMAIL":return Object.assign({},e,{email:n});case"CHANGE_PASSWORD":return Object.assign({},e,{password:n});default:return e}},Ce=n(267),je=Object(we.b)({inputs:xe,form:Ce.a}),Re=we.c,Se=(de={},Object(we.d)(je,de,Re()));l.a.render(r.a.createElement(z.a,{store:Se},r.a.createElement(ye,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.8db0110a.chunk.js.map