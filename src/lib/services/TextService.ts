import { fairytaleTexts } from '../texts/fairytale';
import { legalTexts } from '../texts/legal';
import { patientinfoTexts } from '../texts/patientinfo';
import { marketplaceTexts } from '../texts/marketplace';
import { fiveyearoldTexts } from '../texts/fiveyearold';
import { messagesTexts } from '../texts/messages';
import { publicsectorTexts } from '../texts/publicsector';
import { publicsectornynorskTexts } from '../texts/publicsectornynorsk';
import { sensationalTexts } from '../texts/sensational';
import type { TextCategory, TextLength, TextCategories } from '../types';

const texts: TextCategories = {
    fairytale: fairytaleTexts,
    legal: legalTexts,
    marketplace: marketplaceTexts,
    fiveyearold: fiveyearoldTexts,
    patientinfo: patientinfoTexts,
    messages: messagesTexts,
    publicsector: publicsectorTexts,
    publicsectornynorsk: publicsectornynorskTexts,
    sensational: sensationalTexts
};

export class TextService {
    static getRandomText(category: TextCategory, length: TextLength): string {
        const categoryTexts = texts[category][length];
        const randomIndex = Math.floor(Math.random() * categoryTexts.length);
        return categoryTexts[randomIndex];
    }

    static getTexts(category: TextCategory, length: TextLength): string[] {
        return texts[category][length];
    }
}