/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata.selectors;

import com.arjuna.databroker.metadata.MetadataStatement;

public interface MetadataStatementSelector
{
    public MetadataStatement<?> getStatement();

    public <T extends MetadataStatementSelector> T selector(Class<T> c)
        throws IllegalArgumentException;
}