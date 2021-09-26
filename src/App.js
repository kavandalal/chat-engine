import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';

function App() {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height='100vh'
			projectID='b64dc341-8e5c-440c-bc49-dcfdb910c7f6'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;

//@ant-design/icons
//axios

//react-chat-engine
// https://chatengine.io/
