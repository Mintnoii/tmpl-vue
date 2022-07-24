module.exports = {
  types: [
    { value: 'wip', name: '💪 wip       工作进度更新' },
    { value: 'feat', name: '🎯 feat      增加新功能' },
    { value: 'fix', name: '🐛 fix       Bug 修复' },
    { value: 'ui',  name: '🎨 ui        更新 UI' },
    { value: 'docs', name: '📖 docs      只有文档变更' },
    { value: 'style', name: '💅 style     代码格式化，空格，分号等格式修复' },
    { value: 'perf', name: '🚀 perf      性能优化' },
    { value: 'refactor', name: '🛠  refactor  代码重构' },
    { value: 'release', name: '🎉 release   发布' },
    // { value: 'deploy',  name: '📦 deploy    部署' },
    // { value: 'test', name: '✅ test:    添加一个测试' },
    // { value: 'ci', name: '🕹 ci:       持续集成修改(更改持续集成软件的配置文件和package中的scripts命令)' },
    { value: 'chore', name: '🧩 chore     构建过程/工程依赖/辅助工具的变动(更改配置文件)' },
    { value: 'evert', name: '⏪ revert    代码回退' },
    { value: 'build', name: '📦 build     打包构建，变更项目构建或外部依赖' }
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
