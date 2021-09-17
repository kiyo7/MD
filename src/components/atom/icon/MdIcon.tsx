import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

export const MdIcon: React.FC = () => {
  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

  return (
    <div>
      <FontAwesomeIcon style={iconStyle} icon={faMarkdown}></FontAwesomeIcon>
    </div>
  );
};
