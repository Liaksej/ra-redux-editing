(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3886:function(e,t,r){Promise.resolve().then(r.bind(r,4744))},4744:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Home}});var n,a,d=r(2987),o=r(1738),l=r(4280);(n=a||(a={})).ADD="add",n.REMOVE="remove",n.EDIT="edit",n.EXTRACT_TO_FORM="extractToForm",n.CLEAR_FORM="clearForm";var s=r(7317),i=r(9634);function Form(){let e=(0,o.I0)(),t=(0,o.v9)(e=>e.list),r=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{t.editId&&r.current&&n.current&&(r.current.value=t.products.find(e=>e.id===t.editId).name,n.current.value=t.products.find(e=>e.id===t.editId).price)},[t.editId,t.products]),(0,d.jsxs)("form",{className:"w-full flex p-2 justify-between items-center gap-4 rounded-xl ".concat(!!t.editId&&"bg-yellow-500"),onSubmit:d=>(function(d){d.preventDefault();let o=new FormData(d.currentTarget),l=o.get("name"),s=o.get("price");return(r.current&&n.current&&(r.current.value="",n.current.value=""),t.editId)?e({type:a.EDIT,payload:{id:t.editId,name:l,price:Number(s)}}):e({type:a.ADD,payload:{id:(0,i.Z)(),name:l,price:Number(s)}})})(d),children:[(0,d.jsx)("input",{className:"w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500",name:"name",ref:r,placeholder:"Введите название",type:"text",required:!0}),(0,d.jsx)("input",{className:"w-1/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500",name:"price",ref:n,placeholder:"Введите цену",type:"text",required:!0}),(0,d.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300",type:"submit",children:t.editId?"Edit":"Save"})]})}var c=r(3501),u=r(2701);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.m)((0,c.W)(t))}let f=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("div",{className:"relative w-full overflow-auto",children:(0,d.jsx)("table",{ref:t,className:cn("w-full caption-bottom text-sm",r),...n})})});f.displayName="Table";let p=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("thead",{ref:t,className:cn("[&_tr]:border-b",r),...n})});p.displayName="TableHeader";let m=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("tbody",{ref:t,className:cn("[&_tr:last-child]:border-0",r),...n})});m.displayName="TableBody";let x=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("tfoot",{ref:t,className:cn("bg-primary font-medium text-primary-foreground",r),...n})});x.displayName="TableFooter";let b=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("tr",{ref:t,className:cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...n})});b.displayName="TableRow";let h=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("th",{ref:t,className:cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...n})});h.displayName="TableHead";let g=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("td",{ref:t,className:cn("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...n})});g.displayName="TableCell";let y=s.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,d.jsx)("caption",{ref:t,className:cn("mt-4 text-sm text-muted-foreground",r),...n})});y.displayName="TableCaption";var v=r(8981),j=r(8786);let w=(0,j.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),N=s.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:o=!1,...l}=e,s=o?v.g7:"button";return(0,d.jsx)(s,{className:cn(w({variant:n,size:a,className:r})),ref:t,...l})});N.displayName="Button";var R=r(1361),_=r.n(R);function List(){let e=(0,o.v9)(e=>e.list),t=(0,o.I0)();return e.products.length<1?null:(0,d.jsxs)(f,{children:[(0,d.jsx)(p,{children:(0,d.jsxs)(b,{children:[(0,d.jsx)(h,{className:"w-2/3 text-left",children:"Название"}),(0,d.jsx)(h,{className:"w-1/4",children:"Цена"}),(0,d.jsx)(h,{className:"text-right",children:"Действия"})]})}),(0,d.jsx)(m,{children:e.products.map(e=>(0,d.jsxs)(b,{children:[(0,d.jsx)(g,{className:"w-2/3 overflow-auto",children:e.name}),(0,d.jsx)(g,{children:String(e.price)}),(0,d.jsxs)(g,{className:"text-center flex gap-0.5",children:[(0,d.jsx)(N,{variant:"outline",size:"icon",type:"button",onClick:()=>t({type:a.EXTRACT_TO_FORM,payload:e.id}),children:(0,d.jsx)(_(),{src:"/edit_FILL0_wght400_GRAD0_opsz24.svg",width:20,height:20,alt:e.id})}),(0,d.jsx)(N,{variant:"outline",size:"icon",type:"button",onClick:()=>{t({type:a.REMOVE,payload:{id:e.id}})},children:(0,d.jsx)(_(),{src:"/delete_FILL0_wght400_GRAD0_opsz24.svg",width:20,height:20,alt:e.id})})]})]},e.id))})]})}function App(){return(0,d.jsxs)("div",{className:"w-2/3 mx-auto",children:[(0,d.jsx)(Form,{}),(0,d.jsx)(List,{})]})}let T=(0,l.jB)((0,l.UY)({list:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],editId:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ADD:return{...e,products:[...e.products,t.payload]};case a.REMOVE:return{...e,products:e.products.filter(e=>e.id!==t.payload.id)};case a.EDIT:return{...e,products:e.products.map(e=>e.id===t.payload.id?t.payload:e),editId:null};case a.EXTRACT_TO_FORM:return{...e,editId:t.payload};default:return e}}}));function Home(){return(0,d.jsx)(o.zt,{store:T,children:(0,d.jsx)(App,{})})}}},function(e){e.O(0,[590,195,338,744],function(){return e(e.s=3886)}),_N_E=e.O()}]);