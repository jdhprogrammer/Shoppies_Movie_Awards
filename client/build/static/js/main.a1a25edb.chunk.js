(this["webpackJsonpgoogle-book-search"]=this["webpackJsonpgoogle-book-search"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(25),r=a.n(o),c=a(15),s=a(8);function i({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function m({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":""," justify-content-around")},t)}function u({size:e,children:t,order:a}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")+a},t)}var d=a(10),E=a(66),b=a(6);const h=Object(n.createContext)(),g=h.Provider,k=(e,t)=>{switch(t.type){case"SET_CURRENT_BOOK":return Object(b.a)(Object(b.a)({},e),{},{currentBook:t.book,loading:!1});case"UPDATE_BOOKS":return Object(b.a)(Object(b.a)({},e),{},{savedBooks:[...t.savedBooks],loading:!1});case"UPDATE_SEARCH_BOOKS":return Object(b.a)(Object(b.a)({},e),{},{books:[...t.books],loading:!1});case"ADD_BOOK":return Object(b.a)(Object(b.a)({},e),{},{books:[t.book,...e.books],loading:!1});case"REMOVE_BOOK":return Object(b.a)(Object(b.a)({},e),{},{savedBooks:e.savedBooks.filter(e=>e._id!==t._id)});case"ADD_FAVORITE":return Object(b.a)(Object(b.a)({},e),{},{favorites:[t.book,...e.favorites],loading:!1});case"UPDATE_FAVORITES":return Object(b.a)(Object(b.a)({},e),{},{favorites:[...e.favorites],loading:!1});case"REMOVE_FAVORITE":return Object(b.a)(Object(b.a)({},e),{},{favorites:e.favorites.filter(e=>e.id!==t.id)});case"LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:!0});default:return e}},p=e=>{e.value;let t=Object(E.a)(e,["value"]);const a=Object(n.useReducer)(k,{books:[],savedBooks:[],currentBook:{_id:0,id:0,title:"",author:"",description:"",image:"",link:""},favorites:[],loading:!1}),o=Object(d.a)(a,2),r=o[0],c=o[1];return l.a.createElement(g,Object.assign({value:[r,c]},t))},v=()=>Object(n.useContext)(h);var O=a(29),f=a(26),y=a(32),j=a(46),B=a(28),x=a.n(B);const N="&printType=books&maxResults=10";Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GOOGLE_BOOK_SEARCH_API_KEY;var _=function(){return x.a.get("/api/books")},w=function(e){return x.a.delete("/api/books/"+e)},S=function(e){return console.log(e),x.a.post("/api/books",e)},T=function(e){return console.log('searching by title "'.concat(e,'"')),x.a.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+e+N)},A=function(e){return console.log('searching by author "'.concat(e,'"')),x.a.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:"+e+N)},R=function(e){return console.log('searching by subject "'.concat(e,'"')),x.a.get("https://www.googleapis.com/books/v1/volumes?q=insubject:"+e+N)},C=a(61),D=a.n(C);var F=function(){const e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),o=v(),r=Object(d.a)(o,2),c=(r[0],r[1]),s=e=>{let t=e.data.items;console.log(t),t.forEach(e=>{let t=e.volumeInfo;if(t.authors&&t.title&&t.description&&t.imageLinks&&t.imageLinks.smallThumbnail&&t.description&&t.infoLink){let a={title:t.title,author:t.authors[0],description:t.description,image:t.imageLinks.smallThumbnail,link:t.infoLink,id:e.id};c({type:"ADD_BOOK",book:a})}})},i=n=>{switch(n.preventDefault(),c({type:"LOADING"}),c({type:"UPDATE_SEARCH_BOOKS",books:[]}),n.target.name){case"title":T(e.current.value.toLowerCase().trim()).then(s).catch(e=>console.log(e));break;case"author":A(t.current.value.toLowerCase().trim()).then(s).catch(e=>console.log(e));break;case"subject":R(a.current.value.toLowerCase().trim()).then(s).catch(e=>console.log(e))}e.current.value="",a.current.value="",t.current.value=""};return l.a.createElement("div",{id:"searchBooks",className:"text-center"},l.a.createElement("h3",{className:""},"Search Google Books"),l.a.createElement(j.a,{name:"title",onSubmit:i},l.a.createElement(O.a,{className:"mb-3 shadow"},l.a.createElement(y.a,{placeholder:"Search By Title...","aria-label":"Search By Title...","aria-describedby":"basic-addon2",ref:e}),l.a.createElement(O.a.Append,null,l.a.createElement(f.a,{type:"submit",variant:"primary"},"Search")))),l.a.createElement(j.a,{onSubmit:i,name:"author"},l.a.createElement(O.a,{className:"mb-3 shadow"},l.a.createElement(y.a,{placeholder:"Search by Author...","aria-label":"Search by Author...","aria-describedby":"basic-addon2",ref:t}),l.a.createElement(O.a.Append,null,l.a.createElement(f.a,{type:"submit",variant:"info"},"Search")))),l.a.createElement(j.a,{onSubmit:i,name:"subject"},l.a.createElement(O.a,{className:"mb-3 shadow"},l.a.createElement(y.a,{placeholder:"Search By Subject...","aria-label":"Search By Subject...","aria-describedby":"basic-addon2",ref:a}),l.a.createElement(O.a.Append,null,l.a.createElement(f.a,{type:"submit",variant:"success"},"Search")))),l.a.createElement("div",{className:"jumbotron shadow",style:{padding:"10px"}},l.a.createElement("img",{className:"img-fluid img-thumbnail",src:D.a,style:{width:"435px"}})))};a(93);function I({children:e}){return l.a.createElement("div",{className:"list-overflow-container shadow"},l.a.createElement("ul",{className:"list-group"},e))}function L({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}a(94);var V=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},K=a(17),H=a(103),G=a(62),P=a(104);var U=function(e){const t=v(),a=Object(d.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(()=>{let t=o.books.filter(t=>t.id===e.book.id);r({type:"SET_CURRENT_BOOK",book:t[0]})},[e.show]),l.a.createElement(K.a,{show:e.show,onHide:e.onHide,"aria-labelledby":"contained-modal-title-vcenter"},l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:6,md:6},l.a.createElement("strong",null,e.book.title)),l.a.createElement(G.a,{xs:6,md:6},o.savedBooks.filter(e=>e.id===o.currentBook.id).length?l.a.createElement("p",{className:"btn btn-info",style:{width:"200px"}},l.a.createElement("span",null,"\ud83d\udcda ")," ",l.a.createElement("span",null,"Already Saved...")):l.a.createElement(f.a,{className:"btn btn-info",style:{width:"200px"},onClick:()=>{S(o.currentBook).then(e=>{r({type:"ADD_FAVORITE",book:o.currentBook})}).catch(e=>console.log(e))}},l.a.createElement("span",null,"\u2764\ufe0f")," ",l.a.createElement("span",null,"Favorite")))))),l.a.createElement(K.a.Body,{className:"show-grid"},l.a.createElement(P.a,null,l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:6,md:6},l.a.createElement("img",{src:e.book.image,alt:e.book.title})),l.a.createElement(G.a,{xs:6,md:6},l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},"Author: ",e.book.author)),l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},l.a.createElement("a",{target:"_blank",href:e.book.link},"See Full Book ",l.a.createElement("br",null)," on Google"))))),l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},e.book.description)))),l.a.createElement(K.a.Footer,null,l.a.createElement(f.a,{onClick:e.onHide},"Close")))};var z=function(){const e=v(),t=Object(d.a)(e,2),a=t[0],o=(t[1],Object(n.useState)({})),r=Object(d.a)(o,2),c=r[0],s=r[1];return Object(n.useEffect)(()=>{},[]),l.a.createElement("div",{id:"searchResults",className:"mb-3 text-center"},l.a.createElement("h3",null,"Google Book Results"),a.books.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null,a.books.slice().reverse().map((e,t)=>l.a.createElement(L,{key:e.id},l.a.createElement("img",{src:e.image,alt:e.title,style:{height:"50px"}}),l.a.createElement("strong",null,e.title.length<25?e.title:e.title.substring(0,20)+"...",e.author.length<20?" by ".concat(e.author):"..."),l.a.createElement(f.a,{className:"float-right",variant:"primary",onClick:()=>s(Object(b.a)(Object(b.a)({},c),{},{[t]:!0}))},"View Details"),l.a.createElement(U,{key:e.id,book:e,show:c[t],onHide:()=>s(Object(b.a)(Object(b.a)({},c),{},{[t]:!1}))}))))):l.a.createElement("div",{className:"mt-4 mb-4 p-3 shadow",style:{border:"solid 1px lightgray","border-radius":"5px 5px 5px 5px","background-color":"rgb(255,255,255,0.4)"}},l.a.createElement("h4",{className:"mt-2"},"no results yet...")))};var M=function(e){const t=v(),a=Object(d.a)(t,2),o=a[0];return a[1],Object(n.useEffect)(()=>{},[e.show]),l.a.createElement(K.a,{show:e.show,onHide:e.onHide,"aria-labelledby":"contained-modal-title-vcenter"},l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:6,md:6},l.a.createElement("strong",null,e.book.title)),l.a.createElement(G.a,{xs:6,md:6},l.a.createElement(f.a,{className:"btn btn-warning",style:{width:"200px"},onClick:()=>e.remove(o.currentBook._id)},"Delete Book"))))),l.a.createElement(K.a.Body,{className:"show-grid"},l.a.createElement(P.a,null,l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:6,md:6},l.a.createElement("img",{src:e.book.image,alt:e.book.title})),l.a.createElement(G.a,{xs:6,md:6},l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},"Author: ",e.book.author)),l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},l.a.createElement("a",{target:"_blank",href:e.book.link},"See Full Book ",l.a.createElement("br",null)," on Google"))))),l.a.createElement(H.a,null,l.a.createElement(G.a,{xs:11,md:11},e.book.description)))),l.a.createElement(K.a.Footer,null,l.a.createElement(f.a,{onClick:e.onHide},"Close")))};a(95);var W=function(){const e=v(),t=Object(d.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)({}),c=Object(d.a)(r,2),s=c[0],i=c[1],m=e=>{w(e).then(()=>{o({type:"REMOVE_BOOK",_id:e})}).catch(e=>console.log(e)),o({type:"REMOVE_FAVORITE",id:a.currentBook.id})};return Object(n.useEffect)(()=>{o({type:"LOADING"}),_().then(e=>{console.log("getting books"),o({type:"UPDATE_BOOKS",savedBooks:e.data})}).catch(e=>console.log(e))},[a.favorites]),l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{id:"savedBooks"},"Your Saved Books"),a.savedBooks.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{className:"shadow"},a.savedBooks.slice().reverse().map((e,t)=>l.a.createElement(L,{key:e._id},l.a.createElement("img",{className:"float-left",src:e.image,alt:e.title,style:{height:"50px"}}),l.a.createElement("strong",null,e.title.length<25?e.title:e.title.substring(0,20)+"...",e.author.length<20?" by ".concat(e.author):"..."),l.a.createElement(f.a,{className:"float-right",variant:"info",onClick:()=>{i(Object(b.a)(Object(b.a)({},s),{},{[t]:!0})),(e=>{let t=a.savedBooks.filter(t=>t._id===e);o({type:"SET_CURRENT_BOOK",book:t[0]})})(e._id)}},"View Details"),l.a.createElement(M,{key:e._id,book:e,show:s[t],onHide:()=>i(Object(b.a)(Object(b.a)({},s),{},{[t]:!1})),remove:m,dialogClassName:"modal-90w"}))))):l.a.createElement("h4",{className:"mt-5"},"no results yet..."))};var Y=()=>l.a.createElement(i,{fluid:!0},l.a.createElement(m,null,l.a.createElement(u,{size:"xl-4 lg-4 md-6 sm-9 xs-12",order:" order-3 order-sm-3 order-md-3 order-lg-1"},l.a.createElement(W,null)),l.a.createElement(u,{size:"xl-4 lg-4 md-6 sm-9 xs-12",order:" order-2 order-sm-2 order-md-2 order-lg-2"},l.a.createElement(F,null)),l.a.createElement(u,{size:"xl-4 lg-4 md-7 sm-9 xs-12",order:" order-1 order-sm-1 order-md-1 order-lg-3"},l.a.createElement(z,null)))),q=a(105);var J=()=>{const e=v(),t=Object(d.a)(e,2),a=t[0],o=t[1],r=Object(s.f)().id;Object(n.useEffect)(()=>{let e=a.books.filter(e=>e.id===r);o({type:"SET_CURRENT_BOOK",book:e[0]})},[]);return l.a.createElement(l.a.Fragment,null,a.currentBook?(console.log("currentbook = "+a.currentBook),l.a.createElement(P.a,null,l.a.createElement(H.a,null,l.a.createElement(G.a,{size:"md-10",style:{paddingTop:"10px"}},l.a.createElement(q.a,{className:"mx-auto",style:{width:"18rem"}},l.a.createElement(q.a.Img,{alt:a.currentBook.title,src:a.currentBook.image}),l.a.createElement(q.a.Body,null,l.a.createElement(q.a.Title,null,a.currentBook.title,"by",a.currentBook.author),l.a.createElement(q.a.Text,null,"Content:",l.a.createElement("p",null,a.currentBook.description)),l.a.createElement(c.b,{to:"/"},l.a.createElement(f.a,{variant:"primary"},"\u2190 Back to Directory"))))),-1!==a.favorites.indexOf(a.currentBook)?l.a.createElement(f.a,{className:"btn btn-danger",onClick:()=>{o({type:"REMOVE_FAVORITE",id:a.currentBook.id})}},"Remove from Favorites!"):l.a.createElement(f.a,{className:"btn",onClick:()=>{o({type:"ADD_FAVORITE",book:a.currentBook})}},"\u2764\ufe0f Add to Favorites")),l.a.createElement(G.a,{size:"md-2"},l.a.createElement(c.b,{to:"/"},"\u2190 Back to Books")))):l.a.createElement("div",null,"loading..."))};var Q=function({children:e}){return l.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron border border-success"},e)};var X=()=>l.a.createElement(i,{fluid:!0},l.a.createElement(m,null,l.a.createElement(u,{size:"md-12"},l.a.createElement(Q,null,l.a.createElement("h3",null,"404 Page Not Found"),l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))),Z=(a(99),a(65)),$=a.n(Z),ee=a(49),te=a(37),ae=a(36);var ne=function(){const e=v();return Object(d.a)(e,1)[0],l.a.createElement("div",{className:"mb-0"},l.a.createElement(ee.a,{className:"mb-0",style:{padding:"90px",position:"relative",zIndex:"1",backgroundImage:"url(".concat($.a,")"),backgroundSize:"400px 180px"}}),l.a.createElement("h3",{className:"mb-0",style:{position:"relative",top:"-170px",left:"50px",zIndex:"2",textShadow:"2px 2px 4px #9f9f9f"}},"Google Book Search"),l.a.createElement(te.a,{style:{position:"relative",top:"-37px"},className:"p-2 mb-0 shadow",bg:"light",expand:"lg"},l.a.createElement(te.a.Brand,{href:"/"},"GoogleBookSearch"),l.a.createElement(te.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(te.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(ae.a,{className:"mr-auto"},l.a.createElement(ae.a.Link,{href:"#savedBooks"},"Saved"),l.a.createElement(ae.a.Link,{href:"#searchBooks"},"Search"),l.a.createElement(ae.a.Link,{href:"#searchResults"},"Results")))))};var le=()=>{const e=v(),t=Object(d.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(()=>{o({type:"LOADING"}),o({type:"UPDATE_FAVORITES"})},[]),l.a.createElement("div",{className:"container mb-2 mt-2"},l.a.createElement("h3",{className:"text-center"},"Here's All of Your Favorite Books"),a.favorites.length?l.a.createElement(I,null,l.a.createElement("h3",{className:"mb-2 mt-2"},"Click on a book to view in detail"),a.favorites.map(e=>l.a.createElement(L,{key:e.id},l.a.createElement(c.b,{to:"/books/"+e.id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(V,{onClick:()=>{return t=e.id,void o({type:"REMOVE_FAVORITE",id:t});var t}})))):l.a.createElement("h3",null,"You haven't added any favorites yet!"),l.a.createElement("div",{className:"mt-5"},l.a.createElement(c.b,{to:"home"},"Back to home")))};var oe=function(){return l.a.createElement(c.a,null,l.a.createElement(p,null,l.a.createElement(ne,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:Y}),l.a.createElement(s.a,{exact:!0,path:"/home",component:Y}),l.a.createElement(s.a,{exact:!0,path:"/favorites",component:le}),l.a.createElement(s.a,{exact:!0,path:"/books/:id",component:J}),l.a.createElement(s.a,{component:X}))))};r.a.render(l.a.createElement(oe,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/book_search.19119a80.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/row-different-colorful-books-vector-flat-illustration-educational-entertainment-textbooks-multicolored-covers-203771386.49b281f0.jpg"},67:function(e,t,a){e.exports=a(100)},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/googlebooks.9be27032.png"}},[[67,1,2]]]);
//# sourceMappingURL=main.a1a25edb.chunk.js.map