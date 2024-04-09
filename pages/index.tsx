import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <img
                height="256"
                width="256"
                src="/angel.png"
                className="mx-auto"
            />

            <h1 className="text-3xl font-bold text-center my-8">
                Be Not Afraid
            </h1>
            <p className="text-xl mb-8">
                The Milady Remilio World Order is running an EigenLayer operator
                for the Remilia community. You can delegate to our EigenLayer
                operator to earn Eigenlayer restaking rewards and help secure
                the network. We are a group of developers and operators who are
                passionate about the Remilia community and the future of the
                blockchain. We are committed to providing the best possible
                service to our delegators. All operating members are well-versed
                in running Ethereum validators.
            </p>

            <p className="my-8">
                You can delegate ETH to our EigenLayer operator{" "}
                <a
                    target="_blank"
                    className="text-sky-600 underline hover:text-sky-500"
                    href="https://app.eigenlayer.xyz/operator/0xfe58d62a6e545f08a159fcbf17fe9abef6ef0ebc"
                >
                    here
                </a>
                .
            </p>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-8 text-center">
                    Operating Members
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://twitter.com/_Enoch"
                        target="_blank"
                        className="bg-white shadow-lg rounded-lg overflow-hidden w-60"
                    >
                        <img
                            src="/tim.png"
                            alt="Tim Clancy"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <p className="font-bold">Tim Clancy</p>
                            <p className="mt-2">
                                Developer and Ethereum maximalist who has
                                contributed significantly to the Remilia sphere
                                and community.
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://twitter.com/Sayuki0x"
                        target="_blank"
                        className="bg-white shadow-lg rounded-lg overflow-hidden w-60"
                    >
                        <img
                            src="/sayuki.png"
                            alt="Sayuki0x"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <p className="font-bold">Sayuki0x</p>
                            <p className="mt-2">
                                Developer and long-time Remilia community member
                                who has contributed to Sudoswap.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
