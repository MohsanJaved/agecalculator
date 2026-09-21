import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PageHero({
  title,
  description,
  badge = 'Precision Calculator',
  badgeIcon: BadgeIcon = Sparkles,
  category = 'Calculators',
  categoryLink = '/',
  currentPage,
  features = ['100% Free & Private', 'Instant Calculation', 'Leap Year Adjusted'],
  actions
}) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e3effd] via-[#edf5fe] to-[#ffffff] pt-8 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200/60">
      
      {/* Background Decorative Ambient Glows & Dot Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#084d8c_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Curved Wave Arc Bottom Boundary */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-8 sm:h-12 text-[#f8fafc]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 Q600,100 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 relative z-10 text-center">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          <Link to="/" className="text-slate-600 hover:text-calcNavy hover:underline transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          {categoryLink ? (
            <Link to={categoryLink} className="text-slate-600 hover:text-calcNavy hover:underline transition-colors">
              {category}
            </Link>
          ) : (
            <span className="text-slate-600">{category}</span>
          )}
          {currentPage && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-calcNavy font-semibold truncate max-w-[200px] sm:max-w-xs">{currentPage}</span>
            </>
          )}
        </nav>

        {/* Badge Pill */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-calcNavy border border-blue-200/80 shadow-xs">
            <BadgeIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>{badge}</span>
          </div>
        </div>

        {/* H1 Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Subtitle / Description */}
        {description && (
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            {description}
          </p>
        )}

        {/* Feature Pills */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] sm:text-xs text-slate-600">
            {features.map((feat, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200/80 font-medium text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                {feat}
              </span>
            ))}
          </div>
        )}

        {/* Actions (e.g. Load Example Buttons) */}
        {actions && (
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            {actions}
          </div>
        )}

      </div>
    </section>
  );
}
