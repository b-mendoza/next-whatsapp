import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ForumIcon from '@material-ui/icons/ForumRounded';
import MoreVertIcon from '@material-ui/icons/MoreVertRounded';
import SearchIcon from '@material-ui/icons/SearchRounded';
import SignalCellularNull from '@material-ui/icons/SignalCellularNullRounded';
import validator from 'validator';

import {
  Avatar,
  Container,
  Header,
  IconsContainer,
  Search,
  SearchInput,
  SidebarButton,
} from './Sidebar.styles';

const useStyles = makeStyles({
  root: { fontSize: 'inherit' },
});

function Sidebar() {
  const classNames = useStyles();

  const handleCreateNewChat = () => {
    // TODO: Remove prompt to add a Modal

    const input = prompt(
      'Please enter an Email Address for the user you want to chat with',
    );

    // if (!input) return null

    if (input && validator.isEmail(input)) {
      // This is where we need to add the chat into the "chats" collection
    }
  };

  return (
    <Container>
      <Header>
        <Avatar />

        <IconsContainer>
          <IconButton classes={{ root: classNames.root }}>
            <ForumIcon fontSize="inherit" />
          </IconButton>

          <IconButton classes={{ root: classNames.root }}>
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search or start a new chat" />
      </Search>

      <SidebarButton onClick={handleCreateNewChat}>
        Start a New Chat
      </SidebarButton>

      {/* Chat List */}
    </Container>
  );
}

export default Sidebar;
