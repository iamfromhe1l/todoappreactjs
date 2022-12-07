import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Layout from './components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './providers/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Layout>
		</QueryClientProvider>
	</React.StrictMode>
)
