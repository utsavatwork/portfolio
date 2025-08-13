import { h } from "../../jsx-runtime";

export class ProjectsSection {
  static render = (): HTMLElement => {
    return (
      <div className='w-screen flex flex-col justify-start items-start'>
        <div className="mb-8">
          <h2 className="text-responsive-xl font-light tracking-wide text-gradient pb-4 mb-2">
            <i className='material-icons large with-text'>code</i>
            Personal Projects
          </h2>
        </div>

        <div className='mb-8'>
          <div>AudioLens</div>
          <div>Leetcode Curriculum</div>
        </div>
      </div>
    );
  }
}