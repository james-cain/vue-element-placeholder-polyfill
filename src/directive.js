import IEVersion from './utils';

export default {
  bind(el, binding, vnode) {
    let placeholderVal = '';
    const placeholder = binding.value.placeholder;
    const model = binding.value.model;
    if (IEVersion() === 9) {
      const childNodes = vnode.elm.children;
      Object.keys(childNodes).forEach((e) => {
        const child = childNodes[e];
        if (child) {
          if (child.nodeName === 'INPUT') {
            placeholderVal = placeholder;
            child.style.color = '#ccc';
            if (child.type !== 'text') {
              child.dataType = child.type;
              child.type = 'text';
            }
          }
        }
      });
      vnode.context.initInputIE9(model, placeholderVal);
    }
  },
};
