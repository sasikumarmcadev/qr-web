'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting content for QR codes by analyzing trending topics and URL relevance.
 *
 * - suggestQrCodeContent - An async function that takes a URL and returns a content suggestion for a QR code.
 * - SuggestQrCodeContentInput - The input type for the suggestQrCodeContent function.
 * - SuggestQrCodeContentOutput - The return type for the suggestQrCodeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestQrCodeContentInputSchema = z.object({
  url: z.string().describe('The URL to analyze for content suggestion.'),
});
export type SuggestQrCodeContentInput = z.infer<typeof SuggestQrCodeContentInputSchema>;

const SuggestQrCodeContentOutputSchema = z.object({
  suggestion: z.string().describe('The suggested content for the QR code.'),
});
export type SuggestQrCodeContentOutput = z.infer<typeof SuggestQrCodeContentOutputSchema>;

export async function suggestQrCodeContent(input: SuggestQrCodeContentInput): Promise<SuggestQrCodeContentOutput> {
  return suggestQrCodeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestQrCodeContentPrompt',
  input: {schema: SuggestQrCodeContentInputSchema},
  output: {schema: SuggestQrCodeContentOutputSchema},
  prompt: `You are an AI assistant designed to suggest content for QR codes.

  Analyze the content of the following URL and suggest engaging content for a QR code that links to it. Consider current trending topics to make the suggestion more relevant.

  URL: {{{url}}}
  \nSuggestion:`,
});

const suggestQrCodeContentFlow = ai.defineFlow(
  {
    name: 'suggestQrCodeContentFlow',
    inputSchema: SuggestQrCodeContentInputSchema,
    outputSchema: SuggestQrCodeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
