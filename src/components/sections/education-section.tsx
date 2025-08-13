import { h } from "../../jsx-runtime";

export class EducationSection {
  static render = (): HTMLElement => {
    return (
      <div className='w-full flex flex-col justify-center items-start container-padding section-padding'>
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-responsive-xl font-light tracking-wide text-gradient pb-4 mb-2">
            <i className='material-icons large with-text'>school</i>
            Education
          </h2>
        </div>

        {/* Education Cards Container */}
        <div className="w-[70%] space-y-6">

          {/* B.Tech Card */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  Information Technology
                </p>
                <p className="text-dark-300 text-sm">
                  Vishwakarma Institute of Technology, Pune
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="badge-success font-mono text-s">
                  2018 - 2022
                </span>
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* HSC Card */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  Science (PCM)
                </p>
                <p className="text-dark-300 text-sm">
                  Kulbhushan Junior College, Chh. Sambhajinagar
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="badge-warning font-mono text-xs">
                  2015 - 2017
                </span>
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* SSC Card */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  N.A.
                </p>
                <p className="text-dark-300 text-sm">
                  Saraswati Bhuvan Prashala, Chh. Sambhajinagar
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="px-3 py-1 bg-dark-700 text-dark-300 text-xs rounded-full border border-dark-600 font-mono">
                  2014 - 2015
                </span>
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    );
  };
}