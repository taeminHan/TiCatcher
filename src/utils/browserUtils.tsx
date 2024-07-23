import {useEffect, useState} from "react";


export const useDarkMode = (): boolean | null => {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

        const updateDarkMode = () => {
            setIsDarkMode(matchDark.matches);
        };

        // 초기 상태 설정
        updateDarkMode();

        // 다크 모드 변경 시 상태 업데이트
        matchDark.addEventListener('change', updateDarkMode);

        // 클린업 함수
        return () => {
            matchDark.removeEventListener('change', updateDarkMode);
        };
    }, []);

    return isDarkMode;
};
