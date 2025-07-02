import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Navbar from "@/components/module/Navbar";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetBookQuery, useUpdateBookMutation } from "@/redux/libraryApi";
import LoadingSpinner from "@/components/module/LoadingSpinner";
import { useParams } from "react-router";

const UpdateBook = () => {
  const { id } = useParams();
  console.log(id);

  const form = useForm();
    const { data: singleBookData, isLoading } = useGetBookQuery(id);
    console.log(singleBookData);

  const [updateBook, { data }] = useUpdateBookMutation();
  console.log("Data from update", data);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData = {
      bookId: id,
      ...data,
      available: true,
    };

    const res = await updateBook(bookData).unwrap();
    console.log("From Update Response:", res);
    form.reset();
  };

    if(isLoading) {
      return <LoadingSpinner></LoadingSpinner>
    }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Update Book
          </h1>
          <Form {...form}>
            <form
              className="max-w-lg mx-auto space-y-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={`${singleBookData.data.title}`}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* author */}
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={`${singleBookData.data.author}`}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* genre */}
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a genre to set" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* isbn */}
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={`${singleBookData.data.isbn}`}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ""}></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* copies */}
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder={`${singleBookData.data.copies}`}
                        value={field.value || ""}
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Update</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
