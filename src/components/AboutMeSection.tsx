import photo from "../images/andrii.png"
import "../styles/AboutMeSection.css"

export default function AboutMeSection() {
    const my_photo = photo  as string
    return (
        <div className=" items-stretch py-5  mt-16 px-4 grid justify-items-center">
            <h1>About me</h1>
            <img src={my_photo} alt="Andrey" className="avatar rounded-full py-7"/>
            <div className="mx-auto mt-16  rounded-3xl ring-1 ring-gray-200 ">

                <div className=" p-2  lg:w-full  lg:flex-shrink-0 ">
                    <p>
                        Hi, my name is Andrii and I'm glad to see you on my page.
                        <br/>
                        I'm a specialist in information security and ethical hacking. My mission is to help
                        organizations and individuals protect their data, systems, and personal information from
                        increasingly sophisticated threats.

                        <br/>
                        In a world where cyber threats are becoming the norm, and data protection is a necessity, it's
                        not enough to just find vulnerabilities — you need to prevent attacks before they can do any
                        harm. I use advanced ethical hacking techniques and tools to test systems for vulnerabilities,
                        identify weak points, and provide actionable recommendations for fixing them.

                        <br/>
                        My work goes beyond just the technical side. I also train and consult teams, helping to improve
                        the security culture within organizations. From securing server infrastructures to conducting
                        employee security awareness training — my goal is to make your digital environment more secure.

                        <br/>
                        How I Can Help:
                        <li>
                            Security Audits: I conduct thorough assessments of your systems, identify vulnerabilities,
                            and
                            provide solutions for remediation.
                        </li>
                        <li>Penetration Testing: I test how well your data is protected by simulating attacks to uncover
                            weaknesses.
                        </li>
                        <li>Building Secure Infrastructures: I design solutions to safeguard your data, whether it's in
                            the cloud, on servers.
                        </li>
                        <li>Security code review and secure development: I provide and share my own experience as
                            developer
                            how to write code securely, improve processes of development and mitigation for programming
                            language vulnerabilities
                        </li>
                        <li>Development: Basic stack described in CV section but main technologies are Java (Spring),
                            Javascript/Typescript (Angular, React) and Python.
                        </li>

                        <br/>
                        In some cases, for demonstration purpose, I can develop proof of concept exploit for disclosure
                        vulnerabilities.
                        <br/>
                        <br/>

                        My experience includes successful projects across various industries, including finance,
                        e-commerce where I've helped organizations ensure security at every level —
                        from infrastructure to security policies.

                        If you want to know how secure your systems are, or if you need expert guidance on data
                        protection, you're in the right place. Let’s make your digital life safer!

                    </p>
                </div>
            </div>

        </div>
    )
}