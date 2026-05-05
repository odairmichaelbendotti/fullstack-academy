export interface ITokenService {
  generateToken(payload: object): string;
  validateToken(token: string): object | null;
}
