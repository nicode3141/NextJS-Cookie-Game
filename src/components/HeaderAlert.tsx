import React from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


interface HeaderAlertProps extends VariantProps<typeof alertVariants>{
    children: React.ReactNode;
}

const alertVariants = cva(
    "",
    {
        variants: {
            variant:{
                default: "bg-[#cce5ff]",
                success: "bg-[#d4edda]",
                error: "bg-[#f8d7da]"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const HeaderAlert: React.FC<HeaderAlertProps> = ({ children, variant}) => {
    return(
        <div className={cn(alertVariants({ variant })) + " text-black font-medium text-center rounded-lg rounded-t-none px-4 py-4 absolute w-screen"} role="alert">
            {children}
        </div>
    )
}

export default HeaderAlert;
