import { createStyles } from '@mantine/core'

export const usePetsitterRegistrationStyles = createStyles((theme) => ({
    
    
    mainContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'80vw',
    },
    
    Title: {
        textAlign:'center'
    },

    checkedInfos: {
        marginBottom: '20px',
        padding: '15px',
        textAlign: 'left'
    },
    
    procedureInfos: {
        backgroundColor: '#BBDFC8',
        borderRadius: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '20px' ,
        //     // 20px 20px 20px
    },
    
    row: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    

    
    checkboxes: {
        marginTop: '30px',
        fontSize: '0.9rem',
    },
    
    checksPosition: {
        marginTop: '10px', 
    }
}))