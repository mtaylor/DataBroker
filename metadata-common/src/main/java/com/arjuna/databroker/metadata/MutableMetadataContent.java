/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata;

public interface MutableMetadataContent extends MetadataContent
{
    public <T> void addMetadataStatement(String name, T value);
    public <T> void removeMetadataStatement(String name);
}