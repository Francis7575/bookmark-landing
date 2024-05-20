import { ChangeEvent, FormEvent, useState } from "react"
import errorIcon from '/assets/icon-error.svg'

type formData = {
    email: string
}

const Form = () => {
    const [formData, setFormData] = useState<formData>({
        email: ''
    })
    const [isValidEmail, setisValidEmail] = useState<boolean>(true);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
        setisValidEmail(true)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        if (!isValid) {
            setisValidEmail(false)
        }
    }

    return (
        <section className="bg-blue py-[3.75rem] px-8">
            <div className="max-w-[442px] mx-auto">
                <div className="text-center text-white mb-8">
                    <p className="text-[.75rem] leading-[2.5rem] xl:mb-[1.5rem] tracking-[4.615px] xl:tracking-[5px] font-medium">
                        35,000+ ALREADY JOINED
                    </p>
                    <p className="text-[1.5rem] leading-[1.75rem] tracking-[-0.075px] font-medium 
                        max-w-[22rem] mx-auto lg:text-[2rem] lg:tracking-[-0.1px] lg:max-w-[26.43rem] lg:leading-[2.5rem]">
                        Stay up-to-date with what we're doing
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="lg:flex lg:gap-4">
                    <div className="flex flex-col relative lg:max-w-[300px] lg:w-full">
                        <input
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                            value={formData.email}
                            placeholder="Enter your email address"
                            className={`pl-[1.25rem] py-[.625rem] rounded-[.315rem] placeholder-color w-full
                        ${!isValidEmail && 'border-2 border-light-red'}`}
                        />
                        {!isValidEmail && (
                            <div className="bg-light-red text-white pt-[.25rem] pb-[.375rem] pl-[.75rem] 
                            rounded-bl-[.315rem] rounded-br-[.315rem]">
                                <img src={errorIcon} alt="Error" className="error-icon" />
                                <p className="text-[.625rem]">
                                    Whoops, make sure it's an email
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <button className={`w-full text-[.875rem] font-medium bg-light-red text-white py-[.625rem] 
                                rounded-[.315rem] hover:text-light-red hover:bg-white border-2 border-light-red
                                transition duration-300 ease-in-out lg:px-[1.4rem]`}>
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form