import inputie9 from './directive';
import IEVersion from './utils';

export default {
  directives: {
    inputie9,
  },
  methods: {
    inputFocus(ref, model, placeholder) {
      if (IEVersion() === 9) {
        const nodes = this.$refs[ref].$vnode;
        const childNodes = Array.prototype.slice.call(nodes.elm.children);
        this.setClearStyle(childNodes);
        if (this.getTraverseModel(model) === placeholder) this.setTraverseModel(model, '');
      }
    },
    inputBlur(ref, model, placeholder) {
      if (IEVersion() === 9) {
        const nodes = this.$refs[ref].$vnode;
        const childNodes = nodes.elm.children;
        this.setFillStyle(childNodes);
        if (this.getTraverseModel(model) === '') this.setTraverseModel(model, placeholder);
      }
    },
    initInputIE9(model, placeholder) {
      if (IEVersion() === 9) {
        this.setTraverseModel(model, placeholder);
      }
    },
    setClearStyle(childNodes) {
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
    },
    setFillStyle(childNodes) {
      Object.keys(childNodes).forEach((e) => {
        const child = childNodes[e];
        if (child) {
          if (child.nodeName === 'INPUT') {
            if (this.getTraverseModel(model) === '') {
              if (child.type !== 'text' && this.getTraverseModel(model) === '') {
                child.dataType = child.type;
                child.type = 'text';
              }
              child.style.color = '#ccc';
            }
          }
        }
      });
    },
    setTraverseModel(model, placeholder) {
      let val = this;
      const modelArr = model.split('.');
      modelArr.forEach((k, i) => {
        if (i < modelArr.length - 1) {
          val = val[k];
        } else {
          val[k] = placeholder;
        }
      });
    },
    getTraverseModel(model) {
      let val = this;
      const modelArr = model.split('.');
      modelArr.forEach((k) => {
        val = val[k];
      });
      return val;
    },
  },
};
