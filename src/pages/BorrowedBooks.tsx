import LoadingSpinner from "@/components/module/LoadingSpinner";
import Navbar from "@/components/module/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBorrowedBooksSummaryQuery } from "@/redux/libraryApi";
import type { BorrowedBooksProps } from "@/type";

const BorrowedBooks = () => {
  const { data, isLoading } = useBorrowedBooksSummaryQuery([]);
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <h1 className="text-center my-3 text-4xl font-bold">
          Borrowed Books Summary
        </h1>
        <Table>
          <TableCaption>A list of your current Adventure</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">ISBN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isLoading &&
              data.data.map((book: BorrowedBooksProps) => (
                <TableRow key={book?.book?.isbn}>
                  <TableCell className="font-medium">
                    {book?.book?.title}
                  </TableCell>
                  <TableCell>{book.totalQuantity}</TableCell>
                  <TableCell className="text-right">
                    {book?.book?.isbn}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowedBooks;
