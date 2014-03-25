if(!lt.util.load.provided_QMARK_('lt.plugins.context')) {
goog.provide('lt.plugins.context');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.context.opposites = (function (){var obj8268 = {"]":"[","}":"{",")":"("};return obj8268;
})();
lt.plugins.context.opens = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"[",null,"{",null], null), null);
lt.plugins.context.closes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null);
lt.plugins.context.apeek = (function apeek(a){return (a[(a.length - 1)]);
});
lt.plugins.context.overlay = (function overlay(allow_single_quote_strings){return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startState","startState",3724636353),(function (){var obj8272 = {"contextstack":[],"mode":null};return obj8272;
}),new cljs.core.Keyword(null,"token","token",1124445547),(function (stream,state,base){if(!(((function (){var or__6813__auto__ = base.style;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return "";
}
})().toLowerCase().indexOf("bracket") > -1)))
{(stream["pos"] = base.pos);
return null;
} else
{(stream["pos"] = (base.pos - 1));
var temp__4092__auto__ = stream.next();if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;if(cljs.core.truth_(lt.plugins.context.opens.call(null,cur)))
{var level = (new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$2(lt.plugins.context.apeek.call(null,state.contextstack),0) + 1);state.contextstack.push(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),cur,new cljs.core.Keyword(null,"pos","pos",1014015430),stream.pos,new cljs.core.Keyword(null,"level","level",1116770038),level], null));
return ("context bracket" + level);
} else
{if(cljs.core.truth_(lt.plugins.context.closes.call(null,cur)))
{var prev = lt.plugins.context.apeek.call(null,state.contextstack);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(prev),(lt.plugins.context.opposites[cur])))
{state.contextstack.pop();
return ("context bracket" + new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$2(prev,0));
} else
{return "context bracket-mismatched";
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
}
})], null));
});
lt.plugins.context.__BEH__context_coloring = (function __BEH__context_coloring(this$){var mode_name = editor.option.call(null,this$,new cljs.core.Keyword(null,"mode","mode",1017261333));var mode = editor.__GT_mode.call(null,this$);var rmode = [cljs.core.str(mode_name),cljs.core.str("-context")].join('');if(cljs.core._EQ_.call(null,mode_name.indexOf("-context"),-1))
{if(cljs.core.truth_((CodeMirror.modes[rmode])))
{} else
{CodeMirror.defineMode(rmode,(function (){return CodeMirror.overlayMode(mode,lt.plugins.context.overlay.call(null,cljs.core.not.call(null,mode.disallowSingleQuoteStrings)),true);
}));
}
editor.set_mode.call(null,this$,rmode);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.context","real-mode","lt.plugins.context/real-mode",1796566411),mode_name], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.context","context-coloring","lt.plugins.context/context-coloring",1965388808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.context.__BEH__context_coloring,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Enable context coloring",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.context","hide-context-coloring","lt.plugins.context/hide-context-coloring",3214960861)], null));
lt.plugins.context.__BEH__hide_context_coloring = (function __BEH__hide_context_coloring(this$){if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.context","real-mode","lt.plugins.context/real-mode",1796566411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return editor.set_mode.call(null,this$,new cljs.core.Keyword("lt.plugins.context","real-mode","lt.plugins.context/real-mode",1796566411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.context","hide-context-coloring","lt.plugins.context/hide-context-coloring",3214960861),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.context.__BEH__hide_context_coloring,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Disable context coloring",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.context","context-coloring","lt.plugins.context/context-coloring",1965388808)], null));
}

//# sourceMappingURL=context_compiled.js.map