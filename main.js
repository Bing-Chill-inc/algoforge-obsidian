var{defineProperty:L,getOwnPropertyNames:ie,getOwnPropertyDescriptor:re}=Object,oe=Object.prototype.hasOwnProperty;function se(e){return this[e]}var le=(e)=>{var t=(V??=new WeakMap).get(e),n;if(t)return t;if(t=L({},"__esModule",{value:!0}),e&&typeof e==="object"||typeof e==="function"){for(var i of ie(e))if(!oe.call(t,i))L(t,i,{get:se.bind(e,i),enumerable:!(n=re(e,i))||n.enumerable})}return V.set(e,t),t},V;var ae=(e)=>e;function ce(e,t){this[e]=ae.bind(null,t)}var ue=(e,t)=>{for(var n in t)L(e,n,{get:t[n],enumerable:!0,configurable:!0,set:ce.bind(t,n)})};var we={};ue(we,{default:()=>R});module.exports=le(we);var a=require("obsidian");var E=require("obsidian");var A=`<!doctype html>
<html lang="fr">

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>AlgoForge</title>
	<style>:root{--font-size1:1.4rem;--font-size2:1.2rem;--font-size3:1rem;--page-size:disabled}::-webkit-scrollbar-track{background:var(--bgColor)}::-webkit-scrollbar-thumb{background:var(--fgColor)}::-webkit-scrollbar-thumb:hover{background:var(--titleColor)}html{font-size:10px}*{scrollbar-color:var(--fgColor)var(--bgColorSecondary)}body{background-color:var(--bgColor);overflow:hidden;color:var(--fgColorForward);margin:0;padding:0}h1,h2,h3,h4,h5,h6{color:var(--titleColor);margin:0;padding:0}h1{font-size:var(--font-size1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:15px}#titreAlgo_wrapper{position:absolute;top:10px;left:15px}#titreAlgo_wrapper>span{outline:none;font-size:var(--font-size1);margin:0 5px 0 0}#titreAlgo_wrapper>span.sous-titre{color:var(--fgColorForward)}span{display:inline-block}canvas#canvas{position:absolute;z-index:-1;top:0;left:0}#logoAlgoForge{cursor:pointer}#logoAlgoForge:hover{scale:none}#logoAlgoForge:active{scale:.9}#boutonCompte{cursor:pointer;fill:var(--fgColor)}#boutonCompte:hover{fill:var(--fgColorHover);scale:none}#boutonCompte:active{fill:var(--titleColor);scale:.9}.elementIsOpen{fill:var(--titleColor)!important}editeur-interface{display:flex;background-color:var(--bgColor);flex-direction:column;align-items: center;width:calc(100vw - 30px);height:calc(100vh - 15px);padding:0 15px 15px}editeur-interface>header{background-color:var(--bgColor);display:flex;flex-direction:row;align-items: center;width:100%;height:-moz-fit-content;height:fit-content}editeur-interface>header>img,editeur-interface>header>svg{aspect-ratio:1;height:50px;margin:10px 10px 10px 0}editeur-interface>header>div.titreEtMenu{display:flex;flex-direction:column;justify-content:center;width:60%;height:90%;margin-left:2%}editeur-interface>header>div.titreEtMenu>div.menuButtons{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content}editeur-interface>header>div.titreEtMenu>div.menuButtons>button{font-size:var(--font-size1);color:var(--fgColor);cursor:pointer;position:relative;z-index:50;background:0 0;border:none;padding:0 2vw 0 0}editeur-interface>header>div.titreEtMenu>div.menuButtons>button>span{background-color:var(--bgColor);position:relative;width:100%;height:100%;padding:.05vw .1vw}editeur-interface>header>div.titreEtMenu>div.menuButtons>button>menu-deroulant{position:absolute;background-color:var(--bgColor);border:1px solid var(--borderColor2);display:flex;transform-origin:top left;box-shadow:0 0 .5vw var(--glowColor);border-radius:.8em;flex-direction:column;justify-content:center;gap:6px;min-width:-moz-fit-content;min-width:fit-content;height:-moz-fit-content;height:fit-content;min-height:1vw;padding:6px;transition:all .1s;top:20px;left:-5px;scale:0}menu-deroulant>element-menu,menu-deroulant>element-menu-compose,menu-deroulant>element-menu-keyboard-tip{text-align:left;white-space:nowrap;position:relative;display:flex;border-radius:.5em;justify-content:space-between;gap:10px;padding:4px}menu-deroulant>element-menu-keyboard-tip>p{margin:0;padding:0}menu-deroulant>element-menu:hover,menu-deroulant>element-menu-compose:hover,menu-deroulant>element-menu-keyboard-tip:hover{background-color:var(--fgColorHover);color:var(--bgColor)}element-menu-compose>span,menu-deroulant>element-menu-keyboard-tip>span{transition:all .5s}element-menu-keyboard-tip>span{opacity:.6}element-menu-compose:hover>span{position:absolute;right:2%;rotate:90deg}element-menu-compose>menu-deroulant{position:absolute;background-color:var(--bgColorTertiary);border:1px solid var(--borderColor2);color:var(--fgColor);display:flex;transform-origin:top left;border-radius:.8em;flex-direction:column;justify-content:center;gap:6px;min-width:-moz-fit-content;min-width:fit-content;padding:6px;transition:all .1s;top:0;left:97%;scale:0}element-menu-compose:hover>menu-deroulant,editeur-interface>header>div.titreEtMenu>div.menuButtons>button:hover>menu-deroulant{scale:1}element-menu.disabled,element-menu-compose.disabled,element-menu-keyboard-tip.disabled{cursor:not-allowed;color:var(--fgColorDisabled)}editeur-interface>header>div.titreEtMenu>div.menuButtons>button:hover>span{color:var(--fgColorHover);z-index:1}editeur-interface>header>div.zoneActionsCloud{display:flex;flex-direction:row;justify-content:flex-end;align-items: center;width:100%;height:100%}@keyframes ping{0%{transform:scale(1);opacity:.5}to{transform:scale(2);opacity:0}}#pingSauvegardeCloud{position:fixed;display:none}#pingSauvegardeCloud:before,#pingSauvegardeCloud:after{content:"";position:absolute;background-color:var(--errorColor);border-radius:50%;width:10px;height:10px;top:-23px;right:37px}#pingSauvegardeCloud:before{animation:1.7s infinite ping}editeur-interface>header>div.zoneActionsCloud>button{display:flex;fill:var(--fgColor);cursor:pointer;font-size:var(--font-size3);color:var(--fgColor);display:none;background:0 0;border:none;flex-direction:column;justify-content:center;align-items: center;gap:5px;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;margin-top:4px;margin-right:20px}editeur-interface>header>div.zoneActionsCloud>button:hover{fill:var(--fgColorHover);color:var(--fgColorHover);scale:none}editeur-interface>header>div.zoneActionsCloud>button:active{fill:var(--titleColor);color:var(--titleColor);scale:.9}editeur-interface>header>div.zoneActionsCloud>button>label{cursor:pointer;color:inherit;font-size:inherit}editeur-interface>header>div.zoneActionsCloud>button>svg{fill:inherit;background:0 0;width:20px;height:20px}select#theme,select#indicateursPage{border:1px solid var(--borderColor);color:var(--fgColor);cursor:pointer;text-align:center;appearance:none;-webkit-appearance:none;-moz-appearance:none;text-align-last:center;box-sizing:border-box;background-color:#0000;border-radius:30px;width:100%;padding:10px 30px 10px 10px;transition:background-color .2s;font-weight:500}select#theme>option,select#indicateursPage>option{background-color:var(--bgColor);color:var(--fgColor)}select#theme{display:none}select#indicateursPage{display:block}select#indicateursPage:hover,select#theme:hover{background-color:var(--fgColorTransparent)}select#indicateursPage:focus,select#theme:focus{outline:none}#boutonPointeur,#boutonStructureIterative,#boutonConditionSortie,#boutonLien,#boutonUndo,#boutonRedo,#dico_btn>svg#boutonDico,#biblio_btn>svg#boutonBiblio{fill:var(--fgColor);user-select:none;cursor:pointer;width:24px;height:24px}#boutonProbleme,#boutonProcedure,#boutonAccount,#boutonStructureSi,#boutonStructureSwitch{fill:var(--fgColor);user-select:none;cursor:pointer;width:34px;height:34px}#boutonStructureIterativeBornee{fill:var(--fgColor);user-select:none;cursor:pointer;width:28px;height:28px}#boutonRedo,#boutonUndo,#boutonBiblio,#boutonDico{transition:all .1s ease-in-out}#biblio_btn>#boutonBiblio:hover,#dico_btn>svg#boutonDico:hover,.undoRedo>svg:hover{scale:1.1;fill:var(--fgColorHover)!important}#biblio_btn>#boutonBiblio:active,#dico_btn>svg#boutonDico:active,.undoRedo>svg:active{scale:1}.svg-wrapper{position:relative}#dicobiblioControl>button:hover,#dico-table tbody tr:hover,#itemsControl>.svg-wrapper:hover{--label-opacity:1;--label-y:0;--label-delay:.15s;--label-scale:1}#dicobiblioControl>button:focus-visible{--label-opacity:1;--label-y:0;--label-delay:.15s;--label-scale:1}#itemsControl>.svg-wrapper:focus-visible{--label-opacity:1;--label-y:0;--label-delay:.15s;--label-scale:1}#dicobiblioControl>button:before,#itemsControl>.svg-wrapper:before{content:attr(data-title);position:absolute;text-align:center;background:var(--bgColor);color:var(--fgColor);border:1px solid var(--borderColor2);z-index:-1;white-space:nowrap;font-size:var(--font-size2);pointer-events:none;opacity:var(--label-opacity,0);translate:-50% -2.5rem;transform:translateY(var(--label-y,30px))scale(var(--label-scale,0));transition:transform .3s cubic-bezier(.47,1.64,.41,.8),opacity .3s ease-in-out,scale .5s ease-in-out;transition-delay:var(--label-delay,0s);border-radius:.6em;padding:.3rem 1rem;bottom:100%;left:50%}editeur-interface>div.barreOutilsHorizontale{display:flex;position:absolute;z-index:4;flex-direction:row;justify-content:center;align-items: center;gap:4%;width:-moz-fit-content;width:fit-content;height:40px;bottom:46px}#itemsControl,#actionsControl,#dicobiblioControl{display:flex;background:var(--bgColorTertiary);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);outline:1px solid var(--borderColor2);border:none;border-radius:.6em;justify-content:center;align-items: center;gap:1em;height:100%;padding:0 1em}.undoRedo{display:flex;display:flex;justify-content:center;align-items: center;gap:.8em}editeur-interface>div.barreOutilsHorizontale>img{aspect-ratio:1;cursor:pointer;overflow:visible;height:90%;padding-left:.2vw;padding-right:.2vw}img.dragging{scale:1.5}#itemsControl>div>svg.selected{border-radius:.3vw;scale:1.2;fill:var(--titleColor)!important}#itemsControl>div>svg:hover{fill:var(--fgColorHover)}#actionsControl>div>svg:hover{fill:var(--fgColorHover);scale:1.1}#itemsControl>div>svg.selected:hover{scale:1.2}editeur-interface>div.barreOutilsHorizontale>div.undoRedo{display:flex;flex-direction:row;justify-content:space-between;align-items: center;width:5%;height:100%}#titre_wrapper{position:absolute;top:20vh;left:30px}editeur-interface>div.barreOutilsHorizontale>div.undoRedo>img{aspect-ratio:1;cursor:pointer;overflow:visible;height:80%;padding-left:.2vw;padding-right:.2vw}#biblio_btn,#dico_btn{position:relative;background-color:#0000;border:none}#dico_wrapper,#biblio_wrapper{position:absolute;border:none;border-radius:.8em;top:45px;left:30px}dictionnaire-donnee{display:flex;font-size:var(--font-size1);transform-origin:left;flex-direction:column;justify-content:start;align-items: center;width:2vw;height:2vw;transition:all .2s}dictionnaire-donnee:hover{transform-origin:center;scale:1.15 1}dictionnaire-donnee.ouvert{display:flex;flex-direction:column;justify-content:flex-start;align-items: center;gap:20px;width:50vw;min-width:400px;height:70vh;min-height:15vw}dictionnaire-donnee.ouvert:hover{scale:1}dictionnaire-donnee>span.raffraichir{position:absolute;aspect-ratio:1;color:var(--fgColor);cursor:pointer;user-select:none;padding:10px;transition:all .2s;font-size:30px;line-height:5px;top:0;right:30px}dictionnaire-donnee>span.raffraichir:hover{color:var(--fgColorHover)}dictionnaire-donnee>span.raffraichir:active{scale:.9}dictionnaire-donnee>span.raffraichir.rotation{rotate:360deg}dictionnaire-donnee>span.fermeture{position:absolute;aspect-ratio:1;color:var(--fgColor);cursor:pointer;user-select:none;padding:10px;font-size:20px;line-height:8px;top:0;right:0}dictionnaire-donnee>span.fermeture:hover{color:var(--fgColorHover)}dictionnaire-donnee>span.fermeture:active{scale:.9}dictionnaire-donnee>#tableDictionnaireDonnee{overflow-y:scroll;display:flex;scrollbar-width:none;flex-direction:column;justify-content:start;align-items: center;width:100%;height:100%}dictionnaire-donnee>#tableDictionnaireDonnee>th{display:flex;border-bottom:.1vw solid var(--borderColor2);flex-direction:row;justify-content:space-between;align-items: center;width:95%;height:5vw;min-height:5vw}dictionnaire-donnee>#tableDictionnaireDonnee>th>td{display:flex;border-right:.1vw solid var(--borderColor2);color:var(--fgColor);flex-direction:row;justify-content:start;align-items: center;width:100%;height:100%;margin-left:1%;font-weight:500}dictionnaire-donnee>#tableDictionnaireDonnee>th>td:last-child{border-right:none;width:150%}dictionnaire-donnee>#tableDictionnaireDonnee>tr{display:flex;border-bottom:.1vw solid var(--fgColorSemiTransparent);flex-direction:row;justify-content:space-between;align-items: center;width:95%;height:3vw;min-height:3vw}dictionnaire-donnee>#tableDictionnaireDonnee>tr>td{display:flex;border-right:.1vw solid var(--borderColor2);cursor:text;overflow-x:hidden;word-wrap:anywhere;flex-direction:row;justify-content:start;align-items: center;width:100%;height:100%;margin-left:1%}dictionnaire-donnee>#tableDictionnaireDonnee>tr>td:last-child{border-right:none;width:150%}dictionnaire-donnee>#tableDictionnaireDonnee>tr.ajout{opacity:.75}dictionnaire-donnee>#tableDictionnaireDonnee>tr>td>select.selectType{color:var(--fgColor);font-size:var(--font-size3);cursor:pointer;background-color:#0000;border:none;width:100%;height:100%}dictionnaire-donnee>#tableDictionnaireDonnee>tr>td>select.selectType:hover{text-shadow:0 0 .3vw var(--glowColor);color:var(--fgColorHover)}bibliotheque-algorithmique{display:flex;font-size:var(--font-size2);transform-origin:left;position:relative;flex-direction:column;justify-content:start;align-items: end;padding:.5vw;transition:all .2s}bibliotheque-algorithmique:before{content:"";position:absolute;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);z-index:-1;border-radius:inherit;width:100%;height:100%;top:0;left:0}bibliotheque-algorithmique:hover{transform-origin:center;scale:1.15 1}bibliotheque-algorithmique.ouvert{background:var(--bgColorTertiary);outline:1px solid var(--borderColor2);border-radius:.8em;width:25vw;min-width:300px;height:-moz-fit-content;height:fit-content;min-height:100px;max-height:calc(100vh - 230px)}bibliotheque-algorithmique.ouvert:hover{scale:1}bibliotheque-algorithmique>.header{display:flex;flex-direction:row-reverse;justify-content:space-between;align-items: center;width:100%;height:-moz-fit-content;height:fit-content}.fermetureBibliotheque{color:var(--fgColor);cursor:pointer;user-select:none;margin:10px;font-size:20px;rotate:180deg}.fermetureBibliotheque:hover{color:var(--fgColorHover)}.fermetureBibliotheque:active{scale:.9}bibliotheque-algorithmique>div.listeCategories{overflow-y:scroll;overflow-x:hidden;display:flex;scrollbar-width:thin;flex-direction:column;justify-content:start;align-items: start;width:calc(100% - 40px + .5vw);height:99%;margin:10px 0 0 20px;padding-right:20px}bibliotheque-algorithmique>div.listeCategories>div.categorie{display:flex;border-bottom:1px solid var(--fgColor);flex-direction:column;justify-content:start;align-items: start;width:100%;height:100%;margin:5px 0;transition:all .2s}bibliotheque-algorithmique>div.listeCategories>div.categorie>h3{position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;font-size:var(--font-size1);flex-direction:row;justify-content:start;align-items: center;width:100%;height:100%;margin-bottom:5px}bibliotheque-algorithmique>div.listeCategories>div.categorie>h3>div.flecheOuverture{font-size:var(--font-size1);position:absolute;transition:all .2s;top:-2px;right:5px;scale:2}bibliotheque-algorithmique>div.listeCategories>div.categorie.ouvert>h3>div.flecheOuverture{rotate:90deg}bibliotheque-algorithmique>div.listeCategories>div.categorie.ouvert{height:-moz-fit-content;height:fit-content}bibliotheque-algorithmique>div.listeCategories>div.categorie>div.listeAlgorithmes{display:none}bibliotheque-algorithmique>div.listeCategories>div.categorie.ouvert>div.listeAlgorithmes{display:flex;flex-flow:wrap;justify-content:start;align-items: start;width:100%;margin:5px 0}bibliotheque-algorithmique>div.listeCategories>div.categorie.ouvert>div.listeAlgorithmes>.algorithmeBibliotheque{border:.1vw solid var(--fgColor);color:var(--fgColor);cursor:grab;position:relative;border-radius:.75vw;margin:.5vw;padding:.5vw .5vw .5vw 20px;transition:border .6s,box-shadow .6s,color .3s,background-color .3s}bibliotheque-algorithmique>div.listeCategories>div.categorie.ouvert>div.listeAlgorithmes>.algorithmeBibliotheque:hover{color:var(--bgColor);background-color:var(--fgColorHover);border:.1vw solid var(--fgColorForward);box-shadow:0 0 .5vw var(--fgColor)}.algorithmeBibliotheque:active{cursor:grabbing!important}.algorithmeBibliotheque:after{--color-icon-drag:var(--fgColor);content:".";position:absolute;color:var(--color-icon-drag);text-shadow:0px -5px var(--color-icon-drag),0px -10px var(--color-icon-drag),-5px -10px var(--color-icon-drag),-5px -5px var(--color-icon-drag),-5px 0px var(--color-icon-drag);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;font-size:20px;line-height:20px;top:50%;left:10px;transform:translateY(-50%)}.algorithmeBibliotheque:hover:after{--color-icon-drag:var(--bgColor);transition:all .1s}.searchBibliotheque{position:relative;display:flex;box-shadow:0px 4px 10px var(--fgColorSemiTransparent);overflow:hidden;background-color:var(--bgColor);border-radius:10px;align-items: center;width:80%;max-width:400px;margin:5px 10px}.searchTermBibliotheque{outline:none;background-color:var(--bgColor);color:var(--fgColor);border:none;border-radius:10px 0 0 10px;width:calc(100% - 65px);padding:5px;font-size:12px}.searchTermBibliotheque::placeholder{color:var(--fgColorDisabled);font-style:italic}.searchButtonBibliotheque{background:var(--bgColor);display:flex;border:none;border-radius:0 10px 10px 0;justify-content:center;align-items: center;padding:5px;transition:background-color .3s}#searchButtonSVGBibliotheque{fill:var(--titleColor);width:24px;height:24px}.highlightAlgorithmeBibliotheque{background-color:var(--fgColorSemiTransparent)}.clearButtonSearchBibliotheque{position:absolute;cursor:pointer;color:var(--fgColor);user-select:none;padding:0 5px;font-size:16px;right:5px}.clearButtonSearchBibliotheque:hover{color:var(--fgColorHover)}.clearButtonSearchBibliotheque:active{scale:.9}bibliotheque-algorithmique>div.previewAlgo{overflow-y:scroll;position:absolute;overflow-x:hidden;background:var(--bgColor);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);outline:1px solid var(--borderColor2);border-radius:.8em;width:40vw;height:-moz-fit-content;height:fit-content;min-height:100px;max-height:calc(100vh - 230px);padding:.5vw;top:0;right:-42vw}bibliotheque-algorithmique>div.previewAlgo>h4{font-size:var(--font-size1)}bibliotheque-algorithmique>div.previewAlgo>h4,bibliotheque-algorithmique>div.previewAlgo>p{white-space:wrap;word-wrap:break-word;width:calc(100% - 40px);margin:auto}bibliotheque-algorithmique>div.previewAlgo>p{display:block;font-size:var(--font-size2)}bibliotheque-algorithmique>div.previewAlgo>plan-travail{position:relative;overflow:hidden;border:none;width:25vw;height:15vw;margin:34px auto 0}bibliotheque-algorithmique>div.previewAlgo>plan-travail>ligne-element{border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor)}bibliotheque-algorithmique>div.previewAlgo>plan-travail *{font-size:calc(var(--sizeModifier)*1vw)!important}bibliotheque-algorithmique>div.previewAlgo>plan-travail label.accolades{font-size:calc(var(--sizeModifier)*4vw)!important}invite-nouvelle-bibliotheque{position:fixed;aspect-ratio:1;background-color:var(--bgColorTertiary);box-shadow:0 0 1vw var(--glowColor);display:flex;z-index:2048;backdrop-filter:blur(5px);outline:1px solid var(--borderColor2);border-radius:12px;flex-direction:column;justify-content:center;align-items: center;width:30vw;min-width:-moz-fit-content;min-width:fit-content;max-width:500px;padding-top:10px;padding-bottom:10px;top:50vh;left:50vw;translate:-50% -50%}invite-nouvelle-bibliotheque>h2{font-size:calc(var(--font-size1)*1.5);text-align:center;color:var(--titleColor);margin:5px 20px 20px;padding:0 10px}invite-nouvelle-bibliotheque>label{color:var(--titleColor);display:flex;font-size:var(--font-size2);flex-direction:column;width:100%;margin-top:10px;margin-left:13%;font-weight:700}invite-nouvelle-bibliotheque>label>input{font-size:var(--font-size2);border:1px solid var(--fgColor);background-color:var(--bgColor);color:var(--fgColor);border-radius:5px;width:80%;height:-moz-fit-content;height:fit-content;min-height:10%;margin-top:5px;padding:5px}invite-nouvelle-bibliotheque>label>div{font-size:var(--font-size2);border:1px solid var(--fgColor);background-color:var(--bgColor);color:var(--fgColor);overflow-y:scroll;border-radius:5px;width:80%;height:-moz-fit-content;height:fit-content;min-height:10%;max-height:100px;margin-top:5px;padding:5px;font-weight:400}invite-nouvelle-bibliotheque>label>div[placeholder]:empty:before{content:attr(placeholder);color:var(--fgColorDisabled);font-weight:400}invite-nouvelle-bibliotheque>label>p.errorMessage{color:var(--errorColor);font-size:var(--font-size2);pointer-events:none;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;margin:5px 0 0;font-weight:400}invite-nouvelle-bibliotheque>.actionButtons{display:flex;flex-direction:row;justify-content:space-evenly;align-items: center;gap:10px;width:100%;height:-moz-fit-content;height:fit-content;margin-top:auto;padding-top:10px}invite-nouvelle-bibliotheque>.actionButtons>button{margin:5px}.primaryButton{color:var(--bgColor);background-color:var(--titleColor);border:1px solid var(--fgColor);cursor:pointer;position:relative;border-radius:5px;padding:5px 10px;transition:border .6s,box-shadow .6s,color .3s,background-color .3s}.secondaryButton{color:var(--fgColor);background-color:var(--bgColorTertiary);border:1px solid var(--fgColor);cursor:pointer;position:relative;border-radius:5px;padding:5px 10px;transition:border .6s,box-shadow .6s,color .3s,background-color .3s}.primaryButton:hover,.secondaryButton:hover{color:var(--bgColor);background-color:var(--fgColorHover);border:1px solid var(--fgColorForward);box-shadow:0 0 5px var(--fgColor)}invite-nouvelle-bibliotheque>div.previewAlgo{background-color:var(--bgColor);border:1px solid var(--fgColor);display:flex;opacity:.75;position:relative;border-radius:5px;flex-direction:column;justify-content:start;align-items: center;width:25vw;height:-moz-fit-content;height:fit-content;padding:5px}invite-nouvelle-bibliotheque>div.previewAlgo>div.divTransparent{background-color:var(--bgColorTransparent);position:absolute;z-index:500000;width:100%;height:100%;top:0;left:0}invite-nouvelle-bibliotheque>div.previewAlgo>plan-travail{position:relative;overflow:hidden;border:none;width:25vw;min-width:-moz-fit-content;min-width:fit-content;max-width:500px;height:15vw;min-height:-moz-fit-content;min-height:fit-content;max-height:700px}invite-nouvelle-bibliotheque>div.previewAlgo>plan-travail>ligne-element{border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor)}invite-nouvelle-bibliotheque>div.previewAlgo>plan-travail *{font-size:calc(var(--sizeModifier)*1vw)!important}invite-nouvelle-bibliotheque>div.previewAlgo>plan-travail label.accolades{font-size:calc(var(--sizeModifier)*4vw)!important}.noActionsElementMenu{pointer-events:none}menu-contextuel{position:fixed;display:flex;z-index:2048;font-size:var(--font-size1);background:var(--bgColorTertiary);outline:1px solid var(--borderColor2);color:var(--fgColor);cursor:pointer;border-radius:10px;flex-direction:column;gap:6px;width:180px;min-width:-moz-fit-content;min-width:fit-content;height:-moz-fit-content;height:fit-content;min-height:2vw;padding:6px}menu-contextuel:before{content:"";position:absolute;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);z-index:-1;border-radius:inherit;width:100%;height:100%;top:0;left:0}menu-contextuel>element-menu-compose>span,menu-deroulant>element-menu-compose>span{margin-right:5px}menu-contextuel>element-menu,menu-contextuel>element-menu-compose,menu-contextuel>element-menu-keyboard-tip,element-menu-compose:hover>menu-deroulant>element-menu,element-menu-compose:hover>menu-deroulant>element-menu-compose,element-menu-compose:hover>menu-deroulant>element-menu-keyboard-tip{text-align:left;white-space:nowrap;position:relative;display:flex;border-radius:10px;justify-content:space-between;gap:10px;padding:6px}menu-contextuel>element-menu-keyboard-tip>p,element-menu-compose:hover>menu-deroulant>element-menu-keyboard-tip>p{margin:0;padding:0}menu-contextuel>element-menu:hover,menu-contextuel>element-menu-compose:hover,menu-contextuel>element-menu-keyboard-tip:hover{background-color:var(--fgColorHover);color:var(--bgColor)}menu-contextuel>element-menu-compose>span,menu-contextuel>element-menu-keyboard-tip>span{transition:all .5s}menu-contextuel>element-menu-compose:hover>span{position:absolute;right:2%;rotate:90deg}menu-contextuel>element-menu-compose:hover>menu-deroulant{display:flex;z-index:999999;overflow:hidden;background:var(--bgColorTertiary);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid var(--borderColor2);border-radius:10px;flex-direction:column;gap:0;width:15vw;height:-moz-fit-content;height:fit-content;min-height:2vw;padding:6px;scale:1}menu-contextuel>element-menu-compose:hover>menu-deroulant>h3{text-align:left;white-space:nowrap;width:95%;padding-top:6px;padding-bottom:6px;padding-left:5%}indicateur-zoom{display:flex;justify-content:space-around;align-items: center;gap:1px;width:10vw;height:3vw}indicateur-zoom>.zoomDisplay{display:flex;color:var(--fgColor);justify-content:center;align-items: center;width:100%;height:100%;font-size:16px}indicateur-zoom>button{color:var(--fgColor);cursor:pointer;display:flex;background:0 0;border:none;justify-content:center;align-items: center;width:100%;height:100%;transition:all .2s;font-size:26px}indicateur-zoom>button:hover{color:var(--fgColorHover);scale:1.2}indicateur-zoom>button:active{color:var(--fgColorHover);scale:1}.pointePourLien{padding-bottom:10px;border-bottom:5px solid var(--titleColor)!important}selection-editeur{position:absolute;border:.1vw solid var(--fgColorForward);transition:all var(--transitionTime)ease;z-index:auto;border-style:dashed;border-radius:.5vw}selection-simple{position:absolute;border:.1vw solid var(--fgColorForward);transition:all var(--transitionTime)ease;z-index:auto;border-style:dotted;border-radius:.5vw;padding:.75vw;transform:translate(-.5vw,-.5vw)}selection-rectangle{position:absolute;border:.1vw solid var(--fgColorForward);transition:all var(--transitionTime)ease;z-index:auto;background-color:var(--fgColorTransparent);box-shadow:0 0 1vw var(--fgColorSemiTransparent);border-style:dashed;border-radius:.1vw;padding:0}[contenteditable=true]{white-space:pre-wrap}fenetre-modale{position:fixed;background-color:var(--fgColorSemiTransparent);opacity:.9;z-index:4294970000;width:100vw;height:100vh;top:0;left:0}fenetre-modale>div.contenu{position:absolute;background-color:var(--bgColor);border:.1vw solid var(--fgColor);display:flex;overflow-y:scroll;border-radius:.5vw;flex-direction:column;justify-content:start;align-items: center;width:-moz-fit-content;width:fit-content;min-width:25vw;max-width:75vw;height:-moz-fit-content;height:fit-content;min-height:25vh;max-height:75vh;padding:2vw;top:50%;left:50%;translate:-50% -50%}fenetre-modale>div.contenu>button.fermer{position:absolute;cursor:pointer;background-color:var(--fgColor);color:var(--bgColor);border:none;border-radius:.5vw;width:2vw;height:2vw;font-size:1vw;top:.2vw;right:.2vw}fenetre-modale>div.contenu>button.fermer:hover{background-color:var(--fgColorForward)}plan-travail{display:flex;position:relative;overflow:scroll;scrollbar-width:10;scrollbar-color:var(--fgColor)transparent;width:calc(100% - 4px);height:calc(100% - 4px);margin:34px 0 0}#espacePrincipal_wrapper{background-color:var(--bgColorSecondary);overflow:hidden;z-index:1;border-radius:.6em;align-content: center;align-self: center;width:calc(100% - 4px);height:calc(100% - 4px)}sous-plan-travail{position:absolute;overflow:scroll;background-color:var(--bgColorSecondary);z-index:2;border-radius:.8em;width:calc(100% - 4px);height:calc(100% - 36px);transition:all .2s;top:34px;left:2px;scale:0}sous-plan-travail.ouvert{transform-origin:top;scale:1}sous-plan-travail>span.fermeture{position:absolute;aspect-ratio:1;color:var(--fgColor);cursor:pointer;user-select:none;padding:10px;font-size:20px;line-height:8px;top:0;left:0}sous-plan-travail>span.fermeture:hover{color:var(--fgColorHover)}sous-plan-travail>span.fermeture:active{scale:.9}probleme-element{display:flex;width:calc(var(--sizeModifier)*30vw);position:absolute;transition:all var(--transitionTime)ease;z-index:2;flex-direction:column;justify-content:center;align-items: center;height:-moz-fit-content;height:fit-content}probleme-element>span.ouvrir{position:absolute;bottom:calc(var(--sizeModifier)*.5vw);right:calc(var(--sizeModifier)*10.5vw);width:calc(var(--sizeModifier)*.75vw);height:calc(var(--sizeModifier)*.75vw);background-color:var(--fgColorTransparent);border:.1vw solid var(--fgColor);border-radius:calc(var(--sizeModifier)*.25vw);font-size:calc(var(--sizeModifier)*.75vw);cursor:pointer;display:flex;justify-content:center;align-items: center}probleme-element>div.containerDPR{height:calc(var(--sizeModifier)*4vw);display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:calc(var(--sizeModifier)*.2vw);place-items: center;width:100%}probleme-element>div.containerDPR>div.donnees{width:calc(var(--sizeModifier)*10vw);height:calc(var(--sizeModifier)*4vw);display:flex;justify-content:right;align-items: center;column-gap:calc(var(--sizeModifier)*.2vw);grid-column:1;flex-direction:row;place-items: center}probleme-element>div.containerDPR>div.donnees>label.accolades{font-size:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);width:calc(var(--sizeModifier)*1.5vw);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);user-select:none;line-height:.9;transform:scaleX(.75)}probleme-element>div.containerDPR>div.donnees>div.donneesEditable{min-width:calc(var(--sizeModifier)*1vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;resize:none;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);background:0 0;border:none;flex-direction:column;justify-content:center;align-items: center}probleme-element>div.containerDPR>div.donnees>div.donneesEditable:focus-visible{outline:none}probleme-element>div.containerDPR>div.donnees:hover>label.accolades{display:block!important}probleme-element>div.containerDPR>div.nom{width:calc(var(--sizeModifier)*10vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);text-align:center;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;background-color:var(--bgColor);box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);flex-direction:column;justify-content:center;align-items: center}probleme-element>div.containerDPR>div.nom:focus-visible{outline:none;box-shadow:0 0 calc(var(--sizeModifier)*1.8vw)var(--glowColor)}probleme-element>div.containerDPR>div.resultat{width:calc(var(--sizeModifier)*10vw);height:calc(var(--sizeModifier)*4vw);display:flex;justify-content:left;align-items: center;column-gap:calc(var(--sizeModifier)*.2vw);grid-column:3;flex-direction:row;place-items: center}probleme-element>div.containerDPR>div.resultat>label.accolades{font-size:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);width:calc(var(--sizeModifier)*1.5vw);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);user-select:none;line-height:.9;transform:scaleX(.75)}probleme-element>div.containerDPR>div.resultat>div.resultatEditable{min-width:calc(var(--sizeModifier)*1vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;resize:none;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);background:0 0;border:none;flex-direction:column;justify-content:center;align-items: center}probleme-element>div.containerDPR>div.resultat>div.resultatEditable:focus-visible{outline:none}probleme-element>div.containerDPR>div.resultat:hover>label.accolades{display:block!important}procedure-element{display:flex;width:calc(var(--sizeModifier)*30vw);position:absolute;transition:all var(--transitionTime)ease;z-index:2;flex-direction:column;justify-content:center;align-items: center;height:-moz-fit-content;height:fit-content}procedure-element>div.containerDPR{height:calc(var(--sizeModifier)*4vw);display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:calc(var(--sizeModifier)*.2vw);place-items: center;width:100%}procedure-element>div.containerDPR>div.donnees{width:calc(var(--sizeModifier)*10vw);height:calc(var(--sizeModifier)*4vw);display:flex;justify-content:right;align-items: center;column-gap:calc(var(--sizeModifier)*.2vw);grid-column:1;flex-direction:row;place-items: center}procedure-element>div.containerDPR>div.donnees>label.accolades{font-size:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);width:calc(var(--sizeModifier)*1.5vw);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);user-select:none;line-height:.9;transform:scaleX(.75)}procedure-element>div.containerDPR>div.donnees>div.donneesEditable{min-width:calc(var(--sizeModifier)*1vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;resize:none;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);background:0 0;border:none;flex-direction:column;justify-content:center;align-items: center}procedure-element>div.containerDPR>div.donnees>div.donneesEditable:focus-visible{outline:none}procedure-element>div.containerDPR>div.donnees:hover>label.accolades{display:block!important}procedure-element>div.containerDPR>div.nom{width:calc(var(--sizeModifier)*8vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);text-align:center;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;background-color:var(--bgColor);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);flex-direction:column;justify-content:center;align-items: center}procedure-element>div.containerDPR>div.nom:focus-visible{outline:none}procedure-element>div.containerDPR>div.nom:before{position:absolute;content:"";transform:translateX(calc(var(--sizeModifier)*-4.5vw));width:calc(var(--sizeModifier)*.8vw);height:calc(var(--sizeModifier)*4vw);border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);background-color:var(--bgColor);z-index:-1;border-right:none}procedure-element>div.containerDPR>div.nom:after{position:absolute;content:"";transform:translateX(calc(var(--sizeModifier)*4.5vw));width:calc(var(--sizeModifier)*.8vw);height:calc(var(--sizeModifier)*4vw);border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);background-color:var(--bgColor);z-index:-1;border-left:none}procedure-element>div.containerDPR>div.resultat{width:calc(var(--sizeModifier)*10vw);height:calc(var(--sizeModifier)*4vw);display:flex;justify-content:left;align-items: center;column-gap:calc(var(--sizeModifier)*.2vw);grid-column:3;text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);flex-direction:row;place-items: center}procedure-element>div.containerDPR>div.resultat>label.accolades{font-size:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);width:calc(var(--sizeModifier)*1.5vw);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);user-select:none;line-height:.9;transform:scaleX(.75)}procedure-element>div.containerDPR>div.resultat>div.resultatEditable{min-width:calc(var(--sizeModifier)*1vw);height:calc(var(--sizeModifier)*4vw);grid-column:2;resize:none;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;background:0 0;border:none;flex-direction:column;justify-content:center;align-items: center}procedure-element>div.containerDPR>div.resultat>div.resultatEditable:focus-visible{outline:none}procedure-element>div.containerDPR>div.resultat:hover>label.accolades{display:block!important}symbole-decomposition-element{position:absolute;transition:all var(--transitionTime)ease;width:calc(var(--sizeModifier)*1vw);height:calc(var(--sizeModifier)*1.5vw);border-left:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-right:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-bottom:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor)}structure-si-element{display:grid;grid-template-columns:0px 1fr 0px;grid-template-rows:1fr;height:calc(var(--sizeModifier)*4vw);position:absolute;transition:all var(--transitionTime)ease;z-index:2;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);place-content: center;place-items: center;width:-moz-fit-content;width:fit-content}structure-si-element>div.triangle{color:#0000;display:flex;user-select:none;cursor:pointer;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);flex-direction:row;justify-content:center;align-items: center;font-size:3vw}structure-si-element>div.triangle:hover{color:var(--fgColorForward);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor)}structure-si-element>div.triangleGauche{width:calc(var(--sizeModifier)*2.82843vw);height:calc(var(--sizeModifier)*2.82843vw);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-left:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);grid-column:1;background-color:var(--bgColor);transform:translate(-2%,2%)rotate(-45deg)}structure-si-element>div.triangleGauche>span{transform:translate(-.7vw)}structure-si-element>div.conditionContainer{display:flex;height:inherit;grid-column:2;flex-direction:row;width:-moz-fit-content;width:fit-content}structure-si-element>div.conditionContainer>condition-element{width:calc(var(--sizeModifier)*10vw);height:inherit;display:flex;background-color:var(--bgColor);border-right:calc(var(--sizeModifier)*.05vw)solid var(--fgColor);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-bottom:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);flex-direction:column;justify-content:center;align-items: center}structure-si-element>div.triangleDroit{width:calc(var(--sizeModifier)*2.82843vw);height:calc(var(--sizeModifier)*2.82843vw);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-right:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);grid-column:3;background-color:var(--bgColor);transform:translate(2%,2%)rotate(45deg)}structure-si-element>div.triangleDroit>span{transform:translate(.7vw)}structure-switch-element{display:grid;grid-template-columns:0px 1fr 0px;grid-template-rows:1fr 1fr;height:calc(var(--sizeModifier)*4vw);position:absolute;transition:all var(--transitionTime)ease;background-color:var(--bgColor);z-index:2;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);place-content: center;place-items: center;width:-moz-fit-content;width:fit-content}structure-switch-element>div.triangle{color:#0000;display:flex;user-select:none;cursor:pointer;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);flex-direction:row;justify-content:center;align-items: center;font-size:2vw}structure-switch-element>div.triangle:hover{color:var(--fgColorForward);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor)}structure-switch-element>div.triangleGauche{width:calc(var(--sizeModifier)*2.82843vw);height:calc(var(--sizeModifier)*2.82843vw);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-left:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);grid-column:1;grid-row:1/3;background-color:var(--bgColor);transform:translate(-2%,2%)rotate(-45deg)}structure-switch-element>div.triangleGauche>span{transform:translate(-.7vw,30%)}structure-switch-element>hr.diviseurGauche{width:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*.05vw);grid-column:1;grid-row:1/3;background-color:var(--fgColor);z-index:1;border:0;transform:translate(-50%)}structure-switch-element>div.expressionATester{grid-column:2;grid-row:1;resize:none;border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);text-align:center;font-size:calc(var(--sizeModifier)*.75vw);display:flex;word-wrap:break-word;overflow:hidden;background-color:var(--bgColor);z-index:10;border-left:0;border-right:0;flex-direction:column;justify-content:center;align-items: center;width:100%;height:100%}structure-switch-element>div.expressionATester:focus-visible{outline:none}structure-switch-element>div.conditionContainer{display:flex;height:calc(var(--sizeModifier)*2vw);grid-column:2;grid-row:2;flex-direction:row;width:100%;min-width:-moz-fit-content;min-width:fit-content}structure-switch-element>div.conditionContainer>condition-element{min-width:calc(var(--sizeModifier)*10vw);display:flex;background-color:var(--bgColor);border-right:calc(var(--sizeModifier)*.05vw)solid var(--fgColor);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-bottom:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);flex-direction:column;justify-content:center;align-items: center;width:100%;height:100%}structure-switch-element>div.triangleDroit{width:calc(var(--sizeModifier)*2.82843vw);height:calc(var(--sizeModifier)*2.82843vw);border-top:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);border-right:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);grid-column:3;grid-row:1/3;background-color:var(--bgColor);transform:translate(2%,2%)rotate(45deg)}structure-switch-element>div.triangleDroit>span{transform:translate(.7vw,30%)}structure-switch-element>hr.diviseurDroit{width:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*.05vw);grid-column:3;grid-row:1/3;background-color:var(--fgColor);z-index:1;border:0;transform:translate(-50%)}condition-element{position:relative;height:100%;transition:all .2s ease-in-out}condition-element>div.libelle{width:calc(var(--sizeModifier)*10vw);resize:none;text-align:center;font-size:calc(var(--sizeModifier)*.75vw);overflow:hidden;z-index:2;display:flex;word-wrap:break-word;background:0 0;background-color:var(--bgColor);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);border:none;flex-direction:column;justify-content:center;align-items: center;height:100%}condition-element>div.libelle:focus-visible{outline:none}condition-element>button.supprimer{width:calc(var(--sizeModifier)*2vw);height:calc(var(--sizeModifier)*1vw);background-color:var(--errorColor);z-index:3;transition:all var(--transitionTime)ease;font-size:calc(var(--sizeModifier)*1vw);color:var(--bgColor);display:none;position:absolute;border:none;border-radius:0 0 999em 999em;top:0}condition-element>button.supprimer:hover{background-color:var(--fgColorHover)}condition-element>div.arrowsWrapper{width:calc(var(--sizeModifier)*6vw);height:calc(var(--sizeModifier)*1vw);font-size:calc(var(--sizeModifier)*1vw);text-align:center;position:absolute;bottom:calc(var(--sizeModifier)*-1.5vw);user-select:none;cursor:pointer;display:none;padding:0 calc(var(--sizeModifier)*.5vw)calc(var(--sizeModifier)*.5vw)calc(var(--sizeModifier)*.5vw);border:none}condition-element>div.arrowsWrapper>span{padding:calc(var(--sizeModifier)*.5vw);border-radius:0 0 999em 999em}condition-element>div.arrowsWrapper>span:hover{color:var(--bgColor);font-size:calc(var(--sizeModifier)*1.2vw);background-color:var(--fgColorHover);text-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);transition:all .2s}condition-element>div.ajouterAGauche{width:calc(var(--sizeModifier)*1.5vw);height:calc(var(--sizeModifier)*1.5vw);position:absolute;border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);background-color:var(--goodColor);z-index:5;color:var(--bgColor);font-size:calc(var(--sizeModifier)*1.5vw);text-align:center;user-select:none;cursor:pointer;display:none;border-radius:0 999em 999em 0;left:0}condition-element>div.ajouterADroite{width:calc(var(--sizeModifier)*1.5vw);height:calc(var(--sizeModifier)*1.5vw);position:absolute;border:calc(var(--sizeModifier)*.1vw)solid var(--fgColor);background-color:var(--goodColor);z-index:5;color:var(--bgColor);font-size:calc(var(--sizeModifier)*1.5vw);text-align:center;user-select:none;cursor:pointer;display:none;border-radius:999em 0 0 999em;right:0}condition-element>div.ajouterAGauche:hover,condition-element>div.ajouterADroite:hover{background-color:var(--fgColorHover)}condition-element:hover>div.arrowsWrapper,condition-element:hover>div.ajouterAGauche,condition-element:hover>div.ajouterADroite,condition-element:hover>button.supprimer{display:block;opacity:.6}invite-bornes-pour-si{aspect-ratio:4;background-color:var(--bgColorTertiary);position:absolute;transition:all var(--transitionTime)ease;display:grid;grid-template-columns:repeat(4,auto);grid-template-rows:auto auto 1fr auto;grid-auto-flow:dense;z-index:3;box-shadow:0 0 10px var(--glowColor);outline:1px solid var(--borderColor2);backdrop-filter:blur(5px);cursor:default;border-radius:5px;align-items: center;width:30vw;min-width:-moz-fit-content;min-width:fit-content;max-width:500px;padding:10px}invite-bornes-pour-si>input,invite-bornes-pour-si>select{border:none;border-bottom:1px solid var(--fgColor);color:var(--titleColor);font-weight:700;font-size:var(--font-size2);display:inline-block;box-shadow:0 0 10px var(--glowColor);text-shadow:0 0 10px var(--glowColor);outline:none;background:0 0;width:auto;margin:5px}invite-bornes-pour-si>label{font-size:var(--font-size2);display:inline-block;white-space:nowrap;text-shadow:0 0 2px var(--glowColor);background:0 0;border:none;width:auto;font-weight:700}invite-bornes-pour-si>.actionButtons{grid-column:1/-1;display:flex;justify-content:center;gap:20%}invite-bornes-pour-si>.actionButtons>button{font-size:var(--font-size2);white-space:nowrap;margin-top:20px}structure-iterative-non-bornee-element{display:flex;height:calc(var(--sizeModifier)*4vw);position:absolute;transition:all var(--transitionTime)ease;z-index:2;flex-direction:row;justify-content:center;place-items: center;width:-moz-fit-content;width:fit-content}structure-iterative-non-bornee-element>div.boucleSVG{background-image:var(--assetBoucle);width:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);background-position:50%;background-repeat:no-repeat;background-size:contain}structure-iterative-bornee-element{display:flex;height:calc(var(--sizeModifier)*4vw);position:absolute;transition:all var(--transitionTime)ease;z-index:2;justify-content:center;place-items: center;gap:calc(var(--sizeModifier)*.5vw);flex-direction:row;width:-moz-fit-content;width:fit-content}structure-iterative-bornee-element>div.boucleSVG{background-image:var(--assetBoucle);width:calc(var(--sizeModifier)*4vw);height:calc(var(--sizeModifier)*4vw);background-position:50%;background-repeat:no-repeat;background-size:contain}structure-iterative-bornee-element>div.informationsBornes{font-size:calc(var(--sizeModifier)*1vw);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}condition-sortie-element{background-image:var(--assetConditionSortie);position:absolute;height:calc(var(--sizeModifier)*4vw);width:calc(var(--sizeModifier)*4vw);transition:all var(--transitionTime)ease;z-index:2;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);background-position:50%;background-repeat:no-repeat;background-size:contain}ligne-element{position:absolute;transform-origin:0% 50%;border:calc(var(--sizeModifier)*.05vw)solid var(--fgColor);z-index:0;box-shadow:0 0 calc(var(--sizeModifier)*1.2vw)var(--glowColor);margin:0;padding:0}#dico-table{overflow-y:scroll;display:flex;scrollbar-width:none;position:relative;flex-direction:column;justify-content:start;align-items: center;width:100%;height:100%;margin:0 0 10px}#dico-table tbody{overflow-y:scroll;width:100%}.wrong-name{background-color:var(--errorColor)}#dico-close,#dico-refresh{color:var(--fgColor);cursor:pointer;background-color:#0000;border:none;padding:0;transition:transform .1s ease-in-out;font-size:16px}#dico-close:hover,#dico-refresh:hover{transform:scale(1.2)}#dico-close svg,#dico-refresh svg{fill:var(--fgColor);width:16px}#dico-ctrl{position:absolute;display:flex;z-index:1;gap:7px;top:5px;right:10px}.input-tooltip:before{content:attr(data-title);position:absolute;background:var(--bgColor);color:var(--fgColor);border:1px solid var(--borderColor2);z-index:3;white-space:pre-line;word-wrap:break-word;text-align:left;font-size:var(--font-size2);pointer-events:none;opacity:var(--label-opacity,0);translate:-50% -2.5rem;transform:scale(var(--label-scale,0));transition:transform .3s cubic-bezier(.47,1.64,.41,.8),opacity .3s ease-in-out,scale .5s ease-in-out;transition-delay:var(--label-delay,0s);border-radius:.6em;padding:.3rem 1rem;top:150%;left:50%}#dico-table thead{display:flex;border-bottom:1px solid var(--borderColor2);justify-content:space-between;align-items: center;width:100%;height:40px}#dico-table tfoot{display:flex;justify-content:space-between;align-items: center;width:100%;height:40px;padding:10px 0 0}#dico-main{width:calc(100% - 16px);height:calc(100% - 266px);padding:8px}#dico-main,#dico-inputs{background-color:var(--bgColor);background:var(--bgColorTertiary);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);outline:1px solid var(--borderColor2);overflow:hidden;border-radius:.8em;min-height:24px}#dico-inputs{display:flex;flex-direction:column;justify-content:space-around;align-items: center;gap:8px;width:calc(100% - 16px);height:230px;padding:8px}#dico-wrapper{display:flex;flex-direction:column;gap:10px;width:100%;height:170px}#dico-first-inputs{display:flex;gap:20px;width:100%;height:80px}#dico-buttons{display:flex;justify-content:center;align-items: center;gap:12px;width:100%;height:40px}#dico-buttons button{color:var(--fgColor)}#dico-inputs input,#dico-inputs textarea{color:var(--fgColor);box-shadow:2px 2px 10px var(--fgColorSemiTransparent);background-color:#0000;background-color:var(--bgColor);border-radius:.6em;height:100%;margin:2px 0 0;padding:0 0 0 10px;transform:translate(0)}#dico-inputs textarea{font-family:Roboto,sans-serif;font-size:var(--font-size1);padding:5px 0 0 5px}#inputs-name{width:100%}#dico-inputs label{display:flex;font-size:var(--font-size2);flex-direction:column;height:100%}#dico-first-inputs label{width:100%;height:100%}#valid-inputs:hover{color:var(--warningColor)}#remove-inputs:hover,.error-msg{color:var(--errorColor)}#dico-inputs input:focus,#dico-inputs textarea:focus{outline:none;box-shadow:-2px -2px 10px var(--fgColorSemiTransparent)}#dico-inputs input::placeholder,#dico-inputs textarea::placeholder{font-size:var(--font-size2);font-style:italic}#dico-table th td{display:flex;border-right:.1vw solid var(--borderColor2);color:var(--fgColor);flex-direction:row;justify-content:start;align-items: center;width:100%;height:100%;margin-left:1%;font-weight:500}#dico-table th td:last-child{border-right:none}#dico-table thead tr{width:95%;height:40px;min-height:3vw}#dico-table thead tr td{margin:0 0 0 5px}#dico-table tr{display:flex;flex-direction:row;justify-content:space-between;align-items: center}.row-selected{border:1px solid var(--borderColor)}.wrong-input{animation:.2s ease-in-out shake;border:1px solid var(--errorColor)}.correct-input{border:1px solid #0000}.good-name{background-color:var(--bgColorSecondary)}#dico-table tbody tr{cursor:pointer;position:relative;border-radius:.6em;width:calc(100% - 17px);height:-moz-fit-content;height:fit-content;margin:5px 0 0;padding:5px}#dico-table tbody tr td{word-break:break-all;cursor:pointer;color:var(--fgColor)}#dico-table tr td{display:flex;cursor:text;font-size:var(--font-size2);flex-direction:row;justify-content:start;align-items: center;height:100%}#dico-table thead tr td:first-child,#dico-table thead tr td:nth-child(2){width:calc(25% - 5px);padding:0 5px 0 0}#dico-table tbody tr td:first-child,#dico-table tbody tr td:nth-child(2){width:calc(25% - 12px);padding:0 12px 0 0}#dico-table tr td:nth-child(3){border-right:none;width:50%}#dico-inputs button{display:flex;background-color:#0000;border:none;border-radius:.6em;justify-content:center;align-items: center;padding:6px 10px}#dico-inputs button:not(:disabled){cursor:pointer}#dico-inputs button:hover{box-shadow:0px 4px 10px var(--fgColorSemiTransparent)}#valid-inputs:disabled{opacity:.4;pointer-events:none;cursor:none}#inputs-error{display:flex;font-size:var(--font-size2);justify-content:flex-start;width:100%;height:-moz-fit-content;height:fit-content;margin:0}#dico-inputs button svg{fill:var(--fgColor)}#dico-inputs input:nth-child(3){width:calc(38% - 50px)}#dico-table tr.ajout{opacity:.75}#dico-table tr td select.selectType{position:absolute;background-color:var(--bgColor);color:var(--fgColor);font-size:var(--font-size2);cursor:pointer;border:none;width:100%;height:100%;top:0;left:0}#dico-table>tr>td>select.selectType:hover{text-shadow:0 0 .5vw var(--fgColor)}#transferForm{display:none}@keyframes jumpOverLeft{0%{translate:0}50%{translate:-50% calc(var(--sizeModifier)*-5vw)}to{translate:-100%}}@keyframes jumpOverRight{0%{translate:0}50%{translate:50% calc(var(--sizeModifier)*-5vw)}to{translate:100%}}@keyframes slideUnderLeft{0%{translate:0}50%{translate:-50% calc(var(--sizeModifier)*1vw)}to{translate:-100%}}@keyframes slideUnderRight{0%{translate:0}50%{translate:50% calc(var(--sizeModifier)*1vw)}to{translate:100%}}@keyframes fall{0%{translate:0 -5vw}to{translate:0}}@keyframes zoomFromAbove{0%{scale:0;transform-origin:top}to{scale:1;transform-origin:top}}.rotate{rotate:360deg}.move-right-2{translate:2vw}.crayon{user-select:none;transition:all .5s}.glow-wrapper{display:flex;position:relative;background-color:var(--borderColor);overflow:hidden;border-radius:.8em;justify-content:center;align-items: center;width:100%;height:100%}[data-glow].active{--spread:20;--border-size:2px;--spotlight-size:30dvw;--border-light-opacity:1;--border-spot-opacity:1;--lightness:50;--hue:calc(var(--baseGlowColor) + (var(--xp,0)*var(--spread,0)))}[data-glow].active:before,[data-glow].active:after{pointer-events:none;content:"";position:absolute;inset:calc(var(--border-size)*-1);border:var(--border-size)solid transparent;background-attachment:fixed;background-size:calc(100% + (2*var(--border-size)))calc(100% + (2*var(--border-size)));z-index:0;opacity:0;animation:1.5s forwards fadeIn;background-position:50%;background-repeat:no-repeat;border-radius:.8em}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[data-glow].active:before{background-image:radial-gradient(calc(var(--spotlight-size)*.75)calc(var(--spotlight-size)*.75)at calc(var(--x,0)*1px)calc(var(--y,0)*1px),hsl(var(--hue,210)calc(var(--saturation,100)*1%)calc(var(--lightness,50)*1%)/var(--border-spot-opacity,1)),transparent 100%);filter:brightness(1.5)}[data-glow].active:after{background-image:radial-gradient(calc(var(--spotlight-size)*.5)calc(var(--spotlight-size)*.5)at calc(var(--x,0)*1px)calc(var(--y,0)*1px),hsl(0 100% 100%/var(--border-light-opacity,1)),transparent 100%)}menu-deroulant{border:1px solid var(--borderColor);font-size:var(--font-size1);background-color:#1c273359}.dock-item{cursor:pointer;transform-origin:bottom;transition:transform .7s cubic-bezier(.165,.84,.44,1),margin .8s}@media screen and (max-width:780px){#boutonPointeur,#boutonProbleme,#boutonProcedure,#boutonStructureSi,#boutonStructureSwitch,#boutonStructureIterative,#boutonStructureIterativeBornee,#boutonConditionSortie,#boutonLien,#boutonUndo,#boutonRedo,#dico_btn>svg#boutonDico,#biblio_btn>svg#boutonBiblio{fill:var(--fgColor);width:16px;height:16px}indicateur-zoom>.zoomDisplay{font-size:14px}indicateur-zoom>button{font-size:18px}h1{font-size:var(--font-size2)}sous-plan-travail>span.fermeture{font-size:14px}}menu-compte-element{position:relative;display:inline-block}menu-compte-element>div.img{width:100%}menu-compte-element>#MenuCompte{display:block}.menu-compte{position:absolute;background-color:var(--bgColor);display:flex;z-index:999;border:1px solid var(--borderColor);overflow:hidden;border-radius:8px;flex-direction:column;width:360px;font-size:14px;top:calc(100% + 10px);right:0;box-shadow:0 4px 12px #00000026}.menu-header{display:flex;position:relative;border-bottom:1px solid var(--borderColor2);padding:20px}.user-avatar{overflow:hidden;background-color:var(--bgColorSecondary);display:flex;border-radius:50%;justify-content:center;align-items: center;width:70px;height:70px;margin-right:15px}.user-avatar svg{fill:var(--fgColor);width:100%;height:100%}.avatar-circle{overflow:hidden;display:flex;background-color:var(--bgColorSecondary);border:2px solid var(--borderColor);cursor:pointer;border-radius:50%;justify-content:center;align-items: center;width:40px;height:40px}.avatar-circle img{object-fit:cover;width:100%;height:100%}.user-info{display:flex;flex-direction:column;justify-content:center;max-width:235px}.greeting{color:var(--fgColor);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 0 5px;font-size:24px;font-weight:500}.email{color:var(--fgColorForward);margin:0;font-size:14.4px}.close-button{position:absolute;cursor:pointer;display:flex;background:0 0;border:none;border-radius:50%;justify-content:center;align-items: center;width:30px;height:30px;top:10px;right:10px}.menu-header-simple{display:flex;position:relative;justify-content:flex-end}#closeMenuBtn2{position:relative}.close-button:hover{background-color:var(--fgColorTransparent)}.close-button svg{fill:var(--fgColor);width:24px;height:24px}.menu-action{border-bottom:1px solid var(--borderColor2);padding:15px 20px}.menu-items{border-bottom:1px solid var(--borderColor2)}.menu-item{display:flex;cursor:pointer;color:var(--fgColor);text-align:left;background:0 0;border:none;align-items: center;width:100%;padding:12px 20px}.menu-item:hover{background-color:var(--fgColorTransparent)}.menu-item svg{fill:var(--fgColor);width:24px;height:24px;margin-right:15px}.elementIsOpen{fill:var(--titleColor)!important}.theme-section{border-bottom:1px solid var(--borderColor2);position:relative;box-sizing:border-box;padding:15px}.theme-section,.indicators-option{position:relative}.theme-section select{border:1px solid var(--borderColor);color:var(--fgColor);background-color:#0000;border-radius:20px;width:100%;padding:10px;font-size:14px}.menu-actions{border-bottom:1px solid var(--borderColor2);padding:0}.menu-separator{background-color:var(--borderColor2);height:1px;margin:0}.editor-options{padding:10px 0}.effect-option{display:flex;cursor:pointer;justify-content:space-between;align-items: center;padding:12px 20px}.switch-container{box-sizing:border-box;position:relative;cursor:pointer;border:0;border-radius:10px;width:40px;height:20px;padding:0;transition:background-color .3s}.switch-container:focus-visible{outline:2px solid var(--titleColor);outline-offset:2px}.switch-displayer{background-color:var(--bgColor);position:absolute;border-radius:50%;width:16px;height:16px;transition:left .3s,right .3s;top:2px}.effect-option span{color:var(--fgColor)}.indicators-option{position:relative;box-sizing:border-box;width:100%;margin-bottom:10px;padding:12px 20px}.indicators-option select{border:1px solid var(--borderColor);color:var(--fgColor);background-color:#0000;border-radius:5px;width:100%;padding:8px;font-size:14px}.indicators-option:after,.theme-section:after{display:none}.select-arrow{position:absolute;pointer-events:none;z-index:1;top:50%;right:30px;transform:translateY(-50%)}.select-arrow svg{fill:var(--fgColor);width:20px;height:20px}#indicateursPage{border:1px solid var(--fgColor);color:var(--fgColor);background-color:#0000;border-radius:5px;width:100%;padding:8px 12px;font-size:14px}#indicateursPage:focus{outline:none}div.page-size-indicator{position:absolute;border:2px dashed var(--fgColor);display:none;pointer-events:none;opacity:.2;border-radius:15px;top:2px;left:2px}div.page-size-indicator:after{position:absolute;color:var(--fgColor);font-size:2vw;top:5px;left:5px}:root[data-page-size=a4-portrait] div.page-size-indicator{width:calc(var(--sizeModifier)*96vw);height:calc(var(--sizeModifier)*135.7vw);display:block}:root[data-page-size=a4-portrait] div.page-size-indicator:after{content:"A4 (Portrait)"}:root[data-page-size=a4-landscape] div.page-size-indicator{width:calc(var(--sizeModifier)*96vw);height:calc(var(--sizeModifier)*65.8vw);display:block}:root[data-page-size=a4-landscape] div.page-size-indicator:after{content:"A4 (Paysage)"}:root[data-page-size=a3-portrait] div.page-size-indicator{width:calc(var(--sizeModifier)*135.7vw);height:calc(var(--sizeModifier)*191.8vw);display:block}:root[data-page-size=a3-portrait] div.page-size-indicator:after{content:"A3 (Portrait)"}:root[data-page-size=a3-landscape] div.page-size-indicator{width:calc(var(--sizeModifier)*135.7vw);height:calc(var(--sizeModifier)*94vw);display:block}:root[data-page-size=a3-landscape] div.page-size-indicator:after{content:"A3 (Paysage)"}.previewPlanTravail div.page-size-indicator{display:none!important}sous-plan-travail>selection-editeur{translate:3.5px -6.5px}@keyframes shake{0%{transform:translate(-3px)}20%{transform:translate(3px)}40%{transform:translate(-3px)}60%{transform:translate(3px)}to{transform:translate(0)}}@media print{html,body{--bgColor:#fff!important;--fgColor:#000!important;--fgColorSemiTransparent:#000a!important;--fgColorTransparent:#0005!important;--fgColorForward:#000!important;--goodColor:#0f0!important;--goodColorTransparent:#0f05!important;--errorColor:red!important;--warningColor:orange!important;--titleColor:#000!important;--glowColor:#0000!important;--bgColorSecondary:#fff!important}div.page-size-indicator{display:none!important}#espacePrincipal_wrapper{border:none;overflow:visible!important;background:0 0!important;height:-moz-fit-content!important;height:fit-content!important}.glow-wrapper{border:none;position:relative!important;overflow:visible!important;background:0 0!important;height:-moz-fit-content!important;height:fit-content!important}.glow-wrapper.active:after,.glow-wrapper.active:before{opacity:0!important}header,#dico_wrapper,#biblio_wrapper,div.barreOutilsHorizontale,indicateur-zoom,selection-simple,selection-editeur,div.img,span.fermeture,#titreAlgo_wrapper,.ouvrir{display:none!important}div.boucleSVG{background-image:url(data:image/svg+xml;base64,Cgk8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkJvdWNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU1MC40IDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUwLjQgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGZpbGw9IiMwMDAwMDAiPgoJPGc+CgkJPHBhdGggZD0iTTU0Ny41LDMxOS4xYy0zLjcsNi4xLTEwLjMsOS45LTE3LjQsOS45aC03OS41Yy03LjEsMC0xMy43LTMuOC0xNy40LTkuOWMtMy43LTYuMS0zLjgtMTMuNy0wLjUtMjBsMzkuOC03NC4zCgkJCWMwLjYtMS4yLDEuNC0yLjMsMi4yLTMuM2MzLjgtNC42LDkuNS03LjQsMTUuNy03LjRjMy44LDAsNy4zLDEsMTAuNCwyLjljMy4xLDEuOSw1LjcsNC41LDcuNCw3LjhsOS41LDE3LjdsMzAuMyw1Ni42CgkJCUM1NTEuNCwzMDUuNCw1NTEuMSwzMTMsNTQ3LjUsMzE5LjF6Ii8+Cgk8L2c+Cgk8cGF0aCBkPSJNNTAyLjYsMzI1LjJjLTEuOSw2LjgtNC4xLDEzLjUtNi41LDIwQzQ1OS44LDQ0Mi42LDM2Niw1MTIsMjU2LDUxMkMxMTQuNiw1MTIsMCwzOTcuNCwwLDI1NlMxMTQuNiwwLDI1NiwwCgkJYzEwOC44LDAsMjAxLjgsNjcuOSwyMzguOCwxNjMuNmMtNi41LTMuMy0xMy43LTUuMS0yMS01LjFjLTEsMC0yLDAtMywwLjFDNDMzLjcsNzYuOCwzNTEuMywxOS45LDI1NS42LDE5LjkKCQlDMTI1LjIsMTkuOSwxOS41LDEyNS42LDE5LjUsMjU2czEwNS43LDIzNi4xLDIzNi4xLDIzNi4xYzEwNi4zLDAsMTk2LjItNzAuMywyMjUuOC0xNjYuOUg1MDIuNnoiLz4KPC9nPgo8L3N2Zz4KCQ==)!important}condition-sortie-element{background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjAuMyAzMTkuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwLjMgMzE5Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgICAuc3Qwe3N0cm9rZTojMDAwMDAwOztzdHJva2Utd2lkdGg6Mjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQogICAgICAgIC5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwOztzdHJva2Utd2lkdGg6MTU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQogICAgICAgIC5zdDJ7c3Ryb2tlOiMwMDAwMDA7O3N0cm9rZS13aWR0aDoyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTt9CiAgICAgICAgLnN0M3tmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7O3N0cm9rZS13aWR0aDoyNztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTt9Cjwvc3R5bGU+Cjxwb2x5bGluZSBmaWxsPSIjMDAwMDAwIiBjbGFzcz0ic3QwIiBwb2ludHM9IjEzMC43LDE1Ny42IDEzMC43LDE3LjUgMTg5LjYsMTYuOSAxODkuNiwxNTcuNiAiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgY2xhc3M9InN0MSIgZD0iTTU5LDE3MC44Ii8+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJzdDIiIGQ9Ik0yMTcuOSwxNTcuNmwtNTYuMyw1OC44Yy0wLjgsMC45LTIsMC45LTIuOSwwbC01Ni40LTU4LjhIMjE3Ljl6Ii8+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJzdDMiIGQ9Ik0xMDYuNiwxMjAuNSIvPgoJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTI4My40LDhjMTUuOSwwLDI4LjksMTIuOSwyOC45LDI4LjlWMjgzYzAsMTUuOS0xMi45LDI4LjktMjguOSwyOC45SDM2LjlDMjAuOSwzMTEuOSw4LDI5OSw4LDI4M1YzNi45ICAgQzgsMjAuOSwyMC45LDgsMzYuOSw4SDI4My40IE0yODMuNCwwSDM2LjlDMTYuNSwwLDAsMTYuNSwwLDM2LjlWMjgzYzAsMjAuNCwxNi41LDM2LjksMzYuOSwzNi45aDI0Ni42YzIwLjQsMCwzNi45LTE2LjUsMzYuOS0zNi45ICAgVjM2LjlDMzIwLjMsMTYuNSwzMDMuOCwwLDI4My40LDBMMjgzLjQsMHoiLz4KCjwvc3ZnPg==)!important}sous-plan-travail{display:block!important;position:relative!important;page-break-inside:avoid!important;overflow:visible!important;border-radius:0!important;width:100dvw!important;height:90dvh!important;scale:1!important}plan-travail{display:block!important;position:relative!important;page-break-inside:avoid!important;overflow:visible!important;border:none!important;width:100dvw!important;height:90dvh!important}}
</style></head>

	<body spellcheck="false">
		<canvas id="canvasExport" style="position: absolute; z-index: -33333333"></canvas>
		<template id="dico-row">
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</template>
		<editeur-interface>
			<header>
				<img alt="Logo AlgoForge" id="logoAlgoForge" />
				<div class="titreEtMenu">
					<div class="menuButtons">
						<button>
							<span>Fichier</span>
							<menu-deroulant id="menuDeroulantFichier"></menu-deroulant>
						</button>
						<button>
							<span>Édition</span>
							<menu-deroulant id="menuDeroulantEdition"></menu-deroulant>
						</button>
						<button>
							<span>Aide</span>
							<menu-deroulant id="menuDeroulantAide"></menu-deroulant>
						</button>
					</div>
				</div>
				<div class="zoneActionsCloud">
					<button id="sauvegardeCloud">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							id="bouttonSauvehardeCloud"
							x="0px"
							y="0px"
							viewBox="0 0 512 512"
							style="enable-background: new 0 0 512 512"
							xml:space="preserve"
						>
							<g>
								<circle cx="256" cy="298.667" r="42.667" />
								<path
									d="M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z"
								/>
								<path
									d="M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z"
								/>
							</g>
						</svg>
						<label>Sauvegarder</label>
					</button>
					<div id="pingSauvegardeCloud"></div>
				</div>
				<menu-compte-element> </menu-compte-element>
				<select id="theme"></select>
			</header>
			<div class="barreOutilsHorizontale">
				<div id="dicobiblioControl">
					<!-- Bouton Erreurs -->
					<!-- Bouton Bibliotheque Algos -->
					<button id="biblio_btn" data-title="Bibliothèque d'algorithmes">
						<svg id="boutonBiblio" version="1.1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 514 514"
							style="enable-background: new 0 0 514 514" xml:space="preserve">
							<g>
								<path d="M125.2,25.1v38.2c0-5.7-2.8-10.3-6.1-10.3H6.1c-1.7,0-3.2,1.2-4.3,3C0.7,57.9,0,60.5,0,63.3V25.1C0,11.2,28,0,62.6,0
		c17.3,0,33,2.8,44.3,7.3C118.2,11.9,125.2,18.2,125.2,25.1z" />
								<path d="M119.1,73.6H6.1C2.7,73.6,0,69,0,63.3v387.9c0-2.9,0.7-5.4,1.8-7.3c1.1-1.9,2.6-3,4.3-3h113c3,0,5.5,3.7,6,8.5v3.6
		c-0.5,4.8-3,8.5-6,8.5H6.1c-3.4,0-6.1-4.6-6.1-10.3v38.2c0,13.8,28,25,62.6,25c33.3,0,60.7-10.4,62.5-23.6c0.1-0.5,0.1-0.9,0.1-1.4
		V63.3C125.2,69,122.5,73.6,119.1,73.6z M72.9,373.2c-0.1,7-4.7,12.6-10.3,12.6c-5.7,0-10.3-5.6-10.3-12.5V141.1
		c0-6.9,4.6-12.5,10.3-12.5c2.9,0,5.4,1.4,7.3,3.7c1.9,2.3,3,5.4,3,8.8V373.2z" />
							</g>
							<path d="M335.1,64.1c-2.3-4.7-8.5-8.9-17.3-12.1c-11.3-4.1-27-6.7-44.3-6.7c-34.6,0-62.6,10.3-62.6,22.9V103c0-2.8,0.7-5.4,1.8-7.3
		c1.1-1.9,2.6-3,4.3-3h113c3.3,0.1,6,4.7,6,10.3c0,5.7-2.7,10.3-6.1,10.3H217c-3.4,0-6.1-4.6-6.1-10.3v353.7c0-2.9,0.7-5.4,1.8-7.3
		c1.1-1.9,2.6-3,4.3-3h113c3.3,0.1,6,4.7,6,10.3c0,5.7-2.7,10.3-6.1,10.3H217c-3.4,0-6.1-4.6-6.1-10.3v34.8
		c0,12.7,28,22.9,62.6,22.9c34.5,0,62.5-10.2,62.6-22.8V68.2C336.1,66.8,335.8,65.4,335.1,64.1z M283.8,385.7
		c-0.1,6.3-4.7,11.5-10.3,11.5c-5.7,0-10.3-5.1-10.3-11.4V174c0-6.3,4.6-11.4,10.3-11.4c2.8,0,5.4,1.3,7.3,3.3c1.9,2.1,3,4.9,3,8.1
		V385.7z" />

							<path
								d="M198.3,81.1c-7.8-3.9-18.5-6.3-30.3-6.3c-22.8,0-41.3,8.8-42.8,20c-0.1,0.5-0.1,0.9-0.1,1.4V493
		c0,11.8,19.2,21.4,42.9,21.4s42.9-9.6,42.9-21.4v-32.6c0,5.7-1.9,10.3-4.2,10.3h-77.4c-2,0-3.7-3.5-4.1-8.1v-4.4
		c0.2-2,0.6-3.7,1.1-5.1c0.8-1.9,1.8-3,3-3h77.4c2.3,0,4.2,4.6,4.2,10.3V128.9c0,5.7-1.9,10.3-4.2,10.3h-77.4c-2,0-3.7-3.5-4.1-8.1
		v-4.4c0.2-2,0.6-3.7,1.1-5.1c0.8-1.9,1.8-3,3-3h77.4c2.3,0,4.2,4.6,4.2,10.3V96.2C210.9,90.3,206.1,85,198.3,81.1z M157.7,195.4
		c0-5.9,4.6-10.7,10.3-10.7c2.8,0,5.4,1.2,7.3,3.1c1.9,1.9,3,4.6,3,7.6v198.4c0,5.9-4.6,10.7-10.3,10.7s-10.3-4.8-10.3-10.7V195.4z" />

							<path d="M513.9,479.5l-4.9-38.4c0.6,5.4-1.4,11-4.7,11.5l-112.1,14.2c-2.9,0.4-6.2-6.4-7.4-11l5,39.4c1.7,13.8,30.9,21.4,65.2,17
		C489.3,507.8,515.7,493.2,513.9,479.5z M455.5,19.2C454.1,8,434.8,1,409.4,1c-6.1,0-12.5,0.4-19.1,1.2c-34.3,4.4-60.7,19-58.9,32.8
		l3.7,29.1l1,8l0.1,0.6l48.6,383.1v-0.4c0-4.8,1.9-8.6,4.9-9l112.1-14.2c3.2-0.5,6.4,3.5,7.2,8.9L455.5,19.2z M438.8,384.7
		c-5.6,0.7-10.9-4.3-11.7-11.1l-29.2-230.1c-0.9-6.9,3-13,8.6-13.7c0.3,0,0.7-0.1,1-0.1c5.2,0,9.9,4.8,10.7,11.2L447.4,371
		C448.3,377.9,444.4,384,438.8,384.7z M455.5,68.2l-112,14.2c-3.1,0.4-6.4-4.2-7.2-9.4v0c0-0.3-0.1-0.8-0.2-1.1v-2
		c0.2-4.2,2.2-7.5,4.9-7.9l112-14.2c3.3-0.5,6.6,3.8,7.3,9.4C461,62.8,458.9,67.7,455.5,68.2z" />
						</svg>
					</button>
					<!-- Bouton Dictionnaire de données -->
					<button id="dico_btn" data-title="Dictionnaire de données">
						<svg version="1.1" id="boutonDico" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 448 512"
							style="enable-background: new 0 0 448 512" xml:space="preserve">
							<path d="M439.1,453.3c-4.2-15.4-4.2-59.3,0-74.7c5.4-4.3,8.9-11.1,8.9-18.6V24c0-13.3-10.7-24-24-24H96C43,0,0,43,0,96v320
	c0,53,43,96,96,96h328c13.3,0,24-10.7,24-24C448.1,476.4,449.7,460.8,439.1,453.3z M147.5,231.8c7.8-6.6,9.3-11,16.3-14.8
	c8.9-2.7,9,1.3,17.2,2.4c5.1-0.3,23.4-19.8,34.8-41.8c-5.1-12.8-13-37.4-21.2-47c-1.1,0.9-2.9,3.3-4.8,8.5
	c-4.3,13.3-25.4,9.8-25.1-4.2c0-8.8,4.3-17.8,13.2-27.7c25.6-29.4,50.5-12.2,65.3,28.8c18.3-25.6,34.5-49.6,65.2-41.6
	c8.9,2.3,12.4,14.3,6.1,21c-0.3,0.4-16.5,17.2-16.9,17.6c-15.9-2.4-25.1,6.8-42,35.2c6.2,15.1,15,43.1,25,51.5
	c3.4-1.7,9.5-16,17.5-14.6c5.5-0.1,10.8,3.5,12.4,8.8c3.6,12.8-6.2,22.1-14.1,29.5c-31.6,29.2-53.7,4.7-67.6-33.5
	c-17,26-34.4,46.2-58.8,46.2c-5.8,0-12.6-1.2-19.1-3.8C143.2,248.9,141.3,237.7,147.5,231.8z M381.4,448H96c-17.7,0-32-14.3-32-32
	c0-17.6,14.4-32,32-32h285.4C379.5,401.1,379.5,430.9,381.4,448z" />
						</svg>
					</button>
				</div>
				<div id="itemsControl" class="dock">
					<!-- Bouton Pointeur -->
					<div class="svg-wrapper" data-title="Pointeur">
						<svg id="boutonPointeur" class="selected dock-item" version="1.1" id="Pointeur"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							y="0px" viewBox="0 0 512.7 512.7" style="enable-background: new 0 0 512.7 512.7"
							xml:space="preserve" width="32" height="32">
							<g id="Marteau">
								<path d="M448.3,500.8l-272-286.4c-2.6-2.7-2.4-6.9,0.5-9.5c0.1,0,0.1-0.1,0.1-0.1l45.5-37.7c2.9-2.4,7.2-2.1,9.8,0.6
		l270.7,285.8c13.7,14.4,12.6,36.6-2.5,49.7c-0.5,0.5-1,0.8-1.6,1.2l0,0C483.6,516.3,461.4,514.7,448.3,500.8z" />
								<path d="M136.1,196.4l15.4,17c0.3,0.4,0.9,0.4,1.3,0.1c0,0,0,0,0.1,0l77.6-70.7c0.3-0.3,0.4-0.8,0.1-1.2
		c0,0,0,0-0.1-0.1l-15.7-13.8c-0.3-0.3-0.9-0.3-1.2,0l-77.3,67.4C135.8,195.5,135.8,196.1,136.1,196.4L136.1,196.4z" />
								<polyline
									points="133.1,185.3 56.3,215.8 0.4,155.5 64.1,47.8 183.7,0.4 239.6,60.7 202.7,122.9 	" />
							</g>
						</svg>
					</div>
					<!-- Bouton Lien -->
					<div class="svg-wrapper" data-title="Lien">
						<svg version="1.1" id="boutonLien" class="dock-item" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 535.1 535.1"
							style="enable-background: new 0 0 535.1 535.1" xml:space="preserve" width="32" height="32">
							<path d="M519.4,47.1L47.1,519.4c-8.7,8.7-22.8,8.7-31.4,0h0c-8.7-8.7-8.7-22.8,0-31.4L487.9,15.7c8.7-8.7,22.8-8.7,31.4,0v0
	C528,24.4,528,38.5,519.4,47.1z" />
						</svg>
					</div>
					<!-- Bouton Problème -->
					<div class="svg-wrapper" data-title="Problème">
						<svg version="1.1" id="boutonProbleme" class="dock-item" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 571.2 328.3"
							style="enable-background: new 0 0 571.2 328.3" xml:space="preserve" width="32" height="32">
							<path d="M548,0H23.2C10.4,0,0,10.5,0,23.5v281.3c0,13,10.4,23.5,23.2,23.5H548c12.8,0,23.2-10.5,23.2-23.5V23.5
	C571.2,10.5,560.8,0,548,0z M530.9,301H40.3c-7.2,0-13-5.8-13-13V40.3c0-7.2,5.8-13,13-13h490.6c7.2,0,13,5.8,13,13V288
	C543.9,295.2,538.1,301,530.9,301z" />
						</svg>
					</div>
					<!-- Bouton Procédure -->
					<div class="svg-wrapper" data-title="Procédure">
						<svg id="boutonProcedure" class="dock-item" version="1.1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 571.2 328.8"
							style="enable-background: new 0 0 571.2 328.8" xml:space="preserve" width="32" height="32">
							<g id="Procedure">
								<path d="M80.6,300.9c0.8,0.3,1.7,0.4,2.6,0.4h404.7c0.9,0,1.8-0.1,2.6-0.4H80.6z" />
								<path d="M46.4,300.9h-3c-8.9,0-16.2-7.2-16.2-16.2V43.4c0-8.9,7.2-16.2,16.2-16.2h3c1.7,0,3.2,1.4,3.2,3.2v267.3
		C49.6,299.4,48.1,300.9,46.4,300.9z M498.2,288.3c0,6.1-3.4,11.2-8.1,12.6c-0.8,0.3-1.7,0.4-2.6,0.4H82.8c-0.9,0-1.8-0.1-2.6-0.4
		c-4.7-1.4-8.1-6.5-8.1-12.6V40.7c0-7.2,4.8-13,10.7-13h404.7c5.9,0,10.7,5.8,10.7,13V288.3z M543.9,284.7c0,8.9-7.2,16.2-16.2,16.2
		h-3.8c-1.7,0-3.2-1.4-3.2-3.2V30.4c0-1.7,1.4-3.2,3.2-3.2h3.8c8.9,0,16.2,7.2,16.2,16.2V284.7z M548,0H23.2C10.4,0,0,10.5,0,23.5
		v281.7c0,13,10.4,23.5,23.2,23.5H548c12.8,0,23.2-10.5,23.2-23.5V23.5C571.2,10.5,560.8,0,548,0z" />
							</g>
						</svg>
					</div>
					<!-- Bouton Structure SI -->
					<div class="svg-wrapper" data-title="Structure Si">
						<svg id="boutonStructureSi" class="dock-item" version="1.1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 571.2 328.3"
							style="enable-background: new 0 0 571.2 328.3" xml:space="preserve" width="32" height="32">
							<path
								d="M567.7,149.7L495.6,7.2c-2.2-4.4-6.8-7.2-11.7-7.2H87.4c-5,0-9.5,2.8-11.7,7.2L3.4,149.7c-4.6,9.1-4.6,19.8,0,28.9
    l72.2,142.6c2.2,4.4,6.8,7.1,11.7,7.1h396.5c5,0,9.5-2.8,11.7-7.1l72.2-142.6C572.3,169.5,572.3,158.8,567.7,149.7z M271.9,288.9
    c0,7.1-5.9,12.9-13.1,12.9h-163v0L29,169.9c-1.8-3.6-1.8-7.9,0-11.6L95.8,26.5v0h163c7.2,0,13.1,5.8,13.1,12.9V288.9z M542.2,169.9
    l-66.8,131.9v0h-163c-7.2,0-13.1-5.8-13.1-12.9V39.4c0-7.1,5.9-12.9,13.1-12.9h163v0l66.8,131.9C544,162,544,166.3,542.2,169.9z" />
						</svg>
					</div>
					<!-- Bouton Strcuture Switch -->
					<div class="svg-wrapper" data-title="Structure Switch">
						<svg id="boutonStructureSwitch" class="dock-item" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							y="0px" viewBox="0 0 571.2 328.3" style="enable-background: new 0 0 571.2 328.3"
							xml:space="preserve" width="32" height="32">
							<path d="M487.8,0H83.4c-2.1,0-4.1,1.2-5,3.1L2.6,153.3c-3.4,6.8-3.4,14.9,0,21.7l75.8,150.2c1,1.9,2.9,3.1,5,3.1h404.3
	c2.1,0,4.1-1.2,5-3.1L568.6,175c3.4-6.8,3.4-14.9,0-21.7L492.8,3.1C491.8,1.2,489.9,0,487.8,0z M96.4,26.5L96.4,26.5l378.3,0v0
	l58.6,116.1c1.9,3.7-0.9,8.1-5,8.1H42.9c-4.2,0-6.9-4.4-5-8.1L96.4,26.5z M272,296.3c0,3.1-2.5,5.6-5.6,5.6H96.4v0L37.8,185.7
	c-1.9-3.7,0.9-8.1,5-8.1h223.4c3.1,0,5.6,2.5,5.6,5.6V296.3z M474.7,301.8L474.7,301.8l-169.9,0c-3.1,0-5.6-2.5-5.6-5.6V183.2
	c0-3.1,2.5-5.6,5.6-5.6h223.4c4.2,0,6.9,4.4,5,8.1L474.7,301.8z" />
							<path d="M631.6,244.9" />
						</svg>
					</div>
					<!-- Bouton Structure Itérative -->
					<div class="svg-wrapper" data-title="Structure itérative">
						<svg id="boutonStructureIterative" class="dock-item" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							y="0px" viewBox="0 0 550.4 512" style="enable-background: new 0 0 550.4 512"
							xml:space="preserve" width="32" height="32">
							<path
								d="M546.8,312.6c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512
		C114.6,512,0,397.4,0,256C0,114.6,114.6,0,256,0c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2c-55.9,0-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20h-30.4c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C551.7,295.1,551.4,304.8,546.8,312.6z" />
						</svg>
					</div>
					<!-- Bouton Structure Itérative Bornéee -->
					<div class="svg-wrapper" data-title="Structure itérative bornée">
						<svg id="boutonStructureIterativeBornee" class="dock-item" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							y="0px" viewBox="0 0 666.3 512" style="enable-background: new 0 0 666.3 512"
							xml:space="preserve" width="32" height="32">
							<g>
								<path
									d="M546.8,312.6c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512
		C114.6,512,0,397.4,0,256C0,114.6,114.6,0,256,0c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2c-55.9,0-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20H423c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C551.7,295.1,551.4,304.8,546.8,312.6z" />

								<path d="M589.5,272.8c0-11.9,1.3-21.3,4-28.1c2.7-6.9,7-12.8,13.1-17.9c6-5,10.6-9.7,13.7-13.9c3.1-4.2,4.7-8.8,4.7-13.9
		c0-12.3-5.3-18.4-15.9-18.4c-4.9,0-8.8,1.8-11.8,5.4c-3,3.6-4.6,8.4-4.8,14.5h-41.3c0.2-16.3,5.3-28.9,15.4-38
		c10.1-9.1,24.2-13.6,42.5-13.6c18.1,0,32.2,4.2,42.2,12.6c10,8.4,15,20.3,15,35.8c0,6.8-1.3,12.9-4,18.4c-2.7,5.5-7,11.2-12.9,17
		l-14,13.1c-4,3.8-6.8,7.8-8.3,11.8c-1.5,4-2.4,9.1-2.6,15.3H589.5z M584.5,309.9c0-6,2.2-11,6.5-14.8c4.4-3.9,9.8-5.8,16.3-5.8
		c6.5,0,11.9,1.9,16.3,5.8c4.4,3.9,6.5,8.8,6.5,14.8c0,6-2.2,11-6.5,14.8c-4.4,3.9-9.8,5.8-16.3,5.8c-6.5,0-11.9-1.9-16.3-5.8
		C586.7,320.9,584.5,315.9,584.5,309.9z" />
							</g>
						</svg>
					</div>
					<!-- Bouton Condition Sortie -->
					<div class="svg-wrapper" data-title="Condition de sortie">
						<svg version="1.1" id="boutonConditionSortie" class="dock-item"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							y="0px" viewBox="0 0 320.3 319.9" style="enable-background: new 0 0 320.3 319.9"
							xml:space="preserve" width="32" height="32">
							<path d="M277.5,26.9c8.6,0,15.6,7,15.6,15.6v234.9c0,8.6-7,15.6-15.6,15.6H42.6c-8.6,0-15.6-7-15.6-15.6V42.5
		c0-8.6,7-15.6,15.6-15.6H277.5 M277.5-0.1H42.5C19-0.1,0,19,0,42.5v234.9c0,23.5,19.1,42.6,42.6,42.6h234.9
		c23.5,0,42.6-19.1,42.6-42.6V42.5C320,19,301-0.1,277.5-0.1L277.5-0.1z" />

							<polyline points="107.4,184.6 107.4,16.3 213.4,15.6 213.4,184.6 " />
							<path d="M59,197.6" />
							<path d="M264.5,184.6L163,249.3c-1.5,1-3.5,1-5.1,0L56.4,184.6H264.5z" />
							<path d="M106.6,138.6" />
						</svg>
					</div>
				</div>
				<div id="actionsControl">
					<div class="undoRedo">
						<!-- Bouton Undo -->
						<svg id="boutonUndo" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
							width="512" height="512">
							<path
								d="M7.7,15.007a1.5,1.5,0,0,1-2.121,0L.858,10.282a2.932,2.932,0,0,1,0-4.145L5.583,1.412A1.5,1.5,0,0,1,7.7,3.533L4.467,6.7l14.213,0A5.325,5.325,0,0,1,24,12.019V18.7a5.323,5.323,0,0,1-5.318,5.318H5.318a1.5,1.5,0,1,1,0-3H18.681A2.321,2.321,0,0,0,21,18.7V12.019A2.321,2.321,0,0,0,18.68,9.7L4.522,9.7,7.7,12.886A1.5,1.5,0,0,1,7.7,15.007Z" />
						</svg>

						<!-- Bouton Redo -->
						<svg xmlns="http://www.w3.org/2000/svg" id="boutonRedo" data-name="Layer 1" viewBox="0 0 24 24"
							width="512" height="512">
							<path
								d="M16.3,15.007a1.5,1.5,0,0,0,2.121,0l4.726-4.725a2.934,2.934,0,0,0,0-4.145L18.416,1.412A1.5,1.5,0,1,0,16.3,3.533L19.532,6.7,5.319,6.7A5.326,5.326,0,0,0,0,12.019V18.7a5.324,5.324,0,0,0,5.318,5.318H18.682a1.5,1.5,0,0,0,0-3H5.318A2.321,2.321,0,0,1,3,18.7V12.019A2.321,2.321,0,0,1,5.319,9.7l14.159,0L16.3,12.886A1.5,1.5,0,0,0,16.3,15.007Z" />
						</svg>
					</div>
				</div>
			</div>
			<div data-glow class="glow-wrapper">
				<div id="espacePrincipal_wrapper">
					<h1 id="titreAlgo_wrapper">
						<span contenteditable="true" id="titreAlgo">Titre de l'algorithme</span><span
							class="crayon">✎</span>
					</h1>
					<plan-travail id="espacePrincipal"></plan-travail>
					<div id="dico_wrapper" style="display: none"></div>
					<div id="biblio_wrapper" style="display: none"></div>
				</div>
			</div>
		</editeur-interface>
			<form id="transferForm" method="post" target="_blank">
				<input type="hidden" name="corpAlgo" id="corpAlgo" />
				<input type="hidden" name="nomFichier" id="nomFichier" />
				<input type="hidden" name="sourceImport" id="sourceImport" />
			</form>

		<script type="application/json" id="algoforge-runtime-config">{"initialAlgorithm":null,"title":null,"hostKind":"web","isExam":false,"prettifyInitialAlgorithm":false}</script>

		


	<script type="module">var Cn=Object.defineProperty;var Mn=(e)=>e;function Sn(e,t){this[e]=Mn.bind(null,t)}var An=(e,t)=>{for(var i in t)Cn(e,i,{get:t[i],enumerable:!0,configurable:!0,set:Sn.bind(t,i)})};var Ue=(e,t,i)=>()=>{if(e)try{t=e(e=0)}catch(n){i=[n]}if(i)throw i[0];return t};function Rt(e,t=[]){let i=Qe(e),n=i.find((s)=>s.typeElement==="DictionnaireDonnee"),r=qt(i.filter((s)=>s.typeElement!=="DictionnaireDonnee"),"plan:root"),o=Rn(n?.types??n?.contenu);return Hn({roots:r,dictionary:o,layouts:t.map((s)=>({...s,targetPaths:[...s.targetPaths]}))})}function qt(e,t,i){return{path:t,label:ue(i),nodes:e.flatMap((n,r)=>{let o=Fn(n,\`\${t}/n\${r}\`);return o?[o]:[]})}}function Fn(e,t){let i=qn(e.typeElement);if(!i)return;let n=Qe(e.enfants),r=[];if(i==="if"||i==="switch")r=Qe(e.conditions).map((o,s)=>qt(Qe(o.enfants),\`\${t}/b\${s}\`,fe(o.libelle)));else if(n.length){let o=e.estDecomposeAilleurs===!0?\`\${t}/plan\`:\`\${t}/s0\`;r=[qt(n,o)]}return{path:t,kind:i,label:ue(fe(e.libelle)),inputs:ji(e.listeDonnes),outputs:ji(e.listeResultats),expression:ue(fe(e.expressionATester)),iterator:ue(fe(e.variableAIterer)),lowerBound:ue(fe(e.borneInferieure)),upperBound:ue(fe(e.borneSuperieure)),step:ue(fe(e.pas)),increasing:typeof e.croissant==="boolean"?e.croissant:void 0,sequences:r}}function qn(e){switch(e){case"Probleme":return"problem";case"Procedure":return"procedure";case"StructureSi":return"if";case"StructureSwitch":return"switch";case"StructureIterativeBornee":return"bounded-loop";case"StructureIterativeNonBornee":return"unbounded-loop";case"ConditionSortie":return"exit";default:return}}function Qe(e){if(!Array.isArray(e))return[];return e.filter((t)=>Ht(t))}function ji(e){if(!Array.isArray(e))return[];return e.flatMap((t)=>{if(typeof t==="string")return ue(t)?[t.trim()]:[];if(!Ht(t))return[];let i=fe(t.nom??t._nom??t.name);return ue(i)?[i.trim()]:[]})}function Rn(e){if(!Ht(e))return{};return Object.fromEntries(Object.entries(e).flatMap(([t,i])=>{let n=t.trim();return n?[[n,typeof i==="string"?i:void 0]]:[]}))}function Ht(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function fe(e){return typeof e==="string"||typeof e==="number"?String(e):""}function ue(e){return e?.replace(/\\u00a0/gu," ").trim()||void 0}function Hn(e){Oi(e.roots);for(let t of e.layouts)Object.freeze(t.targetPaths),Object.freeze(t);return Object.freeze(e.layouts),Object.freeze(e.dictionary),Object.freeze(e)}function Oi(e){for(let t of e.nodes){for(let i of t.sequences)Oi(i);Object.freeze(t.inputs),Object.freeze(t.outputs),Object.freeze(t.sequences),Object.freeze(t)}Object.freeze(e.nodes),Object.freeze(e)}function tt(e){let t=e.serializeDocument(),i=Rt(t),n=new Map,r=new Map,o=e._espacePrincipal??document.querySelector("#espacePrincipal");if(o)r.set(i.roots.path,o),et(i.roots,jn(o),n,r);let s=On(r,n);return{snapshot:Rt(t,s),elements:n,plans:r}}function et(e,t,i,n){e.nodes.forEach((r,o)=>{let s=t[o];if(!s)return;i.set(r.path,s),Vn(r,s,i,n)})}function Vn(e,t,i,n){if(e.kind==="if"||e.kind==="switch"){let o=t._listeConditions?Array.from(t._listeConditions.children).filter(Un):[];e.sequences.forEach((s,c)=>{let u=o[c];if(!u)return;i.set(s.path,u),et(s,Vt(u._elemParent),i,n)});return}let r=e.sequences[0];if(!r)return;if(r.path.endsWith("/plan")&&t._sousPlan){let o=t._sousPlan.getProblemeLePlusHaut?.();n.set(r.path,t._sousPlan),et(r,Vt(o?._elemParent),i,n);return}et(r,Vt(t._elemParent),i,n)}function jn(e){return Array.from(e.children).filter($i).filter((t)=>t._parent==null)}function Vt(e){return(e?._listeElementsEnfants??[]).map(({element:t})=>t).filter((t)=>Boolean(t))}function On(e,t){let i=new Map;for(let[r,o]of t)if($i(o))i.set(o,r);let n=Math.max(parseFloat(document.body.style.getPropertyValue("--sizeModifier"))||1,0.001);return[...e].map(([r,o])=>{let s=[...i].filter(([m])=>m.parentElement===o).map(([m,f])=>({element:m,path:f})),c=s.map(({element:m})=>$n(m,n)),u=c.length?Math.min(...c.map(({x:m})=>m)):0,p=c.length?Math.min(...c.map(({y:m})=>m)):0,h=c.length?Math.max(...c.map(({x:m,width:f})=>m+f)):0,a=c.length?Math.max(...c.map(({y:m,height:f})=>m+f)):0;return{path:r,targetPaths:s.map((m)=>m.path),width:Math.max(0,h-u),height:Math.max(0,a-p),viewportWidth:o.clientWidth/Math.max(window.innerWidth,1)*100/n,viewportHeight:o.clientHeight/Math.max(window.innerWidth,1)*100/n}})}function $n(e,t){let i=e.getBoundingClientRect();return{x:parseFloat(String(e._abscisse??0))||0,y:parseFloat(String(e._ordonnee??0))||0,width:i.width>0?i.width/Math.max(window.innerWidth,1)*100/t:8,height:i.height>0?i.height/Math.max(window.innerWidth,1)*100/t:4}}function Un(e){return e instanceof HTMLElement}function $i(e){return e instanceof HTMLElement&&typeof e.constructor.typeElement==="string"}var jt=()=>{};function it(e,t,i){let n=structuredClone(e.serializeDocument()),r=structuredClone(n);if(!i(r))return!1;return e.applyDocumentSnapshot(r),e.ajouterEvenement({annuler:()=>e.applyDocumentSnapshot(structuredClone(n)),retablir:()=>e.applyDocumentSnapshot(structuredClone(r))}),!0}function nt(e,t,i,n){let r=Gn(e,t);if(!r||r.node.typeElement!=="StructureSi")return!1;let o=Gi(r.node.conditions),s=0,c=[];for(let u of o){if((typeof u.libelle==="string"?u.libelle.trim():"").toLocaleLowerCase()==="sinon"){c.push({...u,libelle:"Sinon"});continue}let h=n[s++];if(!h)return!1;c.push({...u,libelle:h})}if(s!==n.length)return!1;return r.container[r.index]={...r.node,typeElement:"StructureSwitch",expressionATester:i,conditions:c},!0}function Gn(e,t){let i=t.split("/");if(i.shift()!=="plan:root")return;let n=e,r;for(let o of i){let s=/^n(\\d+)$/u.exec(o);if(s){let u=Number(s[1]),p=n[u];if(!Ji(p))return;r={container:n,index:u,node:p};continue}if(!r)return;if(o==="s0"||o==="plan"){n=Ui(r.node.enfants);continue}let c=/^b(\\d+)$/u.exec(o);if(c){let u=Gi(r.node.conditions)[Number(c[1])];if(!u)return;n=Ui(u.enfants);continue}return}return r}function Ui(e){return Array.isArray(e)?e:[]}function Gi(e){return Array.isArray(e)?e.filter(Ji):[]}function Ji(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function tn(e){let t=null,i=!1,n="";for(let r=0;r<e.length;r++){let o=e[r];if(i){n+=t?" ":o,i=!1;continue}if(o==="\\\\"){i=!0,n+=t?" ":o;continue}if(t){if(o===t)t=null;n+=" ";continue}if(o==='"'||o==="'"&&di(e,r)){t=o,n+=" ";continue}n+=o}return n}function ve(e,t=[]){let i=tn(e),n=[],r=Array(i.length).fill(!1);for(let s of[...t].filter(Boolean).sort((c,u)=>u.length-c.length)){let c=0;while(c<i.length){let u=i.toLocaleLowerCase().indexOf(s.toLocaleLowerCase(),c);if(u<0)break;let p=i[u-1],h=i[u+s.length];if((!p||!/[\\p{L}\\p{N}_]/u.test(p))&&(!h||!/[\\p{L}\\p{N}_]/u.test(h))&&!r.slice(u,u+s.length).some(Boolean)){n.push(s.trim());for(let m=u;m<u+s.length;m++)r[m]=!0}c=u+Math.max(s.length,1)}}let o=[...i].map((s,c)=>r[c]?" ":s).join("");for(let s of o.matchAll(/[\\p{L}_][\\p{L}\\p{N}_]*/gu)){let c=s[0];if(!er.has(c.toLocaleUpperCase()))n.push(c)}return[...new Set(n.map((s)=>s.trim()).filter(Boolean))]}function Ve(e){if(!e)return"unknown";let t=e.trim();if(/^(?:true|false|vrai|faux)$/iu.test(t))return"boolean";if(/^[+-]?(?:\\d+(?:[.,]\\d+)?|[.,]\\d+)$/u.test(t))return"number";if(/^'(?:[^'\\\\]|\\\\.)'$/u.test(t))return"character";if(/^"(?:[^"\\\\]|\\\\.)*"$/u.test(t)||/^'(?:[^'\\\\]|\\\\.){2,}'$/u.test(t))return"string";return"unknown"}function be(e,t=[]){let i=e.trim(),n=on(i,["←","<-","->","==","="]);if(!n)return{isAssignment:!1,valid:!0,identifiers:[],inferredType:"unknown"};let r=i.slice(0,n.index).trim(),o=i.slice(n.index+n.operator.length).trim();if(!(tr.test(r)&&o.length>0&&n.operator!=="=="))return{isAssignment:n.operator!=="==",valid:!1,lhs:r||void 0,rhs:o||void 0,operator:n.operator,identifiers:ve(o,t),inferredType:Ve(o)};return{isAssignment:!0,valid:n.operator==="←"||n.operator==="<-",lhs:r,rhs:o,operator:n.operator,identifiers:ve(o,t),inferredType:Ve(o)}}function Se(e,t=[]){let i=e.trim();if(i.toLocaleLowerCase()==="sinon")return{valid:!0,isElse:!0,usesDoubleEquals:!1,identifiers:[],comparisons:[]};if(!i)return{valid:!1,isElse:!1,usesDoubleEquals:!1,identifiers:[],comparisons:[]};let n=tn(i),r=ir(n),o=n.includes("=="),s=/(?:\\b(?:ET|OU)\\b|&&|\\|\\|)\\s*$/iu.test(n)||/^\\s*(?:\\b(?:ET|OU)\\b|&&|\\|\\|)/iu.test(n),c=[];for(let h of n.matchAll(en)){let a=Math.max(n.lastIndexOf("&&",h.index),n.lastIndexOf("||",h.index),n.toLocaleUpperCase().lastIndexOf(" ET ",h.index),n.toLocaleUpperCase().lastIndexOf(" OU ",h.index))+1,m=[n.indexOf("&&",(h.index??0)+h[0].length),n.indexOf("||",(h.index??0)+h[0].length),n.toLocaleUpperCase().indexOf(" ET ",(h.index??0)+h[0].length),n.toLocaleUpperCase().indexOf(" OU ",(h.index??0)+h[0].length)].filter((y)=>y>=0),f=m.length?Math.min(...m):n.length,v=n.slice(a,h.index).replace(/^[\\s(]+|[\\s)]+$/g,"").trim(),g=i.slice((h.index??0)+h[0].length,f).replace(/^[\\s(]+|[\\s)]+$/g,"").trim();if(v&&g)c.push({left:v,operator:h[0],right:g,rightType:Ve(g)})}let u=[...n.matchAll(en)].length;return{valid:r&&!s&&!o&&(u===0||c.length===u),isElse:!1,usesDoubleEquals:o,identifiers:ve(i,t),comparisons:c}}function nn(e){let t=on(e,["->","="]);if(!t)return e;return\`\${e.slice(0,t.index).trim()} ← \${e.slice(t.index+t.operator.length).trim()}\`}function rn(e){return nr(e,"==","=")}function je(e,t){return e==="unknown"||t==="unknown"||e===t||(e==="character"||e==="string")&&(t==="character"||t==="string")}function ci(e){if(!e)return"unknown";let t=e.toLocaleLowerCase();if(t.includes("bool"))return"boolean";if(t.includes("caractère")&&!t.includes("chaine"))return"character";if(t.includes("chaine")||t.includes("chaîne"))return"string";if(t.includes("entier")||t.includes("décimal")||t.includes("nombre"))return"number";return"unknown"}function ir(e){let t=0;for(let i of e){if(i==="(")t++;if(i===")"&&--t<0)return!1}return t===0}function on(e,t){let i=null,n=0;for(let r=0;r<e.length;r++){let o=e[r];if(i){if(o===i&&e[r-1]!=="\\\\")i=null;continue}if(o==='"'||o==="'"&&di(e,r)){i=o;continue}if(o==="("){n++;continue}if(o===")"){n--;continue}if(n!==0)continue;let s=t.find((c)=>e.startsWith(c,r));if(s)return{operator:s,index:r}}return}function nr(e,t,i){let n=null,r="";for(let o=0;o<e.length;){let s=e[o];if(n){if(r+=s,s===n&&e[o-1]!=="\\\\")n=null;o++;continue}if(s==='"'||s==="'"&&di(e,o)){n=s,r+=s,o++;continue}if(e.startsWith(t,o)){r+=i,o+=t.length;continue}r+=s,o++}return r}function di(e,t){let i=e[t-1],n=e[t+1];return!(i&&n&&/\\p{L}/u.test(i)&&/\\p{L}/u.test(n))}var er,tr,en;var ui=Ue(()=>{er=new Set(["ET","OU","NON","SINON","TRUE","FALSE","VRAI","FAUX","POUR","ALLANT","DE","A","À","PAR","PAS","CROISSANT","DECROISSANT","DÉCROISSANT"]),tr=/^[\\p{L}_][\\p{L}\\p{N}_]*(?:[ \\t]+[\\p{L}_][\\p{L}\\p{N}_]*)*$/u,en=/(==|!=|<>|<=|>=|≠|≤|≥|=|<|>)/g});function an(e,t={}){let i=ln(e.roots),n=new Map(i.map((a)=>[a.node.path,a])),r=new Set(e.roots.nodes.map(({path:a})=>a)),o=Er(e),s=xr(e.roots,r),c={snapshot:e,indexed:i,byPath:n,availableBefore:s,rootNodePaths:r,knownSymbols:o},u=[],p=[];for(let a of Ct)try{u.push(...a.run(c))}catch(m){p.push({ruleId:a.id,message:m instanceof Error?m.message:String(m)})}let h=new Map(Ct.map((a,m)=>[a.id,m]));return u.sort((a,m)=>(h.get(a.ruleId)??0)-(h.get(m.ruleId)??0)||a.targetPaths[0]?.localeCompare(m.targetPaths[0]??"")||0),{findings:u,failures:p}}function O(e,t,i,n){return{id:e,severity:t,title:i,run:n}}function U(e,t,i,n,r,o,s){let c=Ct.find((p)=>p.id===e);if(!c)throw Error(\`Unknown anomaly rule: \${e}\`);return{fingerprint:[e,...t,o??""].join("|"),ruleId:e,severity:c.severity,title:c.title,message:i,explanation:n,evidence:o,suggestion:r,targetPaths:t,fix:s}}function rr(e){let t=[];for(let{node:i}of e.indexed){if(!ce(i)||oe(i)||e.rootNodePaths.has(i.path))continue;let n=e.availableBefore.get(i.path)??new Set,r=i.inputs.filter((o)=>!Mt(n,o));if(!r.length)continue;t.push(U("magic-input",[i.path],\`La donnée \${St(r)} ne provient d’aucun élément précédent.\`,"Une donnée d’un sous-problème doit être fournie par son contexte ou par un résultat calculé auparavant.","Reliez la donnée à un résultat antérieur ou corrigez l’interface du sous-problème.",r.join(", ")))}return t}function or(e){let t=[];for(let{node:i}of e.indexed){if(!ce(i)||oe(i)||!i.inputs.length)continue;let n=mi(i,e.knownSymbols),r=i.inputs.filter((o)=>!Mt(n,o));if(!r.length)continue;t.push(U("unused-input",[i.path],\`La donnée \${St(r)} n’est jamais utilisée.\`,"L’interface déclare une donnée qui n’est lue ni par ce problème ni par sa décomposition.","Utilisez cette donnée ou retirez-la de l’interface.",r.join(", ")))}return t}function sr(e){let t=[];for(let i of e.indexed){let{node:n,ancestors:r}=i;if(!ce(n)||oe(n)||e.rootNodePaths.has(n.path)||!n.outputs.length)continue;let o=Cr(i,e.knownSymbols);for(let c of r)for(let u of c.outputs)o.add(L(u));let s=n.outputs.filter((c)=>!Mt(o,c));if(!s.length)continue;t.push(U("unused-output",[n.path],\`Le résultat \${St(s)} n’est jamais réutilisé.\`,"Un résultat intermédiaire doit alimenter une étape suivante ou être propagé par l’interface parente.","Réutilisez ce résultat, propagez-le, ou retirez-le de l’interface.",s.join(", ")))}return t}function ar(e){let t=[];for(let{node:i}of e.indexed){if(oe(i))continue;let n=cn(i,e.knownSymbols);if(!n.valid)continue;let r=new Set(e.availableBefore.get(i.path)??[]);for(let c of i.inputs)r.add(L(c));let o=ce(i)?be(i.label??"",e.knownSymbols):void 0,s=n.identifiers.filter((c)=>!Mt(r,c)&&L(c)!==L(o?.lhs??""));if(!s.length)continue;t.push(U("magic-variable",[i.path],\`La variable \${St(s)} est lue avant d’être définie.\`,"Le dictionnaire peut documenter une variable, mais une valeur doit être introduite dans le flux de l’algorithme.","Ajoutez une donnée d’entrée, un calcul antérieur ou corrigez le nom utilisé.",s.join(", ")))}return t}function lr(e){return e.indexed.filter(({node:t,loops:i,inAlternative:n})=>t.kind==="exit"&&(!i.length||i.at(-1)?.kind!=="unbounded-loop"||!n)).map(({node:t})=>U("exit-outside-loop",[t.path],"Cet arrêt n’appartient pas à une branche d’une boucle non bornée.","Une condition de sortie n’a de sens que dans une alternative contrôlant une boucle non bornée.","Déplacez l’arrêt dans une condition de la boucle concernée."))}function cr(e){return e.indexed.filter(({node:t,loops:i})=>t.kind==="exit"&&i.at(-1)?.kind==="bounded-loop").map(({node:t})=>U("exit-in-bounded-loop",[t.path],"Cet arrêt se trouve dans une boucle déjà bornée.","Les bornes déterminent déjà la terminaison de cette boucle.","Retirez l’arrêt ou utilisez une boucle non bornée si la sortie est conditionnelle."))}function dr(e){let t=[];for(let i of fi(e.snapshot.roots)){let n=i.nodes.findIndex(({kind:o})=>o==="exit");if(n<0||n===i.nodes.length-1)continue;let r=i.nodes.slice(n+1).filter((o)=>!oe(o)).map(({path:o})=>o);if(!r.length)continue;t.push(U("unreachable-after-exit",r,"Ces éléments ne seront jamais exécutés après l’arrêt.","L’exécution de la branche se termine dès que la condition de sortie est atteinte.","Déplacez ces éléments avant l’arrêt ou dans une autre branche."))}return t}function ur(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="if"||n.kind==="switch")){if(Ae(i))continue;for(let n of i.sequences){let r=Se(n.label??"",e.knownSymbols);if(r.isElse||r.valid)continue;let o=r.usesDoubleEquals?{id:"normalize-comparison",label:"Remplacer == par =",requiresConfirmation:!1}:void 0;t.push(U("invalid-comparison-syntax",[n.path],"Cette condition n’utilise pas une syntaxe de comparaison valide.","AlgoForge utilise = pour comparer et ET, OU ou NON pour combiner les expressions.","Corrigez la condition.",n.label,o))}}return t}function pr(e){let t=[];for(let{node:i}of e.indexed){if(!ce(i)||oe(i))continue;let n=be(i.label??"",e.knownSymbols);if(!n.isAssignment||n.valid)continue;let r=n.operator==="="||n.operator==="->";t.push(U("invalid-assignment-syntax",[i.path],"Cette affectation doit utiliser la flèche ←.","Le symbole = est réservé aux comparaisons dans le formalisme AlgoForge.","Remplacez l’opérateur par ←.",i.label,r?{id:"normalize-assignment",label:"Utiliser ←",requiresConfirmation:!1}:void 0))}return t}function hr(e){let t=[];for(let i of e.indexed.filter(({node:n})=>n.kind==="unbounded-loop")){if(oe(i.node))continue;if(e.indexed.some((r)=>r.node.kind==="exit"&&r.loops.at(-1)?.path===i.node.path&&r.inAlternative))continue;t.push(U("unbounded-loop-without-exit",[i.node.path],"Cette boucle non bornée ne contient aucune condition de sortie.","Sans arrêt accessible, la boucle ne peut pas se terminer.","Ajoutez une alternative contenant une condition de sortie."))}return t}function mr(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="bounded-loop")){let n=pi(i.lowerBound),r=pi(i.upperBound),o=pi(i.step);if(n===void 0||r===void 0||o===void 0)continue;if(Math.abs(o)>0&&(n===r||(r>n?i.increasing!==!1:i.increasing===!1)))continue;t.push(U("nonterminating-bounded-loop",[i.path],"Les bornes, le sens et le pas de cette boucle ne permettent pas d’atteindre la fin.","Un pas nul ou un déplacement opposé à la borne terminale rend la boucle infinie.","Corrigez le pas, le sens ou les bornes de l’itération.",\`\${i.lowerBound} → \${i.upperBound}, pas \${i.step}\`))}return t}function fr(e){return fi(e.snapshot.roots).map((t)=>({nodes:t.nodes.filter((i)=>!oe(i))})).filter(({nodes:t})=>t.length>7).map(({nodes:t})=>U("too-many-children",t.map(({path:i})=>i),\`Cette décomposition contient \${t.length} sous-éléments directs.\`,"Au-delà de sept étapes, la décomposition devient difficile à lire.","Regroupez les étapes dans des sous-problèmes intermédiaires.",String(t.length)))}function gr(e){return e.snapshot.layouts.filter((t)=>!t.targetPaths.some((i)=>{let n=e.byPath.get(i)?.node;return n?oe(n):!1})).filter((t)=>t.width>t.viewportWidth||t.height>t.viewportHeight).map((t)=>U("plan-too-large",t.targetPaths,"Ce plan dépasse l’espace visible à 100 %.","Une disposition très étendue rend la lecture et l’export moins prévisibles.","Réorganisez automatiquement le plan ou rapprochez les éléments.",\`\${t.width.toFixed(1)} × \${t.height.toFixed(1)}\`,{id:"prettify-plan",label:"Réorganiser le plan",requiresConfirmation:!0,payload:{planPath:t.path}}))}function vr(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="if"||n.kind==="switch")){if(Ae(i))continue;let n=i.kind==="switch"?i.expression?.trim():void 0,r=[];for(let s of i.sequences){let c=Se(s.label??"",e.knownSymbols);if(!c.valid||c.isElse)continue;if(i.kind==="switch")r.push({type:Ve(s.label),path:s.path,value:s.label??"",variable:n});else for(let u of c.comparisons)r.push({type:u.rightType,path:s.path,value:u.right,variable:u.left.trim()})}let o=new Map;for(let s of r){let c=L(s.variable??"");if(!c)continue;o.set(c,[...o.get(c)??[],s])}for(let[s,c]of o){let u=c.filter(({type:a})=>a!=="unknown"),p=ci(un(e.snapshot,s));if(!u.some(({type:a})=>!je(a,u[0]?.type??"unknown")||!je(a,p)))continue;t.push(U("inconsistent-alternative-types",c.map(({path:a})=>a),\`Les valeurs comparées à \${s} n’ont pas des types compatibles.\`,"Toutes les alternatives portant sur une même information doivent employer des valeurs compatibles.","Corrigez les valeurs ou le type déclaré dans le dictionnaire.",c.map(({value:a,type:m})=>\`\${a} (\${m})\`).join(", ")))}}return t}function br(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="if")){if(Ae(i))continue;let n=i.sequences.map((o)=>({sequence:o,parsed:Se(o.label??"",e.knownSymbols)})).filter(({parsed:o})=>o.valid&&!o.isElse);if(n.length<2)continue;let r=sn(n[0]?.parsed);for(let{parsed:o}of n.slice(1)){let s=sn(o);r=new Set([...r].filter((c)=>s.has(c)))}if(r.size)continue;t.push(U("inconsistent-if-information",n.map(({sequence:o})=>o.path),"Les branches de cette structure ne testent aucune information commune.","Une chaîne SI/SINON SI est généralement destinée à discriminer un même état.","Séparez les tests indépendants ou reformulez les conditions."))}return t}function sn(e){if(!e)return new Set;return new Set([...e.identifiers,...e.comparisons.map(({left:t})=>t.trim()).filter(Boolean)].map(L))}function yr(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="switch")){if(Ae(i))continue;let n=new Set;for(let r of i.sequences){let o=Se(r.label??"",e.knownSymbols);if(o.isElse||!o.valid)continue;if(!(o.comparisons.length>0||/\\b(?:ET|OU)\\b|&&|\\|\\|/iu.test(r.label??""))){n.add(L(r.label??""));continue}let c=o.comparisons.length===1&&o.comparisons[0]?.operator==="="&&L(o.comparisons[0].left)===L(i.expression??"")&&!n.has(L(o.comparisons[0].right));t.push(U("switch-case-comparison",[r.path],"Un cas de switch doit contenir une valeur, pas une comparaison.","L’expression à tester est déjà portée par le switch.","Conservez uniquement la valeur du cas.",r.label,c?{id:"normalize-switch-case",label:"Conserver la valeur du cas",requiresConfirmation:!1,payload:{value:o.comparisons[0].right}}:void 0))}}return t}function wr(e){let t=[];for(let{node:i}of e.indexed.filter(({node:n})=>n.kind==="if")){if(Ae(i))continue;let n=i.sequences.map((u)=>({sequence:u,parsed:Se(u.label??"",e.knownSymbols)})),r=n.filter(({parsed:u})=>!u.isElse);if(r.length<3||n.some(({parsed:u})=>!u.valid))continue;let o=r.map(({parsed:u})=>u.comparisons[0]);if(o.some((u,p)=>!u||u.operator!=="="||r[p]?.parsed.comparisons.length!==1||u.rightType==="unknown"))continue;let s=o[0]?.left.trim()??"",c=o.map(({right:u})=>u.trim());if(!s||o.some(({left:u})=>L(u)!==L(s))||new Set(c.map(L)).size!==c.length)continue;t.push(U("if-prefer-switch",[i.path],"Cette structure SI serait plus lisible sous forme de switch.","Au moins trois branches comparent la même expression à des valeurs distinctes.","Transformez la structure en switch.",\`\${s}: \${c.join(", ")}\`,{id:"convert-if-to-switch",label:"Transformer en switch",requiresConfirmation:!0,payload:{variable:s,values:c}}))}return t}function _r(e){let t=new Map;for(let{node:n}of e.indexed.filter(({node:r})=>ce(r))){if(oe(n))continue;let r=be(n.label??"",e.knownSymbols);if(!r.isAssignment||!r.valid||!r.lhs||r.inferredType==="unknown")continue;let o=L(r.lhs);t.set(o,[...t.get(o)??[],{path:n.path,type:r.inferredType,value:r.rhs??""}])}let i=[];for(let[n,r]of t){let o=ci(un(e.snapshot,n));if(!r.some(({type:c})=>!je(c,r[0]?.type??"unknown")||!je(c,o)))continue;i.push(U("dynamic-type",r.map(({path:c})=>c),\`La variable \${n} reçoit des valeurs de types incompatibles.\`,"Une information doit conserver un type compatible pendant toute la conception.","Corrigez les affectations ou le type indiqué dans le dictionnaire.",r.map(({value:c,type:u})=>\`\${c} (\${u})\`).join(", ")))}return i}function ln(e){let t=[],i=(n,r,o,s)=>{n.nodes.forEach((c,u)=>{let p={node:c,sequence:n,index:u,ancestors:r,loops:o,inAlternative:s};t.push(p);let h=c.kind==="bounded-loop"||c.kind==="unbounded-loop"?[...o,c]:o,a=c.kind==="if"||c.kind==="switch";for(let m of c.sequences)i(m,[...r,c],h,s||a)})};return i(e,[],[],!1),t}function xr(e,t){let i=new Map,n=(r,o)=>{let s=new Set(o);for(let c of r.nodes){i.set(c.path,new Set(s));let u=new Set(s);for(let h of c.inputs)u.add(L(h));if(c.iterator)u.add(L(c.iterator));let p=c.sequences.map((h)=>n(h,u));if(c.kind==="if"||c.kind==="switch"){if(p.length){let h=new Set(p[0]);for(let a of p.slice(1))for(let m of[...h])if(!a.has(m))h.delete(m);for(let a of h)s.add(a)}}if(ce(c)){for(let a of c.outputs)s.add(L(a));let h=be(c.label??"");if(h.valid&&h.lhs)s.add(L(h.lhs))}if(t.has(c.path))for(let h of c.inputs)s.add(L(h))}return s};return n(e,new Set),i}function Er(e){let t=new Set(Object.keys(e.dictionary).map((i)=>i.trim()).filter(Boolean));for(let{node:i}of ln(e.roots)){for(let r of[...i.inputs,...i.outputs])if(r.trim())t.add(r.trim());if(i.iterator?.trim())t.add(i.iterator.trim());let n=be(i.label??"");if(n.lhs)t.add(n.lhs)}return[...t]}function mi(e,t){let i=new Set;for(let n of cn(e,t).identifiers)i.add(L(n));if(ce(e)){if(!be(e.label??"",t).isAssignment)for(let r of ve(e.label??"",t))i.add(L(r));for(let r of e.outputs)i.add(L(r))}for(let n of e.sequences){if(n.label)for(let r of ve(n.label,t))i.add(L(r));for(let r of n.nodes)for(let o of mi(r,t))i.add(o)}return i}function Cr(e,t){let i=new Set;for(let n of e.sequence.nodes.slice(e.index+1)){for(let r of n.inputs)i.add(L(r));for(let r of mi(n,t))i.add(r)}return i}function cn(e,t){if(ce(e)){let i=be(e.label??"",t);return i.isAssignment?{valid:i.valid,identifiers:[...i.identifiers]}:{valid:!0,identifiers:[]}}if(e.kind==="switch")return{valid:!0,identifiers:hi(e.expression??"",t)};if(e.kind==="bounded-loop")return{valid:!0,identifiers:ve(\`\${e.lowerBound??""} \${e.upperBound??""} \${e.step??""}\`,t)};if(e.kind==="if"){let i=e.sequences.map((n)=>Se(n.label??"",t));return{valid:i.every(({valid:n,isElse:r})=>n||r),identifiers:i.flatMap((n,r)=>Mr(e.sequences[r]?.label??"",n,t))}}return{valid:!0,identifiers:[]}}function Mr(e,t,i){if(t.isElse)return[];let n=new Set(t.identifiers.filter((r)=>dn(r,i)));if(t.comparisons.length){for(let r of t.comparisons)for(let o of[r.left,r.right])for(let s of hi(o,i))n.add(s);return[...n]}for(let r of e.split(/\\b(?:ET|OU)\\b|&&|\\|\\|/iu)){let o=r.replace(/^\\s*NON\\b/iu,"").replace(/[()]/gu,"").trim();for(let s of hi(o,i))n.add(s)}return[...n]}function hi(e,t){let i=ve(e,t),n=new Set(i.filter((o)=>dn(o,t))),r=e.trim();if(/^[\\p{L}_][\\p{L}\\p{N}_]*$/u.test(r)||/[+\\-*/%\\[\\]]/u.test(r))for(let o of i)n.add(o);return[...n]}function dn(e,t){return t.some((i)=>L(i)===L(e))}function fi(e){let t=[e];for(let i of e.nodes)for(let n of i.sequences)t.push(...fi(n));return t}function un(e,t){let i=Object.keys(e.dictionary).find((n)=>L(n)===L(t));return i?e.dictionary[i]:void 0}function ce(e){return e.kind==="problem"||e.kind==="procedure"}function oe(e){if(ce(e))return!e.label;if(e.kind==="if")return Ae(e);if(e.kind==="switch")return!e.expression||Ae(e);if(e.kind==="bounded-loop")return!e.iterator||!e.lowerBound||!e.upperBound||!e.step;if(e.kind==="unbounded-loop")return!e.sequences.some((t)=>t.nodes.some((i)=>!oe(i)));return!1}function Ae(e){return(e.kind==="if"||e.kind==="switch")&&(!e.sequences.length||e.sequences.some((t)=>!t.label))}function Mt(e,t){return e.has(L(t))}function L(e){return e.trim().toLocaleLowerCase()}function St(e){if(e.length<=1)return\`« \${e[0]??""} »\`;return e.map((t)=>\`« \${t} »\`).join(", ")}function pi(e){if(!e||!/^[+-]?(?:\\d+(?:[.,]\\d+)?|[.,]\\d+)$/u.test(e.trim()))return;let t=Number(e.replace(",","."));return Number.isFinite(t)?t:void 0}var Ct,wl;var pn=Ue(()=>{ui();Ct=[O("magic-input","error","Donnée magique",rr),O("unused-input","error","Donnée inutilisée",or),O("unused-output","error","Résultat inutilisé",sr),O("magic-variable","error","Variable magique",ar),O("exit-outside-loop","error","Arrêt hors itération",lr),O("exit-in-bounded-loop","error","Arrêt dans une itération bornée",cr),O("unreachable-after-exit","warning","Éléments jamais exécutés",dr),O("invalid-comparison-syntax","error","Syntaxe de comparaison incorrecte",ur),O("invalid-assignment-syntax","error","Syntaxe d’affectation incorrecte",pr),O("unbounded-loop-without-exit","error","Boucle sans sortie",hr),O("nonterminating-bounded-loop","error","Boucle bornée sans fin",mr),O("too-many-children","warning","Trop de sous-éléments",fr),O("plan-too-large","warning","Plan trop grand",gr),O("inconsistent-alternative-types","error","Types inconsistants",vr),O("inconsistent-if-information","warning","Informations inconsistantes",br),O("switch-case-comparison","error","Comparaison dans un switch",yr),O("if-prefer-switch","warning","Switch préférable",wr),O("dynamic-type","warning","Variable dynamiquement typée",_r)],wl=Ct.map(({id:e})=>e)});var hn=\`
#anomaly_btn {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	padding: 0;
	border: 0;
	background: transparent;
	color: var(--fgColor);
	user-select: none;
	cursor: pointer;
}
#anomaly_btn .anomaly-icon {
	width: 24px;
	height: 24px;
	fill: currentColor;
	transition: all .1s ease-in-out;
}
#anomaly_btn:hover .anomaly-icon { color: var(--fgColorHover); scale: 1.1; }
#anomaly_btn:active .anomaly-icon { scale: 1; }
#anomaly_btn[aria-expanded="true"] .anomaly-icon { color: var(--fgColorHover); }
#anomaly_btn .anomaly-counts {
	position: absolute;
	inset: -7px -9px auto auto;
	display: flex;
	flex-direction: column;
	gap: 1px;
	pointer-events: none;
}
#anomaly_btn .anomaly-count {
	box-sizing: border-box;
	display: grid;
	place-items: center;
	min-width: 14px;
	height: 14px;
	padding: 0 3px;
	border: 1px solid var(--bgColorTertiary);
	border-radius: 999px;
	color: white;
	font: 700 8px/1 sans-serif;
	box-shadow: 0 1px 2px rgb(0 0 0 / 28%);
}
#anomaly_btn .anomaly-error-count { background: #b42318; }
#anomaly_btn .anomaly-warning-count { background: #a15c00; }
#anomaly_btn.analyzing .anomaly-icon { animation: anomaly-pulse .8s ease-in-out infinite alternate; }
@keyframes anomaly-pulse { to { opacity: .35; scale: .92; } }

#anomaly_wrapper {
	position: absolute;
	z-index: 220;
	top: 0;
	right: 0;
	box-sizing: border-box;
	display: none;
	flex-direction: column;
	width: min(31rem, 94vw);
	height: 100%;
	background: var(--bgColor, #fff);
	color: var(--fgColor, #202124);
	border-left: 1px solid color-mix(in srgb, currentColor 20%, transparent);
	box-shadow: -10px 0 28px rgb(0 0 0 / 18%);
}
#anomaly_wrapper.open { display: flex; }
.anomaly-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1rem .65rem; }
.anomaly-header h2 { margin: 0; font-size: 1.15rem; }
.anomaly-close { border: 0; background: transparent; color: inherit; padding: .5rem; font-size: 1.25rem; cursor: pointer; }
.anomaly-filters { display: flex; gap: .4rem; padding: 0 1rem .75rem; }
.anomaly-filter { border: 1px solid color-mix(in srgb, currentColor 28%, transparent); background: transparent; color: inherit; border-radius: 999px; padding: .4rem .7rem; cursor: pointer; }
.anomaly-filter[aria-pressed="true"] { background: var(--accentColor, #5267df); border-color: transparent; color: white; }
.anomaly-status { min-height: 1.3rem; margin: 0; padding: 0 1rem .6rem; font-size: .82rem; opacity: .78; }
.anomaly-list { overflow: auto; padding: 0 1rem 2rem; }
.anomaly-severity-title { margin: .7rem 0 .4rem; font-size: .95rem; }
.anomaly-rule-group { margin-bottom: .9rem; }
.anomaly-rule-title { margin: .5rem 0; font-size: .83rem; text-transform: uppercase; letter-spacing: .035em; }
.anomaly-card { border: 1px solid color-mix(in srgb, currentColor 22%, transparent); border-left-width: 4px; border-radius: .55rem; padding: .75rem; margin-bottom: .5rem; background: color-mix(in srgb, var(--bgColor, #fff) 94%, currentColor); }
.anomaly-card[data-severity="error"] { border-left-color: #d92d20; }
.anomaly-card[data-severity="warning"] { border-left-color: #d97706; }
.anomaly-card h4 { margin: 0 0 .35rem; font-size: .95rem; }
.anomaly-card p { margin: .35rem 0; line-height: 1.35; font-size: .86rem; }
.anomaly-evidence { padding: .4rem; border-radius: .35rem; background: rgb(0 0 0 / 6%); overflow-wrap: anywhere; }
.anomaly-actions { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .65rem; }
.anomaly-action { border: 0; border-radius: .4rem; padding: .45rem .65rem; cursor: pointer; background: var(--accentColor, #5267df); color: white; font-weight: 650; }
.anomaly-action.secondary { background: transparent; color: inherit; border: 1px solid color-mix(in srgb, currentColor 35%, transparent); }
.anomaly-empty { padding: 2rem 1rem; text-align: center; opacity: .78; }
.anomaly-target-error { filter: drop-shadow(0 0 .55rem #d92d20) !important; outline: 3px solid #d92d20 !important; outline-offset: 4px; }
.anomaly-target-warning { filter: drop-shadow(0 0 .55rem #d97706) !important; outline: 3px dashed #d97706 !important; outline-offset: 4px; }
#anomaly_wrapper button:focus-visible, #anomaly_btn:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }
\`;var vn={};An(vn,{initializeAnomalyDetection:()=>Sr,setAnomalyDetectionEnabled:()=>fn});function Sr(e){fn(e,!0)}function fn(e,t){if(t){if(Oe)return;Oe=new gn(e),Oe.initialize();return}Oe?.destroy(),Oe=void 0}class gn{editor;active=!1;capture;result={findings:[],failures:[]};filter="all";scanVersion=0;debounceTimer;highlightTimer;events=new AbortController;style;button=this.createToolbarButton();drawer=this.createDrawer();list=this.drawer.querySelector(".anomaly-list");status=this.drawer.querySelector(".anomaly-status");constructor(e){this.editor=e}initialize(){if(document.getElementById("anomaly_btn"))return;this.active=!0,this.style=document.createElement("style"),this.style.dataset.feature="anomaly-detection",this.style.textContent=hn,document.head.append(this.style),document.getElementById("dicobiblioControl")?.prepend(this.button),(document.getElementById("espacePrincipal_wrapper")??this.editor).append(this.drawer),this.bindEvents(),this.scanImmediately()}destroy(){if(this.active=!1,this.scanVersion++,this.debounceTimer)clearTimeout(this.debounceTimer);if(this.highlightTimer)clearTimeout(this.highlightTimer);this.events.abort(),this.clearHighlights(),this.capture=void 0,this.result={findings:[],failures:[]},this.button.remove(),this.drawer.remove(),this.style?.remove()}bindEvents(){let e=this.events.signal;this.button.addEventListener("click",()=>this.toggleDrawer(),{signal:e}),this.drawer.querySelector(".anomaly-close")?.addEventListener("click",()=>this.closeDrawer(),{signal:e}),this.drawer.querySelectorAll(".anomaly-filter").forEach((t)=>{t.addEventListener("click",()=>{this.filter=t.dataset.filter??"all",this.drawer.querySelectorAll(".anomaly-filter").forEach((i)=>i.setAttribute("aria-pressed",String(i===t))),this.render()},{signal:e})}),this.editor.addEventListener("algoforge:document-change",()=>this.scheduleScan(),{signal:e}),this.editor.addEventListener("input",()=>this.scheduleScan(),{capture:!0,signal:e}),this.editor.addEventListener("change",()=>this.scheduleScan(),{capture:!0,signal:e});for(let t of["biblio_btn","dico_btn"])document.getElementById(t)?.addEventListener("click",()=>{if(this.drawer.classList.contains("open"))this.closeDrawer()},{signal:e});document.addEventListener("keydown",(t)=>{if(t.key==="Escape"&&this.drawer.classList.contains("open"))this.closeDrawer()},{signal:e})}scheduleScan(){if(!this.active)return;if(this.scanVersion++,this.setAnalyzing(!0),this.debounceTimer)clearTimeout(this.debounceTimer);let e=this.scanVersion;this.debounceTimer=setTimeout(()=>this.scan(e),250)}scanImmediately(){if(!this.active)return;this.scanVersion++,this.setAnalyzing(!0),this.scan(this.scanVersion)}scan(e){queueMicrotask(()=>{if(!this.active||e!==this.scanVersion)return;try{let t=tt(this.editor),i=an(t.snapshot);if(!this.active||e!==this.scanVersion)return;this.capture=t,this.result=i;for(let n of i.failures)console.error(\`[Anomalies] Échec de la règle \${n.ruleId}: \${n.message}\`)}catch(t){console.error("[Anomalies] Échec de l’analyse",t),this.result={findings:[],failures:[{ruleId:"magic-input",message:String(t)}]}}if(!this.active)return;this.setAnalyzing(!1),this.updateCounts(),this.render()})}setAnalyzing(e){this.button.classList.toggle("analyzing",e),this.button.setAttribute("aria-busy",String(e)),this.status.textContent=e?"Analyse en cours…":""}updateCounts(){let e=this.result.findings.filter(({severity:r})=>r==="error").length,t=this.result.findings.filter(({severity:r})=>r==="warning").length,i=this.button.querySelector(".anomaly-error-count"),n=this.button.querySelector(".anomaly-warning-count");i.textContent=String(e),n.textContent=String(t),i.hidden=e===0,n.hidden=t===0,this.button.setAttribute("aria-label",\`Anomalies : \${e} erreurs et \${t} avertissements\`)}render(){if(this.list.replaceChildren(),this.result.failures.length)this.status.textContent=\`Règles en échec : \${this.result.failures.map((t)=>t.ruleId).join(", ")}. Les autres résultats restent disponibles.\`;else if(!this.button.classList.contains("analyzing"))this.status.textContent="Analyse mise à jour automatiquement.";let e=this.result.findings.filter(({severity:t})=>this.filter==="all"||t===this.filter);if(!e.length){let t=document.createElement("p");t.className="anomaly-empty",t.textContent="Aucune anomalie dans ce filtre.",this.list.append(t);return}for(let t of["error","warning"]){let i=e.filter((o)=>o.severity===t);if(!i.length)continue;let n=document.createElement("h3");n.className="anomaly-severity-title",n.textContent=t==="error"?\`⛔ Erreurs (\${i.length})\`:\`⚠ Avertissements (\${i.length})\`,this.list.append(n);let r=new Map;for(let o of i)r.set(o.ruleId,[...r.get(o.ruleId)??[],o]);for(let o of r.values())this.renderRuleGroup(o)}}renderRuleGroup(e){let t=document.createElement("section");t.className="anomaly-rule-group";let i=document.createElement("h4");i.className="anomaly-rule-title",i.textContent=e[0]?.title??"Anomalie",t.append(i);for(let n of e)t.append(this.createFindingCard(n));this.list.append(t)}createFindingCard(e){let t=document.createElement("article");if(t.className="anomaly-card",t.dataset.severity=e.severity,At(t,"h4",e.message),At(t,"p",e.explanation),e.evidence)At(t,"p",\`Constat : \${e.evidence}\`,"anomaly-evidence");At(t,"p",\`Suggestion : \${e.suggestion}\`);let i=document.createElement("div");i.className="anomaly-actions";let n=mn("Modifier ici","secondary");if(n.addEventListener("click",()=>this.navigateTo(e)),i.append(n),e.fix){let r=mn(e.fix.label);r.addEventListener("click",()=>this.applyFix(e,r)),i.append(r)}return t.append(i),t}navigateTo(e){if(!this.capture)return;this.clearHighlights();let i=e.targetPaths.map((r)=>this.capture?.elements.get(r)).filter((r)=>r instanceof HTMLElement).map((r)=>r._structure??r);i[0]?.closest("sous-plan-travail")?.ouvrir?.(),this.editor._selection?.deselectionnerTout();for(let r of i)this.editor._selection?.selectionnerElement(r),r.classList.add(\`anomaly-target-\${e.severity}\`);i[0]?.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),this.highlightTimer=setTimeout(()=>this.clearHighlights(),3500)}clearHighlights(){if(this.highlightTimer)clearTimeout(this.highlightTimer);this.editor.querySelectorAll(".anomaly-target-error, .anomaly-target-warning").forEach((e)=>e.classList.remove("anomaly-target-error","anomaly-target-warning"))}applyFix(e,t){let i=this.result.findings.find((r)=>r.fingerprint===e.fingerprint&&r.fix?.id===e.fix?.id);if(!i?.fix||!this.capture){t.disabled=!0,this.status.textContent="Ce résultat n’est plus à jour. Nouvelle analyse en cours…",this.scanImmediately();return}if(i.fix.requiresConfirmation){let r=i.fix.id==="convert-if-to-switch"?"Aperçu : la structure SI sera remplacée par un switch, sans modifier le contenu des branches.":"Aperçu : les éléments du plan seront automatiquement rapprochés et alignés.";if(!window.confirm(\`\${r}

Cette opération constituera une seule action annulable. Continuer ?\`))return}if(!this.performFix(i))t.disabled=!0,this.status.textContent="La correction n’est plus applicable. Nouvelle analyse en cours…";this.scanImmediately()}performFix(e){let t=e.fix,i=e.targetPaths[0];if(!t||!i||!this.capture)return!1;if(t.id==="normalize-assignment"||t.id==="normalize-comparison"||t.id==="normalize-switch-case"){let n=this.capture.elements.get(i);if(!n)return!1;let r=Ar(n),o=t.id==="normalize-assignment"?nn(r):t.id==="normalize-comparison"?rn(r):String(t.payload?.value??"");if(!o||o===r)return!1;return gi(n,o),this.editor.ajouterEvenement({annuler:()=>gi(n,r),retablir:()=>gi(n,o)}),!0}if(t.id==="convert-if-to-switch"){let n=String(t.payload?.variable??""),r=t.payload?.values;if(!n||!Array.isArray(r))return!1;return it(this.editor,"Transformer le SI en switch",(o)=>nt(o,i,n,r))}if(t.id==="prettify-plan"){let n=String(t.payload?.planPath??""),r=this.capture.plans.get(n);if(!r)return!1;r.ouvrir?.();let o=structuredClone(this.editor.serializeDocument());this.editor.prettifyPlanActif({enregistrerEvenement:!1});let s=structuredClone(this.editor.serializeDocument());if(JSON.stringify(o)===JSON.stringify(s))return!1;return this.editor.ajouterEvenement({annuler:()=>this.editor.applyDocumentSnapshot(structuredClone(o)),retablir:()=>this.editor.applyDocumentSnapshot(structuredClone(s))}),!0}return!1}toggleDrawer(){if(this.drawer.classList.contains("open"))this.closeDrawer();else this.openDrawer()}openDrawer(){for(let e of["bibliotheque-algorithmique","dictionnaire-donnee"])try{document.querySelector(e)?.fermer?.()}catch(t){console.warn("[Anomalies] Impossible de fermer "+e,t)}this.drawer.classList.add("open"),this.button.setAttribute("aria-expanded","true"),this.drawer.querySelector(".anomaly-close")?.focus()}closeDrawer(){this.drawer.classList.remove("open"),this.button.setAttribute("aria-expanded","false"),this.button.focus()}createToolbarButton(){let e=document.createElement("button");e.id="anomaly_btn",e.type="button",e.dataset.title="Anomalies de conception",e.setAttribute("aria-controls","anomaly_wrapper"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Anomalies : analyse en cours");let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("anomaly-icon"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("aria-hidden","true");let i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M12 2.25c.54 0 1.04.29 1.31.76l9.26 16.04A1.51 1.51 0 0 1 21.26 21H2.74a1.51 1.51 0 0 1-1.31-2.26L10.69 3c.27-.47.77-.76 1.31-.76Zm0 2.56L3.65 19.25h16.7L12 4.81Zm-1 4.44h2v5.5h-2v-5.5Zm0 7.25h2v2h-2v-2Z"),t.append(i);let n=document.createElement("span");n.className="anomaly-counts";let r=document.createElement("span");r.className="anomaly-count anomaly-error-count",r.textContent="0",r.hidden=!0;let o=document.createElement("span");return o.className="anomaly-count anomaly-warning-count",o.textContent="0",o.hidden=!0,n.append(r,o),e.append(t,n),e}createDrawer(){let e=document.createElement("aside");return e.id="anomaly_wrapper",e.setAttribute("aria-label","Anomalies de conception"),e.innerHTML=\`
			<div class="anomaly-header"><h2>Anomalies de conception</h2><button type="button" class="anomaly-close" aria-label="Fermer les anomalies">✕</button></div>
			<div class="anomaly-filters" role="group" aria-label="Filtrer les anomalies">
				<button type="button" class="anomaly-filter" data-filter="all" aria-pressed="true">Toutes</button>
				<button type="button" class="anomaly-filter" data-filter="error" aria-pressed="false">Erreurs</button>
				<button type="button" class="anomaly-filter" data-filter="warning" aria-pressed="false">Avertissements</button>
			</div>
			<p class="anomaly-status" aria-live="polite"></p>
			<div class="anomaly-list"></div>\`,e}}function Ar(e){if(e.localName==="condition-element")return e._libelle??e.querySelector(".libelle")?.textContent??"";return e.libelle??e._libelle??e.textContent??""}function gi(e,t){if(e.localName==="condition-element")e._libelle=t;else if("libelle"in e)e.libelle=t;else e._libelle=t}function At(e,t,i,n){let r=document.createElement(t);if(r.textContent=i,n)r.className=n;e.append(r)}function mn(e,t=""){let i=document.createElement("button");return i.type="button",i.className=\`anomaly-action \${t}\`.trim(),i.textContent=e,i}var Oe;var bn=Ue(()=>{jt();pn();ui()});function yn(e,t,i){let n=t,r=new AbortController;document.addEventListener("algoforge:settings-opened",(s)=>{let c=s.detail?.container;if(!(c instanceof HTMLElement)||c.querySelector("#switchAnomalyContainer"))return;let u=document.createElement("div");u.id="anomalyDetectionOption",u.className="effect-option";let p=document.createElement("span");p.textContent="Détection des anomalies — Expérimental";let h=document.createElement("button");h.id="switchAnomalyContainer",h.type="button",h.className="switch-container",h.setAttribute("role","switch"),h.setAttribute("aria-label","Activer la détection des anomalies");let a=document.createElement("span");a.id="switchAnomalyDisplayer",a.className="switch-displayer",h.append(a),u.append(p,h);let m=c.querySelector(".effect-option");c.insertBefore(u,m);let f=()=>{h.setAttribute("aria-checked",String(n)),h.style.backgroundColor=n?"var(--titleColor)":"var(--fgColorSemiTransparent)",a.style.left=n?"auto":"2px",a.style.right=n?"2px":"auto"};f(),h.addEventListener("click",()=>{n=!n,e.setCookie("anomalyDetection",String(n),365),f(),i(n)},{signal:r.signal})},{signal:r.signal});let o=document.querySelector("#MenuCompteDiv .editor-options");if(o)document.dispatchEvent(new CustomEvent("algoforge:settings-opened",{detail:{container:o}}));return()=>r.abort()}class De extends Error{constructor(e){super(e);this.name="AlgoForgeFormatError"}}function ze(e){if(Array.isArray(e))return{version:0,algorithm:e};if(typeof e!=="object"||e===null)throw new De("AlgoForge documents must contain a legacy JSON array or a versioned document object.");let t=e,i=t.version;if(typeof i!=="number"||!Number.isInteger(i)||i<0)throw new De("Versioned AlgoForge documents must declare a non-negative integer version.");if(i>1)throw new De(\`This document uses AlgoForge format version \${i}. AlgoForge format version 1 is the newest version supported here; a newer AlgoForge version is required.\`);if(i!==1)throw new De("AlgoForge format version 0 is represented by a legacy root JSON array, not a versioned object.");if(!Array.isArray(t.algorithm))throw new De('AlgoForge format version 1 requires an "algorithm" array.');return{version:i,algorithm:t.algorithm}}function Lt(e){return{version:1,algorithm:e}}function Pe(e){return\`\${JSON.stringify(Lt(e),null,2)}
\`}(function(){var e=(T,B)=>{let Y=(C)=>{for(let M=0,{length:H}=C;M<H;M++)G(C[M])},G=({target:C,attributeName:M,oldValue:H})=>{C.attributeChangedCallback(M,H,C.getAttribute(M))};return(C,M)=>{let{observedAttributes:H}=C.constructor;return H&&T(M).then(()=>{new B(Y).observe(C,{attributes:!0,attributeOldValue:!0,attributeFilter:H});for(let Q=0,{length:_}=H;Q<_;Q++)C.hasAttribute(H[Q])&&G({target:C,attributeName:H[Q],oldValue:null})}),C}};/*! (c) Andrea Giammarchi - ISC */let t=!0,i=!1,n="querySelectorAll",r="querySelectorAll",{document:o,Element:s,MutationObserver:c,Set:u,WeakMap:p}=self,h=(T)=>(r in T),{filter:a}=[];var m=(T)=>{let B=new p,Y=(_,z)=>{let q;if(z)for(let V,x=((R)=>R.matches||R.webkitMatchesSelector||R.msMatchesSelector)(_),S=0,{length:Z}=C;S<Z;S++)x.call(_,V=C[S])&&(B.has(_)||B.set(_,new u),q=B.get(_),q.has(V)||(q.add(V),T.handle(_,z,V)));else B.has(_)&&(q=B.get(_),B.delete(_),q.forEach((V)=>{T.handle(_,z,V)}))},G=(_,z=!0)=>{for(let q=0,{length:V}=_;q<V;q++)Y(_[q],z)},{query:C}=T,M=T.root||o,H=((_,z=document,q=MutationObserver,V=["*"])=>{let x=(R,ne,re,se,ae,he)=>{for(let W of R)(he||(n in W))&&(ae?re.has(W)||(re.add(W),se.delete(W),_(W,ae)):se.has(W)||(se.add(W),re.delete(W),_(W,ae)),he||x(W[n](ne),ne,re,se,ae,t))},S=new q((R)=>{if(V.length){let ne=V.join(","),re=new Set,se=new Set;for(let{addedNodes:ae,removedNodes:he}of R)x(he,ne,re,se,i,i),x(ae,ne,re,se,t,i)}}),{observe:Z}=S;return(S.observe=(R)=>Z.call(S,R,{subtree:t,childList:t}))(z),S})(Y,M,c,C),{attachShadow:Q}=s.prototype;return Q&&(s.prototype.attachShadow=function(_){let z=Q.call(this,_);return H.observe(z),z}),C.length&&G(M[r](C)),{drop:(_)=>{for(let z=0,{length:q}=_;z<q;z++)B.delete(_[z])},flush:()=>{let _=H.takeRecords();for(let z=0,{length:q}=_;z<q;z++)G(a.call(_[z].removedNodes,h),!1),G(a.call(_[z].addedNodes,h),!0)},observer:H,parse:G}};let{document:f,Map:v,MutationObserver:g,Object:y,Set:N,WeakMap:te,Element:Te,HTMLElement:wn,Node:vi,Error:bi,TypeError:yi,Reflect:_n}=self,{defineProperty:$e,keys:xn,getOwnPropertyNames:En,setPrototypeOf:Le}=y,Be=!self.customElements,wi=(T)=>{let B=xn(T),Y=[],G=new N,{length:C}=B;for(let M=0;M<C;M++){Y[M]=T[B[M]];try{delete T[B[M]]}catch(H){G.add(M)}}return()=>{for(let M=0;M<C;M++)G.has(M)||(T[B[M]]=Y[M])}};if(Be){let V=function(){let{constructor:x}=this;if(!B.has(x))throw new yi("Illegal constructor");let S=B.get(x);if(_)return q(_,S);let Z=T.call(f,S);return q(Le(Z,x.prototype),S)},{createElement:T}=f,B=new v,Y=new v,G=new v,C=new v,M=[],H=(x,S,Z)=>{let R=G.get(Z);if(S&&!R.isPrototypeOf(x)){let re=wi(x);_=Le(x,R);try{new R.constructor}finally{_=null,re()}}let ne=(S?"":"dis")+"connectedCallback";ne in R&&x[ne]()},{parse:Q}=m({query:M,handle:H}),_=null,z=(x)=>{if(!Y.has(x)){let S,Z=new Promise((R)=>{S=R});Y.set(x,{$:Z,_:S})}return Y.get(x).$},q=e(z,g);self.customElements={define:(x,S)=>{if(C.has(x))throw new bi(\`the name "\${x}" has already been used with this registry\`);B.set(S,x),G.set(x,S.prototype),C.set(x,S),M.push(x),z(x).then(()=>{Q(f.querySelectorAll(x))}),Y.get(x)._(S)},get:(x)=>C.get(x),whenDefined:z},$e(V.prototype=wn.prototype,"constructor",{value:V}),self.HTMLElement=V,f.createElement=function(x,S){let Z=S&&S.is,R=Z?C.get(Z):C.get(x);return R?new R:T.call(f,x)},"isConnected"in vi.prototype||$e(vi.prototype,"isConnected",{configurable:!0,get(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(Be=!self.customElements.get("extends-br"),Be)try{let T=function(){return self.Reflect.construct(HTMLBRElement,[],T)};T.prototype=HTMLLIElement.prototype;let B="extends-br";self.customElements.define("extends-br",T,{extends:"br"}),Be=f.createElement("br",{is:B}).outerHTML.indexOf(B)<0;let{get:Y,whenDefined:G}=self.customElements;self.customElements.whenDefined=function(C){return G.call(this,C).then((M)=>M||Y.call(this,C))}}catch(T){}if(Be){let _i=function(w){let P=H.get(w);ne(P.querySelectorAll(this),w.isConnected)},T=self.customElements,{createElement:B}=f,{define:Y,get:G,upgrade:C}=T,{construct:M}=_n||{construct(w){return w.call(this)}},H=new te,Q=new N,_=new v,z=new v,q=new v,V=new v,x=[],S=[],Z=(w)=>V.get(w)||G.call(T,w),R=(w,P,j)=>{let F=q.get(j);if(P&&!F.isPrototypeOf(w)){let Tt=wi(w);W=Le(w,F);try{new F.constructor}finally{W=null,Tt()}}let J=(P?"":"dis")+"connectedCallback";J in F&&w[J]()},{parse:ne}=m({query:S,handle:R}),{parse:re}=m({query:x,handle(w,P){H.has(w)&&(P?Q.add(w):Q.delete(w),S.length&&_i.call(S,w))}}),{attachShadow:se}=Te.prototype;se&&(Te.prototype.attachShadow=function(w){let P=se.call(this,w);return H.set(this,P),P});let ae=(w)=>{if(!z.has(w)){let P,j=new Promise((F)=>{P=F});z.set(w,{$:j,_:P})}return z.get(w).$},he=e(ae,g),W=null;En(self).filter((w)=>/^HTML.*Element$/.test(w)).forEach((w)=>{let P=self[w];function j(){let{constructor:F}=this;if(!_.has(F))throw new yi("Illegal constructor");let{is:J,tag:Tt}=_.get(F);if(J){if(W)return he(W,J);let xi=B.call(f,Tt);return xi.setAttribute("is",J),he(Le(xi,F.prototype),J)}return M.call(this,P,[],F)}Le(j,P),$e(j.prototype=P.prototype,"constructor",{value:j}),$e(self,w,{value:j})}),f.createElement=function(w,P){let j=P&&P.is;if(j){let J=V.get(j);if(J&&_.get(J).tag===w)return new J}let F=B.call(f,w);return j&&F.setAttribute("is",j),F},T.get=Z,T.whenDefined=ae,T.upgrade=function(w){let P=w.getAttribute("is");if(P){let j=V.get(P);if(j)return void he(Le(w,j.prototype),P)}C.call(T,w)},T.define=function(w,P,j){if(Z(w))throw new bi(\`'\${w}' has already been defined as a custom element\`);let F,J=j&&j.extends;_.set(P,J?{is:w,tag:J}:{is:"",tag:w}),J?(F=\`\${J}[is="\${w}"]\`,q.set(F,P.prototype),V.set(w,P),S.push(F)):(Y.apply(T,arguments),x.push(F=w)),ae(w).then(()=>{J?(ne(f.querySelectorAll(F)),Q.forEach(_i,[F])):re(f.querySelectorAll(F))}),z.get(w)._(P)}}})();var Dt={initialAlgorithm:null,title:null,hostKind:"web",isExam:!1,prettifyInitialAlgorithm:!1};function Ei(){let e=document.querySelector("#algoforge-runtime-config");if(!e?.textContent)return Dt;try{let t=JSON.parse(e.textContent);if(!Tn(t))return console.error("Ignoring an invalid AlgoForge runtime configuration."),Dt;return t}catch(t){return console.error("Unable to parse the AlgoForge runtime configuration.",t),Dt}}function Tn(e){if(typeof e!=="object"||e===null)return!1;let t=e;return(t.title===null||typeof t.title==="string")&&(t.hostKind==="web"||t.hostKind==="electron"||t.hostKind==="embedded")&&typeof t.isExam==="boolean"&&typeof t.prettifyInitialAlgorithm==="boolean"&&"initialAlgorithm"in t}var Ci={},l=new Proxy(Ci,{get(e,t,i){let n=Reflect.get(e,t,i);if(n===void 0)throw Error(\`Editor class accessed before registration: \${String(t)}\`);return n}});function Mi(e){Object.assign(Ci,e)}var d=!1,E={anomalyDetection:!1,glow:!1,dockEffect:!0,renderScale:4},ke="web",le=!1,b,de;function Si(e){ke=e.hostKind,le=e.isExam,b=Fe("editeur-interface"),de=Fe("#titreAlgo")}function Fe(e){let t=document.querySelector(e);if(!t)throw Error(\`Required editor element not found: \${e}\`);return t}class zt{serialize;send;acknowledgedVersion=0;acknowledgedDocument="";nextEditId=1;queue=[];inFlight;commitScheduled=!1;hydrationDepth=0;constructor(e,t){this.serialize=e;this.send=t}commit(){if(this.hydrationDepth>0||this.commitScheduled)return;this.commitScheduled=!0,queueMicrotask(()=>{if(this.commitScheduled=!1,this.hydrationDepth>0)return;let e=this.serialize(),t=JSON.stringify(e),i=this.queue.at(-1)?.serialized??this.inFlight?.serialized??this.acknowledgedDocument;if(t===i)return;this.queue.push({editId:this.nextEditId++,algorithm:e,serialized:t}),this.pump()})}accept(e,t){if(this.inFlight?.editId!==e)return;this.acknowledgedDocument=this.inFlight.serialized,this.acknowledgedVersion=t,this.inFlight=void 0,this.pump()}replaceAuthoritative(e,t){this.queue=[],this.inFlight=void 0,this.hydrationDepth++;try{t(),this.acknowledgedVersion=e,this.acknowledgedDocument=JSON.stringify(this.serialize())}finally{this.hydrationDepth--}}pump(){if(this.inFlight||this.queue.length===0)return;if(this.inFlight=this.queue.shift(),!this.inFlight)return;this.send({type:"documentChanged",editId:this.inFlight.editId,baseVersion:this.acknowledgedVersion,algorithm:this.inFlight.algorithm})}}var Ln=globalThis,Pt,Dn=0,zn=[],Bt=[],Ai={undoRedo:"host"},kt=new Map,It=new Set,Nt,Ti=!1;function Li(){if(ke!=="embedded"||Pt)return;Pt=Ln.acquireAlgoForgeHostApi?.(),window.addEventListener("message",(e)=>{let t=e.data;if(!t||typeof t!=="object"||!("type"in t))return;if(t.type==="initialize"||t.type==="replaceDocument"){if(t.library)zn=t.library;if(t.customLibrary)Bt=t.customLibrary;if(t.capabilities)Ai=t.capabilities}if(t.type==="clipboardResult")kt.get(t.requestId)?.(t.text),kt.delete(t.requestId);for(let i of It)i(t);if(t.type==="initialize")Ti=!0})}function Di(e){return It.add(e),()=>It.delete(e)}function A(){return ke==="embedded"}function Ie(){return A()&&Ai.undoRedo==="host"}function K(e){Pt?.postMessage(e)}function zi(){K({type:"ready"})}function Pi(e){return Nt=new zt(e,(t)=>K(t)),Nt}function we(){Nt?.commit()}function ki(e,t){if(Ti)K({type:"preference",name:e,value:t})}function me(e){K({type:"command",command:e})}async function Ii(){if(!A())return navigator.clipboard.readText();let e=++Dn;return new Promise((t)=>{kt.set(e,t),K({type:"clipboardRead",requestId:e})})}async function Ni(e){if(!A()){await navigator.clipboard.writeText(e);return}K({type:"clipboardWrite",text:e})}function _e(e,t,i,n="utf8"){if(!A())return!1;return K({type:"exportFile",suggestedName:e,mimeType:t,content:i,encoding:n}),!0}function Bi(e,t){K({type:"createImportedDocument",name:e,algorithm:t})}function qe(e){if(A())K({type:"openExternal",href:e});else window.open(e,"_blank","noopener,noreferrer")}function Fi(){return Bt}function qi(e){if(Bt=e,A())K({type:"customLibrary",value:e})}function Re(e){K({type:"error",message:e})}var Ri=\`#logoAlgoForge {
	height: 70px !important;
}

plan-travail,
sous-plan-travail {
	overflow: hidden !important;
}

menu-compte-element {
	display: none !important;
}
\`;function Hi(){if(le){let p=document.createElement("style");p.dataset.examStyles="true",p.textContent=Ri,document.head.appendChild(p)}let e=Fe("[data-glow]"),t=Fe(".dock"),i=Array.from(document.querySelectorAll(".dock-item")),n=()=>{if(!E.glow)e.classList.remove("active")},r=(p,h=!0)=>{let a=b.getCookie(p);return a==="true"?!0:a==="false"?!1:h};if(E.glow=r("glow",!A()),E.dockEffect=r("dockEffect",!0),E.anomalyDetection=!le?r("anomalyDetection",!1):!1,le)E.glow=!1,E.dockEffect=!1;n();let o=kn(({x:p,y:h})=>{let a=document.documentElement;a.style.setProperty("--x",p.toFixed(2)),a.style.setProperty("--xp",(p/window.innerWidth).toFixed(2)),a.style.setProperty("--y",h.toFixed(2)),a.style.setProperty("--yp",(h/window.innerHeight).toFixed(2));let m=e.getBoundingClientRect();e.classList.toggle("active",p>=m.left&&p<=m.right&&h>=m.top&&h<=m.bottom&&E.glow)},17);document.body.addEventListener("pointermove",o);let s=()=>{for(let p of i){let h=1,a="1px";if(p.isHover)h=1.5,a=".6em";else if(p.isNext)h=1.25,a=".6em";p.style.transform=\`scale(\${h})\`,p.style.margin=\`0 \${a}\`}},c=()=>{for(let p of i)p.isHover=!1,p.isNext=!1;s()},u=(p)=>{if(!E.dockEffect||!(p.target instanceof Element))return;if(!p.target.matches(".dock-item"))return;for(let h of i)h.isHover=h===p.target,h.isNext=Math.abs(i.indexOf(h)-i.indexOf(p.target))===1;s()};t.addEventListener("pointermove",u),t.addEventListener("pointerleave",c)}function kn(e,t){let i=!1;return(...n)=>{if(i)return;e(...n),i=!0,window.setTimeout(()=>{i=!1},t)}}function Vi(){if(!A())return;de.contentEditable="false",de.nextElementSibling?.setAttribute("hidden","true");let e=document.querySelector("menu-compte-element");e?.setAttribute("title","Editor preferences"),e?.setAttribute("aria-label","Editor preferences"),document.querySelector(".zoneActionsCloud")?.setAttribute("hidden","true");let t=Pi(()=>b.serializeDocument());new MutationObserver(()=>{let i=b._themeSelect?.selectedOptions?.[0];if(i?.nom==="VS Code")i.appliquer()}).observe(document.body,{attributes:!0,attributeFilter:["class","data-vscode-theme-id","data-vscode-theme-kind"]}),Di((i)=>{try{if(i.type==="initialize"||i.type==="replaceDocument"){if(de.innerText=i.title,document.title=\`AlgoForge - \${i.title}\`,t.replaceAuthoritative(i.version,()=>b.replaceDocument(i.algorithm)),i.type==="initialize"){b._bibliotheque.initializeHostData(i.library??[],i.customLibrary??[]);let n=i.preferences?.theme;if(n&&Array.from(b._themeSelect.options).some((r)=>r.value===n))b._themeSelect.value=n,b._themeSelect.selectedOptions[0].appliquer();if(typeof i.preferences?.glow==="boolean"){E.glow=i.preferences.glow;let r=document.querySelector("#switchGlowDisplayer"),o=document.querySelector("#switchGlowContainer");if(r&&o)r.style.left=E.glow?"auto":"2px",r.style.right=E.glow?"2px":"auto",o.style.backgroundColor=E.glow?"var(--titleColor)":"var(--fgColorSemiTransparent)"}}}if(i.type==="editAccepted")t.accept(i.editId,i.version);if(i.type==="editRejected"){if(de.innerText=i.title,t.replaceAuthoritative(i.version,()=>b.replaceDocument(i.algorithm)),i.error)Re(i.error)}if(i.type==="renderPreview")Bn(i.requestId,i.algorithm,i.title,i.theme);if(i.type==="importSource"){let n=b.interpreterFichierAlgorithme(i.name,i.content);Bi(n.nomAlgo||b.retirerExtensionNomFichier(i.name),n.algo)}}catch(n){Re(n instanceof Error?n.message:"Unable to update the editor.")}}),document.addEventListener("click",(i)=>{let n=i.target instanceof Element?i.target.closest("a[href]"):null;if(!(n instanceof HTMLAnchorElement))return;let r=n.href;if(!r.startsWith("http://")&&!r.startsWith("https://"))return;i.preventDefault(),qe(r)}),zi()}async function In(){if(await new Promise((e)=>{let t=!1,i=()=>{if(t)return;t=!0,window.clearTimeout(n),e()},n=window.setTimeout(i,250);requestAnimationFrame(()=>requestAnimationFrame(i))}),document.fonts)await Promise.race([document.fonts.ready.then(()=>{return}),new Promise((e)=>window.setTimeout(e,1000))])}function Nn(e,t){let i=/<plan-travail\\b[^>]*\\bstyle="([^"]*)"/i.exec(e)?.[1]??"",n=/(?:^|;)\\s*width\\s*:\\s*([0-9.]+)vw/i.exec(i)?.[1],r=/(?:^|;)\\s*height\\s*:\\s*([0-9.]+)vw/i.exec(i)?.[1],o=(document.documentElement.clientWidth||window.innerWidth||1280)/100,s=n?Number(n):void 0,c=r?Number(r):void 0,u=e.replace(/(-?[0-9]+(?:\\.[0-9]+)?)vw\\b/g,(p,h)=>(Number(h)*o).toString()+"px");if(u=u.replace("</style>","plan-travail{background-color:transparent!important;border:none!important}</style>"),s&&c){let p=s*o,h=c*o,a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+p+" "+h+'" width="'+p+'" height="'+h+'" preserveAspectRatio="xMidYMid meet">';u=u.replace(/<svg xmlns="http:\\/\\/www\\.w3\\.org\\/2000\\/svg">/,a)}if(t)u=Ge(u,"#ffffff",t.background),u=Ge(u,"#222222",t.foreground),u=Ge(u,"#000000",t.foreground),u=Ge(u,"#838787",t.foreground);return u}function Ge(e,t,i){return e.replace(new RegExp(t+"(?![0-9a-f])","gi"),i)}async function Bn(e,t,i,n){try{de.innerText=i,b.replaceDocument(t),await In();let r=b.exporterSVG(b._planActif,!1,!1),o=typeof r==="string"?Nn(r,n):r;if(typeof o!=="string"||!o.includes("<svg"))throw Error("The editor did not produce an SVG preview.");K({type:"previewRendered",requestId:e,svg:o})}catch(r){K({type:"previewRendered",requestId:e,error:r instanceof Error?r.message:"Unable to render the preview."})}}class ie{static Boolean="Booléen";static Char="Caractère";static String="Chaine de caractères";static double="Nombre décimal";static positive_int="Entier positif";static negative_int="Entier négatif";static positive_int_or_null="Entier positif ou nul";static negative_int_or_null="Entier négatif ou nul";static int="Entier";static undefined=void 0;static allTypes=[ie.Boolean,ie.Char,ie.String,ie.int,ie.positive_int,ie.positive_int_or_null,ie.negative_int,ie.negative_int_or_null,ie.double];estConforme;constructor(e){this._nom=e}get _nom(){return this._nom}set _nom(e){this._nom=e}ajouterFonctionDeConformite(e){this.estConforme=e}}class Ft{__nom;__type;__signification;constructor(e,t,i){this._nom=e,this._type=t,this._signification=i}get _nom(){return this.__nom}set _nom(e){this.__nom=e}get _type(){return this.__type}set _type(e){this.__type=e}get _signification(){return this.__signification}set _signification(e){this.__signification=e}toJSON(){return{nom:this._nom,type:this._type,signification:this._signification}}}class Je extends HTMLElement{_mesInformations;_dictionnaireDesConvertionTypes={Char:"String",int:"double","unsigned int":"int"};_estOuvert=!1;_matchSignification={};_matchType={};_inputsValid=[];VARIABLE_SUPPR="*variable_supprimee*";_closeBtn;_refreshBtn;_tableBody;_validInputs;_removeInputs;_inputName;_inputType;_inputSignification;_errorNameMsg;_lastErrorMsg;_errorTypeMsg;_errorSignificationMsg;_template;_validRemove;_cancelRemove;constructor(e=[]){super();this._mesInformations=e;let t=document.createElement("div");t.classList.add("img"),this.appendChild(t),document.getElementById("dico_btn").addEventListener("click",()=>{this.ouvrir()}),this._closeBtn,this._refreshBtn,this._tableBody,this._validInputs,this._removeInputs,this._inputName,this._inputType,this._inputSignification,this._errorNameMsg="",this._lastErrorMsg="",this._errorTypeMsg="",this._errorSignificationMsg="",this._currentRow="",this._inputsValid=[!0,!0,!0],this._currentVariableName="",this._lastRow="",this._template=document.getElementById("dico-row"),this.#t(),this.#x(),this._matchSignification={},this._matchType={}}#t(){this.innerHTML=\`
		<div id="dico-main">
			<div id="dico-ctrl">
				<button id="dico-refresh"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg></button>
				<button id="dico-close"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
			</div>
			<table id="dico-table">
				<thead>
					<tr><td>Nom</td><td>Type</td><td>Signification</td></tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
		<div id="dico-inputs">
			<div id="dico-wrapper">
				<div id="dico-first-inputs">
					<label>
						Nom
						<input id="inputs-name" type="text" disabled class="correct-input" name="" minlength="1" placeholder="Nom">
					</label>
					<label>
						Type
						<input id="inputs-type" type="search" disabled class="correct-input" list="primitives" name="" minlength="1" placeholder="Type">
					</label>
				</div>
				<label>
					Signification
					<textarea id="inputs-signification" disabled class="correct-input" type="text" name="" minlength="1" placeholder="Signification"></textarea>
				</label>
				<datalist id="primitives"></datalist>
			</div>
			<p id="inputs-error" class="error-msg"></p>
            <div id="dico-buttons">
				<button id="valid-inputs" disabled class="secondaryButton" title="Valider vos modifications">Modifier</button>
				<button id="remove-inputs" class="secondaryButton" title="Supprimer la variable">Supprimer</button>
				<button id="cancel-remove" style="display: none" title="Annuler la suppression">Annuler</button>
				<button id="valid-remove" style="display: none" title="Valider la suppression">Ok</button>
			</div>
        </div>\`}#s(e){if(this._lastRow!=""&&document.getElementById(this._lastRow)!=null)document.getElementById(this._lastRow).classList.remove("row-selected");if(e.localName=="td")this._currentRow=e.parentNode.id;else if(e.localName=="tr")this._currentRow=e.id;this._currentVariableName=document.getElementById(this._currentRow).children[0].textContent,document.getElementById(this._currentRow).classList.add("row-selected"),this._lastRow=this._currentRow,this._lastErrorMsg="",document.getElementById("inputs-error").textContent=this._lastErrorMsg}#a(e){let t=document.getElementById(e).children,i=document.querySelectorAll("div#dico-wrapper input, div#dico-wrapper textarea");for(let n=0;n<t.length;n++)i[n].value=t[n].textContent.trim(),i[n].removeAttribute("disabled")}#l(e){if(!l.Type.allTypes.includes(e))l.Type.allTypes.push(e)}#c(e,t){if(e!=="Non Défini")t._type=e,this.#l(t._type),delete this._matchType[this._currentVariableName],this._matchType[t._nom]=e}#d(e,t){if(e!=="Non Défini")t._signification=e,delete this._matchSignification[this._currentVariableName],this._matchSignification[t._nom]=e}#u(){let e=document.getElementById(this._currentRow).children,t=document.querySelectorAll("plan-travail, sous-plan-travail");this._mesInformations.forEach((i)=>{if(i._nom==this._currentVariableName)t.forEach((n)=>n.renameInformation(i._nom,e[0].textContent)),i._nom=e[0].textContent,this.#c(e[1].textContent,i),this.#d(e[2].textContent,i)}),this.fermer(),this.ouvrir(),we()}#p(){delete this._matchType[this._currentVariableName],delete this._matchSignification[this._currentVariableName]}#h(){let e=document.getElementById(this._currentRow).children,t=document.querySelectorAll("div#dico-wrapper input, div#dico-wrapper textarea");for(let i=0;i<e.length;i++)e[i].textContent=t[i].value}#m(){document.querySelectorAll("plan-travail, sous-plan-travail").forEach((t)=>t.renameInformation(this._currentVariableName,this.VARIABLE_SUPPR)),this.#p(),this._mesInformations.splice(this._mesInformations.findIndex((t)=>t._nom===this._currentVariableName),1),this._currentRow="",this._lastRow="",this._inputName.classList.remove("wrong-input"),this._inputName.classList.add("correct-input"),this._inputType.classList.remove("wrong-input"),we(),this._inputType.classList.add("correct-input"),this._inputSignification.classList.remove("wrong-input"),this._inputSignification.classList.add("correct-input"),this.#i(),this.fermer(),this.ouvrir()}#i(){let e=document.querySelectorAll("div#dico-wrapper input, div#dico-wrapper textarea");for(let t=0;t<e.length;t++)e[t].value="",e[t].setAttribute("disabled",!0);this._validInputs.setAttribute("disabled",!0)}#f(){if(this._validInputs!=null)this._validInputs.removeAttribute("disabled")}#g(){if(this._validInputs!=null)this._validInputs.setAttribute("disabled",!0)}#e(){if(this._inputsValid.includes(!1))this.#g();else this.#f()}#n(e){if(/^[a-zA-ZÀ-ÿ\\(\\)\\[\\]][a-zA-ZÀ-ÿ0-9\\s\\(\\)\\[\\]]*$/g.test(e))this._inputsValid[0]=!0,this._errorNameMsg="",this._inputName.classList.remove("wrong-input"),this._inputName.classList.add("correct-input");else this._inputsValid[0]=!1,this._inputName.classList.remove("correct-input"),this._inputName.classList.add("wrong-input"),this._errorNameMsg="Le nom doit comporter entre 2 et 60 caractères, commencer par une lettre, et ne peut contenir ni lettres accentuées, ni espaces, ni caractères spéciaux autres que _"}#r(e){if(/^[a-zA-Zéùàèïêç ]{2,70}$/g.test(e))this._inputsValid[1]=!0,this._errorTypeMsg="",this._inputType.classList.remove("wrong-input"),this._inputType.classList.add("correct-input");else this._inputsValid[1]=!1,this._inputType.classList.add("wrong-input"),this._inputType.classList.remove("correct-input"),this._errorTypeMsg="Le type ne peut contenir ni nombre, ni caractères spéciaux"}#o(e){if(e.trim()!="")this._inputsValid[2]=!0,this._errorSignificationMsg="",this._inputSignification.classList.remove("wrong-input"),this._inputSignification.classList.add("correct-input");else this._inputsValid[2]=!1,this._inputSignification.classList.add("wrong-input"),this._inputSignification.classList.remove("correct-input"),this._errorSignificationMsg="La signification ne peut être vide"}#v(){this.querySelector("datalist").innerHTML="",l.Type.allTypes.forEach((e)=>{this.querySelector("datalist").innerHTML+=\`<option value="\${e}"></option>\`})}#b(){this._inputType.addEventListener("input",(e)=>{this.#r(e.target.value),document.getElementById("inputs-error").textContent=this._errorTypeMsg,this._lastErrorMsg=this._errorTypeMsg,this.#e()}),this._inputType.addEventListener("focus",(e)=>{this.#r(e.target.value),document.getElementById("inputs-error").textContent=this._errorTypeMsg,this._lastErrorMsg=this._errorTypeMsg,this.#e()})}#y(){this._inputSignification.addEventListener("input",(e)=>{this.#o(e.target.value),document.getElementById("inputs-error").textContent=this._errorSignificationMsg,this._lastErrorMsg=this._errorSignificationMsg,this.#e()}),this._inputSignification.addEventListener("focus",(e)=>{this.#o(e.target.value),document.getElementById("inputs-error").textContent=this._errorSignificationMsg,this._lastErrorMsg=this._errorSignificationMsg,this.#e()})}#w(){this._inputName.addEventListener("input",(e)=>{this.#n(e.target.value),document.getElementById("inputs-error").textContent=this._errorNameMsg,this._lastErrorMsg=this._errorNameMsg,this.#e()}),this._inputName.addEventListener("focus",(e)=>{this.#n(e.target.value),document.getElementById("inputs-error").textContent=this._errorNameMsg,this._lastErrorMsg=this._errorNameMsg,this.#e()})}#_(){this._validInputs.addEventListener("click",()=>{this.#h(),this.#u(),this.#i(),document.getElementById(this._currentRow).classList.remove("row-selected")})}#x(){setTimeout(()=>{this._closeBtn=document.getElementById("dico-close"),this._refreshBtn=document.getElementById("dico-refresh"),this._tableBody=document.querySelector("#dico-table>tbody"),this._validInputs=document.getElementById("valid-inputs"),this._removeInputs=document.getElementById("remove-inputs"),this._validRemove=document.getElementById("valid-remove"),this._cancelRemove=document.getElementById("cancel-remove"),this._inputName=document.getElementById("inputs-name"),this._inputType=document.getElementById("inputs-type"),this._inputSignification=document.getElementById("inputs-signification"),this._closeBtn.addEventListener("click",(e)=>{e.stopPropagation(),this.fermer()}),this._refreshBtn.addEventListener("click",(e)=>{e.stopPropagation(),setTimeout(()=>{this.fermer(),this.ouvrir()},200)}),this._tableBody.addEventListener("click",(e)=>{this.#s(e.target),this.#a(this._currentRow),this.#n(this._inputName.value),this.#e(),document.getElementById("inputs-error").textContent=this._errorNameMsg}),this.#_(),this._removeInputs.addEventListener("click",()=>{document.getElementById("inputs-error").removeAttribute("class"),document.getElementById("inputs-error").textContent="Voulez-vous vraiment supprimer cette variable ?",this._validInputs.style.display="none",this._removeInputs.style.display="none",this._validRemove.style.display="flex",this._cancelRemove.style.display="flex"}),this._validRemove.addEventListener("click",()=>{this.#m(),this._validInputs.style.display="flex",this._removeInputs.style.display="flex",this._validRemove.style.display="none",this._cancelRemove.style.display="none",document.getElementById("inputs-error").textContent=this._lastErrorMsg,document.getElementById("inputs-error").setAttribute("class","error-msg")}),this._cancelRemove.addEventListener("click",()=>{this._validInputs.style.display="flex",this._removeInputs.style.display="flex",this._validRemove.style.display="none",this._cancelRemove.style.display="none",document.getElementById("inputs-error").textContent=this._lastErrorMsg,document.getElementById("inputs-error").setAttribute("class","error-msg")}),this.#w(),this.#b(),this.#y()},500)}ouvrir(){if(this._estOuvert)this.fermer();else document.querySelector("bibliotheque-algorithmique").fermer(),document.getElementById("dico_wrapper").style.zIndex=200,document.getElementById("dico_wrapper").style.display="initial",document.getElementById("boutonDico").classList.add("elementIsOpen"),document.querySelector("editeur-interface")._planActif.effectuerDictionnaireDesDonnee(),this.classList.add("ouvert"),this._tableBody.innerHTML="",this.genererDictionnaire(),this._estOuvert=!0}fermer(){document.getElementById("dico_wrapper").style.zIndex=-200,document.getElementById("dico_wrapper").style.display="none",document.getElementById("biblio_btn").removeAttribute("disabled"),document.getElementById("boutonDico").classList.remove("elementIsOpen"),this.classList.remove("ouvert"),this._estOuvert=!1,this.#i(),this._lastErrorMsg="",document.getElementById("inputs-error").textContent=this._lastErrorMsg}genererDictionnaire(){if(!this._matchType)this._matchType={};if(!this._matchSignification)this._matchSignification={};let e=0;this._mesInformations.sort((t,i)=>t._nom.localeCompare(i._nom));for(let t of this._mesInformations){let i=this._template.content.cloneNode(!0),n=i.querySelector("tr");n.setAttribute("id",\`var_\${e}\`),n.setAttribute("class","good-name");let r=i.querySelectorAll("td");if(r[0].textContent=\`\${t._nom}\`,this._matchType!=null&&this._matchType[t._nom]!=null)r[1].textContent=this._matchType[t._nom];else r[1].textContent="Non défini";if(this._matchSignification!=null&&this._matchSignification[t._nom]!=null)r[2].textContent=this._matchSignification[t._nom];else r[2].textContent="Non défini";if(!this.nomCorrecte(t._nom))n.classList.remove("good-name"),n.classList.add("wrong-name"),n.classList.add("input-tooltip"),n.setAttribute("data-title","Le nom doit comporter entre 2 et 60 caractères, commencer par une lettre, et ne peut contenir ni lettres accentuées, ni espaces, ni caractères spéciaux autres que _");this._tableBody.appendChild(i),e++}this.#v()}AjouterUneVariable(e){if(e._nom==this.VARIABLE_SUPPR)return!1;let t=!1,i=e._nom.trim();if(e instanceof l.Information)if(this.containInformation(i)){let n=this.getInformation(i)._type,r=e._type,o=this.convertionVariable(r,n);if(this.getInformation(i)._type!=o)this.changeType(e._nom,o)}else this._mesInformations.push(e),t=!0;return t}retirerInformationsAbsentes(e){for(let t of this._mesInformations)if(!e.includes(t))this.retirerUneInformation(t._nom)}retirerUneInformation(e){return this._mesInformations=this._mesInformations.filter((t)=>t._nom!=e),!0}TypeCompatible(e,t){if(e==null||t==null)return!0;let i=e;while(!0){if(!i)break;if(t==i)return!0;i=this._dictionnaireDesConvertionTypes[i]}i=t;while(!0){if(!i)break;if(e==i)return!0;i=this._dictionnaireDesConvertionTypes[i]}return!1}convertionVariable(e,t){let i=e,n=t;if(i==null)return n;if(n==null)return i;if(i===n)return i;return this.getTypeLePlusBasEnCommun(i,n)}getTypeLePlusBasEnCommun(e,t){let i=e;while(!0){if(!i)break;if(t==i)return t;i=this._dictionnaireDesConvertionTypes[i]}i=t;while(!0){if(!i)break;if(e==i)return e;i=this._dictionnaireDesConvertionTypes[i]}return e}containInformation(e){let t=!1;return this._mesInformations.forEach((i)=>{if(i._nom.trim()==e.trim())t=!0}),t}getInformation(e){return this._mesInformations.find((i)=>i._nom.trim()===e.trim())}renameInformation(e,t){let i=!1;if(t=="")i=this.retirerUneInformation(e);else if(!this.containInformation(t)){if(this.nomCorrecte(t))this._mesInformations.forEach((n)=>{if(n._nom==e)n._nom=t,i=!0})}return i}changeSignification(e,t){let i=!1;return this._mesInformations.forEach((n)=>{if(n._nom==e)n._signification=t,i=!0}),i}changeType(e,t){let i=!1;return this._mesInformations.forEach((n)=>{if(n._nom==e)n._type=t,i=!0}),i}nomCorrecte(e){return/^[a-zA-ZÀ-ÿ\\(\\)\\[\\]][a-zA-ZÀ-ÿ0-9\\s\\(\\)\\[\\]]*$/g.test(e.trim())}suppressionDonneeInutiliser(){this._mesInformations=this._mesInformations.filter((e)=>e._type!=null||e._signification!=null&&e._signification!="")}suppressionTout(){this._mesInformations=[]}toJSON(){return{typeElement:"DictionnaireDonnee",types:this._matchType,signification:this._matchSignification}}exporter(e){switch(e.toLowerCase()){case"csv":var t=\`Nom;Type;Signification
\`;if(this.ouvrir(),this.fermer(),this._mesInformations.forEach((o)=>{t+=\`\${o._nom};\${this._matchType[o._nom]?this._matchType[o._nom]:"Non défini"};\${this._matchSignification[o._nom]?this._matchSignification[o._nom]:"Non défini"}
\`}),_e(document.querySelector("#titreAlgo").innerText+"Dictionnaire.csv","text/csv",t))break;var i=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=\`\${document.querySelector("#titreAlgo").innerText}Dictionnaire.csv\`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(n),100);break;case"md":var t=\`Nom;Type;Signification
\`;if(this.ouvrir(),this.fermer(),this._mesInformations.forEach((o)=>{t+=\`\${o._nom};\${this._matchType[o._nom]?this._matchType[o._nom]:"Non défini"};\${this._matchSignification[o._nom]?this._matchSignification[o._nom]:"Non défini"}
\`}),t=this.csvToMarkdown(t),_e(document.querySelector("#titreAlgo").innerText+"Dictionnaire.md","text/markdown",t))break;var i=new Blob([t],{type:"text/markdown"}),n=URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=\`\${document.querySelector("#titreAlgo").innerText}Dictionnaire.md\`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(n),100);break;default:break}}chargerDepuisJSON(e){this._matchType=e.types,this._matchSignification=e.signification}csvToMarkdown(e){let t=e.split(\`
\`).filter((n)=>n),i="";return t.forEach((n,r)=>{let o=n.split(";"),s=\`| \${o.join(" | ")} |\`;if(i+=s+\`
\`,r===0){let c=o.map(()=>"---").join(" | ");i+=\`| \${c} |
\`}}),i}}class xe extends HTMLElement{_editeur=b;_refScroll;_pageSizeIndicator;constructor(){super();this._refScroll=document.createElement("div"),this._refScroll.style.position="absolute",this._refScroll.style.left="50%",this._refScroll.style.display="list-item",this._refScroll.style.opacity="0",this.appendChild(this._refScroll),this._pageSizeIndicator=document.createElement("div"),this._pageSizeIndicator.classList.add("page-size-indicator"),this.appendChild(this._pageSizeIndicator),setInterval(()=>{let e=this.getCoordMinEtMax();this._refScroll.style.top=e.coordMax.y+5+"vw"},33)}get leDictionnaireDesDonnees(){return this._editeur._dictionnaireDesDonnees}getProblemePrincipal(){let e=xe.FiltrerElementsGraphique(this.children,l.ElementGraphique);return e=e.filter((t)=>t.getParent()==null),e}getProblemeLePlusHaut(){let e=this.getProblemePrincipal(),t=e[0];for(let i of e)if(parseFloat(i._ordonnee)<parseFloat(t._ordonnee))t=i;return t}static FiltrerElementsGraphique(e,t){let i=[];for(let n of e)if(n instanceof t)i.push(n);return i}static trierElementsGraphique(e){let t=e.length;for(let i=0;i<t-1;i++){let n=i;for(let r=i+1;r<t;r++)if(e[r].getCentre().x<e[n].getCentre().x)n=r;if(n!==i){let r=e[i];e[i]=e[n],e[n]=r}}return e}exporterEnJSON(){let e=[];for(let i of this.children)if(i._parent==null&&i instanceof l.ElementGraphique)e.push(i);let t=[];return e.forEach((i)=>{t.push(i.toJSON())}),t.push(this.leDictionnaireDesDonnees.toJSON()),t}exporterEnJSONSpecifier(e){let t=[];for(let n of this.children)if(n._parent==null&&n instanceof l.ElementGraphique)t.push(n);let i=[];return t.forEach((n)=>{i.push(n.toJSONspecifier(e))}),i.push(this.leDictionnaireDesDonnees.toJSON()),i}chargerFichier(e){try{var t=JSON.parse(e);let i=ze(t);if(this.chargerDepuisJSON(i.algorithm),d)console.log("Le fichier a été chargé avec succès.")}catch(i){if(alert(i instanceof Error?i.message:"Le fichier n'est pas au format JSON."),d)console.log(i);throw i}}chargerDepuisJSON(e,t=!0,i=!0){if(e==null)return[];let n=[];for(let r of e)switch(r.typeElement){case"Probleme":let o=new l.Probleme(r.abscisse,r.ordonnee,r.libelle);for(let g of r.listeDonnes)o._listeDonnes.push(new l.Information(g));for(let g of r.listeResultats)o._listeResultats.push(new l.Information(g));if(this.appendChild(o),t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(o,this));for(let g of this.chargerDepuisJSON(r.enfants,t))o._elemParent.lierEnfant(g,!t);if(o.afficher(),o.setPosition(),n.push(o),r.estDecomposeAilleurs)o.decomposerAutrePlan(!1);break;case"Procedure":let s=new l.Procedure(r.abscisse,r.ordonnee,r.libelle);for(let g of r.listeDonnes)s._listeDonnes.push(new l.Information(g));for(let g of r.listeResultats)s._listeResultats.push(new l.Information(g));if(this.appendChild(s),t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(s,this));for(let g of this.chargerDepuisJSON(r.enfants,t))s._elemParent.lierEnfant(g,!t);s.afficher(),s.setPosition(),n.push(s);break;case"StructureSi":let c=[];for(let g of this.chargerDepuisJSON(r.conditions))g._structure=r,c.push(g);let u=new l.StructureSi(r.abscisse,r.ordonnee,c);if(u.afficher(),u.setPosition(),this.appendChild(u),t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(u,this));for(let g of u._listeConditions.children){if(d)console.log(g);for(let y of this.chargerDepuisJSON(g.enfantsAAjouter,t)){if(d)console.log(y);g._elemParent.lierEnfant(y,!t)}}n.push(u);break;case"StructureSwitch":let p=[];for(let g of this.chargerDepuisJSON(r.conditions))g._structure=r,p.push(g);let h=new l.StructureSwitch(r.abscisse,r.ordonnee,p,r.expressionATester);if(h.afficher(),h.setPosition(),this.appendChild(h),t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(h,this));for(let g of h._listeConditions.children){if(d)console.log(g);for(let y of this.chargerDepuisJSON(g.enfantsAAjouter,t)){if(d)console.log(y);g._elemParent.lierEnfant(y,!t)}}n.push(h);break;case"Condition":let a=new l.Condition(r.libelle);a.enfantsAAjouter=r.enfants,n.push(a);break;case"StructureIterativeNonBornee":let m=new l.StructureIterativeNonBornee(r.abscisse,r.ordonnee);this.appendChild(m);for(let g of this.chargerDepuisJSON(r.enfants,t))m._elemParent.lierEnfant(g,!t);if(t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(m,this));m.afficher(),m.setPosition(),n.push(m);break;case"StructureIterativeBornee":let f=new l.StructureIterativeBornee(r.abscisse,r.ordonnee,r.variableAIterer,r.borneInferieure,r.borneSuperieure,r.pas,r.croissant);this.appendChild(f);for(let g of this.chargerDepuisJSON(r.enfants,t))f._elemParent.lierEnfant(g,!t);if(t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(f,this));f.afficher(),f.setPosition(),n.push(f);break;case"ConditionSortie":let v=new l.ConditionSortie(r.abscisse,r.ordonnee);if(this.appendChild(v),t)this._editeur.ajouterEvenement(new l.EvenementCreationElement(v,this));v.afficher(),v.setPosition(),n.push(v);break;case"DictionnaireDonnee":if(i)this.leDictionnaireDesDonnees.chargerDepuisJSON(r);default:break}return this.updateAllLines(),this.querySelectorAll(".auto-size-text").forEach((r)=>{b.adjustFontSize(r)}),n}effectuerDictionnaireDesDonnee(){this.leDictionnaireDesDonnees.suppressionTout();let e=[];for(let t of this.children)if(t instanceof l.ElementGraphique)e=[...e,...t.extraireInformation()];for(let t of e)this.leDictionnaireDesDonnees.AjouterUneVariable(t)}trouverToutLesElementsGraphiques(){let e=[];for(let t of this.children)if(t instanceof l.ElementGraphique)e.push(t);return e}renameInformation(e,t){for(let i of this.trouverToutLesElementsGraphiques())i.renameInformation(e,t)}ajouterElement(e,t,i,n){if(e==null)return;if(!n)t=t/window.innerWidth*100,i=i/window.innerWidth*100,t+=this.scrollLeft/window.innerWidth*100,i+=this.scrollTop/window.innerWidth*100,t/=this._editeur._indicateurZoom._zoom,i/=this._editeur._indicateurZoom._zoom;let r=new e(t+"vw",i+"vw");r.afficher();let o=r.getTailleAbscisse(),s=r.getTailleOrdonnee();if(d)console.log("largeurElement = "+o+" et hauteurElement = "+s);return r._abscisse=parseFloat(r._abscisse)-o/2+"vw",r._ordonnee=parseFloat(r._ordonnee)-s/2+"vw",r.setPosition(),this.appendChild(r),this._editeur.ajouterEvenement(new l.EvenementCreationElement(r,this)),r}updateAllLines(){for(let e of this.children)if(e instanceof l.ElementGraphique){if(e._parent!=null)e._parent.updateAll()}}getCoordMinEtMax(){let e={x:1/0,y:1/0},t={x:-1/0,y:-1/0};for(let i of this.children)if(i instanceof l.ElementGraphique){let n=i.getCentre();e.x=Math.min(e.x,parseFloat(i._abscisse)),e.y=Math.min(e.y,parseFloat(i._ordonnee)),t.x=Math.max(t.x,parseFloat(i._abscisse)+i.getTailleAbscisse()),t.y=Math.max(t.y,parseFloat(i._ordonnee)+i.getTailleOrdonnee())}return{coordMin:e,coordMax:t}}toutDeplacer(e,t){for(let i of this.children)if(i instanceof l.ElementGraphique)i._abscisse=parseFloat(i._abscisse)+e+"vw",i._ordonnee=parseFloat(i._ordonnee)+t+"vw",i.setPosition();this.updateAllLines()}}class Ye extends xe{_editeur=b;_proprietaire;_spanSousTitre;constructor(e){super();this._proprietaire=e,this._spanSousTitre=document.createElement("span"),this._spanSousTitre.classList.add("sous-titre");let t=document.createElement("span");t.innerHTML="X",t.classList.add("fermeture"),t.addEventListener("click",(n)=>{n.stopPropagation(),this.fermer()}),this.appendChild(t);let i=this.parentElement;setInterval(()=>{if(this._proprietaire.parentElement===null)this.remove();else if(this.parentElement===null)i?.appendChild(this)},1000)}ouvrir(){this.classList.add("ouvert");let e=document.querySelectorAll("selection-simple"),t=document.querySelectorAll("selection-rectangle"),i=document.querySelector("selection-editeur");e.forEach((r)=>{this.appendChild(r)}),t.forEach((r)=>{this.appendChild(r)}),this.appendChild(i),i.deselectionnerTout(),this._spanSousTitre.innerText=" > "+this._proprietaire._libelle,this._editeur.querySelector("#titreAlgo").parentNode.appendChild(this._spanSousTitre),this._editeur._planActif=this;let n=document.querySelector("[data-glow]");this.addEventListener("mouseenter",()=>{if(E.glow)n.classList.add("active")}),this.addEventListener("mouseleave",()=>{n.classList.remove("active")})}fermer(){this.classList.remove("ouvert");let e=document.querySelectorAll("selection-simple"),t=document.querySelectorAll("selection-rectangle"),i=document.querySelector("selection-editeur");e.forEach((n)=>{this._proprietaire.parentNode.appendChild(n)}),t.forEach((n)=>{this._proprietaire.parentNode.appendChild(n)}),this._proprietaire.parentNode.appendChild(i),i.deselectionnerTout(),this._spanSousTitre.remove(),this._editeur._planActif=this._proprietaire.parentNode}getRelativeChildrenToTop(e,t){let i=this.getProblemeLePlusHaut();e=parseFloat(e),t=parseFloat(t);let n=i.toJSON().enfants,r=(o)=>{if(o.abscisse=parseFloat(o.abscisse)-parseFloat(i._abscisse)+e+"vw",o.ordonnee=parseFloat(o.ordonnee)-parseFloat(i._ordonnee)+t+"vw",o.enfants)o.enfants.forEach((s)=>{r(s)});if(o.typeElement=="StructureSi"||o.typeElement=="StructureIterative")for(let s of o.conditions)s.enfants.forEach((c)=>{r(c)})};for(let o of n)r(o);return n}}class X extends HTMLElement{__abscisse;__ordonnee;__parent;_elementGraphique;_couleurPrimaire;_proprietaire;_elemParent;constructor(e=0,t=0,i=null){super();this._abscisse=e,this._ordonnee=t,this._parent=i,this._elementGraphique=this,this.setPosition(e,t),document.activeElement.blur()}get _abscisse(){return this.__abscisse}set _abscisse(e){this.__abscisse=e}get _ordonnee(){return this.__ordonnee}set _ordonnee(e){this.__ordonnee=e}get _parent(){return this.__parent}set _parent(e){this.__parent=e}get espaceTravail(){return this.parentNode}get selectAnchor(){let e={x:0,y:0};return e.x=parseFloat(this._abscisse)+this.getTailleAbscisse()/2,e.y=parseFloat(this._ordonnee)+this.getTailleOrdonnee()/2,e}getTailleAbscisse(){let e=this.getBoundingClientRect();return(e.right-e.left)/window.innerWidth*100}getTailleOrdonnee(){let e=this.getBoundingClientRect();return(e.bottom-e.top)/window.innerHeight*100}getCentre(){return{x:parseFloat(this._abscisse)+this.getTailleAbscisse()/2,y:parseFloat(this._ordonnee)+this.getTailleOrdonnee()/2}}setPosition(e=-1,t=-1){if(e==-1&&t==-1)this.style.left="calc(var(--sizeModifier) * "+this._abscisse+")",this.style.top="calc(var(--sizeModifier) * "+this._ordonnee+")";else this.style.left="calc(var(--sizeModifier) * "+e+")",this.style.top="calc(var(--sizeModifier) * "+t+")"}getPosition(){return{abscisse:this.style.left,ordonnee:this.style.top}}afficher(){console.log(\`Abscisse : \${this._abscisse} Ordonnée : \${this._ordonnee}\`)}extraireInformation(){return console.log("Extraire J'ai pas été initialisé abcisse "+this._abscisse+" ordonee "+this._ordonnee),[]}getEnfants(e=X){return[]}getDescendants(e=X){let t=this.getEnfants(),i=t;for(let n of t)i=[...i,...n.getDescendants()];return l.PlanTravail.FiltrerElementsGraphique(i,e)}getParent(e=X){if(this._parent)return this._parent._proprietaire._elementGraphique instanceof e?this._parent._proprietaire._elementGraphique:null;return null}getAntescedants(e=X){let t=this.getParent(),i=[];if(t!==null)i.push(t),i=[...i,...t.getAntescedants()];return l.PlanTravail.FiltrerElementsGraphique(i,e)}include(e){return console.log("Include J'ai pas été initialisé je suis "+this._abscisse+" ordonee "+this._ordonnee),!1}getPlanTravail(){return this.parentElement}getInformationResultat(){return console.log("get Information Resultat non défini dans ma classe abscisse"+this._abscisse+" ordonee "+this._ordonnee),[]}getInformationDonnee(){return console.log("get Information Donnée non défini dans ma classe je suis "+this._abscisse+" ordonee "+this._ordonnee),[]}colorierElement(){console.log(\`Coloriage Couleur primaire: \${this._couleurPrimaire}\`)}renameInformation(e,t){}getAncreDecomposition(){let e=parseFloat(this._abscisse)+this.getTailleAbscisse()/2,t=parseFloat(this._ordonnee)+this.getTailleOrdonnee();return{abscisse:e,ordonnee:t-0.7}}getAncreComposition(){let e=parseFloat(this._abscisse)+this.getTailleAbscisse()/2,t=parseFloat(this._ordonnee);return{abscisse:e,ordonnee:t}}peutEtreDecompose(){return!1}supprimer(){if(this._parent!=null)this._parent.delierEnfant(this,!0);this.remove()}genererOptionsContextuelles(e){let t=[];if(this.peutEtreDecompose()){if(t.push(new l.ElementMenu("Décomposer",()=>{e.selectTool(0),e._pointePrecedementLien=this,this.classList.add("pointePourLien")})),this._elemParent.nombreEnfants!=0)t.push(new l.ElementMenu("Délier tous les enfants",()=>{this._elemParent.delierTousLesEnfants()}))}if(this._parent!=null)t.push(new l.ElementMenu("Délier du parent",()=>{this._parent.delierEnfant(this)}));return t}}class Ne extends X{static typeElement="Probleme";_libelle;_listeDonnes;_listeResultats;__elemParent;_editeur=b;_espacePrincipalWrapper=document.querySelector("#espacePrincipal_wrapper");_sousPlan=null;divNom;divResultatsEditable;constructor(e=0,t=0,i=" ",n=[],r=[],o=new l.ElementParent){super(e,t);if(this._libelle=i,this._listeDonnes=n,this._listeResultats=r,this._elemParent=o,this._elemParent!=null)o._proprietaire=this;this.addEventListener("mousemove",function(s){this._elemParent._listeElementsEnfants.forEach((c)=>{c.ligne.update()})})}get libelle(){return this.divNom.textContent}set libelle(e){this.divNom.innerText=e}get listeDonnes(){return this.divDonneesEditable.innerText.split(",")}set listeDonnes(e){this.divDonneesEditable.innerText=e}get listeResultats(){return this.divResultatsEditable.innerText.split(",")}set listeResultats(e){this.divResultatsEditable.innerText=e}get _elemParent(){return this.__elemParent}set _elemParent(e){this.__elemParent=e}getTexte(){return this.querySelector(".nom").textContent}replaceTexte(e,t){this.querySelector(".nom").textContent=this.querySelector(".nom").textContent.replace(e,t)}getDonnee(){return this.querySelector(".donneesEditable").textContent}setDonnee(e){this.querySelector(".donneesEditable").textContent=e}replaceTexteDonnee(e,t){this.querySelector(".donneesEditable").textContent=this.querySelector(".donneesEditable").textContent.replace(e,t)}escapeRegExp(e){return e.replace(/[|\\\\{}()[\\]^$+*?.]/g,"\\\\$&")}getResultat(){return this.querySelector(".resultatEditable").textContent}setResultat(e){this.querySelector(".resultatEditable").textContent=e}replaceTexteResultat(e,t){this.querySelector(".resultatEditable").textContent=this.querySelector(".resultatEditable").textContent.replace(e,t)}updateAccolades(){if(this.divDonneesEditable.textContent==""){for(let e of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(e.style.display="none",d)console.log("cacher les accolades")}else for(let e of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(e.style.display="",d)console.log("afficher les accolades");if(this.divResultatsEditable.textContent==""){for(let e of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(e.style.display="none",d)console.log("cacher les accolades")}else for(let e of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(e.style.display="",d)console.log("afficher les accolades")}afficher(){let e=document.createElement("div");e.className="containerDPR",this.appendChild(e);let t=document.createElement("div");t.className="donnees",e.appendChild(t);let i=document.createElement("label");i.className="accolades",i.innerHTML="{",i.style.display="none",t.appendChild(i),this.divDonneesEditable=document.createElement("div"),this.divDonneesEditable.className="donneesEditable auto-size-text",this.divDonneesEditable.contentEditable="true";let n="";this._listeDonnes.forEach((p)=>{if(!n=="")n+=",";n+=p._nom}),this.divDonneesEditable.innerHTML=n,this._listeDonnes=this.divDonneesEditable.innerHTML,t.appendChild(this.divDonneesEditable);let r=document.createElement("label");if(r.className="accolades",r.innerHTML="}",r.style.display="none",t.appendChild(r),this.divDonneesEditable.addEventListener("input",(p)=>{if(d)console.log(p);if(this.divDonneesEditable.textContent==""){for(let h of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(h.style.display="none",d)console.log("cacher les accolades")}else for(let h of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(h.style.display="",d)console.log("afficher les accolades");b.adjustFontSize(this.divDonneesEditable)}),this.divDonneesEditable.addEventListener("focusout",(p)=>{if(this._listeDonnes==this.listeDonnes)return;this._editeur.ajouterEvenement(new l.EvenementEditionDonneesProbleme(this,this._listeDonnes,this.listeDonnes)),this._listeDonnes=this.listeDonnes}),this.divDonneesEditable.textContent==""){for(let p of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(p.style.display="none",d)console.log("cacher les accolades")}else for(let p of this.getElementsByClassName("donnees")[0].getElementsByClassName("accolades"))if(p.style.display="",d)console.log("afficher les accolades");this.divNom=document.createElement("div"),this.divNom.className="nom auto-size-text",this.divNom.contentEditable="true",this.divNom.innerText=this._libelle,e.appendChild(this.divNom),this.divNom.addEventListener("input",(p)=>{b.adjustFontSize(this.divNom)}),this.divNom.addEventListener("focusout",(p)=>{if(this._libelle==this.libelle)return;if(this.libelle=this.libelle.replace("<-","←"),d)console.log("Changement de libellé");let h=/(\\w+)\\s*\\+=\\s*(\\w+)/g,a=h.exec(this.libelle);if(a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" + "+a[2]);if(h=/(\\w+)\\s*-=\\s*(\\w+)/g,a=h.exec(this.libelle),a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" - "+a[2]);if(h=/(\\w+)\\s*\\*=\\s*(\\w+)/g,a=h.exec(this.libelle),a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" * "+a[2]);if(h=/(\\w+)\\/=\\s*(\\w+)/g,a=h.exec(this.libelle),a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" / "+a[2]);if(h=/(\\w+)\\+\\+/g,a=h.exec(this.libelle),a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" + 1");if(h=/(\\w+)--/g,a=h.exec(this.libelle),a!=null)this.libelle=this.libelle.replace(a[0],a[1]+" ← "+a[1]+" - 1");this._editeur.ajouterEvenement(new l.EvenementEditionLibelleProbleme(this,this._libelle,this.libelle)),this._libelle=this.libelle});let o=document.createElement("div");o.className="resultat",e.appendChild(o);let s=document.createElement("label");s.className="accolades",s.innerHTML="{",s.style.display="none",o.appendChild(s),this.divResultatsEditable=document.createElement("div"),this.divResultatsEditable.className="resultatEditable auto-size-text",this.divResultatsEditable.contentEditable="true";let c="";this._listeResultats.forEach((p)=>{if(!c=="")c+=",";c+=p._nom}),this.divResultatsEditable.innerHTML=c,this._listeResultats=this.divResultatsEditable.innerHTML,o.appendChild(this.divResultatsEditable);let u=document.createElement("label");if(u.className="accolades",u.innerHTML="}",u.style.display="none",o.appendChild(u),this.divResultatsEditable.addEventListener("input",(p)=>{if(d)console.log(p);if(this.divResultatsEditable.textContent==""){for(let h of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(h.style.display="none",d)console.log("cacher les accolades")}else for(let h of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(h.style.display="",d)console.log("afficher les accolades");b.adjustFontSize(this.divResultatsEditable)}),this.divResultatsEditable.addEventListener("focusout",(p)=>{if(this._listeResultats==this.listeResultats)return;this._editeur.ajouterEvenement(new l.EvenementEditionResultatsProbleme(this,this._listeResultats,this.listeResultats)),this._listeResultats=this.listeResultats}),this.divResultatsEditable.textContent==""){for(let p of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(p.style.display="none",d)console.log("cacher les accolades")}else for(let p of this.getElementsByClassName("resultat")[0].getElementsByClassName("accolades"))if(p.style.display="",d)console.log("afficher les accolades")}toJSON(){if(this._sousPlan!=null){if(this._sousPlan.getProblemeLePlusHaut()!=null){if(this._sousPlan.getProblemeLePlusHaut().toJSON instanceof Function)return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,libelle:this.libelle,listeDonnes:this.listeDonnes,listeResultats:this.listeResultats,enfants:this._sousPlan.getRelativeChildrenToTop(this._abscisse,this._ordonnee),estDecomposeAilleurs:!0}}}return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,libelle:this.libelle,listeDonnes:this.listeDonnes,listeResultats:this.listeResultats,enfants:this._elemParent.toJSON()}}toJSONspecifier(e){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,libelle:this.libelle,listeDonnes:this.listeDonnes,listeResultats:this.listeResultats,enfants:this._elemParent.toJSONspecifier(e)}}getEnfants(e=l.ElementGraphique){let t=[];for(let i of this._elemParent._listeElementsEnfants)t.push(i.element);return t=l.PlanTravail.FiltrerElementsGraphique(t,e),t.sort((i,n)=>i._abscisse-n._abscisse)}getInformationDonnee(){let e=this.getDonnee().trim().split(","),t=[];for(let i of e){if(i=="")continue;let n=new l.Information;n._nom=i.trim(),t.push(n)}return t}getInformationResultat(){let e=this.getResultat().trim().split(","),t=[];for(let i of e){if(i=="")continue;let n=new l.Information;n._nom=i,t.push(n)}return t}extraireInformationTextes(){let e=new l.Information;e._nom="";let t=this.getTexte();if(t=="")return null;if(t.includes("<-")){let i=t.split("<-")[0].trim();e._nom=i}if(t.includes("←")){let i=t.split("←")[0].trim();e._nom=i}return e._nom==""?null:e}colorierElement(){this.querySelector(".donnees").style.color=this._couleurPrimaire,this.querySelector(".resultat").style.color=this._couleurPrimaire,this.querySelector(".nom").style.borderColor=this._couleurPrimaire}getTailleAbscisse(){return 30}getTailleOrdonnee(){return 4.75}extraireInformation(){let e=[];if(this.extraireInformationTextes())e.push(this.extraireInformationTextes());return e=[...e,...this.getInformationDonnee()],e=[...e,...this.getInformationResultat()],console.log(e),e}include(e){return this.getTexte().includes(e)||this.getDonnee().includes(e)||this.getResultat().includes(e)}renameInformation(e,t){this.replaceTexte(e,t),this.replaceTexteDonnee(e,t),this.replaceTexteResultat(e,t)}peutEtreDecompose(){return this._sousPlan==null}supprimer(){if(this._elemParent.delierTousLesEnfants(),this._parent!=null)this._parent.delierEnfant(this);if(this._sousPlan!=null)this._sousPlan.remove();this.remove()}decomposerAutrePlan(e=!0){if(d)console.log("Décomposer sur un autre plan");if(this._sousPlan!=null){if(e)this._sousPlan.ouvrir()}else{let t=document.createElement("span");t.innerText="+",t.classList.add("ouvrir"),t.addEventListener("click",(o)=>{o.stopPropagation(),this._sousPlan.ouvrir(),this._editeur.selectTool(this._editeur._currentTool)}),this.appendChild(t),this._sousPlan=new l.SousPlanTravail(this),this._espacePrincipalWrapper.appendChild(this._sousPlan);let i=[this.toJSON()],n=(o)=>{if(o.abscisse=parseFloat(o.abscisse)-parseFloat(this._abscisse)+"vw",o.ordonnee=parseFloat(o.ordonnee)-parseFloat(this._ordonnee)+"vw",o.enfants)o.enfants.forEach((s)=>{n(s)});if(o.typeElement=="StructureSi"||o.typeElement=="StructureIterative")for(let s of o.conditions)s.enfants.forEach((c)=>{n(c)})};for(let o of i)n(o);this._sousPlan.chargerDepuisJSON(i,!1),this._sousPlan.toutDeplacer(35,2);let r=this.getDescendants();for(let o of r)if(o!=this&&o instanceof l.ElementGraphique)o._parent.delierEnfant(o),o.remove();if(this._editeur.selectTool(this._editeur._currentTool),e)this._sousPlan.ouvrir()}}genererOptionsContextuelles(e){let t=super.genererOptionsContextuelles(e);if(this._sousPlan==null){let s=new l.ElementMenu("Décomposer ailleurs",()=>{this.decomposerAutrePlan()});t.push(s)}else{let s=new l.ElementMenu("Décomposer ici",()=>{if(d)console.log("Décomposer sur le même plan");if(this._sousPlan==null)return;else{this.querySelector("span.ouvrir").remove();let c=this._sousPlan.exporterEnJSON();this._sousPlan.remove(),this._sousPlan=null;let u=c[0],p=(h)=>{if(h.abscisse=parseFloat(h.abscisse)+parseFloat(this._abscisse)-parseFloat(u.abscisse)+"vw",h.ordonnee=parseFloat(h.ordonnee)+parseFloat(this._ordonnee)-parseFloat(u.ordonnee)+"vw",h.enfants)h.enfants.forEach((a)=>{p(a)});if(h.typeElement=="StructureSi"||h.typeElement=="StructureIterative")for(let a of h.conditions)a.enfants.forEach((m)=>{p(m)})};for(let h of u.enfants)p(h);for(let h of this.parentNode.chargerDepuisJSON(u.enfants,!1))this._elemParent.lierEnfant(h)}});t.push(s)}let i=new l.ElementMenuCompose("Exporter le sous-arbre",()=>{if(d)console.log("Exporter le sous-arbre")});t.push(i);let n=document.createElement("h3");n.innerText="Tout",i.ajouterElementMenu(n),i.ajouterElementMenu(new l.ElementMenu(".af",()=>{if(d)console.log("Exporter en .af");this._editeur.exporterJSON(Pe([this.toJSON()]))}));let r=document.createElement("h3");r.innerText="Algorithme",i.ajouterElementMenu(r),i.ajouterElementMenu(new l.ElementMenu(".png",()=>{if(d)console.log("Exporter en .png");this._editeur.exporterPNG(JSON.stringify([this.toJSON()]),!0,!0)})),i.ajouterElementMenu(new l.ElementMenu(".jpg",()=>{if(d)console.log("Exporter en .jpg");this._editeur.exporterJPG(JSON.stringify([this.toJSON()]),!0,!0)})),i.ajouterElementMenu(new l.ElementMenu(".svg",()=>{if(d)console.log("Exporter en .svg");this._editeur.exporterSVG(JSON.stringify([this.toJSON()]),!0,!0)}));let o=document.createElement("h3");return o.innerText="Dictionnaire",i.ajouterElementMenu(o),i.ajouterElementMenu(new l.ElementMenu(".csv",()=>{if(d)console.log("Exporter en .csv");let s=this.getDescendants(),c=[];for(let u of this.parentNode.children)if(!s.includes(u)&&u!=this&&u instanceof l.ElementGraphique)c.push(u),u.remove();this.parentNode.effectuerDictionnaireDesDonnee(),this.parentNode.leDictionnaireDesDonnees.exporter("csv"),setTimeout(()=>{for(let u of c)this.parentNode.appendChild(u)},1000)})),i.ajouterElementMenu(new l.ElementMenu(".xlsx",()=>{if(d)console.log("Exporter en .xlsx");let s=this.getDescendants(),c=[];for(let u of this.parentNode.children)if(!s.includes(u)&&u!=this&&u instanceof l.ElementGraphique)c.push(u),u.remove();this.parentNode.effectuerDictionnaireDesDonnee(),this.parentNode.leDictionnaireDesDonnees.exporter("xls"),setTimeout(()=>{for(let u of c)this.parentNode.appendChild(u)},1000)})),i.ajouterElementMenu(new l.ElementMenu(".md",()=>{if(d)console.log("Exporter en .md");let s=this.getDescendants(),c=[];for(let u of this.parentNode.children)if(!s.includes(u)&&u!=this&&u instanceof l.ElementGraphique)c.push(u),u.remove();this.parentNode.effectuerDictionnaireDesDonnee(),this.parentNode.leDictionnaireDesDonnees.exporter("md"),setTimeout(()=>{for(let u of c)this.parentNode.appendChild(u)},1000)})),t}}class Ee extends X{__listeConditions;_editeur=b;_mouseDownTime=0;constructor(e,t,i=[]){super(e,t);if(this._listeConditions=i,this._listeConditions.length==0)this._listeConditions.push(new l.Condition),this._listeConditions[0]._structure=this;this.addEventListener("mousemove",function(n){for(let r of this._listeConditions.children)r._elemParent._listeElementsEnfants.forEach((o)=>{o.ligne.update()})})}get _listeConditions(){return this.__listeConditions}set _listeConditions(e){this.__listeConditions=e}afficher(){console.log(\`Abscisse : \${this._abscisse} Ordonnée : \${this._ordonnee}\`),console.log("Conditions :"),this._listeConditions.forEach((e)=>{e.afficher()})}getEnfants(e=l.ElementGraphique){let t=[];for(let i of this._listeConditions.children)for(let n of i._elemParent._listeElementsEnfants)t.push(n.element);return t=l.PlanTravail.FiltrerElementsGraphique(t,e),l.PlanTravail.trierElementsGraphique(t)}ajouterCondition(e=new l.Condition){e._structure=this,this._listeConditions.appendChild(e),this._editeur.ajouterEvenement(new l.EvenementCreationElement(e,this._listeConditions))}supprimerCondition(e=null){if(this._listeConditions.children.length==1)return;if(e instanceof l.Condition)this._editeur.ajouterEvenement(new l.EvenementSuppressionElement(e)),e._elemParent.delierTousLesEnfants(),this._listeConditions.removeChild(e);else for(let t=this._listeConditions.children.length-1;t>=0;t--)if(this._listeConditions.children[t]._libelle==""){this._listeConditions.children[t]._elemParent.delierTousLesEnfants(),this._listeConditions.removeChild(this._listeConditions.children[t]);break}}getTailleAbscisse(){let e=0;for(let t of this._listeConditions.children)e+=t.getTailleAbscisse();return e}getTailleOrdonnee(){return 4}decalerCondition(e,t,i=!1){if(!i)this._editeur.ajouterEvenement(new l.EvenementDeplacementCondition(e,t));if(t==-1&&e instanceof l.Condition){let n=e.previousElementSibling;if(n!=null)e.style.animation="jumpOverLeft var(--specialTransitionTime) ease-in-out",n.style.animation="slideUnderRight var(--specialTransitionTime) ease-in-out",setTimeout(()=>{e.parentElement.insertBefore(e,n),e.style.animation="",n.style.animation="",e._elemParent._listeElementsEnfants.forEach((r)=>{r.ligne.update()}),n._elemParent._listeElementsEnfants.forEach((r)=>{r.ligne.update()})},parseFloat(document.body.style.getPropertyValue("--specialTransitionTime"))*1000)}else if(t==1&&e instanceof l.Condition){let n=e.nextElementSibling;if(n!=null)e.style.animation="jumpOverRight var(--specialTransitionTime) ease-in-out",n.style.animation="slideUnderLeft var(--specialTransitionTime) ease-in-out",setTimeout(()=>{e.parentElement.insertBefore(n,e),e.style.animation="",n.style.animation="",e._elemParent._listeElementsEnfants.forEach((r)=>{r.ligne.update()}),n._elemParent._listeElementsEnfants.forEach((r)=>{r.ligne.update()})},parseFloat(document.body.style.getPropertyValue("--specialTransitionTime"))*1000)}}ajouterConditionParRapportA(e,t,i=!1){if(t==-1&&e instanceof l.Condition){let n=new l.Condition;if(n._structure=this,this._listeConditions.insertBefore(n,e),!i)this._editeur.ajouterEvenement(new l.EvenementCreationElement(n,this._listeConditions))}else if(t==1&&e instanceof l.Condition){let n=new l.Condition;if(n._structure=this,this._listeConditions.insertBefore(n,e.nextElementSibling),!i)this._editeur.ajouterEvenement(new l.EvenementCreationElement(n,this._listeConditions))}setTimeout(()=>{e._elemParent._listeElementsEnfants.forEach((n)=>{n.ligne.update()})},200)}supprimer(){for(let e of this._listeConditions.children)e._elemParent.delierTousLesEnfants();if(this._parent!=null)this._parent.delierEnfant(this);this.remove()}getEnfantsParCondition(){let e=[];for(let t of this._listeConditions.children){let i=[];for(let n of t._elemParent._listeElementsEnfants)i.push(n.element);i=l.PlanTravail.trierElementsGraphique(i),e.push(i)}return e}getCondition(e){return this._listeConditions.children[e]}genererOptionsContextuelles(e){let t=super.genererOptionsContextuelles(e);return t.push(new l.ElementMenu("Délier toutes les conditions",()=>{if(d)console.log("Supprimer");for(let i of this._listeConditions.children)i._elemParent.delierTousLesEnfants()})),t}}class Ce extends X{_elemParent;_inviteBornes;constructor(e,t,i=new l.ElementParent){super(e,t);if(this._elemParent=i,this._elemParent!=null)i._proprietaire=this;this.addEventListener("mousemove",function(n){this._elemParent._listeElementsEnfants.forEach((r)=>{r.ligne.update()})}),this.addEventListener("dblclick",(n)=>{this.inviteBornes()})}afficher(){let e=document.createElement("div");e.className="boucleSVG",e.setAttribute("draggable",!1),this.appendChild(e)}getEnfants(e=l.ElementGraphique){let t=[];for(let i of this._elemParent._listeElementsEnfants)t.push(i.element);return t=l.PlanTravail.FiltrerElementsGraphique(t,e),l.PlanTravail.trierElementsGraphique(t)}getAncreDecomposition(){let e=parseFloat(this._abscisse)+2,t=parseFloat(this._ordonnee)+4;return{abscisse:e,ordonnee:t}}getAncreComposition(){let e=parseFloat(this._abscisse)+2,t=parseFloat(this._ordonnee);return{abscisse:e,ordonnee:t}}peutEtreDecompose(){return!0}inviteBornes(){if(d)console.log(\`this._inviteBornes : \${this._inviteBornes}\`);if(this._inviteBornes==null)this._inviteBornes=new l.InviteBornesPourSI(this);let e=document.querySelector("invite-bornes-pour-si");if(e!=null)e.parentNode.removeChild(e);this.parentNode.appendChild(this._inviteBornes)}supprimer(){if(this._elemParent.delierTousLesEnfants(),this._parent!=null)this._parent.delierEnfant(this);if(this._inviteBornes!=null){if(this._inviteBornes.parentNode!=null)this._inviteBornes.parentNode.removeChild(this._inviteBornes)}this.remove()}}class Ze extends HTMLElement{_structureIterative;_structureIterativeBornee;_structureIterativeNonBornee;_editeur=b;indice;borneInf;borneSup;selectCroissant;pas;button;nBorne;constructor(e,t="",i="",n="",r=""){super();if(d)console.log(\`Une invite pour les bornes a été créée pour la structure itérative : \${e}\`);if(this._structureIterative=e,e instanceof l.StructureIterativeBornee){if(this._structureIterativeBornee=e,this._structureIterativeNonBornee=new l.StructureIterativeNonBornee,d)console.log(\`this._structureIterativeNonBornee._inviteBornes : \${this._structureIterativeNonBornee._inviteBornes}\`);if(this._structureIterativeNonBornee._inviteBornes=this,d)console.log(\`this._structureIterativeNonBornee._inviteBornes : \${this._structureIterativeNonBornee._inviteBornes}\`);this._structureIterativeNonBornee.afficher()}else if(e instanceof l.StructureIterativeNonBornee){if(this._structureIterativeNonBornee=e,this._structureIterativeBornee=new l.StructureIterativeBornee,d)console.log(\`this._structureIterativeBornee._inviteBornes : \${this._structureIterativeBornee._inviteBornes}\`);if(this._structureIterativeBornee._inviteBornes=this,d)console.log(\`this._structureIterativeBornee._inviteBornes : \${this._structureIterativeBornee._inviteBornes}\`);this._structureIterativeBornee.afficher()}setInterval(()=>{this.style.left=\`
				calc(var(--sizeModifier) * \${parseFloat(this._structureIterative._abscisse)+this._structureIterative.getTailleAbscisse()+1}vw)\`,this.style.top=\`
            calc(var(--sizeModifier) * \${parseFloat(this._structureIterative._ordonnee)}vw\`},20.833333333333332);let o=document.createElement("label");o.innerText="Pour",o.style.gridColumn="1",o.style.gridRow="1",this.appendChild(o),this.indice=document.createElement("input"),this.indice.placeholder="Indice à itérer",this.indice.style.gridColumn="2 / span 3",this.indice.style.gridRow="1",this.indice.value=t,this.appendChild(this.indice);let s=document.createElement("label");s.innerText="allant de",s.style.gridColumn="1",s.style.gridRow="2",this.appendChild(s),this.borneInf=document.createElement("input"),this.borneInf.placeholder="Borne inférieure",this.borneInf.style.gridColumn="2",this.borneInf.style.gridRow="2",this.borneInf.value=i,this.appendChild(this.borneInf);let c=document.createElement("label");c.innerText="à",c.style.gridColumn="3",c.style.gridRow="2",this.appendChild(c),this.borneSup=document.createElement("input"),this.borneSup.placeholder="Borne supérieure",this.borneSup.style.gridColumn="4",this.borneSup.style.gridRow="2",this.borneSup.value=n,this.appendChild(this.borneSup);let u=document.createElement("label");u.innerText="avec un pas",u.style.gridColumn="1",u.style.gridRow="3",this.appendChild(u),this.selectCroissant=document.createElement("select"),this.selectCroissant.style.gridColumn="2",this.selectCroissant.style.gridRow="3";let p=document.createElement("option");p.value="croissant",p.innerText="croissant";let h=document.createElement("option");h.value="décroissant",h.innerText="décroissant",this.selectCroissant.appendChild(p),this.selectCroissant.appendChild(h),this.appendChild(this.selectCroissant);let a=document.createElement("label");a.innerText="de",a.style.gridColumn="3",a.style.gridRow="3",this.appendChild(a),this.pas=document.createElement("input"),this.pas.placeholder="Pas",this.pas.style.gridColumn="4",this.pas.style.gridRow="3",this.pas.value=r,this.appendChild(this.pas);let m=document.createElement("div");m.classList.add("actionButtons"),this.button=document.createElement("button"),this.button.innerText="Valider",this.button.classList.add("primaryButton"),this.button.addEventListener("click",(f)=>{this.valider()}),m.appendChild(this.button),this.nBorne=document.createElement("button"),this.nBorne.innerText="Non borné",this.nBorne.classList.add("secondaryButton"),this.nBorne.addEventListener("click",(f)=>{this.nonBorne()}),m.appendChild(this.nBorne),this.appendChild(m),this.classList.add("nonCiblable"),this.addEventListener("keydown",(f)=>{if(f.key==="Enter")f.preventDefault(),this.valider();if(f.key==="Escape")f.preventDefault(),this.remove()})}valider(e=!1){if(this._editeur._selection.deselectionnerTout(),this._structureIterative.parentNode==null){if(this._structureIterativeBornee.parentNode!=null)this._structureIterative=this._structureIterativeBornee;else if(this._structureIterativeNonBornee.parentNode!=null)this._structureIterative=this._structureIterativeNonBornee}let t={};t.estBornee=this._structureIterative instanceof l.StructureIterativeBornee,t.indice=this._structureIterative._indice,t.borneInf=this._structureIterative._borneInferieure,t.borneSup=this._structureIterative._borneSuperieure,t.pas=this._structureIterative._pas;let i={};if(i.estBornee=!0,i.indice=this.indice.value,i.borneInf=this.borneInf.value,i.borneSup=this.borneSup.value,i.pas=this.pas.value,!e)this._editeur.ajouterEvenement(new l.EvenementEditionStructureIterative(this._structureIterative,t,i));if(e&&d)console.log("---"),console.log(\`this._structureIterative instanceof StructureIterativeBornee : \${this._structureIterative instanceof l.StructureIterativeBornee}\`),console.log(\`this._structureIterative instanceof StructureIterativeNonBornee : \${this._structureIterative instanceof l.StructureIterativeNonBornee}\`),console.log(\`this._structureIterative.parentNode : \${this._structureIterative.parentNode}\`),console.log(\`this._structureIterativeBornee.parentNode : \${this._structureIterativeBornee.parentNode}\`),console.log(\`this._structureIterativeNonBornee.parentNode : \${this._structureIterativeNonBornee.parentNode}\`),console.log(this._structureIterativeBornee),console.log(this._structureIterativeNonBornee);if(this._structureIterative instanceof l.StructureIterativeBornee)this._structureIterative._borneInferieure=this.borneInf.value||"BORNE_INF",this._structureIterative._borneSuperieure=this.borneSup.value||"BORNE_SUP",this._structureIterative._pas=this.pas.value||"1",this._structureIterative._estCroissant=this.selectCroissant.value=="croissant",this._structureIterative.setVariableAIterer(this.indice.value||"i");else if(this._structureIterative instanceof l.StructureIterativeNonBornee){let n=this._structureIterative.parentNode;if(this._structureIterativeBornee._abscisse=this._structureIterative._abscisse,this._structureIterativeBornee._ordonnee=this._structureIterative._ordonnee,this._structureIterativeBornee.setPosition(),this._structureIterativeBornee._borneInferieure=this.borneInf.value||"BORNE_INF",this._structureIterativeBornee._borneSuperieure=this.borneSup.value||"BORNE_SUP",this._structureIterativeBornee._pas=this.pas.value||"1",this._structureIterativeBornee._estCroissant=this.selectCroissant.value=="croissant",this._structureIterativeBornee.setVariableAIterer(this.indice.value||"i"),n.removeChild(this._structureIterative),n.appendChild(this._structureIterativeBornee),this._structureIterative._parent!=null)this._structureIterative._parent.lierEnfant(this._structureIterativeBornee),this._structureIterative._parent.delierEnfant(this._structureIterative);this._structureIterative._elemParent._listeElementsEnfants.forEach((r)=>{this._structureIterative._elemParent.delierEnfant(r.element),this._structureIterativeBornee._elemParent.lierEnfant(r.element)}),this._structureIterative=this._structureIterativeBornee}if(this.parentNode)this.parentNode.removeChild(this)}nonBorne(e=!1){if(this._editeur._selection.deselectionnerTout(),this._structureIterative==this._structureIterativeNonBornee){this.parentNode.removeChild(this);return}let t={};t.estBornee=this._structureIterative instanceof l.StructureIterativeBornee,t.indice=this._structureIterative._indice,t.borneInf=this._structureIterative._borneInferieure,t.borneSup=this._structureIterative._borneSuperieure,t.pas=this._structureIterative._pas;let i={};if(i.estBornee=!1,!e)this._editeur.ajouterEvenement(new l.EvenementEditionStructureIterative(this._structureIterative,t,i));let n=this._structureIterativeNonBornee.parentNode||this._structureIterativeBornee.parentNode;if(this._structureIterativeNonBornee._abscisse=this._structureIterative._abscisse,this._structureIterativeNonBornee._ordonnee=this._structureIterative._ordonnee,this._structureIterativeNonBornee.setPosition(),n.removeChild(this._structureIterative),n.appendChild(this._structureIterativeNonBornee),this._structureIterative._parent!=null)this._structureIterative._parent.lierEnfant(this._structureIterativeNonBornee),this._structureIterative._parent.delierEnfant(this._structureIterative);if(this._structureIterative._elemParent._listeElementsEnfants.forEach((r)=>{this._structureIterative._elemParent.delierEnfant(r.element),this._structureIterativeNonBornee._elemParent.lierEnfant(r.element)}),this._structureIterative=this._structureIterativeNonBornee,this.parentNode)this.parentNode.removeChild(this)}}class We extends X{static typeElement="ConditionSortie";constructor(e=0,t=0){super(e,t)}afficher(){return null}extraireInformation(){return[]}toJSON(){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee}}toJSONspecifier(e){return this.toJSON()}getAncreComposition(){let e=parseFloat(this._abscisse)+2,t=parseFloat(this._ordonnee);return{abscisse:e,ordonnee:t}}}class Xe extends Ne{static typeElement="Procedure";constructor(e,t,i=" ",n=[],r=[]){super(e,t,i,n,r)}afficher(){super.afficher()}}class Ke extends HTMLElement{static typeElement="Condition";__elemParent;__structure;_editeur=b;_ancienLib;divLibelle;flecheGauche;flecheDroite;divAjouterAGauche;divAjouterADroite;constructor(e="",t=new l.ElementParent,i=null){super();if(this._elemParent=t,this._structure=i,this.afficher(),this._libelle=e,this._ancienLib=e,this._elemParent!=null)t._proprietaire=this}get _elementGraphique(){return this.parentNode.parentNode}get _libelle(){return this.divLibelle.innerText}set _libelle(e){this.divLibelle.innerText=e}get _elemParent(){return this.__elemParent}set _elemParent(e){this.__elemParent=e}get _structure(){return this.__structure}set _structure(e){this.__structure=e}get _ordonnee(){return this._structure._ordonnee}get espaceTravail(){return this._structure.parentNode}afficher(){let e=document.createElement("button");e.className="supprimer",e.innerHTML="-",e.addEventListener("click",(i)=>{this._structure.supprimerCondition(this)}),this.appendChild(e),this.divLibelle=document.createElement("div"),this.divLibelle.className="libelle auto-size-text",this.divLibelle.innerText=this._libelle,this.divLibelle.contentEditable="true",this.appendChild(this.divLibelle),this.divLibelle.addEventListener("focusout",(i)=>{if(this._structure instanceof l.StructureSi)this.divLibelle.innerText=this.divLibelle.innerText.replace(/&&/g,"ET"),this.divLibelle.innerText=this.divLibelle.innerText.replace(/\\|\\|/g,"OU");if(this._ancienLib!=this._libelle)this._editeur.ajouterEvenement(new l.EvenementEditionLibelleCondition(this,this._ancienLib,this._libelle)),this._ancienLib=this._libelle}),this.divLibelle.addEventListener("input",(i)=>{b.adjustFontSize(this.divLibelle)});let t=document.createElement("div");t.className="arrowsWrapper",t.classList.add("no-render"),this.flecheGauche=document.createElement("span"),this.flecheGauche.innerHTML="← ",this.flecheGauche.addEventListener("click",(i)=>{this._structure.decalerCondition(this,-1)}),this.flecheDroite=document.createElement("span"),this.flecheDroite.innerHTML=" →",this.flecheDroite.addEventListener("click",(i)=>{this._structure.decalerCondition(this,1)}),t.appendChild(this.flecheGauche),t.appendChild(this.flecheDroite),this.appendChild(t),this.divAjouterAGauche=document.createElement("div"),this.divAjouterAGauche.className="ajouterAGauche",this.divAjouterAGauche.innerHTML="+",this.divAjouterAGauche.classList.add("no-render"),this.divAjouterAGauche.addEventListener("click",(i)=>{this._structure.ajouterConditionParRapportA(this,-1)}),this.appendChild(this.divAjouterAGauche),this.divAjouterADroite=document.createElement("div"),this.divAjouterADroite.className="ajouterADroite",this.divAjouterADroite.innerHTML="+",this.divAjouterADroite.classList.add("no-render"),this.divAjouterADroite.addEventListener("click",(i)=>{this._structure.ajouterConditionParRapportA(this,1)}),this.appendChild(this.divAjouterADroite),this.style.animation="fall 0.2s ease-in",setTimeout(()=>{this.style.animation=""},200)}supprimer(){this._editeur.ajouterEvenement(new l.EvenementSuppressionElement(this)),this._elemParent.delierTousLesEnfants(),this._structure.supprimerCondition(this)}toJSON(){return{typeElement:this.constructor.typeElement,libelle:this._libelle,enfants:this._elemParent.toJSON()}}toJSONspecifier(e){return{typeElement:this.constructor.typeElement,libelle:this._libelle,enfants:this._elemParent.toJSONspecifier(e)}}getTailleAbscisse(){let e=this.getBoundingClientRect(),t=(e.right-e.left)/window.innerWidth*100;return 10}getAncreDecomposition(){let e=parseFloat(this._structure._abscisse);for(let i of this._structure._listeConditions.children){if(i===this)break;e+=i.getTailleAbscisse()}e+=this.getTailleAbscisse()/2;let t=parseFloat(this._structure._ordonnee)+5;return{abscisse:e,ordonnee:t-0.7}}peutEtreDecompose(){return!0}getEnfants(e=l.ElementGraphique){let t=[];for(let i of this._elemParent._listeElementsEnfants)t.push(i.element);return t=l.PlanTravail.FiltrerElementsGraphique(t,e),t.sort((i,n)=>i._abscisse-n._abscisse)}}jt();class rt extends Ee{static typeElement="StructureSi";constructor(e,t,i=[]){super(e,t,i)}afficher(){let e=document.createElement("div");e.className="triangleGauche",e.classList.add("triangle"),e.innerHTML="<span>-<span>",e.addEventListener("mousedown",(n)=>{this._mouseDownTime=new Date().getTime()}),e.addEventListener("mouseup",(n)=>{if(new Date().getTime()-this._mouseDownTime<200)this.supprimerCondition()}),this.appendChild(e);let t=document.createElement("div");t.className="conditionContainer",this.appendChild(t);for(let n=0;n<this._listeConditions.length;n++)this._listeConditions[n]._structure=this,t.appendChild(this._listeConditions[n]);this._listeConditions=t;let i=document.createElement("div");i.className="triangleDroit",i.classList.add("triangle"),i.innerHTML="<span>+<span>",i.addEventListener("mousedown",(n)=>{this._mouseDownTime=new Date().getTime()}),i.addEventListener("mouseup",(n)=>{if(new Date().getTime()-this._mouseDownTime<200)this.ajouterCondition()}),this.appendChild(i)}extraireInformation(){return[]}renameInformation(e,t){for(let i=0;i<this._listeConditions.children.length;i++)if(this._listeConditions.children[i].divLibelle.textContent.includes(e))this._listeConditions.children[i].divLibelle.textContent=this._listeConditions.children[i].divLibelle.textContent.replaceAll(e,t)}toJSON(){let e=[];for(let t of this._listeConditions.children)e.push(t.toJSON());return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,conditions:e}}toJSONspecifier(e){let t=[];for(let i of this._listeConditions.children)t.push(i.toJSONspecifier(e));return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,conditions:t}}extraireInformation(){return[]}genererOptionsContextuelles(e){let t=super.genererOptionsContextuelles(e),i=this.detecterPotentielTransformationSwitch();if(i.result)t.push(new l.ElementMenu("Transformer en Switch",()=>{if(d)console.log("Transformer en Switch");let n=[...tt(e).elements].find(([,o])=>o===this)?.[0];if(!n){console.error("Impossible de localiser la structure SI à transformer.");return}let r=i.valeurs.map((o)=>o._libelle.split("=")[1].trim());it(e,"Transformer le SI en switch",(o)=>nt(o,n,i.variable,r))}));return t}detecterPotentielTransformationSwitch(){try{let e=this._listeConditions.children;if(e.length<3)return{result:!1};let t=e[0].querySelector(".libelle").textContent,i,n=[];if(t.includes("="))i=t.split("=")[0].trim();for(let r of e){if(d)console.log(r);if(t=r.querySelector(".libelle").textContent,t.toLowerCase().includes("sinon"))continue;if(!t.includes("=")||t.toLowerCase().includes("ou")||t.toLowerCase().includes("et"))return{result:!1};if(i!=t.split("=")[0].trim())return{result:!1};n.push(r)}return{result:!0,variable:i,valeurs:n}}catch(e){return console.error(e),{result:!1}}}}class ot extends Ee{static typeElement="StructureSwitch";_expressionATester;_ancienneExpressionATester;_editeur=b;divExpressionATester;constructor(e,t,i=[],n=""){super(e,t,i);this._expressionATester=n,this._ancienneExpressionATester=n}get expressionATester(){return this.querySelector(".expressionATester").textContent}set expressionATester(e){this.querySelector(".expressionATester").innerText=e}renameInformation(e,t){this.querySelector(".expressionATester").textContent=t}afficher(){let e=document.createElement("div");e.className="triangleGauche",e.classList.add("triangle"),e.innerHTML="<span>-<span>",e.addEventListener("mousedown",(o)=>{this._mouseDownTime=new Date().getTime()}),e.addEventListener("mouseup",(o)=>{if(new Date().getTime()-this._mouseDownTime<200)this.supprimerCondition()}),this.appendChild(e),this.divExpressionATester=document.createElement("div"),this.divExpressionATester.className="expressionATester",this.divExpressionATester.contentEditable="true",this.divExpressionATester.innerText=this._expressionATester,this.appendChild(this.divExpressionATester),this.divExpressionATester.addEventListener("focusout",(o)=>{if(this._ancienneExpressionATester!=this.expressionATester)this._editeur.ajouterEvenement(new l.EvenementEditionExpressionSwitch(this,this._ancienneExpressionATester,this.expressionATester)),this._ancienneExpressionATester=this.expressionATester});let t=document.createElement("hr");t.className="diviseurGauche",this.appendChild(t);let i=document.createElement("div");i.className="conditionContainer",this.appendChild(i);for(let o=0;o<this._listeConditions.length;o++)this._listeConditions[o]._structure=this,i.appendChild(this._listeConditions[o]);this._listeConditions=i;let n=document.createElement("div");n.className="triangleDroit",n.classList.add("triangle"),n.innerHTML="<span>+<span>",n.addEventListener("mousedown",(o)=>{this._mouseDownTime=new Date().getTime()}),n.addEventListener("mouseup",(o)=>{if(new Date().getTime()-this._mouseDownTime<200)this.ajouterCondition()}),this.appendChild(n);let r=document.createElement("hr");r.className="diviseurDroit",this.appendChild(r)}ExtraireVariables(){let e=this.querySelector(".expressionATester").textContent,t=this.querySelector(".conditionContainer");return[]}toJSON(){let e=[];for(let t of this._listeConditions.children)e.push(t.toJSON());return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,expressionATester:this.querySelector(".expressionATester").textContent,conditions:e}}toJSONspecifier(e){let t=[];for(let i of this._listeConditions.children)t.push(i.toJSONspecifier(e));return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,expressionATester:this.querySelector(".expressionATester").textContent,conditions:t}}extraireInformation(){return[]}}class st extends Ce{static typeElement="StructureIterativeBornee";__variableAIterer;__borneInferieure;__borneSuperieure;__pas;_estCroissant;constructor(e,t,i="i",n="BORNE_INF",r="BORNE_SUP",o="1",s=!0){super(e,t);this._variableAIterer=i,this._borneInferieure=n,this._borneSuperieure=r,this._pas=o,this._estCroissant=s}get _variableAIterer(){return this.__variableAIterer}set _variableAIterer(e){this.__variableAIterer=e}setVariableAIterer(e){if(this._variableAIterer=e,this.etatClassique())this.querySelector(".informationsBornes").innerHTML=\`Pour \${this._variableAIterer} allant <br/> de \${this._borneInferieure} à \${this._borneSuperieure}\`;else this.querySelector(".informationsBornes").innerHTML=\`Pour \${this._variableAIterer} allant <br/> de \${this._borneInferieure} à \${this._borneSuperieure} <br/> par pas \${this._estCroissant?"Croissant":"Décroissant"} de \${this._pas}\`}get _borneInferieure(){return this.__borneInferieure}set _borneInferieure(e){this.__borneInferieure=e}get _borneSuperieure(){return this.__borneSuperieure}set _borneSuperieure(e){this.__borneSuperieure=e}get _pas(){return this.__pas}set _pas(e){this.__pas=e}afficher(){super.afficher();let e=document.createElement("div");if(e.className="informationsBornes",this.etatClassique())e.innerHTML=\`Pour \${this._variableAIterer} allant <br/> de \${this._borneInferieure} à \${this._borneSuperieure}\`;else e.innerHTML=\`Pour \${this._variableAIterer} allant <br/> de \${this._borneInferieure} à \${this._borneSuperieure} <br/> par pas \${this._estCroissant?"Croissant":"Décroissant"} de \${this._pas}\`;this.appendChild(e)}etatClassique(){let e=parseFloat(this._borneInferieure),t=parseFloat(this._borneSuperieure);if(isNaN(e)||isNaN(t))return!1;let i=t-e;if(i==0)return!1;if(i>0)return this._estCroissant&&parseFloat(this._pas)==1;return!this._estCroissant&&parseFloat(this._pas)==1}toJSON(){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,variableAIterer:this._variableAIterer,borneInferieure:this._borneInferieure,borneSuperieure:this._borneSuperieure,pas:this._pas,croissant:this._estCroissant,enfants:this._elemParent.toJSON()}}toJSONspecifier(e){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,variableAIterer:this._variableAIterer,borneInferieure:this._borneInferieure,borneSuperieure:this._borneSuperieure,pas:this._pas,croissant:this._estCroissant,enfants:this._elemParent.toJSONspecifier(e)}}extraireInformation(){let e=new l.Information;if(e._nom=this._variableAIterer,e._type="int",e._nom=="")return[];return[e]}getInformationDonnee(){return this.extraireInformation()}getInformationResultat(){return[]}include(e){return this._variableAIterer.includes(e)||this._pas.includes(e)||this._borneInferieure.includes(e)||this._borneSuperieure.includes(e)}renameInformation(e,t){if(this._variableAIterer==e)this.setVariableAIterer(t)}}class at extends Ce{static typeElement="StructureIterativeNonBornee";constructor(e,t){super(e,t)}afficher(){super.afficher()}toJSON(){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,enfants:this._elemParent.toJSON()}}toJSONspecifier(e){return{typeElement:this.constructor.typeElement,abscisse:this._abscisse,ordonnee:this._ordonnee,enfants:this._elemParent.toJSONspecifier(e)}}genererOptionsContextuelles(e){let t=super.genererOptionsContextuelles(e);return t.push(new l.ElementMenu("Ajouter une condition d'arrêt",()=>{if(d)console.log("Ajouter une condition d'arrêt");let i=new l.StructureSi(parseFloat(this._abscisse)-3+"vw",parseFloat(this._ordonnee)+10+"vw");i.setPosition(),i.afficher(),this.parentNode.appendChild(i);let n=new l.ConditionSortie(parseFloat(this._abscisse)+"vw",parseFloat(this._ordonnee)+15+"vw");n.setPosition(),n.afficher(),this.parentNode.appendChild(n),this._elemParent.lierEnfant(i),i.getCondition(0)._elemParent.lierEnfant(n)})),t}}class Ot{__listeElementsEnfants;__proprietaire;_editeur=b;constructor(e,t=[]){this._proprietaire=e,this._listeElementsEnfants=t,setInterval(()=>{this.updateAll()},83.33333333333333)}get _listeElementsEnfants(){return this.__listeElementsEnfants}set _listeElementsEnfants(e){this.__listeElementsEnfants=e}get _proprietaire(){return this.__proprietaire}set _proprietaire(e){this.__proprietaire=e}get nombreEnfants(){return this._listeElementsEnfants.length}lierEnfant(e,t=!1){if(!t)this._editeur.ajouterEvenement(new l.EvenementLiaison(this._proprietaire,e));if(e instanceof l.ElementGraphique){for(var i of this._listeElementsEnfants)if(i.element===e){if(d)console.log("L'élément à ajouter est déjà un enfant, on l'enlève de son parent");return this.delierEnfant(e),e._parent=null,!1}if(e._parent!=null){if(d)console.log("L'élément à ajouter a déjà un parent, on l'enlève de son parent");e._parent.delierEnfant(e)}e._parent=this;let n=this.creerLienAdequat(this._proprietaire,e,this._proprietaire.espaceTravail);return this._listeElementsEnfants.push({element:e,ligne:n}),!0}return!1}delierEnfant(e,t=!1){if(!t)this._editeur.ajouterEvenement(new l.EvenementSuppressionLiaison(this._proprietaire,e));var i;for(i of this._listeElementsEnfants)if(i.element===e){i.ligne.supprimer(),this._listeElementsEnfants.splice(this._listeElementsEnfants.indexOf(i),1),i.element._parent=null;break}}delierTousLesEnfants(){while(this._listeElementsEnfants.length>0)this.delierEnfant(this._listeElementsEnfants[0].element)}toJSON(){let e=[];return this._listeElementsEnfants.forEach((t)=>{e.push(t.element.toJSON())}),e}toJSONspecifier(e){let t=[];if(d)console.log(e);return this._listeElementsEnfants.forEach((i)=>{if(e.includes(i.element))t.push(i.element.toJSONspecifier(e))}),t}creerLienAdequat(e,t,i){let n;if(e instanceof l.Probleme||e instanceof l.Procedure)n=new l.LienCompositionProbleme(e,t,i);else if(e instanceof l.StructureIterativeBornee||e instanceof l.StructureIterativeNonBornee)n=new l.LienTriple(e,t,i);else if(e instanceof l.Condition)if(e._elemParent._listeElementsEnfants.length==0)n=new l.LienDroit(e,t,i);else{n=new l.LienTriple(e,t,i);for(let r of e._elemParent._listeElementsEnfants)if(r.ligne instanceof l.LienDroit)r.ligne.supprimer(),r.ligne=new l.LienTriple(e,r.element,i)}else n=new l.Lien(e,t,i);return n}updateAll(){for(let e of this._listeElementsEnfants)e.ligne.update()}}class lt extends HTMLElement{__abscisse1;__ordonnee1;__abscisse2;__ordonnee2;_abscisseMilieu;_ordonneeMilieu;constructor(e,t,i,n){super();this._abscisse1=parseFloat(e),this._ordonnee1=parseFloat(t),this._abscisse2=parseFloat(i),this._ordonnee2=parseFloat(n),this.update()}get _abscisse1(){return this.__abscisse1}set _abscisse1(e){this.__abscisse1=e}get _ordonnee1(){return this.__ordonnee1}set _ordonnee1(e){this.__ordonnee1=e}get _abscisse2(){return this.__abscisse2}set _abscisse2(e){this.__abscisse2=e}get _ordonnee2(){return this.__ordonnee2}set _ordonnee2(e){this.__ordonnee2=e}update(){if(this._abscisse1<this._abscisse2)this._abscisseMilieu=(this._abscisse1+this._abscisse2)/2,this._ordonneeMilieu=(this._ordonnee1+this._ordonnee2)/2,this.style.left="calc(var(--sizeModifier) * "+(this._abscisseMilieu-(this._abscisse2-this._abscisse1)/2)+"vw)",this.style.top="calc(var(--sizeModifier) * "+(this._ordonneeMilieu-(this._ordonnee2-this._ordonnee1)/2)+"vw)",this.style.width="calc(var(--sizeModifier) * "+Math.sqrt((this._abscisse1-this._abscisse2)*(this._abscisse1-this._abscisse2)+(this._ordonnee1-this._ordonnee2)*(this._ordonnee1-this._ordonnee2))+"vw)",this.style.transform="rotate("+Math.atan2(this._ordonnee2-this._ordonnee1,this._abscisse2-this._abscisse1)+"rad)";else this._abscisseMilieu=(this._abscisse1+this._abscisse2)/2,this._ordonneeMilieu=(this._ordonnee1+this._ordonnee2)/2,this.style.left="calc(var(--sizeModifier) * "+(this._abscisseMilieu-(this._abscisse1-this._abscisse2)/2)+"vw)",this.style.top="calc(var(--sizeModifier) * "+(this._ordonneeMilieu-(this._ordonnee1-this._ordonnee2)/2)+"vw)",this.style.width="calc(var(--sizeModifier) * "+Math.sqrt((this._abscisse2-this._abscisse1)*(this._abscisse2-this._abscisse1)+(this._ordonnee2-this._ordonnee1)*(this._ordonnee2-this._ordonnee1))+"vw)",this.style.transform="rotate("+Math.atan2(this._ordonnee1-this._ordonnee2,this._abscisse1-this._abscisse2)+"rad)"}setDebut(e,t){this._abscisse1=parseFloat(e),this._ordonnee1=parseFloat(t),this.update()}setFin(e,t){this._abscisse2=parseFloat(e),this._ordonnee2=parseFloat(t),this.update()}}class pe{__elemGraphiqueParent;__elemGraphiqueEnfant;_espaceTravail;constructor(e,t,i){this._elemGraphiqueParent=e,this._elemGraphiqueEnfant=t,this._espaceTravail=i}get _elemGraphiqueParent(){return this.__elemGraphiqueParent}set _elemGraphiqueParent(e){this.__elemGraphiqueParent=e}get _elemGraphiqueEnfant(){return this.__elemGraphiqueEnfant}set _elemGraphiqueEnfant(e){this.__elemGraphiqueEnfant=e}update(){}supprimer(){}}class $t extends pe{_ligne;constructor(e,t,i){super(e,t,i);this._ligne=new l.Ligne,this.update(),this._espaceTravail.appendChild(this._ligne)}update(){let e=this._elemGraphiqueParent.getAncreDecomposition(),t=this._elemGraphiqueEnfant.getAncreComposition();this._ligne.setDebut(e.abscisse,e.ordonnee),this._ligne.setFin(t.abscisse,t.ordonnee)}supprimer(){this._espaceTravail.removeChild(this._ligne)}}class Ut extends pe{_symboleDecomposition;_ligneH;_ligneV;constructor(e,t,i){super(e,t,i);this._symboleDecomposition=new l.SymboleDecomposition,this._ligneH=new l.Ligne,this._ligneV=new l.Ligne,this.update(),this._espaceTravail.appendChild(this._symboleDecomposition),this._espaceTravail.appendChild(this._ligneH),this._espaceTravail.appendChild(this._ligneV)}update(){let e=this._elemGraphiqueParent.getAncreDecomposition(),t=this._elemGraphiqueEnfant.getAncreComposition();if(this._elemGraphiqueParent._elemParent.nombreEnfants>1)this._symboleDecomposition.setPointAncrage(e.abscisse,e.ordonnee),this._symboleDecomposition.style.display="",this._ligneH.setDebut(e.abscisse,e.ordonnee+1.5),this._ligneH.setFin(t.abscisse,e.ordonnee+1.5),this._ligneV.setDebut(t.abscisse,e.ordonnee+1.5),this._ligneV.setFin(t.abscisse,t.ordonnee);else{let i=Math.sqrt(Math.pow(t.abscisse-e.abscisse,2)+Math.pow(t.ordonnee-e.ordonnee,2)),n=Math.atan2(t.ordonnee-e.ordonnee,t.abscisse-e.abscisse);if(i>15||!(n>Math.PI/4&&n<3*Math.PI/4))this._symboleDecomposition.setPointAncrage(e.abscisse,e.ordonnee),this._symboleDecomposition.style.display="",this._ligneH.setDebut(e.abscisse,e.ordonnee+1.5),this._ligneH.setFin(t.abscisse,e.ordonnee+1.5),this._ligneV.setDebut(t.abscisse,e.ordonnee+1.5),this._ligneV.setFin(t.abscisse,t.ordonnee);else this._symboleDecomposition.style.display="none",this._ligneH.setDebut(e.abscisse-0.5,e.ordonnee),this._ligneH.setFin(t.abscisse-0.5,t.ordonnee),this._ligneV.setDebut(e.abscisse+0.5,e.ordonnee),this._ligneV.setFin(t.abscisse+0.5,t.ordonnee)}}supprimer(){this._espaceTravail.removeChild(this._symboleDecomposition),this._espaceTravail.removeChild(this._ligneH),this._espaceTravail.removeChild(this._ligneV)}}class Gt extends pe{_ligneDecomp;_ligneH;_ligneV;constructor(e,t,i){super(e,t,i);this._ligneDecomp=new l.Ligne,this._ligneH=new l.Ligne,this._ligneV=new l.Ligne,this.update(),this._espaceTravail.appendChild(this._ligneDecomp),this._espaceTravail.appendChild(this._ligneH),this._espaceTravail.appendChild(this._ligneV)}update(){if(this._elemGraphiqueParent._elemParent.nombreEnfants>1){let e=this._elemGraphiqueParent.getAncreDecomposition(),t=this._elemGraphiqueEnfant.getAncreComposition();this._ligneDecomp.setDebut(e.abscisse,e.ordonnee),this._ligneDecomp.setFin(e.abscisse,e.ordonnee+0.6),this._ligneH.setDebut(e.abscisse,e.ordonnee+0.6),this._ligneH.setFin(t.abscisse,e.ordonnee+0.6),this._ligneV.setDebut(t.abscisse,e.ordonnee+0.6),this._ligneV.setFin(t.abscisse,t.ordonnee)}else{let e=this._elemGraphiqueParent.getAncreDecomposition(),t=this._elemGraphiqueEnfant.getAncreComposition(),i=Math.sqrt(Math.pow(t.abscisse-e.abscisse,2)+Math.pow(t.ordonnee-e.ordonnee,2)),n=Math.atan2(t.ordonnee-e.ordonnee,t.abscisse-e.abscisse);if(i>15||!(n>Math.PI/4&&n<3*Math.PI/4)){let r=this._elemGraphiqueParent.getAncreDecomposition(),o=this._elemGraphiqueEnfant.getAncreComposition();this._ligneDecomp.setDebut(r.abscisse,r.ordonnee),this._ligneDecomp.setFin(r.abscisse,r.ordonnee+0.6),this._ligneH.setDebut(r.abscisse,r.ordonnee+0.6),this._ligneH.setFin(o.abscisse,r.ordonnee+0.6),this._ligneV.setDebut(o.abscisse,r.ordonnee+0.6),this._ligneV.setFin(o.abscisse,o.ordonnee)}else this._ligneDecomp.setDebut(e.abscisse,e.ordonnee),this._ligneDecomp.setFin(t.abscisse,t.ordonnee),this._ligneH.setDebut(e.abscisse,e.ordonnee),this._ligneH.setFin(t.abscisse,t.ordonnee),this._ligneV.setDebut(t.abscisse,t.ordonnee),this._ligneV.setFin(e.abscisse,e.ordonnee)}}supprimer(){this._espaceTravail.removeChild(this._ligneDecomp),this._espaceTravail.removeChild(this._ligneH),this._espaceTravail.removeChild(this._ligneV)}}class ct extends HTMLElement{_pointAncrageX;_pointAncrageY;constructor(e,t){super();this._pointAncrageX=parseFloat(e),this._pointAncrageY=parseFloat(t),this.update()}setPointAncrage(e,t){this._pointAncrageX=parseFloat(e),this._pointAncrageY=parseFloat(t),this.update()}update(){this.style.left="calc(var(--sizeModifier) * "+(this._pointAncrageX-0.6)+"vw)",this.style.top="calc(var(--sizeModifier) * "+this._pointAncrageY+"vw)"}}class dt extends HTMLElement{_listeElementsSelectionnes;_editeur=b;_planTravail=document.querySelector("plan-travail");constructor(){super();this._listeElementsSelectionnes=[],setInterval(()=>{this.update()},41.666666666666664)}get nbElementsSelectionnes(){return this._listeElementsSelectionnes.length}selectionnerElement(e){if(e instanceof l.ElementGraphique&&!this.estSelectionne(e)){let t=new l.RepresentationSelectionSimple(e,this);return this.parentNode.appendChild(t),this._listeElementsSelectionnes.push(t),this.update(),!0}return!1}selectionnerArbre(e){if(this.selectionnerElement(e),e.peutEtreDecompose())for(let t of e.getEnfants())this.selectionnerArbre(t);if(e instanceof l.StructureAlternative)for(let t of e._listeConditions.children)this.selectionnerArbre(t)}deselectionnerElement(e){if(e instanceof l.ElementGraphique){for(var t of this._listeElementsSelectionnes)if(t._element===e){t.supprimer(),this._listeElementsSelectionnes.splice(this._listeElementsSelectionnes.indexOf(t),1);break}}return this.update(),!1}deselectionnerTout(){for(var e of this._listeElementsSelectionnes)e.supprimer();this._listeElementsSelectionnes=[],this.style.width="0vw",this.style.height="0vw",this.style.left="0vw",this.style.top="0vw"}supprimerTout(){for(var e of this._listeElementsSelectionnes){let t=new l.EvenementSuppressionElement(e._element);e._element.supprimer(),this._editeur.ajouterEvenement(t),e.supprimer()}this._listeElementsSelectionnes=[],this.style.width="0vw",this.style.height="0vw",this.style.left="0vw",this.style.top="0vw"}coin(e,t){let i=this.coordonneesMinEtMax();if(e=="top"){if(t=="left")return{x:i.coordonneesMin.x,y:i.coordonneesMin.y};else if(t=="right")return{x:i.coordonneesMax.x,y:i.coordonneesMin.y}}else if(e=="bottom"){if(t=="left")return{x:i.coordonneesMin.x,y:i.coordonneesMax.y};else if(t=="right")return{x:i.coordonneesMax.x,y:i.coordonneesMax.y}}else if(e=="center")return{x:(i.coordonneesMin.x+i.coordonneesMax.x)/2,y:(i.coordonneesMin.y+i.coordonneesMax.y)/2}}coordonneesMinEtMax(){if(this._listeElementsSelectionnes.length===0)return{coordonneesMin:{x:-100,y:-100},coordonneesMax:{x:-100,y:-100}};let e={x:Number.MAX_VALUE,y:Number.MAX_VALUE},t={x:Number.MIN_VALUE,y:Number.MIN_VALUE};for(let i of this._listeElementsSelectionnes){let n=i.getBoundingClientRect(),r=document.querySelectorAll("sous-plan-travail"),s=Array.from(r).reverse().find((p)=>p.classList.contains("ouvert")),c=0,u=0;if(s!==void 0)c=s.scrollLeft-5,u=s.scrollTop+5;else c=this._planTravail.scrollLeft,u=this._planTravail.scrollTop;e.x=Math.min(e.x,n.left+c),e.y=Math.min(e.y,n.top+u),t.x=Math.max(t.x,n.right+c),t.y=Math.max(t.y,n.bottom+u)}return{coordonneesMin:e,coordonneesMax:t}}update(){for(var e of this._listeElementsSelectionnes)e.update();let t=this.coordonneesMinEtMax(),i=t.coordonneesMin.x,n=t.coordonneesMin.y,r=t.coordonneesMax.x-t.coordonneesMin.x,o=t.coordonneesMax.y-t.coordonneesMin.y,s=this.parentNode.getBoundingClientRect();this.style.left=\`\${i-s.x}px\`,this.style.top=\`\${n-s.y}px\`,this.style.width=\`\${r}px\`,this.style.height=\`\${o}px\`}moveAllSelectedElements(e,t){let i=this.coin("top","left"),n={x:e/100*window.innerWidth,y:t/100*window.innerWidth};if(d)console.log(n,i);if(i.x+n.x<0&&n.x<0)e=0;if(i.y+n.y<100&&n.y<0)t=0;for(var r of this._listeElementsSelectionnes){if(r._element._abscisse=parseFloat(r._element._abscisse)+e+"vw",r._element._ordonnee=parseFloat(r._element._ordonnee)+t+"vw",r._element.setPosition(),r.update(),r._element instanceof l.Probleme||r._element instanceof l.Procedure||r._element instanceof l.StructureIterative)r._element._elemParent.updateAll();else if(r._element instanceof l.StructureAlternative)for(let o of r._element._listeConditions.children)o._elemParent.updateAll();if(r._element._parent!=null)r._element._parent.updateAll()}this.update()}estSelectionne(e){for(var t of this._listeElementsSelectionnes)if(t._element===e)return!0;return!1}getElementsSelectionnes(){let e=[];for(var t of this._listeElementsSelectionnes)e.push(t._element);return e}}class ut extends HTMLElement{_element;_monSelecteur;constructor(e,t){super();this._element=e,this._monSelecteur=t,this.classList.add("nonCiblable")}update(){if(this._element instanceof l.Probleme||this._element instanceof l.Procedure)this.style.left="calc(var(--sizeModifier) * "+(parseFloat(this._element._abscisse)+10)+"vw)",this.style.top="calc(var(--sizeModifier) * "+parseFloat(this._element._ordonnee)+"vw)",this.style.width="calc(var(--sizeModifier) * "+(this._element.getTailleAbscisse()-20)+"vw)",this.style.height="calc(var(--sizeModifier) * "+(this._element.getTailleOrdonnee()-1)+"vw)";else if(this._element instanceof l.StructureAlternative)this.style.left="calc(var(--sizeModifier) * "+(parseFloat(this._element._abscisse)-2.5)+"vw)",this.style.top="calc(var(--sizeModifier) * "+parseFloat(this._element._ordonnee)+"vw)",this.style.width="calc(var(--sizeModifier) * "+(this._element.getTailleAbscisse()+6)+"vw)",this.style.height="calc(var(--sizeModifier) * "+(this._element.getTailleOrdonnee()+2)+"vw)";else if(this._element instanceof l.StructureIterative)this.style.left="calc(var(--sizeModifier) * "+parseFloat(this._element._abscisse)+"vw)",this.style.top="calc(var(--sizeModifier) * "+parseFloat(this._element._ordonnee)+"vw)",this.style.width="calc(var(--sizeModifier) * "+this._element.getTailleAbscisse()+"vw)",this.style.height="calc(var(--sizeModifier) * 4vw)";else if(this._element instanceof l.ConditionSortie)this.style.left="calc(var(--sizeModifier) * "+parseFloat(this._element._abscisse)+"vw)",this.style.top="calc(var(--sizeModifier) * "+parseFloat(this._element._ordonnee)+"vw)",this.style.width="calc(var(--sizeModifier) * "+this._element.getTailleAbscisse()+"vw)",this.style.height="calc(var(--sizeModifier) * 4vw)"}supprimer(){this.remove()}}class pt extends HTMLElement{_x1;_y1;_x2;_y2;constructor(){super()}placer(e,t,i,n){this.style.left=\`calc(var(--sizeModifier) * \${Math.min(e,i)}vw)\`,this.style.top=\`calc(var(--sizeModifier) * \${Math.min(t,n)}vw)\`,this.style.width=\`calc(var(--sizeModifier) * \${Math.abs(e-i)}vw)\`,this.style.height=\`calc(var(--sizeModifier) * \${Math.abs(t-n)}vw)\`,this._x1=Math.min(e,i),this._y1=Math.min(t,n),this._x2=Math.max(e,i),this._y2=Math.max(t,n)}listerElementsGraphiques(){let e=[];for(let t of this.parentNode.children){if(d)console.log(\`L'élément \${t.constructor.name} a pour abscisse \${t._abscisse} et pour ordonnée \${t._ordonnee}\`);if(d)console.log(\`Le rectangle a pour x1 \${this._x1} et pour y1 \${this._y1}\`);if(d)console.log(\`Le rectangle a pour x2 \${this._x2} et pour y2 \${this._y2}\`);if(t instanceof l.ElementGraphique){if(this._x1<=parseFloat(t.selectAnchor.x)&&parseFloat(t.selectAnchor.x)<=this._x2&&this._y1<=parseFloat(t.selectAnchor.y)&&parseFloat(t.selectAnchor.y)<=this._y2){if(d)console.log("Element sélectionné :");if(d)console.log(t);e.push(t)}}}return e}}class ht extends HTMLElement{constructor(){super()}ajouterElementMenu(e){this.appendChild(e),this.style.opacity=0,this.style.scale=1,setTimeout(()=>{let t=this.getBoundingClientRect();if(d)console.log(t);if(t.bottom>window.innerHeight)this.style.top="auto",this.style.bottom="0";this.style.scale=null,setTimeout(()=>{this.style.opacity=1},100)})}}class ge extends HTMLElement{constructor(e,t,i=!0){super();if(this._texte=e,this._action=t,this._texte==="Aucune action disponible.")this.classList.add("noActionsElementMenu");if(!i)this.classList.add("disabled")}get _texte(){return this.innerText}set _texte(e){this.innerText=e}set _action(e){this.addEventListener("click",e)}}class mt extends ge{_menuDeroulant=new l.MenuDeroulant;constructor(e,t){super(e,t);let i=document.createElement("span");i.innerText=">",this.appendChild(i),this.appendChild(this._menuDeroulant)}get _texte(){return this.innerText}set _texte(e){this.innerText=e}set _action(e){this.addEventListener("click",e)}ajouterElementMenu(e){this._menuDeroulant.ajouterElementMenu(e)}}class ft extends ge{constructor(e,t,i,n=!0){super(e,t,n);let r=document.createElement("span");r.innerText=i,this.appendChild(r)}get _texte(){return this.innerText}set _texte(e){let t=document.createElement("p");t.textContent=e,this.appendChild(t)}set _action(e){this.addEventListener("click",e)}}var k=[];k.push({route:"/AlgoForge.svg",callback:(e,t)=>{let n=\`
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 791.3 809.2" style="enable-background:new 0 0 791.3 809.2;" xml:space="preserve" fill="#\${e.query.fgColor||"000000"}">
<style type="text/css">
	.st0{stroke-miterlimit:10;}
	.st1{fill:none;}
	.st2{enable-background:new    ;}
</style>
<g id="Marteau">
	<path class="st0" d="M684.8,332l-205.3-45.7c-2-0.4-3.2-2.4-2.8-4.3c0,0,0,0,0-0.1l7.5-30.4c0.5-1.9,2.4-3.1,4.3-2.7l204.6,45.8
		c10.3,2.3,16.8,12.5,14.5,22.8c-0.1,0.3-0.2,0.7-0.3,1l0,0C704.7,328.3,694.7,334.3,684.8,332z"/>
	<path class="st0" d="M456.8,290.4l11.9,2.9c0.3,0.1,0.5-0.1,0.6-0.3c0,0,0,0,0,0l10.8-54.6c0.1-0.3-0.1-0.5-0.4-0.6c0,0,0,0,0,0
		l-11-1.4c-0.2,0-0.5,0.1-0.5,0.4l-11.7,53.2C456.4,290.1,456.5,290.4,456.8,290.4C456.8,290.4,456.8,290.4,456.8,290.4z"/>
	<polyline class="st0" points="452,286.4 429,323 386.3,313 379.6,246 415.4,189.1 458.1,199.1 462,237.8 	"/>
	<line class="st1" x1="516.8" y1="223.9" x2="587.7" y2="202.8"/>
	<path d="M514.7,216.7l71.7-18.4c2.6-0.7,5.2,0.8,5.9,3.4c0.7,2.5-0.7,5-3.1,5.8L519,231.1c-3.9,1.4-8.2-0.7-9.6-4.6
		s0.7-8.2,4.6-9.6C514.2,216.8,514.5,216.7,514.7,216.7L514.7,216.7z"/>
	<line class="st1" x1="493.9" y1="178.3" x2="603.4" y2="66.5"/>
	<path d="M488.5,173.1L600.4,63.6c1.6-1.6,4.2-1.7,5.9-0.1c1.6,1.6,1.7,4.2,0.1,5.9l0,0L499.2,183.6
		C492,190.7,481.6,180.6,488.5,173.1L488.5,173.1z"/>
	<line class="st1" x1="448.5" y1="155.1" x2="468.2" y2="85.9"/>
	<path d="M441.3,153l22.9-68.3c0.8-2.2,3.2-3.3,5.4-2.6c2,0.7,3.2,2.8,2.7,4.9l-16.6,70.1c-0.9,4-4.9,6.6-9,5.7
		c-4-0.9-6.6-4.9-5.7-9C441.1,153.6,441.2,153.3,441.3,153L441.3,153z"/>
	<line class="st1" x1="398.7" y1="151.5" x2="357.5" y2="4.3"/>
	<path d="M391.5,153.6L353.3,5.5c-0.6-2.3,0.9-4.7,3.2-5.2c2.2-0.5,4.5,0.7,5.2,2.9L406,149.5C408.5,159.3,394.5,163.3,391.5,153.6
		L391.5,153.6z"/>
	<line class="st1" x1="360.5" y1="185.1" x2="306.6" y2="131.6"/>
	<path d="M355.2,190.4L304,134.2c-1.4-1.6-1.2-3.9,0.3-5.3c1.4-1.3,3.5-1.3,5,0l56.5,50.9c3.1,2.8,3.4,7.5,0.6,10.6
		c-2.8,3.1-7.5,3.4-10.6,0.6C355.6,190.8,355.4,190.6,355.2,190.4z"/>
	<line class="st1" x1="333.6" y1="227.9" x2="180.2" y2="185.9"/>
	<path d="M331.6,235.2l-152.2-46.3c-1.6-0.4-2.6-2.1-2.1-3.7c0.4-1.6,2.1-2.6,3.7-2.1l154.6,37.7
		C345.3,223.5,341.6,237.7,331.6,235.2L331.6,235.2z"/>
	<line class="st1" x1="333.6" y1="274.6" x2="268.2" y2="292.9"/>
	<path d="M335.6,281.8l-26.3,5.6l-40.2,8.5c-1.7,0.4-3.4-0.7-3.8-2.5c-0.3-1.6,0.6-3.1,2.1-3.7l64.2-22.5c3.9-1.3,8.2,0.8,9.5,4.7
		s-0.8,8.2-4.7,9.5C336.1,281.7,335.9,281.7,335.6,281.8L335.6,281.8z"/>
</g>
<g id="AlgoForge">
	<path d="M68.1,444.7c-1.2-6-2-10-2.5-12.1c-0.2-1.1-0.4-2.3-0.7-3.6s-0.6-2.8-1-4.4H37.4L33,444.7H0l6.5-29.2
		c8.6-37.7,14.1-62.7,16.5-74.9h55.4c4,19.3,11.8,54,23.3,104.1H68.1z M60.4,407.6c-5-24.3-8-42.9-9-55.9h-1.7
		c-1.5,14.7-4.4,33.3-8.9,55.9H60.4z"/>
	<path d="M108,392.7c0-15.3-0.2-32.7-0.6-52.1h32.9c-0.3,15.4-0.5,31.4-0.5,48c0,10.1,0.1,20.1,0.3,30.1c10.6,0,23.2-0.1,37.7-0.3
		l-2.3,26.2h-68.1C107.8,425.3,108,408,108,392.7z"/>
	<path d="M185.6,432.8c-6.6-9.2-9.9-22.6-9.9-40.2c0-18.6,3.7-32.2,11-40.9c7.3-8.6,19.2-12.9,35.7-12.9c11.7,0,20.8,1.5,27.4,4.6
		c6.4,2.9,11.5,8,14.3,14.5c2.9,6.6,4.6,15.5,5.2,26.8l-32.2,3.4c-0.4-7.9-1.7-14.1-4.1-18.5c-2.1-4.2-6.5-6.8-11.2-6.6
		c-3.7-0.1-7.3,0.5-10.9,1.6c-1.1,4.1-1.9,8.2-2.5,12.3c-0.6,4.8-0.8,9.6-0.8,14.4c0,9,1.4,16.5,4.3,22.5c2.9,6,7.1,9,12.6,9
		c3.4,0,6.8-0.5,10.1-1.4c2-0.9,3.8-2.1,5.5-3.5c0.7-0.7,1.4-1.3,2.2-1.8c0-3.3-0.7-5.8-2.2-7.7c-1.5-1.9-3.8-2.8-6.8-2.8h-8v-6.8
		h47.6v12.4c0,12.7,0,23.9,0.1,33.4h-31.4l0.6-23.2h-2c-1,8.5-3.6,14.8-7.9,18.9c-4.3,4.1-10.1,6.2-17.3,6.2
		C201.9,446.6,192.1,442,185.6,432.8z"/>
	<path d="M298,441c-7-3.8-12.5-10.1-15.4-17.5c-3.3-7.9-4.9-18.2-4.9-30.8c0-18.7,3.7-32.4,11.2-40.9c7.4-8.5,19.3-12.8,35.6-12.8
		c11.2,0,20.4,1.9,27.4,5.7c7.1,3.9,12.6,10.1,15.6,17.7c3.3,8,5,18.2,5,30.9c0,18.5-3.8,32-11.5,40.6c-7.7,8.6-19.5,12.9-35.5,12.9
		C314.2,446.6,305,444.7,298,441z M336.7,421.5c2.3-9,3.4-18.3,3.4-27.5c0-9-1.3-16.4-4-22.2c-2.7-5.8-6.8-8.7-12.4-8.7
		c-3.8,0-7.5,0.5-11.1,1.6c-0.9,4-1.7,8.1-2.2,12.2c-0.5,4.9-0.8,9.8-0.7,14.7c0,9,1.4,16.5,4.2,22.4s7,8.9,12.5,8.9
		C330,423,333.4,422.5,336.7,421.5z"/>
	<path d="M778.3,423.3h13v-11.8c0-2,0-14.4,0-15.3c0-1.2-3.4-0.6-4.6-0.1c0.1,3.4-0.7,4.1-2.2,6c-1.3,1.7-2.8,1.2-4.9,1.2h-27.9V388
		l36.4,0.9v-7.1h-62.4c0,7.2-0.1,14.5-0.2,21.5c-0.1,7.7-0.3,14.4-0.5,20.1h48.5c1.5,0,4.8,0.7,5.8-0.6c1.5-1.8,3.5-4.5,4-6.9
		c0.3,1.1,0.5,2.3,0.6,3.5c0.1,1.4,0.1,2.7,0,4.1"/>
	<path d="M786.6,367.4c0.1-3.4-0.7-4.1-2.2-6c-1.3-1.7-2.8-1.2-4.9-1.2h-27.9v15.3l36.4-0.9v7.1h-62.4c0-7.2-0.1-14.4-0.2-21.4
		c-0.1-7.7-0.3-14.4-0.5-20.1h66.3V352c0,2,0,14.4,0,15.3C791.2,368.5,787.8,368,786.6,367.4z"/>
	<g class="st2">
		<path d="M404.1,382.6c0-5.5-0.1-14.4-0.4-26.8c-0.1-7.5-0.2-12.2-0.2-14.3h63.2v19.2h-37.4l0.1,17.6l34.4-0.9v16.8l-34.4-0.9
			c0,8.5,0.1,18.5,0.2,30.1h-26.1C403.9,406.2,404.1,392.5,404.1,382.6z"/>
	</g>
	<g class="st2">
		<path d="M488.1,420.6c-5.6-3-9.7-7.6-12.4-13.8c-2.6-6.2-4-14.3-4-24.3c0-14.8,3-25.5,9-32.2c6-6.7,15.6-10.1,28.7-10.1
			c9.1,0,16.4,1.5,22.1,4.5c5.7,3,9.8,7.6,12.5,13.9c2.7,6.3,4.1,14.4,4.1,24.3c0,14.5-3.1,25.2-9.3,32
			c-6.2,6.8-15.7,10.2-28.7,10.2C501.1,425.1,493.7,423.6,488.1,420.6z M519.3,405.3c1.8-6.9,2.7-14.1,2.7-21.7
			c0-7.1-1.1-12.9-3.2-17.5c-2.1-4.6-5.5-6.9-10-6.9c-3.2,0-6.1,0.4-9,1.3c-0.8,3.2-1.4,6.4-1.7,9.6c-0.4,3.2-0.6,7-0.6,11.6
			c0,7.1,1.1,13,3.4,17.7c2.2,4.7,5.6,7,10.1,7C514.5,406.4,517.2,406,519.3,405.3z"/>
		<path d="M557,382.6c0-13-0.2-26.7-0.5-41.1h39.9c7.9,0,14.4,0.6,19.3,1.9c5,1.3,8.7,3.5,11.3,6.7c2.6,3.2,3.9,7.7,3.9,13.5
			c0,8.2-2.1,14-6.3,17.4c-4.2,3.4-11,5.1-20.3,5.1v1.7c9.1,0.1,15.6,1.5,19.5,4.1c3.9,2.6,6.1,6.8,6.6,12.4c0.1,2,0.6,5.2,1.5,9.6
			c0.9,4.4,1.7,7.6,2.4,9.6h-28c-1.3-8-2.1-14.3-2.3-18.7c-0.4-2.5-0.8-4.4-1.4-5.8c-0.6-1.3-1.6-2.3-2.9-2.8
			c-1.3-0.6-3.3-0.9-5.8-0.9h-11.4v8.9v19.2h-26C556.8,409.1,557,395.5,557,382.6z M601.1,377.6c2-1.5,3.1-4.2,3.1-7.9
			c0-3.9-1-6.6-3.1-8.1c-2-1.5-5.2-2.3-9.4-2.3h-9.6v20.5h9.8C596,379.9,599.1,379.2,601.1,377.6z"/>
		<path d="M646.3,414.2c-5.3-7.3-8-17.8-8-31.7c0-14.7,3-25.4,8.9-32.2c5.9-6.8,15.5-10.2,28.7-10.2c9.4,0,16.8,1.2,22.1,3.6
			c5.3,2.4,9.1,6.2,11.5,11.4c2.4,5.2,3.7,12.2,4.2,21.1l-25.9,2.7c-0.3-6.2-1.4-11.1-3.3-14.6c-1.9-3.5-4.9-5.2-9-5.2
			c-3.2,0-6.1,0.4-8.7,1.3c-0.9,3.4-1.6,6.6-2,9.7c-0.4,3.1-0.6,6.9-0.6,11.3c0,7.1,1.2,13,3.5,17.7s5.7,7.1,10.1,7.1
			c2.7,0,5.4-0.4,8.1-1.1c1.1-0.4,2.6-1.4,4.4-2.8c0.5-0.5,1.1-1,1.8-1.4c0-2.6-0.6-4.6-1.8-6.1c-1.2-1.5-3-2.2-5.5-2.2h-6.4v-5.4
			h38.3v9.8c0,10,0,18.8,0.1,26.3h-25.3l0.5-18.3h-1.6c-0.8,6.7-2.9,11.6-6.4,14.9c-3.5,3.3-8.1,4.9-14,4.9
			C659.5,425.1,651.6,421.4,646.3,414.2z"/>
	</g>
</g>
<g id="Anvil">
	<path d="M513.1,538.2h106.3c38.3-25,93.7-50.8,171.7-76.2v-33.4H371.6v20.5L0,446.2c0,0,7.3,139.8,308.1,146.4
		c0,0,106.9,66.6-82.7,162.5l-0.7,54.2H322c0,0,101-67.3,207.9,0h97.3v-55.6c0,0-147.7-81.1-50.8-180.8h-30c-6.4,0-6.4-10,0-10h40.5
		c5.5-4.8,11.5-9.7,18.2-14.6h-91.9C506.7,548.2,506.7,538.2,513.1,538.2z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/bibliocustom.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=e.query.nom||"Nom",r=\`
	<svg version="1.1" id="BibliothequeAlgo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 415.3" style="enable-background:new 0 0 512 415.3;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;}
</style>
<path class="st0" fill="#\${i}" d="M487.5,36.1v222c0,6.5-5.2,11.6-11.6,11.6H36.1c-6.5,0-11.7-5.2-11.7-11.6v-222c0-6.5,5.2-11.6,11.7-11.6h439.8
	C482.3,24.5,487.5,29.7,487.5,36.1z"/>
<path fill="#\${i}" d="M392.7,294.3h98.5c11.5,0,20.8-9.4,20.8-21.1V21.1C512,9.4,502.7,0,491.2,0H20.8C9.3,0,0,9.4,0,21.1v252.1
	c0,11.7,9.3,21.1,20.8,21.1h112.1c6.8,0,12.3,5.5,12.3,12.3v71.9c0,6.8-5.5,12.3-12.3,12.3H12.7c-6.8,0-12.7,5.5-12.7,12.3
	c0,3.3,1.4,6.4,3.6,8.6c2.2,2.2,5.3,3.6,8.6,3.6h487.5c6.8,0,12.2-5.5,12.2-12.2c0-3.4-1.4-6.4-3.6-8.6c-2.2-2.2-5.3-3.6-8.6-3.6
	H392.7c-6.8,0-12.3-5.5-12.3-12.3v-71.9C380.4,299.8,385.9,294.3,392.7,294.3z M355.9,378.5c0,6.8-5.5,12.3-12.3,12.3H182.1
	c-6.8,0-12.3-5.5-12.3-12.3v-71.9c0-6.8,5.5-12.3,12.3-12.3h161.5c6.8,0,12.3,5.5,12.3,12.3V378.5z M36.1,269.8
	c-6.5,0-11.7-5.2-11.7-11.6V24.6c0-0.1,0-0.1,0.1-0.1h450.7c6.8,0,12.2,5.5,12.2,12.2v220.9c0,6.8-5.5,12.2-12.2,12.2H36.1z"/>
<line class="st0" x1="355.9" y1="390.8" x2="169.7" y2="390.8"/>
<g>
	<path fill="#\${i}" d="M240.6,176c0-10.4,1.1-18.5,3.2-24.5c2.1-6,5.6-11.2,10.4-15.6c4.8-4.4,8.5-8.4,11-12.1c2.5-3.7,3.8-7.7,3.8-12.1
		c0-10.7-4.2-16.1-12.7-16.1c-3.9,0-7.1,1.6-9.5,4.7c-2.4,3.1-3.7,7.3-3.8,12.7h-33c0.1-14.2,4.2-25.2,12.3-33.1
		c8.1-7.9,19.4-11.9,34-11.9c14.5,0,25.8,3.7,33.7,11c8,7.3,12,17.7,12,31.2c0,5.9-1.1,11.2-3.2,16.1c-2.1,4.8-5.6,9.7-10.4,14.8
		l-11.2,11.4c-3.2,3.3-5.4,6.8-6.6,10.3c-1.2,3.5-1.9,8-2.1,13.3H240.6z M236.6,208.3c0-5.2,1.7-9.6,5.2-12.9
		c3.5-3.4,7.8-5.1,13-5.1c5.2,0,9.6,1.7,13,5.1c3.5,3.4,5.2,7.7,5.2,12.9c0,5.2-1.7,9.6-5.2,12.9c-3.5,3.4-7.8,5.1-13,5.1
		c-5.2,0-9.6-1.7-13-5.1C238.3,217.8,236.6,213.5,236.6,208.3z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(r)}});k.push({route:"/BibliothequeAlgo.svg",callback:(e,t)=>{let n=\`
	<?php
header('Content-Type: image/svg+xml');
?>
<svg version="1.1" id="BibliothequeAlgo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 514 514" style="enable-background:new 0 0 514 514;" xml:space="preserve">
<style type="text/css">
    .st0{fill:#\${e.query.fgColor||"000000"};}
</style>
<g>
	<path class="st0" d="M125.2,25.1v38.2c0-5.7-2.8-10.3-6.1-10.3H6.1c-1.7,0-3.2,1.2-4.3,3C0.7,57.9,0,60.5,0,63.3V25.1C0,11.2,28,0,62.6,0
		c17.3,0,33,2.8,44.3,7.3C118.2,11.9,125.2,18.2,125.2,25.1z"/>
	<path class="st0" d="M119.1,73.6H6.1C2.7,73.6,0,69,0,63.3v387.9c0-2.9,0.7-5.4,1.8-7.3c1.1-1.9,2.6-3,4.3-3h113c3,0,5.5,3.7,6,8.5v3.6
		c-0.5,4.8-3,8.5-6,8.5H6.1c-3.4,0-6.1-4.6-6.1-10.3v38.2c0,13.8,28,25,62.6,25c33.3,0,60.7-10.4,62.5-23.6c0.1-0.5,0.1-0.9,0.1-1.4
		V63.3C125.2,69,122.5,73.6,119.1,73.6z M72.9,373.2c-0.1,7-4.7,12.6-10.3,12.6c-5.7,0-10.3-5.6-10.3-12.5V141.1
		c0-6.9,4.6-12.5,10.3-12.5c2.9,0,5.4,1.4,7.3,3.7c1.9,2.3,3,5.4,3,8.8V373.2z"/>
</g>
<g>
	<path class="st0" d="M335.1,64.1c-2.3-4.7-8.5-8.9-17.3-12.1c-11.3-4.1-27-6.7-44.3-6.7c-34.6,0-62.6,10.3-62.6,22.9V103c0-2.8,0.7-5.4,1.8-7.3
		c1.1-1.9,2.6-3,4.3-3h113c3.3,0.1,6,4.7,6,10.3c0,5.7-2.7,10.3-6.1,10.3H217c-3.4,0-6.1-4.6-6.1-10.3v353.7c0-2.9,0.7-5.4,1.8-7.3
		c1.1-1.9,2.6-3,4.3-3h113c3.3,0.1,6,4.7,6,10.3c0,5.7-2.7,10.3-6.1,10.3H217c-3.4,0-6.1-4.6-6.1-10.3v34.8
		c0,12.7,28,22.9,62.6,22.9c34.5,0,62.5-10.2,62.6-22.8V68.2C336.1,66.8,335.8,65.4,335.1,64.1z M283.8,385.7
		c-0.1,6.3-4.7,11.5-10.3,11.5c-5.7,0-10.3-5.1-10.3-11.4V174c0-6.3,4.6-11.4,10.3-11.4c2.8,0,5.4,1.3,7.3,3.3c1.9,2.1,3,4.9,3,8.1
		V385.7z"/>
</g>
<g>
	<path class="st0" d="M198.3,81.1c-7.8-3.9-18.5-6.3-30.3-6.3c-22.8,0-41.3,8.8-42.8,20c-0.1,0.5-0.1,0.9-0.1,1.4V493
		c0,11.8,19.2,21.4,42.9,21.4s42.9-9.6,42.9-21.4v-32.6c0,5.7-1.9,10.3-4.2,10.3h-77.4c-2,0-3.7-3.5-4.1-8.1v-4.4
		c0.2-2,0.6-3.7,1.1-5.1c0.8-1.9,1.8-3,3-3h77.4c2.3,0,4.2,4.6,4.2,10.3V128.9c0,5.7-1.9,10.3-4.2,10.3h-77.4c-2,0-3.7-3.5-4.1-8.1
		v-4.4c0.2-2,0.6-3.7,1.1-5.1c0.8-1.9,1.8-3,3-3h77.4c2.3,0,4.2,4.6,4.2,10.3V96.2C210.9,90.3,206.1,85,198.3,81.1z M157.7,195.4
		c0-5.9,4.6-10.7,10.3-10.7c2.8,0,5.4,1.2,7.3,3.1c1.9,1.9,3,4.6,3,7.6v198.4c0,5.9-4.6,10.7-10.3,10.7s-10.3-4.8-10.3-10.7V195.4z"
		/>
</g>
<g>
	<path class="st0" d="M513.9,479.5l-4.9-38.4c0.6,5.4-1.4,11-4.7,11.5l-112.1,14.2c-2.9,0.4-6.2-6.4-7.4-11l5,39.4c1.7,13.8,30.9,21.4,65.2,17
		C489.3,507.8,515.7,493.2,513.9,479.5z M455.5,19.2C454.1,8,434.8,1,409.4,1c-6.1,0-12.5,0.4-19.1,1.2c-34.3,4.4-60.7,19-58.9,32.8
		l3.7,29.1l1,8l0.1,0.6l48.6,383.1v-0.4c0-4.8,1.9-8.6,4.9-9l112.1-14.2c3.2-0.5,6.4,3.5,7.2,8.9L455.5,19.2z M438.8,384.7
		c-5.6,0.7-10.9-4.3-11.7-11.1l-29.2-230.1c-0.9-6.9,3-13,8.6-13.7c0.3,0,0.7-0.1,1-0.1c5.2,0,9.9,4.8,10.7,11.2L447.4,371
		C448.3,377.9,444.4,384,438.8,384.7z M455.5,68.2l-112,14.2c-3.1,0.4-6.4-4.2-7.2-9.4v0c0-0.3-0.1-0.8-0.2-1.1v-2
		c0.2-4.2,2.2-7.5,4.9-7.9l112-14.2c3.3-0.5,6.6,3.8,7.3,9.4C461,62.8,458.9,67.7,455.5,68.2z"/>
</g>
</svg>

	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/boucle.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=e.query.bgColor||"ffffff",r=\`
	<svg version="1.1" id="Boucle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 550.4 512" style="enable-background:new 0 0 550.4 512;" xml:space="preserve">
<g fill="#\${i}">
	<g>
		<path d="M547.5,319.1c-3.7,6.1-10.3,9.9-17.4,9.9h-79.5c-7.1,0-13.7-3.8-17.4-9.9c-3.7-6.1-3.8-13.7-0.5-20l39.8-74.3
			c0.6-1.2,1.4-2.3,2.2-3.3c3.8-4.6,9.5-7.4,15.7-7.4c3.8,0,7.3,1,10.4,2.9c3.1,1.9,5.7,4.5,7.4,7.8l9.5,17.7l30.3,56.6
			C551.4,305.4,551.1,313,547.5,319.1z"/>
	</g>
	<path d="M502.6,325.2c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512C114.6,512,0,397.4,0,256S114.6,0,256,0
		c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-1,0-2,0-3,0.1C433.7,76.8,351.3,19.9,255.6,19.9
		C125.2,19.9,19.5,125.6,19.5,256s105.7,236.1,236.1,236.1c106.3,0,196.2-70.3,225.8-166.9H502.6z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(r)}});k.push({route:"/conditionSortie.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
		<svg version="1.1" id="ConditionSortie" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 320.3 319.9" style="enable-background:new 0 0 320.3 319.9;" xml:space="preserve">
<style type="text/css">
	.st0{stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#\${i};stroke-width:15;stroke-linecap:round;stroke-miterlimit:10;}
	.st2{stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;}
	.st3{fill:none;stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;}
</style>
<polyline fill="#\${i}" class="st0" points="113.2,179.3 113.2,17.6 207.3,16.9 207.3,179.3 "/>
<path fill="#\${i}" class="st1" d="M59,170.8"/>
<path fill="#\${i}" class="st2" d="M252.5,179.3l-90,67.9c-1.3,1-3.2,1-4.6,0l-90.1-67.9H252.5z"/>
<path fill="#\${i}" class="st3" d="M106.6,120.5"/>
	<path fill="#\${i}" d="M283.4,8c15.9,0,28.9,12.9,28.9,28.9V283c0,15.9-12.9,28.9-28.9,28.9H36.9C20.9,311.9,8,299,8,283V36.9
		C8,20.9,20.9,8,36.9,8H283.4 M283.4,0H36.9C16.5,0,0,16.5,0,36.9V283c0,20.4,16.5,36.9,36.9,36.9h246.6c20.4,0,36.9-16.5,36.9-36.9
		V36.9C320.3,16.5,303.8,0,283.4,0L283.4,0z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/DictionnaireDonnees.svg",callback:(e,t)=>{let n=\`
	<svg version="1.1" id="DictionnaireDonnee" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 448 512" style="enable-background:new 0 0 448 512;" xml:space="preserve">
<path fill="#\${e.query.fgColor||"000000"}" d="M439.1,453.3c-4.2-15.4-4.2-59.3,0-74.7c5.4-4.3,8.9-11.1,8.9-18.6V24c0-13.3-10.7-24-24-24H96C43,0,0,43,0,96v320
	c0,53,43,96,96,96h328c13.3,0,24-10.7,24-24C448.1,476.4,449.7,460.8,439.1,453.3z M147.5,231.8c7.8-6.6,9.3-11,16.3-14.8
	c8.9-2.7,9,1.3,17.2,2.4c5.1-0.3,23.4-19.8,34.8-41.8c-5.1-12.8-13-37.4-21.2-47c-1.1,0.9-2.9,3.3-4.8,8.5
	c-4.3,13.3-25.4,9.8-25.1-4.2c0-8.8,4.3-17.8,13.2-27.7c25.6-29.4,50.5-12.2,65.3,28.8c18.3-25.6,34.5-49.6,65.2-41.6
	c8.9,2.3,12.4,14.3,6.1,21c-0.3,0.4-16.5,17.2-16.9,17.6c-15.9-2.4-25.1,6.8-42,35.2c6.2,15.1,15,43.1,25,51.5
	c3.4-1.7,9.5-16,17.5-14.6c5.5-0.1,10.8,3.5,12.4,8.8c3.6,12.8-6.2,22.1-14.1,29.5c-31.6,29.2-53.7,4.7-67.6-33.5
	c-17,26-34.4,46.2-58.8,46.2c-5.8,0-12.6-1.2-19.1-3.8C143.2,248.9,141.3,237.7,147.5,231.8z M381.4,448H96c-17.7,0-32-14.3-32-32
	c0-17.6,14.4-32,32-32h285.4C379.5,401.1,379.5,430.9,381.4,448z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/erreurs.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
	<svg version="1.1" id="Erreur" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 558.5 558.5" style="enable-background:new 0 0 558.5 558.5;" xml:space="preserve">
<g fill="#\${i}">
	<path d="M554.4,159.5L399,4.1c-2.6-2.6-6.2-4.1-9.9-4.1H169.4c-3.7,0-7.3,1.5-9.9,4.1L4.1,159.5c-2.6,2.6-4.1,6.2-4.1,9.9v219.7
		c0,3.7,1.5,7.3,4.1,10l155.4,155.3c2.6,2.6,6.2,4.1,9.9,4.1h219.7c3.7,0,7.3-1.5,9.9-4.1l155.4-155.3c2.6-2.6,4.1-6.2,4.1-9.9
		V169.4C558.5,165.7,557,162.1,554.4,159.5z M499.4,388.3L388.2,499.4c-8.1,8.1-19,12.6-30.4,12.6H200.6c-11.4,0-22.4-4.5-30.4-12.6
		L59.1,388.3c-8.1-8.1-12.6-19-12.6-30.4V200.6c0-11.4,4.5-22.4,12.6-30.4L170.2,59.1c8.1-8.1,19-12.6,30.4-12.6h157.2
		c11.4,0,22.3,4.5,30.4,12.6l111.2,111.1c8.1,8.1,12.6,19,12.6,30.4v157.2C512,369.3,507.5,380.2,499.4,388.3z"/>
</g>
<g fill="#\${i}">
	<path class="st0" d="M307.8,344.4h-55.6c-5.6,0-10.3-4.3-10.8-9.9l-20.1-235c-0.5-5.9,3.9-11.2,9.8-11.7c0.3,0,0.6,0,0.9,0h94.4
		c6,0,10.8,4.8,10.8,10.8c0,0.3,0,0.6,0,0.9l-18.6,235C318.2,340.1,313.5,344.4,307.8,344.4z"/>
	<path class="st1" d="M259.1,398.7h40.2c11.3,0,20.4,9.1,20.4,20.4v31.2c0,11.3-9.1,20.4-20.4,20.4h-40.2
		c-11.3,0-20.4-9.1-20.4-20.4v-31.2C238.7,407.9,247.9,398.7,259.1,398.7z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/conditionSortie.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
	<svg version="1.1" id="ConditionSortie" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 320.3 319.9" style="enable-background:new 0 0 320.3 319.9;" xml:space="preserve" width="32" height="32">
<g fill="#\${i}">
	<path d="M277.5,26.9c8.6,0,15.6,7,15.6,15.6v234.9c0,8.6-7,15.6-15.6,15.6H42.6c-8.6,0-15.6-7-15.6-15.6V42.5
		c0-8.6,7-15.6,15.6-15.6H277.5 M277.5-0.1H42.5C19-0.1,0,19,0,42.5v234.9c0,23.5,19.1,42.6,42.6,42.6h234.9
		c23.5,0,42.6-19.1,42.6-42.6V42.5C320,19,301-0.1,277.5-0.1L277.5-0.1z"/>
</g>
<polyline fill="#\${i}" points="107.4,184.6 107.4,16.3 213.4,15.6 213.4,184.6 "/>
<path fill="#\${i}" d="M59,197.6"/>
<path fill="#\${i}" d="M264.5,184.6L163,249.3c-1.5,1-3.5,1-5.1,0L56.4,184.6H264.5z"/>
<path fill="#\${i}" d="M106.6,138.6"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/lien.svg",callback:(e,t)=>{let n=\`
<svg version="1.1" id="Lien" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 535.1 535.1" style="enable-background:new 0 0 535.1 535.1;" xml:space="preserve" width="32" height="32">
<path fill="#\${e.query.fgColor||"000000"}" d="M519.4,47.1L47.1,519.4c-8.7,8.7-22.8,8.7-31.4,0h0c-8.7-8.7-8.7-22.8,0-31.4L487.9,15.7c8.7-8.7,22.8-8.7,31.4,0v0
	C528,24.4,528,38.5,519.4,47.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/pointeur.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
	<svg id="Pointeur" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512.7 512.7" style="enable-background:new 0 0 512.7 512.7;" xml:space="preserve">
<style type="text/css">
	.st0{stroke:#000000;stroke-width:0.6643;stroke-miterlimit:10;}
</style>
<g id="Marteau" fill="#\${i}">
	<path class="st0" d="M73.8,491.8l263.3-277.2c2.5-2.6,2.3-6.7-0.5-9.2c-0.1,0-0.1-0.1-0.1-0.1l-44-36.5c-2.8-2.3-7-2-9.5,0.6
		L21,446C7.7,460,8.8,481.4,23.4,494.1c0.5,0.5,1,0.8,1.5,1.2l0,0C39.7,506.8,61.2,505.3,73.8,491.8z"/>
	<path class="st0" d="M376,197.2l-14.9,16.5c-0.3,0.4-0.9,0.4-1.3,0.1c0,0,0,0-0.1,0l-75.1-68.4c-0.3-0.3-0.4-0.8-0.1-1.2
		c0,0,0,0,0.1-0.1l15.2-13.4c0.3-0.3,0.9-0.3,1.2,0l74.8,65.2C376.3,196.3,376.3,196.9,376,197.2L376,197.2z"/>
	<polyline class="st0" points="378.9,186.4 453.2,216 507.3,157.6 445.7,53.4 329.9,7.5 275.8,65.9 311.5,126.1 		"/>
</g>
<g id="Cursor"	fill="#\${i}">
	<path d="M0,10.3C0.3,2.8,7.4-1.9,14.7,0.7c9,3.2,17.9,6.6,26.8,9.9c52.3,19.4,104.6,38.8,156.9,58.2c0.9,0.3,1.9,0.7,2.8,1
		c4.5,1.8,7,5.5,6.9,10.1c-0.1,4.4-2.8,8-7.4,9.5c-3.5,1.2-7.1,2.3-10.7,3.4c-23.5,7.3-47,14.7-70.6,21.9c-2.3,0.7-3.5,2.2-4.2,4.4
		c-8.3,26.6-16.6,53.1-24.9,79.7c-1.9,6-5.9,9-11.6,8.4c-4.4-0.5-7.2-3.2-8.7-7.3c-4.9-13.1-9.7-26.1-14.6-39.2
		c-18-48.5-36.1-96.9-54.1-145.4C0.8,13.8,0.5,12,0,10.3z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/probleme.svg",callback:(e,t)=>{let n=\`
	<svg version="1.1" id="Probleme" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 571.2 328.3" style="enable-background:new 0 0 571.2 328.3;" xml:space="preserve" width="32" height="32">
<path fill="#\${e.query.fgColor||"000000"}" d="M548,0H23.2C10.4,0,0,10.5,0,23.5v281.3c0,13,10.4,23.5,23.2,23.5H548c12.8,0,23.2-10.5,23.2-23.5V23.5
	C571.2,10.5,560.8,0,548,0z M530.9,301H40.3c-7.2,0-13-5.8-13-13V40.3c0-7.2,5.8-13,13-13h490.6c7.2,0,13,5.8,13,13V288
	C543.9,295.2,538.1,301,530.9,301z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/procedure.svg",callback:(e,t)=>{let n=\`
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 571.2 328.8" style="enable-background:new 0 0 571.2 328.8;" xml:space="preserve" width="32" height="32">
     <g id="Procedure" fill="#\${e.query.fgColor||"000000"}">	<path d="M80.6,300.9c0.8,0.3,1.7,0.4,2.6,0.4h404.7c0.9,0,1.8-0.1,2.6-0.4H80.6z"/>
	<path d="M46.4,300.9h-3c-8.9,0-16.2-7.2-16.2-16.2V43.4c0-8.9,7.2-16.2,16.2-16.2h3c1.7,0,3.2,1.4,3.2,3.2v267.3
		C49.6,299.4,48.1,300.9,46.4,300.9z M498.2,288.3c0,6.1-3.4,11.2-8.1,12.6c-0.8,0.3-1.7,0.4-2.6,0.4H82.8c-0.9,0-1.8-0.1-2.6-0.4
		c-4.7-1.4-8.1-6.5-8.1-12.6V40.7c0-7.2,4.8-13,10.7-13h404.7c5.9,0,10.7,5.8,10.7,13V288.3z M543.9,284.7c0,8.9-7.2,16.2-16.2,16.2
		h-3.8c-1.7,0-3.2-1.4-3.2-3.2V30.4c0-1.7,1.4-3.2,3.2-3.2h3.8c8.9,0,16.2,7.2,16.2,16.2V284.7z M548,0H23.2C10.4,0,0,10.5,0,23.5
		v281.7c0,13,10.4,23.5,23.2,23.5H548c12.8,0,23.2-10.5,23.2-23.5V23.5C571.2,10.5,560.8,0,548,0z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/redo.svg",callback:(e,t)=>{let n=\`
	<svg xmlns="http://www.w3.org/2000/svg" fill="#\${e.query.fgColor||"000000"}" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M16.3,15.007a1.5,1.5,0,0,0,2.121,0l4.726-4.725a2.934,2.934,0,0,0,0-4.145L18.416,1.412A1.5,1.5,0,1,0,16.3,3.533L19.532,6.7,5.319,6.7A5.326,5.326,0,0,0,0,12.019V18.7a5.324,5.324,0,0,0,5.318,5.318H18.682a1.5,1.5,0,0,0,0-3H5.318A2.321,2.321,0,0,1,3,18.7V12.019A2.321,2.321,0,0,1,5.319,9.7l14.159,0L16.3,12.886A1.5,1.5,0,0,0,16.3,15.007Z"/></svg>

	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureIterative.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=e.query.bgColor||"ffffff",r=\`
<svg version="1.1" id="StructureIterativeNonBornee" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 550.4 512" style="enable-background:new 0 0 550.4 512;" xml:space="preserve" width="32" height="32">
<g>
	<path fill="#\${i}" d="M546.8,312.6c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512
		C114.6,512,0,397.4,0,256C0,114.6,114.6,0,256,0c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2c-55.9,0-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20h-30.4c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C551.7,295.1,551.4,304.8,546.8,312.6z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(r)}});k.push({route:"/mini/structureIterativeBornee.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=e.query.bgColor||"ffffff",r=\`
	<svg version="1.1" id="StructureIterativeBornee" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 666.3 512" style="enable-background:new 0 0 666.3 512;" xml:space="preserve" width="32" height="32">
<g fill="#\${i}">
	<path d="M546.8,312.6c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20C459.8,442.6,366,512,256,512
		C114.6,512,0,397.4,0,256C0,114.6,114.6,0,256,0c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2c-55.9,0-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20H423c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C551.7,295.1,551.4,304.8,546.8,312.6z"/>

	<path d="M589.5,272.8c0-11.9,1.3-21.3,4-28.1c2.7-6.9,7-12.8,13.1-17.9c6-5,10.6-9.7,13.7-13.9c3.1-4.2,4.7-8.8,4.7-13.9
		c0-12.3-5.3-18.4-15.9-18.4c-4.9,0-8.8,1.8-11.8,5.4c-3,3.6-4.6,8.4-4.8,14.5h-41.3c0.2-16.3,5.3-28.9,15.4-38
		c10.1-9.1,24.2-13.6,42.5-13.6c18.1,0,32.2,4.2,42.2,12.6c10,8.4,15,20.3,15,35.8c0,6.8-1.3,12.9-4,18.4c-2.7,5.5-7,11.2-12.9,17
		l-14,13.1c-4,3.8-6.8,7.8-8.3,11.8c-1.5,4-2.4,9.1-2.6,15.3H589.5z M584.5,309.9c0-6,2.2-11,6.5-14.8c4.4-3.9,9.8-5.8,16.3-5.8
		c6.5,0,11.9,1.9,16.3,5.8c4.4,3.9,6.5,8.8,6.5,14.8c0,6-2.2,11-6.5,14.8c-4.4,3.9-9.8,5.8-16.3,5.8c-6.5,0-11.9-1.9-16.3-5.8
		C586.7,320.9,584.5,315.9,584.5,309.9z"/>
</g>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(r)}});k.push({route:"/mini/structureSi.svg",callback:(e,t)=>{let n=\`
	<svg version="1.1" id="StructureSi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 571.2 328.3" style="enable-background:new 0 0 571.2 328.3;" xml:space="preserve" width="32" height="32">
  <path fill="#\${e.query.fgColor||"000000"}" d="M567.7,149.7L495.6,7.2c-2.2-4.4-6.8-7.2-11.7-7.2H87.4c-5,0-9.5,2.8-11.7,7.2L3.4,149.7c-4.6,9.1-4.6,19.8,0,28.9
    l72.2,142.6c2.2,4.4,6.8,7.1,11.7,7.1h396.5c5,0,9.5-2.8,11.7-7.1l72.2-142.6C572.3,169.5,572.3,158.8,567.7,149.7z M271.9,288.9
    c0,7.1-5.9,12.9-13.1,12.9h-163v0L29,169.9c-1.8-3.6-1.8-7.9,0-11.6L95.8,26.5v0h163c7.2,0,13.1,5.8,13.1,12.9V288.9z M542.2,169.9
    l-66.8,131.9v0h-163c-7.2,0-13.1-5.8-13.1-12.9V39.4c0-7.1,5.9-12.9,13.1-12.9h163v0l66.8,131.9C544,162,544,166.3,542.2,169.9z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureSwitch.svg",callback:(e,t)=>{let n=\`
	<svg version="1.1" id="StructureSwitch" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 571.2 328.3" style="enable-background:new 0 0 571.2 328.3;" xml:space="preserve" width="32" height="32">
<style type="text/css">
	.st0{stroke:#000000;stroke-width:27;stroke-miterlimit:10;}
</style>
<path fill="#\${e.query.fgColor||"000000"}" d="M487.8,0H83.4c-2.1,0-4.1,1.2-5,3.1L2.6,153.3c-3.4,6.8-3.4,14.9,0,21.7l75.8,150.2c1,1.9,2.9,3.1,5,3.1h404.3
	c2.1,0,4.1-1.2,5-3.1L568.6,175c3.4-6.8,3.4-14.9,0-21.7L492.8,3.1C491.8,1.2,489.9,0,487.8,0z M96.4,26.5L96.4,26.5l378.3,0v0
	l58.6,116.1c1.9,3.7-0.9,8.1-5,8.1H42.9c-4.2,0-6.9-4.4-5-8.1L96.4,26.5z M272,296.3c0,3.1-2.5,5.6-5.6,5.6H96.4v0L37.8,185.7
	c-1.9-3.7,0.9-8.1,5-8.1h223.4c3.1,0,5.6,2.5,5.6,5.6V296.3z M474.7,301.8L474.7,301.8l-169.9,0c-3.1,0-5.6-2.5-5.6-5.6V183.2
	c0-3.1,2.5-5.6,5.6-5.6h223.4c4.2,0,6.9,4.4,5,8.1L474.7,301.8z"/>
<path class="st0" d="M631.6,244.9"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/undo.svg",callback:(e,t)=>{let n=\`
	<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path fill="#\${e.query.fgColor||"000000"}" d="M7.7,15.007a1.5,1.5,0,0,1-2.121,0L.858,10.282a2.932,2.932,0,0,1,0-4.145L5.583,1.412A1.5,1.5,0,0,1,7.7,3.533L4.467,6.7l14.213,0A5.325,5.325,0,0,1,24,12.019V18.7a5.323,5.323,0,0,1-5.318,5.318H5.318a1.5,1.5,0,1,1,0-3H18.681A2.321,2.321,0,0,0,21,18.7V12.019A2.321,2.321,0,0,0,18.68,9.7L4.522,9.7,7.7,12.886A1.5,1.5,0,0,1,7.7,15.007Z"/></svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/conditionSortieCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
	<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 508.2 508.1" style="enable-background:new 0 0 508.2 508.1;" xml:space="preserve" width="64px" height="32px">
<style type="text/css">
	.st0{stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#\${i};stroke-width:15;stroke-linecap:round;stroke-miterlimit:10;}
	.st2{stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;}
	.st3{fill:none;stroke:#\${i};stroke-width:27;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;}
</style>
<g>
	<path fill="#\${i}" d="M465.6,215c8.6,0,15.6,7,15.6,15.6v234.9c0,8.6-7,15.6-15.6,15.6H230.7c-8.6,0-15.6-7-15.6-15.6V230.6
		c0-8.6,7-15.6,15.6-15.6H465.6 M465.6,188h-235c-23.5,0-42.5,19.1-42.5,42.6v234.9c0,23.5,19.1,42.6,42.6,42.6h234.9
		c23.5,0,42.6-19.1,42.6-42.6V230.6C508.1,207.1,489.1,188,465.6,188L465.6,188z"/>
</g>
<polyline fill="#\${i}" class="st0" points="295.5,372.7 295.5,204.4 401.5,203.7 401.5,372.7 "/>
<path fill="#\${i}" class="st1" d="M247.1,385.7"/>
<path fill="#\${i}" class="st2" d="M452.6,372.7l-101.5,64.7c-1.5,1-3.5,1-5.1,0l-101.5-64.7H452.6z"/>
<path fill="#\${i}" class="st3" d="M294.7,326.7"/>
<path fill="#\${i}" d="M208.1,104c0,3.6-2.9,6.5-6.4,6.5l0,0h-91.1v91.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.4l0,0v-91.1H6.5
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6s2.8-1.9,4.6-1.9h91.1V6.5c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	s1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.5,208.2,100.4,208.1,104z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/lienCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
	<svg version="1.1" id="LienCursor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 535.1 535.1" style="enable-background:new 0 0 535.1 535.1;" xml:space="preserve" width="64px" height="32px"> 
<path fill="#\${i}" d="M519.4,47.1L47.1,519.4c-8.7,8.7-22.8,8.7-31.4,0l0,0c-8.7-8.7-8.7-22.8,0-31.4L487.9,15.7c8.7-8.7,22.8-8.7,31.4,0l0,0
	C528,24.4,528,38.5,519.4,47.1z"/>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/problemeCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="ProblemeCursor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 779.3 536.4" style="enable-background:new 0 0 779.3 536.4;" xml:space="preserve" width="64px" height="32px">
<path fill="#\${i}" d="M756.1,208.1H231.3c-12.8,0-23.2,10.5-23.2,23.5v281.3c0,13,10.4,23.5,23.2,23.5h524.8c12.8,0,23.2-10.5,23.2-23.5V231.6
C779.3,218.6,768.9,208.1,756.1,208.1z M739,509.1H248.4c-7.2,0-13-5.8-13-13V248.4c0-7.2,5.8-13,13-13H739c7.2,0,13,5.8,13,13
v247.7C752,503.3,746.2,509.1,739,509.1z"/>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/procedureCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="ProcedureCursor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 779.3 536.8" style="enable-background:new 0 0 779.3 536.8;" xml:space="preserve" width="64px" height="32px">
<g fill="#\${i}" id="Calque_1_00000034057056868085137710000009322341118287881886_">
	<path d="M288.7,509c0.8,0.3,1.7,0.4,2.6,0.4H696c0.9,0,1.8-0.1,2.6-0.4H288.7z"/>
	<path d="M254.5,509h-3c-8.9,0-16.2-7.2-16.2-16.2V251.5c0-8.9,7.2-16.2,16.2-16.2h3c1.7,0,3.2,1.4,3.2,3.2v267.3
		C257.7,507.5,256.2,509,254.5,509z M706.3,496.4c0,6.1-3.4,11.2-8.1,12.6c-0.8,0.3-1.7,0.4-2.6,0.4H290.9c-0.9,0-1.8-0.1-2.6-0.4
		c-4.7-1.4-8.1-6.5-8.1-12.6V248.8c0-7.2,4.8-13,10.7-13h404.7c5.9,0,10.7,5.8,10.7,13V496.4z M752,492.8c0,8.9-7.2,16.2-16.2,16.2
		H732c-1.7,0-3.2-1.4-3.2-3.2V238.5c0-1.7,1.4-3.2,3.2-3.2h3.8c8.9,0,16.2,7.2,16.2,16.2V492.8z M756.1,208.1H231.3
		c-12.8,0-23.2,10.5-23.2,23.5v281.7c0,13,10.4,23.5,23.2,23.5h524.8c12.8,0,23.2-10.5,23.2-23.5V231.6
		C779.3,218.6,768.9,208.1,756.1,208.1z"/>
</g>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureIterativeBorneeCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 844.4 690.1" style="enable-background:new 0 0 844.4 690.1;" xml:space="preserve" width="64px" height="40px">

	<path fill="#\${i}" d="M724.9,490.7c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20c-36.3,97.4-130.1,166.8-240.1,166.8
		c-141.4,0-256-114.6-256-256s114.6-256,256-256c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2s-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20h-30.4c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C729.8,473.2,729.5,482.9,724.9,490.7z"/>
	<path fill="#\${i}" d="M767.6,450.9c0-11.9,1.3-21.3,4-28.1c2.7-6.9,7-12.8,13.1-17.9c6-5,10.6-9.7,13.7-13.9c3.1-4.2,4.7-8.8,4.7-13.9
		c0-12.3-5.3-18.4-15.9-18.4c-4.9,0-8.8,1.8-11.8,5.4c-3,3.6-4.6,8.4-4.8,14.5h-41.3c0.2-16.3,5.3-28.9,15.4-38
		c10.1-9.1,24.2-13.6,42.5-13.6c18.1,0,32.2,4.2,42.2,12.6s15,20.3,15,35.8c0,6.8-1.3,12.9-4,18.4s-7,11.2-12.9,17l-14,13.1
		c-4,3.8-6.8,7.8-8.3,11.8s-2.4,9.1-2.6,15.3h-35V450.9z M762.6,488c0-6,2.2-11,6.5-14.8c4.4-3.9,9.8-5.8,16.3-5.8
		s11.9,1.9,16.3,5.8c4.4,3.9,6.5,8.8,6.5,14.8s-2.2,11-6.5,14.8c-4.4,3.9-9.8,5.8-16.3,5.8s-11.9-1.9-16.3-5.8
		C764.8,499,762.6,494,762.6,488z"/>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureIterativeCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 708.6 670.1" style="enable-background:new 0 0 708.6 670.1;" xml:space="preserve" width="64px" height="40px">

	<path fill="#\${i}" d="M704.9,470.7c-4.7,7.8-13.1,12.6-22.2,12.6h-22c-1.9,6.8-4.1,13.5-6.5,20c-36.3,97.4-130.1,166.8-240.1,166.8
		c-141.4,0-256-114.6-256-256s114.6-256,256-256c108.8,0,201.8,67.9,238.8,163.6c-6.5-3.3-13.7-5.1-21-5.1c-10.2,0-20,3.4-28,9.5
		c-10.2-22-24.3-42.3-42-59.9c-39.5-39.5-92-61.2-147.9-61.2s-108.4,21.8-147.9,61.2s-61.2,92-61.2,147.9
		c0,55.8,21.8,108.4,61.2,147.9s92,61.2,147.9,61.2c55.8,0,108.4-21.8,147.9-61.2c17.3-17.3,31.2-37.1,41.4-58.7
		c3.1-6.5,5.8-13.2,8.2-20h-30.4c-9.1,0-17.5-4.8-22.2-12.6c-4.7-7.8-4.9-17.5-0.6-25.5l50.8-94.9c0.8-1.5,1.8-2.9,2.8-4.2
		c4.9-5.9,12.2-9.4,20-9.4c4.8,0,9.3,1.3,13.3,3.7s7.3,5.8,9.5,10l12.1,22.6l38.7,72.3C709.8,453.2,709.5,462.9,704.9,470.7z"/>

<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureSiCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 779.3 536.4" style="enable-background:new 0 0 779.3 536.4;" xml:space="preserve" width="64px" height="32px">
<path fill="#\${i}" d="M775.9,357.8l-72.1-142.5c-2.2-4.4-6.8-7.2-11.7-7.2H295.6c-5,0-9.5,2.8-11.7,7.2l-72.3,142.5c-4.6,9.1-4.6,19.8,0,28.9
	l72.2,142.6c2.2,4.4,6.8,7.1,11.7,7.1H692c5,0,9.5-2.8,11.7-7.1l72.2-142.6C780.5,377.6,780.5,366.9,775.9,357.8z M480.1,497
	c0,7.1-5.9,12.9-13.1,12.9H304l0,0L237.2,378c-1.8-3.6-1.8-7.9,0-11.6L304,234.6l0,0h163c7.2,0,13.1,5.8,13.1,12.9V497z M750.4,378
	l-66.8,131.9l0,0h-163c-7.2,0-13.1-5.8-13.1-12.9V247.5c0-7.1,5.9-12.9,13.1-12.9h163l0,0l66.8,131.9
	C752.2,370.1,752.2,374.4,750.4,378z"/>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});k.push({route:"/mini/structureSwitchCursor.svg",callback:(e,t)=>{let i=e.query.fgColor||"000000",n=\`
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 839.7 536.4" style="enable-background:new 0 0 839.7 536.4;" xml:space="preserve" width="64px" height="32px">
<style type="text/css">
	.st0{stroke:#000000;stroke-width:27;stroke-miterlimit:10;}
</style>
<path fill="#\${i}" d="M695.9,208.1H291.5c-2.1,0-4.1,1.2-5,3.1l-75.8,150.2c-3.4,6.8-3.4,14.9,0,21.7l75.8,150.2c1,1.9,2.9,3.1,5,3.1h404.3
	c2.1,0,4.1-1.2,5-3.1l75.9-150.2c3.4-6.8,3.4-14.9,0-21.7l-75.8-150.2C699.9,209.3,698,208.1,695.9,208.1z M304.5,234.6L304.5,234.6
	h378.3l0,0l58.6,116.1c1.9,3.7-0.9,8.1-5,8.1H251c-4.2,0-6.9-4.4-5-8.1L304.5,234.6z M480.1,504.4c0,3.1-2.5,5.6-5.6,5.6h-170l0,0
	l-58.6-116.2c-1.9-3.7,0.9-8.1,5-8.1h223.4c3.1,0,5.6,2.5,5.6,5.6v113.1H480.1z M682.8,509.9L682.8,509.9H512.9
	c-3.1,0-5.6-2.5-5.6-5.6v-113c0-3.1,2.5-5.6,5.6-5.6h223.4c4.2,0,6.9,4.4,5,8.1L682.8,509.9z"/>
<path class="st0" fill="#\${i}" d="M839.7,453"/>
<path fill="#\${i}" d="M208.1,104.1c0,3.6-2.9,6.5-6.4,6.5h0l-91.1,0v91.1c0,3.6-2.9,6.5-6.5,6.5c-3.6,0-6.5-2.9-6.5-6.4v0l0-91.1l-91.1,0
	c-3.6,0-6.5-2.9-6.5-6.5c0-1.8,0.7-3.4,1.9-4.6c1.2-1.2,2.8-1.9,4.6-1.9h91.1l0-91.1c0-3.6,2.9-6.5,6.5-6.5c1.8,0,3.4,0.7,4.6,1.9
	c1.2,1.2,1.9,2.8,1.9,4.6v91.1h91.1C205.2,97.6,208.2,100.5,208.1,104.1z"/>
</svg>
	\`;t.setHeader("Content-Type","image/svg+xml"),t.send(n)}});var Yi=k;function He(e){let t=new URL(e,"https://algoforge.invalid/"),i=t.pathname.replace(/^\\/assetsDynamiques/,""),n=Yi.find((o)=>o.route===i);if(!n)return e;let r="";if(n.callback({query:Object.fromEntries(t.searchParams)},{setHeader:()=>{return},send:(o)=>{r=String(o)}}),!r)return e;return\`data:image/svg+xml,\${encodeURIComponent(r)}\`}class gt extends HTMLOptionElement{nom;bgColor;bgColorSecondary;borderColor;fgColor;fgColorSemiTransparent;fgColorTransparent;fgColorForward;goodColor;goodColorTransparent;errorColor;warningColor;titleColor;fontFamily;glowColor;baseGlowColor;_logoAlgoForge=document.querySelector("#logoAlgoForge");_editeur=b;borderColor2;bgColorTertiary;fgColorHover;fgColorDisabled;constructor(e,t,i,n,r,o,s,c,u,p,h,a,m,f,v,g,y,N,te,Te){super();this.nom=e,this.bgColor=t,this.bgColorSecondary=i,this.borderColor=n,this.fgColor=r,this.fgColorSemiTransparent=o,this.fgColorTransparent=s,this.fgColorForward=c,this.goodColor=u,this.goodColorTransparent=p,this.errorColor=h,this.warningColor=a,this.titleColor=m,this.fontFamily=f,this.glowColor=v||"#00000000",this.borderColor2=g,this.bgColorTertiary=y,this.fgColorHover=N,this.fgColorDisabled=te,this.baseGlowColor=Te,this.innerText=this.nom}appliquer(){if(this.nom==="VS Code")this.#t();document.body.style.setProperty("--bgColor",this.bgColor),document.body.style.setProperty("--bgColorSecondary",this.bgColorSecondary),document.body.style.setProperty("--borderColor",this.borderColor),document.body.style.setProperty("--fgColor",this.fgColor),document.body.style.setProperty("--fgColorSemiTransparent",this.fgColorSemiTransparent),document.body.style.setProperty("--fgColorTransparent",this.fgColorTransparent),document.body.style.setProperty("--fgColorForward",this.fgColorForward),document.body.style.setProperty("--goodColor",this.goodColor),document.body.style.setProperty("--goodColorTransparent",this.goodColorTransparent),document.body.style.setProperty("--errorColor",this.errorColor),document.body.style.setProperty("--warningColor",this.warningColor),document.body.style.setProperty("--titleColor",this.titleColor),document.body.style.setProperty("--glowColor",this.glowColor),document.body.style.setProperty("--baseGlowColor",this.baseGlowColor),document.body.style.setProperty("--borderColor2",this.borderColor2),document.body.style.setProperty("--bgColorTertiary",this.bgColorTertiary),document.body.style.setProperty("--fgColorHover",this.fgColorHover),document.body.style.setProperty("--fgColorDisabled",this.fgColorDisabled),document.body.style.fontFamily=this.fontFamily;let e=He,t=(s)=>'url("'+e(s)+'")',i=this.fgColor.substring(1),n=this.bgColor.substring(1),r=document.body.style;r.setProperty("--assetBibliotheque",t(\`assetsDynamiques/BibliothequeAlgo.svg?fgColor=\${i}\`)),r.setProperty("--assetBoucle",t(\`assetsDynamiques/boucle.svg?fgColor=\${i}&bgColor=\${n}\`)),r.setProperty("--assetConditionSortie",t(\`assetsDynamiques/conditionSortie.svg?fgColor=\${i}\`)),r.setProperty("--assetDictionnaire",t(\`assetsDynamiques/DictionnaireDonnees.svg?fgColor=\${i}\`)),r.setProperty("--assetErreurs",t(\`assetsDynamiques/erreurs.svg?fgColor=\${i}\`));let o=(s,c)=>{let u=document.querySelector(s);if(u)u.dataset.assetUrl=c};if(o("#dico_btn > svg",\`assetsDynamiques/DictionnaireDonnees.svg?fgColor=\${i}\`),!le)o("#biblio_btn > svg",\`assetsDynamiques/BibliothequeAlgo.svg?fgColor=\${i}\`);o("#boutonPointeur",\`assetsDynamiques/mini/pointeur.svg?fgColor=\${i}&bgColor=\${n}\`),o("#boutonProbleme",\`assetsDynamiques/mini/probleme.svg?fgColor=\${i}\`),o("#boutonProcedure",\`assetsDynamiques/mini/procedure.svg?fgColor=\${i}\`),o("#boutonStructureSi",\`assetsDynamiques/mini/structureSi.svg?fgColor=\${i}\`),o("#boutonStructureSwitch",\`assetsDynamiques/mini/structureSwitch.svg?fgColor=\${i}\`),o("#boutonStructureIterative",\`assetsDynamiques/mini/structureIterative.svg?fgColor=\${i}&bgColor=\${n}\`),o("#boutonConditionSortie",\`assetsDynamiques/mini/conditionSortie.svg?fgColor=\${i}\`),o("#boutonLien",\`assetsDynamiques/mini/lien.svg?fgColor=\${i}\`),o("#boutonStructureIterativeBornee",\`assetsDynamiques/mini/structureIterativeBornee.svg?fgColor=\${i}&bgColor=\${n}\`),o("#boutonUndo",\`assetsDynamiques/mini/undo.svg?fgColor=\${i}\`),o("#boutonRedo",\`assetsDynamiques/mini/redo.svg?fgColor=\${i}\`),this._logoAlgoForge.src=e(\`assetsDynamiques/\${le?"AlgoForgeExamEdition":"AlgoForge"}.svg?fgColor=\${i}\`),this._editeur._bibliotheque.update(),this._editeur.setCookie("theme",this.nom,365),this._editeur.selectTool(this._editeur._currentTool)}#t(){let e=(t,i)=>Jn(getComputedStyle(document.documentElement).getPropertyValue(t),i);this.bgColor=e("--vscode-editor-background","#1e1e1e"),this.bgColorSecondary=e("--vscode-sideBar-background",this.bgColor),this.borderColor=e("--vscode-panel-border","#3c3c3c"),this.fgColor=e("--vscode-editor-foreground","#cccccc"),this.fgColorSemiTransparent=\`\${this.fgColor}55\`,this.fgColorTransparent=\`\${this.fgColor}11\`,this.fgColorForward=e("--vscode-descriptionForeground",this.fgColor),this.goodColor=e("--vscode-testing-iconPassed","#89d185"),this.goodColorTransparent=\`\${this.goodColor}99\`,this.errorColor=e("--vscode-editorError-foreground","#f48771"),this.warningColor=e("--vscode-editorWarning-foreground","#cca700"),this.titleColor=e("--vscode-textLink-foreground","#3794ff"),this.borderColor2=e("--vscode-focusBorder",this.borderColor),this.bgColorTertiary=e("--vscode-editorWidget-background",this.bgColorSecondary),this.fgColorHover=e("--vscode-list-hoverForeground",this.fgColor),this.fgColorDisabled=e("--vscode-disabledForeground",this.fgColorForward),this.fontFamily="var(--vscode-font-family, sans-serif)"}}function Jn(e,t){let i=e.trim(),n=/^#([0-9a-f]{3})$/i.exec(i);if(n)return\`#\${[...n[1]].map((o)=>o+o).join("")}\`;if(/^#[0-9a-f]{6}$/i.test(i))return i;let r=/^rgba?\\(\\s*(\\d+)\\s*[, ]\\s*(\\d+)\\s*[, ]\\s*(\\d+)/i.exec(i);if(!r)return t;return\`#\${r.slice(1,4).map((o)=>Math.min(255,Number(o)).toString(16).padStart(2,"0")).join("")}\`}class vt extends HTMLElement{_editeur=b;__zoom=parseFloat(this._editeur.getCookie("zoom"))?parseFloat(this._editeur.getCookie("zoom")):1;buttonZoomOut;display;buttonZoomIn;constructor(){super();document.body.style.setProperty("--sizeModifier",this._zoom),this.buttonZoomOut=document.createElement("button"),this.buttonZoomOut.className="zoomOut",this.buttonZoomOut.innerHTML="-",this.buttonZoomOut.addEventListener("click",(e)=>{this.zoomOut()}),this.appendChild(this.buttonZoomOut),this.display=document.createElement("div"),this.display.className="zoomDisplay",this.display.innerText=\`\${Math.trunc(this._zoom*100)}%\`,this.display.contentEditable="true",this.display.addEventListener("keydown",(e)=>{if(e.key==="Enter")e.preventDefault(),this.display.blur();if(!/[\\d.]/.test(e.key)&&e.key!=="Backspace"&&e.key!=="Delete")e.preventDefault()}),this.display.addEventListener("input",(e)=>{this._zoom=parseFloat(this.display.innerText)/100,this._editeur.setCookie("zoom",this._zoom,365),document.body.style.setProperty("--sizeModifier",this._zoom)}),this.display.addEventListener("focusout",(e)=>{if(this._zoom<0.1)this._zoom=0.1;if(this._zoom>5)this._zoom=5;document.body.style.setProperty("--sizeModifier",this._zoom),this._editeur.setCookie("zoom",this._zoom,365),this.display.innerText=\`\${Math.trunc(this._zoom*100)}%\`}),this.appendChild(this.display),this.buttonZoomIn=document.createElement("button"),this.buttonZoomIn.className="zoomIn",this.buttonZoomIn.innerHTML="+",this.buttonZoomIn.addEventListener("click",(e)=>{this.zoomIn()}),this.appendChild(this.buttonZoomIn)}get _zoom(){return this.__zoom}set _zoom(e){this.__zoom=e}zoomIn(e=0.1,t=!0){if(this._zoom+=e,t)this._zoom=Math.round(this._zoom*10)/10;if(this._zoom>5)this._zoom=5;document.body.style.setProperty("--sizeModifier",this._zoom),this.display.innerText=\`\${Math.trunc(this._zoom*100)}%\`,this._editeur.setCookie("zoom",this._zoom,365)}zoomOut(e=0.1,t=!0){if(this._zoom-=e,t)this._zoom=Math.round(this._zoom*10)/10;if(this._zoom<0.1)this._zoom=0.1;document.body.style.setProperty("--sizeModifier",this._zoom),this.display.innerText=\`\${Math.trunc(this._zoom*100)}%\`,this._editeur.setCookie("zoom",this._zoom,365)}}class bt extends HTMLElement{_x;_y;_selection;_editeur=b;_target;constructor(e,t,i,n){super();let r=document.querySelectorAll("menu-contextuel");for(let o=0;o<r.length;o++)r[o].remove();if(e=e/this._editeur._indicateurZoom._zoom,t=t/this._editeur._indicateurZoom._zoom,this._x=e,this._y=t,e>90/this._editeur._indicateurZoom._zoom)e=90/this._editeur._indicateurZoom._zoom;this.style.left=\`calc(var(--sizeModifier) * \${e}vw)\`,this.style.top=\`calc(var(--sizeModifier) * \${t}vw)\`,this.style.opacity=0,this._selection=i,this._target=n,this.genererOptions(),setTimeout(()=>{let o=this.getBoundingClientRect();if(d)console.log(o);if(o.top+o.height>window.innerHeight)this.style.top=\`calc(var(--sizeModifier) * \${t}vw - \${o.height}px)\`;this.style.opacity=1})}genererOptions(){if(this._target instanceof HTMLDivElement&&this._target.classList.contains("algorithmeBibliotheque")){if(this._target.estCustom){this.appendChild(new l.ElementMenu("Supprimer de la bibliothèque",()=>{if(d)console.log("Supprimer de la bibliothèque");this._target.supprimer(),this.remove()}));return}this.appendChild(new l.ElementMenu("Aucune action disponible.",()=>{}));return}if(this.appendChild(new l.ElementMenuKeyboardTip("Annuler",()=>{if(d)console.log("Annuler");this._editeur.undo()},\`\${this._editeur._toucheMeta}Z\`)),this.appendChild(new l.ElementMenuKeyboardTip("Rétablir",()=>{if(d)console.log("Rétablir");this._editeur.redo()},\`\${this._editeur._toucheMeta}Y\`)),this._selection.nbElementsSelectionnes>=1)this.appendChild(new l.ElementMenuKeyboardTip("Supprimer",()=>{if(d)console.log("Supprimer l'élément");this._selection.supprimerTout(),this.remove()},"Suppr")),this.appendChild(new l.ElementMenuKeyboardTip("Couper",()=>{if(d)console.log("Couper");this._editeur.cut()},\`\${this._editeur._toucheMeta}X\`)),this.appendChild(new l.ElementMenuKeyboardTip("Copier",()=>{if(d)console.log("Copier");this._editeur.copy()},\`\${this._editeur._toucheMeta}C\`));if(this.appendChild(new l.ElementMenuKeyboardTip("Coller",()=>{if(d)console.log("Coller");this._editeur._modaleNoPaste.ouvrir()},\`\${this._editeur._toucheMeta}V\`)),this._selection.nbElementsSelectionnes==0){let e=new l.ElementMenuCompose("Ajouter un élément",()=>{if(d)console.log("Ajouter un élément")});this.appendChild(e),e.ajouterElementMenu(new l.ElementMenu("Problème",()=>{if(d)console.log("Ajouter un Problème");this._editeur._planActif.ajouterElement(l.Probleme,this._x,this._y,!0),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Procédure",()=>{if(d)console.log("Ajouter une Procédure");this._editeur._planActif.ajouterElement(l.Procedure,this._x,this._y,!0),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Structure 'SI'",()=>{if(d)console.log("Ajouter une Structure 'SI'");this._editeur._planActif.ajouterElement(l.StructureSi,this._x,this._y,!0),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Structure 'SWITCH'",()=>{if(d)console.log("Ajouter une Structure 'SWITCH'");this._editeur._planActif.ajouterElement(l.StructureSwitch,this._x,this._y,!0),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Structure itérative non bornée",()=>{if(d)console.log("Ajouter une Structure itérative non bornée");this._editeur._planActif.ajouterElement(l.StructureIterativeNonBornee,this._x,this._y,!0),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Structure itérative bornée",()=>{if(d)console.log("Ajouter une Structure itérative bornée");this._editeur._planActif.ajouterElement(l.StructureIterativeBornee,this._x,this._y,!0).inviteBornes(),this._editeur.querySelector("invite-bornes-pour-si > input").focus(),this.remove()})),e.ajouterElementMenu(new l.ElementMenu("Instruction d'arrêt",()=>{if(d)console.log("Ajouter une Condition de sortie");this._editeur._planActif.ajouterElement(l.ConditionSortie,this._x,this._y,!0),this.remove()}))}else if(this._selection.nbElementsSelectionnes==1){let e=this._selection._listeElementsSelectionnes[0]._element;if(d)console.log(e);for(let t of e.genererOptionsContextuelles(this._editeur))this.appendChild(t)}if(this._selection.nbElementsSelectionnes>=1){let e=new l.ElementMenuCompose("Exporter la sélection",()=>{if(d)console.log("Exporter la sélection")});this.appendChild(e);let t=document.createElement("h3");t.innerText="Tout",e.ajouterElementMenu(t),e.ajouterElementMenu(new l.ElementMenu(".af",()=>{if(d)console.log("Exporter en .af");this._editeur.exporterJSON(Pe(JSON.parse(this._editeur.copy(!1))))}));let i=document.createElement("h3");i.innerText="Algorithme",e.ajouterElementMenu(i),e.ajouterElementMenu(new l.ElementMenu(".jpg",()=>{if(d)console.log("Exporter en .jpg");this._editeur.exporterJPG(this._editeur.copy(!1),!0,!0)})),e.ajouterElementMenu(new l.ElementMenu(".png",()=>{if(d)console.log("Exporter en .png");this._editeur.exporterPNG(this._editeur.copy(!1),!0,!0)})),e.ajouterElementMenu(new l.ElementMenu(".svg",()=>{if(d)console.log("Exporter en .svg");this._editeur.exporterSVG(this._editeur.copy(!1),!0,!0)}));let n=document.createElement("h3");n.innerText="Dictionnaire",e.ajouterElementMenu(n),e.ajouterElementMenu(new l.ElementMenu(".csv",()=>{if(d)console.log("Exporter en .csv");let r=[];for(let o of this._editeur._planActif.children)if(!this._selection.estSelectionne(o)&&o!=this&&o instanceof l.ElementGraphique)r.push(o),o.remove();this._editeur._planActif.effectuerDictionnaireDesDonnee(),this._editeur._planActif.leDictionnaireDesDonnees.exporter("csv"),setTimeout(()=>{for(let o of r)this._editeur._planActif.appendChild(o)},1000)})),e.ajouterElementMenu(new l.ElementMenu(".xls",()=>{if(d)console.log("Exporter en .xls");let r=[];for(let o of this._editeur._planActif.children)if(!this._selection.estSelectionne(o)&&o!=this&&o instanceof l.ElementGraphique)r.push(o),o.remove();this._editeur._planActif.effectuerDictionnaireDesDonnee(),this._editeur._planActif.leDictionnaireDesDonnees.exporter("xls"),setTimeout(()=>{for(let o of r)this._editeur._planActif.appendChild(o)},1000)})),e.ajouterElementMenu(new l.ElementMenu(".md",()=>{if(d)console.log("Exporter en .md");let r=[];for(let o of this._editeur._planActif.children)if(!this._selection.estSelectionne(o)&&o!=this&&o instanceof l.ElementGraphique)r.push(o),o.remove();this._editeur._planActif.effectuerDictionnaireDesDonnee(),this._editeur._planActif.leDictionnaireDesDonnees.exporter("md"),setTimeout(()=>{for(let o of r)this._editeur._planActif.appendChild(o)},1000)})),this.appendChild(new l.ElementMenu("Ajouter à la bibliothèque",()=>{if(d)console.log("Ajouter à la bibliothèque custom");let r=this._editeur.copy(!1),o=new l.InviteNouvelleBibliotheque(r);this._editeur.appendChild(o)})),this.appendChild(new l.ElementMenu("Aligner la sélection ici",()=>{if(d)console.log("Aligner la sélection ici"),console.log("target",this._target);let r=this._target;while(!(r instanceof l.ElementGraphique)){if(r.parentNode==null)break;r=r.parentNode}let o=new l.EvenementDeplacementElementMultiples;this._selection._listeElementsSelectionnes.forEach((c)=>{let u=new l.EvenementDeplacementElement(c._element);c._element._ordonnee=r._ordonnee,c._element.setPosition(),c.update(),u.ajouterNouvellePos(),o.ajouterElementDeplace(u)}),this._editeur.ajouterEvenement(o),this._selection.update()}))}}}class yt extends HTMLElement{_estOuvert=!1;_arborescence=null;_arborescenceCustom=[];_editeur=b;constructor(){super();let e=document.getElementById("biblio_btn");if(e.addEventListener("click",()=>{if(this._estOuvert)this.fermer();else this.ouvrir()}),le)e.parentNode.removeChild(e);let t=document.createElement("div");if(t.classList.add("img"),this.appendChild(t),this._estOuvert=!1,!A())fetch("Bibliotheque/getStructure").then((i)=>{if(!i.ok)throw Error("Network response was not ok");return i.json()}).then((i)=>{if(d)console.log(i);this._arborescence=i}).catch((i)=>{console.error("There has been a problem with your fetch operation:",i)});if(this._editeur.getCookie("elementsPersonnalises"))this._arborescenceCustom=JSON.parse(this._editeur.getCookie("elementsPersonnalises"))}initializeHostData(e,t){if(this._arborescence=e,this._arborescenceCustom=t,this._estOuvert)this.update()}ajouterAlgorithmeCustom(e,t,i,n){this._arborescenceCustom.push({nom:e,nomCourt:n,algo:t,descriptif:i}),this._editeur.setCookie("elementsPersonnalises",JSON.stringify(this._arborescenceCustom),365),this.update()}ouvrir(){if(document.querySelector("dictionnaire-donnee").fermer(),document.getElementById("biblio_wrapper").style.zIndex=40,document.getElementById("biblio_wrapper").style.display="initial",document.getElementById("boutonBiblio").classList.add("elementIsOpen"),this._estOuvert)return;if(this.innerHTML="",this.classList.add("ouvert"),this._estOuvert=!0,this._ajouterHeader(),d)console.log("Ouverture de la bibliothèque"),console.log(this._arborescence);let e=this._creerListeCategories();if(this.appendChild(e),this._arborescence.forEach((t)=>{let i=this._creerCategorieElement(t);e.appendChild(i)}),this._arborescenceCustom.length>0){let t=this._creerCategoriePersonnalisee();e.appendChild(t)}}_ajouterHeader(){let e=document.createElement("div");e.classList.add("header");let t=document.createElement("span");t.innerHTML="⛌",t.classList.add("fermetureBibliotheque"),t.addEventListener("click",(s)=>{s.stopPropagation(),this.fermer()}),e.appendChild(t);let i=document.createElement("div");i.classList.add("searchBibliotheque");let n=document.createElement("div");n.classList.add("searchButtonBibliotheque"),n.innerHTML='<svg id="searchButtonSVGBibliotheque" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" ><path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"/></svg>',i.appendChild(n);let r=document.createElement("input");r.type="text",r.classList.add("searchTermBibliotheque"),r.placeholder="Chercher un algorithme...",i.appendChild(r);let o=document.createElement("span");o.innerHTML="×",o.classList.add("clearButtonSearchBibliotheque"),o.style.display="none",o.addEventListener("click",()=>{r.value="",o.style.display="none",this.rechercher("")}),i.appendChild(o),r.addEventListener("input",()=>{o.style.display=r.value?"inline":"none",this.rechercher(r.value)}),e.appendChild(i),this.appendChild(e)}rechercher(e){let t=this.querySelectorAll(".categorie"),i=e.toLowerCase().split(" ");if(e===""){t.forEach((n)=>{n.classList.remove("ouvert"),n.querySelectorAll(".algorithmeBibliotheque").forEach((o)=>{o.classList.remove("highlightAlgorithmeBibliotheque")})});return}t.forEach((n)=>{let r=n.querySelectorAll(".algorithmeBibliotheque"),o=!1;if(r.forEach((s)=>{let c=s.description.toLowerCase(),u=s.nomCourt?s.nomCourt.toLowerCase():"",p=s.nom?s.nom.toLowerCase():"";if(i.every((a)=>c.includes(a)||u.includes(a)||p.includes(a)))s.classList.add("highlightAlgorithmeBibliotheque"),o=!0;else s.classList.remove("highlightAlgorithmeBibliotheque")}),o)n.classList.add("ouvert");else n.classList.remove("ouvert")})}_creerListeCategories(){let e=document.createElement("div");return e.classList.add("listeCategories"),e}_creerCategorieElement(e){let t=document.createElement("div");t.classList.add("categorie");let i=this._creerTitreCategorie(e.nom);t.appendChild(i);let n=this._creerListeAlgorithmes(e.contenu);return t.appendChild(n),t}_creerTitreCategorie(e){let t=document.createElement("h3");t.addEventListener("click",(n)=>{n.stopPropagation(),t.parentElement.classList.toggle("ouvert")}),t.innerHTML=e;let i=document.createElement("div");return i.innerHTML="›",i.classList.add("flecheOuverture"),t.appendChild(i),t}_creerListeAlgorithmes(e){let t=document.createElement("div");return t.classList.add("listeAlgorithmes"),e.forEach((i)=>{let n=this._creerAlgorithmeElement(i);t.appendChild(n)}),t}_creerAlgorithmeElement(e){let t=document.createElement("div");if(t.classList.add("algorithmeBibliotheque"),t.setAttribute("draggable","true"),t.contenu=e.algo,t.description=e.descriptif,t.nom=e.nom,t.nomCourt=e.nomCourt,t.preview=this._creerPreview(e),e.nomCourt)t.innerText=e.nomCourt;else t.innerText=e.nom;let i=this._transformerAlgorithmeEnRelatif(e.algo);return this._ajouterEvenementsAlgorithme(t,i),t}_creerPreview(e){let t=document.createElement("div");t.classList.add("previewAlgo");let i=document.createElement("div");i.classList.add("divTransparent"),t.appendChild(i);try{let o=new l.PlanTravail;o.classList.add("previewPlanTravail"),o.chargerDepuisJSON(JSON.parse(e.algo),!1);let s=o.getCoordMinEtMax();if(d)console.log(s);s.coordMax.x+=2,s.coordMax.y+=2,s.coordMin.x-=2,s.coordMin.y-=2;let c=s.coordMax.x-s.coordMin.x,u=s.coordMax.y-s.coordMin.y;if(d)console.log(\`nom = \${e.nom},largeur = \${c}, hauteur = \${u}\`);o.toutDeplacer(-s.coordMin.x,-s.coordMin.y);let p=Math.min(25/c,15/u);o.style.setProperty("--sizeModifier",p),t.appendChild(o)}catch(o){console.error(o);let s=document.createElement("p");s.innerHTML="Erreur lors de la prévisualisation",t.appendChild(s)}let n=document.createElement("h4");n.innerHTML=e.nom,t.appendChild(n);let r=document.createElement("p");return r.innerHTML=e.descriptif,t.appendChild(r),t}_transformerAlgorithmeEnRelatif(e){let t=JSON.parse(e),i=1/0,n={x:0,y:0};t.forEach((o)=>{if(parseFloat(o.ordonnee)<i)i=parseFloat(o.ordonnee),n.x=parseFloat(o.abscisse),n.y=parseFloat(o.ordonnee)}),n.x+=15;let r=(o)=>{if(o.abscisse=parseFloat(o.abscisse)-n.x+"vw",o.ordonnee=parseFloat(o.ordonnee)-n.y+"vw",o.enfants)o.enfants.forEach((s)=>r(s));if(o.typeElement=="StructureSi"||o.typeElement=="StructureIterative")o.conditions.forEach((s)=>{s.enfants.forEach((c)=>r(c))})};return t.forEach((o)=>r(o)),t}_ajouterEvenementsAlgorithme(e,t){let i;e.addEventListener("dragstart",(n)=>{if(d)console.log(n);n.dataTransfer.setData("application/json",JSON.stringify(t)),this.removeChild(e.preview),this.style.opacity=0.2}),e.addEventListener("dragend",(n)=>{if(d)console.log(n);this.style.opacity=1}),e.addEventListener("mouseenter",(n)=>{if(d)console.log(n);clearTimeout(i),this.appendChild(e.preview)}),e.addEventListener("mouseleave",(n)=>{if(d)console.log(n);i=setTimeout(()=>{if(!e.preview.matches(":hover")){if(e.preview.parentNode)e.preview.parentNode.removeChild(e.preview)}},300)}),e.preview.addEventListener("mouseenter",()=>{clearTimeout(i)}),e.preview.addEventListener("mouseleave",()=>{i=setTimeout(()=>{if(!e.matches(":hover")){if(e.preview.parentNode)e.preview.parentNode.removeChild(e.preview)}},300)})}_creerCategoriePersonnalisee(){let e=document.createElement("div");e.classList.add("categorie");let t=this._creerTitreCategorie("Personnalisés");e.appendChild(t);let i=this._creerListeAlgorithmesPersonnalises();return e.appendChild(i),e}_creerListeAlgorithmesPersonnalises(){let e=document.createElement("div");return e.classList.add("listeAlgorithmes"),this._arborescenceCustom.forEach((t)=>{let i=this._creerAlgorithmeElementPersonnalise(t);e.appendChild(i)}),e}_creerAlgorithmeElementPersonnalise(e){let t=document.createElement("div");if(t.estCustom=!0,t.classList.add("algorithmeBibliotheque"),t.setAttribute("draggable","true"),t.supprimer=()=>{this._arborescenceCustom.splice(this._arborescenceCustom.indexOf(e),1),this._editeur.setCookie("elementsPersonnalises",JSON.stringify(this._arborescenceCustom),365),this.update()},t.contenu=e.algo,t.description=e.descriptif,t.nom=e.nom,t.nomCourt=e.nomCourt,t.preview=this._creerPreview(e),e.nomCourt)t.innerText=e.nomCourt;else t.innerText=e.nom;let i=this._transformerAlgorithmeEnRelatif(e.algo);return this._ajouterEvenementsAlgorithme(t,i),t}fermer(){if(document.getElementById("biblio_wrapper").style.zIndex=-300,document.getElementById("boutonBiblio").classList.remove("elementIsOpen"),!this._estOuvert)return;this.innerHTML="",this.classList.remove("ouvert"),this._estOuvert=!1;let e=document.createElement("div");e.classList.add("img"),this.appendChild(e),this._estOuvert=!1}update(){if(this._estOuvert)this.fermer(),this.ouvrir()}}class wt extends HTMLElement{_editeur=b;_algoJSON;inputNom=document.createElement("input");inputNomCourt=document.createElement("input");inputDescription=document.createElement("div");boutonAjouter=document.createElement("button");boutonCancel=document.createElement("button");errorMessage=document.createElement("p");constructor(e){super();this._algoJSON=e;let t=document.createElement("div"),i=document.createElement("div");i.classList.add("divTransparent"),t.appendChild(i),t.classList.add("previewAlgo");try{let u=new l.PlanTravail;u.chargerDepuisJSON(JSON.parse(e),!1);let p=u.getCoordMinEtMax();if(d)console.log(p);let h=p.coordMax.x-p.coordMin.x,a=p.coordMax.y-p.coordMin.y;u.toutDeplacer(-p.coordMin.x,-p.coordMin.y);let m=Math.min(25/h,15/a);u.style.setProperty("--sizeModifier",m),u.querySelectorAll("*").forEach((v)=>{v.setAttribute("tabindex","-1")}),t.appendChild(u)}catch(u){console.error(u);let p=document.createElement("p");p.innerHTML="Erreur lors de la prévisualisation",t.appendChild(p)}let n=document.createElement("h2");n.textContent="Ajouter un nouvel algorithme dans la bibliothèque",this.inputNom.placeholder="Nom complet de l'algorithme",this.inputNomCourt.placeholder="Nom court de l'algorithme",this.inputDescription.setAttribute("placeholder","Description de l'algorithme");let r=document.createElement("label");r.textContent="Nom",r.appendChild(this.inputNom),this.errorMessage.classList.add("errorMessage"),this.errorMessage.style.display="none",r.appendChild(this.errorMessage),this.inputNom.addEventListener("input",()=>{if(!this.inputNom.value){this.errorMessage.textContent="Le nom est obligatoire.",this.inputNom.style.outline="solid 1px var(--errorColor)",this.errorMessage.style.display="block";return}else{this.inputNom.style.outline="none",this.errorMessage.style.display="none";return}});let o=document.createElement("label");o.textContent="Nom court",o.appendChild(this.inputNomCourt);let s=document.createElement("label");s.textContent="Description",this.inputDescription.contentEditable=!0,s.appendChild(this.inputDescription);let c=document.createElement("div");c.classList.add("actionButtons"),this.boutonAjouter.textContent="Ajouter",this.boutonAjouter.classList.add("primaryButton"),this.boutonAjouter.addEventListener("click",()=>{this.ajouterBibliotheque()}),this.boutonCancel.textContent="Annuler",this.boutonCancel.classList.add("secondaryButton"),this.boutonCancel.addEventListener("click",()=>{this.remove()}),c.appendChild(this.boutonAjouter),c.appendChild(this.boutonCancel),this.appendChild(n),this.appendChild(t),this.appendChild(r),this.appendChild(o),this.appendChild(s),this.appendChild(c)}ajouterBibliotheque(){let e=this.inputNom.value,t=this.inputNomCourt.value,i=Yn(this.inputDescription.innerHTML),n=this._algoJSON;if(!e){this.errorMessage.textContent="Le nom est obligatoire.",this.inputNom.style.outline="solid 1px var(--errorColor)",this.errorMessage.style.display="block";return}this._editeur._bibliotheque.ajouterAlgorithmeCustom(e,n,i,t),this.remove()}}function Yn(e){let t=document.createElement("div");t.innerHTML=e;let i=t.getElementsByTagName("script");return Array.from(i).forEach((r)=>r.remove()),t.innerHTML}class _t extends HTMLElement{content;fermerBouton;constructor(e){super();this.content=document.createElement("div"),this.content.innerHTML=e,this.content.classList.add("contenu"),this.appendChild(this.content),this.fermer(),this.fermerBouton=document.createElement("button"),this.fermerBouton.innerHTML="x",this.fermerBouton.classList.add("fermer"),this.fermerBouton.addEventListener("click",()=>{this.fermer()}),this.content.appendChild(this.fermerBouton),this.addEventListener("click",(t)=>{if(t.target===this)this.fermer()})}ouvrir(){this.style.display="block"}fermer(){this.style.display="none"}}class xt extends HTMLElement{_menuDiv;_boutonDeconnexion;_boutonTheme;_menuIcone;_selectionTheme;_estOuvert=!1;_user;MenuIcone;_init;constructor(){super();if(A())this._user=null;else this.loadUserInfo();if(this.MenuIcone=document.createElement("div"),this.MenuIcone.classList.add("img"),this.MenuIcone.innerHTML='<div class="avatar-circle"><svg id="boutonCompte" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>',this.MenuIcone.alt="Menu compte",this.MenuIcone.id="MenuCompte",this.MenuIcone.addEventListener("click",()=>{if(this._estOuvert)this.fermerMenu();else this.ouvrirMenu()}),this.appendChild(this.MenuIcone),document.addEventListener("click",(e)=>{if(this.contains(e.target))return;else if(this._estOuvert)this.fermerMenu()},!0),!A())window.addEventListener("storage",(e)=>{if(e.key==="auth_status"){if(e.newValue==="logged_out")this.clearLocalAuth(),window.location.reload();else if(e.newValue==="logged_in"&&!this.estSauvegardeDansSessionStorage())window.location.reload()}})}ouvrirMenu(){this._menuDiv=document.createElement("div"),this._menuDiv.id="MenuCompteDiv",this._menuDiv.classList.add("menu-compte");let e=this._user!==null;if(e)this._menuDiv.innerHTML=\`
				<div class="menu-header">
					<div class="user-avatar">
						<svg viewBox="0 0 24 24">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
						</svg>
					</div>
					<div class="user-info">
						<p class="greeting">Utilisateur</p>
						<p class="email">utilisateur@exemple.com</p>
					</div>
					<button class="close-button" id="closeMenuBtn">
						<svg viewBox="0 0 24 24">
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
						</svg>
					</button>
				</div>
				
				<div class="theme-section" id="boutonTheme">
					<!-- Le sélecteur de thème sera ajouté ici -->
					<div class="select-arrow">
						<svg viewBox="0 0 24 24">
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</div>
				</div>
				
				<div class="menu-actions">
					<button class="menu-item" id="boutonModifierCompte">
						<svg viewBox="0 0 24 24">
							<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
						</svg>
						<span>Modifier votre compte</span>
					</button>
					
					<button class="menu-item" id="boutonDeconnexion">
						<svg viewBox="0 0 24 24">
							<path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
						</svg>
						<span>Se déconnecter</span>
					</button>
				</div>
			\`;else this._menuDiv.innerHTML=\`
				<div class="menu-header-simple">
					<button class="close-button" id="closeMenuBtn2">
						<svg viewBox="0 0 24 24">
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
						</svg>
					</button>
				</div>
				
				<div class="theme-section" id="boutonTheme">
					<!-- Le sélecteur de thème sera ajouté ici -->
					<div class="select-arrow">
						<svg viewBox="0 0 24 24">
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</div>
				</div>
				
				<div class="menu-actions">
					<button class="menu-item" id="boutonConnexion">
						<svg viewBox="0 0 24 24">
							<path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
						</svg>
						<span>Se connecter</span>
					</button>
				</div>
			\`;if(this._menuDiv.innerHTML+=\`
			<div class="menu-separator"></div>
			
			<div class="editor-options">
				<div class="indicators-option">
					<select id="indicateursPage" class="indicators-select">
						<option value="disabled">Aucun indicateur</option>
						<option value="a4-portrait">Indicateur A4 Portrait</option>
						<option value="a4-landscape">Indicateur A4 Paysage</option>
						<option value="a3-portrait">Indicateur A3 Portrait</option>
						<option value="a3-landscape">Indicateur A3 Paysage</option>
					</select>
					<div class="select-arrow">
					<svg viewBox="0 0 24 24">
						<path d="M7 10l5 5 5-5z" />
					</svg>
				</div>
				</div>

				<div class="effect-option">
					<span>Effet Glow</span>
					<div id="switchGlowContainer" class="switch-container">
						<div id="switchGlowDisplayer" class="switch-displayer"></div>
					</div>
				</div>
				
				<div class="effect-option">
					<span>Effet Dock</span>
					<div id="switchDockContainer" class="switch-container">
						<div id="switchDockDisplayer" class="switch-displayer"></div>
					</div>
				</div>
			</div>
		\`,A())this._menuDiv.querySelector(".menu-actions")?.remove();if(this.appendChild(this._menuDiv),document.dispatchEvent(new CustomEvent("algoforge:settings-opened",{detail:{container:this._menuDiv.querySelector(".editor-options")}})),e)this.updateUserInfo();let t=this._menuDiv.querySelector("#boutonTheme"),i=e?this._menuDiv.querySelector("#closeMenuBtn"):this._menuDiv.querySelector("#closeMenuBtn2"),n=this._menuDiv.querySelector("#indicateursPage"),r=this._menuDiv.querySelector("#switchGlowContainer"),o=r?.closest(".effect-option"),s=this._menuDiv.querySelector("#switchGlowDisplayer"),c=this._menuDiv.querySelector("#switchDockContainer"),u=c?.closest(".effect-option"),p=this._menuDiv.querySelector("#switchDockDisplayer");if(this._selectionTheme=document.querySelector("select#theme"),this._selectionTheme)t.appendChild(this._selectionTheme),this._selectionTheme.style.display="block";if(i)i.addEventListener("click",()=>{this.fermerMenu()});if(e){let a=this._menuDiv.querySelector("#boutonModifierCompte");if(a)a.addEventListener("click",()=>{let m=new URL(window.location.origin);m.pathname="/cloud/",m.hash="#/?openProfileModal=true",window.open(m.toString(),"_blank"),this.fermerMenu()});if(this._boutonDeconnexion=this._menuDiv.querySelector("#boutonDeconnexion"),this._boutonDeconnexion)this._boutonDeconnexion.addEventListener("click",()=>{this.deconnexion()})}else{let a=this._menuDiv.querySelector("#boutonConnexion");if(a)a.addEventListener("click",()=>{let m=new URL(window.location.origin);m.pathname="/cloud/",window.open(m.toString(),"_blank"),this.fermerMenu()})}if(n)n.addEventListener("change",()=>{document.documentElement.setAttribute("data-page-size",n.value)}),n.value=document.documentElement.getAttribute("data-page-size")||"disabled";if(E.glow)r.style.backgroundColor="var(--titleColor)",s.style.left="auto",s.style.right="2px";else r.style.backgroundColor="var(--fgColorSemiTransparent)",s.style.left="2px",s.style.right="auto";if(o.addEventListener("click",()=>{if(E.glow)E.glow=!1,b.setCookie("glow","false",365),r.style.backgroundColor="var(--fgColorSemiTransparent)",s.style.left="2px",s.style.right="auto";else E.glow=!0,b.setCookie("glow","true",365),r.style.backgroundColor="var(--titleColor)",s.style.left="auto",s.style.right="2px"}),E.dockEffect)c.style.backgroundColor="var(--titleColor)",p.style.left="auto",p.style.right="2px";else c.style.backgroundColor="var(--fgColorSemiTransparent)",p.style.left="2px",p.style.right="auto";u.addEventListener("click",()=>{if(E.dockEffect)E.dockEffect=!1,b.setCookie("dockEffect","false",365),c.style.backgroundColor="var(--fgColorSemiTransparent)",p.style.left="2px",p.style.right="auto";else E.dockEffect=!0,b.setCookie("dockEffect","true",365),c.style.backgroundColor="var(--titleColor)",p.style.left="auto",p.style.right="2px"}),this._estOuvert=!0,this._init=!0;let h=document.getElementById("boutonCompte");if(h)h.classList.add("elementIsOpen")}fermerMenu(){if(this._selectionTheme=document.querySelector("select#theme"),this._selectionTheme)this.appendChild(this._selectionTheme),this._selectionTheme.style.display="none";if(this._menuDiv)this.removeChild(this._menuDiv);this._estOuvert=!1;let e=document.getElementById("boutonCompte");if(e)e.classList.remove("elementIsOpen")}clearLocalAuth(){document.cookie="authToken=; path=/; max-age=0",document.cookie="userId=; path=/; max-age=0",sessionStorage.removeItem("authToken"),sessionStorage.removeItem("userId")}deconnexion(){localStorage.setItem("auth_status","logged_out"),this.clearLocalAuth(),window.location.reload()}loadUserInfo(){let e=sessionStorage.getItem("authToken"),t=sessionStorage.getItem("userId"),i=null,n=null;if(e&&t)i=e,n=t;else{let r=document.cookie?document.cookie.split("; "):[],o=r.find((c)=>c.startsWith("authToken=")),s=r.find((c)=>c.startsWith("userId="));i=o?o.split("=")[1]:null,n=s?s.split("=")[1]:null}if(i&&n)try{fetch(\`/\${n}\`,{method:"GET",headers:{Authorization:\`Bearer \${i}\`}}).then((r)=>{if(!r.ok)throw Error("Utilisateur non trouvé");return r.json()}).then((r)=>{this._user=r.data||r,this.updateUserInfo(),this.extendCookieExpiration()}).catch((r)=>{console.log("Erreur d'authentification:"),this.deconnexion()})}catch(r){console.log("Erreur lors du chargement des informations de l'utilisateur:")}else this._user=null}updateUserInfo(){if(!this._user)return;if(this._user.urlPfp){let n=this.querySelector(".avatar-circle");if(n)n.innerHTML=\`<img src="\${this._user.urlPfp}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover;">\`}if(!this._menuDiv)return;let e=this._menuDiv.querySelector(".user-info .greeting"),t=this._menuDiv.querySelector(".user-info .email"),i=this._menuDiv.querySelector(".user-avatar");if(i&&this._user.urlPfp)i.innerHTML=\`<img src="\${this._user.urlPfp}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover;">\`;if(e&&this._user.pseudo)e.textContent=this._user.pseudo;if(t&&this._user.adresseMail)t.textContent=this._user.adresseMail}estSauvegardeDansSessionStorage(){return sessionStorage.getItem("authToken")!==null}isRememberMeChecked(){return(document.cookie?document.cookie.split("; "):[]).find((i)=>i.startsWith("authToken="))!==void 0}extendCookieExpiration(){let e=this.getSessionData();if(e&&this.isRememberMeChecked()){let{token:i,userId:n}=e;return document.cookie=\`authToken=\${i}; path=/; max-age=172800; Secure; SameSite=Strict\`,document.cookie=\`userId=\${n}; path=/; max-age=172800; Secure; SameSite=Strict\`,!0}return!1}getSessionData(){let e=sessionStorage.getItem("authToken"),t=sessionStorage.getItem("userId");if(e&&t)return{token:e,userId:t};let i=document.cookie?document.cookie.split("; "):[],n=i.find((c)=>c.startsWith("authToken=")),r=i.find((c)=>c.startsWith("userId=")),o=n?n.split("=")[1]:null,s=r?r.split("=")[1]:null;if(o&&s)return{token:o,userId:s};return null}}class I{__elementConcerne;constructor(e){this._elementConcerne=e}get _elementConcerne(){return this.__elementConcerne}set _elementConcerne(e){this.__elementConcerne=e}annuler(){console.log("Annulation de l'événement")}retablir(){console.log("Rétablissement de l'événement")}}class Jt extends I{_plan;constructor(e,t){super(e);this._plan=t}annuler(){if(d)console.log("Annulation de l'événement de création");this._plan.removeChild(this._elementConcerne)}retablir(){if(d)console.log("Rétablissement de l'événement de création");this._plan.appendChild(this._elementConcerne)}}class Yt extends I{_planTravail;_listeEnfants=[];_parent;constructor(e){super(e);if(this._planTravail=e.parentNode,this._parent=e._parent,e instanceof l.StructureAlternative)this._listeEnfants=e.getEnfantsParCondition();else if(e instanceof l.ElementGraphique)for(let t of e.getEnfants())this._listeEnfants.push([e,t]);else if(e instanceof l.Condition)for(let t of e.getEnfants())this._listeEnfants.push([e,t])}annuler(){if(d)console.log("Annulation de l'événement de suppression");if(this._planTravail.appendChild(this._elementConcerne),this._parent)this._parent.lierEnfant(this._elementConcerne);for(let e of this._listeEnfants)e[0]._elemParent.lierEnfant(e[1])}retablir(){if(d)console.log("Rétablissement de l'événement de suppression");this._elementConcerne.supprimer()}}class Zt extends I{_elementEnfant;constructor(e,t){super(e);this._elementEnfant=t}annuler(){if(d)console.log("Annulation de l'événement de liaison");this._elementConcerne._elemParent.delierEnfant(this._elementEnfant,!0)}retablir(){if(d)console.log("Rétablissement de l'événement de liaison");setTimeout(()=>{this._elementConcerne._elemParent.lierEnfant(this._elementEnfant,!0)},16)}}class Wt extends I{_elementEnfant;constructor(e,t){super(e);this._elementEnfant=t}annuler(){if(d)console.log("Annulation de l'événement de suppression de liaison");this._elementConcerne._elemParent.lierEnfant(this._elementEnfant)}retablir(){if(d)console.log("Rétablissement de l'événement de suppression de liaison");this._elementConcerne._elemParent.delierEnfant(this._elementEnfant)}}class Xt extends I{_anciennePos;_nouvellePos;constructor(e){super(e);this._anciennePos=[e._abscisse,e._ordonnee]}ajouterNouvellePos(){return this._nouvellePos=[this._elementConcerne._abscisse,this._elementConcerne._ordonnee],this._nouvellePos}annuler(){if(d)console.log("Annulation de l'événement de déplacement");this._elementConcerne._abscisse=this._anciennePos[0],this._elementConcerne._ordonnee=this._anciennePos[1],this._elementConcerne.setPosition()}retablir(){if(d)console.log("Rétablissement de l'événement de déplacement");this._elementConcerne._abscisse=this._nouvellePos[0],this._elementConcerne._ordonnee=this._nouvellePos[1],this._elementConcerne.setPosition()}}class Kt extends I{_elementsDeplaces=[];constructor(){super(null)}ajouterElementDeplace(e){this._elementsDeplaces.push(e)}estDecale(){if(this._elementsDeplaces.length==0)return!1;let e=this._elementsDeplaces[0]._anciennePos,t=this._elementsDeplaces[0].ajouterNouvellePos();for(let i=1;i<this._elementsDeplaces.length;i++)this._elementsDeplaces[i].ajouterNouvellePos();if(e[0]==t[0]&&e[1]==t[1])return!1;return!0}annuler(){if(d)console.log("Annulation de l'événement de déplacement");for(let e=0;e<this._elementsDeplaces.length;e++)this._elementsDeplaces[e].annuler()}retablir(){if(d)console.log("Rétablissement de l'événement de déplacement");for(let e=0;e<this._elementsDeplaces.length;e++)this._elementsDeplaces[e].retablir()}}class Qt extends I{_indiceDecalage;constructor(e,t){super(e);this._indiceDecalage=t}annuler(){if(d)console.log("Annulation de l'événement de déplacement de condition");this._elementConcerne._structure.decalerCondition(this._elementConcerne,-this._indiceDecalage,!0)}retablir(){if(d)console.log("Rétablissement de l'événement de déplacement de condition");this._elementConcerne._structure.decalerCondition(this._elementConcerne,this._indiceDecalage,!0)}}class ee extends I{_ancienTexte;_nouveauTexte;constructor(e,t,i){super(e);this._ancienTexte=t,this._nouveauTexte=i}annuler(){if(d)console.log("Annulation de l'événement de modification de texte")}retablir(){if(d)console.log("Rétablissement de l'événement de modification de texte")}}class ei extends ee{constructor(e,t,i){super(e,t,i)}annuler(){if(d)console.log("Annulation de l'événement de modification de libellé de problème");this._elementConcerne.libelle=this._ancienTexte}retablir(){if(d)console.log("Rétablissement de l'événement de modification de libellé de problème");this._elementConcerne.libelle=this._nouveauTexte}}class ti extends ee{constructor(e,t,i){super(e,t,i)}annuler(){if(d)console.log("Annulation de l'événement de modification de listeDonnes de problème");this._elementConcerne.listeDonnes=this._ancienTexte,this._elementConcerne.updateAccolades()}retablir(){if(d)console.log("Rétablissement de l'événement de modification de listeDonnes de problème");this._elementConcerne.listeDonnes=this._nouveauTexte,this._elementConcerne.updateAccolades()}}class ii extends ee{constructor(e,t,i){super(e,t,i)}annuler(){if(d)console.log("Annulation de l'événement de modification de listeResultats de problème");this._elementConcerne.listeResultats=this._ancienTexte,this._elementConcerne.updateAccolades()}retablir(){if(d)console.log("Rétablissement de l'événement de modification de listeResultats de problème");this._elementConcerne.listeResultats=this._nouveauTexte,this._elementConcerne.updateAccolades()}}class ni extends ee{constructor(e,t,i){super(e,t,i)}annuler(){if(d)console.log("Annulation de l'événement de modification de libellé de condition");this._elementConcerne._libelle=this._ancienTexte}retablir(){if(d)console.log("Rétablissement de l'événement de modification de libellé de condition");this._elementConcerne._libelle=this._nouveauTexte}}class ri extends ee{constructor(e,t,i){super(e,t,i)}annuler(){if(d)console.log("Annulation de l'événement de modification de Expression Switch");this._elementConcerne.expressionATester=this._ancienTexte,this._elementConcerne._ancienneExpressionATeste=this._ancienTexte}retablir(){if(d)console.log("Rétablissement de l'événement de modification de Expression Switch");this._elementConcerne.expressionATester=this._nouveauTexte,this._elementConcerne._ancienneExpressionATeste=this._nouveauTexte}}class oi extends I{_ancienneStructure;_nouvelleStructure;constructor(e,t,i){super(e);this._ancienneStructure=t,this._nouvelleStructure=i}annuler(){if(d)console.log("Annulation de l'événement de modification de structure itérative");let e=this._elementConcerne._inviteBornes;if(e.indice.value=this._ancienneStructure.indice||"",e.borneInf.value=this._ancienneStructure.borneInf||"",e.borneSup.value=this._ancienneStructure.borneSup||"",e.pas.value=this._ancienneStructure.pas||"",d)console.log("Ancienne structure : ",this._ancienneStructure);if(d)console.log("Nouvelle structure : ",this._nouvelleStructure);if(this._ancienneStructure.estBornee){if(e.valider(!0),d)console.log("Ancienne structure bornée, on valide")}else if(e.nonBorne(!0),d)console.log("Ancienne structure non bornée, on annule")}retablir(){if(d)console.log("Rétablissement de l'événement de modification de structure itérative");let e=this._elementConcerne._inviteBornes;if(e.indice.value=this._nouvelleStructure.indice||"",e.borneInf.value=this._nouvelleStructure.borneInf||"",e.borneSup.value=this._nouvelleStructure.borneSup||"",e.pas.value=this._nouvelleStructure.pas||"",this._nouvelleStructure.estBornee)e.valider(!0);else e.nonBorne(!0)}}class si extends I{_deplacements=[];constructor(e=[]){super(null);this._deplacements=e.filter((t)=>t?.element instanceof l.ElementGraphique)}estDecale(){return this._deplacements.some((e)=>e.anciennePos?.[0]!==e.nouvellePos?.[0]||e.anciennePos?.[1]!==e.nouvellePos?.[1])}appliquerPositions(e){let t=new Set;for(let i of this._deplacements){let n=i[e];if(!Array.isArray(n)||n.length<2)continue;if(i.element._abscisse=n[0],i.element._ordonnee=n[1],i.element.setPosition(),i.element.espaceTravail&&typeof i.element.espaceTravail.updateAllLines==="function")t.add(i.element.espaceTravail)}for(let i of t)i.updateAllLines()}annuler(){if(d)console.log("Annulation de l'événement de disposition automatique");this.appliquerPositions("anciennePos")}retablir(){if(d)console.log("Rétablissement de l'événement de disposition automatique");this.appliquerPositions("nouvellePos")}}class ai extends I{_evenements=[];constructor(){super(null)}ajouterEvenement(e){this._evenements.push(e)}annuler(){if(d)console.log("Annulation de l'événement composite");this._evenements.forEach((e)=>e.annuler())}retablir(){if(d)console.log("Rétablissement de l'événement composite");this._evenements.toReversed().forEach((e)=>{e.retablir()})}}class li extends I{constructor(){super(null)}annuler(){if(d)console.log("Annulation de l'événement placeholder")}retablir(){if(d)console.log("Rétablissement de l'événement placeholder")}}var Zi="data:audio/ogg;base64,T2dnUwACAAAAAAAAAACtJAAAAAAAAPgmCuUBHgF2b3JiaXMAAAAAAUSsAAAAAAAAAHcBAAAAAAC4AU9nZ1MAAAAAAAAAAAAArSQAAAEAAAC5Tw3BEF///////////////////8kDdm9yYmlzKwAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTIwMjAzIChPbW5pcHJlc2VudCkCAAAADwAAAFRJVExFPWFudmlsX3VzZQ0AAABUUkFDS05VTUJFUj0zAQV2b3JiaXMpQkNWAQAIAAAAMUwgxYDQkFUAABAAAGAkKQ6TZkkppZShKHmYlEhJKaWUxTCJmJSJxRhjjDHGGGOMMcYYY4wgNGQVAAAEAIAoCY6j5klqzjlnGCeOcqA5aU44pyAHilHgOQnC9SZjbqa0pmtuziklCA1ZBQAAAgBASCGFFFJIIYUUYoghhhhiiCGHHHLIIaeccgoqqKCCCjLIIINMMumkk0466aijjjrqKLTQQgsttNJKTDHVVmOuvQZdfHPOOeecc84555xzzglCQ1YBACAAAARCBhlkEEIIIYUUUogppphyCjLIgNCQVQAAIACAAAAAAEeRFEmxFMuxHM3RJE/yLFETNdEzRVNUTVVVVVV1XVd2Zdd2ddd2fVmYhVu4fVm4hVvYhV33hWEYhmEYhmEYhmH4fd/3fd/3fSA0ZBUAIAEAoCM5luMpoiIaouI5ogOEhqwCAGQAAAQAIAmSIimSo0mmZmquaZu2aKu2bcuyLMuyDISGrAIAAAEABAAAAAAAoGmapmmapmmapmmapmmapmmapmmaZlmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVlAaMgqAEACAEDHcRzHcSRFUiTHciwHCA1ZBQDIAAAIAEBSLMVyNEdzNMdzPMdzPEd0RMmUTM30TA8IDVkFAAACAAgAAAAAAEAxHMVxHMnRJE9SLdNyNVdzPddzTdd1XVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVgdCQVQAABAAAIZ1mlmqACDOQYSA0ZBUAgAAAABihCEMMCA1ZBQAABAAAiKHkIJrQmvPNOQ6a5aCpFJvTwYlUmye5qZibc84555xszhnjnHPOKcqZxaCZ0JpzzkkMmqWgmdCac855EpsHranSmnPOGeecDsYZYZxzzmnSmgep2Vibc85Z0JrmqLkUm3POiZSbJ7W5VJtzzjnnnHPOOeecc86pXpzOwTnhnHPOidqba7kJXZxzzvlknO7NCeGcc84555xzzjnnnHPOCUJDVgEAQAAABGHYGMadgiB9jgZiFCGmIZMedI8Ok6AxyCmkHo2ORkqpg1BSGSeldILQkFUAACAAAIQQUkghhRRSSCGFFFJIIYYYYoghp5xyCiqopJKKKsoos8wyyyyzzDLLrMPOOuuwwxBDDDG00kosNdVWY4215p5zrjlIa6W11lorpZRSSimlIDRkFQAAAgBAIGSQQQYZhRRSSCGGmHLKKaegggoIDVkFAAACAAgAAADwJM8RHdERHdERHdERHdERHc/xHFESJVESJdEyLVMzPVVUVVd2bVmXddu3hV3Ydd/Xfd/XjV8XhmVZlmVZlmVZlmVZlmVZlmUJQkNWAQAgAAAAQgghhBRSSCGFlGKMMcecg05CCYHQkFUAACAAgAAAAABHcRTHkRzJkSRLsiRN0izN8jRP8zTRE0VRNE1TFV3RFXXTFmVTNl3TNWXTVWXVdmXZtmVbt31Ztn3f933f933f933f933f13UgNGQVACABAKAjOZIiKZIiOY7jSJIEhIasAgBkAAAEAKAojuI4jiNJkiRZkiZ5lmeJmqmZnumpogqEhqwCAAABAAQAAAAAAKBoiqeYiqeIiueIjiiJlmmJmqq5omzKruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6QGjIKgBAAgBAR3IkR3IkRVIkRXIkBwgNWQUAyAAACADAMRxDUiTHsixN8zRP8zTREz3RMz1VdEUXCA1ZBQAAAgAIAAAAAADAkAxLsRzN0SRRUi3VUjXVUi1VVD1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVNE3TNIHQkJUAABkAACNBBhmEEIpykEJuPVgIMeYkBaE5BqHEGISnEDMMOQ0idJBBJz24kjnDDPPgUigVREyDjSU3jiANwqZcSeU4CEJDVgQAUQAAgDHIMcQYcs5JyaBEzjEJnZTIOSelk9JJKS2WGDMpJaYSY+Oco9JJyaSUGEuKnaQSY4mtAACAAAcAgAALodCQFQFAFAAAYgxSCimFlFLOKeaQUsox5RxSSjmnnFPOOQgdhMoxBp2DECmlHFPOKccchMxB5ZyD0EEoAAAgwAEAIMBCKDRkRQAQJwDgcCTPkzRLFCVLE0XPFGXXE03XlTTNNDVRVFXLE1XVVFXbFk1VtiVNE01N9FRVE0VVFVXTlk1VtW3PNGXZVFXdFlXVtmXbFn5XlnXfM01ZFlXV1k1VtXXXln1f1m1dmDTNNDVRVFVNFFXVVFXbNlXXtjVRdFVRVWVZVFVZdmVZ91VX1n1LFFXVU03ZFVVVtlXZ9W1Vln3hdFVdV2XZ91VZFn5b14Xh9n3hGFXV1k3X1XVVln1h1mVht3XfKGmaaWqiqKqaKKqqqaq2baqurVui6KqiqsqyZ6qurMqyr6uubOuaKKquqKqyLKqqLKuyrPuqLOu2qKq6rcqysJuuq+u27wvDLOu6cKqurquy7PuqLOu6revGceu6MHymKcumq+q6qbq6buu6ccy2bRyjquq+KsvCsMqy7+u6L7R1IVFVdd2UXeNXZVn3bV93nlv3hbJtO7+t+8px67rS+DnPbxy5tm0cs24bv637xvMrP2E4jqVnmrZtqqqtm6qr67JuK8Os60JRVX1dlWXfN11ZF27fN45b142iquq6Ksu+sMqyMdzGbxy7MBxd2zaOW9edsq0LfWPI9wnPa9vGcfs64/Z1o68MCcePAACAAQcAgAATykChISsCgDgBAAYh5xRTECrFIHQQUuogpFQxBiFzTkrFHJRQSmohlNQqxiBUjknInJMSSmgplNJSB6GlUEproZTWUmuxptRi7SCkFkppLZTSWmqpxtRajBFjEDLnpGTOSQmltBZKaS1zTkrnoKQOQkqlpBRLSi1WzEnJoKPSQUippBJTSam1UEprpaQWS0oxthRbbjHWHEppLaQSW0kpxhRTbS3GmiPGIGTOScmckxJKaS2U0lrlmJQOQkqZg5JKSq2VklLMnJPSQUipg45KSSm2kkpMoZTWSkqxhVJabDHWnFJsNZTSWkkpxpJKbC3GWltMtXUQWgultBZKaa21VmtqrcZQSmslpRhLSrG1FmtuMeYaSmmtpBJbSanFFluOLcaaU2s1ptZqbjHmGlttPdaac0qt1tRSjS3GmmNtvdWae+8gpBZKaS2U0mJqLcbWYq2hlNZKKrGVklpsMebaWow5lNJiSanFklKMLcaaW2y5ppZqbDHmmlKLtebac2w19tRarC3GmlNLtdZac4+59VYAAMCAAwBAgAlloNCQlQBAFAAAQYhSzklpEHLMOSoJQsw5J6lyTEIpKVXMQQgltc45KSnF1jkIJaUWSyotxVZrKSm1FmstAACgwAEAIMAGTYnFAQoNWQkARAEAIMYgxBiEBhmlGIPQGKQUYxAipRhzTkqlFGPOSckYcw5CKhljzkEoKYRQSiophRBKSSWlAgAAChwAAAJs0JRYHKDQkBUBQBQAAGAMYgwxhiB0VDIqEYRMSiepgRBaC6111lJrpcXMWmqttNhACK2F1jJLJcbUWmatxJhaKwAA7MABAOzAQig0ZCUAkAcAQBijFGPOOWcQYsw56Bw0CDHmHIQOKsacgw5CCBVjzkEIIYTMOQghhBBC5hyEEEIIoYMQQgillNJBCCGEUkrpIIQQQimldBBCCKGUUgoAACpwAAAIsFFkc4KRoEJDVgIAeQAAgDFKOQehlEYpxiCUklKjFGMQSkmpcgxCKSnFVjkHoZSUWuwglNJabDV2EEppLcZaQ0qtxVhrriGl1mKsNdfUWoy15pprSi3GWmvNuQAA3AUHALADG0U2JxgJKjRkJQCQBwCAIKQUY4wxhhRiijHnnEMIKcWYc84pphhzzjnnlGKMOeecc4wx55xzzjnGmHPOOeccc84555xzjjnnnHPOOeecc84555xzzjnnnHPOCQAAKnAAAAiwUWRzgpGgQkNWAgCpAAAAEVZijDHGGBsIMcYYY4wxRhJijDHGGGNsMcYYY4wxxphijDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYW2uttdZaa6211lprrbXWWmutAEC/CgcA/wcbVkc4KRoLLDRkJQAQDgAAGMOYc445Bh2EhinopIQOQgihQ0o5KCWEUEopKXNOSkqlpJRaSplzUlIqJaWWUuogpNRaSi211loHJaXWUmqttdY6CKW01FprrbXYQUgppdZaiy3GUEpKrbXYYow1hlJSaq3F2GKsMaTSUmwtxhhjrKGU1lprMcYYay0ptdZijLXGWmtJqbXWYos11loLAOBucACASLBxhpWks8LR4EJDVgIAIQEABEKMOeeccxBCCCFSijHnoIMQQgghREox5hx0EEIIIYSMMeeggxBCCCGEkDHmHHQQQgghhBA65xyEEEIIoYRSSuccdBBCCCGUUELpIIQQQgihhFJKKR2EEEIooYRSSiklhBBCCaWUUkoppYQQQgihhBJKKaWUEEIIpZRSSimllBJCCCGUUkoppZRSQgihlFBKKaWUUkoIIYRSSimllFJKCSGEUEoppZRSSikhhBJKKaWUUkoppQAAgAMHAIAAI+gko8oibDThwgNQaMhKAIAMAABx2GrrKdbIIMWchJZLhJByEGIuEVKKOUexZUgZxRjVlDGlFFNSa+icYoxRT51jSjHDrJRWSiiRgtJyrLV2zAEAACAIADAQITOBQAEUGMgAgAOEBCkAoLDA0DFcBATkEjIKDArHhHPSaQMAEITIDJGIWAwSE6qBomI6AFhcYMgHgAyNjbSLC+gywAVd3HUghCAEIYjFARSQgIMTbnjiDU+4wQk6RaUOAgAAAAAAAQAeAACSDSAiIpo5jg6PD5AQkRGSEpMTlAAAAAAA4AGADwCAJAWIiIhmjqPD4wMkRGSEpMTkBCUAAAAAAAAAAAAICAgAAAAAAAQAAAAICE9nZ1MAAABUAAAAAAAArSQAAAIAAAAN/XDCKQEBAQEBAQEBAQE6M/8W/xT/KP8D/wP29eLY3dzZ09TZKCooKScpMzU0AAoODgYAAAAAAOxJd3g93yvbLX1RsG8rbERuOfT/5nVuHLz1RpCnbqq2Pstfv5yfTqyTtUb7PGf915NKvf4cfbb9zQEMPneJNlxhjBBmP4WEGBTtmWGuLBqr++nGj5FeoXIE/mo7RymQiQ/RcUQbbNh20796ZQC6h9wkZ0OuDfyUAjzzvJ9vXdrbDL8FCGcAqrpJ6JAAcAAAM12DgwcAmJnf3PuwjM7pLr/snBERjO/effXPL5tJsp2WmSS0QrMNeG9pWhUAVjxgjvOSSDYALLjHevjo4375zwvDw3OfnABA5s1x7ZblugAAwBO1bq3wZqdnI8v0uCV14Dv/kWd90a+WYZ0mQJUtbj/oY6ohDVqXitQtMB9XusN1zsYEt0Z61DnxZ3Gy4WCysnzuqWaJZ1TewY9UhmiLV8lV9z/ygB5iflmqdbObe8Tl29zwFw/gUpyMqgEpisuvWh5HfKxqCdzDyJg/dgS61ciP+CYA4NT+N4riL307l4H1BHcPH+UPAAC+qVQJKLABJJAAHtjcGOSgdAdTgSx85JYNnSbAEIAZCA5IAegtG2AG0HcA4JjUBgCKFx6mz+5/dfzll33L89xyYSVtOtPmyN2al9fjqvS9r8Y2H3RsCaCESMVeMnw4YUxFwJw33Syd1Pe7gdJd6ozPZ6cB2mqjRG+FKFQgohEAncinp7fH2gFmuzvChOWfiYGayQiA9cR+8OXs+D6hLvDrRZ2FsyybVidtbcfej4QS3be75WjBys/qXOu2hh29YAME4U+GjtCNmBu2mHbk8v4CEAFVtf2puti7qf+wHeuSbLiN4Jg8rI4axqz8aSkBIv1pmAPhOm/IewA7z+Yc+4z6y6cBAABoe0yuagChscl1R0hlrnD18J2nIBUANAA+SN2YE0EVxRSdBuGa6GG7rVAi0GEAmMHHOyAlYAkwAOcAfIDxAOCfNOhAIlHIIoB1VQ1+zT6XhimjUvQnM+2L6xYODkpManVbgvVHzQwPjopKFgqqsuog5J/383eRPWMeAAjJFA0zszz+mTEBJrHHWK0WEcCVtzwZPsFkhSu+yi/xfCiXM/fM8bFS4mS6bH8MbbNxsjOPr0eSBiWrZ6NJGWc6UP7kdgQYWoFRhu8vzBnw6Yj1wQfd82hH7U6bYnaf4Szl287z8/v+sjqUUifOCn4pAW38pbHtH6PXh0MRC3fcD5Ohlx3Epi899WfjpeAQBsAatYgcqjQz8E0CUB2a/fiwMnjKd3CCkAof/UV4a+QBAAA6i80bA2BulEPxjwGpjEQCAAAA/uccEBjc3AxKYiTZ7x68LA2kMGFINOzQAMADHJBM4MAEIBg4B8AE2eXJEYDttYLqefqlubk0HcWFzN7qeEhfxpwcfviiDGf89jKfT86o90MrABpv/HzeJl+oZHKXjMCKVBFpq5wm2bmmjANGAvD+bLB6zNY4xzGBtnIklelW3pwRjs3XuFVWIjVwMsJKufuWLgCQTmzWYPqhwxtycPrjSGaOaUQWrd3G5wNpVkyfDKq1s+qsj8g3QHXxH8yj8SYBHGxxKTg0KX8CgBcG/iEANEVa+TGw4EiOC2uoI1cTBqMAdDuRMNj8jgBA20f9FcB9agxq4wlLUiOaWuDoIpsdoYwGvpfMJAAmf8E9i5WSSPbbsdr/PFZg2Ag4AHgckHINLMGbwcCMmV5A1q5sngJt+mn2XXbO7Y9vS9Yuw+bQ/KYH0nrjyeN4Oyfno5l2b21mTmuVeRzACeb5lqRd3tCqMi3q5UOA2FKsJVZJLsYyjwDjug5peLiVed0BAO+6yPR0zDnJcSFNptEzAHRJbSvyN3nIc1NLe30jrbNcaFScjAX+ipokpCTKpy4Ha+fZlF3embun3gCRQXUhx8c8G+jV2Vwy980pqg9cIYUEY9wAYMd2a0oMV/iEwPfdstJ1b10XIQfo3380rZUuEACAZl3NH9rv0883Iqgj9jBJPwMdgrW1jgYAXjcc9AykeBjbUQwn4X47tl51kzCQh/BhDCCZaQFmANcAwMckkT1SUcAN28MpX9/abvexJkcft6YOPPx01vOz2w8uPWGaE50WbvYtlotzeqyzeRvw1uhShcWUt0unswf87UoeABUYY8vF6NIKn9iz/NrEJwMAoAlDBQN4NhEpqy8fLWdfrOocVfNtif65jhMOXDtVAGCzxAAAePh3VW5ZDEGgQCKvqrvXRTlLjOV9g4Undb2K4FN5JM4MmbHPfiOOzrsRGeh5Jttg0F+3MACIcC+/HcbvvzHzI6BIjeHTGQWgd2vfHlBULl3Rmk7e4D3rjb24bgIAnjfkHQY1NxiRXYrQb8dAwzu6FRgScASAS3bgwTQB0NsBAAE8YQmQMyxkCrBO88Arp+dP0/x4+//mvTX0Hwy6O7/JGlfanXFtmQ+tUca7yTaAIkVv0takNp28VpnlQKAqxMUijynp5wImABVuxfg0NEsfngEAbClLUj7cBAAARgUA7F6oDFYfj5dnM/MbynJT2cUjvw9UVoe9/Elmvl6OltmTWq+HQj47RNGYdQRO4SQhtuht+7jqn5ywBDM423X60UP8LQ0T+AnQ7TPFYID/IPs7IYzN06uY9Et3yX/sxX0zLRF2wmTpvN48Xg2jBGBn4cORBAC+N+SqAJl9KEbjIpVE7ofTFneGOzx0G8BMAWaAzBII4AkTRbKWAfD6bGNPwnG7kyXzq3n5fjU5M2O5OGu/zsTUXBhr8aOrjHMqxvXKFDHad4oAwJk0U2NtnhJDVFV5kFcAAMtwKR0rbtFkfoPV8P9GphKItYgXXprIep0PQDIh+faF7S9CB9BkAID6HY1ufZC7A7jhfihevxX0v/8BAABX1Ky0D8aGCTHj5ZNGJcpMWALo93IfLoCBxfWgLWnSONmhDN+FXYnrZ9PnCg8dNwXuBajfKBninukdoVk26TRgNtIPvjfEFQNpB8U0oh9PVlkjgRlIZgAHYA20GeB1bJTsAXg6bffrEHtv+fXFpS9/5R9OSAlHZeteb13sss4qZLpkwNIOACBVzQtMp7ZNeS9RjwpN28pOhqsed+E4UNAdFCiG8y6l2oep69m3vAdqawVwXrCO/itu+xFFxhOSBirkMRB5WJV6+Qaofp37D89jDZV5witvTPkAizynms5PgEgAWq2tG1Z25sKs1xlQ5MRfSR4sBJfzDAGqEX5lL5UeNSUUjFPN4o+Rh+WOQqLEkecsEFGBE0OUPq8m/jcUhwbJDiZOc/rhDGwzZic9dDNgbwcEDAUAegMS2Slm41Fg2brpYtBfaeZaPma8TLv9QPLYIX1133pPtJYaVyqcKXjhKjMv6oIATABfTnl+e1AGr2+xAAAbUEgKwI2RSunM+s9kUkEf0SMMvU39PZqARwTfbw1A+MEWf1N5j8Z5Xdq2A2TKXM+/NnnSDLcIMgpAiO7j6QBNbCzkFC4DCVPgQwuyxr3CAwM0ZzMibCS/Gy9ELGPs5vorvqR2lHku5NhUEY1oV8j2gkdTmKTYwuqenJye53Pgm70rSQCeN5RNQzMdlMQK/XhzN3hUAWRAMANW7AATLwBQGSQy0cZpQwFJpB8/bR1+2zv7PyYfUuL9+3vnqZ8Hpdhmz7sTVz61XlqBbBXwpqEreIxWG7H5MxeAE4BqzPSe0OVHNgEL0GLJKgIAlsEUo8gvQfsXjviIVO/2EWWTY+/Skt9EVDgZ9CiQgCjgdXJX6N9FTxtO94xe47wAu97z/u+eSUohbvXWRzMy9TVFKBg1Lme1aC2zDQFHRUToKbOHnuTTYKH4mNMBvuPswZ4p0Bc1wkSgXjFCWNdNltCpaQAAHjdkkwNNDTSMS/vhZsRcLRNAmgHWcQB2gB8MXI7aaTlAAbE7T90/1O02P/v16diWtHU68JAb4e4/h29+22p0k4pdAU5ZV/u0YEIpUMHh+8gFhv0cCmIwEQB4tl+1augzVW93OPjUZh6+aumakNcJwCSeRldThWZrgwfvuBmf7kqPlGy2TDo9Oaqf5t/WbXqoBGAR4kN21raql5nv4zJDcI2MWoWreCtCgFTPK20kTlfdwuBMkNdSEn1FJeAQpGNWN3qMbnCz0TTHck7OA7evRgDyCEG2H2UNAF43dKsAaGBgR79dtxBp0oEMQD8AwNd1gF4ugR8MHE1qJSIAluHgIw/ItVmzE4vx1aNkP/0z6IF8k+0TM+zK2GSt1XyMUuBplUhZJFwKAMUcZTZfAQCAkhESuefcjgcBIJpVLg662GTBhV/2UeKX6vUV4BjSCfFJKdYi3Rq4Gu0y8k/dVr9szzf+IM9IisftftTI88qxzbmZ/159h5XnjCXbHtBthPnepC1nBd4dQItMr65mwFl6UFk5TCudjl8+VxNdsdCnKTIpO0HgfMKY0Ro9sANeNsRRQ9hisAcc+u3pB8yALkEvCwDgYrAGShpwYgyRTgaA+aP3P4eW+6Yo/bgyGs1NzTed0s5DSJMzkzGhoIkECLUTUH1KRyZ1zwJAo+MGjit2WTq+u+iSO8p3yCSTh0p8k2Iv77YFjGKkO8/sUpoSDAAAXM73f3bS1z8GL/W4BAu9b5BqnO31HVZxtC/0+HybA2pqAkxdTE/gbMsIf44LpJE4X5cNF4hlYhefdMfebTPOgvDhjlIf+csACC7pENma48/Qu89iKI5JtK15QtubG9otApY1BFEApkDBxrnfXpflKeM4SrNdnStAIAsAoAwHmATQGQCnjXUegL/cj3b7xVZmGl1TT+Ymy+G5z9NTVzNPDxh57VEVlrVgqVhaVOQiKwMAAKBxEifr7822MI6MNbsKENVhI7rAuzDurmikrBUHyaMg01aPKF62DZxS56fJ0b1fLfhD5L3hwA4r+G/sW8LFYlPZwqPCKxP9L+lSEuUWI1Lv9+1Ef3GrBqRcdDTo6Ed8W49OlUU7VrjrXosfbUS/CAbqRdOloX72sWoxjJ1dPjip5xqBMsU9IgKM5QTgCOFpJrzCTAxwPKw9zcQVDX0Vf8Bc+vV8j06geiglhX0iHd0BTOUKGVVpfyw+4RMBDNIwNNpqdGBY15iQkbxs1XH/RVVlBXP9izLSIFMAdN30QM3CWBMrf1IJDJ4zIa/ycSkm5wpZkC4rZORg0Csnhb4Qv9KUAGTdiohOty2JRfd3AUY5o7g7VSKVK6vfsC4pFWq+t7BdvtZzStcsXCUAfOFERBCeckI0w/9oQOLgqCFXD8IE2wY1Fx2LZoa2tfVOTXlQsUcFfOU0GmRP0zK58rMBXMXYtwdRwQecfCPr6Igdlh+L1M03XswouN4pBwA85Tw6ZROeqkWUDuCVJZCWg1HN0/V6nDPi9t5OPPTWjv8eiUXoh0Psg914pRGmaTv1KAD0HXejdmRGJYn0qa8SrIXN51/MGk4Np+rzy3mzu0W1fTAbfvx/X2ze4KtEkf/35dQ1/fOfAWxKy1MgiJqgE+zDk4oxwaHPx5ZU663spvBM7ww846m3i327E3u9L558rLKkHcgl3/lsKAJPZ2dTAACAkwAAAAAAAK0kAAADAAAA4sp8RiY1NTE2MzM1NzoqKzc7NDQ4Ojn/A/8C9fbh39fc2tzW1uApKSopNERGd4o2II/AN/4+GnRHDMgk9dyyHs8Kj98zJqcnmvzvwMzCTYbT47P8c3caxUB1TdFNxi0BVDpLNDYVIcTWx8jfJaDBFyN9GtO0XuzzvLP0EHm/naaThRfa8aEFtb9ES0HmA69ln0tkJAA0OnfTQECooGFeJRNUgcnShM4kWo74tXrf7rTz3KlwfRxK+o7VWxa8Asqnhach70pt5EFfSzPjZYeC/buAitGg3ZUpc9FlenM33t7nlkKdhcptpzaReeRbyDqoOg9TzlQbXhyTHsYBPD7L63WbjYDffEIGqELAaNSKmVEtHq/IaYpc9H7HD1Dmj6zHUt7cIfDSFoE+O243ChMPND5LPSSWhQj+hxKogA52aCf4GrWZu19mXkhB5NSU2xHEgfGZCsz80YI71wreH9IJFCUA5D2v89hAcYET2L5tqACAjFup232SpsZ/Jsa1Ha7iVB19pe703P8VRnzfSZV22RvcUOmlrg9ESndoZMpS9nDaCOjqMcDUIQDg74AaVV4Q38vF5N6V1ojHjMXjqs0dTk/PS/yox+5gVu1nH7YA5C2v18jtBCakcLYDxKAQywE/fT82Q+ORS7tSTWeptUnRVLynQfz1H29ZbaLGw16YzlcN9AFq1AmtBCQqrxMAVrGShvmTQDCHlumGStI+2RljXw3dWfIjqiL2ZBWgk0jvKVIbNjxGr0NllIIMzV/UQFp2fuYDp2mwu5vSDwjEHhXEdWcJ8ApXRQiK8fhiCBIsHssVAGVccNJevUDToQOCgMvpxjjzFk2SJVY7mU8WbVuUSHQZz10YcL1uggT893R+PGhw6EUCTC53oMghqSGZ1pig6xADefThszzuWCWkzicqrcWTt9+2tjHYtazO/ZGqjMs7JmrVly8bUHiGf7kH/w08Nq/QQp2sUTuC+u9E0wIIgyydCa5ei+K3+sY4FUmuPk2oVehvQxHIqNf1k7TZtuWjPmEDLE6vI7o5Chnc1SUaqEKHd0aVPxWT6afYZt95RfB9wS2UPR1KGE6zlUqTBqgDPy9MuYtxADxGr4NeG8gVacxb1wgSZEtHA2v4pKXL32HeztqpDa4iNvuoHer9Rk9xFfMpErb1SPPPprOf8P0MFDpfJXLLZO69MNN+KoEYtDwgHrgzGvsceDI/Bgy0nfmnovztkpk3WbSOKN+beK6A/tu9Mro7fPgyATRGr2XCZlJ7x9bL3lp0oGsEEBTXLh8x9p7l/IW0VZubHPr5jQQdzydc6NOHONdidU/ZUv8SLhM1Adon3bTM9FlmcTwlCzXR00P9dR6OOd6wYEJ42pWZSmTgkgXADOA+AMCkgC3+519zvgW3b9lOwctDw/2Us0OTYA73SB7MGxcB975Jqd/HzrNMdF7hW8QEABh/HPC0k9O4NgDc794+zz4bQt31mbMmAADt7HZUXWYd6z7S8k3BWsJ2ZDlW1prTYJ7QsLAzrLysIa1ZupMXCOQ/Pmi/tLyTRznaeL6OIPmyszeAmium9Y2FvI/SDYpXYlOh6u3CEfkKCmnHquCPWwLjfkyemGefwz3exCY44/1sxUIyCQgC3x0FsMP6PbpCZDRW5u/3+DFcBZr3UVAAAAgt5mGNXkRLfZwEAB7I3Djssjuyt41qcfNZzzTEP3QYACYH0AC9oBVAomtm1sAoHeDjs3bQeOjK/ovpQfG25e/XM7nJk/nsgI/2U9a84APDDXUDXLJAE5NKhhnTdZx6YofLh4XFXBpQfcpFZoPredNE2pW8eMvbnM0Nry3PpCvg1ii5Ay/knUA84gdUa0WwmCg1wdH1ajDsV1QyfKlS/RToQC2MSwVsYT5Pq+iiYDv0LQUo3r783JHjhwSWqwJa5Qg9X/usPOzCbZ1KCRlCG2+B3SOgmIRTDg93OA3QbjHo+B487HcYON6tJwaALXwLACBJH/tvoYfsFLLrnysLwDqTTQNAI5e/un2EBgAAnmfckImEQsZ04zSjd37Iq/qum5ABOAIALIEgOWjip940lQ7ou1Mi3Xbu2VcXLPnqQ/bfSb9k39rkZzYu88wz2Xh/NQWpIMMGEMUk97KsA7rQ9wnptJatCHxL6JneMTRWBLTmBzHGt+34vR8nql381Kq/GSBqqQRQxTWSb1/Ttfvtn1WUCO7XumQh7t3lLrsewWzOZqqBawMuoWhbI//mHpPJ6R1ThqXzAgGA+AbKfcUikLftOjE7YL43jwG+BQHA4+A7uhmkJ45mH4DtGQAAYJwijlb4S3scVYxHf69GNwbAINrhEMAm6VwZAH6OAY6d+VsDAADeNtwI0GnKjOMpOQ3UoscmVxxWYADJEh0OCA4IWgKMEsEAKmgAABB+HHx8cDyYnnH17+zk+dHXp8P+wZUMbFXz5IlhzpP+ZVxllXO3AwB9gq251bZooqX7ZQayAuwu9kHGmPe44qdDE2q9n5zg5REAANIKgJRQbzEWZQJAz/W1nSrvyQhBe1peL0pahm6ZBNiHzPgb9tZ3r+T1VKB3f+XW+pme6negHACgEvZtJbSfZuVdaIyHpD0tsrU57XPoprRfhnm5MOQYAPrkiFVEOlIr2Fl+5Xp4/AMA+5iGhkZLpbr73OaPIf+pmh2DNyM8AL7fZM36ZQFeNtwAOSi9OVPDMZf2wyN8SYitQyN4CB8aAP8HhPIBgoF3AACNYHYBAPCN5XPspPBpcfpowhRNXt+cmE6VI/atSdInxmT01Q/iO0MTWt2bBELINSg9uG5Ty9tw2VEKxP04SHr7TbttKwDj93wWWlXC1FHMS+305NNjuRlXAACc0pYKTR8nprylxT+GZ7oTlvfpuWCvW3xXa3WSVTrgQCsWUJ7Kc7KI9/hSe+KO/uajsIR2LrkBPDniO6C0Rc2WspSlMDpbc+Q0AvosdBSaU8uxP7gfuRb6FODTUKAb5DSF/jW+Nsxjgzy+63cyTCWq/PYhy2YXEuACSW8GnMHj6Q0AE01URgPIYUZO0DS90ndnlCNomFv8m35t0ogHVehV1saIKi4BoK2w0v5LtieQorhAfUCZMAEeDbibB2u7W6hed6vWHgnQ4mUbAyFbrtIAdg1Ikl/VURCAy9k7yheAzwjfo5fvhp1xrQEMLJV11Pa/8algJ4QXMgDAE8lFNmpLW0qXs6d5y/qlGqNjgIQuDCDfikxWUzjAR/Vka4so8hXAWC+aKAARl4VyPiAAre03ZvcvZApoRwL6kK03SgH/tnoCXjfkpMEcszMpGIn6ccdS2ZHgAcgIBJMZCXoHPAT0CWbSANiZ59uG//Pxx79Je9v15UnmSzS45GFpljKuGxHrZ/bi56QwvgogO3xvjpZHlQtEVaNMAKAM3qIo1TnLMdmz9fY7swdYNw8vk0SGdtS1nqFwABZ22XMFA6brvHEOOE/rMgD6W7IpWswVOM4OaFq0cYJGeN8aZce8UuaVw9dLoDlaaoDoHpDjF4sFqJkkWwnYL9c1Vyp0e7Neu502zU7XPF2pRspMvEkIFPzGZeFx+CBEso7iZAJeN0RaYiaLCROqfjyWdu1hDb0M8GYO6PVanWjPAOhJ65wnVzNet+R/6GxtZg2b5+eJLWaeHaatcLjOCGZzCsaeHbeYbUUlpwFYzmzns5RcvgUS0j6g7Q9e88GF0TcBGP3sv3yJwsQKTRApAVi8ewTjkXcIIE+A1pWhRs829lDrZBZoKQAA4N8iQCfGaoar6oY/GNEmy61/+wCagn79B+guAYPZhy8U5S556AlepIrhTeZZ9F38A0rR7237gi8GQO4N4ZLhzKgdxufdbElo6r1ckF1gZBUIRdB2/2wKvjYkmSPdHAaAvh27oDQ8HABI+gEAzjnAJEB4AEiElssBWGfotpmrX1vupv3kv+Oc5N4Yz6ZSzQfeE1y8khvKOAjoVDDF/eCaxTtQcwqIyFLRAgx0SHKaT/pQc65AFEzWaSJLHASgdbYZcNzHvQvFLm3VBatCu2KTrENPBrc6AuDRYFRzbtFK1AQzD3n5kdZCLACAf+MksN3IV/xJwKMoqzoclv8oJRNG6AdUNh7gdDeDoqBs+VzYxeNg4tQCQo9Ot/AbDREzBE8Z2Y7TLXoKzrtDPissVq0iih7eNgTMI48udgQl+uHMpy82rKGXBQBQhgN0D7QHABDSwvN9AGVJ/vkYbTffXPjv+Od7709xzto+SL+2702bi03RQlEL6gBrPJ7NQh0GOBWY/DjaKckKBOWCCVVSAgAFNSBN3NkNUnEzYqT7SlD+BK+4L5WdONaBzzt+3wGGynv6ZKHLGCUEaFGAgJdXzl9/k2lkxO3a+RdpY+6QK/L98GJtRmOjsPLkBkbr440yQvFW3Y4fr1O0l9QQUTSBB2jAnBzR5DKEtKwP0fOE5vZiQ4fw/vu62UIS6w2l6wYA/jaExiGPLkY1GkWu/XB+6Uy9ocMAAkIHAF44QAdwnXYhopMBsKQcfS279crgOlvnWcPn2mv2kWeDaEt+Db64STa2FWJsF9CJpSysAhB4y9POayAJAIbOgJ8ZMXFhex8BLli9Bbcsv6fx5Ci1ZfyZ0Rx74+Vs9ghvZVvpNCYzWrMWZg7gSrMo1JLMGl9LGr/HJN8GGlFAQGatvPKBwxjOp9TqjM6jMtV9oEpchX99nhVuUJzyKBd7yFZ9285q/Uu+8xyftR+kgNVC6HLRC0Qk7e2IXE4oAT42VEUku+diZAe19MOxn99WPGAAyAIA+N0OwAGVameMsgCaXW4699qHh8bpmwn/m4eWg7YHLT/Ob0I2M5jVMo13upcnIjo8KRCUoSIAgDJJ9M13AiEBAAq8/TsdZJ3eneqOVSX8mHSUcGbQamorSTJx607xN6MsTkuSFBQAAqaUmmx7shhrFBNZ+/D2Er/MOv1ZVAM9qPogIi2ETi/rcyraSTo378j98OrDA2gcaWRyylA68eENEVQYhK0IJLoPz5c+JVJZhSPRo0x7le8eEtluaoP1ogH2NSS9gYiODqAfXhdDnhmuGLLnCEl0GACyAABO4QAToNKknCUSAUzd7PwMvf+0A5Ch7vH0yem/4cBxa0t3NXZDNLnh9s8vZhfEre7SyrNSUVgKeK9ZIEbVR0KgK6sa8SPA+4QTCw9uunJ2fz5jEApoxBKKF8SE/QQ6+2EgyxemGRAwa4hRV6l1LFaY+h7KFScMFcJofVG6+F0eg2VHGOzfTf7x5BfWfVgV4hNCQc3G2zuWNe65Y+1YGtI/XkfoYGSLySERQQ156enP5HnV8yguNY/9yS/X7KmRVLDcsOIhB6Th9NIh264kTzAfAUTw8H6lBynYRPfX97nR/SHLGC59rmkJeQs6uqUDnOF83PTLUzd1bgj7RJvASLBbAqZInKhZX9lmsqQcD3tdiP1Vf9i/Ph+E3XxSZtlXSwiYXrUGDJ41pThpGdKATSXZNg26yWQ30Twvy6zjoygyJQCU3fzOrcu+N9D/7gzoJXuEdcot26gtX2zOL46JNx/yW+tq/1yoB1ddApTpKISp6vHtdq75U7WBcsWU6U6SaPbxqh/3XJ+7nTCp0tOkgcUqgdbmx3d+o5+ETfc8JQBPZ2dTAADA0wAAAAAAAK0kAAAEAAAAc3msixo0ODU0/wr/Of8w/zb/Ff8C7/Hn4+La4dPSypwZC2gjSRejBBNeHEBZtSc5PdpJtiivsV/oxHUKdXY49QKy60btSNO/th+NvjB108/iAAA0Pov09jupzRI8xYR9YBJLFH8OzJmftNPBbfP513VjWVNw9A7WJ1yPOwFTt1BhaA0NYvm/h/0tABxKr0VAV6LQpr5gUAFsoXi89bCNDs5tnYzCHZNpqRUL78/GPf5lM7ooT6toz4ZM6hc1gAYANEZLaLvNGAHMP2nWxmiK6/HPN3JVii2seaM0x1PF9Am5b3Ttwg53Ko0wyZinx/9cS7nVALp33ERGAnKBEC6G0zuf5yeimLcuDiSsl6ZpBgQZgGBg6nXZbSDoNgJsqSkAECnLx/FcGR6+CMMwTt2XH7/eBdN69P5/D/z70IPpByV2n5RPa357sm7oXhtK8sLT91JZa0onnCu+yE2XlxNzS5opY+7Hp2nsAGD/aWutXXv/8fD1ffNkKgBcjC/uzkTIjTq+ZF71ATDtRccwWXNvbiRo2mYUsIs7CMVt1GXZbFX/jFSGQAMAlIMAah0v8DvyfC/z3QVlZqZ7zifn061MWK2W8sHk9jbbmAAQI12m+KSW6RMG6Qo+iJjDtF+OPp/SwlSWtM/6CpAx9D6GvxiofsnAWVr3m2pTI4/P4A1+qN0A6iyQSYrRuihRe92WXDrtDMRzAAHYoQDA/gAO0AEGgAGQB+BGYLOOAocAkGwAkgDuAARgxkv7T7lPB/4MuvvalU/Dyh5V0+7/mHKhrQ9tun3EgLVB3xZlkdCBeja9mnq8PXfHTwMoh8Qkezb8lUrwWqoJVEXBAld/e2745ttZw3MAsP52HY/qL/n/NJU0ltxqFcE3FD+pmbB5fV53k5UFig2ImGdZObPLLaGhR82o666PJ38t6oF/jtpn4N0Cd8m1HWfx0j/VPKqtMiEiOWxTnV0EwCHpkfG2nUzvT89Yv48kggxNoAmYuyipc61UNZgXxa8/7zicUQfNw8LUl+HKdnmaQAGczhUtwNaPt9P/vlJ2AIAVBO0URz4XACBecZQDIPonuFnUyKutT98wbjrvVxusUgCeqM1RAZH/lCjGpqdAIYV6EHzWS/6atRGEA1xDww4FALwpaQ7gJ3AAABng8gDT8dgDTwgAhwS4Y1MDvGJGdtq6zXgytZ/3MDNLam6d6r8P7yXLFL/3d+e7lNBpozdDHrQ6tO8H7c3JxWTLDBFABOPilkpzHvoFWV2wCgChKAG5KOhyzjjwSQcA6olF365eSNm6aS7GyDzGSNOqQmgsQT5oNIMx0qWVZRzufOrJ8YI2Bfjtg5m4zaC/A+c3plyMUGfVdG2TuZv8+8ySFPNOAi5RQdq94jIHjE08MhQAYAwB7q8FALAKff/i8Pm0YZXU/t7fbIcmAND+vioAgMk5mf5XggBA6e0NsCAbjR6sE5H8Nen0O7cBVJV/GIiLysFE8A3KAV5ogdHWAMP7TsdiJwD+V81TmTkkqaolOnaxoUR5O7+4cnLHAiiQqWIY+gHgvJQDDwCCcS4ssASTLAHAlY4DdI8FwACPJj0ABCeLAFPLoVS7swe3Z9AG0rRnvfqMcKaa8EDpQdjQEDx5xikzS9kPAD2UZSgFalL19xuCnyhIKQEAAEouHfx/yHjtEJfcAO8GpXulSXUxhGbJXBwgLQFQfpvBVTdsTcmXMJefZrFYzloehzfN385brjcufGok0wHqtf7+FMq9TyII7KdmuZB4lyKam+VnbAFVn3kiuOf/nD+51Z9lH87Pcncq/P9uzAkdvs2/A/w91lI8mreLA3iw1Gy7rMbKh73oKvLRrzuEUaQBAKjBOz/8VAMAgBY0eLcDvnvQ89a/cCQAwKS+xTVgHqqb9G6Vei+nW9w3rQmARQIAAAC+5xwUDqb9QMrN+VRcqMrzfM0AMYGaGRTsMAIAv0awA2K5NgKAAw98sAMAAJ/FzAQWDhjgkbMJAA6m/Hl43vdfJpPzW5sxa+J/JkvdPb+9oQfvG/QM49LPwWYObAFvwKW8jXjh9Uwy/c1dEBAKwK40bqLgc0/GFQAAOVtptgvvezPP03oNUvqSkGLXqnnW2+qhXFCSZEdqsk68DSLlwWi+LSgGAOAG0gEAKkcZdL9ihi3W1LNXMpwaprMMg8Zx/zt1TPfGiDfAFA7FyP77F/PZ+a0HJ0e1G4OFArB6qfwYhF28CPb0uadBCy1xAAj+TYAmqF+EebjdBADAKYAez+qrqNe1Y4FbRq7LYy1qVJtMK6JdtQCet8wmEWEMSQqc4MLA7bHa/nRjYAawozIBQIb94AEACjvgwAETAzBjmpMwXkcB/PrcS2fhn/Nbd38939nZ3h+8HpytqbthGd49b60PtOgbByb+0QBwxgRy8fw0yxIWNhJCQhUAQHJd77ItuVIBAADA8sircfL2u3YllGmgYS0QmSiMm3Evdc3JPG6FvctHlgOJF0kFAGAH9dDwiTrNdJiwtREQXvjsCQBABnSzUoAJAgbG+rwd45+1TtgPBj6AO4oyuF+dXnOwMETVjWkbPUy1ASum/XHHGp5GNCBbOK0BlsGmDfwJpvS96mtYBCy8RLdOAnm82xHLfyO4Dgk4figiAf5mzEgBPf1I6uCEpZd9nr7FOJ3iYUg09APAw1CuHWBr+hUAlpj2DMDHAc4EciSTBkDpd/JXbtaB7C+7P2ZZ/mJ9NnfzkuaryMa4MS6rjLgpe96lPtoBeFlLFQHCgDFidr5uCQAAsNsi/djYX/ON+xobYC0wAhoAyxE24ifLngmwUgCyPMmf3Z9ZzZ/qqQuoYpz+Rjfs5hPgScGtsLbPy5iwDUrFfGs/a6sOiNx+AxzgEG06m1ZkAyHE6wAAALhFIZQ/90AIBrSh67UA8f4GptdZXz8HVhXQjgUwWuoctd8mt+Qsm3t+/bTWqcNTkwwBfmbMMgaVf8yi7qMSg7495B80YaEb4ACgYQcAAHORdoAxxgmAJbodWQKAJ0wdGdI+BSCKt4rNwLXbzbOq//D+K+MrhiXzYTMmazIF7uw+W7rEiIM/HlqTfF5a86sA4EruO7HpaYyOtOgKxgKAq850cnc3DwAAYJJl/Te33Ju2ieoiTgEAAPB4lPn2MWf0TQAAAGgDldgqndItd+3n2C3g0h0AAHiP0B5HWUaJkA4Aj0la/CqM4zcAbfRG5I98gAB4YfoHhq0dk22iNULrxvdiDBOJNtCjPGt3AdpPn8q10KwqB+ba3Ucz+1v9DgrHksA1AB5X5I2APr4M4vs44fHQt3NbZNMAwjsAAMjP6QMAlDyfAWCJ7jgA4CXsCW0AePJ09u+7qbc/43u1uXNocN712/ebJV4TNzIzcyoagzWt5XZeVqkQAzRVAADZZfWlbgQAAAAAiQUeigfXJwURZ3mSSgJAAerAt4Xk7V0tw9EsBwDgrQkA3mAHnG1dl/v0z0kHCCqO6T09nTJWSQAAQMN6dwv63T+sKREgeMPCO1QntbByKqtQqJ9WqKJXO3JqVEzKhTYqtY3ZHzvQ47B8t7Aozlt90qKzYaGRdEQKyfK4tJi9Plb6CQqqGv42BF5AG3dO0o3tpJikfjhX/WLaxIQDAOgHAMR32gGWs9MAwApwwAF6Nk5rowHUaTAD+Rfz8u5+mp4vjbnt1qMln2k7JzsfRnSnWvptWIFcFtCQx+1xGvxdegeqrKMAABg4U6T7zgUAAHZKu5C6eGqLIgBIHbABYqvd5pL212KorgAAAH4WAIyljLgM8kobvYwOZewoFAh5bv1HKX77e6uDJwlgx5BP3i+9QGFqJrZmcgBYbmizxH0kgs8CGniPl3pvWnA4DBrQZRdkVYy/pGQ2UAfD5FsQU7gyCpjm23IK+owE3jZEiWHOtR31xq3adIOqH47std4AHAAUzICV/AAABf0TAKyYdgyAFNo4JwDI+vnHqzabXv3ywpZBu9fiZrXYPzlLJh8aptTLdRM3Wnc70xRCU6horDRRNvjaFejqjgIua9HNuQgAAACAxGNGZOTbGpeCAIkHYKMBUDNFHU6O2gBwBYfJO0sxuh/hvJ6ZX5haUFz9ZTdOMIWY3lcEAIM/QxZ6NuVmrxi92WvjObkBpQtk5WZmWer8Eecy1ThCoWPgAbvWGprV5BoeHkpmef289y2uS+d60UrigPbJmV8LBYdvBv41VKMEHxc78R4qNgao6sP5sq7QkwmTfgBA300H2NqyBCs4BuAYLXtWA7h38PUvzg/vXXlOYvBk7pzr144/5u0be9dW1axTjBFSpABYUBxMnRkBAABAmbro+/vXdzABVQWkWYDvTwpdPQAAEcBD2Uad/DegdaU3A/A6XlGK1VMSWMPmm6vzzHedYMKL77417Ny+tuw0AED5Z0esitHRwPOGqDEF7SvaAvuWO2f7dwDWnCURAVaoe5qgVV4cSizPFYaiJT7WQFM/rGA6rf0YTe4h2oviOiRP+JMTvjZk3UC7WkjKHwfOxKJvD3vC0hYF6PoBAPuSdoCJMQDsCSiQMAAn0cr5DkB7tbixZpAN/TP+sPFKqcOz/9Z4We5aMs9blTpAAcBaDZLb/xIAAADw8VUK/UYEAJQSkElpAaA0hVdzZl8yQGNeAXq4nqDEMo9VnsJS5O217y/qle+DYJCYN4EfP12M6dgJ1wvpib8UhnEkCJQA1/sJC8DTyZCr8d0Gs36laVGFHgObtqXAyTM6pPiqNNH9JbIqphBMPXyLL4HvxQpTgfC+OUSKpAQBplv6PMFkd3/cZcfTCTZEnjbEk4e61hCMN0WG+uHONBYKHboZsJIH2MAisAF0lWjLBkBxL80/84+JCxl1Za5x8di/y/kDZltvt0kf9q6oKgDgcPCoAwAAAO9/Km//bQMAWeF4E5C3R2nxh9ao3ySRwXNQG4ZbLKNvHvwEd0BwVYc/WuhmbAKp0cWV+ZzAbTQaSaoyuKIqCCGjSUE7HRUGDRcUyfR5nI/0Ts1ZM4P4cqbbHWTuBSLY6Er0dOKcVifwJ2aKnZ3Sa7U9hl4r1sf14SGr2eMKe+0YM7/3KGM3MIV+0h43lIuHyjqSMqnE43449RQ6JmizBAAlBxjZJjCPCYFEa9loAHX70/x7tU/z73j67/zoz6nt3eXHtoH0HYdzZkARpwAAWI69mE4pAAAADN8LHw4oAMCCe1LjyMSO8j0Fzj60mOApuwF3gofoSdWYDWf7+fG9A6EP4APttvQlmfu9gk90wi5AiClf4jI60zYlwUsZElSYPrU35JJEg1oDDo+1aXIljkqqiCdrH6Q7cxrqWH8YXqmkiyiiF9ROMplNGZcUc9emwssdu6rrpBZ/lTY+ch43rCcTIoF04AeGn/rhFAQJnZoBuzxA14FUKhptiRrAcuX4JdlimmnWD+83M37a9u/G7vaBsM6wrAaZLcwQFQCAfn0bAAAAEE6C37UCgKuD6nrKzJ6DcbB7R1rrBu4JjE0uW5+IBJBN4n0++SzhJBFaYtK09w7fauNt8hRoHan9AOXQkNh/gumLiFwKUbHoOUlK3rwEW0hGEZxiPP0zGmICFNd2wNxnSzwqBO3eqWrNxtmu0/4CtT02bmtuvliAfXkIYIw/fRYdZy9PZ2dTAARw6gAAAAAAAK0kAAAFAAAAYvhWHQbZzsrQ0YieNnSLA79soD1huPXDXbCIJKHtBwC40gE4YEUHKT/KztMUONv0aub4Rcrmr7ZduJ89t5pbDrYerUemT9Nl7iY6AQAAAEA0r1sUAAAA3l4qN/8bgAIAofCSeVuqh9EbgqP3lSlxJ61E+XnqAAJ0wMxddKxIxgVCyVLS5K/zkYX0HSp+zcdyNGjg3ki+mcy55/ZXtBp2bEdhWu4GFfjfy5XoacHybTWHFFE7/6wQa2UrAkk+fBj7c+5Oln3x5d9f7i/IFS2ERERNSKv98XZUm1G4MXLL/KY7qiABvjZMu4G4mMj2k2qT1Oet92hdAroB2DvANIG8H7VLEgfA8x146N919lba9Vt/8rDtn0NzBh+xP/5isy5TqYlKugEAAKhhAQAAAJKjCf/YALiWAm3teeO8BwaLJ4pEUJZu2MY8V8SL/GKnzE8WN9X8j2ac3DgZrp3JtOChDumioG/z+euc3gujvWjV6xhwKw7eN/ALws5LRe8/rfdyA7vqwgzePRrlpAprHR6KonkkhCNnRaFDUMtbEgC4o0y9N2OmGqtUSgA4Aa360v6JDAE+NmyHECIBFqr5pGLym++HO/QEtBlg5wANIKayrBOZBMDu017ehTQ/LDHNtiMPt63DxSafTeVLm+rTW8fpFXgDAEAOmwAAAMDem8njn94VoDUqyWqLrw21GfKb1uHRNJgmX6ODq/4aPKlOwnUClh1w637XXmEZh8BRCOlpg7U6ERMK/RmLlQjbcPhHCvDeLJDzaifO5niBm5+3P++yAQqL56lM7IqPjGy25anGDiC1OlLIg6g63kQUMStjkJGEjvM5o25Q/2SzbRMZfjVsiwau32C8YUrbe9MCjQdUBjgboFcSPVl7JAVuHT8y3G0x7lyze5843DMHb/1gmT/z1MeU2eYqOz+RMUYAAOLVCAAAUM4yyCHtb9zOoTbbodoBrSxZll1+48ZfTWOjebF2Tmy13tQYiKY0zwuOek9k2swGjyDmwJJRKwLP0KfQipyyp0/pGEDIl3+Giuwgt6sdze2MGWXk53G4sLCQ4A2T2Ey/w17mRqyCiG3Ry7AfoMEwoppb7LNXAWK/fxEJ0ZFpdm9rTTXa/oxSQbkAAH5F3K9JWwAh8PyD0eQMEQAY07ZkuSq6SAFWg9LPt7R/hvdnzOyzO6kP1tmn9AsXthjLJaPLZPlfGVYcWQzPnfLumZQMlEyD2T/3FPul47UNAADgv2MAAIDW9P7qrXOh8MPY6IO6UNNqRy/6kgFOsFqmBXhxE+4tD1qhiab+rxcBbbhb/DSZqktkoceks9z3Cz6fmn8Q9zTUaBUXungHoSLKxOo9hcqBCncJ8pIHYYqCfLXIN24smd34C/HvnCEP8bO2KP3o6y+8OGFof2HAcwAAnmX8e9Q7g4L2TIQVriJqkVWHFOEUgAJcX3NdaIuLMKmoSB2NloE6xx7D4t+XQrEuy0UEUvBrqCLgduxfVGQCMEERArifn7WpKRnPz26Im5EyAvDCRB6Wy+XyfhkyqgoAjq3WYMueu0wxcAN4xtRUvzR/dmpiAW5DAdzAS3sGC9fFRMYzucHXAA==";var Wi=\`<style>
	.about-appname {
		font-size: 3em;
		color: var(--titleColor);
	}

	.about-title {
		margin-top: 2em;
		margin-bottom: 0.5em;
		border-bottom: 0.05vw solid var(--fgColor);
		font-size: 2em;
	}

	.about-text {
		width: 100%;
		color: var(--fgColor);
		font-size: 1.2em;
		font-family: Avenir Next, sans-serif;
		font-weight: 500;
	}

	.about-link {
		color: var(--fgColorForward);
	}

	.about-titleColor {
		font-weight: bold;
		color: var(--titleColor);
	}

	.about-forward {
		font-weight: bold;
		color: var(--fgColorForward);
	}
</style>

<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 791.3 809.2" xml:space="preserve" fill="var(--fgColor)"
	style="width: 30em; height: 30em; min-width: 30em; min-height: 30em;">
	<style type="text/css">
		.st0 {
			stroke-miterlimit: 10;
		}

		.st1 {
			fill: none;
		}

		.st2 {
			enable-background: new;
		}
	</style>
	<g id="Marteau">
		<path class="st0" d="M684.8,332l-205.3-45.7c-2-0.4-3.2-2.4-2.8-4.3c0,0,0,0,0-0.1l7.5-30.4c0.5-1.9,2.4-3.1,4.3-2.7l204.6,45.8
		c10.3,2.3,16.8,12.5,14.5,22.8c-0.1,0.3-0.2,0.7-0.3,1l0,0C704.7,328.3,694.7,334.3,684.8,332z" />
		<path class="st0"
			d="M456.8,290.4l11.9,2.9c0.3,0.1,0.5-0.1,0.6-0.3c0,0,0,0,0,0l10.8-54.6c0.1-0.3-0.1-0.5-0.4-0.6c0,0,0,0,0,0
		l-11-1.4c-0.2,0-0.5,0.1-0.5,0.4l-11.7,53.2C456.4,290.1,456.5,290.4,456.8,290.4C456.8,290.4,456.8,290.4,456.8,290.4z" />
		<polyline class="st0" points="452,286.4 429,323 386.3,313 379.6,246 415.4,189.1 458.1,199.1 462,237.8 	" />
		<line class="st1" x1="516.8" y1="223.9" x2="587.7" y2="202.8" />
		<path d="M514.7,216.7l71.7-18.4c2.6-0.7,5.2,0.8,5.9,3.4c0.7,2.5-0.7,5-3.1,5.8L519,231.1c-3.9,1.4-8.2-0.7-9.6-4.6
		s0.7-8.2,4.6-9.6C514.2,216.8,514.5,216.7,514.7,216.7L514.7,216.7z" />
		<line class="st1" x1="493.9" y1="178.3" x2="603.4" y2="66.5" />
		<path d="M488.5,173.1L600.4,63.6c1.6-1.6,4.2-1.7,5.9-0.1c1.6,1.6,1.7,4.2,0.1,5.9l0,0L499.2,183.6
		C492,190.7,481.6,180.6,488.5,173.1L488.5,173.1z" />
		<line class="st1" x1="448.5" y1="155.1" x2="468.2" y2="85.9" />
		<path d="M441.3,153l22.9-68.3c0.8-2.2,3.2-3.3,5.4-2.6c2,0.7,3.2,2.8,2.7,4.9l-16.6,70.1c-0.9,4-4.9,6.6-9,5.7
		c-4-0.9-6.6-4.9-5.7-9C441.1,153.6,441.2,153.3,441.3,153L441.3,153z" />
		<line class="st1" x1="398.7" y1="151.5" x2="357.5" y2="4.3" />
		<path d="M391.5,153.6L353.3,5.5c-0.6-2.3,0.9-4.7,3.2-5.2c2.2-0.5,4.5,0.7,5.2,2.9L406,149.5C408.5,159.3,394.5,163.3,391.5,153.6
		L391.5,153.6z" />
		<line class="st1" x1="360.5" y1="185.1" x2="306.6" y2="131.6" />
		<path d="M355.2,190.4L304,134.2c-1.4-1.6-1.2-3.9,0.3-5.3c1.4-1.3,3.5-1.3,5,0l56.5,50.9c3.1,2.8,3.4,7.5,0.6,10.6
		c-2.8,3.1-7.5,3.4-10.6,0.6C355.6,190.8,355.4,190.6,355.2,190.4z" />
		<line class="st1" x1="333.6" y1="227.9" x2="180.2" y2="185.9" />
		<path d="M331.6,235.2l-152.2-46.3c-1.6-0.4-2.6-2.1-2.1-3.7c0.4-1.6,2.1-2.6,3.7-2.1l154.6,37.7
		C345.3,223.5,341.6,237.7,331.6,235.2L331.6,235.2z" />
		<line class="st1" x1="333.6" y1="274.6" x2="268.2" y2="292.9" />
		<path d="M335.6,281.8l-26.3,5.6l-40.2,8.5c-1.7,0.4-3.4-0.7-3.8-2.5c-0.3-1.6,0.6-3.1,2.1-3.7l64.2-22.5c3.9-1.3,8.2,0.8,9.5,4.7
		s-0.8,8.2-4.7,9.5C336.1,281.7,335.9,281.7,335.6,281.8L335.6,281.8z" />
	</g>
	<g id="AlgoForge">
		<path d="M68.1,444.7c-1.2-6-2-10-2.5-12.1c-0.2-1.1-0.4-2.3-0.7-3.6s-0.6-2.8-1-4.4H37.4L33,444.7H0l6.5-29.2
		c8.6-37.7,14.1-62.7,16.5-74.9h55.4c4,19.3,11.8,54,23.3,104.1H68.1z M60.4,407.6c-5-24.3-8-42.9-9-55.9h-1.7
		c-1.5,14.7-4.4,33.3-8.9,55.9H60.4z" />
		<path d="M108,392.7c0-15.3-0.2-32.7-0.6-52.1h32.9c-0.3,15.4-0.5,31.4-0.5,48c0,10.1,0.1,20.1,0.3,30.1c10.6,0,23.2-0.1,37.7-0.3
		l-2.3,26.2h-68.1C107.8,425.3,108,408,108,392.7z" />
		<path d="M185.6,432.8c-6.6-9.2-9.9-22.6-9.9-40.2c0-18.6,3.7-32.2,11-40.9c7.3-8.6,19.2-12.9,35.7-12.9c11.7,0,20.8,1.5,27.4,4.6
		c6.4,2.9,11.5,8,14.3,14.5c2.9,6.6,4.6,15.5,5.2,26.8l-32.2,3.4c-0.4-7.9-1.7-14.1-4.1-18.5c-2.1-4.2-6.5-6.8-11.2-6.6
		c-3.7-0.1-7.3,0.5-10.9,1.6c-1.1,4.1-1.9,8.2-2.5,12.3c-0.6,4.8-0.8,9.6-0.8,14.4c0,9,1.4,16.5,4.3,22.5c2.9,6,7.1,9,12.6,9
		c3.4,0,6.8-0.5,10.1-1.4c2-0.9,3.8-2.1,5.5-3.5c0.7-0.7,1.4-1.3,2.2-1.8c0-3.3-0.7-5.8-2.2-7.7c-1.5-1.9-3.8-2.8-6.8-2.8h-8v-6.8
		h47.6v12.4c0,12.7,0,23.9,0.1,33.4h-31.4l0.6-23.2h-2c-1,8.5-3.6,14.8-7.9,18.9c-4.3,4.1-10.1,6.2-17.3,6.2
		C201.9,446.6,192.1,442,185.6,432.8z" />
		<path d="M298,441c-7-3.8-12.5-10.1-15.4-17.5c-3.3-7.9-4.9-18.2-4.9-30.8c0-18.7,3.7-32.4,11.2-40.9c7.4-8.5,19.3-12.8,35.6-12.8
		c11.2,0,20.4,1.9,27.4,5.7c7.1,3.9,12.6,10.1,15.6,17.7c3.3,8,5,18.2,5,30.9c0,18.5-3.8,32-11.5,40.6c-7.7,8.6-19.5,12.9-35.5,12.9
		C314.2,446.6,305,444.7,298,441z M336.7,421.5c2.3-9,3.4-18.3,3.4-27.5c0-9-1.3-16.4-4-22.2c-2.7-5.8-6.8-8.7-12.4-8.7
		c-3.8,0-7.5,0.5-11.1,1.6c-0.9,4-1.7,8.1-2.2,12.2c-0.5,4.9-0.8,9.8-0.7,14.7c0,9,1.4,16.5,4.2,22.4s7,8.9,12.5,8.9
		C330,423,333.4,422.5,336.7,421.5z" />
		<path d="M778.3,423.3h13v-11.8c0-2,0-14.4,0-15.3c0-1.2-3.4-0.6-4.6-0.1c0.1,3.4-0.7,4.1-2.2,6c-1.3,1.7-2.8,1.2-4.9,1.2h-27.9V388
		l36.4,0.9v-7.1h-62.4c0,7.2-0.1,14.5-0.2,21.5c-0.1,7.7-0.3,14.4-0.5,20.1h48.5c1.5,0,4.8,0.7,5.8-0.6c1.5-1.8,3.5-4.5,4-6.9
		c0.3,1.1,0.5,2.3,0.6,3.5c0.1,1.4,0.1,2.7,0,4.1" />
		<path d="M786.6,367.4c0.1-3.4-0.7-4.1-2.2-6c-1.3-1.7-2.8-1.2-4.9-1.2h-27.9v15.3l36.4-0.9v7.1h-62.4c0-7.2-0.1-14.4-0.2-21.4
		c-0.1-7.7-0.3-14.4-0.5-20.1h66.3V352c0,2,0,14.4,0,15.3C791.2,368.5,787.8,368,786.6,367.4z" />
		<g class="st2">
			<path d="M404.1,382.6c0-5.5-0.1-14.4-0.4-26.8c-0.1-7.5-0.2-12.2-0.2-14.3h63.2v19.2h-37.4l0.1,17.6l34.4-0.9v16.8l-34.4-0.9
			c0,8.5,0.1,18.5,0.2,30.1h-26.1C403.9,406.2,404.1,392.5,404.1,382.6z" />
		</g>
		<g class="st2">
			<path d="M488.1,420.6c-5.6-3-9.7-7.6-12.4-13.8c-2.6-6.2-4-14.3-4-24.3c0-14.8,3-25.5,9-32.2c6-6.7,15.6-10.1,28.7-10.1
			c9.1,0,16.4,1.5,22.1,4.5c5.7,3,9.8,7.6,12.5,13.9c2.7,6.3,4.1,14.4,4.1,24.3c0,14.5-3.1,25.2-9.3,32
			c-6.2,6.8-15.7,10.2-28.7,10.2C501.1,425.1,493.7,423.6,488.1,420.6z M519.3,405.3c1.8-6.9,2.7-14.1,2.7-21.7
			c0-7.1-1.1-12.9-3.2-17.5c-2.1-4.6-5.5-6.9-10-6.9c-3.2,0-6.1,0.4-9,1.3c-0.8,3.2-1.4,6.4-1.7,9.6c-0.4,3.2-0.6,7-0.6,11.6
			c0,7.1,1.1,13,3.4,17.7c2.2,4.7,5.6,7,10.1,7C514.5,406.4,517.2,406,519.3,405.3z" />
			<path d="M557,382.6c0-13-0.2-26.7-0.5-41.1h39.9c7.9,0,14.4,0.6,19.3,1.9c5,1.3,8.7,3.5,11.3,6.7c2.6,3.2,3.9,7.7,3.9,13.5
			c0,8.2-2.1,14-6.3,17.4c-4.2,3.4-11,5.1-20.3,5.1v1.7c9.1,0.1,15.6,1.5,19.5,4.1c3.9,2.6,6.1,6.8,6.6,12.4c0.1,2,0.6,5.2,1.5,9.6
			c0.9,4.4,1.7,7.6,2.4,9.6h-28c-1.3-8-2.1-14.3-2.3-18.7c-0.4-2.5-0.8-4.4-1.4-5.8c-0.6-1.3-1.6-2.3-2.9-2.8
			c-1.3-0.6-3.3-0.9-5.8-0.9h-11.4v8.9v19.2h-26C556.8,409.1,557,395.5,557,382.6z M601.1,377.6c2-1.5,3.1-4.2,3.1-7.9
			c0-3.9-1-6.6-3.1-8.1c-2-1.5-5.2-2.3-9.4-2.3h-9.6v20.5h9.8C596,379.9,599.1,379.2,601.1,377.6z" />
			<path d="M646.3,414.2c-5.3-7.3-8-17.8-8-31.7c0-14.7,3-25.4,8.9-32.2c5.9-6.8,15.5-10.2,28.7-10.2c9.4,0,16.8,1.2,22.1,3.6
			c5.3,2.4,9.1,6.2,11.5,11.4c2.4,5.2,3.7,12.2,4.2,21.1l-25.9,2.7c-0.3-6.2-1.4-11.1-3.3-14.6c-1.9-3.5-4.9-5.2-9-5.2
			c-3.2,0-6.1,0.4-8.7,1.3c-0.9,3.4-1.6,6.6-2,9.7c-0.4,3.1-0.6,6.9-0.6,11.3c0,7.1,1.2,13,3.5,17.7s5.7,7.1,10.1,7.1
			c2.7,0,5.4-0.4,8.1-1.1c1.1-0.4,2.6-1.4,4.4-2.8c0.5-0.5,1.1-1,1.8-1.4c0-2.6-0.6-4.6-1.8-6.1c-1.2-1.5-3-2.2-5.5-2.2h-6.4v-5.4
			h38.3v9.8c0,10,0,18.8,0.1,26.3h-25.3l0.5-18.3h-1.6c-0.8,6.7-2.9,11.6-6.4,14.9c-3.5,3.3-8.1,4.9-14,4.9
			C659.5,425.1,651.6,421.4,646.3,414.2z" />
		</g>
	</g>
	<g id="Anvil">
		<path d="M513.1,538.2h106.3c38.3-25,93.7-50.8,171.7-76.2v-33.4H371.6v20.5L0,446.2c0,0,7.3,139.8,308.1,146.4
		c0,0,106.9,66.6-82.7,162.5l-0.7,54.2H322c0,0,101-67.3,207.9,0h97.3v-55.6c0,0-147.7-81.1-50.8-180.8h-30c-6.4,0-6.4-10,0-10h40.5
		c5.5-4.8,11.5-9.7,18.2-14.6h-91.9C506.7,548.2,506.7,538.2,513.1,538.2z" />
	</g>
</svg>

<div class="about-text">
	<h3 class="about-title">Version</h3>
	4.1.0
</div>

<div class="about-text">
	<h3 class="about-title">À propos</h3>
	<span class="about-titleColor">AlgoForge</span> est une application de
	<span class="about-forward">conception d'algorithmes</span> moderne, intuitive et performante. <br /><br />
	Conçue en réponse aux limites des outils existants, elle garantit un rendu dynamique adaptatif et intuitif,
	parfaitement fidèle au formalisme de l’<span class="about-forward">IUT informatique de Bayonne</span>.<br /><br />
	Notre objectif : rendre la création d'algorithmes <span class="about-forward">accessible</span>, <span
		class="about-forward">agréable</span> et
	réellement <span class="about-forward">adaptée</span> aux besoins quotidiens
	des étudiants et enseignants.<br /><br />

	Vous pouvez trouver le code source de l'application sur
	<a href="https://github.com/Bing-Chill-inc/Algoforge-main" target="_blank" class="about-link">notre
		GitHub</a>.<br /><br />

	<span class="about-titleColor">AlgoForge</span> est également disponible sous la forme d'une application de bureau,
	<a href="https://bing-chill-inc.github.io/wikiforge/download/" target="_blank" class="about-link">que vous pouvez
		télécharger
		ici</a>.<br /><br />
</div>

<div class="about-text">
	<h3 class="about-title">Développé en 3 ans par</h3>
	L'équipe <span class="about-titleColor">AlgoForge</span> 1ère année :<br />
	- <a href="https://github.com/ParadoxHole" class="about-link">BODIN Maximilien</a><br />
	- <a href="https://github.com/Fetnmax" class="about-link">JACOB-SAUSSEREAU Maxime</a><br />
	- <a href="https://github.com/LOVE-Keqing" class="about-link">MARTIN Edgar</a><br />
	- <a href="https://github.com/Feror-BotMaker" class="about-link">SUARES Jokin</a><br />
	<br />
	L'équipe <span class="about-titleColor">AlgoForge</span> 2ème année :<br />
	- <a href="https://github.com/Eliossore" class="about-link">BACKES Esteban</a><br />
	- <a href="https://github.com/SamuelCURRAN0" class="about-link">CURRAN Samuel</a><br />
	- <a href="https://github.com/Fetnmax" class="about-link">JACOB-SAUSSEREAU Maxime</a><br />
	- <a href="https://github.com/Sprocq" class="about-link">SPROCQ Fabien</a><br />
	- <a href="https://github.com/Feror-BotMaker" class="about-link">SUARES Jokin</a><br />
	<br />
	L'équipe <span class="about-titleColor">AlgoForge</span> 3ème année :<br />
	- <a href="https://github.com/ToxykAuBleu" class="about-link">FOISSAC Mathieu</a><br />
	- <a href="https://github.com/Alakamar" class="about-link">HIRIBARREN TOUYA Adrien</a><br />
	- <a href="https://github.com/Fetnmax" class="about-link">JACOB-SAUSSEREAU Maxime</a><br />
	- <a href="https://github.com/RomLabo" class="about-link">LABORDE Romain</a><br />
	- <a href="https://github.com/LucasMarrot" class="about-link">MARROT Lucas</a><br />
	- <a href="https://github.com/Feror-BotMaker" class="about-link">SUARES Jokin</a><br />
</div>

<div class="about-text">
	<h3 class="about-title">Remerciements spéciaux</h3>
	Nous tenons à remercier notre enseignant tuteur
	<a href="https://www.iutbayonne.univ-pau.fr/~etchever/" class="about-link">M. Patrick ETCHEVERRY</a>
	pour son soutien et ses conseils tout au long du développement de
	l'application, ainsi que pour sa participation sous la forme des
	bibliothèques.
</div>\`;var Xi=\`<style>
	.nopaste-title {
		font-size: 2em;
	}
	.nopaste-content {
		width: 100%;
		color: var(--fgColor);
	}
	.nopaste-shortcut {
		font-size: 8em;
	}
	.nopaste-link {
		text-decoration: none;
		color: inherit;
	}
</style>

<h3 class="nopaste-title">Attention</h3>
<p class="nopaste-content">
	Votre navigateur ne permet pas de coller par le biais de ce bouton, vous
	devez utiliser les raccourcis claviers
</p>
<p class="nopaste-shortcut">
	<a href="https://lettrev.fr" class="nopaste-link">{metakey}V</a>
</p>
\`;var Ki=\`<style>
	.notimplemented-content {
		width: 100%;
		color: var(--fgColor);
	}

	.notimplemented-progressbar {
		width: 90%;
		height: 2vw;
		background-color: var(--bgColor);
		border-radius: 999em;
		border: 0.2vw solid var(--fgColor);
		display: flex;
		align-items: center;
		overflow: hidden;
		box-shadow: 0 0 0.5vw var(--fgColor);
	}

	.notimplemented-progresscursor {
		width: 0%;
		height: 1.8vw;
		background-color: var(--fgColor);
		border-radius: 999em;
		animation: progress 3s infinite;
		margin-left: 0.1vw;
		margin-right: 0.1vw;
	}

	.notimplemented-progressbar:hover > .notimplemented-progresscursor {
		background-color: var(--fgColorForward);
	}

	.notimplemented-link {
		color: var(--fgColorForward);
	}

	@keyframes progress {
		0% {
			width: 0%;
		}

		100% {
			width: 100%;
		}
	}
</style>

<h3>Cette fonctionnalité n'a pas encore été implémentée</h3>
<p class="notimplemented-content">
	Mais n'ayez crainte, elle le sera bientôt !<br />
	Nous travaillons sur notre temps libre pour vous offrir le meilleur service
	possible.
</p>
<div class="notimplemented-progressbar">
	<div class="notimplemented-progresscursor"></div>
</div>
<p class="notimplemented-content">
	En attendant, vous pouvez consulter le code source sur
	<a
		href="https://github.com/Bing-Chill-inc/Algoforge"
		class="notimplemented-link"
		>notre GitHub</a
	><br />
	Peut-être que vous pourrez nous aider à l'améliorer !
</p>
\`;var Qi=\`<style>
	div.container {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin-top: 0.2vw;
		width: 100%;
		height: 100%;
		gap: 0.5vw;
		font-family: Avenir Next, sans-serif;
		font-size: 1.2em;
		font-weight: 500;
	}

	div.raccourcis {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: 0.2vw;
		border-bottom: 0.05vw solid var(--fgColor);
		gap: 2.5vw;
	}
</style>
<div class="container">
	<div class="raccourcis">
		<div>Outil pointeur</div>
		<div>{metakey}@ / {metakey}²</div>
	</div>
	<div class="raccourcis">
		<div>Outil Lier</div>
		<div>{metakey}1</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer un problème</div>
		<div>{metakey}2</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une procédure</div>
		<div>{metakey}3</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une structure si</div>
		<div>{metakey}4</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une structure switch</div>
		<div>{metakey}5</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une structure itérative non bornée</div>
		<div>{metakey}6</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une structure itérative bornée</div>
		<div>{metakey}7</div>
	</div>
	<div class="raccourcis">
		<div>Outil Créer une instruction d'arrêt</div>
		<div>{metakey}8</div>
	</div>
	<div class="raccourcis">
		<div>Annuler</div>
		<div>{metakey}Z</div>
	</div>
	<div class="raccourcis">
		<div>Rétablir</div>
		<div>{metakey}Y</div>
	</div>
	<div class="raccourcis">
		<div>Copier</div>
		<div>{metakey}C</div>
	</div>
	<div class="raccourcis">
		<div>Couper</div>
		<div>{metakey}X</div>
	</div>
	<div class="raccourcis">
		<div>Coller</div>
		<div>{metakey}V</div>
	</div>
	<div class="raccourcis">
		<div>Sélectionner tout</div>
		<div>{metakey}A</div>
	</div>
	<div class="raccourcis">
		<div>Supprimer</div>
		<div>({metakey})Suppr / {metakey}⌫</div>
	</div>
	<div class="raccourcis">
		<div>Zoom avant</div>
		<div>{metakey}+ / {metakey} scroll haut</div>
	</div>
	<div class="raccourcis">
		<div>Zoom arrière</div>
		<div>{metakey}- / {metakey} scroll bas</div>
	</div>
	<div class="raccourcis">
		<div>Ouvrir la bibliothèque</div>
		<div>{altkey}b</div>
	</div>
	<div class="raccourcis">
		<div>Ouvrir le dictionnaire</div>
		<div>{altkey}d</div>
	</div>
</div>\`;class Et extends HTMLElement{_logoAlgoForge=null;_themeSelect=null;_indicateurZoom=new l.IndicateurZoom;_currentTool=-1;_listeTools=[];_typesElements=[];_boutonPointeur=null;_undoButton=null;_redoButton=null;_pointePrecedementLien=null;_menuDeroulantFichier=null;_menuDeroulantEdition=null;_menuDeroulantAide=null;_espacePrincipal=null;_planActif=null;_selection=new l.Selection;_selectionRectangle=new l.SelectionRectangle;_coordonneesSelection={x:0,y:0};_isSelecting=!1;_isDragging=!1;_isMoving=!1;_offsetX=0;_offsetY=0;_lastPosX=0;_lastPosY=0;_ancienPlusProche=null;MAX_CHAR_TITRE=64;_barreOutilHorizontale=null;_clickSound=new Audio(Zi);_clickSoundActivated=!1;_boutonSauvegardeCloud=document.querySelector("#sauvegardeCloud");_pingSauvegardeCloud=document.querySelector("#pingSauvegardeCloud");_derniereVersionSauvegardee=null;_dernierTitreSauvegarde="";_curMousePos={x:0,y:0};_toucheMeta;_toucheMetaAlt;_dictionnaireDesDonnees=new l.DictionnaireDonnee;_bibliotheque=new l.Bibliotheque;_modaleRaccourcisClavier;_modaleAPropos;_modaleNoPaste;_modaleNonImp;_pileAnnuler=[];_pileRétablir=[];_suspendDocumentEvents=!1;_transferForm=document.getElementById("transferForm");_transferInput=document.getElementById("corpAlgo");_transferNomFichier=document.getElementById("nomFichier");_transferSourceImport=document.getElementById("sourceImport");constructor(){super();if(window.navigator.userAgent.match(/(Mac|Windows|Linux)/)[0]==="Mac")this._toucheMeta="⌘",this._toucheMetaAlt="⌥";else this._toucheMeta="Ctrl + ",this._toucheMetaAlt="Alt + ";let e=Qi.replaceAll("{metakey}",this._toucheMeta).replaceAll("{altkey}",this._toucheMetaAlt);if(this._modaleRaccourcisClavier=new l.FenetreModale(e),this.appendChild(this._modaleRaccourcisClavier),this._modaleAPropos=new l.FenetreModale(Wi),this.appendChild(this._modaleAPropos),this._modaleNoPaste=new l.FenetreModale(Xi.replaceAll("{metakey}",this._toucheMeta)),this.appendChild(this._modaleNoPaste),this._modaleNonImp=new l.FenetreModale(Ki),this.appendChild(this._modaleNonImp),window.addEventListener("beforeunload",(a)=>{if((this._pileAnnuler.length>0||this._pileRétablir.length>0)&&ke==="web")return a.preventDefault(),a.returnValue="Attention","Attention"}),this._typesElements.push(l.Lien),this._typesElements.push(l.Probleme),this._typesElements.push(l.Procedure),this._typesElements.push(l.StructureSi),this._typesElements.push(l.StructureSwitch),this._typesElements.push(l.StructureIterativeNonBornee),this._typesElements.push(l.StructureIterativeBornee),this._typesElements.push(l.ConditionSortie),this._espacePrincipal=document.querySelector("#espacePrincipal"),this._espacePrincipal.appendChild(this._selection),this._espacePrincipal.appendChild(this._selectionRectangle),this._selectionRectangle.placer(-10,0,-10,0),this._planActif=this._espacePrincipal,this._logoAlgoForge=document.querySelector("#logoAlgoForge"),this._themeSelect=document.querySelector("select#theme"),document.getElementById("biblio_wrapper").appendChild(this._bibliotheque),document.getElementById("dico_wrapper").appendChild(this._dictionnaireDesDonnees),this._barreOutilHorizontale=document.querySelector("#actionsControl"),this._barreOutilHorizontale.appendChild(this._indicateurZoom),this._boutonPointeur=document.querySelector("#boutonPointeur"),this._listeTools.push(document.querySelector("#boutonLien")),this._listeTools.push(document.querySelector("#boutonProbleme")),this._listeTools.push(document.querySelector("#boutonProcedure")),this._listeTools.push(document.querySelector("#boutonStructureSi")),this._listeTools.push(document.querySelector("#boutonStructureSwitch")),this._listeTools.push(document.querySelector("#boutonStructureIterative")),this._listeTools.push(document.querySelector("#boutonStructureIterativeBornee")),this._listeTools.push(document.querySelector("#boutonConditionSortie")),this._undoButton=document.querySelector("#boutonUndo"),this._redoButton=document.querySelector("#boutonRedo"),this._menuDeroulantFichier=document.querySelector("#menuDeroulantFichier"),this._menuDeroulantEdition=document.querySelector("#menuDeroulantEdition"),this._menuDeroulantAide=document.querySelector("#menuDeroulantAide"),this.querySelector("#titreAlgo").addEventListener("input",(a)=>{document.title="Algoforge - "+a.target.innerText}),setTimeout(()=>{document.title="Algoforge - "+this.querySelector("#titreAlgo").innerText},1000),this.querySelector("#titreAlgo").addEventListener("keydown",async(a)=>{if(a.key==="Enter"){if(a.preventDefault(),a.target.blur(),i())await n();a.target.nextElementSibling.classList.add("rotate"),a.target.nextElementSibling.classList.add("move-right-2"),setTimeout(()=>{a.target.nextElementSibling.classList.remove("rotate"),a.target.nextElementSibling.classList.remove("move-right-2")},500)}if(d)console.log(\`Le titre contient \${a.target.innerText.length} caractères sur \${this.MAX_CHAR_TITRE} autorisés.\`);if(a.target.innerText.length>=this.MAX_CHAR_TITRE&&a.key!=="Backspace"&&a.key!=="Delete"){if(d)console.log("Trop de caractères");a.preventDefault()}}),this.querySelector("#titreAlgo").nextElementSibling.addEventListener("click",(a)=>{a.target.previousElementSibling.focus()}),A())this._themeSelect.appendChild(new l.ThemeEditeur("VS Code","#1e1e1e","#252526","#3c3c3c","#cccccc","#cccccc55","#cccccc11","#9d9d9d","#89d185","#89d18599","#f48771","#cca700","#3794ff","var(--vscode-font-family, sans-serif)","","#3c3c3c","#252526","#ffffff","#6f6f6f",0));this._themeSelect.appendChild(new l.ThemeEditeur("Thème Pacifique","#F2F5F8","#E5EAF0","#BECBDA","#0C3245","#BECBDA55","#BECBDA11","#33475C","#8ABE5E","#8ABE5E99","#D85959","#FFAD5A","#1C719C","Roboto, sans-serif","","#bdc6c9","#F2F5F870","#134D67","#7E7D73",211)),this._themeSelect.appendChild(new l.ThemeEditeur("Thème AlgoForge","#161e27","#0f141a","#838787","#F2FBFF","#83878755","#83878711","#A6AAA9","#D4E7C5","#D4E7C599","#FFA8A8","#FFD6AD","#34A5DA","Roboto, sans-serif","","#1f2b38","rgba(28,39,51,0.35)","#bdc6c9","rgba(166, 170, 169, .6)",225)),this._themeSelect.appendChild(new l.ThemeEditeur("Thème FlashBang","#FFFFFF","#FFFFFF","#000000","#000000","#00000055","#00000011","#000000","#00FF00","#00FF0099","#FF0000","#FFA300","#000000","Roboto, sans-serif","","#000000","#FFFFFF","#888888","#666666",0)),this._themeSelect.addEventListener("change",()=>{this._themeSelect.options[this._themeSelect.selectedIndex].appliquer()});let t=this.getCookie("theme");if(t)this._themeSelect.value=t;else if(A())this._themeSelect.value="VS Code";else this._themeSelect.selectedIndex=0;try{this._themeSelect.options[this._themeSelect.selectedIndex].appliquer()}catch(a){console.error("Le thème n'a pas pu être appliqué."),this._themeSelect.options[0].appliquer()}let i=()=>new URL(window.location.href).hash.startsWith("#/");this._logoAlgoForge.addEventListener("click",()=>{if(A()){qe("https://algoforge.fr/");return}let a=new URL(window.location.origin);a.pathname="/cloud/",window.open(a.toString(),"_self")});let n=async()=>{try{if(await o(),d)console.log("Algorithme sauvegardé avec succès !");this._derniereVersionSauvegardee=this._espacePrincipal.exporterEnJSON(),this._dernierTitreSauvegarde=this.querySelector("#titreAlgo").innerText,this._pingSauvegardeCloud.style.display="none"}catch(a){console.error("Erreur lors de la sauvegarde de l'algorithme :",a),alert("Erreur lors de la sauvegarde de l'algorithme.")}},r=async()=>{let m=new URL(window.location.href).hash;if(m.startsWith("#/")){let f=m.substring(2),v="",g=this.getCookie("authToken");if(!g){window.location.href="/cloud/";return}let y=await fetch(\`/\${f}\`,{method:"GET",headers:{Authorization:\`Bearer \${g}\`,"Content-Type":"application/json"}}),N=y.ok,te=await y.json();if(!N)throw Error(\`Impossible de créer l'algorithme: \${te.message}\`);let Te=JSON.stringify(te.data.sourceCode);this._espacePrincipal.chargerFichier(Te),this.querySelector("#titreAlgo").innerText=te.data.nom,this._derniereVersionSauvegardee=this._espacePrincipal.exporterEnJSON(),this._dernierTitreSauvegarde=this.querySelector("#titreAlgo").innerText}},o=async()=>{let m=new URL(window.location.href).hash;if(!m.startsWith("#/"))return;let f=m.substring(2),v={id:f,nom:this.querySelector("#titreAlgo").innerText,permsAlgorithme:[],sourceCode:Lt(this._espacePrincipal.exporterEnJSON())},g="",y=this.getCookie("authToken");if(!y){console.error("Vous devez être connecté pour accéder à cette page.");return}if(!(await fetch(\`\${g}/\${f}\`,{method:"PUT",headers:{Authorization:\`Bearer \${y}\`,"Content-Type":"application/json"},body:JSON.stringify(v)})).ok)throw Error(\`Impossible de modifier l'algorithme: \${responseData.message}\`)};if(new MutationObserver(()=>{if(!i())return;let a=this._espacePrincipal.exporterEnJSON(),m=this.querySelector("#titreAlgo").innerText;if(JSON.stringify(a)!==JSON.stringify(this._derniereVersionSauvegardee)||m!==this._dernierTitreSauvegarde)this._pingSauvegardeCloud.style.display="block";else this._pingSauvegardeCloud.style.display="none"}).observe(this._espacePrincipal,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),window.addEventListener("load",async()=>{if(i())this._boutonSauvegardeCloud.style.display="flex",this._pingSauvegardeCloud.style.display="block",this._boutonSauvegardeCloud.addEventListener("click",async()=>{await n()});await r()}),window.addEventListener("popstate",async()=>{location.reload()}),this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Nouveau",()=>{if(A()){me("new");return}if(d)console.log("Nouveau");if(new URL(window.location.href).hash.startsWith("#/")){window.open(window.location.href.split("#")[0],"_blank");return}window.open(window.location.href,"_blank")})),this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Ouvrir",()=>{if(A()){me("open");return}if(d)console.log("Ouvrir");var a=document.createElement("input");a.type="file",a.accept=".af,.algoforge,.json,.tbr,.xml",a.style.display="none",a.addEventListener("change",()=>{if(!a.files||a.files.length===0)return;let m=a.files[0];var f=new FileReader;f.onload=()=>{try{let v=m.name;if(d)console.log(m.size);if(m.size>5000000){alert("Le fichier est trop volumineux (maximum 5 MégaOctets).");return}let g=this.interpreterFichierAlgorithme(m.name,f.result),y=this.retirerExtensionNomFichier(v);if(g.nomAlgo)y=g.nomAlgo;if(!Array.from(this._espacePrincipal.children).some((te)=>te instanceof l.ElementGraphique)){if(this._espacePrincipal.chargerDepuisJSON(g.algo),this.querySelector("#titreAlgo").innerText=y,document.title="Algoforge - "+y,g.estTabulaRasa)requestAnimationFrame(()=>{this.prettifyPlanActif({enregistrerEvenement:!1})});return}this._transferInput.value=JSON.stringify(g.algo),this._transferNomFichier.value=y,this._transferSourceImport.value=g.estTabulaRasa?"tbr":"",this._transferForm.submit()}catch(v){alert(v instanceof Error?v.message:"Le fichier n'a pas été chargé correctement."),console.error(v)}},f.readAsText(m)}),a.click()})),this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Créer une copie",()=>{if(A()){me("saveAs");return}if(d)console.log("Créer une copie");this._transferInput.value=JSON.stringify(this._espacePrincipal.exporterEnJSON()),this._transferNomFichier.value=this.querySelector("#titreAlgo").innerText+" - copie",this._transferSourceImport.value="",this._transferForm.submit()})),!A())this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Partager",()=>{if(d)console.log("Partager");this._modaleNonImp.ouvrir()},!1)),this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Renommer",()=>{if(d)console.log("Renommer");let a=this.querySelector("#titreAlgo");a.focus(),this._menuDeroulantFichier.style.display="none",setTimeout(()=>{this._menuDeroulantFichier.style.display=""},2);let m=document.createRange();m.selectNodeContents(a);let f=window.getSelection();f.removeAllRanges(),f.addRange(m)}));let c=new l.ElementMenuCompose("Exporter",()=>{if(d)console.log("Exporter")});this._menuDeroulantFichier.ajouterElementMenu(c);let u=document.createElement("h3");u.innerText="Algorithme",c.ajouterElementMenu(u),c.ajouterElementMenu(new l.ElementMenu(".af",()=>{if(d)console.log("Exporter en .af");this.exporterJSON(Pe(this._espacePrincipal.exporterEnJSON()))}));let p=document.createElement("h3");p.innerText="Image",c.ajouterElementMenu(p),c.ajouterElementMenu(new l.ElementMenu(".png",()=>{if(d)console.log("Exporter en .png");let a=this.querySelectorAll("plan-travail"),m=this.querySelectorAll("sous-plan-travail");Array.from(a).concat(Array.from(m)).forEach((v,g)=>{setTimeout(()=>{this.exporterPNG(v)},g*1500)})},!0)),c.ajouterElementMenu(new l.ElementMenu(".jpg",()=>{if(d)console.log("Exporter en .jpg");let a=this.querySelectorAll("plan-travail"),m=this.querySelectorAll("sous-plan-travail");Array.from(a).concat(Array.from(m)).forEach((v,g)=>{setTimeout(()=>{this.exporterJPG(v)},g*1500)})},!0)),c.ajouterElementMenu(new l.ElementMenu(".svg",()=>{if(d)console.log("Exporter en .svg");this.exporterSVG(this._planActif)})),c.ajouterElementMenu(new l.ElementMenu(".pdf",()=>{if(A()){Re("PDF export is not available in VS Code yet.");return}window.print()}));let h=document.createElement("h3");h.innerText="Dictionnaire",c.ajouterElementMenu(h),c.ajouterElementMenu(new l.ElementMenu(".csv",()=>{if(d)console.log("Exporter en .csv");this._dictionnaireDesDonnees.exporter("csv")})),c.ajouterElementMenu(new l.ElementMenu(".md",()=>{if(d)console.log("Exporter en .md");this._dictionnaireDesDonnees.exporter("md")})),this._menuDeroulantFichier.ajouterElementMenu(new l.ElementMenu("Supprimer",()=>{if(d)console.log("Supprimer");this._modaleNonImp.ouvrir()},!1)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenu("Importer",()=>{if(d)console.log("Importer");this.importerJSON()})),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenu("Prettify",()=>{if(d)console.log("Prettify");this.prettifyPlanActif()})),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Annuler",()=>{if(d)console.log("Annuler");this.undo()},\`\${this._toucheMeta}Z\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Rétablir",()=>{if(d)console.log("Rétablir");this.redo()},\`\${this._toucheMeta}Y\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Couper",()=>{if(d)console.log("Couper");this.cut()},\`\${this._toucheMeta}X\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Copier",()=>{if(d)console.log("Copier");this.copy()},\`\${this._toucheMeta}C\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Coller",()=>{if(d)console.log("Coller");this._modaleNoPaste.ouvrir()},\`\${this._toucheMeta}V\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Sélectionner tout",()=>{if(d)console.log("Sélectionner tout");this.selectAll()},\`\${this._toucheMeta}A\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Supprimer",()=>{if(d)console.log("Supprimer");this.delete()},\`Suppr / \${this._toucheMeta}⌫\`)),this._menuDeroulantEdition.ajouterElementMenu(new l.ElementMenuKeyboardTip("Rechercher",()=>{if(d)console.log("Rechercher");this._modaleNonImp.ouvrir()},\`\${this._toucheMeta}F\`,!1)),this._menuDeroulantAide.ajouterElementMenu(new l.ElementMenu("Tutoriels",()=>{if(d)console.log("Tutoriels");qe("https://bing-chill-inc.github.io/wikiforge")})),this._menuDeroulantAide.ajouterElementMenu(new l.ElementMenu("Raccourcis clavier",()=>{if(d)console.log("Raccourcis clavier");this._modaleRaccourcisClavier.ouvrir()})),this._menuDeroulantAide.ajouterElementMenu(new l.ElementMenu("À propos",()=>{if(d)console.log("À propos");this._modaleAPropos.ouvrir()})),this._listeTools.forEach((a,m)=>{a.addEventListener("click",()=>{this.selectTool(m)})}),this._undoButton.addEventListener("click",()=>{this.undo()}),this._redoButton.addEventListener("click",()=>{this.redo()}),this._boutonPointeur.addEventListener("click",()=>{this.selectTool(-1)}),document.body.addEventListener("keydown",async(a)=>{if(console.log(a),(!document.activeElement.isContentEditable&&a.target.nodeName!=="INPUT"&&a.target.nodeName!=="TEXTAREA"||a.ctrlKey||a.metaKey)&&a.key==="Delete")a.preventDefault(),this.delete();if(!document.activeElement.isContentEditable&&a.target.nodeName!=="INPUT"&&a.target.nodeName!=="TEXTAREA")switch(a.key){case"ArrowUp":this._selection.moveAllSelectedElements(0,-1),a.preventDefault();break;case"ArrowDown":this._selection.moveAllSelectedElements(0,1),a.preventDefault();break;case"ArrowLeft":this._selection.moveAllSelectedElements(-1,0),a.preventDefault();break;case"ArrowRight":this._selection.moveAllSelectedElements(1,0),a.preventDefault();break}if(a.altKey&&!a.shiftKey&&!a.ctrlKey)switch(console.log(a),a.code){case"KeyB":if(a.preventDefault(),!this._bibliotheque._estOuvert)this._bibliotheque.ouvrir();else this._bibliotheque.fermer();break;case"KeyD":if(a.preventDefault(),!this._dictionnaireDesDonnees._estOuvert)this._dictionnaireDesDonnees.ouvrir();else this._dictionnaireDesDonnees.fermer();break}if((a.ctrlKey||a.metaKey)&&!a.shiftKey&&!a.altKey){switch(a.key){case"@":case"²":a.preventDefault(),this.selectTool(-1);break;case"1":case"&":a.preventDefault(),this.selectTool(0);break;case"2":case"é":a.preventDefault(),this.selectTool(1);break;case"3":case'"':a.preventDefault(),this.selectTool(2);break;case"4":case"'":a.preventDefault(),this.selectTool(3);break;case"5":case"(":a.preventDefault(),this.selectTool(4);break;case"6":case"§":a.preventDefault(),this.selectTool(5);break;case"7":case"è":a.preventDefault(),this.selectTool(6);break;case"8":case"!":a.preventDefault(),this.selectTool(7);break;default:break}if(!Ie()&&a.key.toLowerCase()==="z")a.preventDefault(),this.undo();if(!Ie()&&a.key.toLowerCase()==="y")a.preventDefault(),this.redo();if(a.key.toLowerCase()==="x")a.preventDefault(),this.cut();if(a.key.toLowerCase()==="s"){if(A()&&!Ie())a.preventDefault(),me("save");else if(i())a.preventDefault(),await n()}if(a.key.toLowerCase()==="c"){if(d)console.log("Ctrl + C",window.getSelection().toString());if(window.getSelection().toString().length==0)a.preventDefault(),this.copy()}if(a.key.toLowerCase()==="a"){if(document.activeElement.isContentEditable)return;a.preventDefault(),this.selectAll()}if(a.key==="Backspace"||a.key==="Delete")a.preventDefault(),this.delete();if(a.key.toLowerCase()==="f")a.preventDefault(),this.search();if(a.key==="+"||a.key==="=")a.preventDefault(),this._indicateurZoom.zoomIn();if(a.key==="-")a.preventDefault(),this._indicateurZoom.zoomOut()}}),document.body.addEventListener("wheel",(a)=>{if(a.ctrlKey||a.metaKey)if(a.preventDefault(),a.deltaY<0)this._indicateurZoom.zoomIn(0.01,!1);else this._indicateurZoom.zoomOut(0.01,!1)}),this.addEventListener("dragover",(a)=>{a.stopPropagation(),a.preventDefault()}),this.addEventListener("drop",(a)=>{a.stopPropagation(),a.preventDefault();try{let f=a.dataTransfer.getData("application/json");if(d)console.log("Dropped:",f);var m=JSON.parse(f);if(d)console.log(\`parsedData: \${m} et typeof parsedData: \${typeof m}\`);this._curMousePos={x:a.clientX/window.innerWidth*100/this._indicateurZoom._zoom,y:a.clientY/window.innerWidth*100/this._indicateurZoom._zoom};let v=6,g=(y)=>{if(d)console.log(\`parseFloat(elem.abscisse) + this._curMousePos.x + "vw" = \${parseFloat(y.abscisse)} + \${this._curMousePos.x} + "vw"
                            = \${parseFloat(y.abscisse)+this._curMousePos.x+"vw"}\`);if(d)console.log(\`parseFloat(elem.ordonnee) + this._curMousePos.y + "vw" = \${parseFloat(y.ordonnee)} + \${this._curMousePos.y} + "vw"
                            = \${parseFloat(y.ordonnee)+this._curMousePos.y+"vw"}\`);if(y.abscisse=parseFloat(y.abscisse)+this._curMousePos.x+"vw",y.ordonnee=parseFloat(y.ordonnee)+this._curMousePos.y-v+"vw",y.enfants)y.enfants.forEach((N)=>{g(N)});if(y.typeElement=="StructureSi"||y.typeElement=="StructureIterative")for(let N of y.conditions)N.enfants.forEach((te)=>{g(te)})};m.forEach((y)=>{g(y)}),this.chargerDepuisJSON(m)}catch(f){console.error("Le fichier n'a pas été chargé correctement."),console.error(f)}}),this.addEventListener("paste",(a)=>{if(a.stopPropagation(),d)console.log(a);if(d)console.log(a.clipboardData.getData("text/plain"));try{var m=JSON.parse(a.clipboardData.getData("text/plain"));let f=6,v=(g)=>{if(d)console.log(\`parseFloat(elem.abscisse) + this._curMousePos.x + "vw" = \${parseFloat(g.abscisse)} + \${this._curMousePos.x} + "vw"
                            = \${parseFloat(g.abscisse)+this._curMousePos.x+"vw"}\`);if(d)console.log(\`parseFloat(elem.ordonnee) + this._curMousePos.y + "vw" = \${parseFloat(g.ordonnee)} + \${this._curMousePos.y} + "vw"
                            = \${parseFloat(g.ordonnee)+this._curMousePos.y+"vw"}\`);if(g.abscisse=parseFloat(g.abscisse)+this._curMousePos.x+"vw",g.ordonnee=parseFloat(g.ordonnee)+this._curMousePos.y-f+"vw",g.enfants)g.enfants.forEach((y)=>{v(y)});if(g.typeElement=="StructureSi"||g.typeElement=="StructureIterative")for(let y of g.conditions)y.enfants.forEach((N)=>{v(N)})};m.forEach((g)=>{v(g)}),this.chargerDepuisJSON(m)}catch(f){console.error("Le fichier n'a pas été chargé correctement."),console.error(f)}}),this.addEventListener("click",(a)=>{if(a.stopPropagation(),this._clickSoundActivated){let v=this._clickSound.cloneNode();v.playbackRate=Math.random()*0.2+0.9,v.keep,v.play()}let m=document.querySelectorAll("menu-contextuel");for(let v=0;v<m.length;v++)m[v].remove();if(this._currentTool==null)return;if(d)console.log(a);let f=a.target;if(a.target.classList.contains("nonCiblable"))return;while(!(f instanceof l.ElementGraphique)&&!(f instanceof l.PlanTravail)&&!(f instanceof l.Condition)&&f!==null){if(f=f.parentElement,f===null)return;if(d)console.log(f);if(d)console.log(f.classList);if(d)console.log(f.classList.contains("nonCiblable"));if(f.classList.contains("nonCiblable"))return}if(d)console.log(f);if(f instanceof l.PlanTravail){if(d)console.log("Clic sur le plan de travail");if(d)console.log("currentTool = "+this._currentTool+" et typesElements.length = "+this._typesElements.length);if(this._currentTool!==null&&this._currentTool<this._typesElements.length&&this._currentTool>=0){let v=this._typesElements[this._currentTool];if(d)console.log("Création d'un élément de type "+v.name);let g=f.ajouterElement(v,a.offsetX,a.offsetY,!1);if(g instanceof l.StructureIterativeBornee)g.inviteBornes(),this.querySelector("invite-bornes-pour-si > input").focus()}if(this._currentTool===0){if(d)console.log("Clic sur le plan de travail avec l'outil lien");if(this._pointePrecedementLien!==null)this._pointePrecedementLien.classList.remove("pointePourLien"),this._pointePrecedementLien=null}}else if(f instanceof l.ElementGraphique||f instanceof l.Condition){if(d)console.log("Clic sur un élément graphique");if(this._currentTool===0)if(this._pointePrecedementLien===null){if(d)console.log("Premier clic sur un élément, on le pointe sil peut être décomposé");if(f.peutEtreDecompose()){if(this._pointePrecedementLien=f,f.classList.add("pointePourLien"),d)console.log("On pointe l'élément "+this._pointePrecedementLien.constructor.name)}}else{if(this._pointePrecedementLien==f){this._pointePrecedementLien.classList.remove("pointePourLien"),this._pointePrecedementLien=null;return}if(this._pointePrecedementLien instanceof l.Condition&&f instanceof l.Condition){if(this._pointePrecedementLien._structure==f._structure){this._pointePrecedementLien.classList.remove("pointePourLien"),this._pointePrecedementLien=f,f.classList.add("pointePourLien");return}}if(d)console.log(\`this._pointePrecedementLien._ordonnee=\${this._pointePrecedementLien._ordonnee} et maTarget._ordonnee=\${f._ordonnee}\`);let v,g;if(parseFloat(this._pointePrecedementLien._ordonnee)<parseFloat(f._ordonnee))v=this._pointePrecedementLien,g=f;else v=f,g=this._pointePrecedementLien;if(g instanceof l.Condition)g=g._structure;if(v._elemParent.lierEnfant(g),!a.shiftKey)this._pointePrecedementLien.classList.remove("pointePourLien"),this._pointePrecedementLien=null}}}),this.addEventListener("mousedown",function(a){a.stopPropagation();let m=a.target;if(a.button===1){a.preventDefault(),this._isMoving=!0,this._lastPosX=a.clientX,this._lastPosY=a.clientY;return}while(!(m instanceof l.ElementGraphique)&&!(m instanceof l.PlanTravail)&&!(m instanceof l.Condition)&&m!==null){if(m=m.parentElement,m===null)return;if(d)console.log(m);if(d)console.log(m.classList);if(d)console.log(m.classList.contains("nonCiblable"));if(m.classList.contains("nonCiblable"))return}if(m instanceof l.Condition)m=m._structure;if(!a.shiftKey&&!this._selection.estSelectionne(m)){if(d)console.log("Pas de shift, on désélectionne tout");this._selection.deselectionnerTout()}if(m instanceof l.ElementGraphique&&!this._selection.estSelectionne(m)&&this._currentTool!=0){if(d)console.log("Sélection d'un élément graphique");this._selection.selectionnerElement(m)}else if(a.shiftKey&&this._selection.estSelectionne(m))this._selection.deselectionnerElement(m);if(d)console.log(\`this._currentTool = \${this._currentTool}\`);if(m instanceof l.PlanTravail&&this._currentTool==-1){if(d)console.log("event 1");this._isSelecting=!0,this._coordonneesSelection.x=this._curMousePos.x/100*window.innerWidth,this._coordonneesSelection.y=this._curMousePos.y/100*window.innerWidth}else{if(d)console.log("event 2");this._isDragging=!0,this._lastPosX=a.clientX,this._lastPosY=a.clientY,this._evenementDeplacement=new l.EvenementDeplacementElementMultiples;for(let f of this._selection.getElementsSelectionnes())this._evenementDeplacement.ajouterElementDeplace(new l.EvenementDeplacementElement(f))}}),this.addEventListener("mouseup",function(a){if(a.stopPropagation(),this._evenementDeplacement!=null){if(this._evenementDeplacement.estDecale()&&this._isDragging)this.ajouterEvenement(this._evenementDeplacement)}this._isDragging=!1,this._isSelecting=!1,this._isMoving=!1;let m=this._selectionRectangle.listerElementsGraphiques();for(let f of m)this._selection.selectionnerElement(f);this._selectionRectangle.placer(-10,0,-10,0)}),this.addEventListener("mousemove",function(a){if(a.stopPropagation(),this._isMoving){if(a.clientX-this._lastPosX>100||a.clientX-this._lastPosX<-100){this._lastPosX=a.clientX,this._lastPosY=a.clientY;return}if(a.clientY-this._lastPosY>100||a.clientY-this._lastPosY<-100){this._lastPosX=a.clientX,this._lastPosY=a.clientY;return}this._planActif.scrollLeft-=a.clientX-this._lastPosX,this._planActif.scrollTop-=a.clientY-this._lastPosY,this._lastPosX=a.clientX,this._lastPosY=a.clientY;return}if(this._curMousePos={x:(a.clientX+this._planActif.scrollLeft)/window.innerWidth*100/this._indicateurZoom._zoom,y:(a.clientY+this._planActif.scrollTop)/window.innerWidth*100/this._indicateurZoom._zoom},d)console.info(\`mousemove avec \${this._isDragging}\`);if(d)console.info(this._curMousePos);if(this._isDragging){let{clientX:m,clientY:f}=a,v=m-this._lastPosX,g=f-this._lastPosY,y=v/window.innerWidth*100/parseFloat(document.body.style.getPropertyValue("--sizeModifier")),N=g/window.innerWidth*100/parseFloat(document.body.style.getPropertyValue("--sizeModifier"));if(this._selection.moveAllSelectedElements(y,N),d)console.log(\`Déplacement de la sélection de \${y}vw en abscisse et de \${N}vw en ordonnée\`);this._lastPosX=a.clientX,this._lastPosY=a.clientY}else{let m=1e6,f=null,v={x:a.clientX/window.innerWidth*100,y:a.clientY/window.innerWidth*100};v.x/=parseFloat(document.body.style.getPropertyValue("--sizeModifier")),v.y/=parseFloat(document.body.style.getPropertyValue("--sizeModifier")),v.x+=this._planActif.scrollLeft/window.innerWidth*100,v.y+=this._planActif.scrollTop/window.innerWidth*100;for(let g of this._planActif.trouverToutLesElementsGraphiques()){let y=g.getCentre(),N=Math.sqrt((v.x-y.x)**2+(v.y-y.y)**2);if(N<m)m=N,f=g}if(d)console.info(f);if(f!=this._ancienPlusProche&&f!=null)f.parentNode.appendChild(f),this._ancienPlusProche=f}if(this._isSelecting){let m=this._curMousePos.x/100*window.innerWidth-this._planActif.getBoundingClientRect().left/this._indicateurZoom._zoom,f=this._curMousePos.y/100*window.innerWidth-this._planActif.getBoundingClientRect().top/this._indicateurZoom._zoom,v=m/window.innerWidth*100,g=f/window.innerWidth*100,y=(this._coordonneesSelection.x-this._planActif.getBoundingClientRect().left/this._indicateurZoom._zoom)/window.innerWidth*100,N=(this._coordonneesSelection.y-this._planActif.getBoundingClientRect().top/this._indicateurZoom._zoom)/window.innerWidth*100;this._selectionRectangle.placer(v,g,y,N)}}),this.addEventListener("contextmenu",function(a){a.stopPropagation(),a.preventDefault();let{clientX:m,clientY:f}=a;m=m/window.innerWidth*100,f=f/window.innerWidth*100,this.appendChild(new l.MenuContextuel(m,f,this._selection,a.target))}),window.onbeforeprint=()=>{document.body.style.setProperty("--sizeModifier",1)},window.onafterprint=()=>{document.body.style.setProperty("--sizeModifier",this._indicateurZoom._zoom)}}serializeDocument(){return this._espacePrincipal?.exporterEnJSON()??[]}replaceDocument(e){let t=this.serializeDocument();this._suspendDocumentEvents=!0;try{this.resetDocumentForHydration(),this._espacePrincipal.chargerDepuisJSON(e,!1),this._pileAnnuler=[],this._pileRétablir=[]}catch(i){throw this.resetDocumentForHydration(),this._espacePrincipal.chargerDepuisJSON(t,!1),this._pileAnnuler=[],this._pileRétablir=[],i}finally{this._suspendDocumentEvents=!1}this.notifyDocumentChange("hydration")}applyDocumentSnapshot(e){this._suspendDocumentEvents=!0;try{this.resetDocumentForHydration(),this._espacePrincipal.chargerDepuisJSON(e,!1)}finally{this._suspendDocumentEvents=!1}}resetDocumentForHydration(){this._selection.deselectionnerTout(),this.querySelectorAll("sous-plan-travail").forEach((e)=>{if(typeof e.fermer==="function")e.fermer();e.remove()}),this.querySelectorAll(".sous-titre").forEach((e)=>e.remove()),this._espacePrincipal.append(this._selection,this._selectionRectangle),this._planActif=this._espacePrincipal;for(let e of Array.from(this._espacePrincipal.children).reverse())if(e instanceof l.ElementGraphique)e.supprimer();this._espacePrincipal.querySelectorAll("ligne-element, symbole-decomposition-element, invite-bornes-pour-si").forEach((e)=>e.remove()),this._dictionnaireDesDonnees.suppressionTout(),this._dictionnaireDesDonnees.chargerDepuisJSON({types:{},signification:{}})}setCookie(e,t,i){if(A()&&e==="elementsPersonnalises"){qi(JSON.parse(t));return}if(A()&&(e==="theme"||e==="glow")){ki(e,e==="glow"?t==="true":t);return}if(A())return;let n=new Date;n.setTime(n.getTime()+i*24*60*60*1000);let r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/;SameSite=Lax"}getCookie(e){if(A()){if(e==="elementsPersonnalises"){let r=Fi();return r.length>0?JSON.stringify(r):""}return""}let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let r=0;r<n.length;r++){let o=n[r];while(o.charAt(0)==" ")o=o.substring(1);if(o.indexOf(t)==0)return o.substring(t.length,o.length)}return""}chargerDepuisJSON(e){this.ajouterEvenement(new l.EvenementPlaceholder);let t=this._planActif.chargerDepuisJSON(e),i=new l.EvenementComposite,n=this._pileAnnuler.length-1;while(n>=0&&!(this._pileAnnuler[n]instanceof l.EvenementPlaceholder))i.ajouterEvenement(this._pileAnnuler[n]),this._pileAnnuler.pop(),n--;this._pileAnnuler.pop(),this.ajouterEvenement(i),this._selection.deselectionnerTout();for(let r of t)this._selection.selectionnerArbre(r);if(t.length==1&&t[0]instanceof l.StructureIterativeBornee)t[0].inviteBornes()}selectTool(e){this._currentTool=e,this._listeTools.forEach((n)=>{n.classList.remove("selected"),this._boutonPointeur.classList.remove("selected")});let t=document.querySelector("plan-travail"),i=document.querySelectorAll("sous-plan-travail");if(e!=-1){this._listeTools[e].classList.add("selected");let n=this._listeTools[e].dataset.assetUrl??this._listeTools[e].src,r=He(n.replace(".svg","Cursor.svg")),o="",s;switch(e){case 0:s=\`url(\${r+o}) 20 6, auto\`;break;case 1:case 2:s=\`url(\${r+o}) 10 6, auto\`;break;case 3:case 4:s=\`url(\${r+o}) 14 6, auto\`;break;case 5:s=\`url(\${r+o}) 16 6, auto\`;break;case 6:s=\`url(\${r+o}) 13 6, auto\`;break;case 7:s=\`url(\${r+o}) 22 6, auto\`;break;default:s=\`url(\${r+o}), auto\`;break}t.style.cursor=s,i.forEach((c)=>{c.style.cursor=s})}else{this._boutonPointeur.classList.add("selected");let n=this._boutonPointeur.dataset.assetUrl,r=n?\`url(\${He(n)}), auto\`:"auto";t.style.cursor=r,i.forEach((o)=>{o.style.cursor=r})}if(e!=0&&this._pointePrecedementLien!=null)this._pointePrecedementLien.classList.remove("pointePourLien"),this._pointePrecedementLien=null}undo(){if(Ie()){me("undo");return}this.annuler()}redo(){if(Ie()){me("redo");return}this.retablir()}cut(){if(d)console.log("cut");this.copy(),this.delete()}copy(e=!0){if(d)console.log("copy");let t=[],i=this._selection.getElementsSelectionnes();for(let n of i){if(d)console.log(n._parent);if(d&&n._parent)console.log(i.indexOf(n._parent._proprietaire));if(n._parent==null||i.indexOf(n._parent._proprietaire)==-1){if(d)console.log(n);t.push(n.toJSONspecifier(i))}}if(e){let n=this._selection.coin("center");if(d)console.log(n);n.x=n.x/window.innerWidth*100,n.y=n.y/window.innerWidth*100;let r=(o)=>{if(d)console.log(\`parseFloat(elem.abscisse) - coinSupGauche.x + "vw" = \${parseFloat(o.abscisse)} - \${n.x} + "vw"
                        = \${parseFloat(o.abscisse)-n.x+"vw"}\`);if(d)console.log(\`parseFloat(elem.ordonnee) - coinSupGauche.y + "vw" = \${parseFloat(o.ordonnee)} - \${n.y} + "vw"
                        = \${parseFloat(o.ordonnee)-n.y+"vw"}\`);if(o.abscisse=parseFloat(o.abscisse)-n.x+"vw",o.ordonnee=parseFloat(o.ordonnee)-n.y+"vw",o.enfants)o.enfants.forEach((s)=>{r(s)});if(o.typeElement=="StructureSi"||o.typeElement=="StructureIterative")for(let s of o.conditions)s.enfants.forEach((c)=>{r(c)})};t.forEach((o)=>{r(o)})}if(d)console.log(t);if(e)Ni(JSON.stringify(t));return JSON.stringify(t)}async paste(){if(d)console.log("paste");try{var e=JSON.parse(await Ii());let t=(i)=>{if(d)console.log(\`parseFloat(elem.abscisse) + this._curMousePos.x + "vw" = \${parseFloat(i.abscisse)} + \${this._curMousePos.x} + "vw"
                        = \${parseFloat(i.abscisse)+this._curMousePos.x+"vw"}\`);if(d)console.log(\`parseFloat(elem.ordonnee) + this._curMousePos.y + "vw" = \${parseFloat(i.ordonnee)} + \${this._curMousePos.y} + "vw"
                        = \${parseFloat(i.ordonnee)+this._curMousePos.y+"vw"}\`);if(i.abscisse=parseFloat(i.abscisse)+this._curMousePos.x+"vw",i.ordonnee=parseFloat(i.ordonnee)+this._curMousePos.y+"vw",i.enfants)i.enfants.forEach((n)=>{t(n)});if(i.typeElement=="StructureSi"||i.typeElement=="StructureIterative")for(let n of i.conditions)n.enfants.forEach((r)=>{t(r)})};e.forEach((i)=>{t(i)}),this.chargerDepuisJSON(e)}catch(t){console.error("Le fichier n'est pas au format JSON.")}}selectAll(){if(d)console.log("selectAll");for(let e of this._planActif.trouverToutLesElementsGraphiques())if(e instanceof l.ElementGraphique)this._selection.selectionnerElement(e)}delete(){if(d)console.log("delete");this._selection.supprimerTout()}exporterJSON(e){if(typeof e==="string"&&_e(this.querySelector("#titreAlgo").innerText+".af","application/json",e))return;var t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),n=document.createElement("a");n.href=i,n.download=\`\${this.querySelector("#titreAlgo").innerText}.af\`,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(i),100)}ajouterEvenement(e){if(this._suspendDocumentEvents)return;this._pileAnnuler.push(e),this._pileRétablir=[],we(),this.notifyDocumentChange("commit")}annuler(){if(this._pileAnnuler.length>0){let e=this._pileAnnuler.pop();if(e.annuler(),this._pileRétablir.push(e),!this._suspendDocumentEvents)we(),this.notifyDocumentChange("undo")}}retablir(){if(this._pileRétablir.length>0){let e=this._pileRétablir.pop();if(e.retablir(),this._pileAnnuler.push(e),!this._suspendDocumentEvents)we(),this.notifyDocumentChange("redo")}}notifyDocumentChange(e="commit"){this.dispatchEvent(new CustomEvent("algoforge:document-change",{detail:{source:e}}))}retirerExtensionNomFichier(e){let t=e.lastIndexOf(".");if(t<=0)return e;return e.substring(0,t)}nettoyerTexteImporte(e){if(typeof e!=="string")return"";return e.replace(/\\r\\n/g,\`
\`).trim()}nettoyerAssertionTbr(e){let t=this.nettoyerTexteImporte(e);return t==="?"?"":t}estFichierTabulaRasa(e,t){if((e||"").toLowerCase().endsWith(".tbr"))return!0;if(typeof t!=="string")return!1;if(!t.trimStart().startsWith("<"))return!1;return/<\\s*Algorithme[\\s>]/i.test(t)&&/<\\s*Elements[\\s>]/i.test(t)}interpreterFichierAlgorithme(e,t){if(this.estFichierTabulaRasa(e,t))return this.convertirTabulaRasaEnAlgoForge(t);let i=JSON.parse(t);if(typeof i==="string")i=JSON.parse(i);return{algo:ze(i).algorithm,nomAlgo:"",estTabulaRasa:!1}}convertirPxTbrEnVw(e){let t=Math.max(window.innerWidth||1,1);return\`\${e/t*100}vw\`}extrairePositionTbr(e){let t=this.nettoyerTexteImporte(this.getTexteEnfantDirect(e,"Position","0;0")),[i="0",n="0"]=t.split(";"),r=parseFloat(i.replace(",",".")),o=parseFloat(n.replace(",","."));return{abscisse:this.convertirPxTbrEnVw(isNaN(r)?0:r),ordonnee:this.convertirPxTbrEnVw(isNaN(o)?0:o)}}trouverEnfantDirect(e,t){if(!e)return null;for(let i of e.children)if(i.tagName===t)return i;return null}getTexteEnfantDirect(e,t,i=""){let n=this.trouverEnfantDirect(e,t);if(!n)return i;return n.textContent??i}interpreterTitreIterationBornee(e){let t=this.nettoyerTexteImporte(e).replace(/\\s+/g," "),i={variableAIterer:"i",borneInferieure:"BORNE_INF",borneSuperieure:"BORNE_SUP",pas:"1",croissant:!0};if(!t)return i;let n=t.match(/^pour\\s+(.+?)\\s+allant\\s+de\\s+(.+?)\\s+[aà]\\s+(.+)$/i);if(!n)n=t.match(/^pour\\s+(.+?)\\s+de\\s+(.+?)\\s+[aà]\\s+(.+)$/i);if(n){let s=n[1].trim(),c=n[2].trim(),u=n[3].trim(),p=parseFloat(c),h=parseFloat(u),a=isNaN(p)||isNaN(h)?!0:h>=p;return{variableAIterer:s||i.variableAIterer,borneInferieure:c||i.borneInferieure,borneSuperieure:u||i.borneSuperieure,pas:"1",croissant:a}}let r=t.match(/^pour\\s+(.+?)\\s+[aà]\\s+la\\s+taille\\s+de\\s+(.+)$/i);if(r)return{variableAIterer:r[1].trim()||"i",borneInferieure:"0",borneSuperieure:\`taille(\${r[2].trim()})\`,pas:"1",croissant:!0};let o=t.match(/^pour\\s+([^\\s]+)/i);if(o)i.variableAIterer=o[1].trim()||"i";return i}convertirOperationsTbr(e){let t=[],i=this.trouverEnfantDirect(e,"operationsLogiques");if(!i)return t;for(let n of i.children){if(n.tagName!=="operation")continue;t.push({typeElement:"Condition",libelle:this.nettoyerTexteImporte(this.getTexteEnfantDirect(n,"Titre","")),enfants:this.convertirEnfantsTbr(this.trouverEnfantDirect(n,"Enfants"))})}return t}convertirNoeudTbr(e){let t=this.extrairePositionTbr(e);switch(e.tagName){case"Action":return{typeElement:"Probleme",abscisse:t.abscisse,ordonnee:t.ordonnee,libelle:this.nettoyerTexteImporte(this.getTexteEnfantDirect(e,"Titre","")),listeDonnes:[this.nettoyerAssertionTbr(this.getTexteEnfantDirect(e,"PreAssertion",""))],listeResultats:[this.nettoyerAssertionTbr(this.getTexteEnfantDirect(e,"PostAssertion",""))],enfants:this.convertirEnfantsTbr(this.trouverEnfantDirect(e,"Enfants"))};case"Condition":return{typeElement:"StructureSi",abscisse:t.abscisse,ordonnee:t.ordonnee,conditions:this.convertirOperationsTbr(e)};case"ConditionMultiple":return{typeElement:"StructureSwitch",abscisse:t.abscisse,ordonnee:t.ordonnee,expressionATester:this.nettoyerTexteImporte(this.getTexteEnfantDirect(e,"Titre","")),conditions:this.convertirOperationsTbr(e)};case"Iteration":{let i=this.nettoyerTexteImporte(this.getTexteEnfantDirect(e,"IterationFixe","0"))==="1",n=this.convertirEnfantsTbr(this.trouverEnfantDirect(e,"Enfants"));if(!i)return{typeElement:"StructureIterativeNonBornee",abscisse:t.abscisse,ordonnee:t.ordonnee,enfants:n};let r=this.interpreterTitreIterationBornee(this.getTexteEnfantDirect(e,"Titre",""));return{typeElement:"StructureIterativeBornee",abscisse:t.abscisse,ordonnee:t.ordonnee,variableAIterer:r.variableAIterer,borneInferieure:r.borneInferieure,borneSuperieure:r.borneSuperieure,pas:r.pas,croissant:r.croissant,enfants:n}}case"Sortie":return{typeElement:"ConditionSortie",abscisse:t.abscisse,ordonnee:t.ordonnee};default:return null}}convertirEnfantsTbr(e){if(!e)return[];let t=[];for(let i of e.children){let n=this.convertirNoeudTbr(i);if(n)t.push(n)}return t}obtenirEnfantsElementParentDansOrdre(e){if(!e||!Array.isArray(e._listeElementsEnfants))return[];return e._listeElementsEnfants.map((t)=>t.element).filter((t)=>t instanceof l.ElementGraphique)}creerNoeudMiseEnPageDepuisElement(e){let t={typeElement:e.constructor.typeElement,abscisse:e._abscisse,ordonnee:e._ordonnee,__elementReference:e};if(e instanceof l.Probleme)t.listeDonnes=Array.isArray(e.listeDonnes)?[...e.listeDonnes]:[],t.listeResultats=Array.isArray(e.listeResultats)?[...e.listeResultats]:[];if(e instanceof l.StructureAlternative){t.conditions=[];for(let i of Array.from(e._listeConditions.children))t.conditions.push({__conditionElementReference:i,enfants:this.creerForetMiseEnPageDepuisElements(this.obtenirEnfantsElementParentDansOrdre(i._elemParent))});return t}if(e._elemParent)t.enfants=this.creerForetMiseEnPageDepuisElements(this.obtenirEnfantsElementParentDansOrdre(e._elemParent));return t}creerForetMiseEnPageDepuisElements(e){let t=[];for(let i of e)t.push(this.creerNoeudMiseEnPageDepuisElement(i));return t}creerForetMiseEnPageDepuisPlan(e){if(!e)return[];let t=Array.from(e.children).filter((i)=>i instanceof l.ElementGraphique&&i._parent==null);return this.creerForetMiseEnPageDepuisElements(t)}collecterDeplacementsNoeudMiseEnPage(e,t){if(e?.__elementReference instanceof l.ElementGraphique)t.push({element:e.__elementReference,anciennePos:[e.__elementReference._abscisse,e.__elementReference._ordonnee],nouvellePos:[e.abscisse,e.ordonnee]});if(Array.isArray(e?.enfants))this.collecterDeplacementsForetMiseEnPage(e.enfants,t);if(Array.isArray(e?.conditions)){for(let i of e.conditions)if(Array.isArray(i?.enfants))this.collecterDeplacementsForetMiseEnPage(i.enfants,t)}}collecterDeplacementsForetMiseEnPage(e,t){for(let i of e)this.collecterDeplacementsNoeudMiseEnPage(i,t)}prettifyPlanActif(e={}){let t=e.enregistrerEvenement??!0,i=this.creerForetMiseEnPageDepuisPlan(this._planActif);if(i.length===0)return;this.reorganiserDispositionAlgoV2(i);let n=[];this.collecterDeplacementsForetMiseEnPage(i,n);let r=new l.EvenementDispositionAutomatique(n);if(!r.estDecale())return;if(r.retablir(),t)this.ajouterEvenement(r)}obtenirHauteurReferenceNoeudMiseEnPage(e){switch(e){case"Probleme":case"Procedure":return 4.75;case"StructureSi":case"StructureSwitch":return 4;case"StructureIterativeBornee":case"StructureIterativeNonBornee":return 4;case"ConditionSortie":return 4;default:return 4}}obtenirLargeurReferenceNoeudMiseEnPage(e){switch(e){case"Probleme":case"Procedure":return 30;case"StructureSi":return 12;case"StructureSwitch":return 14;case"StructureIterativeBornee":return 10;case"StructureIterativeNonBornee":return 8;case"ConditionSortie":return 6;default:return 12}}obtenirLargeurElementEnVw(e){if(!(e instanceof HTMLElement))return 0;let t=e.getBoundingClientRect();if(!t||!isFinite(t.width)||t.width<=0)return 0;let i=t.width/Math.max(window.innerWidth||1,1)*100,n=parseFloat(document.body.style.getPropertyValue("--sizeModifier"))||1;return i/Math.max(n,0.001)}obtenirHauteurElementEnVw(e){if(!(e instanceof HTMLElement))return 0;let t=e.getBoundingClientRect();if(!t||!isFinite(t.height)||t.height<=0)return 0;let i=t.height/Math.max(window.innerWidth||1,1)*100,n=parseFloat(document.body.style.getPropertyValue("--sizeModifier"))||1;return i/Math.max(n,0.001)}obtenirLargeurEnteteConditionV2(e,t){let i=e?.__conditionElementReference,n=this.obtenirLargeurElementEnVw(i);if(n>0)return Math.max(t.largeurMinBrancheCondition,n*t.facteurLargeurEnteteCondition+t.margeEnteteCondition);return t.largeurMinBrancheCondition}obtenirCoefficientLargeurProblemeV2(e){let t=this.listeProblemeEstVide(e?.listeDonnes),i=this.listeProblemeEstVide(e?.listeResultats);if(t&&i)return 0.5;if(t||i)return 0.75;return 1}obtenirDimensionsNoeudMiseEnPageV2(e,t){let i=this.obtenirLargeurReferenceNoeudMiseEnPage(e.typeElement),n=this.obtenirHauteurReferenceNoeudMiseEnPage(e.typeElement),r=e?.__elementReference,o=this.obtenirLargeurElementEnVw(r),s=this.obtenirHauteurElementEnVw(r),c=o>0?o:i,u=s>0?s:n,p=t.facteurLargeurGeneral;if(e.typeElement==="ConditionSortie")return{largeur:t.largeurConstanteSortie,hauteur:Math.max(t.hauteurMinNoeud,u)};else if(e.typeElement==="Probleme"||e.typeElement==="Procedure")p=t.facteurLargeurProbleme*this.obtenirCoefficientLargeurProblemeV2(e);let h=Math.max(t.largeurMinNoeud,c*p+t.margeNoeud),a=Math.max(t.hauteurMinNoeud,u);return{largeur:h,hauteur:a}}calculerMiseEnPageForetV2(e,t){if(!Array.isArray(e)||e.length===0)return 0;let i=0;for(let n=0;n<e.length;n++){let r=this.calculerMiseEnPageNoeudV2(e[n],t);if(i+=r.largeurSousArbre,n<e.length-1)i+=t.ecartHorizontal}return i}calculerMiseEnPageNoeudV2(e,t){if(e?.__layoutV2)return e.__layoutV2;let i=this.obtenirDimensionsNoeudMiseEnPageV2(e,t);if(e.typeElement==="StructureSi"||e.typeElement==="StructureSwitch"){let r=Array.isArray(e.conditions)?e.conditions:[],o=0;for(let s=0;s<r.length;s++){let c=r[s];c.__largeurForetEnfantsV2=this.calculerMiseEnPageForetV2(c.enfants,t);let u=this.obtenirLargeurEnteteConditionV2(c,t);if(c.__largeurBrancheV2=Math.max(t.largeurMinBrancheCondition,u,c.__largeurForetEnfantsV2),o+=c.__largeurBrancheV2,s<r.length-1)o+=t.ecartHorizontalConditions}return e.__layoutV2={type:"conditions",largeurNoeud:i.largeur,hauteurNoeud:i.hauteur,largeurSousArbre:Math.max(i.largeur,o),largeurConditions:o},e.__layoutV2}let n=this.calculerMiseEnPageForetV2(e.enfants,t);return e.__layoutV2={type:"enfants",largeurNoeud:i.largeur,hauteurNoeud:i.hauteur,largeurSousArbre:Math.max(i.largeur,n),largeurEnfants:n},e.__layoutV2}appliquerMiseEnPageForetV2(e,t,i,n){if(!Array.isArray(e)||e.length===0)return;let r=t;for(let o=0;o<e.length;o++){let s=e[o],c=this.calculerMiseEnPageNoeudV2(s,n);this.appliquerMiseEnPageNoeudV2(s,r,i,n),r+=c.largeurSousArbre+n.ecartHorizontal}}appliquerMiseEnPageNoeudV2(e,t,i,n){let r=this.calculerMiseEnPageNoeudV2(e,n),o=t+(r.largeurSousArbre-r.largeurNoeud)/2;e.abscisse=\`\${o}vw\`,e.ordonnee=\`\${i}vw\`;let s=i+n.ecartVertical;if(r.type==="enfants"){if(r.largeurEnfants<=0)return;let c=Array.isArray(e.enfants)?e.enfants:[];if(c.length===1){let p=c[0],h=this.calculerMiseEnPageNoeudV2(p,n),a=t+(r.largeurSousArbre-h.largeurSousArbre)/2;this.appliquerMiseEnPageNoeudV2(p,a,s,n);return}let u=t+(r.largeurSousArbre-r.largeurEnfants)/2;this.appliquerMiseEnPageForetV2(c,u,s,n);return}if(r.type==="conditions"){if(r.largeurConditions<=0)return;let c=t+(r.largeurSousArbre-r.largeurConditions)/2,u=Array.isArray(e.conditions)?e.conditions:[];for(let p of u){let h=p.__largeurBrancheV2||0,a=p.__largeurForetEnfantsV2||0;p.__centreBrancheV2=c+h/2;let m=Array.isArray(p.enfants)?p.enfants:[];if(a>0&&m.length>0)if(m.length===1){let f=m[0],v=this.calculerMiseEnPageNoeudV2(f,n),g=c+(h-v.largeurSousArbre)/2;this.appliquerMiseEnPageNoeudV2(f,g,s,n)}else{let f=c+(h-a)/2;this.appliquerMiseEnPageForetV2(m,f,s,n)}c+=h+n.ecartHorizontalConditions}}}obtenirLargeurEmpreinteNoeudV2(e,t,i=!1){if(e?.typeElement==="ConditionSortie"){if(i)return Math.max(t.largeurMinEmpreinteNoeud,t.largeurConstanteSortie);return Math.max(t.largeurMinEmpreinteNoeud,t.largeurEmpreinteSortieConstante)}let n=this.obtenirLargeurElementEnVw(e?.__elementReference);if(n>0){if(i)return Math.max(t.largeurMinEmpreinteNoeud,n);if(e?.typeElement==="Probleme"||e?.typeElement==="Procedure"){let o=this.obtenirCoefficientLargeurProblemeV2(e),s=o<=0.5?t.facteurEmpreinteProblemeSansDR:o<1?t.facteurEmpreinteProblemePartiel:t.facteurEmpreinteProbleme;return Math.max(t.largeurMinEmpreinteNoeud,n*s)}return Math.max(t.largeurMinEmpreinteNoeud,n*t.facteurEmpreinteGeneral)}let r=e?.__layoutV2;if(r?.largeurNoeud){if(i)return Math.max(t.largeurMinEmpreinteNoeud,r.largeurNoeud);return Math.max(t.largeurMinEmpreinteNoeud,r.largeurNoeud)}return t.largeurMinEmpreinteNoeud}calculerBornesNoeudV2(e,t,i=!1){if(!e)return{minX:1/0,maxX:-1/0};let n=this.calculerMiseEnPageNoeudV2(e,t),o=parseFloat(e.abscisse)+n.largeurNoeud/2,s=this.obtenirLargeurEmpreinteNoeudV2(e,t,i);return{minX:o-s/2,maxX:o+s/2}}calculerBornesSousArbreV2(e,t,i=!1){if(!e)return{minX:1/0,maxX:-1/0};let n=this.calculerBornesNoeudV2(e,t,i),{minX:r,maxX:o}=n;if(Array.isArray(e?.enfants))for(let s of e.enfants){let c=this.calculerBornesSousArbreV2(s,t,i);r=Math.min(r,c.minX),o=Math.max(o,c.maxX)}if(Array.isArray(e?.conditions))for(let s of e.conditions){if(Array.isArray(s?.enfants))for(let u of s.enfants){let p=this.calculerBornesSousArbreV2(u,t,i);r=Math.min(r,p.minX),o=Math.max(o,p.maxX)}let c=s?.__centreBrancheV2;if(isFinite(c)){let u=this.obtenirLargeurEnteteConditionV2(s,t);r=Math.min(r,c-u/2),o=Math.max(o,c+u/2)}}return{minX:r,maxX:o}}calculerBornesForetV2(e,t,i=!1){if(!Array.isArray(e)||e.length===0)return{minX:1/0,maxX:-1/0};let n=1/0,r=-1/0;for(let o of e){let s=this.calculerBornesSousArbreV2(o,t,i);n=Math.min(n,s.minX),r=Math.max(r,s.maxX)}return{minX:n,maxX:r}}decalerSousArbreMiseEnPageV2(e,t){if(!e||!isFinite(t)||Math.abs(t)<0.0001)return;if(e.abscisse=\`\${parseFloat(e.abscisse)+t}vw\`,Array.isArray(e.enfants))for(let i of e.enfants)this.decalerSousArbreMiseEnPageV2(i,t);if(Array.isArray(e.conditions))for(let i of e.conditions){if(isFinite(i?.__centreBrancheV2))i.__centreBrancheV2+=t;if(Array.isArray(i?.enfants))for(let n of i.enfants)this.decalerSousArbreMiseEnPageV2(n,t)}}decalerForetMiseEnPageV2(e,t){if(!Array.isArray(e)||!isFinite(t)||Math.abs(t)<0.0001)return;for(let i of e)this.decalerSousArbreMiseEnPageV2(i,t)}decalerConditionV2(e,t){if(!e||!isFinite(t)||Math.abs(t)<0.0001)return;if(isFinite(e?.__centreBrancheV2))e.__centreBrancheV2+=t;if(Array.isArray(e?.enfants))for(let i of e.enfants)this.decalerSousArbreMiseEnPageV2(i,t)}obtenirCentreNoeudV2(e,t){let i=this.calculerMiseEnPageNoeudV2(e,t);return parseFloat(e.abscisse)+i.largeurNoeud/2}alignerEnfantUniqueV2(e,t,i,n=null){if(!e||!t)return;let r=n??this.obtenirCentreNoeudV2(e,i),o=this.obtenirCentreNoeudV2(t,i);this.decalerSousArbreMiseEnPageV2(t,r-o)}compacterFratrieV2(e,t,i){if(!Array.isArray(e)||e.length<2)return;let n=i??t.ecartHorizontalCompact;for(let r=1;r<e.length;r++){let o=this.calculerBornesSousArbreV2(e[r-1],t),s=this.calculerBornesSousArbreV2(e[r],t),c=o.maxX+n-s.minX;this.decalerSousArbreMiseEnPageV2(e[r],c)}}appliquerAntiChevauchementConditionSortieFratrieV2(e,t){if(!Array.isArray(e)||e.length<2)return;for(let i=1;i<e.length;i++){let n=e[i-1],r=e[i];if(!(n?.typeElement==="ConditionSortie"||r?.typeElement==="ConditionSortie"))continue;let s=this.calculerBornesNoeudV2(n,t,!0),c=this.calculerBornesNoeudV2(r,t,!0),u=s.maxX+t.ecartSecuriteConditionSortie-c.minX;if(u>0)this.decalerSousArbreMiseEnPageV2(r,u)}}appliquerAntiChevauchementConditionSortieNoeudV2(e,t){if(!e)return;let i=Array.isArray(e?.enfants)?e.enfants:[];this.appliquerAntiChevauchementConditionSortieFratrieV2(i,t);for(let n of i)this.appliquerAntiChevauchementConditionSortieNoeudV2(n,t);if(Array.isArray(e?.conditions))for(let n of e.conditions){let r=Array.isArray(n?.enfants)?n.enfants:[];this.appliquerAntiChevauchementConditionSortieFratrieV2(r,t);for(let o of r)this.appliquerAntiChevauchementConditionSortieNoeudV2(o,t)}}appliquerAntiChevauchementConditionSortieV2(e,t){if(!Array.isArray(e)||e.length===0)return;this.appliquerAntiChevauchementConditionSortieFratrieV2(e,t);for(let i of e)this.appliquerAntiChevauchementConditionSortieNoeudV2(i,t)}obtenirBornesConditionV2(e,t,i=!1){let n=Array.isArray(e?.enfants)?e.enfants:[];if(n.length>0)return this.calculerBornesForetV2(n,t,i);let r=e?.__centreBrancheV2;if(isFinite(r)){let o=this.obtenirLargeurEnteteConditionV2(e,t);return{minX:r-o/2,maxX:r+o/2}}return{minX:1/0,maxX:-1/0}}compacterConditionsV2(e,t){let i=Array.isArray(e?.conditions)?e.conditions:[];if(i.length===0)return;for(let n of i){let r=Array.isArray(n?.enfants)?n.enfants:[];if(r.length>1)this.compacterFratrieV2(r,t,t.ecartHorizontalCompact);else if(r.length===1&&isFinite(n.__centreBrancheV2))this.alignerEnfantUniqueV2(e,r[0],t,n.__centreBrancheV2)}for(let n=1;n<i.length;n++){let r=this.obtenirBornesConditionV2(i[n-1],t),o=this.obtenirBornesConditionV2(i[n],t),s=r.maxX+t.ecartHorizontalConditionsCompact-o.minX;this.decalerConditionV2(i[n],s)}}recentrerEnfantsSousParentV2(e,t){let i=Array.isArray(e?.enfants)?e.enfants:[];if(i.length===0)return;let n=this.calculerBornesForetV2(i,t);if(!isFinite(n.minX)||!isFinite(n.maxX))return;let r=this.obtenirCentreNoeudV2(e,t),o=(n.minX+n.maxX)/2;this.decalerForetMiseEnPageV2(i,r-o)}recentrerConditionsSousParentV2(e,t){let i=Array.isArray(e?.conditions)?e.conditions:[];if(i.length===0)return;let n=1/0,r=-1/0;for(let u of i){let p=this.obtenirBornesConditionV2(u,t);n=Math.min(n,p.minX),r=Math.max(r,p.maxX)}if(!isFinite(n)||!isFinite(r))return;let o=this.obtenirCentreNoeudV2(e,t),s=(n+r)/2,c=o-s;for(let u of i)this.decalerConditionV2(u,c)}compacterNoeudV2(e,t){if(!e)return;if(Array.isArray(e.enfants))for(let n of e.enfants)this.compacterNoeudV2(n,t);if(Array.isArray(e.conditions)){for(let n of e.conditions)if(Array.isArray(n?.enfants))for(let r of n.enfants)this.compacterNoeudV2(r,t)}let i=Array.isArray(e.enfants)?e.enfants:[];if(i.length>1)this.compacterFratrieV2(i,t,t.ecartHorizontalCompact);else if(i.length===1)this.alignerEnfantUniqueV2(e,i[0],t);if(e.typeElement==="StructureSi"||e.typeElement==="StructureSwitch")this.compacterConditionsV2(e,t),this.recentrerConditionsSousParentV2(e,t);this.recentrerEnfantsSousParentV2(e,t)}compacterDispositionV2(e,t){if(!Array.isArray(e)||e.length===0)return;for(let i of e)this.compacterNoeudV2(i,t);this.compacterFratrieV2(e,t,t.ecartHorizontalCompact)}recentrerDispositionV2(e,t){let i=this.calculerBornesForetV2(e,t);if(!isFinite(i.minX)||!isFinite(i.maxX))return;let n=i.maxX-i.minX,r=t.margeGauche;if(n<t.largeurDisponible)r+=(t.largeurDisponible-n)/2;let o=r-i.minX;this.decalerForetMiseEnPageV2(e,o)}nettoyerMetaMiseEnPageV2(e){if(!Array.isArray(e))return;for(let t of e){if(t&&t.__layoutV2)delete t.__layoutV2;if(Array.isArray(t?.enfants))this.nettoyerMetaMiseEnPageV2(t.enfants);if(Array.isArray(t?.conditions))for(let i of t.conditions){if(i&&i.__largeurForetEnfantsV2!==void 0)delete i.__largeurForetEnfantsV2;if(i&&i.__largeurBrancheV2!==void 0)delete i.__largeurBrancheV2;if(i&&i.__centreBrancheV2!==void 0)delete i.__centreBrancheV2;if(Array.isArray(i?.enfants))this.nettoyerMetaMiseEnPageV2(i.enfants)}}}reorganiserDispositionAlgoV2(e,t={}){let i={ecartHorizontal:t.ecartHorizontal??0.7,ecartHorizontalConditions:t.ecartHorizontalConditions??0.55,ecartVertical:t.ecartVertical??9,largeurMinNoeud:t.largeurMinNoeud??2.2,hauteurMinNoeud:t.hauteurMinNoeud??3,largeurConstanteSortie:t.largeurConstanteSortie??4,largeurMinBrancheCondition:t.largeurMinBrancheCondition??2.8,facteurLargeurGeneral:t.facteurLargeurGeneral??0.56,facteurLargeurProbleme:t.facteurLargeurProbleme??0.52,facteurLargeurEnteteCondition:t.facteurLargeurEnteteCondition??0.5,margeNoeud:t.margeNoeud??0.2,margeEnteteCondition:t.margeEnteteCondition??0.2,margeGauche:t.margeGauche??2,largeurDisponible:t.largeurDisponible??92,positionHaute:t.positionHaute??3,ecartHorizontalCompact:t.ecartHorizontalCompact??0.25,ecartHorizontalConditionsCompact:t.ecartHorizontalConditionsCompact??0.2,largeurMinEmpreinteNoeud:t.largeurMinEmpreinteNoeud??1.6,facteurEmpreinteGeneral:t.facteurEmpreinteGeneral??0.7,facteurEmpreinteProbleme:t.facteurEmpreinteProbleme??0.7,facteurEmpreinteProblemePartiel:t.facteurEmpreinteProblemePartiel??0.58,facteurEmpreinteProblemeSansDR:t.facteurEmpreinteProblemeSansDR??0.5,largeurEmpreinteSortieConstante:t.largeurEmpreinteSortieConstante??4,ecartSecuriteConditionSortie:t.ecartSecuriteConditionSortie??0.08},n=Array.isArray(e)?e.filter((s)=>s&&s.typeElement!=="DictionnaireDonnee"):[];if(n.length===0)return;let r=this.calculerMiseEnPageForetV2(n,i),o=i.margeGauche;if(r<i.largeurDisponible)o+=(i.largeurDisponible-r)/2;this.appliquerMiseEnPageForetV2(n,o,i.positionHaute,i),this.compacterDispositionV2(n,i),this.appliquerAntiChevauchementConditionSortieV2(n,i),this.recentrerDispositionV2(n,i),this.nettoyerMetaMiseEnPageV2(n)}obtenirLargeurNoeudMiseEnPage(e,t){let i=this.obtenirLargeurReferenceNoeudMiseEnPage(e.typeElement);if(e.typeElement==="ConditionSortie"){if(t.utiliserDimensionsReelles&&e?.__elementReference instanceof l.ElementGraphique){let r=this.obtenirLargeurElementEnVw(e.__elementReference);if(r>0)return Math.max(t.largeurNoeudMinSortie,r*t.facteurLargeurReelleSortie+t.margeSortie)}return Math.max(t.largeurNoeudMinSortie,i*t.facteurLargeurNoeud)}if(t.utiliserDimensionsReelles&&e?.__elementReference instanceof l.ElementGraphique){let r=this.obtenirLargeurElementEnVw(e.__elementReference);if(r>0){let o=Math.max(t.largeurNoeudMin,r*t.facteurLargeurReelleNoeud+t.margeNoeud);return this.problemeSansEntreesSorties(e)?Math.max(t.largeurNoeudMin,o*0.5):o}}let n=Math.max(t.largeurNoeudMin,i*t.facteurLargeurNoeud);return this.problemeSansEntreesSorties(e)?Math.max(t.largeurNoeudMin,n*0.5):n}texteProblemeEstVide(e){return this.nettoyerTexteImporte(String(e??"").replace(/&nbsp;/g," ").replace(/\\u00A0/g," "))===""}listeProblemeEstVide(e){if(!Array.isArray(e))return this.texteProblemeEstVide(e);return e.every((t)=>this.texteProblemeEstVide(t))}problemeSansEntreesSorties(e){if(e?.typeElement!=="Probleme"&&e?.typeElement!=="Procedure")return!1;let t=e?.__elementReference;if(t instanceof l.Probleme)return this.texteProblemeEstVide(t.getDonnee?.())&&this.texteProblemeEstVide(t.getResultat?.());return this.listeProblemeEstVide(e?.listeDonnes)&&this.listeProblemeEstVide(e?.listeResultats)}calculerMiseEnPageForet(e,t){if(!Array.isArray(e)||e.length===0)return{largeurForet:0};let i=0;for(let n=0;n<e.length;n++){let r=this.calculerMiseEnPageNoeud(e[n],t);if(i+=r.largeurSousArbre,n<e.length-1)i+=t.ecartHorizontal}return{largeurForet:i}}calculerMiseEnPageNoeud(e,t){let i=this.obtenirLargeurNoeudMiseEnPage(e,t);if(e.typeElement==="StructureSi"||e.typeElement==="StructureSwitch"){let o=0,s=Array.isArray(e.conditions)?e.conditions:[];for(let u=0;u<s.length;u++){let p=s[u],h=this.calculerMiseEnPageForet(p.enfants,t),a=t.largeurMinBrancheCondition;if(e.__elementReference instanceof l.StructureAlternative){let m=e.__elementReference._listeConditions?.children?.[u],f=this.obtenirLargeurElementEnVw(m);if(f>0)a=Math.max(a,f*t.facteurLargeurReelleCondition+t.margeNoeud)}if(p.__layout={largeurBranche:Math.max(a,h.largeurForet),miseEnPageEnfantsCondition:h},o+=p.__layout.largeurBranche,u<s.length-1)o+=t.ecartHorizontalConditions}let c=Math.max(i,o);return e.__layout={type:"conditions",largeurNoeud:i,largeurSousArbre:c,largeurConditions:o},e.__layout}let n=this.calculerMiseEnPageForet(e.enfants,t),r=Math.max(i,n.largeurForet);return e.__layout={type:"enfants",largeurNoeud:i,largeurSousArbre:r,miseEnPageEnfants:n},e.__layout}obtenirLargeurVisibleNoeudMiseEnPage(e,t){if(e?.__elementReference instanceof l.ElementGraphique){let i=this.obtenirLargeurElementEnVw(e.__elementReference);if(i>0)return i}return t?.largeurNoeud??0}decalerSousArbreMiseEnPage(e,t){if(!e||!isFinite(t)||t===0)return;if(e.abscisse=\`\${parseFloat(e.abscisse)+t}vw\`,Array.isArray(e.enfants))for(let i of e.enfants)this.decalerSousArbreMiseEnPage(i,t);if(Array.isArray(e.conditions)){for(let i of e.conditions)if(Array.isArray(i?.enfants))for(let n of i.enfants)this.decalerSousArbreMiseEnPage(n,t)}}obtenirLargeurVisibleNoeudDepuisModele(e){return this.obtenirLargeurVisibleNoeudMiseEnPage(e,e?.__layout)}obtenirCentreVisibleNoeudDepuisModele(e){return parseFloat(e.abscisse)+this.obtenirLargeurVisibleNoeudDepuisModele(e)/2}calculerBornesSousArbreMiseEnPage(e){let t=this.obtenirLargeurVisibleNoeudDepuisModele(e),i=parseFloat(e.abscisse),n=i+t;if(Array.isArray(e?.enfants))for(let r of e.enfants){let o=this.calculerBornesSousArbreMiseEnPage(r);i=Math.min(i,o.minX),n=Math.max(n,o.maxX)}if(Array.isArray(e?.conditions)){for(let r of e.conditions)if(Array.isArray(r?.enfants))for(let o of r.enfants){let s=this.calculerBornesSousArbreMiseEnPage(o);i=Math.min(i,s.minX),n=Math.max(n,s.maxX)}}return{minX:i,maxX:n}}alignerEnfantUniqueDepuisModele(e,t){let i=this.obtenirCentreVisibleNoeudDepuisModele(e),n=this.obtenirCentreVisibleNoeudDepuisModele(t);this.decalerSousArbreMiseEnPage(t,i-n)}appliquerNonChevauchementFratrieMiseEnPage(e,t=0.35){if(!Array.isArray(e)||e.length<2)return;for(let i=1;i<e.length;i++){let n=this.calculerBornesSousArbreMiseEnPage(e[i-1]),r=this.calculerBornesSousArbreMiseEnPage(e[i]),o=n.maxX+t;if(r.minX<o)this.decalerSousArbreMiseEnPage(e[i],o-r.minX)}}calculerBornesForetMiseEnPage(e,t=!0){if(!Array.isArray(e)||e.length===0)return{minX:1/0,maxX:-1/0};let i=1/0,n=-1/0;for(let r of e){let o=t?this.calculerBornesSousArbreMiseEnPage(r):{minX:(()=>{let s=parseFloat(r.abscisse),c=this.obtenirLargeurVisibleNoeudDepuisModele(r),u=s+c/2,p=r?.typeElement==="ConditionSortie"?0.95:0.68,h=c*p;return u-h/2})(),maxX:(()=>{let s=parseFloat(r.abscisse),c=this.obtenirLargeurVisibleNoeudDepuisModele(r),u=s+c/2,p=r?.typeElement==="ConditionSortie"?0.95:0.68,h=c*p;return u+h/2})()};i=Math.min(i,o.minX),n=Math.max(n,o.maxX)}return{minX:i,maxX:n}}decalerForetMiseEnPage(e,t){if(!Array.isArray(e)||!isFinite(t)||t===0)return;for(let i of e)this.decalerSousArbreMiseEnPage(i,t)}appliquerNonChevauchementForetsMiseEnPage(e,t=0.35,i=!0){if(!Array.isArray(e)||e.length<2)return;let n=-1/0;for(let r=0;r<e.length;r++){let o=e[r],s=this.calculerBornesForetMiseEnPage(o,i);if(!isFinite(s.minX)||!isFinite(s.maxX))continue;if(isFinite(n)){let u=n+t;if(s.minX<u)this.decalerForetMiseEnPage(o,u-s.minX)}let c=this.calculerBornesForetMiseEnPage(o,i);if(isFinite(c.maxX))n=c.maxX}}foretContientConditionSortie(e){if(!Array.isArray(e))return!1;return e.some((t)=>t?.typeElement==="ConditionSortie")}postAjusterDispositionAvecDimensionsReelles(e,t={}){let i=t.ecartMinimal??0.03,n=t.appliquerAntiChevauchementGlobal??!1,r=(o)=>{if(Array.isArray(o?.enfants)&&o.enfants.length>0){for(let s of o.enfants)r(s);if(o.enfants.length===1)this.alignerEnfantUniqueDepuisModele(o,o.enfants[0]);else if(n||this.foretContientConditionSortie(o.enfants))this.appliquerNonChevauchementFratrieMiseEnPage(o.enfants,i)}if(Array.isArray(o?.conditions)){let s=[];for(let c of o.conditions){let u=Array.isArray(c?.enfants)?c.enfants:[];s.push(u);for(let p of u)r(p);if(u.length>1)this.appliquerNonChevauchementFratrieMiseEnPage(u,i)}this.appliquerNonChevauchementForetsMiseEnPage(s,i,!1)}};for(let o of e)r(o);if(n||this.foretContientConditionSortie(e))this.appliquerNonChevauchementFratrieMiseEnPage(e,i)}appliquerMiseEnPageForet(e,t,i,n){if(!Array.isArray(e)||e.length===0)return;let r=t;for(let o=0;o<e.length;o++){let s=e[o],c=s.__layout||this.calculerMiseEnPageNoeud(s,n);this.appliquerMiseEnPageNoeud(s,r,i,n),r+=c.largeurSousArbre+n.ecartHorizontal}}appliquerMiseEnPageNoeud(e,t,i,n){let r=e.__layout||this.calculerMiseEnPageNoeud(e,n),o=t+(r.largeurSousArbre-r.largeurNoeud)/2;if(e.abscisse=\`\${o}vw\`,e.ordonnee=\`\${i}vw\`,r.type==="enfants"){let s=r.miseEnPageEnfants.largeurForet;if(s>0){let c=Array.isArray(e.enfants)?e.enfants:[];if(c.length===1){let p=c[0],h=p.__layout||this.calculerMiseEnPageNoeud(p,n),a=parseFloat(e.abscisse)+this.obtenirLargeurVisibleNoeudMiseEnPage(e,r)/2,m=o-(h.largeurSousArbre-h.largeurNoeud)/2;this.appliquerMiseEnPageNoeud(p,m,i+n.ecartVertical,n);let f=parseFloat(p.abscisse)+this.obtenirLargeurVisibleNoeudMiseEnPage(p,h)/2,v=a-f;this.decalerSousArbreMiseEnPage(p,v);return}let u=t+(r.largeurSousArbre-s)/2;this.appliquerMiseEnPageForet(e.enfants,u,i+n.ecartVertical,n)}return}if(r.type==="conditions"){if(r.largeurConditions<=0)return;let s=t+(r.largeurSousArbre-r.largeurConditions)/2,c=Array.isArray(e.conditions)?e.conditions:[];for(let u of c){let p=u.__layout;if(p&&p.miseEnPageEnfantsCondition.largeurForet>0){let h=Array.isArray(u.enfants)?u.enfants:[];if(h.length===1){let a=h[0],m=a.__layout||this.calculerMiseEnPageNoeud(a,n),f=s+p.largeurBranche/2,v=s+(p.largeurBranche-m.largeurSousArbre)/2;this.appliquerMiseEnPageNoeud(a,v,i+n.ecartVertical,n);let g=parseFloat(a.abscisse)+this.obtenirLargeurVisibleNoeudMiseEnPage(a,m)/2,y=f-g;this.decalerSousArbreMiseEnPage(a,y)}else{let a=s+(p.largeurBranche-p.miseEnPageEnfantsCondition.largeurForet)/2;this.appliquerMiseEnPageForet(u.enfants,a,i+n.ecartVertical,n)}}s+=p.largeurBranche+n.ecartHorizontalConditions}}}nettoyerMetaMiseEnPage(e){if(!Array.isArray(e))return;for(let t of e){if(t&&t.__layout)delete t.__layout;if(Array.isArray(t?.enfants))this.nettoyerMetaMiseEnPage(t.enfants);if(Array.isArray(t?.conditions))for(let i of t.conditions){if(i&&i.__layout)delete i.__layout;if(Array.isArray(i?.enfants))this.nettoyerMetaMiseEnPage(i.enfants)}}}reorganiserDispositionAlgo(e,t={}){let i=t.facteurEspacementHorizontal??0.16,n=t.facteurEspacementVertical??1,r={ecartHorizontal:t.ecartHorizontal??6*i,ecartHorizontalConditions:t.ecartHorizontalConditions??5*i,ecartVertical:t.ecartVertical??Math.max(7,9*n),largeurMinBrancheCondition:t.largeurMinBrancheCondition??Math.max(5,14*i),utiliserDimensionsReelles:t.utiliserDimensionsReelles??!0,facteurLargeurReelleNoeud:t.facteurLargeurReelleNoeud??0.46,facteurLargeurReelleSortie:t.facteurLargeurReelleSortie??1,facteurLargeurReelleCondition:t.facteurLargeurReelleCondition??0.55,margeNoeud:t.margeNoeud??0.6,margeSortie:t.margeSortie??0.9,largeurNoeudMin:t.largeurNoeudMin??3,largeurNoeudMinSortie:t.largeurNoeudMinSortie??5.4,facteurLargeurNoeud:t.facteurLargeurNoeud??0.28,margeGauche:t.margeGauche??2,largeurDisponible:t.largeurDisponible??92,positionHaute:t.positionHaute??3},o=Array.isArray(e)?e.filter((p)=>p&&p.typeElement!=="DictionnaireDonnee"):[];if(o.length===0)return;let c=this.calculerMiseEnPageForet(o,r).largeurForet,u=r.margeGauche;if(c<r.largeurDisponible)u+=(r.largeurDisponible-c)/2;this.appliquerMiseEnPageForet(o,u,r.positionHaute,r),this.nettoyerMetaMiseEnPage(o)}preparerXmlTabulaRasa(e){if(typeof e!=="string")return"";let t=e.replace(/^\\uFEFF/,"").trimStart();return t=t.replace(/^<\\?xml[^>]*\\?>/i,(i)=>i.replace(/version\\s*=\\s*["']1\\.1["']/i,'version="1.0"')),t}convertirTabulaRasaEnAlgoForge(e){let t=new DOMParser,i=this.preparerXmlTabulaRasa(e),n=t.parseFromString(i,"text/xml");if(n.querySelector("parsererror"))throw Error("Le XML Tabula Rasa est invalide.");let r=n.querySelector("Algorithme");if(!r)throw Error("Le fichier Tabula Rasa ne contient pas d'algorithme.");let o=this.trouverEnfantDirect(r,"Elements"),s=this.convertirEnfantsTbr(o);return this.reorganiserDispositionAlgoV2(s),s.push({typeElement:"DictionnaireDonnee"}),{algo:s,nomAlgo:this.nettoyerTexteImporte(this.getTexteEnfantDirect(r,"nom","")),estTabulaRasa:!0}}importerJSON(){if(A()){me("import");return}var e=document.createElement("input");e.type="file",e.accept=".af,.algoforge,.json,.tbr,.xml",e.style.display="none",e.addEventListener("change",()=>{if(!e.files||e.files.length===0)return;let t=e.files[0];var i=new FileReader;i.onload=()=>{try{if(t.size>5000000){alert("Le fichier est trop volumineux (maximum 5 MegaOctets).");return}let n=this.interpreterFichierAlgorithme(t.name,i.result),r=!Array.from(this._espacePrincipal.children).some((o)=>o instanceof l.ElementGraphique);if(this._espacePrincipal.chargerDepuisJSON(n.algo),n.estTabulaRasa&&r)requestAnimationFrame(()=>{this.prettifyPlanActif({enregistrerEvenement:!1})})}catch(n){alert(n instanceof Error?n.message:"Le fichier n'a pas été chargé correctement."),console.error(n)}},i.readAsText(t)}),e.click()}exporterSVG(e,t=!0,i=!1){if(d)console.log("exporterSVG() appelé");var n=document.createElement("style"),r=\`
        selection-editeur {
            display: none
        }
        
        selection-simple {
            display: none
        }
        
        selection-rectangle {
            display: none;
        }
        
        plan-travail {
            width: 100vw;
            height: 100vh;
            border: 0.1vw solid #000000;
            position: relative;
            overflow: scroll;
            background-color: #FFFFFF;
            --sizeModifier: 1;
            font-family: 'Roboto', sans-serif;
            background-color: #FFFFFF;
            color: #222222;
        }
        
        probleme-element {
            display: flex;
            width: calc(var(--sizeModifier) * 30vw);
            height: fit-content;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            
            z-index: 2;
        }
        
            probleme-element > div.containerDPR {
                width: 100%;
                height: calc(var(--sizeModifier) * 4vw);
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: calc(var(--sizeModifier) * 0.2vw);
                place-items: center;
            }
        
                probleme-element > div.containerDPR > div.donnees {
                    width: 100%;
                    height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: right;
                    column-gap: calc(var(--sizeModifier) * 0.2vw);
                    place-items: center;
                    grid-column: 1;
                }
        
                    probleme-element > div.containerDPR > div.donnees > label.accolades {
                        font-size: calc(var(--sizeModifier) * 4vw);
                        transform: scaleX(0.75);
                    }
        
                    probleme-element > div.containerDPR > div.donnees > div.donneesEditable {
                        min-width: calc(var(--sizeModifier) * 1vw);
                        height: 100%;
                        grid-column: 2;
                        resize: none;
                        border: none;
                        background: none;
                        font-size: calc(var(--sizeModifier) * 0.75vw);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        word-wrap: break-word;
                        overflow: hidden;
                    }
        
                probleme-element > div.containerDPR > div.nom {
                    width: calc(var(--sizeModifier) * 10vw);
                    height: 100%;
                    grid-column: 2;
                    border: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    text-align: center;
                    font-size: calc(var(--sizeModifier) * 0.75vw);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    word-wrap: break-word;
                    overflow: hidden;
                    background-color: #FFFFFF;
                }
        
                probleme-element > div.containerDPR > div.resultat {
                    width: 100%;
                    height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: left;
                    column-gap: calc(var(--sizeModifier) * 0.2vw);
                    place-items: center;
                    grid-column: 3;
                }
        
                    probleme-element > div.containerDPR > div.resultat > label.accolades {
                        font-size: calc(var(--sizeModifier) * 4vw);
                        transform: scaleX(0.75);
                    }
        
                    probleme-element > div.containerDPR > div.resultat > div.resultatEditable {
                        min-width: calc(var(--sizeModifier) * 1vw);
                        height: 100%;
                        grid-column: 2;
                        resize: none;
                        border: none;
                        background: none;
                        font-size: calc(var(--sizeModifier) * 0.75vw);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        word-wrap: break-word;
                        overflow: hidden;
                    }
        
        procedure-element {
            display: flex;
            width: calc(var(--sizeModifier) * 30vw);
            height: fit-content;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            
            z-index: 2;
        }
            
            procedure-element > div.containerDPR {
                width: 100%;
                height: calc(var(--sizeModifier) * 4vw);
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: calc(var(--sizeModifier) * 0.2vw);
                place-items: center;
            }
        
                procedure-element > div.containerDPR > div.donnees {
                    width: 100%;
                    height: 100%;
                    display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: right;
                    column-gap: calc(var(--sizeModifier) * 0.2vw);
                    place-items: center;
                    grid-column: 1;
                }
        
                    procedure-element > div.containerDPR > div.donnees > label.accolades {
                        font-size: calc(var(--sizeModifier) * 4vw);
                        transform: scaleX(0.75);
                    }
        
                    procedure-element > div.containerDPR > div.donnees > div.donneesEditable {
                        min-width: calc(var(--sizeModifier) * 1vw);
                        height: 100%;
                        grid-column: 2;
                        resize: none;
                        border: none;
                        background: none;
                        font-size: calc(var(--sizeModifier) * 0.75vw);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        word-wrap: break-word;
                        overflow: hidden;
                    }
        
                procedure-element > div.containerDPR > div.nom {
                    width: calc(var(--sizeModifier) * 8vw);
                    height: 100%;
                    grid-column: 2;
                    border: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    text-align: center;
                    font-size: calc(var(--sizeModifier) * 0.75vw);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    word-wrap: break-word;
                    overflow: hidden;
                    background-color: #FFFFFF;
                }
        
                procedure-element > div.containerDPR > div.nom::before {
                    position: absolute;
                    content: "";
                    transform: translateX(calc(var(--sizeModifier) *-4.5vw));
                    width: calc(var(--sizeModifier) * 0.8vw);
                    height: calc(var(--sizeModifier) * 4vw);
                    border: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    border-right: none;
                    background-color: #FFFFFF;
                }
        
                procedure-element > div.containerDPR > div.nom::after {
                    position: absolute;
                    content: "";
                    transform: translateX(calc(var(--sizeModifier) *4.5vw));
                    width: calc(var(--sizeModifier) * 0.8vw);
                    height: calc(var(--sizeModifier) * 4vw);
                    border: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    border-left: none;
                    background-color: #FFFFFF;
                }
        
                procedure-element > div.containerDPR > div.resultat {
                    width: 100%;
                    height: 100%;
                    display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: right;
                    column-gap: calc(var(--sizeModifier) * 0.2vw);
                    place-items: center;
                    grid-column: 3;
                }
        
                    procedure-element > div.containerDPR > div.resultat > label.accolades {
                        font-size: calc(var(--sizeModifier) * 4vw);
                        transform: scaleX(0.75);
                    }
        
                    procedure-element > div.containerDPR > div.resultat > div.resultatEditable {
                        min-width: calc(var(--sizeModifier) * 1vw);
                        height: 100%;
                        grid-column: 2;
                        resize: none;
                        border: none;
                        background: none;
                        font-size: calc(var(--sizeModifier) * 0.75vw);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        word-wrap: break-word;
                        overflow: hidden;
                    }
        
        symbole-decomposition-element {
            position: absolute;
            
            width: calc(var(--sizeModifier) * 1vw);
            height: calc(var(--sizeModifier) * 1.5vw);
            border-left: calc(var(--sizeModifier) * 0.1vw) solid #000000;
            border-right: calc(var(--sizeModifier) * 0.1vw) solid #000000;
            border-bottom: calc(var(--sizeModifier) * 0.1vw) solid #000000;
        }
        
        structure-si-element {
            display: grid;
            grid-template-columns: 0px 1fr 0px;
            grid-template-rows: 1fr;
            width: fit-content;
            height: calc(var(--sizeModifier) * 4vw);
            position: absolute;
            place-content: center;
            place-items: center;
            
            z-index: 2;
        }
        
        structure-si-element > div.triangle {
            color: #0000;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 3vw;
            user-select: none;
            cursor: pointer;
        }
        
            structure-si-element > div.triangleGauche {
                width: calc(var(--sizeModifier) * 2.8284271247vw); /* 4 / sqrt(2), théorème de pythagore */
                height: calc(var(--sizeModifier) * 2.8284271247vw);
                border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                border-left: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                rotate: -45deg;
                grid-column: 1;
                background-color: #FFFFFF;
                transform: translate(-2%, 2%); /* Compenser l'imprecision du rotate */
            }
        
            structure-si-element > div.triangleGauche > span {
                rotate: 45deg;
                transform: translateX(-0.7vw);
            }
        
            structure-si-element > div.conditionContainer {
                display: flex;
                width: fit-content;
                height: 100%;   
                grid-column: 2;
                flex-direction: row;
            }
        
                structure-si-element > div.conditionContainer > condition-element {
                    width: calc(var(--sizeModifier) * 10vw);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: #FFFFFF;
                    border-right: calc(var(--sizeModifier) * 0.05vw) solid #000000;
                    border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    border-bottom: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                }
        
            structure-si-element > div.triangleDroit {
                width: calc(var(--sizeModifier) * 2.8284271247vw); /* 4 / sqrt(2), théorème de pythagore */
                height: calc(var(--sizeModifier) * 2.8284271247vw);
                border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                border-right: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                rotate: 45deg;
                grid-column: 3;
                background-color: #FFFFFF;
                transform: translate(2%, 2%); /* Compenser l'imprecision du rotate */
            }
        
            structure-si-element > div.triangleDroit > span {
                rotate: -45deg;
                transform: translateX(0.7vw);
            }
        
        structure-switch-element {
            display: grid;
            grid-template-columns: 0px 1fr 0px;
            grid-template-rows: 1fr 1fr;
            width: fit-content;
            height: calc(var(--sizeModifier) * 4vw);
            position: absolute;
            place-content: center;
            place-items: center;
            
            background-color: #FFFFFF;
            z-index: 2;
        }
        
            structure-switch-element > div.triangle {
                color: #0000;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 2vw;
                user-select: none;
                cursor: pointer;
            }
        
            structure-switch-element > div.triangleGauche {
                width: calc(var(--sizeModifier) * 2.8284271247vw); /* 4 / sqrt(2), théorème de pythagore */
                height: calc(var(--sizeModifier) * 2.8284271247vw);
                border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                border-left: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                rotate: -45deg;
                grid-column: 1;
                grid-row: 1/3;
                background-color: #FFFFFF;
                transform: translate(-2%, 2%); /* Compenser l'imprecision du rotate */
            }
        
            structure-switch-element > div.triangleGauche > span {
                rotate: 45deg;
                transform: translate(-0.7vw, 30%);
            }
        
            structure-switch-element > hr.diviseurGauche {
                width: calc(var(--sizeModifier) * 4vw);
                height: calc(var(--sizeModifier) * 0.05vw);
                grid-column: 1;
                grid-row: 1/3;
                background-color: #000000;
                z-index: 1;
                transform: translateX(-50%);
                border: 0;
            }
        
            structure-switch-element > div.expressionATester {
                width: 100%;
                height: 100%;
                grid-column: 2;
                grid-row: 1;
                resize: none;
                border: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                border-left: 0;
                border-right: 0;
                text-align: center;
                font-size: calc(var(--sizeModifier) * 0.75vw);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                word-wrap: break-word;
                overflow: hidden;
                background-color: #FFFFFF;
                z-index: 10;
            }
        
            structure-switch-element > div.expressionATester:focus-visible {
                outline: none;
            }
        
            structure-switch-element > div.conditionContainer {
                display: flex;
                min-width: fit-content;
                width: 100%;
                height: calc(var(--sizeModifier) * 2vw);   
                grid-column: 2;
                grid-row: 2;
                flex-direction: row;
            }
        
                structure-switch-element > div.conditionContainer > condition-element {
                    min-width: calc(var(--sizeModifier) * 10vw);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: #FFFFFF;
                    border-right: calc(var(--sizeModifier) * 0.05vw) solid #000000;
                    border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                    border-bottom: calc(var(--sizeModifier) * 0.1vw) solid #000000;
                }
        
            structure-switch-element > div.triangleDroit {
            width: calc(var(--sizeModifier) * 2.8284271247vw); /* 4 / sqrt(2), théorème de pythagore */
            height: calc(var(--sizeModifier) * 2.8284271247vw);
            border-top: calc(var(--sizeModifier) * 0.1vw) solid #000000;
            border-right: calc(var(--sizeModifier) * 0.1vw) solid #000000;
            rotate: 45deg;
            grid-column: 3;
            grid-row: 1/3;
            background-color: #FFFFFF;
            transform: translate(2%, 2%); /* Compenser l'imprecision du rotate */
            }
        
            structure-switch-element > div.triangleDroit > span {
                rotate: -45deg;
                transform: translate(0.7vw, 30%);
            }
        
            structure-switch-element > hr.diviseurDroit {
                width: calc(var(--sizeModifier) * 4vw);
                height: calc(var(--sizeModifier) * 0.05vw);
                grid-column: 3;
                grid-row: 1/3;
                background-color: #000000;
                z-index: 1;
                transform: translateX(-50%);
                border: 0;
            }
        
        condition-element {
            position: relative;
        }
        
        condition-element > div.libelle {
            width: calc(var(--sizeModifier) * 10vw);
            height: inherit;
            resize: none;
            border: none;
            background: none;
            text-align: center;
            font-size: calc(var(--sizeModifier) * 0.75vw);
            overflow: hidden;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            word-wrap: break-word;
            overflow: hidden;
            background-color: #FFFFFF;
        }
        
        condition-element > div.libelle:focus-visible {
            outline: none;
        }
        
        condition-element > button.supprimer {
            width: calc(var(--sizeModifier) * 2vw);
            height: calc(var(--sizeModifier) * 1vw);
            border: none;
            border-radius: 0 0 999em 999em;
            background-color: var(--warningColor);
            z-index: 3;
            
            font-size: calc(var(--sizeModifier) * 1vw);
            color: #FFFFFF;
            display: none;
            position: absolute;
            top: 0;
        }
        
        condition-element > div.arrowsWrapper {
            width: calc(var(--sizeModifier) * 6vw);
            height: calc(var(--sizeModifier) * 1vw);
            border: none;
            font-size: calc(var(--sizeModifier) * 1vw);
            text-align: center;
            position: absolute;
            bottom: -1.5vw;
            user-select: none;
            cursor: pointer;
            display: none;
            padding: 0 0.5vw 0.5vw 0.5vw;
        }
        
        condition-element > div.arrowsWrapper > span {
            padding: 0.5vw;
            border-radius: 0 0 999em 999em;
        }
        
        condition-element > div.ajouterAGauche {
            display: none;
        }
        
        condition-element > div.ajouterADroite {
            display: none;
        }
        
        invite-bornes-pour-si {
            display: none;
        }
        
        structure-iterative-non-bornee-element {
            display: flex;
            flex-direction: row;
            justify-content: center;
            place-items: center;
            width: fit-content;
            height: calc(var(--sizeModifier) * 4vw);
            position: absolute;
            
            z-index: 2;
        }
            structure-iterative-non-bornee-element > svg.boucleSVG {
                width: calc(var(--sizeModifier) * 4vw);
                height: calc(var(--sizeModifier) * 4vw);
            }

		structure-iterative-bornee-element {
			display: flex;
			flex-direction: row;
			justify-content: center;
			place-items: center;
			width: fit-content;
			height: calc(var(--sizeModifier) * 4vw);
			position: absolute;
			transition: all var(--transitionTime) ease;
			z-index: 2;
			gap: calc(var(--sizeModifier) * 0.5vw);
		}
        
        structure-iterative-bornee-element {
            display: flex;
            flex-direction: row;
            justify-content: center;
            place-items: center;
            width: fit-content;
            height: calc(var(--sizeModifier) * 4vw);
            position: absolute;
            
            z-index: 2;
        }

		structure-iterative-bornee-element > svg.boucleSVG {
			width: calc(var(--sizeModifier) * 4vw);
			height: calc(var(--sizeModifier) * 4vw);
		}
        
		structure-iterative-bornee-element > div.informationsBornes {
			width: calc(var(--sizeModifier) * 16vw);
			height: 100%;
			font-size: calc(var(--sizeModifier) * 1vw);
		}
        
        condition-sortie-element {
            position: absolute;
            background-image: url("assets/conditionSortie.svg");
            height: calc(var(--sizeModifier) * 4vw);
            width: calc(var(--sizeModifier) * 4vw);
            
            z-index: 2;
        }
        
        ligne-element {
            position: absolute;
            transform-origin: 0% 50%;
            margin: 0;
            padding: 0;
            border: calc(var(--sizeModifier) * 0.05vw) solid #000000;
            z-index: 0;
        }
        \`;n.textContent=r;let o=new l.PlanTravail;if(o.style.setProperty("--sizeModifier",1),o.insertBefore(n,o.firstChild),document.body.appendChild(o),i)o.chargerDepuisJSON(JSON.parse(e));else o.chargerDepuisJSON(e.exporterEnJSONSpecifier(Array.from(e.children)));document.body.removeChild(o);let s=o.getCoordMinEtMax();if(d)console.log(s);let c=s.coordMax.x-s.coordMin.x,u=s.coordMax.y-s.coordMin.y;o.style.width=c+5+"vw",o.style.height=u+5+"vw",o.toutDeplacer(-s.coordMin.x+2.5,-s.coordMin.y+2.5);for(let g of o.querySelectorAll("div.boucleSVG")){if(d)console.log(g);let y=g.parentElement,N=document.createElement("svg");y.insertBefore(N,g),y.removeChild(g),N.outerHTML=\`<svg class="boucleSVG" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.51 386.63">
                <defs>
                    <style>
                        .cls-1 {
                            fill: #ffffff00;
                            stroke: #838787;
                            stroke-miterlimit: 10;
                            stroke-width: 10px;
                        }
                        .cls-2 {
                            fill: #222222;
                            stroke: #838787;
                            stroke-miterlimit: 10;
                            stroke-width: 10px;
                        }
                    </style>
                </defs>
                <circle class="cls-1 " cx="193.31" cy="193.31" r="190.81"/>
                <polygon class="cls-2" points="377.88 154.61 334.58 229.61 421.18 229.61 377.88 154.61"/>
            </svg>
            \`}for(let g of o.querySelectorAll("condition-sortie-element")){if(d)console.log(g);let y=document.createElement("svg");g.appendChild(y),y.outerHTML=\`<?xml version="1.0" encoding="utf-8"?>
            <!-- Generator: Adobe Illustrator 24.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 320.28 319.89" style="enable-background:new 0 0 320.28 319.89;" xml:space="preserve">
            <style type="text/css">
                .st0{fill:none;stroke:#838787;stroke-width:10;stroke-miterlimit:10;}
                .st1{fill:none;stroke:#838787;stroke-width:10;stroke-linecap:round;stroke-miterlimit:10;}
            </style>
            <path class="st0" d="M294.62,312.59H25.4c-9.88,0-17.89-8.01-17.89-17.89V25.48c0-9.88,8.01-17.89,17.89-17.89h269.22
                c9.88,0,17.89,8.01,17.89,17.89V294.7C312.51,304.58,304.5,312.59,294.62,312.59z"/>
            <line class="st1" x1="106.57" y1="204.62" x2="106.57" y2="7.62"/>
            <line class="st1" x1="212.57" y1="7.62" x2="212.57" y2="204.62"/>
            <path class="st1" d="M58.95,197.57"/>
            <path class="st1" d="M58.95,197.57c-4.7,0-6.49,6.14-2.53,8.66l101.49,64.73c1.54,0.98,3.51,0.98,5.05,0l101.49-64.73
                c3.96-2.53,2.17-8.66-2.53-8.66"/>
            </svg>
            \`}var p=new XMLSerializer,h=p.serializeToString(o);let a=\`<svg xmlns="http://www.w3.org/2000/svg">
		<foreignObject x="0" y="0" width="100%" height="100%">\${h}</foreignObject></svg>\`;if(t&&_e(this.querySelector("#titreAlgo").innerText+".svg","image/svg+xml",a))return a;var m=new Blob([a],{type:"image/svg+xml"}),f=URL.createObjectURL(m);if(t){var v=document.createElement("a");v.href=f,v.download=\`\${this.querySelector("#titreAlgo").innerText}.svg\`,document.body.appendChild(v),v.click(),document.body.removeChild(v)}return a}exporterJPG(e,t=!0,i=!1){this.createBitmapImageFromSvg("jpeg",e,t=!0,i=!1)}isCreatingBitmapImageFromSvg=!1;async createBitmapImageFromSvg(e,t,i=!0,n=!1){if(this.isCreatingBitmapImageFromSvg)await new Promise((h)=>{setInterval(()=>{if(!this.isCreatingBitmapImageFromSvg)h()},16)});this.isCreatingBitmapImageFromSvg=!0;let r=document.getElementById("canvasExport");r.width=this._planActif.getBoundingClientRect().width*E.renderScale,r.height=this._planActif.getBoundingClientRect().height*E.renderScale;let o=r.getContext("2d"),s=this.exporterSVG(t,!1,n),c=\`data:image/svg+xml;base64,\${btoa(unescape(encodeURIComponent(s)))}\`,u=new Image;u.width=r.width,u.height=r.height,u.src=c;let p=this.querySelector("#titreAlgo").innerText;u.onload=()=>{if(o.clearRect(0,0,r.width,r.height),e=="jpeg"||e=="jpg")o.fillStyle="#ffffff",o.strokeRect="#ffffff",o.fillRect(0,0,r.width,r.height);o.drawImage(u,0,0,r.width,r.height);let h=r.toDataURL(\`image/\${e}\`,1);if(_e(\`\${p}.\${e}\`,\`image/\${e}\`,h,"data-url")){b.isCreatingBitmapImageFromSvg=!1;return}let a=document.createElement("a");a.href=h,a.download=\`\${p}.\${e}\`,document.body.appendChild(a),a.click(),document.body.removeChild(a),b.isCreatingBitmapImageFromSvg=!1}}exporterPNG(e,t=!0,i=!1){this.createBitmapImageFromSvg("png",e,t,i)}adjustFontSize(e,t=0.45,i=1.2){let n=i;e.style.fontSize=\`calc(var(--sizeModifier)* \${n}vw)\`;let r=()=>e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight;while(r()&&n>t)n-=0.05,e.style.fontSize=\`calc(var(--sizeModifier)* \${n}vw)\`}}var ye=Ei();Si(ye);Li();Mi({Type:ie,Information:Ft,DictionnaireDonnee:Je,PlanTravail:xe,SousPlanTravail:Ye,ElementGraphique:X,Probleme:Ne,StructureAlternative:Ee,StructureIterative:Ce,InviteBornesPourSI:Ze,ConditionSortie:We,Procedure:Xe,Condition:Ke,StructureSi:rt,StructureSwitch:ot,StructureIterativeBornee:st,StructureIterativeNonBornee:at,ElementParent:Ot,Ligne:lt,Lien:pe,LienDroit:$t,LienCompositionProbleme:Ut,LienTriple:Gt,SymboleDecomposition:ct,Selection:dt,RepresentationSelectionSimple:ut,SelectionRectangle:pt,MenuDeroulant:ht,ElementMenu:ge,ElementMenuCompose:mt,ElementMenuKeyboardTip:ft,ThemeEditeur:gt,IndicateurZoom:vt,MenuContextuel:bt,Bibliotheque:yt,InviteNouvelleBibliotheque:wt,FenetreModale:_t,MenuCompte:xt,EvenementEdition:I,EvenementCreationElement:Jt,EvenementSuppressionElement:Yt,EvenementLiaison:Zt,EvenementSuppressionLiaison:Wt,EvenementDeplacementElement:Xt,EvenementDeplacementElementMultiples:Kt,EvenementDeplacementCondition:Qt,EvenementEditionTexte:ee,EvenementEditionLibelleProbleme:ei,EvenementEditionDonneesProbleme:ti,EvenementEditionResultatsProbleme:ii,EvenementEditionLibelleCondition:ni,EvenementEditionExpressionSwitch:ri,EvenementEditionStructureIterative:oi,EvenementDispositionAutomatique:si,EvenementComposite:ai,EvenementPlaceholder:li,Editeur:Et});D("dictionnaire-donnee",Je);D("plan-travail",xe);D("sous-plan-travail",Ye);D("probleme-element",Ne);D("invite-bornes-pour-si",Ze);D("condition-sortie-element",We);D("procedure-element",Xe);D("condition-element",Ke);D("structure-si-element",rt);D("structure-switch-element",ot);D("structure-iterative-bornee-element",st);D("structure-iterative-non-bornee-element",at);D("ligne-element",lt);D("symbole-decomposition-element",ct);D("selection-editeur",dt);D("selection-simple",ut);D("selection-rectangle",pt);D("menu-deroulant",ht);D("element-menu",ge);D("element-menu-compose",mt);D("element-menu-keyboard-tip",ft);D("theme-editeur",gt,{extends:"option"});D("indicateur-zoom",vt);D("menu-contextuel",bt);D("bibliotheque-algorithmique",yt);D("invite-nouvelle-bibliotheque",wt);D("fenetre-modale",_t);D("menu-compte-element",xt);D("editeur-interface",Et);Hi();Vi();if(ye.title!==null)de.innerText=ye.title,document.title=\`Algoforge - \${ye.title}\`;if(ye.initialAlgorithm!==null){let e=ze(ye.initialAlgorithm);if(b._espacePrincipal.chargerDepuisJSON(e.algorithm),ye.prettifyInitialAlgorithm)requestAnimationFrame(()=>b.prettifyPlanActif({enregistrerEvenement:!1}))}if(!ye.isExam){let e=0,t,i=async(n)=>{let r=++e;if(!n&&!t)return;try{t??=Promise.resolve().then(() => (bn(),vn));let{setAnomalyDetectionEnabled:o}=await t;if(r!==e)return;o(b,n)}catch(o){console.error("[Anomalies] Initialisation impossible",o)}};Promise.resolve().then(() => ({})).then(({})=>{yn(b,E.anomalyDetection,(r)=>{E.anomalyDetection=r,i(r)}),i(E.anomalyDetection)}).catch((n)=>console.error("[Anomalies] Préférence indisponible",n))}function D(e,t,i){if(!customElements.get(e))customElements.define(e,t,i)}
</script></body>

</html>
`;var M=[{nom:`Séquences
`,nomCourt:"",contenu:[{nom:"Décomposition en 2 sous-problèmes",nomCourt:"2 sous-problèmes",descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa <strong>décomposition</strong> en <strong>deux</strong> sous-problèmes plus simples.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
 Si vous ajoutez des sous-problèmes, limitez-vous à un maximum de  <strong>7 sous-problèmes par niveau</strong> afin de conserver un niveau de structuration facilitant la lecture et la compréhension de votre algorithme.
</p>
`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "2.8362573099415056vw",
		"ordonnee": "3.356725146198839vw",
		"libelle": "",
		"listeDonnes": [""],
		"listeResultats": [""],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "-4.84742188243087vw",
				"ordonnee": "12.274279829317171vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "11.192959497266214vw",
				"ordonnee": "12.3864503284759vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"01_decomposition_sequentielle/2_sous_problemes"},{nom:`Décomposition en 3 sous-problèmes
`,nomCourt:`3 sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa <strong>décomposition</strong> en <strong>trois</strong> sous-problèmes plus simples.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
 Si vous ajoutez des sous-problèmes, limitez-vous à un maximum de  <strong>7 sous-problèmes par niveau</strong> afin de conserver un niveau de structuration facilitant la lecture et la compréhension de votre algorithme.
</p>
`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "6.461988304093572vw",
		"ordonnee": "4.175438596491231vw",
		"libelle": "",
		"listeDonnes": [""],
		"listeResultats": [""],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "-8.120176586540161vw",
				"ordonnee": "12.363885035077882vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "6.3498178049348075vw",
				"ordonnee": "12.41997028465725vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "19.58593670566387vw",
				"ordonnee": "12.251714535919174vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"01_decomposition_sequentielle/3_sous_problemes"},{nom:`Décomposition en 4 sous-problèmes
`,nomCourt:`4 sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa <strong>décomposition</strong> en <strong>quatre</strong> sous-problèmes plus simples.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
 Si vous ajoutez des sous-problèmes, limitez-vous à un maximum de  <strong>7 sous-problèmes par niveau</strong> afin de conserver un niveau de structuration facilitant la lecture et la compréhension de votre algorithme.
</p>
`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "12.719298245614038vw",
		"ordonnee": "4.116959064327488vw",
		"libelle": "",
		"listeDonnes": [""],
		"listeResultats": [""],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "-8.42484084580493vw",
				"ordonnee": "12.417576002072849vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "6.045153545670022vw",
				"ordonnee": "12.473661251652217vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "19.281272446399132vw",
				"ordonnee": "12.305405502914144vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "31.956538851334805vw",
				"ordonnee": "12.417576002072863vw",
				"libelle": "",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"01_decomposition_sequentielle/4_sous_problemes"}]},{nom:`Alternatives - 2 cas
`,nomCourt:"",contenu:[{nom:`Décomposition alternative (2 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>deux</strong> situations distinctes.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>


`,algo:'[{"typeElement":"Probleme","abscisse":"32.712418300653596vw","ordonnee":"2.461601307189543vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"37.679738562091515vw","ordonnee":"8.000000000000004vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"02_alternatives_2_cas/1_variante_1"},{nom:`Décomposition alternative (2 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant <strong>deux</strong> situations distinctes et leur sous-problème associé.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"StructureSi","abscisse":"39.18300653594771vw","ordonnee":"4.636437908496745vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"25.392156862745082vw","ordonnee":"11.677287581699368vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"42.77777777777777vw","ordonnee":"11.873366013071909vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"02_alternatives_2_cas/2_variante_2"},{nom:`Décomposition alternative (2 cas) avec problème et sous-problèmes.
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant un <strong>problème</strong> décomposé en  <strong>deux</strong> situations distinctes avec leur sous-problème associé.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>


`,algo:'[{"typeElement":"Probleme","abscisse":"28.529411764705877vw","ordonnee":"15.991013071895406vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"33.49673202614379vw","ordonnee":"21.84313725490196vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"19.70588235294116vw","ordonnee":"28.883986928104584vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"37.09150326797385vw","ordonnee":"29.080065359477125vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"02_alternatives_2_cas/3_variante_3"}]},{nom:`Allternatives - 3 cas
`,nomCourt:"",contenu:[{nom:`Décomposition alternative (3 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>trois</strong> situations distinctes.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"32.67973856209151vw","ordonnee":"6.614379084967315vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"32.64705882352943vw","ordonnee":"12.152777777777782vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"03_alternatives_3_cas/1_variante_1"},{nom:`Décomposition alternative (2 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant <strong>trois </strong>situations distinctes et leur sous-problème associé.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>


`,algo:'[{"typeElement":"StructureSi","abscisse":"38.59477124183008vw","ordonnee":"11.647058823529413vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"24.80392156862744vw","ordonnee":"18.491830065359494vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"38.66013071895427vw","ordonnee":"18.491830065359487vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"52.385620915032696vw","ordonnee":"18.474673202614376vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"03_alternatives_3_cas/2_variante_2"},{nom:`Décomposition alternative (3 cas) avec problème et sous-problèmes.
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant un <strong>problème</strong> décomposé en  <strong>trois</strong> situations distinctes avec leur sous-problème associé.
</p>

<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"38.59477124183008vw","ordonnee":"5.991013071895441vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"38.59477124183008vw","ordonnee":"11.647058823529413vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"24.80392156862744vw","ordonnee":"18.491830065359494vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"38.59477124183012vw","ordonnee":"18.670751633986917vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"52.45098039215685vw","ordonnee":"19.01470588235295vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"03_alternatives_3_cas/3_variante_3"}]},{nom:`Alternatives - 4 cas
`,nomCourt:"",contenu:[{nom:`Décomposition alternative (4 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>quatre</strong> situations distinctes.
</p>


<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
<p>
<strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
Important :
</strong>
</p>
<p>Les conditions doivent être :</p>
<ul style="margin-top: -7px;">
    <li>formalisées de manière précise et sans ambiguïté ;</li>
    <li>exclusives les unes des autres.</li>
</ul>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"41.92810457516339vw","ordonnee":"20.666666666666668vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"36.92810457516342vw","ordonnee":"26.074346405228766vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"04_alternatives_4_cas/1_variante_1"},{nom:`Décomposition alternative (2 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
    Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant <strong>quatre</strong> situations distinctes et leur sous-problème associé.
</p>



<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
    <p>
        <strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
            </svg>
            Important :
        </strong>
    </p>
    <p>Les conditions doivent être :</p>
    <ul style="margin-top: -7px;">
        <li>formalisées de manière précise et sans ambiguïté ;</li>
        <li>exclusives les unes des autres.</li>
    </ul>

    <!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"StructureSi","abscisse":"33.62745098039215vw","ordonnee":"20.601307189542478vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"20.555555555555525vw","ordonnee":"27.44607843137256vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"32.12418300653595vw","ordonnee":"27.446078431372552vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"44.477124183006545vw","ordonnee":"27.428921568627473vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"56.50326797385623vw","ordonnee":"27.36356209150326vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"04_alternatives_4_cas/2_variante_2"},{nom:`Décomposition alternative (4 cas) avec problème et sous-problèmes.
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
    Cette brique algorithmique représente une structure  <strong>alternative</strong> considérant un <strong>problème</strong> décomposé en <strong>quatre</strong> situations distinctes avec leur sous-problème associé.
</p>



<p>Chaque situation doit être caractérisée et identifiée via une <strong>condition</strong> à formaliser.</p>

<br>
    <p>
        <strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
            </svg>
            Important :
        </strong>
    </p>
    <p>Les conditions doivent être :</p>
    <ul style="margin-top: -7px;">
        <li>formalisées de manière précise et sans ambiguïté ;</li>
        <li>exclusives les unes des autres.</li>
    </ul>

    <!-- Mots clés pour la recherche -->
<div style="display: none;">
alternative
condition
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"38.59477124183007vw","ordonnee":"15.141339869281033vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"33.62745098039215vw","ordonnee":"20.601307189542478vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"20.555555555555525vw","ordonnee":"27.44607843137256vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"32.12418300653595vw","ordonnee":"27.446078431372552vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"44.477124183006545vw","ordonnee":"27.428921568627473vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"56.50326797385623vw","ordonnee":"27.36356209150326vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"04_alternatives_4_cas/3_variante_3"}]},{nom:`Switch - 2 cas
`,nomCourt:"",contenu:[{nom:`Décomposition Switch (2 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>deux</strong> situations distinctes dépendant de la <strong>valeur</strong> spécifique d'une <strong>expression</strong>.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>lumiere</i> ("<i>allumee</i>" ou "<i>eteinte</i>").
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"40.55555555555556vw","ordonnee":"7.0434782608695645vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSwitch","abscisse":"45.563607085346305vw","ordonnee":"12.546430488459468vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"10_switch_2_cas/1_variante_1"},{nom:`Décomposition Switch (2 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>alternative</strong> considérant <strong>deux</strong> situations distinctes et leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>lumiere</i> ("<i>allumee</i>" ou "<i>eteinte</i>").
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"StructureSwitch","abscisse":"35.986442886333364vw","ordonnee":"22.552171915465053vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"22.394957983193244vw","ordonnee":"29.07758103241302vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"38.48139255702277vw","ordonnee":"29.017557022809168vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"10_switch_2_cas/2_variante_2"},{nom:`Décomposition alternative (2 cas) avec problème et sous-problèmes.
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong>  en  <strong>deux</strong> situations distinctes avec leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>lumiere</i> ("<i>allumee</i>" ou "<i>eteinte</i>").
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"28.529411764705877vw","ordonnee":"15.991013071895406vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"33.49673202614379vw","ordonnee":"21.84313725490196vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"19.70588235294116vw","ordonnee":"28.883986928104584vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"37.09150326797385vw","ordonnee":"29.080065359477125vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"10_switch_2_cas/3_variante_3"}]},{nom:`Switch - 3 cas
`,nomCourt:"",contenu:[{nom:`Décomposition Switch (3 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>trois</strong> situations distinctes dépendant de la <strong>valeur</strong> spécifique d'une <strong>expression</strong>.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>feuTricolore</i> ("<i>vert</i>", "<i>orange</i>" ou "<i>rouge</i>").
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"41.62064825930373vw","ordonnee":"12.847539015606245vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSwitch","abscisse":"41.628699789094476vw","ordonnee":"18.350491243196146vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"11_switch_3_cas/1_variante_1"},{nom:`Décomposition Switch (3 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>alternative</strong> considérant <strong>trois</strong> situations distinctes et leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>feuTricolore</i> ("<i>vert</i>", "<i>orange</i>" ou "<i>rouge</i>").
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"StructureSwitch","abscisse":"34.69987995198079vw","ordonnee":"15.54861944777911vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"21.494597839135615vw","ordonnee":"22.354891956782794vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"34.63985594237691vw","ordonnee":"22.414915966386662vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"47.72509003601437vw","ordonnee":"22.534963985594256vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"11_switch_3_cas/2_variante_2"},{nom:`Décomposition alternative (3 cas) avec problème et sous-problèmes
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong>  en  <strong>trois</strong> situations distinctes avec leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple
</strong>
</p>
<br>
<p>
Déterminer une action à réaliser selon la <strong>valeur</strong> de la variable <i>feuTricolore</i> ("<i>vert</i>", "<i>orange</i>" ou "<i>rouge</i>").
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"41.18247298919572vw","ordonnee":"10.986794717887154vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"41.16780045351477vw","ordonnee":"16.598822862478336vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"28.157262905162074vw","ordonnee":"23.21950446845408vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"41.161131119114366vw","ordonnee":"23.115462851807415vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"54.86794717887156vw","ordonnee":"23.015156062424968vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"11_switch_3_cas/3_variante_3"}]},{nom:`Switch - 4 cas
`,nomCourt:"",contenu:[{nom:`Décomposition Switch (3 cas) avec problème
`,nomCourt:`Avec problème
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong> en <strong>quatre</strong> situations distinctes dépendant de la <strong>valeur</strong> spécifique d'une <strong>expression</strong>.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"41.96278511404561vw","ordonnee":"10.506602641056423vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSwitch","abscisse":"36.98884384671752vw","ordonnee":"15.8294828398348vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]},{"typeElement":"Condition","libelle":"","enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"12_switch_4_cas/1_variante_1"},{nom:`Décomposition Switch (4 cas) avec sous-problèmes
`,nomCourt:`Avec sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>alternative</strong> considérant <strong>quatre</strong> situations distinctes et leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"StructureSwitch","abscisse":"41.24249699879952vw","ordonnee":"11.346938775510203vw","expressionATester":"","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"27.25690276110432vw","ordonnee":"18.513355342136972vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"39.44177671068429vw","ordonnee":"18.573379351740858vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"52.40696278511405vw","ordonnee":"18.513355342136936vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"65.01200480192098vw","ordonnee":"18.51335534213688vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"12_switch_4_cas/2_variante_2"},{nom:`Décomposition alternative (4 cas) avec problème et sous-problèmes
`,nomCourt:`Avec problème et sous-problèmes
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>alternative</strong>  en  <strong>quatre</strong> situations distinctes avec leur sous-problème associé. Chaque situation est caractérisée par une <strong>valeur</strong> spécifique d'une <strong>expression</strong> donnée.</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
switch
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"45.56422569027609vw","ordonnee":"12.547418967587037vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"40.56756035747632vw","ordonnee":"18.099423102574377vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"28.337334933973544vw","ordonnee":"24.419984660530922vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"39.78057889822598vw","ordonnee":"24.435991063091937vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"51.086434573829514vw","ordonnee":"24.515756302521005vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"Probleme","abscisse":"62.85114045618257vw","ordonnee":"24.455732292917144vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"12_switch_4_cas/3_variante_3"}]},{nom:`Itérations bornées
`,nomCourt:"",contenu:[{nom:`Problème décomposé par une itération bornée répétant la résolution de deux sous-problèmes
`,nomCourt:`Pb et 2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>itérative</strong> en <strong>deux</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"35.72028811524609vw","ordonnee":"17.229291716686674vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeBornee","abscisse":"48.7394957983194vw","ordonnee":"22.90561224489796vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"29.537815126050422vw","ordonnee":"29.954381752701096vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"41.54261704681874vw","ordonnee":"29.89435774309726vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/01_probleme_et_2_sous_problemes"},{nom:`Structure itérative bornée répétant la résolution de deux sous-problèmes
`,nomCourt:`2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> répétant un nombre de fois connu la résolution de <strong>deux</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"StructureIterativeBornee","abscisse":"47.779111644657945vw","ordonnee":"20.444627851140456vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"28.577430972388964vw","ordonnee":"27.493397358943596vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"40.58223289315728vw","ordonnee":"27.43337334933976vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/02_2_sous_problemes"},{nom:`Problème décomposé par une itération bornée répétant la résolution de trois sous-problèmes
`,nomCourt:`Pb et 3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>itérative</strong> en <strong>trois</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"33.272138228941685vw","ordonnee":"10.52267818574514vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeBornee","abscisse":"46.291345912015vw","ordonnee":"15.713037590846273vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"21.312127442769775vw","ordonnee":"22.76180709864941vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"33.26293368319252vw","ordonnee":"22.755778769391146vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"45.367170626349896vw","ordonnee":"22.84098272138229vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/03_probleme_et_3_sous_problemes"},{nom:`Structure itérative bornée répétant la résolution de trois sous-problèmes
`,nomCourt:`3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> répétant un nombre de fois connu la résolution de <strong>trois</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"StructureIterativeBornee","abscisse":"50.766738660907116vw","ordonnee":"8.362850971922246vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"25.895511552353042vw","ordonnee":"15.357624799379813vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"37.73832643208464vw","ordonnee":"15.459587830812694vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"49.79481641468683vw","ordonnee":"15.497570194384448vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/04_3_sous_problemes"},{nom:`Problème décomposé par une itération bornée répétant la résolution de quatre sous-problèmes
`,nomCourt:`Pb et 4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> et sa décomposition <strong>itérative</strong> en <strong>quatre</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"40.183585313174945vw","ordonnee":"10.738660907127432vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeBornee","abscisse":"53.202792996248256vw","ordonnee":"16.091007353265283vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"22.176058328298932vw","ordonnee":"23.301763902105137vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"34.12686456872168vw","ordonnee":"23.295735572846873vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"46.231101511879054vw","ordonnee":"23.380939524838016vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"58.4341252699784vw","ordonnee":"23.434935205183585vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/05_probleme_et_4_sous_problemes"},{nom:`Structure itérative bornée répétant la résolution de quatre sous-problèmes
`,nomCourt:`4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> répétant un nombre de fois connu la résolution de <strong>quatre</strong> <strong>sous-problèmes</strong>. Le nombre de répétitions est <strong>connu</strong> et déterminé en fonction des valeurs de BORNE_INF et BORNE_SUP.
</p>

<p>Pour un pas de 1 :</p>
<ul style="margin-top: -5px;">
   <li><i>nbRepetitions = BORNE_SUP - BORNE_INF + 1</i> si le pas est <strong>croissant </strong>;</li>
      <li><i>nbRepetitions = BORNE_INF - BORNE_SUP + 1</i> si le pas est <strong>décroissant </strong>.</li>
</ul>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la formule de calcul produit un résultat négatif ou nul, cela signifie que l'algorithme ne réalisera aucune répétition.
</p>

<br>
<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Pensez à définir :</p>
<ul style="margin-top: -7px;">
    <li>la valeur de départ BORNE_INF et la valeur d'arrivée BORNE_SUP ;</li>
    <li>la valeur du pas et sa nature (croissant / décroissant).</li>
</ul>
<p style="margin-top : -10px;">
Surtout ne modifiez pas la valeur de l'indice de boucle au sein des actions répétées !
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
Conseil :
</strong> Si votre indice de boucle peut porter un nom plus significatif que <strong>i</strong>, n'hésitez pas à le changer.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
borne
</div>
`,algo:'[{"typeElement":"StructureIterativeBornee","abscisse":"52.386609071274286vw","ordonnee":"11.872570194384451vw","variableAIterer":"i","borneInferieure":"BORNE_INF","borneSuperieure":"BORNE_SUP","pas":"1","croissant":true,"enfants":[{"typeElement":"Probleme","abscisse":"21.359874403324966vw","ordonnee":"18.381382898731868vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"33.202689283056564vw","ordonnee":"18.48334593016475vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"45.25917926565875vw","ordonnee":"18.521328293736502vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"57.30021598272139vw","ordonnee":"18.68331533477322vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"20_iterations_bornees/06_4_sous_problemes"}]},{nom:`Itérations NON bornées - Condition au début
`,nomCourt:"",contenu:[{nom:`Problème décomposé par une itération répétant la résolution d'un sous-problème tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`Pb et 1 sous-pb
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution d'<strong>un</strong> <strong>sous-problème</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, le sous-problème n'est pas traité et le problème de plus haut niveau est considéré comme résolu.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"42.505399568034555vw","ordonnee":"10.52996760259179vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"55.507559395248386vw","ordonnee":"15.874730021598271vw","enfants":[{"typeElement":"StructureSi","abscisse":"45.539956803455716vw","ordonnee":"21.59611231101512vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"48.54211663066954vw","ordonnee":"26.727861771058315vw"}]}]},{"typeElement":"Probleme","abscisse":"48.768898488120946vw","ordonnee":"21.599082073434126vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/01_probleme_et_1_sous_probleme"},{nom:`Structure itérative répétant la résolution d'un sous-problème tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`1 sous-pb
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution d'<strong>un</strong> <strong>sous-problème</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, le sous-problème n'est pas traité.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"40.76673866090714vw","ordonnee":"24.83072354211663vw","enfants":[{"typeElement":"StructureSi","abscisse":"30.799136069114468vw","ordonnee":"30.55210583153348vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"33.80129589632829vw","ordonnee":"35.68385529157668vw"}]}]},{"typeElement":"Probleme","abscisse":"34.0280777537797vw","ordonnee":"30.555075593952488vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/02_1_sous_probleme"},{nom:`Problème décomposé par une itération répétant la résolution de deux sous-problèmes tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`Pb et 2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>deux</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, aucun des sous-problèmes n'est traité et le problème de plus haut niveau est considéré comme résolu.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"45.885385081867774vw","ordonnee":"11.101273499090357vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"58.887544909081605vw","ordonnee":"16.44603591809684vw","enfants":[{"typeElement":"StructureSi","abscisse":"42.67373249315312vw","ordonnee":"22.04613257986056vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"45.67589232036694vw","ordonnee":"27.177882039903764vw"}]}]},{"typeElement":"Probleme","abscisse":"45.90267417781835vw","ordonnee":"22.049102342279568vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"58.013947847180134vw","ordonnee":"22.0640539721043vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/03_probleme_et_2_sous_problemes"},{nom:`Structure itérative répétant la résolution de deux sous-problème tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>deux</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, les sous-problèmes ne sont pas traités.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"37.0315342631898vw","ordonnee":"13.345057610673138vw","enfants":[{"typeElement":"StructureSi","abscisse":"20.817721847261303vw","ordonnee":"19.06643990008999vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"23.819881674475127vw","ordonnee":"24.198189360133185vw"}]}]},{"typeElement":"Probleme","abscisse":"24.046663531926534vw","ordonnee":"19.069409662508995vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"36.42510612492423vw","ordonnee":"19.153198908429346vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/04_2_sous_problemes"},{nom:`Problème décomposé par une itération répétant la résolution de trois sous-problèmes tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`Pb et 3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>trois</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, aucun des sous-problèmes n'est traité et le problème de plus haut niveau est considéré comme résolu.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"43.3383869011522vw","ordonnee":"11.101273499090357vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"56.34054672836603vw","ordonnee":"16.44603591809684vw","enfants":[{"typeElement":"StructureSi","abscisse":"33.880524488301724vw","ordonnee":"22.228061021340245vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"36.88268431551555vw","ordonnee":"27.359810481383448vw"}]}]},{"typeElement":"Probleme","abscisse":"37.109466172966954vw","ordonnee":"22.231030783759252vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"49.16009702850218vw","ordonnee":"22.245982413583985vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"61.47058823529413vw","ordonnee":"22.245982413583988vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/05_probleme_et_3_sous_problemes"},{nom:`Structure itérative répétant la résolution de 3 sous-problèmes tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>trois</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, les sous-problèmes ne sont pas traités.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"56.67980594299571vw","ordonnee":"10.67677380230444vw","enfants":[{"typeElement":"StructureSi","abscisse":"33.916569633798595vw","ordonnee":"16.519441719374417vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"36.91872946101242vw","ordonnee":"21.651191179417612vw"}]}]},{"typeElement":"Probleme","abscisse":"37.14551131846382vw","ordonnee":"16.522411481793423vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"49.52395391146152vw","ordonnee":"16.606200727713773vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"61.8344451182535vw","ordonnee":"16.666843541540324vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/06_3_sous_problemes"},{nom:`Problème décomposé par une itération répétant la résolution de quatre sous-problèmes tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`Pb et 4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>quatre</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, aucun des sous-problèmes n'est traité et le problème de plus haut niveau est considéré comme résolu.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"33.392965433596096vw","ordonnee":"13.284414796846576vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"46.39512526080993vw","ordonnee":"18.62917721585306vw","enfants":[{"typeElement":"StructureSi","abscisse":"18.113392893395734vw","ordonnee":"24.65377357440271vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"21.115552720609557vw","ordonnee":"29.785523034445916vw"}]}]},{"typeElement":"Probleme","abscisse":"21.342334578060964vw","ordonnee":"24.656743336821716vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"33.39296543359619vw","ordonnee":"24.67169496664645vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"45.70345664038814vw","ordonnee":"24.671694966646452vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"57.46816252274108vw","ordonnee":"24.792980594299575vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/07_probleme_et_4_sous_problemes"},{nom:`Structure itérative répétant la résolution de 4 sous-problèmes tant qu'une condition d'arrêt n'est pas vérifiée
`,nomCourt:`4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>quatre</strong> <strong>sous-problèmes</strong> tant qu'une <strong>condition d'arrêt</strong> n'est pas vérifiée. Cette condition d'arrêt est évaluée au <strong>début</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Si la condition d'arrêt est vérifiée dès la première itération, les sous-problèmes ne sont pas traités.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
début
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"52.07095209217704vw","ordonnee":"8.311704063068532vw","enfants":[{"typeElement":"StructureSi","abscisse":"23.48600565563004vw","ordonnee":"14.3363004216182vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"26.488165482843865vw","ordonnee":"19.468049881661397vw"}]}]},{"typeElement":"Probleme","abscisse":"26.714947340295264vw","ordonnee":"14.339270184037206vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"39.09338993329295vw","ordonnee":"14.423059429957556vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"51.403881140084934vw","ordonnee":"14.483702243784103vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"63.350515463917546vw","ordonnee":"14.483702243784109vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"30_iterations_non_bornees_condition_debut/08_4_sous_problemes"}]},{nom:`Itérations NON bornées - Condition en fin
`,nomCourt:"",contenu:[{nom:`Problème décomposé par une itération répétant la résolution d'un sous-problème jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`Pb et 1 sous-pb
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution d'<strong>un</strong> <strong>sous-problème</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Le sous-problème répété est traité au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"38.608247422680414vw","ordonnee":"14.800485142510613vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"51.60703456640388vw","ordonnee":"19.783126137052765vw","enfants":[{"typeElement":"Probleme","abscisse":"31.63432383262583vw","ordonnee":"25.776834445118258vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"55.40024257125531vw","ordonnee":"25.969906003638574vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"58.33838690115223vw","ordonnee":"31.790403274711963vw"}]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/01_probleme_et_1_sous_probleme"},{nom:`Structure itérative répétant la résolution d'un sous-problème jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`1 sous-pb
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution d'<strong>un</strong> <strong>sous-problème</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Le sous-problème répété est traité au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"51.60703456640388vw","ordonnee":"19.783126137052765vw","enfants":[{"typeElement":"Probleme","abscisse":"31.63432383262583vw","ordonnee":"25.776834445118258vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"55.40024257125531vw","ordonnee":"25.969906003638574vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"58.33838690115223vw","ordonnee":"31.790403274711963vw"}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/02_1_sous_probleme"},{nom:`Problème décomposé par une itération répétant la résolution de deux sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`Pb et 2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>deux</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"25.024257125530642vw","ordonnee":"10.616130988477867vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"38.023044269254115vw","ordonnee":"15.598771983020018vw","enfants":[{"typeElement":"Probleme","abscisse":"25.024257125530617vw","ordonnee":"21.835051546391757vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"48.7901758641601vw","ordonnee":"22.028123104912073vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"51.72832019405701vw","ordonnee":"27.848620375985462vw"}]}]},{"typeElement":"Probleme","abscisse":"11.864766525166766vw","ordonnee":"21.760839902971494vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/03_probleme_et_2_sous_problemes"},{nom:`Structure itérative répétant la résolution de deux sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>deux</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"38.97210430563981vw","ordonnee":"15.10369921164342vw","enfants":[{"typeElement":"Probleme","abscisse":"25.973317161916313vw","ordonnee":"21.40062158884172vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"49.73923590054579vw","ordonnee":"21.593693147362035vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"52.67738023044271vw","ordonnee":"27.414190418435425vw"}]}]},{"typeElement":"Probleme","abscisse":"13.805336567616727vw","ordonnee":"21.396983020012126vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/04_2_sous_problemes"},{nom:`Problème décomposé par une itération répétant la résolution de trois sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`Pb et 3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>trois</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"32.11946634323836vw","ordonnee":"13.345057610673138vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"45.11825348696183vw","ordonnee":"18.32769860521529vw","enfants":[{"typeElement":"Probleme","abscisse":"38.244390539721024vw","ordonnee":"24.806549423893273vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"62.010309278350505vw","ordonnee":"24.99962098241359vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"64.94845360824742vw","ordonnee":"30.82011825348698vw"}]}]},{"typeElement":"Probleme","abscisse":"25.08489993935717vw","ordonnee":"24.73233778047301vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"12.77440873256519vw","ordonnee":"24.792980594299568vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/05_probleme_et_3_sous_problemes"},{nom:`Structure itérative répétant la résolution de trois sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`3 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>trois</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"57.04366282595517vw","ordonnee":"5.582777440873259vw","enfants":[{"typeElement":"Probleme","abscisse":"49.92722862340811vw","ordonnee":"12.061628259551247vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"73.69314736203759vw","ordonnee":"12.254699818071563vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"76.6312916919345vw","ordonnee":"18.075197089144957vw"}]}]},{"typeElement":"Probleme","abscisse":"37.75924802910853vw","ordonnee":"12.057989690721653vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"25.873256519102462vw","ordonnee":"12.118632504548208vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/06_3_sous_problemes"},{nom:`Problème décomposé par une itération répétant la résolution de quatre sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`Pb et 4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution de <strong>quatre</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"42.345969466121986vw","ordonnee":"7.217920172809887vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"55.34475660984545vw","ordonnee":"12.200561167352038vw","enfants":[{"typeElement":"Probleme","abscisse":"55.50546006648577vw","ordonnee":"18.61876917220346vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"79.27137880511523vw","ordonnee":"18.811840730723777vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"82.20952313501215vw","ordonnee":"24.63233800179717vw"}]}]},{"typeElement":"Probleme","abscisse":"42.345969466121915vw","ordonnee":"18.544557528783198vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"30.035478259329924vw","ordonnee":"18.605200342609756vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"18.33141519080351vw","ordonnee":"18.605200342609763vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/07_probleme_et_4_sous_problemes"},{nom:`Structure itérative répétant la résolution de quatre sous-problèmes jusqu'à ce qu'une condition d'arrêt soit vérifiée
`,nomCourt:`4 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution de <strong>quatre</strong> <strong>sous-problèmes</strong> jusqu'à ce qu'une <strong>condition d'arrêt</strong> soit vérifiée. Cette condition d'arrêt est évaluée à la <strong>fin</strong> de chaque itération.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les sous-problèmes répétés sont traités au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
fin
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"67.9746085220539vw","ordonnee":"10.03343939110363vw","enfants":[{"typeElement":"Probleme","abscisse":"67.15925361328681vw","ordonnee":"16.449903286080822vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"90.92517235191629vw","ordonnee":"16.642974844601138vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"93.8633166818132vw","ordonnee":"22.463472115674527vw"}]}]},{"typeElement":"Probleme","abscisse":"54.99127301898716vw","ordonnee":"16.44626471725123vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"43.10528150898109vw","ordonnee":"16.506907531077783vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"31.291097385987896vw","ordonnee":"16.528237881340072vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"40_iterations_non_bornees_condition_fin/08_4_sous_problemes"}]},{nom:`Itérations NON bornées - Condition au milieu
`,nomCourt:"",contenu:[{nom:`Problème décomposé par une itération répétant la résolution d'un à deux sous-problèmes
`,nomCourt:`Pb et 2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente un <strong>problème</strong> dont la décomposition <strong>itérative</strong> répète la résolution d'<strong>un</strong> à <strong>deux</strong>  <strong>sous-problèmes</strong>. La répétition prend fin lorsqu' une <strong>condition d'arrêt</strong> est vérifiée, sachant que cette condition est évaluée à chaque itération, après la résolution du premier sous-problème.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Le 1er sous-problème répété est traité au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
milieu
</div>
`,algo:'[{"typeElement":"Probleme","abscisse":"38.902302077484556vw","ordonnee":"5.797687004803793vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"51.9059205190592vw","ordonnee":"11.29203318984341vw","enfants":[{"typeElement":"Probleme","abscisse":"25.36433963441263vw","ordonnee":"17.089720194647203vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"48.902302077484556vw","ordonnee":"17.33994634724562vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"51.9059205190592vw","ordonnee":"23.395096387797114vw"}]}]},{"typeElement":"Probleme","abscisse":"51.878782207249344vw","ordonnee":"17.214494042048788vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"50_iterations_non_bornees_condition_milieu/01_probleme_et_2_sous_probleme"},{nom:`Structure itérative répétant la résolution d'un à deux sous-problèmes.
`,nomCourt:`2 sous-pbs
`,descriptif:`<p>
Cette brique algorithmique représente une structure <strong>itérative</strong> qui  répète la résolution d'<strong>un</strong> à <strong>deux</strong> <strong>sous-problèmes</strong>.  La répétition prend fin lorsqu' une <strong>condition d'arrêt</strong> est vérifiée, sachant que cette condition est évaluée à chaque itération, après la résolution du premier sous-problème.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Le 1er sous-problème répété est traité au moins une fois.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
boucle
répétition
itération
arrêt
milieu
</div>
`,algo:'[{"typeElement":"StructureIterativeNonBornee","abscisse":"61.88782831118598vw","ordonnee":"17.58655405826939vw","enfants":[{"typeElement":"Probleme","abscisse":"35.346247426539406vw","ordonnee":"23.384241063073183vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"58.88420986961133vw","ordonnee":"23.6344672156716vw","conditions":[{"typeElement":"Condition","libelle":"","enfants":[{"typeElement":"ConditionSortie","abscisse":"61.88782831118598vw","ordonnee":"29.689617256223087vw"}]}]},{"typeElement":"Probleme","abscisse":"61.86068999937612vw","ordonnee":"23.509014910474768vw","libelle":" ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"DictionnaireDonnee"}]',path:"50_iterations_non_bornees_condition_milieu/02_2_sous_problemes"}]},{nom:"Modèles simples",nomCourt:"",contenu:[{nom:`Echange de deux valeurs
`,nomCourt:`Echange de 2 valeurs
`,descriptif:`<p>Ce modèle permet d'échanger deux valeurs de type simple : nombres entiers,
nombres décimaux, caractères, chaînes de caractères, booléens...
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
échange
</div>
`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "30.381526104417656vw",
		"ordonnee": "5.876362593230061vw",
		"libelle": "Échanger",
		"listeDonnes": ["valeur1", " valeur2\\n\\n"],
		"listeResultats": ["valeur1", " valeur2\\n\\n"],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "18.333333333333357vw",
				"ordonnee": "14.482214572575998vw",
				"libelle": "copieValeur1 <- valeur 1",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "30.20940906483078vw",
				"ordonnee": "14.367469879518099vw",
				"libelle": "valeur1 <- valeur2",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			},
			{
				"typeElement": "Probleme",
				"abscisse": "41.626506024096386vw",
				"ordonnee": "14.424842226047032vw",
				"libelle": "valeur2 <- copieValeur1",
				"listeDonnes": [""],
				"listeResultats": [""],
				"enfants": []
			}
		]
	}
]
`,path:"60_modeles_simples/01_echange"},{nom:`Saisie-vérif
`,nomCourt:"",descriptif:`<p>Ce modèle permet de saisir une valeur (entier, caractère...) vérifiant une
propriété <strong>P</strong> donnée.</p>

<p>Si la valeur saisie ne respecte pas la propriété <strong>P</strong> attendue, le modèle invite
l'utilisateur à renouveler sa saisie jusqu'à ce qu'il saisisse une valeur
correcte.</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple :
</strong>
</p>
<p>
Saisir une note dont la valeur est comprise entre 0 et 20.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
saisie
saisie-vérif
</div>



`,algo:'[{"typeElement":"Probleme","abscisse":"40.019839041736844vw","ordonnee":"12.59130326283611vw","libelle":"saisie vérif","listeDonnes":[""],"listeResultats":["valeur vérifiant la propriété P"],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"53.031534948169586vw","ordonnee":"17.539402678040755vw","enfants":[{"typeElement":"Probleme","abscisse":"29.45258757974856vw","ordonnee":"25.456800338859452vw","libelle":"saisir valeur","listeDonnes":[""],"listeResultats":["valeur"],"enfants":[]},{"typeElement":"StructureSi","abscisse":"59.14264605928062vw","ordonnee":"25.954607356403343vw","conditions":[{"typeElement":"Condition","libelle":"valeur vérifie P","enfants":[{"typeElement":"ConditionSortie","abscisse":"62.12510219963151vw","ordonnee":"31.691449461666494vw"}]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"60_modeles_simples/02_saisie_verif"},{nom:`Saisie-vérif avec message d'erreur
`,nomCourt:`Saisie-vérif + message d'erreur
`,descriptif:`<p>Ce modèle permet de saisir une valeur (entier, caractère...) vérifiant une
propriété <strong>P</strong> donnée et d'afficher un message d'erreur en cas de saisie
incorrecte.</p>

<p>
Si la valeur saisie ne respecte pas la propriété <strong>P</strong> attendue, le modèle affiche un
message d'erreur puis invite l'utilisateur à renouveler sa saisie jusqu'à ce
qu'il saisisse une valeur correcte.
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemple :
</strong>
</p>

<p>
Saisir une note dont la valeur est comprise entre 0 et 20.
</p>

<!-- Mots clés pour la recherche -->
<div style="display: none;">
saisie
saisie-vérif
message
erreur
</div>

`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "45.82725060827249vw",
		"ordonnee": "8.84808784078857vw",
		"libelle": "Saisie - Vérif avec message d'erreur",
		"listeDonnes": [""],
		"listeResultats": ["valeur vérifiant la propriété P\\n\\n"],
		"enfants": [
			{
				"typeElement": "StructureIterativeNonBornee",
				"abscisse": "58.82016678300693vw",
				"ordonnee": "14.3338692937233vw",
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "27.133001555695643vw",
						"ordonnee": "20.55381188891475vw",
						"libelle": "Saisir valeur",
						"listeDonnes": [""],
						"listeResultats": ["valeur"],
						"enfants": []
					},
					{
						"typeElement": "StructureSi",
						"abscisse": "55.80618599862132vw",
						"ordonnee": "20.75529745635916vw",
						"conditions": [
							{
								"typeElement": "Condition",
								"libelle": "valeur vérifie P",
								"enfants": [
									{
										"typeElement": "ConditionSortie",
										"abscisse": "58.81681173651979vw",
										"ordonnee": "26.297210089180908vw"
									}
								]
							}
						]
					},
					{
						"typeElement": "Probleme",
						"abscisse": "61.32107993753658vw",
						"ordonnee": "20.848971274983192vw",
						"libelle": "Afficher un message d'erreur",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee" }
]
`,path:"60_modeles_simples/03_saisie_verif_avec_message_erreur"}]},{nom:"Modèles de parcours",nomCourt:"",contenu:[{nom:`Parcours complet avec traitement systématique sur structure à accès direct
`,nomCourt:"Complet - Traitement systématique - Accès direct",descriptif:`Ce modèle permet d'appliquer un traitement à tous les éléments situés entre une
borne de départ et une borne d'arrivée dans une structure à accès direct.<br /><br />

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Afficher la 1ère moitié d'un tableau ;</li>
   <li>Remplir toutes les cases d'un tableau ;</li>
   <li>Incrémenter de 1 toutes les valeurs d'un tableau ;</li>
   <li>Mettre en majuscule toutes les lettres d'une chaı̂ne de caractères.</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : La structure doit proposer des mécanismes d'accès direct (ce qui est le cas des chaînes de caractères et des tableaux par exemple).
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les éléments de la structure peuvent être ordonnés, ou pas. La
structure peut comporter des doublons ou pas.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
parcours
complet
systématique
accès
direct
</div>


`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.63903462749213vw",
		"ordonnee": "6.12447534102833vw",
		"libelle": "Parcours complet avec traitement systématique sur structure à accès direct",
		"listeDonnes": ["structureAccesDirect", "\\nborneDebut", " borneFin\\n"],
		"listeResultats": [""],
		"enfants": [
			{
				"typeElement": "StructureIterativeBornee",
				"abscisse": "45.61035327037427vw",
				"ordonnee": "11.612451906260926vw",
				"variableAIterer": "i",
				"borneInferieure": "borneDebut",
				"borneSuperieure": "borneFin",
				"pas": "1",
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "32.60405736271423vw",
						"ordonnee": "17.212268275620843vw",
						"libelle": "Traiter l'élément en position i dans structureAccesDirect",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"70_modeles_parcours/1_parcours_complet_avec_traitement_systematique_sur_structure_a_acces_direct"},{nom:`Parcours complet avec traitement conditionné sur structure à accès direct
`,nomCourt:"Complet - Traitement conditionné - Accès direct",descriptif:`<p>
Ce modèle permet d'appliquer un traitement à certains éléments d'une structure
vérifiant une propriété particulière. Le parcours complet induit une visite de
tous les éléments situés entre une borne de départ et une borne d'arrivée.
</p>


<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Compter le nombre de voyelles d'une chaı̂ne de caractères ;</li>
   <li>Afficher les nombres pairs situés dans la première partie d'un tableau.</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : La structure doit proposer des mécanismes d'accès direct (ce qui est le cas des chaînes de caractères et des tableaux par exemple).
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les éléments de la structure peuvent être ordonnés, ou pas. La
structure peut comporter des doublons ou pas.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
parcours
complet
conditionné
conditionnel
condition
accès
direct
</div>




`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.67401189227002vw",
		"ordonnee": "6.334338929695696vw",
		"libelle": "Parcours complet avec traitement conditionné sur structure à accès direct",
		"listeDonnes": ["structureAccesDirect", "\\nborneDebut", " borneFin\\n"],
		"listeResultats": [""],
		"enfants": [
			{
				"typeElement": "StructureIterativeBornee",
				"abscisse": "45.61035327037427vw",
				"ordonnee": "11.612451906260926vw",
				"variableAIterer": "i",
				"borneInferieure": "borneDebut",
				"borneSuperieure": "borneFin",
				"pas": "1",
				"enfants": [
					{
						"typeElement": "StructureSi",
						"abscisse": "42.60230849947535vw",
						"ordonnee": "17.2374956278419vw",
						"conditions": [
							{
								"typeElement": "Condition",
								"libelle": "L'élément courant vérifie la propriété recherchée",
								"enfants": [
									{
										"typeElement": "Probleme",
										"abscisse": "32.604057362714244vw",
										"ordonnee": "22.598767051416594vw",
										"libelle": "Traiter l'élément en position i dans structureAccesDirect",
										"listeDonnes": [""],
										"listeResultats": [""],
										"enfants": []
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"70_modeles_parcours/2_parcours_complet_avec_traitement_conditionnel_sur_structure_a_acces_direct"},{nom:`Parcours complet avec traitement systématique sur structure à accès séquentiel
`,nomCourt:`Complet - Traitement systématique - Accès séquentiel
`,descriptif:`<p>
Ce modèle permet d'appliquer un traitement à tous les éléments stockés dans une structure à accès <strong>séquentiel</strong>.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Remplir toutes les cases d'un tableau ;</li>
   <li>Incrémenter de 1 la valeur de chaque élément d'une file ;</li>
   <li>Afficher toutes les lignes d'un fichier de texte.</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : La structure doit proposer un mécanisme d'accès <strong>séquentiel</strong> (c'est le cas des piles, des files ou des fichiers texte par exemple)  ou <strong>direct</strong> (c'est le cas des chaînes de caractères ou des tableaux par exemple).
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les éléments de la structure peuvent être ordonnés, ou pas. La
structure peut comporter des doublons ou pas.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
parcours
complet
systématique
accès
séquentiel
</div>


`,algo:'[{"typeElement":"Probleme","abscisse":"41.46016594921704vw","ordonnee":"10.906856322914717vw","libelle":"Parcours complet avec traitement systématique sur structure à accès séquentiel","listeDonnes":["structure"],"listeResultats":[""],"enfants":[{"typeElement":"Probleme","abscisse":"35.90772973984654vw","ordonnee":"17.713589431655127vw","libelle":"Se positionner en début de structure ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureIterativeNonBornee","abscisse":"58.706095202445624vw","ordonnee":"18.154594796930564vw","enfants":[{"typeElement":"Probleme","abscisse":"34.410443571027514vw","ordonnee":"24.763311809844655vw","libelle":"Utiliser le mécanisme permettant de savoir si on est en fin de structure ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"44.410443571027514vw","ordonnee":"30.441200324411994vw","conditions":[{"typeElement":"Condition","libelle":"Fin de structure = vrai","enfants":[{"typeElement":"ConditionSortie","abscisse":"47.41406201260216vw","ordonnee":"35.81009420425478vw"}]}]}]},{"typeElement":"Probleme","abscisse":"45.702476760870915vw","ordonnee":"24.763311809844655vw","libelle":"Traiter l\'élément courant ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"57.056896874415195vw","ordonnee":"24.700924886143863vw","libelle":"Utiliser le mécanisme permetant d\'accéder à l\'élément suivant ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"70_modeles_parcours/3_parcours_complet_avec_traitement_systematique_sur_structure_a_acces_sequentiel"},{nom:`Parcours complet avec traitement conditionnel sur structure à accès séquentiel
`,nomCourt:`Complet - Traitement conditionnel - Accès séquentiel
`,descriptif:`<p>
Ce modèle permet d'appliquer un traitement à <strong>certains éléments</strong> vérifiant une <strong>propriété</strong> donné et stockés dans une structure à accès <strong>séquentiel</strong>.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Afficher les voyelles d'une chaîne de caractères ;</li>
   <li>Incrémenter de 1 tous les élément d'une file ayant une valeur < 10;</li>
   <li>Afficher les lignes d'un fichier de texte contenant le mot "algorithme".</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : La structure doit proposer un mécanisme d'accès <strong>séquentiel</strong> (c'est le cas des piles, des files ou des fichiers texte par exemple)  ou <strong>direct</strong> (c'est le cas des chaînes de caractères ou des tableaux par exemple).
</p>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Note :
</strong>
Les éléments de la structure peuvent être ordonnés, ou pas. La
structure peut comporter des doublons ou pas.
</p>


<!-- Mots clés pour la recherche -->
<div style="display: none;">
parcours
complet
conditionné
conditionnel
condition
accès
séquentiel
</div>


`,algo:'[{"typeElement":"Probleme","abscisse":"51.00536527543826vw","ordonnee":"13.527107118347995vw","libelle":"Parcours complet avec traitement conditionnel sur structure à accès séquentiel","listeDonnes":["structure"],"listeResultats":[""],"enfants":[{"typeElement":"Probleme","abscisse":"44.32996443945349vw","ordonnee":"20.271453303387613vw","libelle":"Se positionner en début de structure ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureIterativeNonBornee","abscisse":"69.43664607898168vw","ordonnee":"20.837232516064635vw","enfants":[{"typeElement":"Probleme","abscisse":"42.271195957327336vw","ordonnee":"27.38356260527793vw","libelle":"Utiliser le mécanisme permettant de savoir si on est en fin de structure ","listeDonnes":[""],"listeResultats":[""],"enfants":[{"typeElement":"StructureSi","abscisse":"52.271195957327336vw","ordonnee":"33.06145111984527vw","conditions":[{"typeElement":"Condition","libelle":"Fin de structure = vrai","enfants":[{"typeElement":"ConditionSortie","abscisse":"55.27481439890198vw","ordonnee":"38.43034499968806vw"}]}]}]},{"typeElement":"Probleme","abscisse":"70.5324723937863vw","ordonnee":"27.44594952897873vw","libelle":"Utiliser le mécanisme permetant d\'accéder à l\'élément suivant ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"StructureSi","abscisse":"66.43302763740726vw","ordonnee":"27.446627986773954vw","conditions":[{"typeElement":"Condition","libelle":"L\'élément courant vérifie la propriété recherchée","enfants":[{"typeElement":"Probleme","abscisse":"56.414470154985175vw","ordonnee":"33.27607007853379vw","libelle":"Traiter l\'élément courant ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"70_modeles_parcours/4_parcours_complet_avec_traitement_conditionnel_sur_structure_a_acces_sequentiel"}]},{nom:"Modèles de recherche",nomCourt:"",contenu:[{nom:`Recherche de première occurrence, sans position et en séparant les conditions d'arrêt
`,nomCourt:`Première occurrence - Sans position - Conditions d'arrêt séparées
`,descriptif:`<p>
Ce modèle est à utiliser lorsqu'on recherche, dans un ensemble d'élements, le
premier élément satisfaisant une propriété particulière.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Déterminer si une valeur particulière se trouve dans un tableau d'entiers ;</li>
   <li>Chercher la position de la 1ère valeur supérieure à 100 dans un tableau de
valeurs.;</li>
</ul>


<p>
Le modèle se décline en différentes versions. Cette version :
</p>
<ul style="margin-top: -10px;">
  <li style="margin-top: 5px;">détermine uniquement si l'élément cherché est dans la structure ;</li>
  <li style="margin-top: 5px;"><strong>sépare les conditions d'arrêt</strong> :</li>
          <ul>
                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg>
                 Avantage : la recherche est stoppée dès que l'algorithme trouve l'élément recherché,
                 </li>

                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"/></svg>
                 Inconvénient : les conditions d'arrêt sont séparées, le codage ne peut pas se faire via une structure itérative standard de type while.
                 </li>
          </ul>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : aucune.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Notes :
</strong>
</p>

<ul style="margin-top: -10px;">
    <li style="margin-top: 5px;">les éléments de la structure peuvent être ordonnés ou pas ;</li>
    <li style="margin-top: 5px;">la structure peut comporter des doublons ou pas ;</li>
    <li style="margin-top: 5px;">le modèle d'algorithme est identique pour une structure à accès séquentiel et pour une structure à accès direct ;</li>
    <li style="margin-top: 5px;">la première occurrence fait référence au 1er élément rencontré vérifiant la
propriété recherchée. Ce 1er élément peut donc varier selon qu'on parcourt la
structure du début vers la fin ou de la fin vers le début...</li>
</ul>



`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.84889821615949vw",
		"ordonnee": "3.3962486883525704vw",
		"libelle": "Recherche de première occurrence",
		"listeDonnes": ["structure"],
		"listeResultats": ["trouve"],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "17.52885624344176vw",
				"ordonnee": "10.881383350821967vw",
				"libelle": "Initialiser la recherche",
				"listeDonnes": [""],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "10.25358516963974vw",
						"ordonnee": "18.05172263029031vw",
						"libelle": "Se positionner en début de structure",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					},
					{
						"typeElement": "Probleme",
						"abscisse": "22.845400489681708vw",
						"ordonnee": "18.156654424623994vw",
						"libelle": "trouve ← faux",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			},
			{
				"typeElement": "Probleme",
				"abscisse": "48.448758307100384vw",
				"ordonnee": "10.776451556488263vw",
				"libelle": "Effectuer la recherche",
				"listeDonnes": ["trouve"],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "StructureIterativeNonBornee",
						"abscisse": "61.45505421476043vw",
						"ordonnee": "18.95767750961872vw",
						"enfants": [
							{
								"typeElement": "Probleme",
								"abscisse": "29.21126267925845vw",
								"ordonnee": "24.80233473242393vw",
								"libelle": "Déterminer si on a analysé tous les éléments de la structure",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "39.17453655124162vw",
										"ordonnee": "30.039174536551236vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "Tous les éléments ont été analysés = vrai",
												"enfants": [
													{
														"typeElement": "ConditionSortie",
														"abscisse": "42.14760405736264vw",
														"ordonnee": "35.746764603008074vw"
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "46.245190626093vw",
								"ordonnee": "25.0121983210913vw",
								"libelle": "Vérifier si on a trouvé ce qu'on cherche",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "56.208464498076246vw",
										"ordonnee": "30.98356068555435vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "L'élément courant vérifie la propriété recherchée",
												"enfants": [
													{
														"typeElement": "Probleme",
														"abscisse": "40.36901014340675vw",
														"ordonnee": "37.21926372857646vw",
														"libelle": "trouve ← vrai",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													},
													{
														"typeElement": "ConditionSortie",
														"abscisse": "66.42182581322142vw",
														"ordonnee": "37.74046869534805vw"
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "60.935641832808685vw",
								"ordonnee": "24.697402938090224vw",
								"libelle": "Passer à l'élément suivant",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": []
							}
						]
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"80_modeles_recherches/1_recherche_1ere_occurrence_conditions_arret_separees_sans_position"},{nom:`Recherche de première occurrence avec position et en séparant les conditions d'arrêt
`,nomCourt:`Première occurrence - Avec position - Conditions d'arrêt séparées
`,descriptif:`<p>
Ce modèle est à utiliser lorsqu'on recherche, dans un ensemble d'élements, le
premier élément satisfaisant une propriété particulière.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Déterminer si une valeur particulière se trouve dans un tableau d'entiers ;</li>
   <li>Chercher la position de la 1ère valeur supérieure à 100 dans un tableau de
valeurs.</li>
</ul>


<p>
Le modèle se décline en différentes versions. Cette version :
</p>
<ul style="margin-top: -10px;">
  <li style="margin-top: 5px;">détermine via un booléen trouve si l'élément cherché est dans la structure. Si
c'est le cas, le modèle détermine également la <strong>position</strong> de cet élément dans la
structure ;</li>
  <li style="margin-top: 5px;"><strong>sépare les conditions d'arrêt</strong> :</li>
          <ul>
                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg>
                 Avantage : la recherche est stoppée dès que l'algorithme trouve l'élément recherché,
                 </li>

                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"/></svg>
                 Inconvénient : les conditions d'arrêt sont séparées, le codage ne peut pas se faire via une structure itérative standard de type while.
                 </li>
          </ul>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : aucune.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Notes :
</strong>
</p>

<ul style="margin-top: -10px;">
    <li style="margin-top: 5px;">les éléments de la structure peuvent être ordonnés ou pas ;</li>
    <li style="margin-top: 5px;">la structure peut comporter des doublons ou pas ;</li>
    <li style="margin-top: 5px;">le modèle d'algorithme est identique pour une structure à accès séquentiel et pour une structure à accès direct ;</li>
    <li style="margin-top: 5px;">la première occurrence fait référence au 1er élément rencontré vérifiant la
propriété recherchée. Ce 1er élément peut donc varier selon qu'on parcourt la
structure du début vers la fin ou de la fin vers le début...</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Si l'élément cherché n'est pas trouvé, l'élément <i>pos</i> contient une valeur NON pertinente.</p>



`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.8139209513816vw",
		"ordonnee": "3.3962486883525704vw",
		"libelle": "Recherche de première occurrence",
		"listeDonnes": ["structure"],
		"listeResultats": ["trouve", " [pos]"],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "17.52885624344176vw",
				"ordonnee": "10.881383350821967vw",
				"libelle": "Initialiser la recherche",
				"listeDonnes": [""],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "10.25358516963974vw",
						"ordonnee": "18.05172263029031vw",
						"libelle": "Se positionner en début de structure",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					},
					{
						"typeElement": "Probleme",
						"abscisse": "22.845400489681708vw",
						"ordonnee": "18.156654424623994vw",
						"libelle": "trouve ← faux",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			},
			{
				"typeElement": "Probleme",
				"abscisse": "48.448758307100384vw",
				"ordonnee": "10.776451556488263vw",
				"libelle": "Effectuer la recherche",
				"listeDonnes": ["trouve"],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "StructureIterativeNonBornee",
						"abscisse": "61.45505421476043vw",
						"ordonnee": "18.95767750961872vw",
						"enfants": [
							{
								"typeElement": "Probleme",
								"abscisse": "29.21126267925845vw",
								"ordonnee": "24.80233473242393vw",
								"libelle": "Déterminer si on a analysé tous les éléments de la structure",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "39.17453655124162vw",
										"ordonnee": "30.039174536551236vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "Tous les éléments ont été analysés = vrai",
												"enfants": [
													{
														"typeElement": "ConditionSortie",
														"abscisse": "42.14760405736264vw",
														"ordonnee": "35.746764603008074vw"
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "46.245190626093vw",
								"ordonnee": "25.0121983210913vw",
								"libelle": "Vérifier si on a trouvé ce qu'on cherche",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "56.208464498076246vw",
										"ordonnee": "30.98356068555435vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "L'élément courant vérifie la propriété recherchée",
												"enfants": [
													{
														"typeElement": "Probleme",
														"abscisse": "37.60580622595311vw",
														"ordonnee": "37.394150052465925vw",
														"libelle": "trouve ← vrai",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													},
													{
														"typeElement": "ConditionSortie",
														"abscisse": "74.50157397691495vw",
														"ordonnee": "37.635536901014376vw"
													},
													{
														"typeElement": "Probleme",
														"abscisse": "51.00209863588664vw",
														"ordonnee": "37.49908184679961vw",
														"libelle": "pos ← position courante",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "60.935641832808685vw",
								"ordonnee": "24.697402938090224vw",
								"libelle": "Passer à l'élément suivant",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": []
							}
						]
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"80_modeles_recherches/2_recherche_1ere_occurrence_conditions_arret_separees_avec_position"},{nom:`Recherche de première occurrence, sans position et en regroupant les conditions d'arrêt
`,nomCourt:`Première occurrence - Sans position - Conditions d'arrêt regroupées
`,descriptif:`<p>
Ce modèle est à utiliser lorsqu'on recherche, dans un ensemble d'élements, le
premier élément satisfaisant une propriété particulière.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Déterminer si une valeur particulière se trouve dans un tableau d'entiers ;</li>
   <li>Chercher la position de la 1ère valeur supérieure à 100 dans un tableau de
valeurs.;</li>
</ul>


<p>
Le modèle se décline en différentes versions. Cette version :
</p>
<ul style="margin-top: -10px;">
  <li style="margin-top: 5px;">détermine uniquement (via un booléen trouve) si l'élément cherché est dans la structure ;</li>
  <li style="margin-top: 5px;"><strong>regroupe les conditions d'arrêt</strong> :</li>
          <ul>
                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg>
                 Avantage : les conditions d'arrêt sont regroupées, le codage peut se faire via
une structure itérative standard de type while.,
                 </li>

                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"/></svg>
                 Inconvénient : la recherche n'est pas stoppée immédiatement dès que
l'algorithme trouve l'élément recherché.
                 </li>
          </ul>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : aucune.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Notes :
</strong>
</p>

<ul style="margin-top: -10px;">
    <li style="margin-top: 5px;">les éléments de la structure peuvent être ordonnés ou pas ;</li>
    <li style="margin-top: 5px;">la structure peut comporter des doublons ou pas ;</li>
    <li style="margin-top: 5px;">le modèle d'algorithme est identique pour une structure à accès séquentiel et pour une structure à accès direct ;</li>
    <li style="margin-top: 5px;">la première occurrence fait référence au 1er élément rencontré vérifiant la
propriété recherchée. Ce 1er élément peut donc varier selon qu'on parcourt la
structure du début vers la fin ou de la fin vers le début...</li>
</ul>



`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.8139209513816vw",
		"ordonnee": "3.4312259531304647vw",
		"libelle": "Recherche de première occurrence",
		"listeDonnes": ["structure"],
		"listeResultats": ["trouve"],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "17.52885624344176vw",
				"ordonnee": "10.881383350821967vw",
				"libelle": "Initialiser la recherche",
				"listeDonnes": [""],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "10.25358516963974vw",
						"ordonnee": "18.05172263029031vw",
						"libelle": "Se positionner en début de structure",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					},
					{
						"typeElement": "Probleme",
						"abscisse": "22.845400489681708vw",
						"ordonnee": "18.156654424623994vw",
						"libelle": "trouve ← faux",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			},
			{
				"typeElement": "Probleme",
				"abscisse": "48.448758307100384vw",
				"ordonnee": "10.776451556488263vw",
				"libelle": "Effectuer la recherche",
				"listeDonnes": ["trouve"],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "StructureIterativeNonBornee",
						"abscisse": "61.42007694998254vw",
						"ordonnee": "18.78279118572925vw",
						"enfants": [
							{
								"typeElement": "Probleme",
								"abscisse": "31.414830360265793vw",
								"ordonnee": "24.48753934942288vw",
								"libelle": "Déterminer si on a analysé tous les éléments de la structure",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "41.37810423224893vw",
										"ordonnee": "29.72437915355019vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "Tous les éléments ont été analysés = vrai ou trouve = vrai",
												"enfants": [
													{
														"typeElement": "ConditionSortie",
														"abscisse": "44.35117173836995vw",
														"ordonnee": "35.43196922000703vw"
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "48.448758307100306vw",
								"ordonnee": "24.697402938090253vw",
								"libelle": "Vérifier si on a trouvé ce qu'on cherche",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "58.41203217908355vw",
										"ordonnee": "30.668765302553304vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "L'élément courant vérifie la propriété recherchée",
												"enfants": [
													{
														"typeElement": "Probleme",
														"abscisse": "48.41378104232234vw",
														"ordonnee": "36.51971843301859vw",
														"libelle": "trouve ← vrai",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "63.13920951381599vw",
								"ordonnee": "24.382607555089177vw",
								"libelle": "Passer à l'élément suivant",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": []
							}
						]
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"80_modeles_recherches/3_recherche_1ere_occurrence_conditions_arret_regroupees_sans_position"},{nom:`Recherche de première occurrence, avec position et en regroupant les conditions d'arrêt
`,nomCourt:`Première occurrence - Avec position - Conditions d'arrêt regroupées
`,descriptif:`<p>
Ce modèle est à utiliser lorsqu'on recherche, dans un ensemble d'élements, le
premier élément satisfaisant une propriété particulière.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Déterminer si une valeur particulière se trouve dans un tableau d'entiers ;</li>
   <li>Chercher la position de la 1ère valeur supérieure à 100 dans un tableau de
valeurs.</li>
</ul>


<p>
Le modèle se décline en différentes versions. Cette version :
</p>
<ul style="margin-top: -10px;">
  <li style="margin-top: 5px;">détermine via un booléen trouve si l'élément cherché est dans la structure. Si
c'est le cas, le modèle détermine également la <strong>position</strong> de cet élément dans la
structure ;</li>
  <li style="margin-top: 5px;"><strong>regroupe les conditions d'arrêt</strong> :</li>
          <ul>
                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg>
                 Avantage : lles conditions d'arrêt sont regroupées, le codage peut se faire via
une structure itérative standard de type while,
                 </li>

                 <li style="margin-top: 5px;">
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  style="vertical-align: middle; margin-right: 5px;" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"/></svg>
                 Inconvénient : la recherche n'est pas stoppée immédiatement dès que
l'algorithme trouve l'élément recherché.
                 </li>
          </ul>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> : aucune.
</p>

<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Notes :
</strong>
</p>

<ul style="margin-top: -10px;">
    <li style="margin-top: 5px;">les éléments de la structure peuvent être ordonnés ou pas ;</li>
    <li style="margin-top: 5px;">la structure peut comporter des doublons ou pas ;</li>
    <li style="margin-top: 5px;">le modèle d'algorithme est identique pour une structure à accès séquentiel et pour une structure à accès direct ;</li>
    <li style="margin-top: 5px;">la première occurrence fait référence au 1er élément rencontré vérifiant la
propriété recherchée. Ce 1er élément peut donc varier selon qu'on parcourt la
structure du début vers la fin ou de la fin vers le début...</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Si l'élément cherché n'est pas trouvé, l'élément <i>pos</i> contient une valeur NON pertinente.</p>



`,algo:`[
	{
		"typeElement": "Probleme",
		"abscisse": "32.8139209513816vw",
		"ordonnee": "3.3962486883525704vw",
		"libelle": "Recherche de première occurrence",
		"listeDonnes": ["structure"],
		"listeResultats": ["trouve", " [pos]"],
		"enfants": [
			{
				"typeElement": "Probleme",
				"abscisse": "17.52885624344176vw",
				"ordonnee": "10.881383350821967vw",
				"libelle": "Initialiser la recherche",
				"listeDonnes": [""],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "Probleme",
						"abscisse": "10.25358516963974vw",
						"ordonnee": "18.05172263029031vw",
						"libelle": "Se positionner en début de structure",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					},
					{
						"typeElement": "Probleme",
						"abscisse": "22.845400489681708vw",
						"ordonnee": "18.156654424623994vw",
						"libelle": "trouve ← faux",
						"listeDonnes": [""],
						"listeResultats": [""],
						"enfants": []
					}
				]
			},
			{
				"typeElement": "Probleme",
				"abscisse": "48.448758307100384vw",
				"ordonnee": "10.776451556488263vw",
				"libelle": "Effectuer la recherche",
				"listeDonnes": ["trouve"],
				"listeResultats": ["trouve"],
				"enfants": [
					{
						"typeElement": "StructureIterativeNonBornee",
						"abscisse": "61.45505421476043vw",
						"ordonnee": "18.95767750961872vw",
						"enfants": [
							{
								"typeElement": "Probleme",
								"abscisse": "29.21126267925845vw",
								"ordonnee": "24.80233473242393vw",
								"libelle": "Déterminer si on a analysé tous les éléments de la structure",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "39.17453655124162vw",
										"ordonnee": "30.039174536551236vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "Tous les éléments ont été analysés = vrai ou trouve = vrai",
												"enfants": [
													{
														"typeElement": "ConditionSortie",
														"abscisse": "42.14760405736264vw",
														"ordonnee": "35.746764603008074vw"
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "46.245190626093vw",
								"ordonnee": "25.0121983210913vw",
								"libelle": "Vérifier si on a trouvé ce qu'on cherche",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": [
									{
										"typeElement": "StructureSi",
										"abscisse": "56.208464498076246vw",
										"ordonnee": "30.98356068555435vw",
										"conditions": [
											{
												"typeElement": "Condition",
												"libelle": "L'élément courant vérifie la propriété recherchée",
												"enfants": [
													{
														"typeElement": "Probleme",
														"abscisse": "40.334032878628825vw",
														"ordonnee": "37.32419552291014vw",
														"libelle": "trouve ← vrai",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													},
													{
														"typeElement": "Probleme",
														"abscisse": "52.78593913955922vw",
														"ordonnee": "37.39415005246593vw",
														"libelle": "pos ← position courante",
														"listeDonnes": [""],
														"listeResultats": [""],
														"enfants": []
													}
												]
											}
										]
									}
								]
							},
							{
								"typeElement": "Probleme",
								"abscisse": "60.935641832808685vw",
								"ordonnee": "24.697402938090224vw",
								"libelle": "Passer à l'élément suivant",
								"listeDonnes": [""],
								"listeResultats": [""],
								"enfants": []
							}
						]
					}
				]
			}
		]
	},
	{ "typeElement": "DictionnaireDonnee", "contenu": {} }
]
`,path:"80_modeles_recherches/4_recherche_1ere_occurrence_conditions_arret_regroupees_avec_position"},{nom:`Recherche dichotomique dans une structure à accès direct triée
`,nomCourt:`Recherche dichotomique
`,descriptif:`<p>
Ce modèle est à utiliser lorsqu'on recherche, dans un ensemble d'élements <strong>triés</strong>, un
élément satisfaisant une propriété particulière.
</p>

<br>

<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"/></svg>
Exemples :
</strong>
</p>

<ul style="margin-top : -10px;">
   <li>Déterminer si une valeur particulière se trouve dans un tableau d'entiers triés par ordre décroissant;</li>
   <li>Chercher la position d'un mot dans un dictionnaire (où les mots sont triés par ordre croissant).</li>
</ul>



<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
Pré-conditions
</strong> :
</p>
<ul>
   <li>Les éléments de la structure où la recherche s'effectue doivent être <strong>triés</strong> ;</li>
   <li>La structure doit proposer des mécanismes d'<strong>accès direct</strong>.</i>
</ul>



<br>
<p>
<strong>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>

Notes :
</strong>
</p>

<ul style="margin-top: -10px;">
    <li style="margin-top: 5px;">L’ordre des éléments peut être croissant ou décroissant ;</li>
    <li style="margin-top: 5px;"> L’ordre des éléments peut ne pas être strict (il peut y avoir des doublons)</li>
    <li style="margin-top: 5px;"> <i>bInf</i> représente l'indice / la clé de l'élément situé au début de l'espace de recherche (sachant que cet espace est redéfini à chaque itération) ;</li>
        <li style="margin-top: 5px;"> <i>bSup</i> représente <strong>l'indice / la clé </strong> de l'élément situé à la fin de l'espace de recherche (sachant que cet espace est redéfini à chaque itération) ;</li>
        <li style="margin-top: 5px;"> <i>milieu</i> représente <strong>l'indice / la clé </strong> de l'élément situé au milieu de l'espace de recherche (sachant que cet espace est redéfini à chaque itération) ;</li>
</ul>

<p>
<strong>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="vertical-align: middle; margin-right: 5px;"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
Important :
</strong>
</p>
<p>Si l'élément cherché n'est pas trouvé, l'élément <i>pos</i> contient une valeur NON pertinente.</p>



`,algo:'[{"typeElement":"Probleme","abscisse":"30.85888079022548vw","ordonnee":"2.2117338154269985vw","libelle":" Recherche dichotomique","listeDonnes":["valCherchee"," collection (triée)"," nbElements"],"listeResultats":["trouve"," [pos]"],"enfants":[{"typeElement":"Probleme","abscisse":"13.45292907770445vw","ordonnee":"10.07248620172682vw","libelle":" Initialiser la recherche","listeDonnes":["nbElements"],"listeResultats":["trouve"," bInf"," bSup"],"enfants":[{"typeElement":"Probleme","abscisse":"6.964689012822035vw","ordonnee":"17.246982427317924vw","libelle":"Calcul de bInf et bSup ","listeDonnes":["nbElements"],"listeResultats":["bInf"," bSup"],"enfants":[]},{"typeElement":"Probleme","abscisse":"24.93212303865023vw","ordonnee":"17.37175627471951vw","libelle":"trouve ← faux ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Probleme","abscisse":"50.57314867967589vw","ordonnee":"10.07248620172682vw","libelle":"Effectuer la recherche ","listeDonnes":["valCherchee"," collection"," nbElements"," bInf"," bSup"],"listeResultats":["trouve"," [pos]"],"enfants":[{"typeElement":"StructureIterativeNonBornee","abscisse":"63.639154044951326vw","ordonnee":"18.873339342908416vw","enfants":[{"typeElement":"StructureSi","abscisse":"13.034312819672133vw","ordonnee":"25.66989558472013vw","conditions":[{"typeElement":"Condition","libelle":"Espace de recherche épuisé","enfants":[{"typeElement":"ConditionSortie","abscisse":"16.037931261246765vw","ordonnee":"31.16356331196451vw"}]}]},{"typeElement":"Probleme","abscisse":"22.810967632823296vw","ordonnee":"25.419669432121715vw","libelle":"Calcul de l\'indice / clé permettant d\'accéder à l\'élément situé au milieu de l\'espace de recherche ","listeDonnes":["bInf"," bSup"],"listeResultats":["milieu"],"enfants":[]},{"typeElement":"StructureSi","abscisse":"52.19431675784669vw","ordonnee":"25.588524515096324vw","conditions":[{"typeElement":"Condition","libelle":"elementAuMilieu = valCherchee","enfants":[{"typeElement":"Probleme","abscisse":"31.357976179831827vw","ordonnee":"31.53358795479936vw","libelle":"trouve ← vrai ","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"Probleme","abscisse":"42.15091398006888vw","ordonnee":"31.595974878500144vw","libelle":" pos ← milieu","listeDonnes":[""],"listeResultats":[""],"enfants":[]},{"typeElement":"ConditionSortie","abscisse":"63.57676712125071vw","ordonnee":"31.787432548972426vw"}]}]},{"typeElement":"Probleme","abscisse":"68.35342193440168vw","ordonnee":"25.482056355822507vw","libelle":"Progresser dans l\'espace de recherche ","listeDonnes":["valCherchee"," milieu","  elementAuMilieu"," bInf"," bSup"],"listeResultats":["[bSup]"," [bInf]"],"enfants":[{"typeElement":"StructureSi","abscisse":"73.35703355240685vw","ordonnee":"31.02973653705652vw","conditions":[{"typeElement":"Condition","libelle":"elementAuMilieu > valCherchee","enfants":[{"typeElement":"Probleme","abscisse":"62.55143803022806vw","ordonnee":"37.02363724046907vw","libelle":"bSup ← milieu - 1 ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]},{"typeElement":"Condition","libelle":"Sinon","enfants":[{"typeElement":"Probleme","abscisse":"74.90404892298491vw","ordonnee":"37.02363724046908vw","libelle":"bInf ← milieu + 1 ","listeDonnes":[""],"listeResultats":[""],"enfants":[]}]}]}]}]}]}]},{"typeElement":"DictionnaireDonnee"}]',path:"80_modeles_recherches/5_recherche_dichotomique"}]}];class x{iframe;frameId=crypto.randomUUID();listener;ownerWindow;constructor(e,t,n,i="algoforge-editor-frame"){this.ownerWindow=e.ownerDocument.defaultView??window,this.iframe=e.createEl("iframe",{cls:i}),this.iframe.setAttribute("sandbox","allow-scripts"),this.iframe.setAttribute("title","AlgoForge visual editor"),this.listener=(o)=>{if(o.source!==this.iframe.contentWindow)return;let r=o.data;if(!r||r.channel!=="algoforge-editor"||r.frameId!==this.frameId||!r.message)return;n(r.message)},this.ownerWindow.addEventListener("message",this.listener),this.iframe.srcdoc=de(t,this.frameId)}post(e){this.iframe.contentWindow?.postMessage(e,"*")}destroy(){this.ownerWindow.removeEventListener("message",this.listener),this.iframe.remove()}}function de(e,t){let n=crypto.randomUUID().replaceAll("-",""),i=JSON.stringify({initialAlgorithm:null,title:null,hostKind:"embedded",isExam:!1,prettifyInitialAlgorithm:!1}).replaceAll("<","\\u003c"),o=e.replace(/(<script type="application\/json" id="algoforge-runtime-config")[^>]*>[\s\S]*?(<\/script>)/,`$1>${i}$2`);o=o.replace(/<script\b(?![^>]*\bnonce=)/g,`<script nonce="${n}"`);let r=`<script nonce="${n}">globalThis.acquireAlgoForgeHostApi=()=>({postMessage(message){parent.postMessage({channel:"algoforge-editor",frameId:${JSON.stringify(t)},message},"*")},getState(){return undefined},setState(){}});</script>`,l=["default-src 'none'","img-src data: blob:","media-src data: blob:","font-src data:",`script-src 'nonce-${n}'`,"style-src 'unsafe-inline'"].join("; ");return o.replace("<head>",`<head><meta http-equiv="Content-Security-Policy" content="${l}">${r}`)}class w extends Error{constructor(e){super(e);this.name="AlgoForgeFormatError"}}function O(e){if(Array.isArray(e))return{version:0,algorithm:e};if(typeof e!=="object"||e===null)throw new w("AlgoForge documents must contain a legacy JSON array or a versioned document object.");let t=e,n=t.version;if(typeof n!=="number"||!Number.isInteger(n)||n<0)throw new w("Versioned AlgoForge documents must declare a non-negative integer version.");if(n>1)throw new w(`This document uses AlgoForge format version ${n}. AlgoForge format version 1 is the newest version supported here; a newer AlgoForge version is required.`);if(n!==1)throw new w("AlgoForge format version 0 is represented by a legacy root JSON array, not a versioned object.");if(!Array.isArray(t.algorithm))throw new w('AlgoForge format version 1 requires an "algorithm" array.');return{version:n,algorithm:t.algorithm}}function pe(e){return{version:1,algorithm:e}}function j(e){return`${JSON.stringify(pe(e),null,2)}
`}var he=5000000,T=new Set(["af","algoforge"]),G=new Set(["json","tbr","xml"]),_=[{typeElement:"DictionnaireDonnee",types:{},signification:{}}];function m(e){if(new TextEncoder().encode(e).byteLength>he)return{ok:!1,error:"The AlgoForge file exceeds the 5 MB limit."};if(e.trim().length===0)return{ok:!1,error:"The file is empty."};try{let t=O(JSON.parse(e));return{ok:!0,algorithm:t.algorithm,formatVersion:t.version}}catch(t){return{ok:!1,error:t instanceof Error?t.message:"Invalid JSON."}}}function g(e){return j(e)}function S(e){return T.has(e.toLowerCase())}function U(e){let t=e.trim().replaceAll("\\","/").replace(/^\/+/,"");if(!t)throw Error("Enter a vault-relative file path.");if(t.split("/").some((i)=>!i||i==="."||i===".."))throw Error("The path must not contain empty, current, or parent segments.");if(/[\u0000-\u001f:*?"<>|]/.test(t))throw Error("The path contains characters that are not valid in a file name.");if(!/\.(?:af|algoforge)$/i.test(t))t+=".af";return t}var me=/!\[\[([^\]|#]+\.(?:af|algoforge))(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/giu;function I(e,t=0){let n=[];for(let i of e.matchAll(me)){if(i.index===void 0||!i[1])continue;n.push({from:t+i.index,to:t+i.index+i[0].length,target:i[1]})}return n}function H(e){let t=e.trim();try{t=decodeURIComponent(t)}catch{}let n=/^!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]$/.exec(t);if(n?.[1])t=n[1];let i=t.split(/[?#]/,1)[0]?.trim().replace(/^\.\//,"");return i&&/\.(?:af|algoforge)$/i.test(i)?i:void 0}function z(e,t){for(let n of e){if(!n)continue;let i=H(n);if(i)return i}for(let n of(t??"").split(/[\r\n]+/)){let i=H(n);if(i)return i}return}var C="algoforge-visual-editor";class F extends E.TextFileView{plugin;frame;generation=0;ready=!1;errorEl;constructor(e,t){super(e);this.plugin=t}getViewType(){return C}getDisplayText(){return this.file?.basename??"AlgoForge"}getIcon(){return"workflow"}getViewData(){return this.data}setViewData(e,t){if(e.trim().length===0)e=g([..._]),this.data=e,this.requestSave();else this.data=e;this.generation++,this.showCurrentDocument(this.ready?"replaceDocument":"initialize")}clear(){this.data="",this.generation++,this.errorEl?.remove(),this.errorEl=void 0}async onOpen(){await super.onOpen(),this.contentEl.addClass("algoforge-view"),this.ensureFrame()}async onClose(){this.frame?.destroy(),this.frame=void 0,await super.onClose()}ensureFrame(){if(this.frame)return;this.frame=new x(this.contentEl,A,(e)=>{this.handleMessage(e)})}showCurrentDocument(e){let t=m(this.data);if(!t.ok){this.showError(t.error);return}if(this.errorEl?.remove(),this.errorEl=void 0,this.frame?.iframe.removeClass("is-hidden"),!this.frame||!this.ready)return;this.frame.post({type:e,algorithm:t.algorithm,title:this.file?.basename??"Algorithm",version:this.generation,library:e==="initialize"?M:void 0,customLibrary:e==="initialize"?this.plugin.settings.customLibrary:void 0,preferences:e==="initialize"?{theme:this.plugin.settings.theme,glow:this.plugin.settings.glow}:void 0,capabilities:{undoRedo:"editor"}})}showError(e){this.ensureFrame(),this.frame?.iframe.addClass("is-hidden"),this.errorEl?.remove(),this.errorEl=this.contentEl.createDiv({cls:"algoforge-error-card"}),this.errorEl.createEl("h2",{text:"Unable to open this AlgoForge file"}),this.errorEl.createEl("p",{text:e}),this.errorEl.createEl("p",{text:"The file has not been changed."})}async handleMessage(e){switch(e.type){case"ready":this.ready=!0,this.showCurrentDocument("initialize");return;case"documentChanged":{let t=m(this.data);if(e.baseVersion!==this.generation||!t.ok){if(t.ok)this.frame?.post({type:"editRejected",algorithm:t.algorithm,title:this.file?.basename??"Algorithm",version:this.generation,error:"The file changed before the visual edit could be applied."});return}let n=g(e.algorithm),i=m(n);if(!i.ok)throw Error(i.error);this.data=n,this.generation++,this.requestSave(),this.frame?.post({type:"editAccepted",editId:e.editId,version:this.generation});return}case"clipboardRead":this.frame?.post({type:"clipboardResult",requestId:e.requestId,text:await navigator.clipboard.readText()});return;case"clipboardWrite":await navigator.clipboard.writeText(e.text);return;case"command":await this.plugin.executeEditorCommand(this,e.command);return;case"exportFile":await this.plugin.exportFile(this,e);return;case"createImportedDocument":await this.plugin.createImportedDocument(this,e.name,e.algorithm);return;case"customLibrary":this.plugin.settings.customLibrary=e.value,await this.plugin.saveSettings();return;case"preference":if(e.name==="theme"&&typeof e.value==="string")this.plugin.settings.theme=e.value;if(e.name==="glow"&&typeof e.value==="boolean")this.plugin.settings.glow=e.value;await this.plugin.saveSettings();return;case"openExternal":if(/^https?:\/\//i.test(e.href))window.open(e.href,"_blank","noopener,noreferrer");return;case"error":new E.Notice(e.message);return;case"reopenAsText":new E.Notice("AlgoForge files are opened by the visual editor while the plugin is enabled.");return;case"previewRendered":return}}sendImport(e,t){this.frame?.post({type:"importSource",name:e,content:t})}}var Q=require("@codemirror/language"),D=require("@codemirror/state"),v=require("@codemirror/view"),h=require("obsidian");function W(e,t){return D.Prec.highest(v.ViewPlugin.fromClass(class{decorations;observer;mounts=new Map;constructor(n){this.decorations=J(n,e,t),this.observer=new MutationObserver(()=>this.enhanceGenericEmbeds(n)),this.observer.observe(n.dom,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),queueMicrotask(()=>this.enhanceGenericEmbeds(n))}update(n){if(n.docChanged||n.viewportChanged||n.selectionSet)this.decorations=J(n.view,e,t);queueMicrotask(()=>this.enhanceGenericEmbeds(n.view))}destroy(){this.observer.disconnect();for(let{dispose:n}of this.mounts.values())n();this.mounts.clear()}enhanceGenericEmbeds(n){for(let[s,{dispose:d}]of this.mounts)if(!n.dom.contains(s))d(),this.mounts.delete(s);if(!n.state.field(h.editorLivePreviewField,!1))return;let o=n.state.field(h.editorInfoField,!1)?.file?.path??"",r=new Set(I(n.state.doc.toString()).filter((s)=>X(n,s.from,s.to)).map((s)=>s.target)),l=".internal-embed, .file-embed, .mod-generic, [data-href], .algoforge-live-preview",c=Array.from(n.dom.querySelectorAll(l)).map((s)=>s.closest(".internal-embed")??s.closest(".file-embed")??s.closest(".mod-generic")??s);for(let s of new Set(c)){let d=[s,...Array.from(s.querySelectorAll("[src], [data-href], [href]"))],p=s.dataset.algoforgeTarget??z(d.flatMap((f)=>[f.getAttribute("src"),f.getAttribute("data-href"),f.getAttribute("href")]),s.textContent);if(!p)continue;if(r.has(p)){s.style.display="none";continue}if(s.style.removeProperty("display"),this.mounts.has(s))continue;s.dataset.algoforgeTarget=p,s.dataset.algoforgeLiveEmbed="true";for(let f of["internal-embed","file-embed","media-embed","mod-generic","is-loaded"])s.removeClass(f);s.removeAttribute("src"),s.removeAttribute("data-href"),s.addClass("algoforge-live-preview"),s.empty();let y=e.metadataCache.getFirstLinkpathDest(p,o);if(!(y instanceof h.TFile)){s.createSpan({cls:"algoforge-preview-error",text:`AlgoForge file not found: ${p}`}),this.mounts.set(s,{dispose:()=>{return},target:p});continue}this.mounts.set(s,{dispose:t.mount(s,y),target:p})}}},{decorations:(n)=>n.decorations}))}function J(e,t,n){if(!e.state.field(h.editorLivePreviewField,!1))return v.Decoration.none;let o=e.state.field(h.editorInfoField,!1)?.file?.path??"",r=new D.RangeSetBuilder;for(let l of e.visibleRanges){let u=e.state.doc.sliceString(l.from,l.to);for(let c of I(u,l.from)){if(X(e,c.from,c.to)||ge(e,c.from))continue;r.add(c.from,c.to,v.Decoration.replace({widget:new Z(t,n,o,c.target)}))}}return r.finish()}function X(e,t,n){return e.state.selection.ranges.some((i)=>i.empty?i.from>=t&&i.from<n:i.from<n&&i.to>t)}function ge(e,t){let n=Q.syntaxTree(e.state).resolveInner(t,1);while(n){if(/code/i.test(n.name))return!0;if(!n.parent)break;n=n.parent}return!1}class Z extends v.WidgetType{app;previews;sourcePath;target;dispose;constructor(e,t,n,i){super();this.app=e;this.previews=t;this.sourcePath=n;this.target=i}eq(e){return this.sourcePath===e.sourcePath&&this.target===e.target}toDOM(e){let t=e.dom.ownerDocument.createElement("span");t.className="algoforge-live-preview";let n=this.app.metadataCache.getFirstLinkpathDest(this.target,this.sourcePath);if(!(n instanceof h.TFile))return t.createSpan({cls:"algoforge-preview-error",text:`AlgoForge file not found: ${this.target}`}),t;return this.dispose=this.previews.mount(t,n),t}destroy(){this.dispose?.()}ignoreEvent(){return!1}}var b=require("obsidian");class k extends b.Modal{heading;value;settled=!1;resolve;result=new Promise((e)=>{this.resolve=e});constructor(e,t,n){super(e);this.heading=t;this.value=n}onOpen(){this.titleEl.setText(this.heading),new b.Setting(this.contentEl).setName("Vault-relative path").addText((e)=>{e.setValue(this.value).onChange((t)=>{this.value=t}),e.inputEl.addEventListener("keydown",(t)=>{if(t.key==="Enter")this.finish(this.value)}),setTimeout(()=>e.inputEl.select())}),new b.Setting(this.contentEl).addButton((e)=>e.setButtonText("Cancel").onClick(()=>this.finish(void 0))).addButton((e)=>e.setCta().setButtonText("Confirm").onClick(()=>this.finish(this.value)))}onClose(){if(this.contentEl.empty(),!this.settled)this.finish(void 0)}finish(e){if(this.settled)return;this.settled=!0,this.resolve(e),this.close()}}class P extends b.FuzzySuggestModal{files;settled=!1;resolve;result=new Promise((e)=>{this.resolve=e});constructor(e,t,n){super(e);this.files=t;this.setPlaceholder(n)}getItems(){return this.files}getItemText(e){return e.path}onChooseItem(e){this.finish(e)}onClose(){if(super.onClose(),!this.settled)this.finish(void 0)}finish(e){if(this.settled)return;if(this.settled=!0,this.resolve(e),e===void 0)super.close()}}var N=require("obsidian");class K{frame;readyResolve;ready=new Promise((e)=>{this.readyResolve=e});requestId=0;pending=new Map;queue=Promise.resolve();constructor(e){let t=e.body.createDiv({cls:"algoforge-renderer-host"});this.frame=new x(t,A,(n)=>this.onMessage(n),"algoforge-renderer-frame")}render(e,t,n){let i=this.queue.then(async()=>{await Y(this.ready,15000,"The preview renderer did not start.");let o=++this.requestId,r=new Promise((l,u)=>{this.pending.set(o,{resolve:l,reject:u}),this.frame.post({type:"renderPreview",requestId:o,algorithm:e,title:t,theme:n})});return Y(r,20000,"The preview renderer did not finish.").finally(()=>this.pending.delete(o))});return this.queue=i.then(()=>{return},()=>{return}),i}destroy(){for(let t of this.pending.values())t.reject(Error("Preview renderer stopped."));this.pending.clear();let e=this.frame.iframe.parentElement;this.frame.destroy(),e?.remove()}onMessage(e){if(e.type==="ready"){this.frame.post({type:"initialize",algorithm:[],title:"Preview renderer",version:0,library:M,customLibrary:[],preferences:{theme:"Thème AlgoForge",glow:!1},capabilities:{undoRedo:"editor"}}),this.readyResolve();return}if(e.type!=="previewRendered")return;let t=this.pending.get(e.requestId);if(!t)return;if(this.pending.delete(e.requestId),e.svg)t.resolve(e.svg);else t.reject(Error(e.error??"Unable to render the algorithm preview."))}}class q{app;openFile;renderers=new Map;cache=new Map;inflight=new Map;listeners=new Map;constructor(e,t){this.app=e;this.openFile=t}async getPreview(e,t){let n=await this.app.vault.cachedRead(e),i=m(n);if(!i.ok)throw Error(i.error);let o=fe(t),r=[o.background,o.foreground,o.border].join(":"),l=[e.path,e.stat.mtime,i.formatVersion,2,r].join(":"),u=this.cache.get(l);if(u)return u.url;let c=this.inflight.get(l);if(c)return c;let s=(async()=>{let d=this.renderers.get(t);if(!d)d=new K(t),this.renderers.set(t,d);let p;try{p=await d.render(i.algorithm,e.basename,o)}catch(f){if(this.renderers.get(t)===d)this.renderers.delete(t),d.destroy();throw f}let y=URL.createObjectURL(new Blob([p],{type:"image/svg+xml"}));return this.cache.set(l,{path:e.path,url:y}),y})();this.inflight.set(l,s);try{return await s}finally{this.inflight.delete(l)}}mount(e,t){let n=!1,i=0;e.addClass("algoforge-preview");let o=async()=>{let c=++i;e.empty(),e.createDiv({cls:"algoforge-preview-status",text:`Loading ${t.name}…`});try{let s=await this.getPreview(t,e.ownerDocument);if(n||c!==i)return;e.empty();let d=e.createEl("button",{cls:"algoforge-preview-button"});d.setAttribute("aria-label",`Open ${t.basename} in AlgoForge`),d.createEl("img",{attr:{src:s,alt:`AlgoForge algorithm: ${t.basename}`}}),d.addEventListener("click",(p)=>this.openFile(t,p))}catch(s){if(n||c!==i)return;e.empty(),e.createDiv({cls:"algoforge-preview-error",text:s instanceof Error?s.message:"Unable to render this AlgoForge file."})}},r="",l=()=>{return},u=()=>{if(r===t.path)return;l(),r=t.path,l=this.subscribe(r,()=>{u(),o()})};return u(),o(),()=>{n=!0,l(),e.empty()}}invalidate(e,t){for(let[n,i]of this.cache){if(i.path!==e)continue;URL.revokeObjectURL(i.url),this.cache.delete(n)}for(let n of this.listeners.get(e)??[])n();if(t&&t!==e)for(let n of this.listeners.get(t)??[])n()}invalidateAll(){for(let e of this.cache.values())URL.revokeObjectURL(e.url);this.cache.clear();for(let e of this.listeners.values())for(let t of e)t()}destroy(){for(let e of this.cache.values())URL.revokeObjectURL(e.url);this.cache.clear(),this.inflight.clear();for(let e of this.renderers.values())e.destroy();this.renderers.clear(),this.listeners.clear()}subscribe(e,t){let n=this.listeners.get(e);if(!n)this.listeners.set(e,n=new Set);return n.add(t),()=>{if(n?.delete(t),n?.size===0){for(let[i,o]of this.listeners)if(o===n)this.listeners.delete(i)}}}}function fe(e){let n=(e.defaultView??window).getComputedStyle(e.body),i=(r,l)=>n.getPropertyValue(r).trim()||l,o=e.body.classList.contains("theme-dark");return{background:i("--background-primary",o?"#1e1e1e":"#ffffff"),foreground:i("--text-normal",o?"#dcddde":"#222222"),border:i("--background-modifier-border",o?"#4a4a4a":"#838787")}}function Y(e,t,n){return new Promise((i,o)=>{let r=globalThis.setTimeout(()=>o(Error(n)),t);e.then((l)=>{globalThis.clearTimeout(r),i(l)},(l)=>{globalThis.clearTimeout(r),o(l)})})}class B extends N.MarkdownRenderChild{previews;file;disposePreview;constructor(e,t,n){super(e);this.previews=t;this.file=n}onload(){this.disposePreview=this.previews.mount(this.containerEl,this.file)}onunload(){this.disposePreview?.()}}var ee={theme:"Thème AlgoForge",glow:!1,customLibrary:[]};class R extends a.Plugin{settings={...ee};previews;async onload(){await this.loadSettings(),this.previews=new q(this.app,(e,t)=>{this.openAlgorithm(e,a.Keymap.isModEvent(t))}),this.registerView(C,(e)=>new F(e,this)),this.registerExtensions(["af","algoforge"],C),this.registerMarkdownPostProcessor((e,t)=>this.processEmbeds(e,t),1000),this.registerEvent(this.app.workspace.on("file-menu",(e,t)=>{e.addItem((n)=>n.setTitle("New Algorithm").setIcon("workflow").onClick(()=>{let i=t instanceof a.TFolder?t.path:t.parent?.path;this.createNewAlgorithmImmediately(i)}))})),this.registerEvent(this.app.workspace.on("css-change",()=>this.previews.invalidateAll())),this.registerEditorExtension(W(this.app,this.previews)),this.registerEvent(this.app.vault.on("modify",(e)=>{if(e instanceof a.TFile&&S(e.extension))this.previews.invalidate(e.path)})),this.registerEvent(this.app.vault.on("delete",(e)=>{if(e instanceof a.TFile&&S(e.extension))this.previews.invalidate(e.path)})),this.registerEvent(this.app.vault.on("rename",(e,t)=>{if(e instanceof a.TFile&&(S(e.extension)||/\.(?:af|algoforge)$/i.test(t)))this.previews.invalidate(t,e.path)})),this.addCommand({id:"new-algorithm",name:"New algorithm",callback:()=>{this.createNewAlgorithm()}}),this.addCommand({id:"open-algorithm",name:"Open algorithm",callback:()=>{this.chooseAndOpenAlgorithm()}})}async onunload(){this.previews?.destroy(),this.app.workspace.detachLeavesOfType(C)}async saveSettings(){await this.saveData(this.settings)}async executeEditorCommand(e,t){try{switch(t){case"new":await this.createNewAlgorithm(e.file?.parent?.path);return;case"open":await this.chooseAndOpenAlgorithm();return;case"save":await e.save();return;case"saveAs":await this.saveViewAs(e);return;case"import":await this.importLegacyFile(e);return;case"undo":case"redo":return}}catch(n){this.showError(n)}}async exportFile(e,t){try{let n=this.siblingPath(e.file,te(t.suggestedName)),i=await this.promptPath("Export file",n,!1);if(!i)return;let o=t.encoding==="utf8"?new TextEncoder().encode(t.content):be(t.content);await this.app.vault.createBinary(i,Uint8Array.from(o).buffer),new a.Notice(`Exported ${i}`)}catch(n){this.showError(n)}}async createImportedDocument(e,t,n){try{let i=`${te(t||"algorithm").replace(/\.(?:af|algoforge)$/i,"")}.af`,o=this.siblingPath(e.file,i),r=await this.promptPath("Create imported algorithm",o,!0);if(!r)return;let l=await this.app.vault.create(r,g(n));await this.openAlgorithm(l,!1)}catch(i){this.showError(i)}}async loadSettings(){let e=await this.loadData();this.settings={...ee,...e,customLibrary:Array.isArray(e?.customLibrary)?e.customLibrary:[]}}processEmbeds(e,t){let n=()=>this.replaceRenderedEmbeds(e,t);n(),t.addChild(new ne(e,n))}replaceRenderedEmbeds(e,t){let o=[...e.matches?.(".internal-embed, .file-embed, .mod-generic, [data-href]")?[e]:[],...Array.from(e.querySelectorAll(".internal-embed, .file-embed, .mod-generic, [data-href]"))].map((r)=>r.closest(".internal-embed")??r.closest(".file-embed")??r.closest(".mod-generic")??r);for(let r of new Set(o)){if(r.dataset.algoforgeEmbed==="true")continue;let l=[r,...Array.from(r.querySelectorAll("[src], [data-href], [href]"))],u=z(l.flatMap((s)=>[s.getAttribute("src"),s.getAttribute("data-href"),s.getAttribute("href")]),r.textContent);if(!u)continue;r.dataset.algoforgeEmbed="true";for(let s of["internal-embed","file-embed","media-embed","mod-generic","is-loaded"])r.removeClass(s);r.removeAttribute("src"),r.removeAttribute("data-href"),r.addClass("algoforge-embed-container");let c=this.app.metadataCache.getFirstLinkpathDest(u,t.sourcePath);if(r.empty(),!(c instanceof a.TFile)){r.createDiv({cls:"algoforge-preview-error",text:`AlgoForge file not found: ${u}`});continue}t.addChild(new B(r,this.previews,c))}}async createNewAlgorithmImmediately(e){try{let t=e&&e!=="/"?e:"",n=0,i;do{let r=n===0?"algorithm.af":`algorithm ${n}.af`;i=t?`${t}/${r}`:r,n+=1}while(this.app.vault.getAbstractFileByPath(i));let o=await this.app.vault.create(i,g([..._]));await this.openAlgorithm(o,!1)}catch(t){this.showError(t)}}async createNewAlgorithm(e){try{let t=e??this.app.workspace.getActiveFile()?.parent?.path??"",n=t?`${t}/algorithm.af`:"algorithm.af",i=await this.promptPath("Create AlgoForge algorithm",n,!0);if(!i)return;let o=await this.app.vault.create(i,g([..._]));await this.openAlgorithm(o,!1)}catch(t){this.showError(t)}}async chooseAndOpenAlgorithm(){let e=this.app.vault.getFiles().filter((i)=>T.has(i.extension.toLowerCase())),t=new P(this.app,e,"Choose an AlgoForge file");t.open();let n=await t.result;if(n)await this.openAlgorithm(n,!1)}async saveViewAs(e){let t=this.siblingPath(e.file,`${e.file?.basename??"algorithm"}.af`),n=await this.promptPath("Save AlgoForge algorithm as",t,!0);if(!n)return;let i=m(e.getViewData());if(!i.ok)throw Error(i.error);let o=await this.app.vault.create(n,g(i.algorithm));await this.openAlgorithm(o,!1)}async importLegacyFile(e){let t=this.app.vault.getFiles().filter((o)=>G.has(o.extension.toLowerCase())),n=new P(this.app,t,"Choose a legacy AlgoForge file");n.open();let i=await n.result;if(!i)return;e.sendImport(i.name,await this.app.vault.read(i))}async openAlgorithm(e,t){await this.app.workspace.getLeaf(t).openFile(e)}async promptPath(e,t,n){let i=new k(this.app,e,t);i.open();let o=await i.result;if(o===void 0)return;let r=n?U(o):ve(o);if(r=a.normalizePath(r),this.app.vault.getAbstractFileByPath(r))throw Error(`A file already exists at ${r}.`);let l=r.lastIndexOf("/");if(l>=0){if(!(this.app.vault.getAbstractFileByPath(r.slice(0,l))instanceof a.TFolder))throw Error("The destination folder does not exist.")}return r}siblingPath(e,t){let n=e?.parent?.path;return n?`${n}/${t}`:t}showError(e){new a.Notice(e instanceof Error?e.message:String(e))}}class ne extends a.MarkdownRenderChild{scan;observer;constructor(e,t){super(e);this.scan=t}onload(){this.observer=new MutationObserver(()=>this.scan()),this.observer.observe(this.containerEl,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),this.scan()}onunload(){this.observer?.disconnect()}}function ve(e){let t=e.trim().replaceAll("\\","/").replace(/^\/+/,"");if(!t||t.split("/").some((n)=>!n||n==="."||n===".."))throw Error("Enter a valid vault-relative file path.");if(/[\u0000-\u001f:*?"<>|]/.test(t))throw Error("The path contains invalid characters.");return t}function te(e){return e.replace(/[\\/:*?"<>|\u0000-\u001f]/g,"_").trim()||"export"}function be(e){let t=/^data:[^;,]+(?:;charset=[^;,]+)?;base64,(.*)$/s.exec(e);if(!t?.[1])throw Error("The editor returned an invalid export.");let n=atob(t[1]);return Uint8Array.from(n,(i)=>i.charCodeAt(0))}
