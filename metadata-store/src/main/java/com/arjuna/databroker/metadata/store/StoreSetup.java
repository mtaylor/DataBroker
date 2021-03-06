/*
 * Copyright (c) 2013-2014, Arjuna Technologies Limited, Newcastle-upon-Tyne, England. All rights reserved.
 */

package com.arjuna.databroker.metadata.store;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.arjuna.databroker.metadata.MetadataContentStore;

@Startup
@Singleton
@TransactionAttribute(TransactionAttributeType.REQUIRED)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class StoreSetup implements Serializable
{
    private static final long serialVersionUID = 2568567962494253287L;

    public StoreSetup()
    {
    }

    @PostConstruct
    public void setup()
    {
        if (_metadataContentStore.getIds().size() == 0)
        {
            MetadataEntity      descriptionSchemaMetadata                 = new MetadataEntity("DescriptionSchema", null, null, loadRDFResource("com/arjuna/databroker/metadata/store/DescriptionSchema.rdf"));
            MetadataEntity      dataSourceSchemaMetadata                  = new MetadataEntity("DataSourceSchema", null, null, loadRDFResource("com/arjuna/databroker/metadata/store/DataSourceSchema.rdf"));
            MetadataEntity      accessSchemaMetadata                      = new MetadataEntity("AccessSchema", null, null, loadRDFResource("com/arjuna/databroker/metadata/store/AccessSchema.rdf"));
            MetadataEntity      speedManagementNetworkBeforeMetadata      = new MetadataEntity("SpeedManagementNetwork_before", null, null, loadRDFResource("com/arjuna/databroker/metadata/store/SpeedManagementNetwork_before.rdf"));
            MetadataEntity      speedManagementNetworkAfterMetadata       = new MetadataEntity("SpeedManagementNetwork_after", null, null, loadRDFResource("com/arjuna/databroker/metadata/store/SpeedManagementNetwork_after.rdf"));
            AccessControlEntity descriptionSchemaAccessControl            = new AccessControlEntity(descriptionSchemaMetadata, null, null, false, true, false, false, false, false);
            AccessControlEntity dataSourceSchemaAccessControl             = new AccessControlEntity(dataSourceSchemaMetadata, null, null, false, true, false, false, false, false);
            AccessControlEntity accessSchemaAccessControl                 = new AccessControlEntity(accessSchemaMetadata, null, null, false, true, false, false, false, false);
            AccessControlEntity speedManagementNetworkBeforeAccessControl = new AccessControlEntity(speedManagementNetworkBeforeMetadata, null, null, true, true, true, true, true, true);
            AccessControlEntity speedManagementNetworkAfterAccessControl  = new AccessControlEntity(speedManagementNetworkAfterMetadata, null, null, true, true, true, true, true, true);

            _entityManager.persist(descriptionSchemaMetadata);
            _entityManager.persist(dataSourceSchemaMetadata);
            _entityManager.persist(accessSchemaMetadata);
            _entityManager.persist(speedManagementNetworkBeforeMetadata);
            _entityManager.persist(speedManagementNetworkAfterMetadata);
            _entityManager.persist(descriptionSchemaAccessControl);
            _entityManager.persist(dataSourceSchemaAccessControl);
            _entityManager.persist(accessSchemaAccessControl);
            _entityManager.persist(speedManagementNetworkBeforeAccessControl);
            _entityManager.persist(speedManagementNetworkAfterAccessControl);
        }
    }

    private String loadRDFResource(String rdfResourceName)
    {
        try
        {
            StringBuffer rdfText        = new StringBuffer();
            InputStream  rdfInputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(rdfResourceName);

            byte[] buffer     = new byte[4096];
            int    readLength = rdfInputStream.read(buffer);
            while (readLength >= 0)
            {
                rdfText.append(new String(buffer, 0, readLength, "UTF-8"));
                readLength = rdfInputStream.read(buffer);
            }

            return rdfText.toString();
        }
        catch (IOException ioException)
        {
            ioException.printStackTrace();
            
            return null;
        }
    }

    @PersistenceContext(unitName="Metadata")
    private EntityManager _entityManager;
    
    @EJB
    private MetadataContentStore _metadataContentStore;
}
