import '../styles/CV.css'
import {PaperClipIcon} from '@heroicons/react/20/solid'


export default function CVSection() {
    return (

        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-balance font-semibold leading-8 text-white-900">General Information</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Full name</dt>
                        <dd className="mt-1 text-lg leading-6 cv-text sm:col-span-2 sm:mt-0 font-semibold text-transform">Roi
                            Andrii
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Job title</dt>
                        <dd className="mt-1 text-lg leading-6 cv-text sm:col-span-2 sm:mt-0">Full Stack Software
                            Engineer | Web Application Penetration Tester | Ethical Hacker
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Email address</dt>
                        <dd className="mt-1 text-lg leading-6 cv-text sm:col-span-2 sm:mt-0">andriyroy3@gmail.com</dd>
                    </div>

                    {/*skills section */}
                    {/*header*/}
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Stack technologies and skills
                        </dt>
                        {/*skills*/}
                        <dd className="mt-1 text-base leading-6 cv-text sm:col-span-2 sm:mt-0">
                            <h3 className=" text-balance font-semibold leading-8 text-white-900 text-transform">Software
                                Development
                                skills
                            </h3>
                            <ul className="divide-y divide-gray-100 rounded-md border border-gray-200 list-disc justify-between py-4 pl-4 pr-8 text-base leading-6 cv-text">

                                <li>Java (v.11 and higher)</li>
                                <li>Spring (Core, Boot, Security, Data)</li>
                                <li>Hibernate</li>
                                <li>ES(Javascript, Typescript)</li>
                                <li>Angular, React</li>
                                <li>Bootstrap, JQuery, Tailwind</li>
                                <li>MySQL, PostgreSQL, h2, SQLite</li>
                                <li>Python</li>
                                <li>Bash</li>

                            </ul>
                        </dd>
                        <dt className="text-base font-medium leading-6 text-white-900">
                        </dt>
                        <dd className="mt-1 text-base leading-6 cv-text sm:col-span-2 sm:mt-0"><h3
                            className=" text-balance font-semibold leading-8 text-white-900 text-transform">Cyber
                            Security skills
                        </h3>


                            <ul className="divide-y divide-gray-100 rounded-md border border-gray-200 list-disc justify-between py-4 pl-4 pr-8 text-base leading-6 cv-text">
                                <li>Web application security</li>
                                <li>Security coding best practices</li>
                                <li>Vulnerabilities assessment</li>
                                <li>Web application penetration testing</li>
                                <li>Securing CI/CD</li>
                            </ul>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">About</dt>
                        <dd className="mt-1 text-base leading-6 cv-text sm:col-span-2 sm:mt-0">
                            More than 3 years of experience in web application development and security testing.
                        </dd>
                    </div>

                    {/*// work experience section*/}

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Work Experience</dt>
                        <dd className="mt-1 text-base leading-6 cv-text sm:col-span-2 sm:mt-0">
                            <h2 className="text-base text-decoration-line: underline; font-semibold leading-8 text-white-900">
                                NDA
                            </h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">Security Software
                                Engineer | Penetration Tester | Cyber Security Engineer</h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">03.2022 -
                                present</h2>
                            <ul className=" list-disc justify-between py-4 pl-4 pr-8 text-base leading-6 cv-text">
                                <li>Securing project lifecycle development</li>
                                <li>Performing web application and network penetration tests</li>
                                <li>Writing software for red team purposes</li>
                                <li>Researching and implementation CVE's from Proof of Concept to Proof of Work</li>
                                <li>Key technologies: Java 17, React, Python, C++, Javascript, Spring Boot, Spring
                                    Security, Docker
                                </li>
                            </ul>
                            <h2 className="text-base text-decoration-line: underline; font-semibold leading-8 text-white-900">
                                GoIT
                            </h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">Java Mentor</h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">11.2021 -
                                09.2023</h2>
                            <ul className=" list-disc justify-between py-4 pl-4 pr-8 text-base leading-6 cv-text">
                                <li>Running Java Marathons</li>
                                <li>Students technical support</li>
                                <li>Homework assessment and technical feedback</li>
                                <li>New graduate project development</li>
                            </ul>
                            <h2 className="text-base text-decoration-line: underline; font-semibold leading-8 text-white-900">
                                SmartFoxPro ltd
                            </h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">Java Full Stack
                                Software
                                Engineer | Cyber Security Engineer</h2>
                            <h2 className="text-balance font-semibold leading-8 text-white-900">03.2021 -
                                03.2022</h2>
                            <ul className=" list-disc justify-between py-4 pl-4 pr-8 text-base leading-6 cv-text">
                                <li>Developing backend server logic for studying freelance platform</li>
                                <li>Bug fixing</li>
                                <li>New backed and frontend feature implementation.</li>
                                <li>Key technologies: Java 8, Spring Boot, Spring Data, Javascript, AngularJS,
                                    Vaadin, MySQL, JQuery
                                </li>
                            </ul>

                        </dd>
                    </div>

                    {/*// /!* ATTACHMENT Section*!/*/}

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-white-900">Attachments</dt>
                        <dd className="mt-2 text-base cv-text sm:col-span-2 sm:mt-0">
                            <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-base leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-white-400"
                                                       aria-hidden="true"/>
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span
                                            className="truncate font-medium">Roi_A.Security_and_Software_Engineer.pdf</span>
                                            <span className="flex-shrink-0 text-white-400">2.4mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="/cv/download"
                                           className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>


                </dl>
            </div>
        </div>
    )
}
