import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open onClose={() => console.log('cerrando')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem key={menuItem} button>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={menuItem} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem key={menuItem} button>
              <ListItemIcon>
                {index % 2 ? (
                  <InboxOutlinedIcon />
                ) : (
                  <MailOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={menuItem} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}