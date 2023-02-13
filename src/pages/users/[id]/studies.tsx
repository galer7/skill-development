import { type NextPage } from "next";
import { useRouter } from "next/router";

import { Authorize, Breadcrumbs, Header, StudyTable, Wrapper } from "../../../components";
import { useBreadcrumbs, useUserStudies } from "../../../hooks";

const UserStudies: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const studies = useUserStudies( id as string );
    const breadcrumbs = useBreadcrumbs();

    return (
        <>
            <Header />
            <Wrapper className="py-14">
                <Authorize>
                    <div className="space-y-8">
                        <Breadcrumbs breadcrumbs={ breadcrumbs } />
                        <h1 className="h1 mb-12">{ `${ id as string }'s studies` }</h1>
                        <StudyTable data={ studies } />
                    </div>
                </Authorize>
            </Wrapper>
        </>
    );
};

export default UserStudies;