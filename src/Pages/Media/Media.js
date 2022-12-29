import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { AuthContext } from '../../Context/AuthProvider';
import Review from '../Shared/Modal/Review';
import moment from 'moment';


const Media = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/allPosts`;
    const { data: post = [], refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }

    });

    const { data: comments = [] } = useQuery({

        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allcomments')
            const data = await res.json();
            // console.log(comments)
            return data;
        }

    })

    return (
        <div>
            {
                post && post?.map((post, i) => <div key={i}>
                    <Card maxW='xl'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src={post?.photoURL} />

                                    <Box>
                                        <Heading size='sm'>{post?.displayName}</Heading>
                                        <Text>{moment().format('LL')} ({moment().format('LT')})</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                // icon={<BsThreeDotsVertical />}
                                />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                {post?.massage}
                            </Text>
                        </CardBody>
                        <Image
                            objectFit='cover'
                            src={post?.image}
                            alt='Chakra UI'
                        />

                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                                '& > button': {
                                    minW: '136px',
                                },
                            }}
                        >
                            <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                                Like
                            </Button>
                            <Button alignItems={'center'} flex='1' variant='ghost' leftIcon={<BiChat />}>




                                <label className=' cursor-pointer flex items-center' htmlFor="my-modal-3">Comment</label>

                                {<Review />}

                            </Button>
                            <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                                Share
                            </Button>
                            <>
                                {
                                    comments?.map((comment, i) => <p key={i}>{comment?.message}</p>)
                                }
                            </>
                        </CardFooter>

                    </Card>
                </div>)
            }
        </div>
    );
};

export default Media;