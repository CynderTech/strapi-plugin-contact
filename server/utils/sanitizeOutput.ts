import { sanitize } from '@strapi/utils';
import type { Message } from '../types';
import type { Options } from '@strapi/utils/dist/sanitize';

const { contentAPI } = sanitize;

// biome-ignore lint/suspicious/noExplicitAny: assigned any so strapi is not installed
const sanitizeOutput = (data: Message, model: string, strapi: any, auth?: Options) => {
    const schema = strapi.getModel(model);

    return contentAPI.output(data, schema, { auth });
}

export default sanitizeOutput;