import {
	HiFolderOpen,
	HiCollection,
	HiOutlineShoppingCart,
	HiOutlineCloudUpload,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'library',
		label: 'Library',
		path: '/library',
		icon: <HiCollection />
	},
	{
		key: 'bookstore',
		label: 'Bookstore',
		path: '/books-store',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'mybooks',
		label: 'My Books',
		path: '/my-books',
		icon: <HiFolderOpen />
	},
	{
		key: 'submit',
		label: 'New Publish',
		path: '/submit-book',
		icon: <HiOutlineCloudUpload />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
