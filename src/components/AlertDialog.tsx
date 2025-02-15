import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { signIn } from "next-auth/react"


interface AlertDialogWrapperProps {
    showAlert: boolean;
    setShowAlert: (value: boolean) => void;
}

const AlertDialogWrapper = ({showAlert, setShowAlert}: AlertDialogWrapperProps) => {
  return (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Please Log In to continue!</AlertDialogTitle>
            <AlertDialogDescription>
                You have to be logged in to continue.
                Please log in or sign up to access the content.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => signIn()}>Sign In</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    );
}
export default AlertDialogWrapper;