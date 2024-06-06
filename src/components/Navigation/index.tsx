import type { NavigationProps } from 'components/Navigation/interface';
import type { NavigationItemProps } from 'components/Navigation/NavigationItem/interface';

import { NavigationItem } from './NavigationItem';

export const Navigation = ({ itemsList, className }: NavigationProps) => {
  return (
    <div className={className}>
      {itemsList
        .map((itemsList: NavigationItemProps) => (
          <NavigationItem {...itemsList} key={itemsList.uid} />
        ))
        .reverse()}
    </div>
  );
};
