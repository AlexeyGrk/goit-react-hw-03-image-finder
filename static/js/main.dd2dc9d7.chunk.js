(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,n){},68:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=(n(28),n(11)),s=n(21),l=n(4),p=n(5),d=n(7),h=n(6),u=n(10),g=n.n(u),b=n(22),m=n.n(b),x=(n(67),n(68),n(2));var f=Object(x.a)("div",{target:"edlay0k1"})({name:"1vcob1d",styles:"display:flex;justify-content:center;align-items:center"}),j=Object(x.a)("button",{target:"edlay0k0"})({name:"d5bs1z",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;max-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover{background-color:#303f9f;}&:focus{background-color:#303f9f;}"}),y=n(1),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(f,{children:Object(y.jsx)(j,{onClick:this.props.handleNextPage,children:"Load More"})})})}}]),n}(a.Component);var v=Object(x.a)("li",{target:"e1ret3ds0"})({name:"1uw8ng8",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12);& img{width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}}"}),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsx)(v,{children:this.props.children})}}]),n}(a.Component);var k=Object(x.a)("ul",{target:"ejhmao70"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsx)(k,{children:this.props.images.map((function(t){var n=t.id,a=t.webformatURL,r=t.largeImageURL;return Object(y.jsx)(w,{children:Object(y.jsx)("img",{src:a,alt:"photoAction","data-sorce":r,onClick:e.props.handleLargeImages})},n)}))})}}]),n}(a.Component);var C=Object(x.a)("div",{target:"e1lekqbj1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),S=Object(x.a)("div",{target:"e1lekqbj0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsx)(C,{onClick:this.props.handleBackDropClick,children:Object(y.jsx)(S,{children:this.props.children})})}}]),n}(a.Component);var z=Object(x.a)("form",{target:"e16wqdk93"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),M=Object(x.a)("button",{target:"e16wqdk92"})({name:"1f32h4y",styles:'display:inline-block;width:48px;height:48px;border:0;background-image:url("https://image.flaticon.com/icons/svg/149/149852.svg");background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}'}),V=Object(x.a)("span",{target:"e16wqdk91"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),D=Object(x.a)("input",{target:"e16wqdk90"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(z,{children:[Object(y.jsx)(M,{onClick:this.props.getItemsGalleryImages,children:Object(y.jsx)(V,{children:"Search"})}),Object(y.jsx)(D,{className:"SearchForm-input",type:"text",autocomplete:"off",placeholder:"Search images and photos",name:"inputValue",onChange:this.props.handleInput})]})}}]),n}(a.Component);var P=Object(x.a)("header",{target:"e1ftjcwv0"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsx)(P,{children:Object(y.jsx)(q,{handleInput:this.props.handleInputValue,getItemsGalleryImages:this.props.getItemsGalleryImages})})}}]),n}(a.Component);var N=Object(x.a)("div",{target:"e1i69j1"})({name:"1wnowod",styles:"display:flex;align-items:center;justify-content:center"}),B=Object(x.a)("p",{target:"e1i69j0"})(""),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(y.jsx)(N,{children:Object(y.jsx)(B,{children:"Please enter any word"})})}}]),n}(a.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",images:[],selectedImg:null,page:1,isLoading:!1,error:"",showModal:!1},e.handleKeyDown=function(t){window.addEventListener("keydown",(function(t){"Escape"===t.code&&e.setState({showModal:!1})}))},e.getItemsGalleryImages=function(t){t.preventDefault(),""!==e.state.inputValue&&(g.a.get("https://pixabay.com/api/?q=".concat(e.state.inputValue,"&page=").concat(e.state.page,"&key=21657672-6f26057767faea3bb550eec99&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return e.setState({images:t.data.hits,isLoading:!1})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})})),e.setState({isLoading:!0}))},e.handleInputValue=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.resetPage=function(){e.setState({page:1})},e.handleNextPage=function(){e.setState({page:e.state.page+1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleLargeImages=function(t){"IMG"===t.target.nodeName&&e.setState((function(e){return{showModal:!e.showModal,selectedImg:t.target.dataset.sorce}}))},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.setState({showModal:!1})},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.handleKeyDown()}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.scrollTo(),t.inputValue!==this.state.inputValue&&this.resetPage(),t.page!==this.state.page&&g.a.get("https://pixabay.com/api/?q=".concat(this.state.inputValue,"&page=").concat(this.state.page,"&key=21657672-6f26057767faea3bb550eec99&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return n.setState((function(t){return{images:[].concat(Object(c.a)(t.images),Object(c.a)(e.data.hits)),isLoading:!1}}))})).catch((function(e){return n.setState({error:e})})).finally((function(){return n.setState({isLoading:!1})}))}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.images,a=e.selectedImg,r=e.error,i=e.showModal;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(G,{handleInputValue:this.handleInputValue,getItemsGalleryImages:this.getItemsGalleryImages}),t?Object(y.jsx)(m.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{display:"flex",justifyContent:"center"}}):Object(y.jsx)(I,{images:n,handleLargeImages:this.handleLargeImages,selectedImg:a}),r&&Object(y.jsxs)("p",{children:["Whoops, something went wrong: ",r.message]}),n.length>0&&Object(y.jsx)(O,{handleNextPage:this.handleNextPage})||Object(y.jsx)(E,{}),i&&Object(y.jsx)(L,{handleBackDropClick:this.handleBackDropClick,children:Object(y.jsx)("img",{src:a,alt:""})})]})}}]),n}(a.Component);o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.dd2dc9d7.chunk.js.map