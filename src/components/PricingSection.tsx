import '../styles/PricingSection.css'


export default function PricingSection() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight pricing-text sm:text-4xl">PRICE</h2>
                    <p className="mt-6 text-lg leading-8 pricing-text">Flexible pricing for your needs.</p>
                </div>

                {/*First block of pricing. full time job*/}

                <div
                    className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight pricing-text">Full-time job</h3>
                        <p className="mt-6 text-base leading-7 pricing-text">
                            Full skill set in your armory. Help your to improve your security and functionality
                            without performance restriction. Developing from scratch. Support already produced products.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s
                                included</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 pricing-text sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Developing new and support already produced products
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Security assessment and code review. Understandable feedback with potential consequences
                                for your business and team
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Suggestions for code and functionality improvements
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Highly developed soft skills allow to work as fully integrated team member even on
                                remote
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div
                            className="rounded-2xl card-form py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-white">A complete set of all skills to solve
                                    your problems
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">$3000</span>
                                    <span
                                        className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                                </p>
                                <a href="mailto:andriyroy3@gmail.com"
                                   className=" animate-pulse mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Contact me</a>
                                <p className="mt-6 text-xs leading-5 text-white">Private entrepreneur. Final price
                                    depend on project complexity, time and end goal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*second block. part-time job*/}

                <div
                    className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight pricing-text">Part-time job</h3>
                        <p className="mt-6 text-base leading-7 pricing-text">
                            Help you solve point tasks which are not include full-time relationships.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s
                                included</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 pricing-text sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Development or cyber security skills set
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                The same as in full-time job but in more limited scope
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Understandable and detailed feedback. With potential impact (optional)
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Open-minded and easy to communicate
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div
                            className="rounded-2xl card-form py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-white">Flexible option for limited task scope
                                    and budget</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">$1600</span>
                                    <span
                                        className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                                </p>
                                <a href="mailto:andriyroy3@gmail.com"
                                   className=" animate-pulse mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Contact me</a>
                                <p className="mt-6 text-xs leading-5 text-white">Final price depends on task complexity
                                    and urgency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Consulting*/}

                <div
                    className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight pricing-text">Freelance | Consulting</h3>
                        <p className="mt-6 text-base leading-7 pricing-text">
                            General and specific consulting in different area of web development and security.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s
                                included</h4>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 pricing-text sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Private access to chat with me (Signal, WhatsApp, Slack, Discord) for rapid messaging
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Understandable technical language and process flow
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Individual approach
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                          clipRule="evenodd"/>
                                </svg>
                                Discount in long-time cooperation
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div
                            className="rounded-2xl card-form py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-white">For point purposes</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">$40</span>
                                    <span
                                        className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                                </p>
                                <a href="mailto:andriyroy3@gmail.com"
                                   className="animate-pulse mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Contact me</a>
                                <p className="mt-6 text-xs leading-5 text-white">Price per hour includes taxes</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}