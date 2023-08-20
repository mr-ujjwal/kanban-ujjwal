import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/Dialog";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useStore } from "@/stores/StoreProvider";

interface EditTaskProps {
  id: string;
  title: string;
  startDate:Date;
  description: string;
  status: string;
  users: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EditTask = ({
  id,
  title,
  startDate,
  description,
  status,
  users,
  open,
  setOpen,
}: EditTaskProps) => {
  const { taskStore } = useStore();
  const router = useRouter();
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [newStatus, setNewStatus] = useState<string>(status);
  const [newUsers, setNewUsers] = useState<string>(users);
  //const [newstartDate, setStartDate] = useState(startDate);
  const [newstartDate, setStartDate] = useState<Date>(new Date());
  const [error, setError] = useState<string>();

  const handleEditedTask = (e: any) => {
    e.preventDefault();

    if (newTitle.length < 3) {
      setError("Please enter a title with at least 3 characters");
    } else if (newDescription.length < 3) {
      setError("Please enter a description with at least 3 characters");
    } else if (!newStatus) {
      setError("Please select a status for the task");
    }  else if (!newUsers) {
      setError("Please select a user for the task");
    } else {
      const editedTask = {
        title: newTitle,
        startDate:newstartDate,
        description: newDescription,
        status: newStatus,
        users: newUsers,
      };

      taskStore.editTask(id, editedTask);

      // Reset the input values
      setNewTitle("");
      setNewDescription("");
      setNewStatus("");
      setNewUsers("");
      setError("");
      setOpen(!open);
      router.refresh();
    }
  };

  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-xl">Edit Task</DialogTitle>
        <DialogDescription>
          Edit or Update Your Task here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleEditedTask}>
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
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
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
                
                selected={newstartDate} 
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
              rows={5}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Description"
              className="col-span-3"
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
              value={newStatus}
              onValueChange={setNewStatus}
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
              value={newUsers}
              onValueChange={setNewUsers}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Assign Users" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="User A">UserA</SelectItem>
                <SelectItem value="User B">UserB</SelectItem>
                <SelectItem value="User C">UserC</SelectItem>
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
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default EditTask;
