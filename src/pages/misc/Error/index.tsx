// import { useNavigate } from 'react-router-dom';

// import DefaultBtn from '../../../components/atoms/buttons/DefaultBtn';

const Error = () => {
  // const navigate = useNavigate()

  return (
    <section className='pb-xhuge'>
      <div className='w-100 text-center'>
        <h2 className='mb-xsm heading-md'>Page Not Found 🕵🏻‍♀️</h2>
        <p className='mb-md body-lg'>Oops! 😖 The requested URL was not found on this server.</p>
        {/* <DefaultBtn onClick={() => navigate('/')}>Back to Home</DefaultBtn> */}
      </div>
    </section>
  )
}
export default Error
