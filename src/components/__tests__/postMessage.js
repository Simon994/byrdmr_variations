import mockAxios from 'axios';

import { postMessage } from '../../lib/api'

describe('postMessage', () => {
  it('successfully posts the message to axios', async () => {
    // setup
    const dataFromMock = {
      fullName: 'beans',
      email: 'beans@email.com',
      message: 'Hi, I am some beans'
    }
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: dataFromMock
      })
    )

    // work
    const formDataToSend = {
      fullName: 'beans',
      email: 'beans@email.com',
      message: 'Hi, I am some beans'
    }
  
    const response = await postMessage(formDataToSend)
    
    // expect
    expect(response.data).toEqual(dataFromMock)
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(
      '/api/messages/',
      formDataToSend
    )
  })
})