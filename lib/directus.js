import { Directus } from "@directus/sdk";

const directusSDK = new Directus(process.env.NEXT_PUBLIC_DIRECTUS_URL);

const previewSDK = new Directus(process.env.NEXT_PUBLIC_DIRECTUS_URL);
previewSDK.auth.static(process.env.DIRECTUS_API_TOKEN);

export const getClient = (preview) => (preview ? previewSDK : directusSDK);
