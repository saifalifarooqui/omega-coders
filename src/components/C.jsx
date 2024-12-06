import React from 'react'

export const C = () => {
    return (
        <div className='detailsPage'>
            <div>
                <img src="https://techcrunch.com/wp-content/uploads/2011/10/dennis_ritchie6.jpg" className='dennisPhoto hadow-lg ' alt="photo error" />
                <h4 className='mt-3'>Dennis Ritchie</h4>
                <p className='mt-5 aboutDennis font-weight-bold'>
                    Ritchie created the C programming language and was one of the developers of the Unix operating system. With Brian Kernighan, he co-wrote the book The C Programming Language, which is often referred to as K&R after their initials. Ritchie worked together with Ken Thompson, who is credited with writing the original version of Unix; one of Ritchie's contributions to Unix was its porting to different machines and platforms. They were so influential on Research Unix that Doug McIlroy later wrote, "The names of Ritchie and Thompson may safely be assumed to be attached to almost everything not otherwise attributed."
                </p>
                <div className='whatIsC'>
                    <h4>What is C ?</h4>
                    C is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential.
                    By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems code , device drivers, and protocol stacks, but its use in application software has been decreasing. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.

                    A successor to the programming language B, C was originally developed at Bell Labs by Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages, with C compilers available for practically all modern computer architectures and operating systems. The book The C Programming Language, co-authored by the original language designer, served for many years as the de facto standard for the language. C has been standardized since 1989 by the American National Standards Institute (ANSI) and, subsequently, jointly by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC).

                    C is an imperative procedural language, supporting structured programming, lexical variable scope, and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.

                    Since 2000, C has consistently ranked among the top four languages in the TIOBE index, a measure of the popularity of programming languag
                </div>
                <hr />
                <h4>Important Notes</h4>
                <div className='importantNotes'>
                    <ul>
                        <li>A function may call itself, so recursion is supported.</li>
                        <li>User-defined (typedef) and compound types are possible.</li>
                        <li> Variables may be defined within a function, with scope.</li>
                        <li> Function return values can be ignored, when not needed.</li>
                        <li>Function and data pointers permit ad hoc run-time polymorphism.</li>
                        <li> More than one assignment may be performed in a single statement. </li>
                        <li> Memory can be allocated to a program with calls to library routines.</li>
                        <li>Functions may not be defined within the lexical scope of other functions.</li>
                        <li>Whole arrays cannot be assigned or compared using a single built-in operator</li>
                        <li>Array indexing is a secondary notation, defined in terms of pointer arithmetic.</li>
                        <li> It has a large number of arithmetic, bitwise, and logic operators: +,+=,++,&,||, etc.</li>
                        <li>Low-level access to computer memory is possible by converting machine addresses to pointers.</li>
                        <li>A preprocessor performs macro definition, source code file inclusion, and conditional compilation.</li>
                        <li>Data typing is static, but weakly enforced; all data has a type, but implicit conversions are possible.</li>
                        <li>Procedures (subroutines not returning values) are a special case of function, with an empty return type void.</li>
                        <li> Strings are not a distinct data type, but are conventionally implemented as null-terminated character arrays.</li>
                        <li>Heterogeneous aggregate data types (struct) allow related data elements to be accessed and assigned as a unit.</li>
                        <li> Union is a structure with overlapping members; it allows multiple data types to share the same memory location.</li>
                        <li>The contents of whole structs cannot be compared using a single built-in operator (the elements must be compared individually).</li>
                        <li>Complex functionality such as I/O, string manipulation, and mathematical functions are consistently delegated to library routines.</li>
                        <li>There is no "array" keyword in use or definition; instead, square brackets indicate arrays syntactically, for example month[11].</li>
                    </ul>
                </div>
                <h4>Syntex of C</h4>
                <div>
                    <div className='syntexOfC'>
                        <pre>
                            <code>
                                {
                                    `Line - 1 :  #include<stdio.h>
Line - 2 : 
Line - 3 :  int main() {
Line - 4 :  printf("Hello World!");
Line - 5 :  return 0; 
Line - 4 :  }`
                                }
                            </code>
                        </pre>
                    </div>
                    <h4>Syntex Explained</h4>
                    <div className='syntexNotes pb-4'>
                        <ul>
                            <li><b>Line 1: </b>#include stdio.h is a header file library that lets us work with input and output functions, such as printf() (used in line 4). Header files add functionality to C programs.</li>
                            <li><b>Line 2: </b> A blank line. C ignores white space. But we use it to make the code more readable.</li>
                            <li><b>Line 3: </b> Another thing that always appear in a C program is main(). This is called a function. Any code inside its curly brackets { } will be executed.</li>
                            <li><b>Line 4: </b> printf() is a function used to output/print text to the screen. In our example, it will output "Hello World!".</li>
                            <li><b>Line 5: </b> return 0 ends the main() function.</li>
                            <li><b>Line 6: </b> Do not forget to add the closing curly bracket { } to actually end the main function.</li>
                        </ul>
                    </div>
                </div>
                <h4>LEARN MORE ABOUT C HERE</h4>
                <div className='pb-5'>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_output.php">C OUTPUT</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_comments.php">C COMMENTS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_variables.php">C VARIABLES</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_data_types.php">C DATA TYPES</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_constants.php">C CONSTANTS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_operators.php">C OPERATORS</a>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_booleans.php">C BOOLEAN</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_conditions.php">C CONDITIONS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_switch.php">C SWITCH</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_while_loop.php">C WHILE LOOP</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_for_loop.php">C FOR LOOP</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_break_continue.php">C BREAK</a>
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-start pt-4">
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active " aria-current="page" href="https://www.w3schools.com/c/c_arrays.php">C ARRAY</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_strings.php">C STRINGS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_user_input.php">C USER INPUT</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_memory_address.php">C MEMORY ADDRESS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_pointers.php">C POINTERS</a>
                            </button>
                        </div>
                        <div className="col-2">
                            <button className='rounded shadow-lg   '>
                                <a className="text-white nav-link active" aria-current="page" href="https://www.w3schools.com/c/c_operators.php">C OPERATORS</a>
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

export default C;
