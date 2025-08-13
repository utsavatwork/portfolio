import { h } from "../jsx-runtime";
import { HomePage } from "./home-page";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";
import { ProjectsSection } from "./sections/projects-section";

export class Canvas {
  constructor() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    document.getElementById('container')?.scrollTo({
      top: viewportHeight,
      left: viewportWidth,
      behavior: "smooth",
    });
  }

  static render = (): HTMLDivElement => {
    const container = 
        <div className="relative w-[300vw] h-[300vh] overflow-hidden"></div> as HTMLDivElement;
    
    for (let i = 0; i < 9; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const gridItem = 
          <div className='absolute w-screen h-screen flex flex-col justify-center items-start' style={{top: `${row*100}vh`, left: `${col*100}vw`}}></div>;
      const key = `${row}-${col}`;
      switch (key) {
        case '1-1':
          gridItem.appendChild(HomePage.render());
          break;
        case '0-0':
          gridItem.appendChild(EducationSection.render());
          break;
        case '0-2':
          gridItem.appendChild(ExperienceSection.render());
          break;
        case '0-1':
          gridItem.appendChild(ProjectsSection.render());
          break;
        default:
          break;
      }
      container.appendChild(gridItem);
    }

    return container;
  }
}

