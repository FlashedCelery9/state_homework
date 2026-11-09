import {type ReactNode, useCallback, useMemo, useState} from "react";
import {LanguageContext, type Language, type Translation} from "./LanguageContext.ts";

interface Prors {
    children: ReactNode;
}

const ukTr: Translation = {
    title: "Домашнє завдання GlobalState",
    header1: "Заголовок1",
    header2: "Заголовок2",
    p: "Параграф Параграф Параграф Параграф Параграф Параграф Параграф"
}
const enTr: Translation = {
    title: "HomeWork GlobalState",
    header1: "Header1",
    header2: "Header2",
    p: "Paragraph paragraph paragraph paragraph paragraph paragraph paragraph"
}
const translations = {
  "uk" : ukTr,
  "en" : enTr,
};

export function LanguageProvider({ children }: Prors) {
    const [language, setLanguage] = useState<Language>("uk");
    const [translation, setTranslation] = useState<Translation>(ukTr);

    const changeLanguage = useCallback((language_: Language) => {
        setLanguage(language_)
        switch (language_) {
            case "uk":
                setTranslation(translations.uk);
                break;
            case "en":
                setTranslation(translations.en);
                break;
        }
    },[])
    const contextValue = useMemo(() => ({
        language,
        translation,
        changeLanguage
    }), [language, translation, changeLanguage]);

    return(
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
}
