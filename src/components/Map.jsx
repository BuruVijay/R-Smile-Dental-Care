import { useState, useEffect, useRef } from 'react';

export default function Map() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          // Small delay to prevent immediate loading
          setTimeout(() => {
            setIsVisible(true);
            setIsLoading(false);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="w-full h-[400px] my-10">
      {isLoading && (
        <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}
      {isVisible && (
        <iframe
          title="R-Smile Dental Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.583756983225!2d-75.0779571846264!3d39.74225957945264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d4fe91cfd9b3%3A0xb9c75efcb61bb54!2sR-Smile%20Dental%20Care!5e0!3m2!1sen!2sin!4v1719933933872!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border-2 border-blue-400 shadow-lg"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}