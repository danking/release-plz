"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9872],{4416:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),a=s(8453);const r={},c="update",o={id:"usage/update",title:"update",description:"The release-plz update command updates the version and the changelog of the",source:"@site/docs/usage/update.md",sourceDirName:"usage",slug:"/usage/update",permalink:"/docs/usage/update",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/usage/update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/usage/installation"},next:{title:"release-pr",permalink:"/docs/usage/release-pr"}},i={},d=[];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"update",children:"update"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"release-plz update"})," command updates the version and the changelog of the\npackages containing unreleased changes."]}),"\n",(0,t.jsx)(n.p,{children:"The command:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Downloads the packages of the project from the cargo registry."}),"\n",(0,t.jsx)(n.li,{children:"Compares the local packages with the downloaded ones to determine the new commits."}),"\n",(0,t.jsxs)(n.li,{children:["Checks for API breaking changes in libraries if\n",(0,t.jsx)(n.a,{href:"https://github.com/obi1kenobi/cargo-semver-checks",children:"cargo-semver-checks"}),"\nis installed.\n",(0,t.jsx)(n.em,{children:"Warning:"})," ",(0,t.jsx)(n.code,{children:"cargo-semver-checks"})," doesn't catch every semver violation."]}),"\n",(0,t.jsxs)(n.li,{children:["Updates the packages versions based on the messages of the new commits (based\non ",(0,t.jsx)(n.a,{href:"https://www.conventionalcommits.org/",children:"conventional commits"})," and\n",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"semantic versioning"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Updates the packages changelogs with the messages of the new commits."}),"\n",(0,t.jsxs)(n.li,{children:["Updates all dependencies by running ",(0,t.jsx)(n.code,{children:"cargo update"})," (disabled by default)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, I run ",(0,t.jsx)(n.code,{children:"release-plz"})," on the ",(0,t.jsx)(n.code,{children:"release-plz"})," project itself.\n",(0,t.jsx)(n.code,{children:"Release-plz"})," increases the version and the changelog of the packages with\nunpublished changes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/11428655/160762832-54300ddb-ec9c-4538-a611-c66490c47333.gif",alt:"release-plz update"})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more, run ",(0,t.jsx)(n.code,{children:"release-plz update --help"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(6540);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);