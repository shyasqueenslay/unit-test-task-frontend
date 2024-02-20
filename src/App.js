
import './App.css';
import MarkIcon from './Icons/MarkIcon';
import VirtualCard from "./Icons/VirtualCardIcon"
import VisaIcon from "./Icons/VisaIcon"

const Card = ({active}) => {

  const activeClass = active ? 'active' : 'inactive'
  const statusClass = 'card-status ' + activeClass
  return (
      <div className='card-wrapper'>
        <div className='card-info'>
          <VisaIcon/>
          <div className='card-creds'>
            <p className='cardholder-name'>Card Holder Name</p>
            <p className='card-number'>•••• 8156</p>
          </div>
        </div>
        <div className={statusClass}>
          {active ? 'Active' : 'Inactive'}
        </div>
      </div>
  )
}

const BulletPoint = ({text}) => {
  return (
    <div className='bullet-point-wrapper mt-15 mb-30'>
      <MarkIcon/>
      <p className='body-text ml-10'>{text}</p>
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <h3 className='h3-title'>New bank program</h3>
      <h1>Issuing New cards</h1>
      <p className='body-text mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <div className='header-with-icon-wrapper mb-10'>
        <VirtualCard />
        <p className='sub-title'>Virtual Cards</p>   
      </div>
      <Card active={true}/>
      <BulletPoint text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}/>
      <div className='header-with-icon-wrapper mb-10'>
        <VirtualCard />
        <p className='sub-title'>Virtual Cards</p>   
      </div>

      <Card active={false}/>
    </div>
  );
}

export default App;
