import React from 'react'
import { Box, Input, Heading } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
const scales = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
}

const Default: React.FC = () => {
  return (
    <Box>
      {Object.keys(scales).map((key) => (
        <>
          <Heading mb="16px">{key}</Heading>
          <Box
            sx={{
              '& bn-input': {
                mb: '14px',
              },
            }}
          >
            <Input type="text" scale={scales[key]} value="Value" />
            <Input type="text" scale={scales[key]} placeholder="Placeholder..." />
            <Input type="text" scale={scales[key]} value="Disabled" disabled />
            <Input type="text" scale={scales[key]} value="Success" isSuccess />
            <Input type="text" scale={scales[key]} value="Warning" isWarning />
          </Box>
        </>
      ))}
    </Box>
  )
}
export default function Page() {
  return (
    <Provider>
      <Box p="16px" width="320px">
        <Default />
      </Box>
    </Provider>
  )
}
