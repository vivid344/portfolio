import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export { client };
