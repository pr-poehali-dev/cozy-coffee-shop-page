import { LucideIcon, LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const IconComponent = Icons[name] as LucideIcon;
  const FallbackComponent = Icons[fallback] as LucideIcon;

  if (!IconComponent) {
    return <FallbackComponent {...props} />;
  }

  return <IconComponent {...props} />;
};

export default Icon;
