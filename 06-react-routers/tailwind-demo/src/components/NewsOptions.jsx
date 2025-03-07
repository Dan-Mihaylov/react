import { Link, Route } from 'react-router';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

export default function NewsOptions() {

	const [selected, setSelected] = useState('News Options and Filters');



	return (
		<Menu as="div" className="relative inline-block text-left mt-10">
			<div>
				<MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
					{selected}
					<ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
				</MenuButton>
			</div>
			<MenuItems
				transition
				className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
			>
				<div className="py-1">
					<MenuItem onClick={() => { setSelected('News Options and Filters') }}>
						<Link
							to=""
							className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
						>
							Show All News
						</Link>
					</MenuItem>
					<MenuItem onClick={() => { setSelected('With Authors Only') }}>
						<Link
							to="?filter=withAuthors"
							className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
						>
							With Authors Only
						</Link>
					</MenuItem>
					<MenuItem onClick={() => {setSelected('Anonymous Authors')}}>
						<Link
							to="?filter=withoutAuthors"
							className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
						>
							Anonymous Authors
						</Link>
					</MenuItem>
					<MenuItem>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
						>
							License
						</a>
					</MenuItem>
					<form action="#" method="POST">
						<MenuItem>
							<button
								type="submit"
								className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
							>
								Sign out
							</button>
						</MenuItem>
					</form>
				</div>
			</MenuItems>
		</Menu>
	)
}