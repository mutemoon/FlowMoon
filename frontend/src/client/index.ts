
import { HttpClient } from "tsrpc-browser";
import { serviceProto } from '../shared/protocols/serviceProto';

const client = new HttpClient(serviceProto, {
  server: 'http://127.0.0.1:3060',
  json: true,
});

export default client;

