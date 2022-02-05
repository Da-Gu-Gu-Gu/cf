import React from 'react';
import { Tab,TabList,TabPanels,Tabs,TabPanel } from '@chakra-ui/react';
import {AiFillHeart} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import CrusList from './CrusList'
import FriendLists from './FriendLists'



const TabMenu = () => {

  return (
    <Tabs variant='unstyled' align='start' isFitted className='tabmenu' >
    <TabList mb={3} >
      <Tab   _selected={{ color: 'white', bg: '#ff0a54' }}><AiFillHeart/></Tab>
      <Tab _selected={{ color: 'white', bg: '#ff0a54' }}><FaUserFriends/></Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <CrusList  />
        
      </TabPanel>
      <TabPanel>
     
      <FriendLists/>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
};

export default TabMenu;
