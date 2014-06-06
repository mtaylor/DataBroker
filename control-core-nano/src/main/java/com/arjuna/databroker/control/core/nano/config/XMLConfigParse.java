/*
 * Copyright (c) 2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.control.core.nano.config;

import java.io.InputStream;
import java.util.Map;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import com.arjuna.databroker.control.core.nano.GlobalDataFlowFactory;
import com.arjuna.databroker.control.core.nano.GlobalDataFlowInventory;
import com.arjuna.databroker.control.core.nano.GlobalDataFlowNodeFactoryInventory;
import com.arjuna.databroker.data.DataFlow;
import com.arjuna.databroker.data.DataFlowFactory;
import com.arjuna.databroker.data.DataFlowNode;
import com.arjuna.databroker.data.DataFlowNodeFactory;
import com.arjuna.databroker.data.DataFlowNodeFactoryInventory;
import com.arjuna.databroker.data.DataProcessor;
import com.arjuna.databroker.data.DataService;
import com.arjuna.databroker.data.DataSink;
import com.arjuna.databroker.data.DataSource;
import com.arjuna.databroker.data.DataStore;

public class XMLConfigParse
{
    private static final Logger logger = Logger.getLogger(XMLConfigParse.class.getName());

    public boolean parse(InputStream inputStream)
    {
        try
        {
            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder        documentBuilder        = documentBuilderFactory.newDocumentBuilder();
            Document               document               = documentBuilder.parse(inputStream);

            return parseDocument(document);
        }
        catch (Throwable throwable)
        {
            logger.log(Level.WARNING, "Unexpected problem while parsing OSM XML", throwable);

            return false;
        }
    }

    private boolean parseDocument(Document document)
    {
        Element element = document.getDocumentElement();

        return parseDataFlow(element);
    }

    private boolean parseDataFlow(Element element)
    {
        boolean valid = true;

        String name = null;
        NamedNodeMap attributes = element.getAttributes();
        for (int attributeIndex = 0; attributeIndex < attributes.getLength(); attributeIndex++)
        {
            Node attribute = attributes.item(attributeIndex);

            if (attribute.getNodeName().equals("name"))
                name = attribute.getNodeValue();
            else
                logger.log(Level.WARNING, "Unexpected attribute \"" + attribute.getNodeName() + "\" with value \"" + attribute.getNodeValue() + "\"");
        }

        Map<String, String> metaProperties = new HashMap<String, String>();
        Map<String, String> properties     = new HashMap<String, String>();

        NodeList childNodes = element.getChildNodes();
        for (int childNodeIndex = 0; childNodeIndex < childNodes.getLength(); childNodeIndex++)
        {
            Node childNode = childNodes.item(childNodeIndex);

            if ((childNode.getNodeType() == Node.TEXT_NODE) && isWhiteSpace(childNode.getNodeValue()))
                continue;
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("metaProperties"))
                parseProperties((Element) childNode, metaProperties);
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("properties"))
                parseProperties((Element) childNode, properties);
            else
            {
                processUnexpectedNode(childNode);
                valid = false;
            }
        }

        return valid;
    }

    private DataFlowFactory parseDataFlowFactory(Element element)
    {
        boolean valid = true;

        String name = null;
        NamedNodeMap attributes = element.getAttributes();
        for (int attributeIndex = 0; attributeIndex < attributes.getLength(); attributeIndex++)
        {
            Node attribute = attributes.item(attributeIndex);

            if (attribute.getNodeName().equals("name"))
                name = attribute.getNodeValue();
            else
            {
                logger.log(Level.WARNING, "Unexpected attribute \"" + attribute.getNodeName() + "\" with value \"" + attribute.getNodeValue() + "\"");
                valid = false;
            }
        }

        Map<String, String> metaProperties = new HashMap<String, String>();
        Map<String, String> properties     = new HashMap<String, String>();
        
        NodeList childNodes = element.getChildNodes();
        for (int childNodeIndex = 0; childNodeIndex < childNodes.getLength(); childNodeIndex++)
        {
            Node childNode = childNodes.item(childNodeIndex);

            if ((childNode.getNodeType() == Node.TEXT_NODE) && isWhiteSpace(childNode.getNodeValue()))
                continue;
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("metaProperties"))
                parseProperties((Element) childNode, metaProperties);
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("properties"))
                parseProperties((Element) childNode, properties);
            else
            {
                processUnexpectedNode(childNode);
                valid = false;
            }
        }

        return null;
    }

    private boolean parseDataFlowNode(DataFlow dataFlow, Element element)
    {
        boolean valid = true;

        String name        = null;
        String className   = null;
        String factoryName = null;
        NamedNodeMap attributes = element.getAttributes();
        for (int attributeIndex = 0; attributeIndex < attributes.getLength(); attributeIndex++)
        {
            Node attribute = attributes.item(attributeIndex);

            if (attribute.getNodeName().equals("name"))
                name = attribute.getNodeValue();
            else if (attribute.getNodeName().equals("class"))
                className = attribute.getNodeValue();
            else if (attribute.getNodeName().equals("factoryName"))
                factoryName = attribute.getNodeValue();
            else
            {
                logger.log(Level.WARNING, "Unexpected attribute \"" + attribute.getNodeName() + "\" with value \"" + attribute.getNodeValue() + "\"");
                valid = false;
            }
        }

        Map<String, String> properties = new HashMap<String, String>();
        
        NodeList childNodes = element.getChildNodes();
        for (int childNodeIndex = 0; childNodeIndex < childNodes.getLength(); childNodeIndex++)
        {
            Node childNode = childNodes.item(childNodeIndex);

            if ((childNode.getNodeType() == Node.TEXT_NODE) && isWhiteSpace(childNode.getNodeValue()))
                continue;
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("properties"))
                parseProperties((Element) childNode, properties);
            else
            {
                processUnexpectedNode(childNode);
                valid = false;
            }
        }

        if (valid)
        {
            if ("datasource".equals(className))
                return deployDataFlowNode(dataFlow, name, DataSource.class, factoryName, properties);
            else if ("dataprocessor".equals(className))
                return deployDataFlowNode(dataFlow, name, DataProcessor.class, factoryName, properties);
            else if ("dataservice".equals(className))
                return deployDataFlowNode(dataFlow, name, DataService.class, factoryName, properties);
            else if ("datastore".equals(className))
                return deployDataFlowNode(dataFlow, name,  DataStore.class, factoryName, properties);
            else if ("datasink".equals(className))
                return deployDataFlowNode(dataFlow, name,  DataSink.class, factoryName, properties);
            else
                return false;
        }
        else
            return false;
    }

    private boolean parseProperties(Element element, Map<String, String> properties)
    {
        boolean valid = true;

        NamedNodeMap attributes = element.getAttributes();
        for (int attributeIndex = 0; attributeIndex < attributes.getLength(); attributeIndex++)
        {
            Node attribute = attributes.item(attributeIndex);

            logger.log(Level.WARNING, "Unexpected attribute \"" + attribute.getNodeName() + "\" with value \"" + attribute.getNodeValue() + "\"");
            valid = false;
        }

        NodeList childNodes = element.getChildNodes();
        for (int childNodeIndex = 0; childNodeIndex < childNodes.getLength(); childNodeIndex++)
        {
            Node childNode = childNodes.item(childNodeIndex);

            if ((childNode.getNodeType() == Node.TEXT_NODE) && isWhiteSpace(childNode.getNodeValue()))
                continue;
            else if ((childNode.getNodeType() == Node.ELEMENT_NODE) && childNode.getNodeName().equals("property"))
                valid &= parseProperty((Element) childNode, properties);
            else 
            {
                processUnexpectedNode(childNode);
                valid = false;
            }
        }

        return valid;
    }

    private boolean parseProperty(Element element, Map<String, String> properties)
    {
        boolean valid = true;

        String name  = null;
        String value = null;
        NamedNodeMap attributes = element.getAttributes();
        for (int attributeIndex = 0; attributeIndex < attributes.getLength(); attributeIndex++)
        {
            Node attribute = attributes.item(attributeIndex);

            if (attribute.getNodeName().equals("name"))
                name = attribute.getNodeValue();
            else if (attribute.getNodeName().equals("value"))
                value = attribute.getNodeValue();
            else
            {
                logger.log(Level.WARNING, "Unexpected attribute \"" + attribute.getNodeName() + "\" with value \"" + attribute.getNodeValue() + "\"");
                valid = false;
            }
        }

        NodeList childNodes = element.getChildNodes();
        for (int childNodeIndex = 0; childNodeIndex < childNodes.getLength(); childNodeIndex++)
        {
            Node childNode = childNodes.item(childNodeIndex);

            processUnexpectedNode(childNode);
            valid = false;
        }

        if ((name != null) && (value != null))
            properties.put(name, value);
        else
        {
            logger.log(Level.WARNING, "Expected both 'name' and 'value'");
            valid = false;
        }

        return valid;
    }

    private void processUnexpectedNode(Node node)
    {
        if (node.getNodeType() == Node.TEXT_NODE)
        {
            String unexpectedText = node.getNodeValue().trim();
            if (unexpectedText.length() > 16)
                logger.log(Level.WARNING, "Unexpected text \"" + unexpectedText.substring(0, 16) + "...\"");
            else
                logger.log(Level.WARNING, "Unexpected text \"" + unexpectedText + "\"");
        }
        else
            logger.log(Level.WARNING, "Unexpected node \"" + node.getNodeName() + "\" with value \"" + node.getNodeValue() + "\"" + "\" of type \"" + node.getNodeType() + "\"");
    }

    public boolean isWhiteSpace(String text)
    {
        for (char ch: text.toCharArray())
            if (! Character.isWhitespace(ch))
                return false;
        
        return true;
    }

    private DataFlow createDataFlow(String name, Map<String, String> metaProperties, Map<String, String> properties)
    {
        try
        {
            DataFlowFactory dataFlowFactory = GlobalDataFlowFactory.getInstance();

            return dataFlowFactory.createDataFlow(name, metaProperties, properties);
        }
        catch (Throwable throwable)
        {
            logger.log(Level.WARNING, "Unable to create data flow", throwable);

            return null;
        }
    }

    private <T extends DataFlowNodeFactory> boolean deployDataFlowFactory(DataFlow dataFlow, String name, Class<T> dataFlowNodeFactoryClass, Map<String, String> properties)
    {
        try
        {
            T dataFlowNodeFactory = dataFlowNodeFactoryClass.newInstance();
            dataFlowNodeFactory.createDataFlow(name, properties);

            if 
        }
        catch (Throwable throwable)
        {
            logger.log(Level.WARNING, "Unable to create data flow factory", throwable);

            return false;
        }
    }

    private <T extends DataFlowNode> boolean deployDataFlowNode(DataFlow dataFlow, String dataFlowNodeName, Class<T> dataFlowNodeClass, String dataFlowNodeFactoryName, Map<String, String> dataFlowNodeMetaProperties, Map<String, String> dataFlowNodeProperties)
    {
        try
        {
            DataFlowNodeFactory dataFlowNodeFactory = dataFlow.getDataFlowNodeFactoryInventory().getDataFlowNodeFactory(dataFlowNodeFactoryName);

            T dataFlowNode = dataFlowNodeFactory.createDataFlowNode(dataFlowNodeName, dataFlowNodeClass, dataFlowNodeMetaProperties, dataFlowNodeProperties);
            if (dataFlowNode != null)
            {
                dataFlow.getDataFlowNodeInventory().addDataFlowNode(dataFlowNode);
                return true;
            }
            else
                return false;
        }
        catch (Throwable throwable)
        {
            logger.log(Level.WARNING, "Unable to create data flow node", throwable);

            return false;
        }
    }
}
