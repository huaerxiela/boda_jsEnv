// USBInTransferResult对象

bodaEnv.memory.globlProtoObj["USBInTransferResult"] = function USBInTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBInTransferResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBInTransferResult"], "USBInTransferResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInTransferResult"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInTransferResult"].prototype, "USBInTransferResult", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInTransferResult"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInTransferResult"].prototype, "USBInTransferResult", "status_get", arguments);
    }
  }.status,
  set: undefined
});