/*
 * Copyright (c) 2013-2015, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.control.comms;

import java.io.Serializable;
import java.util.Map;

public class DataFlowNodeFactoryDTO implements Serializable
{
    private static final long serialVersionUID = -38870421523130397L;

    public DataFlowNodeFactoryDTO()
    {
    }

    public DataFlowNodeFactoryDTO(String name, Map<String, String> properties, Boolean dataSourceFactory, Boolean dataSinkFactory, Boolean dataProcessorFactory, Boolean dataServiceFactory, Boolean dataStoreFactory)
    {
        _name                 = name;
        _properties           = properties;
        _dataSourceFactory    = dataSourceFactory;
        _dataSinkFactory      = dataSinkFactory;
        _dataProcessorFactory = dataProcessorFactory;
        _dataServiceFactory   = dataServiceFactory;
        _dataStoreFactory     = dataStoreFactory;
    }

    public String getName()
    {
        return _name;
    }

    public void setName(String name)
    {
        _name = name;
    }

    public Map<String, String> getProperties()
    {
        return _properties;
    }

    public void setProperties(Map<String, String> properties)
    {
        _properties = properties;
    }

    public Boolean isDataSourceFactory()
    {
        return _dataSourceFactory;
    }

    public void setDataSourceFactory(Boolean dataSourceFactory)
    {
        _dataSourceFactory = dataSourceFactory;
    }

    public Boolean isDataSinkFactory() {
        return _dataSinkFactory;
    }

    public void setDataSinkFactory(Boolean dataSinkFactory)
    {
        _dataSinkFactory = dataSinkFactory;
    }

    public Boolean isDataProcessorFactory() {
        return _dataProcessorFactory;
    }

    public void setDataProcessorFactory(Boolean dataProcessorFactory)
    {
        _dataProcessorFactory = dataProcessorFactory;
    }

    public Boolean isDataServiceFactory()
    {
        return _dataServiceFactory;
    }

    public void setDataServiceFactory(Boolean dataServiceFactory)
    {
        _dataServiceFactory = dataServiceFactory;
    }

    public Boolean isDataStoreFactory()
    {
        return _dataStoreFactory;
    }

    public void setDataStoreFactory(Boolean dataStoreFactory)
    {
        _dataStoreFactory = dataStoreFactory;
    }

    private String              _name;
    private Map<String, String> _properties;
    private Boolean             _dataSourceFactory;
    private Boolean             _dataSinkFactory;
    private Boolean             _dataProcessorFactory;
    private Boolean             _dataServiceFactory;
    private Boolean             _dataStoreFactory;
}
