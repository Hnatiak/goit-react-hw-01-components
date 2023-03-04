import Section from "./components/Section/Section";
import Description from './components/Profile/Description/Description';
import Statistics from './components/Statistics/Statistics';
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from './data/data.json';
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export function App() {
  return ( 
  <div>
      <Section title={"Task-1 'Social network profile'"}>
        <Description
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={"Task-2 'Statistics section'"}>
        <Statistics title="Statics" stats={data} />
      </Section>
      <Section title={"Task-3 'Friend list'"}>
        <FriendList friends={friends} />
      </Section>
      <Section title={"Task-3 'Transactions'"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div> 
    );
}
