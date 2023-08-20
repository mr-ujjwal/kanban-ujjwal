"use client";

import { types, Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import Task from "./Task";
import AddTask from "./AddTask";

import { useStore } from "@/stores/StoreProvider";
import { TaskModel } from "@/stores/TaskStore";

const TaskList = observer(() => {
  const { taskStore } = useStore();

  let filteredTasksp: any;
  let filteredTasksi: any;
  let filteredTasksc: any;

  
  filteredTasksp = taskStore.tasks.filter((task) => task.status === "pending");
  filteredTasksi = taskStore.tasks.filter((task) => task.status === "in_progress");
  filteredTasksc = taskStore.tasks.filter((task) => task.status === "completed");
 

  return (
    <div className="">
      
      <div className="flex gap-3 px-5 py-5 max-h-[600px] overflow-auto">
       <div className="border px-5 py-5">
        <h3 className="text-center py-3">Planned</h3>
        
        {filteredTasksp.map((task: any) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            startDate={task.startDate}
            description={task.description}
            status={task.status}
            users={task.users}
          />
        ))}
         <div className="text-center py-3"><AddTask /></div>
        </div>
        <div className="border px-5 py-5">
        <h3 className="text-center py-3">Started</h3>
         {filteredTasksi.map((task: any) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            startDate={task.startDate}
            description={task.description}
            status={task.status}
            users={task.users}
          />
        ))}
        <div className="text-center py-3"><AddTask /></div>
        </div>
        <div className="border px-5 py-5">
        <h3 className="text-center py-3">Done</h3>
         {filteredTasksc.map((task: any) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            startDate={task.startDate}
            description={task.description}
            status={task.status}
            users={task.users}
          />
        ))}
         <div className="text-center py-3"><AddTask /></div>
        </div>
      </div>
    </div>
  );
});

export default TaskList;
