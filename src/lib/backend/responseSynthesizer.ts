import { IResponse, IResponseInc } from '@homely-interfaces/Response/Response';

export const genericResponse = (payload: IResponseInc): IResponse => ({
  error: false,
  payload: payload.payload ?? {},
  message: payload.message ?? '',
});

export const errorResponse = (payload: IResponseInc): IResponse => ({
  error: true,
  payload: payload.payload ?? {},
  message: payload.message ?? '',
});
