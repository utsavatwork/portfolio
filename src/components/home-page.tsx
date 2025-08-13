import meImage from '../assets/images/me.jpg';
import { h } from '../jsx-runtime';

export class HomePage {
  static render = (): HTMLElement => {
    return <div className='flex flex-row gap-[4vw] justify-center items-center container-padding section-padding'>
      <div>
        <img className='w-[16vw] h-auto rounded-2xl' src={meImage}></img>
      </div>
      <div>
        <h1 className='text-7xl'>Utsav Tayde</h1>
        <p>
          <strong className='text-2xl'>Software Engineer</strong>
          <span className='block text-xl my-8'>
            <i className='material-icons large with-text'>location_on</i>
            Pune, India
          </span>
        </p>
      </div>
    </div> as HTMLElement;
  }
}