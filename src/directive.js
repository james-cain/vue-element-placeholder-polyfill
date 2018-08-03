import IEVersion from './utils';

export default {
  bind(el, binding, vnode) {
    const placeholder = binding.value.placeholder;
    const model = binding.value.model;
    if (IEVersion() === 9) {
      const childNodes = vnode.elm.children;
      // const type = vnode.context.getElmType(vnode);
      vnode.context.setFillStyle(childNodes, model);
      vnode.context.initInputIE9(model, placeholder);
    }
  },
};
