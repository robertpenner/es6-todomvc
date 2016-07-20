/* eslint no-console:0 */
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
import {setView} from './app'

if (module.hot) {
  module.hot.accept('./app', function() {
    console.log('🔁  HMR Reloading `./app`...')
    setView() // reinitialize the view
  })
  console.info('✅  HMR Enabled!')
} else {
  console.info('❌  HMR Not Supported.')
}
