"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[446],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=l.createContext({}),c=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return l.createElement(p.Provider,{value:a},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},k=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(t),k=n,u=h["".concat(p,".").concat(k)]||h[k]||s[k]||i;return t?l.createElement(u,r(r({ref:a},d),{},{components:t})):l.createElement(u,r({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=k;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[h]="string"==typeof e?e:n,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=t(7462),n=(t(7294),t(3905));const i={},r="Configuration",o={unversionedId:"config",id:"config",title:"Configuration",description:"This section describes how you can customize the behavior of release-plz",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Changelog format",permalink:"/docs/changelog-format"},next:{title:"Semver check",permalink:"/docs/semver-check"}},p={},c=[{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2},{value:"The <code>[workspace]</code> section",id:"the-workspace-section",level:3},{value:"The <code>allow_dirty</code> field",id:"the-allow_dirty-field",level:4},{value:"The <code>changelog_config</code> field",id:"the-changelog_config-field",level:4},{value:"The <code>changelog_update</code> field",id:"the-changelog_update-field",level:4},{value:"The <code>dependencies_update</code> field",id:"the-dependencies_update-field",level:4},{value:"The <code>git_release_enable</code> field",id:"the-git_release_enable-field",level:4},{value:"The <code>pr_labels</code> field",id:"the-pr_labels-field",level:4},{value:"The <code>publish</code> field",id:"the-publish-field",level:4},{value:"The <code>publish_allow_dirty</code> field",id:"the-publish_allow_dirty-field",level:4},{value:"The <code>publish_no_verify</code> field",id:"the-publish_no_verify-field",level:4},{value:"The <code>repo_url</code> field",id:"the-repo_url-field",level:4},{value:"The <code>semver_check</code> field",id:"the-semver_check-field",level:4},{value:"The <code>[[package]]</code> section",id:"the-package-section",level:3},{value:"The <code>name</code> field",id:"the-name-field",level:4},{value:"The <code>changelog_include</code> field",id:"the-changelog_include-field",level:4},{value:"The <code>changelog_path</code> field (<code>package</code> section)",id:"the-changelog_path-field-package-section",level:4},{value:"The <code>changelog_update</code> field (<code>package</code> section)",id:"the-changelog_update-field-package-section",level:4},{value:"The <code>git_release_enable</code> field (<code>package</code> section)",id:"the-git_release_enable-field-package-section",level:4},{value:"The <code>publish</code> field (<code>package</code> section)",id:"the-publish-field-package-section",level:4},{value:"The <code>publish_allow_dirty</code> field (<code>package</code> section)",id:"the-publish_allow_dirty-field-package-section",level:4},{value:"The <code>publish_no_verify</code> field (<code>package</code> section)",id:"the-publish_no_verify-field-package-section",level:4},{value:"The <code>semver_check</code> field (<code>package</code> section)",id:"the-semver_check-field-package-section",level:4}],d={toc:c},h="wrapper";function s(e){let{components:a,...t}=e;return(0,n.kt)(h,(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"This section describes how you can customize the behavior of release-plz\nwith the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz.toml")," file."),(0,n.kt)("p",null,"This configuration file is optional \u2014 release-plz is designed to work out of the box,\nwith decent defaults."),(0,n.kt)("p",null,"Put the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz.toml")," file in the same directory of your root ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here's an example configuration file for a cargo workspace.\n",(0,n.kt)("inlineCode",{parentName:"p"},"package_a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"package_b")," override some fields from the default configuration ",(0,n.kt)("inlineCode",{parentName:"p"},"[workspace]"),",\nwhile the other packages inherit the default configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\nallow_dirty = true # allow updating repositories with uncommitted changes\nchangelog_config = "config/git-cliff.toml" # use a custom git-cliff configuration\nchangelog_update = false # disable changelog updates\ndependencies_update = true # update dependencies with `cargo update`\ngit_release_enable = false # disable GitHub/Gitea releases\npr_labels = ["release"] # add the `release` label to the release Pull Request\npublish_allow_dirty = true # add `--allow-dirty` to `cargo publish`\nsemver_check = false # disable API breaking changes checks\n\n[[package]] # the double square brackets define a TOML table array\nname = "package_a"\nchangelog_include = ["package_b"] # include commits from `package_b` in the changelog\nchangelog_path = "docs/CHANGELOG.md" # use a custom changelog path for `package_a`\nchangelog_update = true # enable changelog update for `package_a`\ngit_release_enable = true # enable GitHub/Gitea releases for `package_a`\npublish = false # disable `cargo publish` for `package_a`\n\n[[package]]\nname = "package_b"\nsemver_check = true # enable semver_check for `package_b`\npublish_no_verify = true # add `--no-verify` to `cargo publish` for `package_b`\n')),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"The configuration file is written in the ",(0,n.kt)("a",{parentName:"p",href:"https://toml.io/"},"TOML")," format and consists of\nthe following sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-workspace-section"},(0,n.kt)("inlineCode",{parentName:"a"},"[workspace]"))," \u2014 Default configuration.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-allow_dirty-field"},(0,n.kt)("inlineCode",{parentName:"a"},"allow_dirty"))," \u2014 Update dirty working directories."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-changelog_config-field"},(0,n.kt)("inlineCode",{parentName:"a"},"changelog_config"))," \u2014 Path to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orhun/git-cliff"},"git-cliff")," configuration file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-changelog_update-field"},(0,n.kt)("inlineCode",{parentName:"a"},"changelog_update"))," \u2014 Update changelog."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-dependencies_update-field"},(0,n.kt)("inlineCode",{parentName:"a"},"dependencies_update"))," \u2014 Update all dependencies."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-git_release_enable-field"},(0,n.kt)("inlineCode",{parentName:"a"},"git_release_enable"))," \u2014 Enable git release."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-pr_labels-field"},(0,n.kt)("inlineCode",{parentName:"a"},"pr_labels"))," \u2014 Add labels to the release Pull Request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish-field"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," \u2014 Publish to cargo registry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish_allow_dirty-field"},(0,n.kt)("inlineCode",{parentName:"a"},"publish_allow_dirty"))," \u2014 Package dirty directories."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish_no_verify-field"},(0,n.kt)("inlineCode",{parentName:"a"},"publish_no_verify"))," \u2014 Don't verify package build."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-repo_url-field"},(0,n.kt)("inlineCode",{parentName:"a"},"repo_url"))," \u2014 Repository URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-semver_check-field"},(0,n.kt)("inlineCode",{parentName:"a"},"semver_check"))," \u2014 Run ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"[[package]]"))," \u2014 Package-specific configurations.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-name-field"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," \u2014 Package name. ",(0,n.kt)("em",{parentName:"li"},"(Required)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-changelog_include-field"},(0,n.kt)("inlineCode",{parentName:"a"},"changelog_include"))," \u2014 Include commits from other packages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-changelog_path-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"changelog_path"))," \u2014 Changelog path."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-changelog_update-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"changelog_update"))," \u2014 Update changelog."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-git_release_enable-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"git_release_enable"))," \u2014 Enable git release."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," \u2014 Publish to cargo registry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish_allow_dirty-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"publish_allow_dirty"))," \u2014 Package dirty directories."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-publish_no_verify-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"publish_no_verify"))," \u2014"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-semver_check-field-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"semver_check"))," \u2014 Run ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks"),".\nDon't verify package build.")))),(0,n.kt)("h3",{id:"the-workspace-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h3"},"[workspace]")," section"),(0,n.kt)("p",null,"Defines the global configuration, applied to all packages by default.\nThis section is optional, as well as all its fields."),(0,n.kt)("p",null,"Here's an example configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\nallow_dirty = true # allow updating repositories with uncommitted changes\nchangelog_config = "config/git-cliff.toml"\nchangelog_update = false\ndependencies_update = true # update dependencies with `cargo update`\ngit_release_enable = true\npublish_allow_dirty = true\npublish_no_verify = false\nrepo_url = "https://github.com/<owner>/<repo>"\nsemver_check = false\n')),(0,n.kt)("h4",{id:"the-allow_dirty-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"allow_dirty")," field"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", allow release-plz to update dirty working directories.\nA directory is considered dirty if it contains uncommitted changes.\nThe uncommitted changes will be part of the update."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", release-plz returns an error if the repository contains uncommitted changes. ",(0,n.kt)("em",{parentName:"li"},"(Default)"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This field is different from the ",(0,n.kt)("inlineCode",{parentName:"p"},"allow-dirty")," flag of the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz release")," command.\nThis field only affects the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz update")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz release-pr")," command.")),(0,n.kt)("h4",{id:"the-changelog_config-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"changelog_config")," field"),(0,n.kt)("p",null,"Path to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orhun/git-cliff"},"git-cliff")," configuration file.\nIf unspecified, release-plz uses the ",(0,n.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.1.0/"},"keep a changelog")," format.\nYou can learn more in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/changelog-format"},"changelog format")," section."),(0,n.kt)("h4",{id:"the-changelog_update-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"changelog_update")," field"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", update the changelog of the crates. ",(0,n.kt)("em",{parentName:"li"},"(Default)"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", don't update changelogs.")),(0,n.kt)("p",null,"This field can be overridden in the ",(0,n.kt)("a",{parentName:"p",href:"#the-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"[package]"))," section."),(0,n.kt)("h4",{id:"the-dependencies_update-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"dependencies_update")," field"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", update all the dependencies in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cargo.lock")," file by running ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo update"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", only update the workspace packages by running ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo update --workspace"),". ",(0,n.kt)("em",{parentName:"li"},"(Default)"),".")),(0,n.kt)("h4",{id:"the-git_release_enable-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"git_release_enable")," field"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", release-plz will create a git release for the created tag. ",(0,n.kt)("em",{parentName:"li"},"(Default)"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", release-plz will not create a git release.")),(0,n.kt)("p",null,"The supported git releases are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitea.io/en-us/"},"Gitea")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/project/releases/#releases"},"GitLab"))),(0,n.kt)("h4",{id:"the-pr_labels-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"pr_labels")," field"),(0,n.kt)("p",null,"Add labels to the Pull Request opened by release-plz.\n",(0,n.kt)("em",{parentName:"p"},"(GitHub only)"),"."),(0,n.kt)("h4",{id:"the-publish-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish")," field"),(0,n.kt)("p",null,"Publish to cargo registry."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"release-plz")," runs ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo publish"),". ",(0,n.kt)("em",{parentName:"li"},"(Default)"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"release-plz")," doesn't run ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo publish"),".")),(0,n.kt)("p",null,"With this option disabled, release-plz will continue creating git tags.\nHowever, note that release-plz will still use the cargo registry to check what's the latest release,\nso you still need to run ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo publish")," by yourself."),(0,n.kt)("h4",{id:"the-publish_allow_dirty-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish_allow_dirty")," field"),(0,n.kt)("p",null,"Allow dirty working directories to be packaged.\nWhen ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz")," adds the ",(0,n.kt)("inlineCode",{parentName:"p"},"--allow-dirty")," flag to ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo publish"),"."),(0,n.kt)("h4",{id:"the-publish_no_verify-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish_no_verify")," field"),(0,n.kt)("p",null,"Don't verify the contents by building them.\nWhen ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz")," adds the ",(0,n.kt)("inlineCode",{parentName:"p"},"--no-verify")," flag to ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo publish"),"."),(0,n.kt)("h4",{id:"the-repo_url-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"repo_url")," field"),(0,n.kt)("p",null,"GitHub/Gitea repository URL where your project is hosted.\nIt is used to generate the changelog release link and open the PR.\nNormally, you don't need to set this field,\nbecause release-plz defaults to the URL of the default git remote."),(0,n.kt)("h4",{id:"the-semver_check-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"semver_check")," field"),(0,n.kt)("p",null,"With this field, you can tell release-plz to run ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks")," to check\nAPI breaking changes of your package:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", run it. ",(0,n.kt)("em",{parentName:"li"},"(Default)"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", don't run it.")),(0,n.kt)("p",null,"Note that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks")," only works with packages containing a library."),(0,n.kt)("p",null,"This field can be overridden in the ",(0,n.kt)("a",{parentName:"p",href:"#the-package-section"},(0,n.kt)("inlineCode",{parentName:"a"},"[package]"))," section."),(0,n.kt)("h3",{id:"the-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h3"},"[[package]]")," section"),(0,n.kt)("p",null,"In this section, you can override some of the ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace")," fields for specific packages."),(0,n.kt)("p",null,"Here's an example configuration where we override the configuration of the ",(0,n.kt)("inlineCode",{parentName:"p"},"my_package")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[[package]]\nname = "my_package"\nchangelog_path = "docs/CHANGELOG.md"\nsemver_check = false\nchangelog_update = false\ngit_release_enable = true\npublish = true\npublish_allow_dirty = true\npublish_no_verify = true\n')),(0,n.kt)("h4",{id:"the-name-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"name")," field"),(0,n.kt)("p",null,"Name of the package to which the configuration applies.\n",(0,n.kt)("em",{parentName:"p"},"(Required field)"),"."),(0,n.kt)("h4",{id:"the-changelog_include-field"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"changelog_include")," field"),(0,n.kt)("p",null,"By default, release-plz populates the changelog of a package with commits\ncontaining changes in files of the package directory.\nYou can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"changelog_include")," field to include commits that belong to other packages.\nFor example, the changelog of the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz")," package of this repository\nincludes commits of the ",(0,n.kt)("inlineCode",{parentName:"p"},"release_plz_core")," package, because they affect the\n",(0,n.kt)("inlineCode",{parentName:"p"},"release-plz")," package, too."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'changelog_include = ["release_plz_core"]\n')),(0,n.kt)("h4",{id:"the-changelog_path-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"changelog_path")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("p",null,"By default, release-plz looks for the changelog in the ",(0,n.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file\nof the same directory of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," of the package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 src/\n\u251c\u2500\u2500 CHANGELOG.md\n\u2514\u2500\u2500 Cargo.toml\n")),(0,n.kt)("p",null,"If the changelog of a package is in a different location, you can specify it with this field."),(0,n.kt)("p",null,"This field is relative to the root ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file.\nIn GitHub Actions, this is the root of the repository."),(0,n.kt)("p",null,"This field cannot be set in the ",(0,n.kt)("inlineCode",{parentName:"p"},"[workspace]")," section."),(0,n.kt)("h4",{id:"the-changelog_update-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"changelog_update")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", update the changelog of this package. ",(0,n.kt)("em",{parentName:"li"},"(Default)"),"."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", don't.")),(0,n.kt)("h4",{id:"the-git_release_enable-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"git_release_enable")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("p",null,"Overrides the ",(0,n.kt)("a",{parentName:"p",href:"#the-git_release_enable-field"},(0,n.kt)("inlineCode",{parentName:"a"},"workspace.git_release_enable"))," field."),(0,n.kt)("h4",{id:"the-publish-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("p",null,"Overrides the ",(0,n.kt)("a",{parentName:"p",href:"#the-publish-field"},(0,n.kt)("inlineCode",{parentName:"a"},"workspace.publish"))," field."),(0,n.kt)("h4",{id:"the-publish_allow_dirty-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish_allow_dirty")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("p",null,"Overrides the\n",(0,n.kt)("a",{parentName:"p",href:"#the-publish_allow_dirty-field"},(0,n.kt)("inlineCode",{parentName:"a"},"workspace.publish_allow_dirty"))," field."),(0,n.kt)("h4",{id:"the-publish_no_verify-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"publish_no_verify")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("p",null,"Overrides the ",(0,n.kt)("a",{parentName:"p",href:"#the-publish_no_verify-field"},(0,n.kt)("inlineCode",{parentName:"a"},"workspace.publish_no_verify"))," field."),(0,n.kt)("h4",{id:"the-semver_check-field-package-section"},"The ",(0,n.kt)("inlineCode",{parentName:"h4"},"semver_check")," field (",(0,n.kt)("inlineCode",{parentName:"h4"},"package")," section)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", run ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks")," for this package."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),", don't.")),(0,n.kt)("p",null,"By default, release-plz runs ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/obi1kenobi/cargo-semver-checks"},"cargo-semver-checks")," if the package is a library."))}s.isMDXComponent=!0}}]);