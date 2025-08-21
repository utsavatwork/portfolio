import { h } from "../jsx-runtime";
import { Canvas } from "./canvas";

export class MiniMap {
  private static container: HTMLElement = <div></div>;
  private isOpen = false;
  private activeSection = { row: 1, col: 1 };

  private handleToggle = (): void => {
    this.isOpen = !this.isOpen;
    this.build();
  };

  private handleCellClick = (row: number, col: number) => (): void => {
    this.activeSection = { row, col };
    window?.scrollTo({
      top: this.activeSection.row * window.innerHeight,
      left: this.activeSection.col * window.innerWidth,
      behavior: "smooth",
    });
    this.build();
  };

  private getButton(): HTMLElement {
    return (
      <button 
        className="w-28 h-28 bg-accent-300 border-white border-2 flex items-center justify-center shadow-lg border-none cursor-pointer rounded-xl transition-transform hover:scale-105"
        onClick={this.handleToggle}
      >
        <i className="material-icons text-5xl text-dark-900">navigation</i>
      </button>
    );
  }

  private getContainer(): HTMLElement {
    return (
      <div className="w-[25vw] h-[25vh] bg-dark-700 fixed bottom-[3vh] right-[2vw] rounded-2xl overflow-hidden backdrop-blur-sm">
        <button 
          className="absolute top-2 right-2 w-6 h-6 border-none cursor-pointer text-gray-800 bg-dark-200 rounded-full flex items-center justify-center z-10 hover:bg-dark-50 transition-colors"
          onClick={this.handleToggle}
        >
          <i className="material-icons text-base">close</i>
        </button>
        
        <div className="grid grid-cols-3 grid-rows-3 w-full rounded-2xl h-full relative">
          {[0, 1, 2].map(row =>
            [0, 1, 2].map(col => (
              <div
                className={`cursor-pointer rounded-2xl hover:border-accent-300 hover:bg-accent-300 hover:opacity-15 ${
                  this.activeSection.row === row && this.activeSection.col === col 
                    ? 'border border-dark-700 after:content-["o"] after:relative after:block after:top-[1%] after:left-[90%]' 
                    : ''
                }`}
                data-row={row}
                data-col={col}
                onClick={this.handleCellClick(row, col)}
              />
            ))
          )}
        </div>
          
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
          style={{ 
            transform: 'scale(0.0833)', 
            transformOrigin: 'top left' 
          }}
          id="mini-canvas"
        >
          {Canvas.build()}
        </div>
      </div>
    );
  }

  public build(): HTMLElement {
    MiniMap.container.innerHTML = '';
    MiniMap.container.appendChild(<div className="fixed bottom-6 right-6 z-[5000]">
      {this.isOpen ? this.getContainer() : this.getButton()}
    </div> as HTMLElement);
    return MiniMap.container;
  }
}