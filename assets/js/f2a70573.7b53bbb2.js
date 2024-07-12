"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9720],{1618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=s(4848),l=s(8453);const i={},c="shell-completion",r={id:"usage/shell-completion",title:"shell-completion",description:"In the following, you can find instructions on how to generate release-plz command completions for",source:"@site/docs/usage/shell-completion.md",sourceDirName:"usage",slug:"/usage/shell-completion",permalink:"/docs/usage/shell-completion",draft:!1,unlisted:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/usage/shell-completion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set-version",permalink:"/docs/usage/set-version"},next:{title:"generate-schema",permalink:"/docs/usage/generate-schema"}},t={},a=[{value:"zsh",id:"zsh",level:2},{value:"bash",id:"bash",level:2},{value:"fish",id:"fish",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"shell-completion",children:"shell-completion"}),"\n",(0,o.jsxs)(n.p,{children:["In the following, you can find instructions on how to generate release-plz command completions for\neach shell.\nTo learn more, run ",(0,o.jsx)(n.code,{children:"release-plz generate-completions --help"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"zsh",children:"zsh"}),"\n",(0,o.jsx)(n.p,{children:"To load completions in your current shell session:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"autoload bashcompinit; bashcompinit\nsource <(release-plz generate-completions)\n"})}),"\n",(0,o.jsx)(n.p,{children:"To load completions for every new session, execute once:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"release-plz generate-completions zsh > _release-plz\nsudo mv _release-plz /usr/local/share/zsh/site-functions/\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bash",children:"bash"}),"\n",(0,o.jsx)(n.p,{children:"To load completions in your current shell session:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"source <(release-plz generate-completions)\n"})}),"\n",(0,o.jsx)(n.p,{children:"To load completions for every new session, execute once:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"release-plz generate-completions bash > ~/.local/share/bash-completion/completions/release-plz\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The package ",(0,o.jsx)(n.code,{children:"bash-completion"})," is required for this to work."]})}),"\n",(0,o.jsx)(n.h2,{id:"fish",children:"fish"}),"\n",(0,o.jsx)(n.p,{children:"To load completions in your current shell session:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"release-plz generate-completions fish | source\n"})}),"\n",(0,o.jsx)(n.p,{children:"To load completions for every new session, execute once:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"release-plz generate-completions fish > $HOME/.config/fish/completions/release-plz.fish\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var o=s(6540);const l={},i=o.createContext(l);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);