import Navbar from "@/components/module/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useAddBorrowBookMutation } from "@/redux/libraryApi";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const BorrowBook = () => {
  const form = useForm();
  const navigate = useNavigate();
  const { bookId } = useParams();
  //   const bookId = rawBookId?.replace(/[^\w]/g, "");
  console.log(bookId);

  const [addBorrowBook, { data }] = useAddBorrowBookMutation();
  console.log(data);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      ...data,
      book: bookId,
    };

    try {
      const res = await addBorrowBook(bookData).unwrap();
      console.log(res);
      toast.success("Book Borrowed Successfully!");
      navigate("/borrow-summary");
      console.log("From Response => ", res);
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try Again!!");
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Borrow Books
        </h1>
        <Form {...form}>
          <form
            className="max-w-lg mx-auto space-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter the quantity number"
                      value={field.value || ""}
                    ></Input>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* dueDate */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <Button>Borrow</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BorrowBook;
