(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),r=(n(0),n(178)),a=n(179);n(180);const o={title:"Physics Ability Example - Exorcism",author:"Noya",steamId:"76561198046984233",date:"02.02.2015"},l={id:"abilities/datadriven/physics-ability-example-exorcism",title:"Physics Ability Example - Exorcism",description:"Here's in the breakdown of an ability that spawns units and moves them with rotation, making use of the Physics library",source:"@site/_articles/abilities/datadriven/physics-ability-example-exorcism.md",permalink:"/abilities/datadriven/physics-ability-example-exorcism",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/physics-ability-example-exorcism.md",sidebar:"docs",previous:{title:"Apply Hero and Creep modifier durations",permalink:"/abilities/datadriven/apply-hero-and-creep-modifier-durations"},next:{title:"Unit KeyValues",permalink:"/units/unit-keyvalues"}},c=[],s={rightToc:c};function p({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here's in the breakdown of an ability that spawns units and moves them with rotation, making use of the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/bmddota/barebones/blob/source2/game/dota_addons/barebones/scripts/vscripts/physics.lua"}),"Physics library")),Object(r.b)("p",null,"The end result while there is no enemies to go to would be like this:"),Object(r.b)(a.a,{id:"UniformLikableDavidstiger",mdxType:"Gfycat"}),Object(r.b)("p",null,"I include a Debug boolean that can be enabled to show the path and acquisition of different states:"),Object(r.b)(a.a,{id:"MeekPortlyCrocodileskink",mdxType:"Gfycat"}),Object(r.b)("p",null,"The complete codes for the ability can be found in the following ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Pizzalol/SpellLibrary"}),"SpellLibrary")," links:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/npc/abilities/death_prophet_exorcism_datadriven.txt"}),"death_prophet_exorcism_datadriven"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/vscripts/heroes/hero_death_prophet/exorcism.lua"}),"exorcism.lua")))),Object(r.b)("p",null,"The entire lua file has comments for every decision. I hope it helps understand and adapt this skill to different behaviors."),Object(r.b)("hr",null),Object(r.b)("p",null,"I'll just leave the lines related to physics here, special thanks to BMD for helping me through the entire process of rewriting this ability."),Object(r.b)("p",null,"First step is to make each spawned unit a physics units and apply the properties. ",Object(r.b)("br",null),Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/bmddota/barebones/blob/source2/PhysicsReadme.txt"}),"Physics Readme")," to know what these do."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"-- Make the spirit a physics unit\nPhysics:Unit(unit)\n\n-- General properties\nunit:PreventDI(true)\nunit:SetAutoUnstuck(false)\nunit:SetNavCollisionType(PHYSICS_NAV_NOTHING)\nunit:FollowNavMesh(false)\nunit:SetPhysicsVelocityMax(spirit_speed)\nunit:SetPhysicsVelocity(spirit_speed * RandomVector(1))\nunit:SetPhysicsFriction(0)\nunit:Hibernate(false)\nunit:SetGroundBehavior(PHYSICS_GROUND_LOCK)\n")),Object(r.b)("p",null,"After this, we want to control the units behavior on each frame, making use of the OnPhysicsFrame function. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"-- This is set to repeat on each frame\nunit:OnPhysicsFrame(function(unit)\n\n    -- Move the unit orientation to adjust the particle\n    Unit:SetForwardVector( ( unit:GetPhysicsVelocity() ):Normalized() )\n\n    -- Movement and Collision detection are state independent\n\n    -- MOVEMENT \n    -- Get the direction\n    local diff = point - unit:GetAbsOrigin()\n    diff.z = 0\n    local direction = diff:Normalized()\n\n    -- Calculate the angle difference\n    local angle_difference = RotationDelta(VectorToAngles(unit:GetPhysicsVelocity():Normalized()), VectorToAngles(direction)).y\n        \n    -- Set the new velocity\n    if math.abs(angle_difference) < 5 then\n    -- CLAMP\n    local newVel = unit:GetPhysicsVelocity():Length() * direction\n    unit:SetPhysicsVelocity(newVel)\n    elseif angle_difference > 0 then\n    local newVel = RotatePosition(Vector(0,0,0), QAngle(0,10,0), unit:GetPhysicsVelocity())\n    unit:SetPhysicsVelocity(newVel)\n    else        \n    local newVel = RotatePosition(Vector(0,0,0), QAngle(0,-10,0), unit:GetPhysicsVelocity())\n    unit:SetPhysicsVelocity(newVel)\n    end\n\n    -- COLLISION CHECK\n    local distance = (point - current_position):Length()\n    local collision = distance < 50\n\n    -- STATE DEPENDENT LOGIC\n    -- Damage, Healing and Targeting are state dependent.\n    -- Check the full script on SpellLibrary\n")),Object(r.b)("p",null,"Last is to stop the units, very simple with this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"unit:SetPhysicsVelocity(Vector(0,0,0))\nunit:OnPhysicsFrame(nil)\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"For a different logic, check ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/MNoya/DotaCraft/blob/master/scripts/vscripts/heroes/crypt_lord/locust_swarm.lua"}),"Locust Swarm")," from ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/MNoya/DotaCraft"}),"DotaCraft"))," repository, it uses the same movement physics but has different acquire and return logic, to fit Warcraft 3 behavior."),Object(r.b)(a.a,{id:"TartSlowAfricangroundhornbill",mdxType:"Gfycat"}))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),r=n.n(i);function a({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0),r=n.n(i);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);