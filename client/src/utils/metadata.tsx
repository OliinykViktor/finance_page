import React, { FC } from 'react';
import Helmet  from 'react-helmet';

interface MetadataProps {
    title: string;
    content: string;
  }

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