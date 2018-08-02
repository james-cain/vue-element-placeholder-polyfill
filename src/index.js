import inputie9 from './directive';
import IEVersion from './utils';

export default {
  directives: {
    inputie9,
  },
  methods: {
    inputFocus(name, placeholder) {
      if (IEVersion() === 9) {
        const nodes = this.$refs[name].$vnode;
        const childNodes = Array.prototype.slice.call(nodes.elm.children);
        Object.keys(childNodes).forEach((e) => {
          const child = childNodes[e];
          if (child) {
            if (child.nodeName === 'INPUT') {
              if (child.dataType && child.dataType !== 'text') {
                child.type = child.dataType;
              }
              child.style.color = '#606266';
            }
          }
        });
        if (this[name] === placeholder) this[name] = '';
      }
    },
    inputBlur(name, placeholder) {
      if (IEVersion() === 9) {
        const nodes = this.$refs[name].$vnode;
        const childNodes = nodes.elm.children;
        Object.keys(childNodes).forEach((e) => {
          const child = childNodes[e];
          if (child) {
            if (child.nodeName === 'INPUT') {
              if (this[name] === '') {
                if (child.type !== 'text' && this[name] === '') {
                  child.dataType = child.type;
                  child.type = 'text';
                }
                child.style.color = '#ccc';
              }
            }
          }
        });
        if (this[name] === '') this[name] = placeholder;
      }
    },
    initInputIE9(name, placeholder) {
      if (IEVersion() === 9) {
        this[name] = placeholder;
      }
    },
  },
};
