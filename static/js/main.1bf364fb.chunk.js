(this["webpackJsonpstarwars-app"]=this["webpackJsonpstarwars-app"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(4),r=a.n(s),n=a(21),c=a.n(n),i=(a(26),a(5)),h=a(6),o=a(8),p=a(7),l=(a(27),a(3)),d=a(12),b=a.n(d),j=a(0),u=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.id,name:e.props.name,birthdate:e.props.birthdate,height:e.props.height,gender:e.props.gender,mass:e.props.mass,skincolor:e.props.skincolor,species:e.props.species,vehicles:e.props.vehicles,spaceships:e.props.spaceships},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"DataTable",children:Object(j.jsx)("table",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/45e93e0b19145f92b74b0b5a74c8057b9a1d127c/height.png",alt:"height img",height:20,width:20})}),Object(j.jsxs)("th",{children:[this.state.height," cm"]}),Object(j.jsx)("th",{children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/45e93e0b19145f92b74b0b5a74c8057b9a1d127c/weight.png",alt:"mass img",height:20,width:20})}),Object(j.jsxs)("th",{children:[this.state.mass," kg "]}),Object(j.jsx)("th",{children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/45e93e0b19145f92b74b0b5a74c8057b9a1d127c/birthyear.png",alt:"birth year img",height:20,width:20})}),Object(j.jsx)("th",{children:this.state.birthdate}),Object(j.jsx)("th",{children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/45e93e0b19145f92b74b0b5a74c8057b9a1d127c/gender.png",alt:"gender img",height:20,width:20})}),Object(j.jsx)("th",{children:this.state.gender})]})})},this.state.id)}}]),a}(r.a.Component),g=u,m=a(2),O=a.n(m),f=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:"",dataArray:[],searchResultArray:[],links:[0,1,2,3,4,5,6,7,8],searchArray:[],searchIndex:-1},e.componentDidMount=function(){e.loadDataFromApi()},e.loadDataFromApi=function(){var t=O.a.get("https://swapi.dev/api/people/?page=1&format=json"),a=O.a.get("https://swapi.dev/api/people/?page=2&format=json"),s=O.a.get("https://swapi.dev/api/people/?page=3&format=json"),r=O.a.get("https://swapi.dev/api/people/?page=4&format=json"),n=O.a.get("https://swapi.dev/api/people/?page=5&format=json"),c=O.a.get("https://swapi.dev/api/people/?page=6&format=json"),i=O.a.get("https://swapi.dev/api/people/?page=7&format=json"),h=O.a.get("https://swapi.dev/api/people/?page=8&format=json"),o=O.a.get("https://swapi.dev/api/people/?page=9&format=json");O.a.all([t,a,s,r,n,c,i,h,o]).then(O.a.spread((function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];a[0].data.results,a[1].data.results,a[2].data,a[3].data,a[4].data,a[5].data,a[6].data,a[7].data,a[8].data;e.setState({dataArray:a})}))).catch((function(e){console.log(e)}))},e.createNameList=function(){},e.searchEventHandler=function(t){e.setState({searchTerm:t.target.value}),e.searchCharacterinDatabase()},e.searchCharacterinDatabase=function(){var t=e.state.dataArray.map((function(e){return e.data.results.map((function(e){return e.name.toUpperCase()}))})),a=e.state.dataArray.map((function(e){return e.data.results.map((function(e){return[{name:e.name.toUpperCase(),height:e.height,mass:e.mass,birthdate:e.birth_year,gender:e.gender}]}))})),s=t[0],r=a[0],n=a[1],c=t[1],i=t[2],h=t[3],o=t[4],p=t[5],d=t[6],b=t[7],j=t[8],u=[].concat(Object(l.a)(s),Object(l.a)(c),Object(l.a)(i),Object(l.a)(h),Object(l.a)(o),Object(l.a)(p),Object(l.a)(d),Object(l.a)(b),Object(l.a)(j)),g=[].concat(Object(l.a)(r),Object(l.a)(n));console.log(g);var m=u.filter((function(t){return t.includes(e.state.searchTerm.toUpperCase())})),O=u.findIndex((function(t){return t.includes(e.state.searchTerm.toUpperCase())}));e.setState({searchResultArray:m}),e.setState({searchIndex:O}),console.log("metaDataResults",O)},e.renderFunction=function(){return 0===e.state.dataArray.length?Object(j.jsx)("p",{className:"LoadText",children:"Data not loaded..."}):e.state.dataArray.map((function(e){return e.data.results.map((function(e){return Object(j.jsx)("div",{className:"collapsible",children:Object(j.jsx)(b.a,{trigger:e.name.toLocaleLowerCase(),children:Object(j.jsx)(g,{height:e.height,mass:e.mass,birthdate:e.birth_year,gender:e.gender})})})}))}))},e.renderSearchResults=function(){return 0===e.state.searchResultArray.length?null:e.state.searchResultArray.map((function(e){return Object(j.jsx)("div",{className:"collapsible",children:Object(j.jsx)(b.a,{trigger:e.toLocaleLowerCase()})})}))},e.decisionFunction=function(){return 0!==e.state.dataArray.length&&e.state.searchTerm.length<1?e.renderFunction():e.renderSearchResults()},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"top-banner",children:Object(j.jsx)("button",{className:"navigation",children:"Star Wars Character Database"})}),")",Object(j.jsx)("div",{className:"deathstar floating",children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/main/deathstar.png",alt:"death star img",height:"500vh"})}),Object(j.jsx)("div",{className:"bb8",children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/xam1995/swapp/main/bb8.png",alt:"bb8 img",height:"380vh"})}),Object(j.jsx)("div",{className:"glow",children:Object(j.jsxs)("div",{className:"sideBar",children:[Object(j.jsxs)("div",{className:"searchArea",children:[Object(j.jsx)("input",{className:"searchField",placeholder:"Luke Bywalker",onChange:this.searchEventHandler},"searchField"),Object(j.jsx)("button",{className:"searchButton",onClick:this.searc,children:"\ud83d\udd0d"})]}),this.decisionFunction()]})})]})}}]),a}(r.a.Component),x=f,v=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})}}]),a}(s.Component),w=v,y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};c.a.render(Object(j.jsx)(w,{}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.1bf364fb.chunk.js.map