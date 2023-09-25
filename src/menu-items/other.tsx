// assets
import { ChromeOutlined, QuestionOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// paths
import { PATH_DASHBOARD } from 'routes/paths';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'other',
  title: 'others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'sample-page',
      type: 'item',
      url: PATH_DASHBOARD.root,
      icon: icons.ChromeOutlined,
    },
    {
      id: 'documentation',
      title: 'documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'secondary',
        size: 'small',
      },
    },
    {
      id: 'roadmap',
      title: 'roadmap',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/roadmap',
      icon: icons.DeploymentUnitOutlined,
      external: true,
      target: true,
    },
  ],
};

export default other;
