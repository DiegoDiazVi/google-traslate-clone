import OpenAI from 'openai';

import { SUPPORTED_LANGUAGES } from '../constants/constants';
import type { FromLanguage, Language } from '../types/types';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
});

export const translate = async (text: string, from: FromLanguage, to: Language): Promise<string> => {
    const messages = [
        {
            role: 'system' as const,
            content: `Translate from ${from} to ${to}: ${text}. Do not respond,
            only translate the text. If 'auto' is received as the 'from' language,
            detect the language of the text and translate it to the language specified in the 'to' field.`,
        },
        {
            role: 'user' as const,
            content: 'Hola mundo {{Español}} [[English]]',
        },
        {
            role: 'assistant' as const,
            content: 'Hello world',
        },
        {
            role: 'user' as const,
            content: 'How are you? {{auto}} [[Deutsch]]',
        },
        {
            role: 'assistant' as const,
            content: 'Wie geht es dir?',
        },
        {
            role: 'user' as const,
            content: 'Bon dia, com estas? {{auto}} [[Español]]',
        },
        {
            role: 'assistant' as const,
            content: 'Buenos días, ¿cómo estás?',
        }
    ];

    const fromCode = from === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[from];
    const toCode = SUPPORTED_LANGUAGES[to];

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            ...messages,
            {
                role: 'user' as const,
                content: `Translate from ${fromCode} to ${toCode}: ${text}`,
            },
        ],
    });

    return completion.choices[0]?.message.content ?? '';
};
