import { httpProvider } from './http';

export function getBnbPrice(): Promise<any> {
  return httpProvider.get(
    'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT',
  );
}

export function getBaidu(): Promise<any> {
  return httpProvider.get('https://www.baidu.com');
}

export function getMyIp(): Promise<any> {
  return httpProvider.get('http://ip-api.com/json/');
}
