/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: function(cb, timeout) {
    setTimeout(function() {
      //debugger
      cb(_products), timeout || TIMEOUT
    })
  },
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}