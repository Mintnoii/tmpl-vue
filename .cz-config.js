module.exports = {
  types: [
    { value: '💪 WIP', name: '💪 WIP       工作进度更新' },
    { value: '🎯 feat',name: '🎯 feature   增加新功能' },
    { value: '🐛 bug', name: '🐛 bug       测试反馈bug列表中的bug号' },
    { value: '🚑 fix', name: '🚑 fix       修复bug' },
    { value: '🎨 ui',  name: '🎨 ui        更新UI' },
    { value: '📚 docs',name: '📚 docs      只有文档变更' },
    { value: '💅 style',name: '💅 style     代码格式，空格，分号等格式修复(不影响代码运行的变动)' },
    { value: '🚀 perf',name: '🚀 perf      性能优化' },
    { value: '🛠 refactor',name: '🛠  refactor  代码重构(既不是增加feature，也不是修复bug)' },
    { value: '🎉 release', name: '🎉 release   发布' },
    { value: '📦 deploy',  name: '📦 deploy    部署' },
    // { value: '🔬 test', name: '🔬 test:    添加一个测试' },
    // { value: '🕹 ci', name: '🕹 ci:       持续集成修改(更改持续集成软件的配置文件和package中的scripts命令)' },
    { value: '🧩 chore',   name: '🧩 chore     没有修改源代码，只是构建过程或辅助工具的变动(更改配置文件)' },
    { value: '⏪ revert',  name: '⏪ revert    代码回退' },
    { value: '🏗 build',   name: '🏗  build     构建，变更项目构建或外部依赖' }
  ],
  scopes: [],
  messages: {
    type: '请选择一种提交类型:',
    scope: '选择一个scope (可选):',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    // body: '请输入详细描述，使用"|"换行(可选，待优化去除，跳过即可):',
    // breaking: '非兼容性说明 (可选)',
    // footer: '请输入要关闭的关联issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  skipQuestions: ['scope', 'body', 'footer'],
  subjectLimit: 72
}
