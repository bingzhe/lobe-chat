import { ActionIconGroup } from '@lobehub/ui';
import { memo } from 'react';

import { RenderAction } from '../components/ChatList';
import { useChatListActionsBar } from '../hooks/useChatListActionsBar';
import { useCustomActions } from './customAction';

export const UserActionsBar: RenderAction = memo(({ text, onActionClick }) => {
  const { regenerate, edit, copy, divider, del } = useChatListActionsBar(text);
  const { translate, tts } = useCustomActions();

  return (
    <ActionIconGroup
      dropdownMenu={[edit, copy, regenerate, divider, tts, translate, divider, del]}
      items={[regenerate, edit]}
      onActionClick={onActionClick}
      type="ghost"
    />
  );
});
