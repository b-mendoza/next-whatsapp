import {
  Avatar as MaterialUIAvatar,
  Button as MaterialUIButton,
} from '@material-ui/core'
import styled from '@emotion/styled'

import { fontReset, paddingContainer } from '@/shared/styles'

export const Container = styled.section`
  ${paddingContainer}
`

export const Header = styled.header`
  background-color: #fff;

  border-bottom: 0.1rem solid whitesmoke;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding-bottom: 1rem;

  position: sticky;

  top: 0;

  z-index: 1;
`

export const Avatar = styled(MaterialUIAvatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const IconsContainer = styled.div``

export const Search = styled.div`
  ${paddingContainer}

  border-radius: 0.2rem;

  display: flex;

  align-items: center;

  padding: 0.5rem;
`

export const SearchInput = styled.input`
  border: none;

  outline: none;

  flex: 1;
`

export const SidebarButton = styled(MaterialUIButton)`
  width: 100%;

  && {
    ${fontReset}

    border-bottom: 0.1rem solid whitesmoke;
    border-top: 0.1rem solid whitesmoke;
    border-radius: 0;
  }
`
