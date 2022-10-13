import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: React.ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 h-12 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: React.ReactNode;
}
function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-gray-400">{props.children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
