import assert from 'assert'
import golos from '../src'

import { camelCase } from '../src/utils'
import { methods_0_18_0 } from './methods_by_version'

describe('golos.methods', () => {

    it('has all generated methods', () => {

        const methods = methods_0_18_0
            .map( m => `${camelCase(m)}`)
            .sort()

        let libMethods = Object.keys(golos.api.Golos.prototype)
            .filter( m => !m.endsWith('With'))
            .filter( m => !m.endsWith('Async'))
            .sort()
        
        assert.equal(libMethods.length, methods.length)
        assert.deepEqual(libMethods, methods)
    })

})
