import IEVersion from './utils';

export default {
  bind(el, binding, vnode) {
    const placeholder = binding.value.placeholder;
    const model = binding.value.model;
    if (IEVersion() === 9) {
      const childNodes = vnode.elm.children;
      vnode.context.setFillStyle(childNodes);
      vnode.context.initInputIE9(model, placeholder);
    }
  },
};
