import * as HeroIcons from "@heroicons/react/24/outline";

export interface DynamicIconProps {
  icon: string;
}

export const DynamicIcon = (props: DynamicIconProps) => {
  const { icon } = props;
  const Icon: JSX.Element = HeroIcons[icon];

  return <Icon className="text-inherit h-6" />;
};
