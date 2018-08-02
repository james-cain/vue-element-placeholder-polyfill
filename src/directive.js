import IEVersion from './utils';

export default {
  bind(el, binding, vnode) {
    let placeholder = '';
    const exp = binding.value.placeholder;
    if (IEVersion() === 9) {
      const childNodes = vnode.elm.children;
      Object.keys(childNodes).forEach((e) => {
        const child = childNodes[e];
        if (child) {
          if (child.nodeName === 'INPUT') {
            placeholder = exp;
            child.style.color = '#ccc';
            if (child.type !== 'text') {
              child.dataType = child.type;
              child.type = 'text';
            }
          }
        }
      });
      vnode.context.initInputIE9(binding.arg, placeholder);
    }
  },
};
