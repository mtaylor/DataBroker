/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.data.core;

import java.util.Map;
import com.arjuna.databroker.data.DataFlow;
import com.arjuna.databroker.data.InvalidNameException;
import com.arjuna.databroker.data.InvalidPropertyException;
import com.arjuna.databroker.data.MissingPropertyException;

public interface DataFlowLifeCycleControl
{
    public <T extends DataFlow> T createDataFlow(String name, Map<String, String> metaProperties, Map<String, String> properties)
        throws InvalidNameException, InvalidPropertyException, MissingPropertyException;

    public Boolean removeDataFlow(DataFlow dataFlow);
}
