import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useGetBookQuery } from "@/redux/libraryApi";
import type { BookDetailsModalProps } from "@/type";
import LoadingSpinner from "./LoadingSpinner";

const BookDetailsModal = ({bookId}: BookDetailsModalProps) => {
    const {data, isLoading} = useGetBookQuery(bookId);
    // console.log(data);

    if(isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Title: {data?.data?.title}</DialogTitle>
              <DialogDescription>
                Description: {data.data.description}
              </DialogDescription>
              <DialogDescription>
                ISBN: {data.data.isbn}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Author Name: {data.data.author}</Label>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Genre: {data.data.genre}</Label>
                <Label htmlFor="username-1">Copies: {data.data.copies}</Label>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default BookDetailsModal;
