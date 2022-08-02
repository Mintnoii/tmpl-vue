module.exports = {
  extends: [
    //常用的安装依赖包共享配置
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-idiomatic-order'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'at-rules', //div { @media () {} }
      'dollar-variables', //$variable
      'custom-properties', //--property: 10px;
      'declarations', // display: block
      'rules'
    ],
    // 禁止空块
    'block-no-empty': true,
    // 颜色6位长度
    'color-hex-length': 'long',
    //禁止无效颜色值
    'color-no-invalid-hex': true,
    // 兼容自定义标签名
    'selector-type-no-unknown': true,
    //禁止使用未知属性
    'property-no-unknown': true,
    //禁止未知的单位
    'unit-no-unknown': true,
    //禁止未知的伪类选择器
    'selector-pseudo-class-no-unknown': true,
    //禁止缩写属性覆盖相关普通写法属性
    'declaration-block-no-shorthand-property-overrides': true,
    //禁止出现重复的属性
    'declaration-block-no-duplicate-properties': true,
    // 禁止在同一文件中重复的选择器
    'no-duplicate-selectors': true,
    // 忽略伪类选择器 ::v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': null,
    // 不验证@未知的名字，为了兼容scss的函数
    'at-rule-no-unknown': null,

    //根据标准语法，禁止 linear-gradient() 中无效的方向值
    'function-linear-gradient-no-nonstandard-direction': true,
    // 禁止空注释
    'comment-no-empty': true,
    // 禁止简写属性的冗余值
    'shorthand-property-no-redundant-values': true,
    // 禁止值的浏览器引擎前缀
    'value-no-vendor-prefix': true,
    // property-no-vendor-prefix
    'property-no-vendor-prefix': true,
    //不允许声明中的属性出现未知值
    'declaration-property-value-no-unknown': true
  }
}
