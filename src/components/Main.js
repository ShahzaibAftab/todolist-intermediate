import React from 'react'
import { Text, Center, Input, Box, Button, Checkbox } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'


const Main = () => {
    return (
        <>
            <section>
                <Center>
                    <Text className='textShadow' color='white' fontWeight='bold' fontSize='3xl' mt='10'> Todolist</Text>
                </Center>
                <Center>
                    <Text className='textShadow' color='white' fontWeight='bold' fontSize='lg' mt='2'> 😎Add - Edit😁 - Delete😜</Text>
                </Center>
                <Box textAlign='center' mt='10'>
                    <Input placeholder='Type here...' size='lg' w='30%' color='white' _placeholder={{ color: 'white' }} />
                    <Button ml={1} colorScheme='teal' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        Add
                    </Button>
                </Box>

                <Box
                    className='textShadow' mx='auto' bg='teal' w='35%' height='50px' borderRadius='10px' p='10px' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', marginTop: '30px', display: 'flex' }}
                >
                    <Checkbox size='lg' colorScheme='orange' className='textShadow' color='white' fontWeight='bold' fontSize='xl'>This is your Notepad 1</Checkbox>
                    <div style={{ position: 'absolute', right: '35%' }}>  <EditIcon color='white' className='icon' /> <DeleteIcon className='icon' color='white' mx='5px' /></div>
                </Box>

                <Box textAlign='center' mt='10'>
                    <Button ml={1} colorScheme='red' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        Delete All
                    </Button>
                </Box>
            </section>
        </>
    )
}

export default Main
