import React from 'react';

const Java = () => {
    return (
        <div className='detailsPage'>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/James_Gosling_2008.jpg/1200px-James_Gosling_2008.jpg" className='jamesGosling hadow-lg ' alt="photo error" />
                <h4>James Gosling</h4>
                <p className='aboutDennis font-weight-bold'>
                    James Gosling is a Canadian computer scientist best known for creating the Java programming language in 1995 while working at Sun Microsystems. His work on Java significantly impacted software development, enabling platform independence and robust applications. Gosling is regarded as the "Father of Java" and a pioneer in programming.
                </p>
                <div className='whatIsC'>
                    <h4>What is Java ?</h4>
                    Java is a high-level, class-based, object-oriented programming language developed by James Gosling and released by Sun Microsystems in 1995. It is designed with the principle of "write once, run anywhere" (WORA), meaning that compiled Java code can run on any device that supports the Java Virtual Machine (JVM), making it highly portable and platform-independent. This feature makes Java a popular choice for developing cross-platform applications and is one of the reasons it remains widely used in the software industry.

                    Java’s syntax is similar to C and C++, making it easy for programmers with backgrounds in those languages to learn. However, Java is designed to be simpler, with features that reduce complexity and improve security, such as automatic memory management through garbage collection, strong type-checking, and exception handling. It is primarily an object-oriented language, emphasizing code modularity and reuse, which allows for more structured, maintainable, and scalable code.

                    Java’s extensive libraries and frameworks (like Spring, Hibernate, and JavaFX) offer robust tools for building applications, from simple desktop programs to complex web and mobile applications. Moreover, the language is widely used in Android development, enterprise software, scientific computing, and cloud-based applications.

                    Java's versatility, stability, and scalability have made it a cornerstone in the technology stack of many large organizations. The community-driven nature of Java ensures constant updates and improvements, keeping it relevant for modern development needs and fostering a large ecosystem of developers worldwide.
                </div>
                <hr />
                <h4>Important Notes</h4>
                <div className='importantNotes'>
                    <ul>
                        <li>Java’s syntax is similar to C and C++ but simpler.</li>
                        <li>Java’s principle is "write once, run anywhere" (WORA).</li>
                        <li>Java uses bytecode, making it both secure and efficient.</li>
                        <li>Java applications run on the Java Virtual Machine (JVM).</li>
                        <li>Java has a large developer community and constant updates.</li>
                        <li>Java is a high-level, object-oriented programming language.</li>
                        <li>It was developed by James Gosling at Sun Microsystems in 1995.</li>
                        <li>Java is known for its portability, scalability, and stability.</li>
                        <li>Java is widely used for Android mobile application development.</li>
                        <li>Java has a rich set of APIs for networking, I/O, and concurrency.</li>
                        <li>Java's `synchronized` keyword enables thread-safe code execution.</li>
                        <li>It features automatic memory management through garbage collection.</li>
                        <li>Java is platform-independent due to the Java Virtual Machine (JVM).</li>
                        <li>It is used in web, desktop, and server-side application development.</li>
                        <li>It is popular in enterprise, scientific, and cloud-based applications.</li>
                        <li>Java supports multithreading, enhancing performance in parallel tasks.</li>
                        <li>Java offers the JavaFX framework for modern graphical user interfaces.</li>
                        <li>It supports strong type-checking and exception handling for safer code.</li>
                        <li>Java applications are typically compiled to bytecode, not machine code.</li>
                        <li>It includes a built-in garbage collector to manage memory automatically.</li>
                        <li>It has extensive libraries and frameworks, such as Spring and Hibernate.</li>
                        <li>Java supports Remote Method Invocation (RMI) for distributed applications.</li>
                        <li>The Java Development Kit (JDK) includes tools for compilation and debugging.</li>
                        <li>It includes the Java Native Interface (JNI) for integrating with native code.</li>
                        <li>Java is statically typed, meaning variable types are checked at compile-time.</li>
                        <li>It enforces strict backward compatibility, ensuring older code runs on new JVMs.</li>
                        <li>The Java Standard Library provides tools for networking, data structures, and more.</li>
                        <li>It provides robust security features, including bytecode verification and sandboxing.</li>
                        <li>Java SE (Standard Edition) provides core libraries, while Java EE (Enterprise Edition)</li>

                    </ul>
                </div>
                <h4>Syntex of C</h4>
                <div>
                    <div className='syntexOfC'>
                        <pre>
                            <code>
                                {`Line - 1 : public class Main {  `} <br />
                                {`Line - 2 : public static void main(String[] args) { `} <br />
                                {`Line - 3 : // Code goes here `}<br />
                                {`Line - 4 :  System.out.println("Hello, World!"); `} <br />
                                {`Line - 5 : }  `} <br />
                                {`Line - 6 : }   `}

                            </code>
                        </pre>
                    </div>
                    <h4>Syntex Explained</h4>
                    <div className='syntexNotes pb-4'>
                        <ul>
                            <li><b>Line 1: </b> public class Main: Declares a class named Main. </li>
                            <li><b>Line 2: </b> public static void main(String[] args): Main method where execution begins.</li>
                            <li><b>Line 3: </b> System.out.println("Hello, World!");: Prints text to the console.</li>
                            <li><b>Line 4: </b> {`}`} : functon closed</li>
                            <li><b>Line 5: </b> {`}`} function closed</li>
                        </ul>
                    </div>
                </div>
                <h4>LEARN MORE ABOUT C HERE</h4>
                <div className='pb-5'>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/java/java_output.asp">Java Output</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_comments.asp">Java Comments</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_variables.asp">Java Variables</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_data_types.asp">Java Data Types</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_type_casting.asp">Java TypeCasting</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_operators.asp">Java Operators</a>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/java/java_strings.asp">Java Strings</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_math.asp">Java Math</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_booleans.asp">Java Booleans</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_conditions.asp">Java Conditions</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_switch.asp">Java Switch</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_while_loop.asp">Java While Loop</a>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/java/java_for_loop.asp">Java For Loop</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_break.asp">Java Break</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_arrays.asp">Java Array</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_oop.asp">Java Oop</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_classes.asp">Java Classes</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/java/java_class_attributes.asp">Java Attributes</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pageEnd shadow-lg rounded shadow-lg  '>
                <p>Thank you for visiting our website! We appreciate your interest in our study materials, designed to support your educational journey. Our resources are tailored to help you succeed, whether you're preparing for exams or enhancing your knowledge. We’re dedicated to providing high-quality content that meets your needs, and we hope you find everything you’re looking for. Your feedback is invaluable to us, so please feel free to reach out with any suggestions or questions. Thank you once again for choosing us as your study partner—we look forward to assisting you on your path to success!
                </p>
            </div>
        </div>
    )
}
export default Java;

