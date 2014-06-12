// Compiled by ClojureScript 0.0-2202
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj7624 = {};return obj7624;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.prevent_default[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.prevent_default["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.target[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.target["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.current_target[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.current_target["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.event_type[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.event_type["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3445__auto__ = evt;if(and__3445__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3445__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4084__auto__ = (((evt == null))?null:evt);return (function (){var or__3457__auto__ = (domina.events.raw_event[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.events.raw_event["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t7628 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t7628 = (function (evt,f,create_listener_function,meta7629){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta7629 = meta7629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t7628.cljs$lang$type = true;
domina.events.t7628.cljs$lang$ctorStr = "domina.events/t7628";
domina.events.t7628.cljs$lang$ctorPrWriter = (function (this__4024__auto__,writer__4025__auto__,opt__4026__auto__){return cljs.core._write.call(null,writer__4025__auto__,"domina.events/t7628");
});
domina.events.t7628.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t7628.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3457__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return not_found;
}
});
domina.events.t7628.prototype.domina$events$Event$ = true;
domina.events.t7628.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t7628.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t7628.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t7628.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t7628.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t7628.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t7628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7630){var self__ = this;
var _7630__$1 = this;return self__.meta7629;
});
domina.events.t7628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7630,meta7629__$1){var self__ = this;
var _7630__$1 = this;return (new domina.events.t7628(self__.evt,self__.f,self__.create_listener_function,meta7629__$1));
});
domina.events.__GT_t7628 = (function __GT_t7628(evt__$1,f__$1,create_listener_function__$1,meta7629){return (new domina.events.t7628(evt__$1,f__$1,create_listener_function__$1,meta7629));
});
}
return (new domina.events.t7628(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4174__auto__ = ((function (f,t){
return (function iter__7635(s__7636){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__7636__$1 = s__7636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7636__$1);if(temp__4126__auto__)
{var s__7636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7636__$2))
{var c__4172__auto__ = cljs.core.chunk_first.call(null,s__7636__$2);var size__4173__auto__ = cljs.core.count.call(null,c__4172__auto__);var b__7638 = cljs.core.chunk_buffer.call(null,size__4173__auto__);if((function (){var i__7637 = 0;while(true){
if((i__7637 < size__4173__auto__))
{var node = cljs.core._nth.call(null,c__4172__auto__,i__7637);cljs.core.chunk_append.call(null,b__7638,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__7639 = (i__7637 + 1);
i__7637 = G__7639;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7638),iter__7635.call(null,cljs.core.chunk_rest.call(null,s__7636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7638),null);
}
} else
{var node = cljs.core.first.call(null,s__7636__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__7635.call(null,cljs.core.rest.call(null,s__7636__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4174__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__7648 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7649 = null;var count__7650 = 0;var i__7651 = 0;while(true){
if((i__7651 < count__7650))
{var node = cljs.core._nth.call(null,chunk__7649,i__7651);goog.events.removeAll(node);
{
var G__7656 = seq__7648;
var G__7657 = chunk__7649;
var G__7658 = count__7650;
var G__7659 = (i__7651 + 1);
seq__7648 = G__7656;
chunk__7649 = G__7657;
count__7650 = G__7658;
i__7651 = G__7659;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7648);if(temp__4126__auto__)
{var seq__7648__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7648__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__7648__$1);{
var G__7660 = cljs.core.chunk_rest.call(null,seq__7648__$1);
var G__7661 = c__4205__auto__;
var G__7662 = cljs.core.count.call(null,c__4205__auto__);
var G__7663 = 0;
seq__7648 = G__7660;
chunk__7649 = G__7661;
count__7650 = G__7662;
i__7651 = G__7663;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__7648__$1);goog.events.removeAll(node);
{
var G__7664 = cljs.core.next.call(null,seq__7648__$1);
var G__7665 = null;
var G__7666 = 0;
var G__7667 = 0;
seq__7648 = G__7664;
chunk__7649 = G__7665;
count__7650 = G__7666;
i__7651 = G__7667;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__7652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7653 = null;var count__7654 = 0;var i__7655 = 0;while(true){
if((i__7655 < count__7654))
{var node = cljs.core._nth.call(null,chunk__7653,i__7655);goog.events.removeAll(node,type__$1);
{
var G__7668 = seq__7652;
var G__7669 = chunk__7653;
var G__7670 = count__7654;
var G__7671 = (i__7655 + 1);
seq__7652 = G__7668;
chunk__7653 = G__7669;
count__7654 = G__7670;
i__7655 = G__7671;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7652);if(temp__4126__auto__)
{var seq__7652__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7652__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__7652__$1);{
var G__7672 = cljs.core.chunk_rest.call(null,seq__7652__$1);
var G__7673 = c__4205__auto__;
var G__7674 = cljs.core.count.call(null,c__4205__auto__);
var G__7675 = 0;
seq__7652 = G__7672;
chunk__7653 = G__7673;
count__7654 = G__7674;
i__7655 = G__7675;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__7652__$1);goog.events.removeAll(node,type__$1);
{
var G__7676 = cljs.core.next.call(null,seq__7652__$1);
var G__7677 = null;
var G__7678 = 0;
var G__7679 = 0;
seq__7652 = G__7676;
chunk__7653 = G__7677;
count__7654 = G__7678;
i__7655 = G__7679;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__7680 = parent;
var G__7681 = cljs.core.cons.call(null,parent,so_far);
n = G__7680;
so_far = G__7681;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__7690_7698 = cljs.core.seq.call(null,ancestors);var chunk__7691_7699 = null;var count__7692_7700 = 0;var i__7693_7701 = 0;while(true){
if((i__7693_7701 < count__7692_7700))
{var n_7702 = cljs.core._nth.call(null,chunk__7691_7699,i__7693_7701);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7702;
goog.events.fireListeners(n_7702,evt.type,true,evt);
}
{
var G__7703 = seq__7690_7698;
var G__7704 = chunk__7691_7699;
var G__7705 = count__7692_7700;
var G__7706 = (i__7693_7701 + 1);
seq__7690_7698 = G__7703;
chunk__7691_7699 = G__7704;
count__7692_7700 = G__7705;
i__7693_7701 = G__7706;
continue;
}
} else
{var temp__4126__auto___7707 = cljs.core.seq.call(null,seq__7690_7698);if(temp__4126__auto___7707)
{var seq__7690_7708__$1 = temp__4126__auto___7707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7690_7708__$1))
{var c__4205__auto___7709 = cljs.core.chunk_first.call(null,seq__7690_7708__$1);{
var G__7710 = cljs.core.chunk_rest.call(null,seq__7690_7708__$1);
var G__7711 = c__4205__auto___7709;
var G__7712 = cljs.core.count.call(null,c__4205__auto___7709);
var G__7713 = 0;
seq__7690_7698 = G__7710;
chunk__7691_7699 = G__7711;
count__7692_7700 = G__7712;
i__7693_7701 = G__7713;
continue;
}
} else
{var n_7714 = cljs.core.first.call(null,seq__7690_7708__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7714;
goog.events.fireListeners(n_7714,evt.type,true,evt);
}
{
var G__7715 = cljs.core.next.call(null,seq__7690_7708__$1);
var G__7716 = null;
var G__7717 = 0;
var G__7718 = 0;
seq__7690_7698 = G__7715;
chunk__7691_7699 = G__7716;
count__7692_7700 = G__7717;
i__7693_7701 = G__7718;
continue;
}
}
} else
{}
}
break;
}
var seq__7694_7719 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__7695_7720 = null;var count__7696_7721 = 0;var i__7697_7722 = 0;while(true){
if((i__7697_7722 < count__7696_7721))
{var n_7723 = cljs.core._nth.call(null,chunk__7695_7720,i__7697_7722);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7723;
goog.events.fireListeners(n_7723,evt.type,false,evt);
}
{
var G__7724 = seq__7694_7719;
var G__7725 = chunk__7695_7720;
var G__7726 = count__7696_7721;
var G__7727 = (i__7697_7722 + 1);
seq__7694_7719 = G__7724;
chunk__7695_7720 = G__7725;
count__7696_7721 = G__7726;
i__7697_7722 = G__7727;
continue;
}
} else
{var temp__4126__auto___7728 = cljs.core.seq.call(null,seq__7694_7719);if(temp__4126__auto___7728)
{var seq__7694_7729__$1 = temp__4126__auto___7728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7694_7729__$1))
{var c__4205__auto___7730 = cljs.core.chunk_first.call(null,seq__7694_7729__$1);{
var G__7731 = cljs.core.chunk_rest.call(null,seq__7694_7729__$1);
var G__7732 = c__4205__auto___7730;
var G__7733 = cljs.core.count.call(null,c__4205__auto___7730);
var G__7734 = 0;
seq__7694_7719 = G__7731;
chunk__7695_7720 = G__7732;
count__7696_7721 = G__7733;
i__7697_7722 = G__7734;
continue;
}
} else
{var n_7735 = cljs.core.first.call(null,seq__7694_7729__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7735;
goog.events.fireListeners(n_7735,evt.type,false,evt);
}
{
var G__7736 = cljs.core.next.call(null,seq__7694_7729__$1);
var G__7737 = null;
var G__7738 = 0;
var G__7739 = 0;
seq__7694_7719 = G__7736;
chunk__7695_7720 = G__7737;
count__7696_7721 = G__7738;
i__7697_7722 = G__7739;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3445__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3445__auto__))
{return o.dispatchEvent;
} else
{return and__3445__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__7746_7752 = cljs.core.seq.call(null,evt_map);var chunk__7747_7753 = null;var count__7748_7754 = 0;var i__7749_7755 = 0;while(true){
if((i__7749_7755 < count__7748_7754))
{var vec__7750_7756 = cljs.core._nth.call(null,chunk__7747_7753,i__7749_7755);var k_7757 = cljs.core.nth.call(null,vec__7750_7756,0,null);var v_7758 = cljs.core.nth.call(null,vec__7750_7756,1,null);(evt[k_7757] = v_7758);
{
var G__7759 = seq__7746_7752;
var G__7760 = chunk__7747_7753;
var G__7761 = count__7748_7754;
var G__7762 = (i__7749_7755 + 1);
seq__7746_7752 = G__7759;
chunk__7747_7753 = G__7760;
count__7748_7754 = G__7761;
i__7749_7755 = G__7762;
continue;
}
} else
{var temp__4126__auto___7763 = cljs.core.seq.call(null,seq__7746_7752);if(temp__4126__auto___7763)
{var seq__7746_7764__$1 = temp__4126__auto___7763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_7764__$1))
{var c__4205__auto___7765 = cljs.core.chunk_first.call(null,seq__7746_7764__$1);{
var G__7766 = cljs.core.chunk_rest.call(null,seq__7746_7764__$1);
var G__7767 = c__4205__auto___7765;
var G__7768 = cljs.core.count.call(null,c__4205__auto___7765);
var G__7769 = 0;
seq__7746_7752 = G__7766;
chunk__7747_7753 = G__7767;
count__7748_7754 = G__7768;
i__7749_7755 = G__7769;
continue;
}
} else
{var vec__7751_7770 = cljs.core.first.call(null,seq__7746_7764__$1);var k_7771 = cljs.core.nth.call(null,vec__7751_7770,0,null);var v_7772 = cljs.core.nth.call(null,vec__7751_7770,1,null);(evt[k_7771] = v_7772);
{
var G__7773 = cljs.core.next.call(null,seq__7746_7764__$1);
var G__7774 = null;
var G__7775 = 0;
var G__7776 = 0;
seq__7746_7752 = G__7773;
chunk__7747_7753 = G__7774;
count__7748_7754 = G__7775;
i__7749_7755 = G__7776;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__7777_SHARP_){return goog.events.getListeners(p1__7777_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map