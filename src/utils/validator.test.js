import { checkPasswordValues } from './validator'

describe('checkPasswordValues', () => {
  it('should check password and return validation messages', () => {
    expect(checkPasswordValues({ first: '', confirm: '' })).toEqual({
      isError: true,
      first: 'Please enter your password',
      confirm: 'Please enter your password'
    });
    expect(checkPasswordValues({ first: '', confirm: 'test' })).toEqual({
      isError: true,
      first: 'Please enter your password',
      confirm: ''
    });
    expect(checkPasswordValues({ first: 'test', confirm: '' })).toEqual({
      isError: true,
      first: '',
      confirm: 'Please enter your password'
    });
    expect(checkPasswordValues({ first: 'test', confirm: 'testtest' })).toEqual({
      isError: true,
      first: '',
      confirm: `Those passwords didn't match. Try again!`
    });
    expect(checkPasswordValues({ first: 'test', confirm: 'test' })).toEqual({
      isError: true,
      first: '',
      confirm: 'Use 6 or more characters for your password'
    });
    expect(checkPasswordValues({ first: 'testtest', confirm: 'testtest' })).toEqual({
      isError: true,
      first: '',
      confirm: 'At least 1 uppercase character is required.'
    });
    expect(checkPasswordValues({ first: 'TESTTEST', confirm: 'TESTTEST' })).toEqual({
      isError: true,
      first: '',
      confirm: 'At least 1 lowercase character is required.'
    });
    expect(checkPasswordValues({ first: 'TESTtest', confirm: 'TESTtest' })).toEqual({
      isError: true,
      first: '',
      confirm: 'At least 1 number is required.'
    });
    expect(checkPasswordValues({ first: 'TESTtest7', confirm: 'TESTtest7' })).toEqual({
      isError: true,
      first: '',
      confirm: 'At least 1 special character is required.'
    });
    expect(checkPasswordValues({ first: 'TESTtest7&', confirm: 'TESTtest7&' })).toEqual(null);
  })
})