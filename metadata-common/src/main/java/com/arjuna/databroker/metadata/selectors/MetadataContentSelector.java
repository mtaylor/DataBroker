/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata.selectors;

public interface MetadataContentSelector
{
    public <T extends MetadataContentSelector> T selector(Class<T> c)
        throws IllegalArgumentException;
}