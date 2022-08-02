import { defineConfig, presetWind, presetAttributify } from 'unocss'
export default defineConfig({
  shortcuts: [
    {
      'wh-full': 'w-full h-full',
      'flex-col': 'flex flex-col',
      'flex-col-center': 'flex flex-col items-center justify-center',
      'flex-center': 'flex items-center justify-center',
      'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
      'ellipsis-text': 'nowrap-hidden text-ellipsis'
    }
  ],
  presets: [presetWind(), presetAttributify()]
})
