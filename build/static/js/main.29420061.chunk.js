(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(36)},33:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(12),c=t(5),u=(t(33),t(23)),i=t(9),o=(t(34),t(20)),l=t(11),s="NEW_GAME",f="TAKE_TURN",p="GAME_WON",b="GAME_OVER",w="SWITCH_PLAYER",v="NEXT_TURN_REQUEST",h="NEXT_TURN_SUCCESS",m="NEXT_TURN_FAILURE",O={board:[["","",""],["","",""],["","",""]],current:"O",player:"O",winner:null,winningCells:[]};var d=t(17),y=t.n(d),E=t(21);function j(e,n){return{type:f,row:e,col:n}}function g(e,n){return{type:p,winner:e,winningCells:n}}function C(e,n){return function(){var a=Object(E.a)(y.a.mark(function a(c){var u;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:v}),u="http://127.0.0.1:8000/move/"+e,n&&(u+="/"+n+"/"),a.abrupt("return",fetch(u).then(function(e){return e.json()}).then(function(e){return c(t(e)),c(j(e.hints[0],e.hints[1])),e}).catch(function(e){return c(r(e))}));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();function t(e){return{type:h,data:e}}function r(e){return{type:m,error:e}}}var N=[function(e){return function(n){return function(t){if(t.type===f){var r=e.getState(),a=r.board;if(null!==r.winner)return;if(""!==a[t.row][t.col])return}return n(t)}}},function(e){return function(n){return function(t){var r=n(t);if(t.type===f){var a=e.getState(),c=a.board;if(null===a.winner){for(var u=0;u<3;u++)for(var i=0;i<3;i++)if((t.row!==u||t.col!==i)&&""===c[u][i])return null;return e.dispatch({type:b})}}return r}}},function(e){return function(n){return function(t){if(t.type===f){var r=e.getState(),a=r.board,c=r.current,u=function(e,n,t,r){for(var a=[[e,n]],c=0;c<3;c++)if(c!==n){if(""===t[e][c]||t[e][c]!==r)return[];a.push([e,c])}return a}(t.row,t.col,a,c);u.length&&e.dispatch(g(c,u)),(u=function(e,n,t,r){for(var a=[[e,n]],c=0;c<3;c++)if(c!==e){if(""===t[c][n]||t[c][n]!==r)return[];a.push([c,n])}return a}(t.row,t.col,a,c)).length&&e.dispatch(g(c,u)),(u=function(e,n,t,r){return(0===e&&0===n||t[0][0]===r)&&(1===e&&1===n||t[1][1]===r)&&(2===e&&2===n||t[2][2]===r)?[[0,0],[1,1],[2,2]]:(2===e&&0===n||t[2][0]===r)&&(1===e&&1===n||t[1][1]===r)&&(0===e&&2===n||t[0][2]===r)?[[2,0],[1,1],[0,2]]:[]}(t.row,t.col,a,c)).length&&e.dispatch(g(c,u))}return n(t)}}},function(e){return function(n){return function(t){var r=n(t);if(t.type===s||t.type===w){var a=e.getState(),c=a.current;if(c!==a.player)return e.dispatch(C(c))}else if(t.type===f){var u=e.getState(),i=u.board,o=u.current,l=u.player,p=u.winner;if(o!==l&&null===p){for(var b="",v=0;v<3;v++)for(var h=0;h<3;h++)""===i[v][h]?b+=".":b+=i[v][h];return e.dispatch(C(o,b))}}return r}}},o.a];var T=Object(i.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return Object(l.a)({},e,{board:[["","",""],["","",""],["","",""]],current:"O",winner:null,winningCells:[]});case f:var t=e.board.slice(0);return t[n.row][n.col]=e.current,Object(l.a)({},e,{board:t,current:"O"===e.current?"X":"O"});case p:return Object(l.a)({},e,{winner:n.winner,winningCells:n.winningCells});case b:return Object(l.a)({},e,{winner:""});case w:return{board:[["","",""],["","",""],["","",""]],current:"O",player:"O"===e.player?"X":"O",winner:null,winningCells:[]};default:return e}},i.a.apply(void 0,Object(u.a)(N))),k=t(2),_=t(3),S=t(6),R=t(4),U=t(7),A=t(10),G=t(22),X=t.n(G),I=function(e){function n(){return Object(k.a)(this,n),Object(S.a)(this,Object(R.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e,n=this.props,t=n.value,a=n.takeTurn,c=n.row,u=n.col,i=n.winner,o=n.winningCells,l=(e={cell:!0},Object(A.a)(e,t,!0),Object(A.a)(e,"loss",""===i),e);return o.forEach(function(e){e[0]===c&&e[1]===u&&(l.win=!0)}),r.createElement("div",{className:X()(l),onClick:function(){return a(c,u)}},t)}}]),n}(r.Component);var M=Object(c.b)(function(e){return{winner:e.winner,winningCells:e.winningCells}},function(e){return{takeTurn:function(n,t){return e(j(n,t))}}})(I),P=function(e){function n(){return Object(k.a)(this,n),Object(S.a)(this,Object(R.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this.props.board;return r.createElement("div",{className:"board"},e.map(function(e,n){return e.map(function(e,t){return r.createElement(M,{key:n+"_"+t,value:e,row:n,col:t})})}))}}]),n}(r.Component);var W=Object(c.b)(function(e){return{board:e.board}})(P),Y=function(e){function n(){return Object(k.a)(this,n),Object(S.a)(this,Object(R.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e,n=this.props,t=n.current,a=n.player,c=n.winner,u=n.newGame,i=n.switchPlayer;if(null===c)e=r.createElement("p",null,"You are ",r.createElement("strong",{className:a},a),", it is ",r.createElement("strong",{className:t},t),"'s turn");else if(""===c)e=r.createElement("p",null,"Game Over, nobody won!");else{var o=c===a?"win":"lost";e=r.createElement("p",null,r.createElement("strong",{className:c},"You ",o,"!"))}return r.createElement("div",{className:"footer"},r.createElement("div",{className:"left"},e),r.createElement("div",{className:"right"},r.createElement("p",null,r.createElement("span",{onClick:i},"Switch")," / ",r.createElement("span",{onClick:u},"Reset"))))}}]),n}(r.Component);var x=Object(c.b)(function(e){return{current:e.current,player:e.player,winner:e.winner}},function(e){return{newGame:function(){return e({type:s})},switchPlayer:function(){return e({type:w})}}})(Y),J=function(e){function n(){return Object(k.a)(this,n),Object(S.a)(this,Object(R.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){return r.createElement("div",{className:"game"},r.createElement("h1",null,"Tic Tac Toe"),r.createElement(W,null),r.createElement(x,null))}}]),n}(r.Component);a.render(r.createElement(c.a,{store:T},r.createElement(J,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.29420061.chunk.js.map