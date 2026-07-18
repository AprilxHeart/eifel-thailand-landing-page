'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PricingColumn from './PricingColumn';
import { IPricing } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingCarouselProps {
    tiers: IPricing[];
}

const PricingCarousel: React.FC<PricingCarouselProps> = ({ tiers }) => {
    const { language, isLoading, t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    
    // Responsive items per view - แสดง 3 การ์ดต่อหน้าจอเป็นค่าเริ่มต้น
    const [itemsPerView, setItemsPerView] = useState(3);
    
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2); // Tablet: 2 cards  
            } else {
                setItemsPerView(3); // Desktop: 3 cards เสมอ
            }
        };
        
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);
    
    // คำนวณ maxIndex ใหม่เพื่อให้การเลื่อนถูกต้อง
    const maxIndex = Math.max(0, tiers.length - itemsPerView);
    
    const nextSlide = useCallback(() => {
        if (isTransitioning || maxIndex === 0) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [isTransitioning, maxIndex]);
    
    const prevSlide = useCallback(() => {
        if (isTransitioning || maxIndex === 0) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }, [isTransitioning, maxIndex]);
    
    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || maxIndex === 0) return;
        setIsTransitioning(true);
        setCurrentIndex(Math.min(index, maxIndex));
    }, [isTransitioning, maxIndex]);

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 300);
        
        return () => clearTimeout(timer);
    }, [currentIndex]);
    
    // Auto-play functionality
    useEffect(() => {
        if (isPaused || maxIndex === 0) return;
        
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 6000);
        
        return () => clearInterval(interval);
    }, [isTransitioning, nextSlide, isPaused, maxIndex]);

    if (isLoading) {
        return (
            <div className="relative w-full">
                <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-xl h-96 animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }
    
    return (
        <div className="relative w-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <div 
                    ref={carouselRef}
                    className="flex transition-transform duration-300 ease-in-out select-none"
                    style={{ 
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {tiers.map((tier, index) => (
                        <div 
                            key={tier.name} 
                            className="flex-shrink-0 px-2 md:px-4"
                            style={{ width: `${100 / itemsPerView}%` }}
                        >
                            <PricingColumn 
                                tier={tier} 
                                highlight={index === 2} // Highlight EHF/ESF Series (3rd position)
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Navigation Arrows */}
            {maxIndex > 0 && (
                <>
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-luxury-black/90 hover:bg-luxury-black text-white shadow-lg p-3 transition-all duration-200 disabled:opacity-50 z-10 items-center justify-center"
                        aria-label={language === 'th' ? 'ก่อนหน้า' : 'Previous'}
                    >
                        <FiChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-luxury-black/90 hover:bg-luxury-black text-white shadow-lg p-3 transition-all duration-200 disabled:opacity-50 z-10 items-center justify-center"
                        aria-label={language === 'th' ? 'ถัดไป' : 'Next'}
                    >
                        <FiChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}
            
            {/* Dots Indicator */}
            {maxIndex > 0 && (
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`h-3 transition-all duration-200 ${
                                index === currentIndex
                                    ? 'w-10 bg-primary' 
                                    : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                            aria-label={`${t.pricingUI.viewSeries} ${index + 1}`}
                        />
                    ))}
                </div>
            )}
            
            {/* Series Counter & Instructions */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {`${t.pricingUI.showing} ${Math.min(currentIndex + itemsPerView, tiers.length)} ${t.pricingUI.of} ${tiers.length} ${t.pricingUI.series}`}
                </p>
                
                {maxIndex > 0 && (
                    <>
                        <p className="text-xs text-gray-400 dark:text-gray-500 md:hidden">
                            {t.pricingUI.swipeInstruction}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 hidden md:block">
                            {t.pricingUI.navigationInstruction}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default PricingCarousel;
