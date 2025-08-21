import { h } from "../../jsx-runtime";

export class ExperienceSection {
  static build = (): HTMLElement => {
    return (
      <div className='w-full flex flex-col justify-center items-start container-padding section-padding'>
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-responsive-xl font-light tracking-wide text-gradient pb-4 mb-2">
            <i className='material-icons large with-text'>work_history</i>
            Industry Experience
          </h2>
        </div>

        {/* Experience Cards Container */}
        <div className="w-[70%] space-y-6">

          {/* Software Engineer */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  Software Engineer
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  Simply Compete Inc.
                </p>
                <p className="text-dark-300 text-sm">
                  Over 3 years of experience delivering enterprise-grade software solutions in the sports domain, including designing scalable microservices, developing end-to-end features, and optimizing data management. Experienced in building robust APIs, enhancing system performance, and contributing to both backend and frontend development. Adept at working in agile, fast-paced environments and managing full development and deployment lifecycles.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="badge-success font-mono text-s">
                  July 2022 - Present
                </span>
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Software Development Intern */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  Software Development Intern
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  Simply Compete Inc.
                </p>
                <p className="text-dark-300 text-sm">
                  Created and executed unit tests for test-driven, server-side, production-grade applications. Rebuilt the company’s static website from the ground up, improving loading speed by approximately 300%. Built native web components for an in-house UI library to streamline development workflows. Gained comprehensive expertise in full-stack web development while working in a fast-paced, agile startup environment.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="badge-warning font-mono text-xs">
                  Jan 2022 - July 2022
                </span>
              </div>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* React Developer */}
          <div className="card-glass card-hover group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  React Developer
                </h3>
                <p className="text-accent-400 font-medium mb-1">
                  Studustry
                </p>
                <p className="text-dark-300 text-sm">
                  
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="px-3 py-1 bg-dark-700 text-dark-300 text-xs rounded-full border border-dark-600 font-mono">
                  Jun 2021 - Sep 2021 
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