// Compiled by ClojureScript 0.0-2202
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj5486 = {};return obj5486;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3445__auto__ = this$;if(and__3445__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3445__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4084__auto__ = (((this$ == null))?null:this$);return (function (){var or__3457__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj5488 = {};return obj5488;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3445__auto__ = this$;if(and__3445__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3445__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4084__auto__ = (((this$ == null))?null:this$);return (function (){var or__3457__auto__ = (ajax.core._abort[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (ajax.core._abort["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__5489){var map__5490 = p__5489;var map__5490__$1 = ((cljs.core.seq_QMARK_.call(null,map__5490))?cljs.core.apply.call(null,cljs.core.hash_map,map__5490):map__5490);var timeout = cljs.core.get.call(null,map__5490__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var G__5491 = (new goog.net.XhrIo());goog.events.listen(G__5491,goog.net.EventType.COMPLETE,handler);
G__5491.setTimeoutInterval((function (){var or__3457__auto__ = timeout;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return 0;
}
})());
G__5491.send(uri,method,body,headers);
return G__5491;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__5492){var map__5493 = p__5492;var map__5493__$1 = ((cljs.core.seq_QMARK_.call(null,map__5493))?cljs.core.apply.call(null,cljs.core.hash_map,map__5493):map__5493);var max_retries = cljs.core.get.call(null,map__5493__$1,new cljs.core.Keyword(null,"max-retries","max-retries",902021455));var priority = cljs.core.get.call(null,map__5493__$1,new cljs.core.Keyword(null,"priority","priority",4143410454));var timeout = cljs.core.get.call(null,map__5493__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var id = cljs.core.get.call(null,map__5493__$1,new cljs.core.Keyword(null,"id","id",1013907597));var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",3584325486),"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",3584325486),"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__5494){var map__5496 = p__5494;var map__5496__$1 = ((cljs.core.seq_QMARK_.call(null,map__5496))?cljs.core.apply.call(null,cljs.core.hash_map,map__5496):map__5496);var keywords_QMARK_ = cljs.core.get.call(null,map__5496__$1,new cljs.core.Keyword(null,"keywords?","keywords?",4346628423));var prefix = cljs.core.get.call(null,map__5496__$1,new cljs.core.Keyword(null,"prefix","prefix",4328760836));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (map__5496,map__5496__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),keywords_QMARK_);
});})(map__5496,map__5496__$1,keywords_QMARK_,prefix))
,new cljs.core.Keyword(null,"description","description",3584325486),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3445__auto__ = ct;if(cljs.core.truth_(and__3445__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3445__auto__;
}
})())?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format.call(null));return cljs.core.update_in.call(null,format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",3584325486)], null),((function (ct,format){
return (function (p1__5497_SHARP_){return [cljs.core.str(p1__5497_SHARP_),cljs.core.str(" (default)")].join('');
});})(ct,format))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",1127304017));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),format,new cljs.core.Keyword(null,"description","description",3584325486),"custom"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__5498,xhrio){var map__5500 = p__5498;var map__5500__$1 = ((cljs.core.seq_QMARK_.call(null,map__5500))?cljs.core.apply.call(null,cljs.core.hash_map,map__5500):map__5500);var description = cljs.core.get.call(null,map__5500__$1,new cljs.core.Keyword(null,"description","description",3584325486));var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"response","response",673580979),null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",4116943293),true,new cljs.core.Keyword(null,"original-text","original-text",2831108891),xhrio.getResponseText());if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return parse_error;
} else
{return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",3528843744),parse_error);
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.call(null,-1,status))
{if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),-1,new cljs.core.Keyword(null,"status-text","status-text",4371493274),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",2630502850),true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),-1,new cljs.core.Keyword(null,"status-text","status-text",4371493274),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",3232322160),true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));var parse = new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = parse.call(null,xhrio);if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",673580979),response__$1], null)], null);
}
}catch (e5504){if((e5504 instanceof Object))
{var e = e5504;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5504;
} else
{return null;
}
}
}}
}catch (e5503){if((e5503 instanceof Object))
{var e = e5503;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),0,new cljs.core.Keyword(null,"status-text","status-text",4371493274),e.message,new cljs.core.Keyword(null,"response","response",673580979),null], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5503;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__5505,p__5506){var map__5510 = p__5505;var map__5510__$1 = ((cljs.core.seq_QMARK_.call(null,map__5510))?cljs.core.apply.call(null,cljs.core.hash_map,map__5510):map__5510);var format = map__5510__$1;var content_type = cljs.core.get.call(null,map__5510__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write = cljs.core.get.call(null,map__5510__$1,new cljs.core.Keyword(null,"write","write",1127304017));var map__5511 = p__5506;var map__5511__$1 = ((cljs.core.seq_QMARK_.call(null,map__5511))?cljs.core.apply.call(null,cljs.core.hash_map,map__5511):map__5511);var headers = cljs.core.get.call(null,map__5511__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var params = cljs.core.get.call(null,map__5511__$1,new cljs.core.Keyword(null,"params","params",4313443576));if(cljs.core._EQ_.call(null,method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else
{var map__5512 = format;var map__5512__$1 = ((cljs.core.seq_QMARK_.call(null,map__5512))?cljs.core.apply.call(null,cljs.core.hash_map,map__5512):map__5512);var content_type__$1 = cljs.core.get.call(null,map__5512__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write__$1 = cljs.core.get.call(null,map__5512__$1,new cljs.core.Keyword(null,"write","write",1127304017));var body = write__$1.call(null,params);var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.call(null,(function (){var or__3457__auto__ = headers;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__5513){var map__5515 = p__5513;var map__5515__$1 = ((cljs.core.seq_QMARK_.call(null,map__5515))?cljs.core.apply.call(null,cljs.core.hash_map,map__5515):map__5515);var get_default_format = cljs.core.get.call(null,map__5515__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996));var handler = cljs.core.get.call(null,map__5515__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));if(cljs.core.truth_(handler))
{return ((function (map__5515,map__5515__$1,get_default_format,handler){
return (function (xhrio){return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__3457__auto__ = get_default_format;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return ajax.core.no_format;
}
})()));
});
;})(map__5515,map__5515__$1,get_default_format,handler))
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__5516){var map__5519 = p__5516;var map__5519__$1 = ((cljs.core.seq_QMARK_.call(null,map__5519))?cljs.core.apply.call(null,cljs.core.hash_map,map__5519):map__5519);var opts = map__5519__$1;var manager = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"manager","manager",1849164575));var format = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"format","format",4040092521));var method = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"method","method",4231316563));var uri = cljs.core.get.call(null,map__5519__$1,new cljs.core.Keyword(null,"uri","uri",1014020318));var format__$1 = ajax.core.get_format.call(null,format);var method__$1 = ajax.core.normalize_method.call(null,method);var vec__5520 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.call(null,vec__5520,0,null);var body = cljs.core.nth.call(null,vec__5520,1,null);var headers = cljs.core.nth.call(null,vec__5520,2,null);var handler = ajax.core.base_handler.call(null,format__$1,opts);return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__5521__delegate = function (uri,method,args){var f = cljs.core.first.call(null,args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);return ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",1014020318),uri,new cljs.core.Keyword(null,"method","method",4231316563),method));
};
var G__5521 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5521__delegate.call(this,uri,method,args);};
G__5521.cljs$lang$maxFixedArity = 2;
G__5521.cljs$lang$applyTo = (function (arglist__5522){
var uri = cljs.core.first(arglist__5522);
arglist__5522 = cljs.core.next(arglist__5522);
var method = cljs.core.first(arglist__5522);
var args = cljs.core.rest(arglist__5522);
return G__5521__delegate(uri,method,args);
});
G__5521.cljs$core$IFn$_invoke$arity$variadic = G__5521__delegate;
return G__5521;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__5524 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"url","url",1014020321),G__5524))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__5524))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__5524))
{return ajax.core.edn_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__5524))
{return ajax.core.json_request_format.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),format,new cljs.core.Keyword(null,"description","description",3584325486),"custom"], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var G__5526 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__5526))
{return ajax.core.raw_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__5526))
{return ajax.core.edn_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__5526))
{return ajax.core.json_response_format.call(null,format_params);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
} else
{return null;
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__5527){var map__5532 = p__5527;var map__5532__$1 = ((cljs.core.seq_QMARK_.call(null,map__5532))?cljs.core.apply.call(null,cljs.core.hash_map,map__5532):map__5532);var finally$ = cljs.core.get.call(null,map__5532__$1,new cljs.core.Keyword(null,"finally","finally",4455611637));var error_handler = cljs.core.get.call(null,map__5532__$1,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671));var handler = cljs.core.get.call(null,map__5532__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));return ((function (map__5532,map__5532__$1,finally$,error_handler,handler){
return (function easy_handler(p__5533){var vec__5535 = p__5533;var ok = cljs.core.nth.call(null,vec__5535,0,null);var result = cljs.core.nth.call(null,vec__5535,1,null);var temp__4124__auto___5536 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___5536))
{var h_5537 = temp__4124__auto___5536;h_5537.call(null,result);
} else
{}
if(cljs.core.fn_QMARK_.call(null,finally$))
{return finally$.call(null);
} else
{return null;
}
});
;})(map__5532,map__5532__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__5538){var map__5540 = p__5538;var map__5540__$1 = ((cljs.core.seq_QMARK_.call(null,map__5540))?cljs.core.apply.call(null,cljs.core.hash_map,map__5540):map__5540);var opts = map__5540__$1;var response_format = cljs.core.get.call(null,map__5540__$1,new cljs.core.Keyword(null,"response-format","response-format",4250805877));var format = cljs.core.get.call(null,map__5540__$1,new cljs.core.Keyword(null,"format","format",4040092521));var rf = ajax.core.keyword_response_format.call(null,response_format,opts);if((format == null))
{return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",1706707644),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996),ajax.core.get_default_format);
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__5541){var vec__5543 = p__5541;var opts = cljs.core.nth.call(null,vec__5543,0,null);return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
};
var GET = function (uri,var_args){
var p__5541 = null;if (arguments.length > 1) {
  p__5541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__5541);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__5544){
var uri = cljs.core.first(arglist__5544);
var p__5541 = cljs.core.rest(arglist__5544);
return GET__delegate(uri,p__5541);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__5545){var vec__5547 = p__5545;var opts = cljs.core.nth.call(null,vec__5547,0,null);return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
};
var HEAD = function (uri,var_args){
var p__5545 = null;if (arguments.length > 1) {
  p__5545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__5545);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__5548){
var uri = cljs.core.first(arglist__5548);
var p__5545 = cljs.core.rest(arglist__5548);
return HEAD__delegate(uri,p__5545);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__5549){var vec__5551 = p__5549;var opts = cljs.core.nth.call(null,vec__5551,0,null);return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
};
var POST = function (uri,var_args){
var p__5549 = null;if (arguments.length > 1) {
  p__5549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__5549);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__5552){
var uri = cljs.core.first(arglist__5552);
var p__5549 = cljs.core.rest(arglist__5552);
return POST__delegate(uri,p__5549);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__5553){var vec__5555 = p__5553;var opts = cljs.core.nth.call(null,vec__5555,0,null);return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
};
var PUT = function (uri,var_args){
var p__5553 = null;if (arguments.length > 1) {
  p__5553 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__5553);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__5556){
var uri = cljs.core.first(arglist__5556);
var p__5553 = cljs.core.rest(arglist__5556);
return PUT__delegate(uri,p__5553);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__5557){var vec__5559 = p__5557;var opts = cljs.core.nth.call(null,vec__5559,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__5557 = null;if (arguments.length > 1) {
  p__5557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__5557);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__5560){
var uri = cljs.core.first(arglist__5560);
var p__5557 = cljs.core.rest(arglist__5560);
return DELETE__delegate(uri,p__5557);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__5561){var vec__5563 = p__5561;var opts = cljs.core.nth.call(null,vec__5563,0,null);return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
};
var OPTIONS = function (uri,var_args){
var p__5561 = null;if (arguments.length > 1) {
  p__5561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__5561);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__5564){
var uri = cljs.core.first(arglist__5564);
var p__5561 = cljs.core.rest(arglist__5564);
return OPTIONS__delegate(uri,p__5561);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__5565){var vec__5567 = p__5565;var opts = cljs.core.nth.call(null,vec__5567,0,null);return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
};
var TRACE = function (uri,var_args){
var p__5565 = null;if (arguments.length > 1) {
  p__5565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__5565);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__5568){
var uri = cljs.core.first(arglist__5568);
var p__5565 = cljs.core.rest(arglist__5568);
return TRACE__delegate(uri,p__5565);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;

//# sourceMappingURL=core.js.map