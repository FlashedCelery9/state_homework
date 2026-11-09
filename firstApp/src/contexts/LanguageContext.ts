import {createContext} from "react";

export type Language = 'uk' | 'en';

export interface Translation {
    title: string;
    header1: string;
    header2: string;
    p: string;
}

interface LanguageContext {
    language: Language;
    translation: Translation;
    changeLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContext | null>(null);