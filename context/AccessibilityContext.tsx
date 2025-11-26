import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ContrastMode = 'normal' | 'high' | 'dark' | 'light';
type CursorMode = 'default' | 'big' | 'reading-guide';
type TextAlignMode = 'left' | 'center' | 'right' | 'justify';

interface AccessibilityState {
    contrast: ContrastMode;
    textSize: number;
    lineHeight: number;
    letterSpacing: number;
    highlightLinks: boolean;
    dyslexiaFriendly: boolean;
    cursor: CursorMode;
    pauseAnimations: boolean;
    hideImages: boolean;
    textAlign: TextAlignMode;
    saturation: number;
    tooltips: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
    setContrast: (mode: ContrastMode) => void;
    setTextSize: (size: number) => void;
    setLineHeight: (height: number) => void;
    setLetterSpacing: (spacing: number) => void;
    toggleHighlightLinks: () => void;
    toggleDyslexiaFriendly: () => void;
    setCursor: (mode: CursorMode) => void;
    togglePauseAnimations: () => void;
    toggleHideImages: () => void;
    setTextAlign: (align: TextAlignMode) => void;
    setSaturation: (saturation: number) => void;
    toggleTooltips: () => void;
    resetSettings: () => void;
}

const defaultState: AccessibilityState = {
    contrast: 'normal',
    textSize: 1,
    lineHeight: 1.5,
    letterSpacing: 0,
    highlightLinks: false,
    dyslexiaFriendly: false,
    cursor: 'default',
    pauseAnimations: false,
    hideImages: false,
    textAlign: 'left',
    saturation: 1,
    tooltips: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<AccessibilityState>(defaultState);

    const resetSettings = () => setState(defaultState);

    const updateState = (key: keyof AccessibilityState, value: any) => {
        setState(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        // Apply styles to documentElement
        const root = document.documentElement;

        // Contrast
        root.classList.remove('acc-contrast-high', 'acc-contrast-dark', 'acc-contrast-light');
        if (state.contrast !== 'normal') {
            root.classList.add(`acc-contrast-${state.contrast}`);
        }

        // Text Size
        root.style.setProperty('--acc-text-scale', state.textSize.toString());

        // Line Height
        root.style.setProperty('--acc-line-height', state.lineHeight.toString());

        // Letter Spacing
        root.style.setProperty('--acc-letter-spacing', `${state.letterSpacing}em`);

        // Highlight Links
        if (state.highlightLinks) root.classList.add('acc-highlight-links');
        else root.classList.remove('acc-highlight-links');

        // Dyslexia Friendly
        if (state.dyslexiaFriendly) root.classList.add('acc-dyslexia-friendly');
        else root.classList.remove('acc-dyslexia-friendly');

        // Cursor
        root.classList.remove('acc-cursor-big', 'acc-cursor-reading-guide');
        if (state.cursor !== 'default') {
            root.classList.add(`acc-cursor-${state.cursor}`);
        }

        // Pause Animations
        if (state.pauseAnimations) root.classList.add('acc-pause-animations');
        else root.classList.remove('acc-pause-animations');

        // Hide Images
        if (state.hideImages) root.classList.add('acc-hide-images');
        else root.classList.remove('acc-hide-images');

        // Text Align
        root.style.setProperty('--acc-text-align', state.textAlign);
        if (state.textAlign !== 'left') root.classList.add('acc-force-text-align');
        else root.classList.remove('acc-force-text-align');

        // Saturation
        root.style.filter = `saturate(${state.saturation})`;

        // Tooltips
        if (state.tooltips) root.classList.add('acc-tooltips');
        else root.classList.remove('acc-tooltips');

    }, [state]);

    const value = {
        ...state,
        setContrast: (mode: ContrastMode) => updateState('contrast', mode),
        setTextSize: (size: number) => updateState('textSize', size),
        setLineHeight: (height: number) => updateState('lineHeight', height),
        setLetterSpacing: (spacing: number) => updateState('letterSpacing', spacing),
        toggleHighlightLinks: () => updateState('highlightLinks', !state.highlightLinks),
        toggleDyslexiaFriendly: () => updateState('dyslexiaFriendly', !state.dyslexiaFriendly),
        setCursor: (mode: CursorMode) => updateState('cursor', mode),
        togglePauseAnimations: () => updateState('pauseAnimations', !state.pauseAnimations),
        toggleHideImages: () => updateState('hideImages', !state.hideImages),
        setTextAlign: (align: TextAlignMode) => updateState('textAlign', align),
        setSaturation: (saturation: number) => updateState('saturation', saturation),
        toggleTooltips: () => updateState('tooltips', !state.tooltips),
        resetSettings,
    };

    return (
        <AccessibilityContext.Provider value={value}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};
