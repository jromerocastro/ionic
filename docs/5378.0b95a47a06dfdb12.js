"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5378],{5378:(k,g,l)=>{l.r(g),l.d(g,{Tab2PageModule:()=>P});var a=l(5150),u=l(177),f=l(4341),C=l(1307),d=l(70),m=l(467),p=l(9348),b=l(1016),t=l(3953),T=l(3724);const v=e=>["/tabs/tab3",e];function j(e,s){if(1&e){const i=t.RV6();t.j41(0,"ion-item",9)(1,"ion-avatar",10),t.nrm(2,"img",11),t.k0s(),t.j41(3,"ion-label",12)(4,"h2"),t.EFF(5),t.k0s(),t.j41(6,"h3"),t.EFF(7),t.k0s(),t.j41(8,"p"),t.EFF(9),t.nI1(10,"date"),t.k0s()(),t.j41(11,"ion-badge"),t.EFF(12),t.k0s(),t.j41(13,"ion-button",13),t.nrm(14,"ion-icon",14),t.k0s(),t.j41(15,"ion-button",15),t.bIt("click",function(){const o=t.eBV(i).$implicit,r=t.XpG();return t.Njj(r.editar(o.com_id))}),t.nrm(16,"ion-icon",16),t.k0s(),t.j41(17,"ion-button",17),t.bIt("click",function(){const o=t.eBV(i).$implicit,r=t.XpG();return t.Njj(r.alertEliminar(o.com_id))}),t.nrm(18,"ion-icon",18),t.k0s(),t.j41(19,"ion-button",19),t.EFF(20,"Dark **************"),t.k0s()()}if(2&e){const i=s.$implicit;t.R7$(2),t.Mz_("src","assets/img/",i.com_estado,".png",t.B4B),t.R7$(3),t.JRh(i.com_titulo),t.R7$(2),t.JRh(i.com_descripcion),t.R7$(2),t.JRh(t.i5U(10,7,i.com_creacion,"y-MM-dd")),t.R7$(3),t.JRh(i.com_nombre),t.R7$(),t.Y8G("routerLink",t.eq3(10,v,i.com_id))}}const y=[{path:"",component:(()=>{var e;class s{constructor(n,o,r,c){this.loadingCtrl=n,this.modalCtrl=o,this.alertCtrl=r,this.router=c,this.comentarios=[]}ngOnInit(){this.cargarComentarios()}cargarComentarios(n){var o=this;return(0,m.A)(function*(){const r=yield o.loadingCtrl.create({message:"Cargando",spinner:"bubbles"});yield r.present(),yield(0,b.A)({method:"get",url:"https://sws.villahermosa.tecnm.mx/comentario",withCredentials:!0,headers:{Accept:"application/json"}}).then(h=>{o.comentarios=h.data,null==n||n.target.complete()}).catch(function(h){console.log(h)}),r.dismiss()})()}new(){var n=this;return(0,m.A)(function*(){const o=yield n.modalCtrl.create({component:p.A,breakpoints:[0,.3,.5,.95],initialBreakpoint:.95});yield o.present(),o.onDidDismiss().then(r=>{n.cargarComentarios()})})()}editar(n){var o=this;return(0,m.A)(function*(){const r=yield o.modalCtrl.create({component:p.A,componentProps:{com_id:n},breakpoints:[0,.3,.5,.95],initialBreakpoint:.95});yield r.present(),r.onDidDismiss().then(c=>{o.cargarComentarios()})})()}alertEliminar(n){var o=this;return(0,m.A)(function*(){yield(yield o.alertCtrl.create({header:"Alumno",subHeader:"Eliminar",message:"\xbfEst\xe1s seguro de eliminar el comentario?",cssClass:"alert-center",buttons:[{text:"Cancelar",role:"cancel"},{text:"Confirmar",role:"confirm",handler:()=>{o.eliminar(n)}}]})).present()})()}eliminar(n){var o=this;return(0,m.A)(function*(){yield(0,b.A)({method:"delete",url:"https://sws.villahermosa.tecnm.mx/comentarios/"+n,withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(c=>{204==(null==c?void 0:c.status)&&o.alertEliminado("El comentario ha sido eliminado")}).catch(function(c){console.log(c)})})()}alertEliminado(n=""){var o=this;return(0,m.A)(function*(){yield(yield o.alertCtrl.create({header:"Comentario",subHeader:"Eliminado",message:n,cssClass:"alert-center",buttons:[{text:"Continuar",role:"cancel"},{text:"Salir",role:"confirm",handler:()=>{o.regresar()}}]})).present()})()}regresar(){this.router.navigate(["/tabs/tab2"]).then(()=>{window.location.reload()})}}return(e=s).\u0275fac=function(n){return new(n||e)(t.rXU(a.Xi),t.rXU(a.W3),t.rXU(a.hG),t.rXU(d.Ix))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-tab2"]],decls:15,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["button","",4,"ngFor","ngForOf"],["name","Tab 2 page"],["slot","fixed","vertical","bottom","horizontal","center"],[3,"click"],["name","add"],["button",""],["slot","start"],["alt","Foto",3,"src"],[1,"ion-text-wrap"],[3,"routerLink"],["name","person-circle"],["color","warning",3,"click"],["name","pencil"],["color","danger",3,"click"],["name","trash"],["color","personalizado"]],template:function(n,o){1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3," Tab 2 "),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.EFF(8,"Tab 2"),t.k0s()()(),t.j41(9,"ion-list"),t.DNE(10,j,21,12,"ion-item",4),t.k0s(),t.nrm(11,"app-explore-container",5),t.j41(12,"ion-fab",6)(13,"ion-fab-button",7),t.bIt("click",function(){return o.new()}),t.nrm(14,"ion-icon",8),t.k0s()()()),2&n&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(6),t.Y8G("ngForOf",o.comentarios))},dependencies:[a.mC,a.In,a.Jm,a.W9,a.Q8,a.YW,a.eU,a.iq,a.uz,a.he,a.nf,a.BC,a.ai,a.N7,u.Sq,T.K,d.Wk,u.vh]}),s})()},{path:"tab3/:id",loadChildren:()=>l.e(2076).then(l.bind(l,5113)).then(e=>e.Tab3PageModule)}];let F=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[d.iI.forChild(y),d.iI]}),s})(),P=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.bv,u.MD,f.YN,C.S,F]}),s})()}}]);