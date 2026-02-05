import { PropsWithChildren } from "react";
import { LucideIcon } from "lucide-react";

import { Heading } from "@/components/heading";
import { Badge } from "@/components/ui/badge";

type SectionHeaderProps = PropsWithChildren<{
  icon: LucideIcon;
  badge: string;
}>;

export const SectionHeader = ({
  icon: Icon,
  badge,
  children,
}: SectionHeaderProps) => {
  return (
    <>
      <Badge className="gap-2">
        <Icon className="size-5" />
        {badge}
      </Badge>
      <Heading>{children}</Heading>
    </>
  );
};
