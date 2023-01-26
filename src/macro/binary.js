
import Proper from '../utils/proper.js'
import Unicode from '../utils/unicode.js'
import Fixed from './fixed.js'
import Unary from './unary.js'

const Binary = {
  frac: (x, y) => `${Proper.paren(x)}/${Proper.paren(y)}`,
  overset: function (x, y) {
    if (x == '?' && y == '=') return Fixed.qeq
    if (x == 'm' && y == '=') return Fixed.meq
    if (x == 'def' && y == '=') return Fixed.defeq
    if (x == Fixed['star'] && y == '=') return Fixed.stareq
    if (x == Fixed['Delta'] && y == '=') return Fixed.deltaeq
    return `\\overset\{${x}\}\{${y}\}`
  }
}
Binary['cfrac'] = Binary.frac
Binary['dfrac'] = Binary.frac
Binary['tfrac'] = Binary.frac

export default Binary
