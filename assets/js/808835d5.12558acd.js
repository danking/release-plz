"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3406],{715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(4848),s=a(8453);const r={},i="Single git tag",o={id:"extra/single-tag",title:"Single git tag",description:"By default, Release-plz creates a git tag for every crate that it releases.",source:"@site/docs/extra/single-tag.md",sourceDirName:"extra",slug:"/extra/single-tag",permalink:"/docs/extra/single-tag",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/extra/single-tag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Single changelog",permalink:"/docs/extra/single-changelog"},next:{title:"Yanked packages",permalink:"/docs/extra/yanked-packages"}},l={},c=[];function g(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"single-git-tag",children:"Single git tag"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Release-plz creates a git tag for every crate that it releases.\nIf you want to create a single tag for all the crates in your workspace,\nyou can use the following\n",(0,n.jsx)(t.code,{children:"release-plz.toml"})," ",(0,n.jsx)(t.a,{href:"/docs/config",children:"configuration"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[workspace]\n# Disable git releases for all packages by default\ngit_release_enable = false\n\n# Disable git tags for all packages by default\ngit_tag_enable = false\n\n# Options for the package I care the most, e.g. `my_main_package`.\n[[package]]\nname = "my_main_package"\n# (Optional) Customize the git tag name to remove the `my_main_package` prefix.\ngit_tag_name = "v{{ version }}"\n\n# Enable git tags for this package\ngit_tag_enable = true\n\n# Enable git releases for this package\ngit_release_enable = true\n'})}),"\n",(0,n.jsxs)(t.p,{children:["With this configuration, release-plz only creates the git tag when releasing ",(0,n.jsx)(t.code,{children:"my_main_package"}),".\nCreating git tags for the other packages is disabled\nbecause they inherit the workspace settings."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);