// HTMLAllCollection对象
bodavm.memory.globalobj['HTMLAllCollection'] = function HTMLAllCollection(){if (!(this instanceof HTMLAllCollection)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLAllCollection'], "HTMLAllCollection");
bodavm.toolsFunc.defineProperty('HTMLAllCollection', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAllCollection'].prototype, "HTMLAllCollection", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('HTMLAllCollection', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAllCollection'].prototype, "HTMLAllCollection", "item", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('HTMLAllCollection', "namedItem", {configurable:true, enumerable:true, writable:true, value:function namedItem (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLAllCollection'].prototype, "HTMLAllCollection", "namedItem", arguments)}},'prototype');