(this.webpackJsonpaddressbook=this.webpackJsonpaddressbook||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),c=n.n(s),i=(n(13),n(5)),u=n(3),l=n(4),m=n(7),o=n(6),d=(n(14),n(15),function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement("button",{className:"deleteButton",onClick:function(){e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,t)}),p=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(""!==t.text){var n=[].concat(Object(i.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""}})}},a.handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.deleteItem=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.setUpdate=function(e,t){var n=a.state.items;n.map((function(n){n.key===t&&(n.text=e)})),a.setState({items:n})},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Number",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement("p",null,this.state.items.text),r.a.createElement(d,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.661ac925.chunk.js.map