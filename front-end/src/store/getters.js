const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  team_info: state => state.slack.team_info,
  channel_list: state => state.slack.channel_list,
  menu_items: state => state.app.menu_items,
  selected_info: state => state.slack.selected_info
}
export default getters
