import React, { useState } from 'react';
import { AccessibilityMenu } from './AccessibilityMenu';
import { Accessibility } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 group focus:outline-none"
                aria-label="Accessibility Menu"
            >
                {/* Logo Container mimicking the uploaded image */}
                <div className="relative w-16 h-16 rounded-full bg-blue-200/80 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    {/* Outer Blue Ring */}
                    <div className="absolute inset-1 rounded-full bg-blue-600"></div>

                    {/* White Border/Gap */}
                    <div className="absolute inset-[6px] rounded-full bg-white"></div>

                    {/* Inner Dark Blue Circle */}
                    <div className="absolute inset-[8px] rounded-full bg-[#002b5c] flex items-center justify-center">
                        <Accessibility size={32} color="white" strokeWidth={2} />
                    </div>
                </div>
            </button>

            <AccessibilityMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
