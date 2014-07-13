/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata.rdf;

import com.arjuna.databroker.metadata.MetadataStatement;
import com.arjuna.databroker.metadata.MutableMetadataStatement;
import com.arjuna.databroker.metadata.selectors.MetadataStatementSelector;
import com.hp.hpl.jena.rdf.model.Statement;

public class RDFMetadataStatement implements MetadataStatement
{
    public RDFMetadataStatement(Statement statement)
    {
        _statement = statement;
    }

    @Override
    public String getName()
    {
        // TODO
        throw new UnsupportedOperationException();
    }

    @Override
    public String getType()
    {
        // TODO
        throw new UnsupportedOperationException();
    }

    @Override
    public <T> T  getValue(Class<T> valueClass)
    {
        // TODO
        throw new UnsupportedOperationException();
    }

    @Override
    public MetadataStatementSelector statement()
    {
        // TODO
        throw new UnsupportedOperationException();
    }

    @Override
    @SuppressWarnings("unchecked")
    public <M extends MutableMetadataStatement> M mutableClone(Class<M> c)
    {
        if (c.isAssignableFrom(getClass()))
            return (M) this;
        else if (c.isAssignableFrom(RDFMutableMetadataContent.class))
            return (M) new RDFMutableMetadataStatement(_statement);
        else
            return null;
    }

    @Override
    public <S extends MetadataStatementSelector> S selector(Class<S> c)
        throws IllegalArgumentException
    {
        // TODO
        throw new UnsupportedOperationException();
    }

    protected Statement _statement;
}