"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2636],{495:(e,t,n)=>{var a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),i=a(n(51117)),p=a(n(6907)),d=n(28216),r=n(9588),o=n(38978),s=i.default.div.withConfig({displayName:"AppBanner__Wrapper",componentId:"sc-1tr0ds1-0"})(["display:flex;align-items:center;justify-content:space-between;height:88px;background:#17181d;width:100%;padding:0 20px;@media (min-width:768px){display:none;}"]),c=i.default.div.withConfig({displayName:"AppBanner__LeftWrapper",componentId:"sc-1tr0ds1-1"})(["display:flex;align-items:center;"]),f=(i.default.div.withConfig({displayName:"AppBanner__CloseIcon",componentId:"sc-1tr0ds1-2"})(["display:flex;height:auto;align-items:center;padding:5px;height:30px;cursor:pointer;"]),i.default.div.withConfig({displayName:"AppBanner__LogoWrapper",componentId:"sc-1tr0ds1-3"})(["background:#272c34;border-radius:8px;display:flex;align-items:center;justify-content:center;height:56px;width:56px;margin-left:15px;"])),u=i.default.div.withConfig({displayName:"AppBanner__Description",componentId:"sc-1tr0ds1-4"})(["font-size:var(--body-3-d);color:var(--white-80);margin-left:10px;"]),m=(0,i.default)(p.default).withConfig({displayName:"AppBanner__StyledButton",componentId:"sc-1tr0ds1-5"})(["height:30px;font-size:12px;border-radius:4px;"]),g=i.default.div.withConfig({displayName:"AppBanner__CtaWrapper",componentId:"sc-1tr0ds1-6"})([""]),_=i.default.p.withConfig({displayName:"AppBanner__Title",componentId:"sc-1tr0ds1-7"})(["font-size:14px;color:var(--white-100);font-weight:bold;"]),h=i.default.p.withConfig({displayName:"AppBanner__Content",componentId:"sc-1tr0ds1-8"})(["font-size:12px;margin-top:5px;"]),x=i.default.a.withConfig({displayName:"AppBanner__AppLink",componentId:"sc-1tr0ds1-9"})([""]);t.default=function(){var e=(0,o.useTranslation)("home").t,t=(0,d.useSelector)((function(e){return e.userAgentDetails.isIOSDevice}));return l.default.createElement(l.default.Fragment,null,!t&&l.default.createElement(s,null,l.default.createElement(c,null,l.default.createElement(f,null,l.default.createElement("img",{src:"https://cdn.pixelbin.io/v2/dummy-cloudname/original/erasebg_assets/logo/favicon-128x128.png?f_auto=true",alt:"logo",width:"48px",height:"48px"})),l.default.createElement(u,null,l.default.createElement(_,null,e("appBanner.appName")),l.default.createElement(h,null,e("appBanner.appCompany"))," ",l.default.createElement(h,null,e("appBanner.googlePlay")))),l.default.createElement(g,null,l.default.createElement(x,{href:r.CONSTANTS.GooglePlayLink,target:"_blank"},l.default.createElement(m,{paddingLeftRight:"15px",onClick:function(){var e=+new Date;localStorage.setItem("close_timestamp",e.toString())}},e("appBanner.appCta"))))))}}}]);