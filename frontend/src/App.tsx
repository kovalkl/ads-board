import { Outlet, useNavigate } from 'react-router';

export const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/form')}>FORM</button>
      <Outlet />
    </div>
  );
};
