
import { useRouter } from 'next/router'
import dados from '../../../../dados.json'


export async function getStaticPaths() {
    // const paths = [
    //   { params: { id: '1' } },
    //   { params: { id: '2' } },
    //   { params: { id: '3' } }
    // ]
    const paths = dados.services.map((postAtual) => {
        return { params: { name: `${postAtual.title}` } };
    })
    console.log('dados:', dados);
    console.log('paths:', paths);

    return {
        paths: paths,
        fallback: false // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    console.log('Contexto', context.params.name);
    const name = context.params.name;

    const post = dados.services.find((currentPost) => {
        if (currentPost.title === name) {
            return true;
        }
        return false;
    })

    console.log(post);

    return {
        props: {
            id: post.id,
            title: post.title,
            date: post.date,
            content: post.content,
        },
    }
}

const ServicesByName = (props) => {
    const router = useRouter()

    const services = {
        title: props.title,
        date: props.date,
        content: props.content,
        id: props.id
    };

    return (
        <>
            <div>
                Nome: {router.query.name}
            </div>
            <div>
                Data: {services.date}
            </div>
            <div>
                {services.content}
            </div>
            <div>
                id: {services.id}
            </div>
        </>
    )

}

export default ServicesByName;