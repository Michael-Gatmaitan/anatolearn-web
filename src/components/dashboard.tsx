import { useEffect, useState } from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

import {
  NotebookText,
  Swords,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

interface IUser {
  name: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8000/api/users");
      const result = await response.json();

      setUsers(result);
    };

    getUsers();
  }, []);

  return (
    <div className="body-child-padding">
      <div className="bg-white rounded-xl p-2 lg:p-4 grid lg:grid-cols-3 gap-2 lg:gap-4">
        <Board
          Icon={NotebookText}
          title="Topics"
          description="7 body system included"
        />
        <Board
          Icon={UsersRound}
          title="AnatoLearners"
          description={`${users.length} total of users`}
        />

        <Board
          Icon={Swords}
          title="Unity"
          description="Built using Unity game engine ⚡"
        />
      </div>
    </div>
  );
};

const Board = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) => {
  return (
    <div className="bg-secondary rounded-md p-4 grow flex gap-2 items-center">
      <div>
        <Icon size={32} />
      </div>

      <div className="grid">
        <div className="text-xl font-bold font-poppins">{title}</div>
        <div className="opacity-80 font-poppins">{description}</div>
      </div>
    </div>
  );
};

export default Dashboard;
