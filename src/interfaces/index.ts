import DemoInterfaces from './demo'
export const AppInterfaces = (): AppInterfaces => {
  return {
    ...DemoInterfaces
  }
}

export default AppInterfaces
