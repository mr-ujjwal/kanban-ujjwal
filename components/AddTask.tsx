"use client";

import { SetStateAction, useState } from "react"
import { observer } from "mobx-react-lite"
import { Button } from "./ui/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog"
import { Label } from "./ui/Label"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useStore } from "@/stores/StoreProvider"

const AddTask = observer(() => {
  const { taskStore } = useStore();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>();
  const [users, setUsers] = useState<string>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [error, setError] = useState<string>();

  const handleNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 3) {
      setError("Please enter a title with at least 3 characters");
    } else if (description.length < 3) {
      setError("Please enter a description with at least 3 characters");
    } else if (!status) {
      setError("Please select a status for the task");
    } else if (!users) {
      setError("Please select a user for the task");
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        description,
        status,
        startDate,
        users,
      };

      taskStore.addTask(newTask);
      // Reset the input values
      setTitle("");
      //setStartDate(date)
      setDescription("");
      setStatus("");
      setUsers("");
      setError("");
      setOpen(!open);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button variant="default">Add New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Add Task</DialogTitle>
          <DialogDescription>
            Add a new Task to your Task Manager here. Click save when you are
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleNewTask}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="name"
                className="text-left"
              >
                Title
              </Label>
              <Input
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
            <Label
                htmlFor="date"
                className="text-left"
              >
                Due Date
              </Label>
            <DatePicker id="datepicker"
                className="col-span-3 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                showIcon
                selected={startDate} 
                onChange={(date: Date) => setStartDate(date)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="description"
                className="text-left"
              >
                Description
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="status"
                className="text-left"
              >
                Status
              </Label>
              <Select
                value={status}
                onValueChange={setStatus}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Task Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Planned</SelectItem>
                  <SelectItem value="in_progress">Started</SelectItem>
                  <SelectItem value="completed">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label
                htmlFor="users"
                className="text-left"
              >
               Assign User
              </Label>
              <Select
                value={users}
                onValueChange={setUsers}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Assign Users" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="User A">User A</SelectItem>
                  <SelectItem value="User B">User B</SelectItem>
                  <SelectItem value="User C">User C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && (
              <p className="text-center py-1 rounded bg-error-background text-error-foreground">
                {error}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">Save Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export default AddTask;
