import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from '../atoms/authAtoms';
import { useAtom } from "jotai";

function Dashboard() {
  const navigate = useNavigate();
  const [user,] = useAtom(userAtom);

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard