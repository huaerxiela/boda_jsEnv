// HTMLPictureElement对象

bodaEnv.memory.globlProtoObj["HTMLPictureElement"] = function HTMLPictureElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLPictureElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLPictureElement"], "HTMLPictureElement");
bodaEnv.memory.globlProtoObj["HTMLPictureElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLPictureElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];