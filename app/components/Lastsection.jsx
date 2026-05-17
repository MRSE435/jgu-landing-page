"use client"
import { useEffect, useRef } from 'react'

const CTA = () => {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('opacity-100', 'translate-y-0')
                    ref.current.classList.remove('opacity-0', 'translate-y-8')
                }
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="bg-[#0d2137] py-24 px-6 text-center">
            <div
                ref={ref}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-2xl mx-auto"
            >
                <h2 className="text-white text-4xl font-bold mb-4">
                    Ready to shape your future?
                </h2>
                <p className="text-white/70 text-base mb-10">
                    Applications are open for the 2026–27 academic year. Limited seats available.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-white text-[#0d2137] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                        Apply now
                    </button>
                    <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
                        Download brochure
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA