(this["webpackJsonpreact-task2"]=this["webpackJsonpreact-task2"]||[]).push([[0],{10:function(t,e,o){t.exports={Modal__backdrop:"Modal_Modal__backdrop__3lfmJ",Modal__content:"Modal_Modal__content__1xDCo"}},12:function(t,e,o){},14:function(t,e,o){t.exports={IconButton:"IconButton_IconButton__95sjW"}},21:function(t,e,o){},31:function(t,e,o){},32:function(t,e,o){},33:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),a=o(8),r=o.n(a),l=(o(21),o(6)),i=o(15),s=o(2),d=o(3),u=o(5),h=o(4),f=o(11),p=o.n(f),b=o(12),j=o.n(b),m=o(0),g=function(t){var e=t.children;return Object(m.jsx)("div",{className:j.a.Container,children:e})},v=o(13),O=o.n(v),x=function(t){var e=t.text,o=t.completed,n=t.onToggleCompleted,c=t.onDelete;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:o,onChange:n}),Object(m.jsx)("p",{className:"TodoList__text",children:e}),Object(m.jsx)("button",{type:"button",className:"TodoList__btn",onClick:c,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},y=(o(31),function(t){var e=t.todos,o=t.onDeleteTodo,n=t.onToggleCompleted;return Object(m.jsx)("ul",{className:"TodoList",children:e.map((function(t){var e=t.id,c=t.text,a=t.completed;return Object(m.jsx)("li",{className:O()("TodoList__item",{"TodoList__item--completed":a}),children:Object(m.jsx)(x,{text:c,completed:a,onToggleCompleted:function(){return n(e)},onDelete:function(){return o(e)}})},e)}))})}),C=(o(32),function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={message:""},t.handleChange=function(e){t.setState({message:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return Object(d.a)(o,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(m.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(m.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),o}(n.Component)),_=C,k=function(t){var e=t.value,o=t.onChange;return Object(m.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(m.jsx)("input",{type:"text",value:e,onChange:o})]})},w=o(10),T=o.n(w),M=document.querySelector("#modal-root"),S=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleKeyDown=function(e){"Escape"===e.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),t.props.onClose())},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(m.jsx)("div",{className:T.a.Modal__backdrop,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:T.a.Modal__content,children:this.props.children})}),M)}}]),o}(n.Component),N=o(16),D=o(14),E=o.n(D),I=["children","onClick"],L=function(t){var e=t.children,o=t.onClick,n=Object(N.a)(t,I);return Object(m.jsx)("button",Object(l.a)(Object(l.a)({type:"button",className:E.a.IconButton,onClick:o},n),{},{children:e}))};L.defaultProps={onClick:function(){return null},children:null};var B,J,P=L,A=["title","titleId"];function F(){return F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},F.apply(this,arguments)}function K(t,e){if(null==t)return{};var o,n,c=function(t,e){if(null==t)return{};var o,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(c[o]=t[o]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(c[o]=t[o])}return c}function U(t,e){var o=t.title,c=t.titleId,a=K(t,A);return n.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},a),o?n.createElement("title",{id:c},o):null,B||(B=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),J||(J=n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var V=n.forwardRef(U),W=(o.p,function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={todos:[],filter:"",showModal:!1},t.addTodo=function(e){var o={id:p.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[o].concat(Object(i.a)(e))}})),t.toggleModal()},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,o=e.filter,n=e.todos,c=o.toLowerCase();return n.filter((function(t){return t.text.toLowerCase().includes(c)}))},t.calculateCompletedTodos=function(){return t.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0)},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todos"));t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(t,e){var o=this.state.todos;o!==e.todos&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 todos, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e todos \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("todos",JSON.stringify(o)))}},{key:"render",value:function(){var t=this.state,e=t.todos,o=t.filter,n=t.showModal,c=e.length,a=this.calculateCompletedTodos(),r=this.getVisibleTodos();return Object(m.jsxs)(g,{children:[Object(m.jsx)(P,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(m.jsx)(V,{width:"40",height:"40",fill:"#fff"})}),n&&Object(m.jsx)(S,{onClose:this.toggleModal,children:Object(m.jsx)(_,{onSubmit:this.addTodo})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",c]}),Object(m.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",a]})]}),Object(m.jsx)(k,{value:o,onChange:this.changeFilter}),Object(m.jsx)(y,{todos:r,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})}}]),o}(n.Component)),z=W;r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8c9d7b1d.chunk.js.map