interface DecodedJWT {
  header: {
    alg: String,
    typ: String
  },
  payload: Object,
  signature: String
}


export function decode(token: string): DecodedJWT {
  const [encHeader, encPayload, signature] = token.split('.');
  const headerString = atob(encHeader);
  const header = JSON.parse(headerString);
  const payloadString = atob(encPayload);
  const payload = JSON.parse(payloadString);

  return {
    header,
    payload,
    signature: signature
  }
} 