/* eslint-disable no-useless-escape */
/* eslint-disable no-mixed-operators */
  
  export const Platform = {
    isMob: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  }
    
  export default class PlatformPlugin {
    static install = (Vue) => {
      Vue.platform = Platform
      Object.defineProperty(Vue.prototype, '$platform', {
        get () {
          return Platform
        }
      })
    }
  }