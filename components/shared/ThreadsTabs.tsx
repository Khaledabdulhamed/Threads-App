import { fetchUserPosts } from '@/lib/actions/user.actions';
import React from 'react'
import ThreadCard from '../cards/ThreadCard';
import { fetchCommunityPosts } from '@/lib/actions/community.actions';
import { redirect } from 'next/navigation';
interface Props {
  currentUserId: string;
  accountType: string;
  accountId: string;
}
const ThreadsTabs = async ({currentUserId,
   accountId, accountType}: Props) => {
  let result: any;

  if(accountType ==='Community'){

    let result = await fetchCommunityPosts(accountId);

  } else{
    let result = await fetchUserPosts(accountId);

  }


  if(!result) redirect('/')

  return (
    <section className='mt-0 flex flex-col gap-10'>
      {result.threads.map((thread: any) => (
        <ThreadCard 
        key = {thread._id}
        id= {thread._id}
        currentUserId={currentUserId}
        parentId = {thread.parentId}
        content={thread.text}
        author={accountType === 'User' ? {name: result.name, image: result.image, id: result.id} : {name: thread.author.name, image: thread.author.image, id: thread.author.id} } //todo
        community={thread.community} //todo
        createdAt = {thread.createdAt}
        comments={thread.children}
        />
      ))}
    </section>
  )
}

export default ThreadsTabs