export type TextLength = 'short' | 'medium' | 'long';
export type TextCategory = 
    | 'fairytale'
    | 'legal'
    | 'patientinfo'
    | 'marketplace'
    | 'fiveyearold'
    | 'messages'
    | 'publicsector'
    | 'sensational';

export type TextCollection = Record<TextLength, string[]>;
export type TextCategories = Record<TextCategory, TextCollection>;