import { FC } from 'react';
import Helmet from 'react-helmet';

import { MetadataProps } from '../type/type';

const MetaData: FC<MetadataProps> = ({ title, content }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description"
                content={content} />
        </Helmet>
    );
};

export default MetaData;