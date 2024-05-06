import { getProviders, signIn } from "next-auth/react";
// import { getServerSideProps } from "next/dist/build/templates/pages";

function login ({providers}) {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            {/* <img className="w-52 mb-5" src="https://banner2.cleanpng.com/20190414/wia/kisspng-spotify-portable-network-graphics-clip-art-compute-5cb33439c9cd98.1004452415552481858266.jpg" alt="Spotify_icon" /> */}
            <img className="w-52 mb-5" src="https://i.pinimg.com/736x/e1/92/4e/e1924e2d71900848f3a411a83b027415.jpg" alt="Spotify_icon" />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"} )} className="bg-[#18D860] text-white p-5 rounded-full" >Login with {provider.name}</button>
                </div>
            ))}
        </div>
    );
}

export default login;

export async function getServerSideProps (context) {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

// export async function getStaticProps (context) {
//     const providers = await getProviders();

//     return {
//         props: {
//             providers
//         }
//     }
// }
