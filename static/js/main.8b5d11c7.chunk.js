(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(3),o=e.n(c),u=e(4),r=e(5),a=e(7),s=e(6),i=e(1),b=e.n(i),d=(e(12),e(0)),l=function(t){Object(a.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(u.a)(this,e);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=n.call.apply(n,[this].concat(o))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t.resetCounter=function(){t.setState({count:0})},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{children:["Count:"," ",this.state.count]}),Object(d.jsx)("button",{className:"button",type:"button",onClick:this.addOne,children:"+1"})," ",Object(d.jsx)("button",{className:"button",type:"button",onClick:this.add100,children:"+100"})," ",Object(d.jsx)("button",{className:"button",type:"button",onClick:this.increase,children:"Strange button"})," ",Object(d.jsx)("button",{className:"button button--resetButton",type:"button",onClick:function(){t.resetCounter()},children:"Reset counter"})]})}}]),e}(b.a.Component),h=l;o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8b5d11c7.chunk.js.map