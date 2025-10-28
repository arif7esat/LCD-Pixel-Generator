import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#2A3639] group-[.toaster]:text-[#EFEFEF] group-[.toaster]:border-[#3A4A4D] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#EFEFEF]",
          actionButton:
            "group-[.toast]:bg-[#F47E52] group-[.toast]:text-[#EFEFEF]",
          cancelButton:
            "group-[.toast]:bg-[#3A4A4D] group-[.toast]:text-[#EFEFEF]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
