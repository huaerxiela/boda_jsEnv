// DocumentPictureInPictureEvent对象

bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"] = function DocumentPictureInPictureEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DocumentPictureInPictureEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"], "DocumentPictureInPictureEvent");
bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"].prototype, "window", {
  configurable: true,
  enumerable: true,
  get: {
    window() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentPictureInPictureEvent"].prototype, "DocumentPictureInPictureEvent", "window_get", arguments);
    }
  }.window,
  set: undefined
});