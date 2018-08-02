# vue-element-placeholder-polyfill

- 该组件不包含vue、ElementUI，因此使用时必须提前导入二者
- src中的ie9-oninput-polyfill.js需要提前引入。无论是通过外链方式，还是通过import方式，都行。
- 支持外部引入Vue和ElementUI以及dist中的压缩js，全局变量inputie9Mixins混合到组件中使用。
- 组件体积2.79kb，gzip后1.07kb

#### Install

```
npm install vue-element-placeholder-polyfill
```

####使用：

##### 使用前提

> 需要引入vue、elementui及src中的ie9-oninput-polyfill.js

#####引入

- 全局引入，全局暴露inputie9Mixins对象（实际上不能这么使用，ie9并不支持module模式）

```
<script src="路径/ie9-oninput-polyfill.js"></script>
<script src="路径/vue-element-placeholder-polyfill.min.js"></script>

<script type="module">
    var main = {
        data() {
            return {
                userName: '',
                password: '',
            };
        },
        mixins: [
            inputie9Mixins.default,
        ],
    };
    var InputIE9 = Vue.extend(main);
    new InputIE9().$mount('#app');
</script>
```

- import方式

```
import 'vue-element-placeholder-polyfill/src/ie9-oninput-polyfill';
import inputMixins from 'vue-element-placeholder-polyfill/dist/js/vue-element-placeholder-polyfill.min';

export default {
  data() {
    return {
      userName: '',
      password: '',
    };
  },
  mixins: [
    inputMixins,
  ],
};
```

#### 内置方法

##### inputFocus('paramName', 'placeholder')

- paramName和当前input绑定的data名一致。如，登录用户 在data定义为userName，该值填userName
- placeholder 填写需要提示的标语

#####inputBlur('paramName', 'placeholder')

- 属性值和inputFocus一致

#### 自定义指令

##### v-inputie9

- binding对象规则
  - name: 固定为inputie9
  - value: 为placeholder对象，如{placeholder: '请输入账号'}
  - arg: 为对应data名，如登录用户在data定义为userName，该值则为userName

#### html标签示例

```
<el-input
    v-model="userName"
    ref="userName"
    placeholder="请输入账号"
    @focus="inputFocus('userName', '请输入账号')"
    @blur="inputBlur('userName', '请输入账号')"
    v-inputie9:userName="{placeholder: '请输入账号'}">
</el-input>
```

**注意：**

- 除了v-inpuie9指令是额外添加的属性，其他属性为原来就有的属性
- ref必须要填写，ref与对应data名一致，如登录用户在data定义为userName，该值则为userName

#### 暂时支持

- input 输入框

#### 暂不支持

- select选择器
- cascader级联选择器
- timepicker时间选择器中的任意时间范围方式
- datepicker日期选择器中的任意时间范围方式
- datetimepicker日期时间选择器中ed任意日期和时间范围方式

