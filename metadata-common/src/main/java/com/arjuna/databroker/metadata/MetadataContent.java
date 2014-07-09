/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata;

import com.arjuna.databroker.metadata.selectors.MetadataContentSelector;

public interface MetadataContent
{
    public <T> MetadataStatement<T> getStatement(String name, String type);

    public MutableMetadataContent clone();

    public <S extends MetadataContentSelector> S selector(Class<S> c)
        throws IllegalArgumentException;

    public <V> V getView(Class<V> viewInterface)
        throws IllegalArgumentException;
}