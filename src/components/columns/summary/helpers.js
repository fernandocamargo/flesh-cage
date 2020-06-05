import emoji from 'node-emoji';

import { EMOJI } from './constants';

export const renderers = {
  text: ({ value }) => value.replace(EMOJI, emoji.get),
};
