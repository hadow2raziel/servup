window.bibblioRecirculation=function(){return{bibblioStories:[],bibblioTrackingUrl:"",globalRecircUuids:[],totalCalls:0,getContent(e){this.globalRecircUuids=Array.from(document.querySelectorAll("[data-gcirc-uuid]")).map((e=>e.getAttribute("data-gcirc-uuid"))),this.getBibblioStories(e??null)},getBibblioStories(e){const i=new Date("2016/03/21"),t=window.publish_date?new Date(window.publish_date):null;this.bibblioStories.length<=0&&e&&t&&t.getTime()>i.getTime()?this.callBibblio(`https://api.bibblio.org/v1/recommendations?customUniqueIdentifier=${e}&limit=20&fields=url,name,headline,customUniqueIdentifier,moduleImage,customFields,author&customCatalogueIds=news,how-to,roundups,comparisons,reviews&shuffle=false`):this.callBibblio("https://api.bibblio.org/v1/recommendations/popular?limit=20&fields=url,name,headline,customUniqueIdentifier,moduleImage,customFields,author&customCatalogueIds=news,how-to,roundups,comparisons,reviews"),window.attachBibblioViewer()},callBibblio(e){fetch(e,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${window.bibblioRecommendationKey}`}}).then((e=>{if(this.totalCalls+=1,e.ok)return e.json();404===e.status&&this.totalCalls<2&&this.callBibblio("https://api.bibblio.org/v1/recommendations/popular?limit=20&fields=url,name,headline,customUniqueIdentifier,moduleImage,customFields,author&customCatalogueIds=news,how-to,roundups,comparisons,reviews")})).then((e=>{if(e.results&&e.results.length>0){let i=e.results.filter((e=>!this.globalRecircUuids.includes(e.fields.customUniqueIdentifier))).map((e=>(null!=e.fields.customFields?e.fields.name+=parseFloat(e.fields.customFields.rating)>0?" Review":" Preview":e.fields.noCustomFields=!0,e)));this.bibblioStories=i.slice(0,4),this.bibblioTrackingUrl=e._links.tracking.href,this.$nextTick((()=>{this.mountSlides();let e=this.$refs.slider.querySelector(".slide:nth-child(2)")?this.$refs.slider.querySelector(".slide:nth-child(2)"):this.$refs.slider.querySelector(".slide");this.defaultWidth=e.getBoundingClientRect().width,this.$refs.slider.querySelector(".slider").scrollTo({left:this.scrollLeft,behavior:"smooth"})}))}}))},arrowsVisible:!0,windowWidth:window.innerWidth,currentPageIndex:0,nextSlideIndex:0,touchBegin:0,touchFinish:0,reviews:[],scrollLeft:0,hasSwiped:!1,defaultWidth:264,mountSlides:function(){let e=this.$refs.slider.querySelectorAll(".slide:not(.md\\:hidden)");for(let i=0;i<e.length;i++)this.reviews.push(e[i].innerHTML)},nextPage:function(){let e=this.$refs.slider.querySelector(".slide:nth-child(2)")?this.$refs.slider.querySelector(".slide:nth-child(2)"):this.$refs.slider.querySelector(".slide");this.scrollLeft=parseInt(this.scrollLeft)+2*e.getBoundingClientRect().width,this.scrollLeft>=this.defaultWidth*this.reviews.length-2*e.getBoundingClientRect().width&&(this.scrollLeft=this.defaultWidth*this.reviews.length-2*e.getBoundingClientRect().width),this.$refs.slider.querySelector(".slider").scrollTo({left:this.scrollLeft,behavior:"smooth"})},previousPage:function(){let e=this.$refs.slider.querySelector(".slide:nth-child(2)")?this.$refs.slider.querySelector(".slide:nth-child(2)"):this.$refs.slider.querySelector(".slide");this.scrollLeft=parseInt(this.scrollLeft)-2*e.getBoundingClientRect().width,this.scrollLeft<0&&(this.scrollLeft=0),this.$refs.slider.querySelector(".slider").scrollTo({left:this.scrollLeft,behavior:"smooth"})},onWindowResize:window.debounce((function(){this.windowWidth=window.innerWidth}),100),touchStart:function(e){this.touchBegin=e.changedTouches[0].clientX},touchEnd:function(e){this.touchFinish=e.changedTouches[0].clientX,this.swipeHandler(this.touchFinish-this.touchBegin)},swipeHandler:function(e){if(Math.abs(e)>20&&window.ga){let i=e>0?"right":"left";window.ga("send",{hitType:"event",eventCategory:"swipe",eventAction:"sliding-carousel",eventLabel:"swiped-"+i,dimension2:window.legacy_template||null,dimension33:window.template||null,nonInteraction:0,transport:"beacon"}),gtag("event","sliding-carousel",{event_category:"swipe",event_label:"swiped-"+i,template:window.legacy_template||null})}},showPrevious:function(){return this.scrollLeft>0},showNext:function(){return this.scrollLeft<this.defaultWidth*this.reviews.length-(this.$refs.slider?this.$refs.slider.getBoundingClientRect().width:0)}}};