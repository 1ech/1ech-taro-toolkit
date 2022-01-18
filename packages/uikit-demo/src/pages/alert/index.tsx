import React from 'react'
import {
  styled,
  ThemeProvider,
  Box,
  Alert,
  Text,
} from '@pancake-taro-toolkit/uikit'
import noop from 'lodash/noop'

const Row = styled(Box)({
  sx: {
    marginBottom: '32px',
  },
})
const Default: React.FC = () => {
  return (
    <Box style={{ padding: '32px', width: '400px' }}>
      <Row>
        <Alert title="Info">
          <Text>This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Success" variant="success">
          <Text>This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Warning" variant="warning">
          <Text>This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Danger" variant="danger">
          <Text>This is a description</Text>
        </Alert>
      </Row>
    </Box>
  )
}
const handleClick = noop
const WithHandler: React.FC = () => {
  return (
    <Box style={{ padding: '32px', width: '400px' }}>
      <Row>
        <Alert onClick={handleClick} title="Info" />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success" variant="success">
          A description of the success alert
        </Alert>
      </Row>
      <Row>
        <Alert
          onClick={handleClick}
          title="Danger A Long Title"
          variant="danger"
        />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Warning" variant="warning" />
      </Row>
    </Box>
  )
}
export default function Page() {
  return (
    <ThemeProvider>
      <Default />
      <WithHandler />
    </ThemeProvider>
  )
}