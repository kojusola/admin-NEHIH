import React from 'react';

const Sidebar = ({setPageBar, pageBar}) => {
    const contentSidebar = (pageBar) =>{
        switch (pageBar) {
            case 'home':
                // <Redirect to='/admin'/>
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'drafts' :
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'create':
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'testimonial':
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'newsletter':
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'applications':
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4 ">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4 ">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('logout')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            case 'manage':
                return(<div className="w-56 overflow-y-auto flex h-screen flex-col bg-gray-800 font text-gray-400 pt-4 py-4">
                <a href="/admin">
                    <button onClick={() => {setPageBar('home')}} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="h-6 w-6 stroke-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                        <p className="ml-2">Published Articles</p>
                    </button>
                </a>
                <a href="/admin/draft-article">
                    <button onClick={() => setPageBar('drafts')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        <p className="ml-2">Drafts</p>
                    </button>
                </a>
                <a href="/admin/create-article">
                    <button onClick={() => setPageBar('create')}  className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg   className="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>
                        <p className="ml-2">Create Article</p>
                    </button>
                </a>
                <a href="/admin/testimonial">
                    <button onClick={() => setPageBar('testimonials')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <p className="ml-2">Testimonials</p>
                    </button>
                </a>
                <a href="/admin/emails">
                    <button onClick={() => setPageBar('newsletter')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <p className="ml-2">Newsletter Emails</p>
                    </button>
                </a>
                <a href="/admin/applications">
                    <button onClick={() => setPageBar('applications')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p className="ml-2">Applications</p>
                    </button>
                </a>
                <a href="/admin/user-management">
                    <button onClick={() => setPageBar('manage')} className="flex py-2 hover:bg-gray-900 w-full px-4 bg-gray-900">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        <p className="ml-2">Manage Admin</p>
                    </button>
                </a>
                <a href="/">
                    <button onClick={() => localStorage.removeItem('accessToken')} className="flex py-2 hover:bg-gray-900 w-full px-4">
                        <svg className="stroke-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/>
                        </svg>
                        <p className="ml-2">Log out</p>
                    </button>
                </a>
            </div>
                );
            default:
                 return;
        }
    }

    return ( 
        <div>
            {contentSidebar(pageBar)}
        </div>
     );
}
 
export default Sidebar;