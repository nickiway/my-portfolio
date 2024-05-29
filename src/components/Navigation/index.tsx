import type { NavigationProps } from 'components/Navigation/interface';
import type { NavigationItemProps } from 'components/Navigation/NavigationItem/interface';

import { Space } from 'antd';
import { NavigationItem } from './NavigationItem';

export const Navigation = ({ itemsList }: NavigationProps) => {
  return (
    <Space size={'middle'}>
      {itemsList.map((itemsList: NavigationItemProps) => (
        <NavigationItem {...itemsList} key={itemsList.uid} />
      ))}
    </Space>
  );
};
