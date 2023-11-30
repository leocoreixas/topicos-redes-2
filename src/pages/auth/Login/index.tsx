import BaseBtn from './../../../components/atoms/buttons/BaseBtn';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
   
      localStorage.setItem('auth', 'token');
      // localStorage.setItem('auth', data.token);
      navigate('/dashboard');
    
  };

  return (

    <div className="pt-2 sm:p-0 sm:justify-center sm:items-center sm:bg-gradient-to-r sm:from-primary-m sm:via-secondary-m sm:to-secondary-m sm:flex sm:flex-col sm:min-h-screen">
          <BaseBtn
            onClick={handleSubmit}
            className='w-full relative'
            color='secondary'
            variant='contained'
          >
            Entrar
          </BaseBtn>
    </div>
  );
};

export default Login; 