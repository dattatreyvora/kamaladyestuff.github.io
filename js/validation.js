	/*
	 * Validation Functions
	 */
	
	
	function EmptyFieldValidation(fieldname,div_id,message,error_class_name,no_error_class_name){
		
		/*
		 *  first argument is the ID of the field on which this validation is to be performed
		 *  
		 *  second argument is the ID of the 'DIV' in which error message is to be displayed
		 *  third argument is the TEXT that will be displayed as error message
		 *  
		 *  if we do not want to display any error message then we can pass 'null' as second and third argument
		 *  
		 *  fourth argument is the name of the CSS class that will be applied when there is an error in value
		 *  fifth argument is the name of the CSS class that will be appliedd whrn the error is rectified
		 */
		
		var fieldvalue = document.getElementById(fieldname).value;
		
		if(fieldvalue=="" || fieldvalue==null){
			
			document.getElementById(fieldname).setAttribute("class", error_class_name);
			
			if(div_id!="" && message!="" && div_id!=null && message!=null){
				
				document.getElementById(div_id).innerHTML = message;
				return false;
			}
			
			return false;
		}
		
		else{
			
			document.getElementById(fieldname).setAttribute("class", no_error_class_name);
			if(div_id!="" && message!="" && div_id!=null && message!=null){
				document.getElementById(div_id).innerHTML = "";
			}
			return true;
		}
	}
	
	/*
	 * Function to validate integer values for inputs where float values are not allowed
	 */
	
	function NumberValidation(fieldname,message)
	{
		var myvalue = document.getElementById(fieldname).value;
		
		/*
		 * The below "if" condition is for making the second argument optional.
		 * The variable "message" should contain the alert message to be displayed.
		 * If the second argument is not provided no alert will be displayed only the function will return false.
		 */
			
		if(!message)
		{
			message="";							
		}
		
		if(!Number(myvalue))
		{
			if(message!="")
			{
				alert(message);
				document.getElementById(fieldname).value="";
			}
			
			return false;
		}
		
		for(var i=0;i<myvalue.length;i++)
		{
			if(myvalue.charAt(i)==".")
			{
				if(message!="")
				{
					alert(message);
				}
				
				return false;
			}	
		}
	}
	
	/*
	 * fieldname1 is year i.e the first argument
	 * fieldname2 is month i.e the second argument
	 * fieldname3 is day i.e the third argument
	 *
	 */
	
	function DateValidation(fieldname1,fieldname2,fieldname3)
	{	
		var year = document.getElementById(fieldname1).value;
		var month = document.getElementById(fieldname2).value;
		var day = document.getElementById(fieldname3).value;
		
		if(year=="")
		{
			alert("Please Enter year");
			return false;
		}
		
		if(year<1900 || NumberValidation(fieldname1)==false)
		{
			alert("Please enter a valid year");
			return false;	
		}
		
		if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
		{
			if(day>31 || day<1)
			{
				alert("Please enter a valid day. No of days cannot be more that 31");
				return false;
			}
		}
		
		if(month==4 || month==6 || month==9 || month==11)
		{
			if(day>30 || day<1)
			{
				alert("Please enter a valid day. The month you selected cannot have more than 30 days");
				return false;			
			}
		}
		
		if(month==2)
		{
			if(year%4==0)
			{
				if(day>29)
				{
					alert("Please enter a valid day. The month you selected cannot have more than 29 days");
					return false;
				}
			}
			
			else if(year%4!=0)
			{
				if(day>28)
				{
					alert("Please enter a valid day. The month you selected cannot have more than 28 days");
					return false;
				}
			}
		}
	}
	
	function EmailValidation(fieldname,message)
	{
		if(!message)
		{
			message = "";
		}
		
		var email = document.getElementById(fieldname).value;
		
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if (!filter.test(email))
		{
			if(message!="")alert(message);
			return false;
		}
	}
	
	function PasswordValidation(fieldname1,fieldname2)
	{
		var password = document.getElementById(fieldname1).value;
		var confirm_password = document.getElementById(fieldname2).value;
		
		if(password=="")
		{
			alert("Please Enter a Password for your account");
			return false;
		}
				
		if(password.length<5)
		{
			alert("The password should be atleast 5 charachters long");
			return false;
		}
		
		if(password.length>40)
		{
			alert("The password cannot have more than 40 charachters");
			return false;
		}
		
		if(password!=confirm_password)
		{
			alert("Both the password fields should have same values");
			return false;
		}
		
	}
	
	function ConvertFloatToInteger(fieldname)
	{
		document.getElementById(fieldname).value = Math.round(document.getElementById(fieldname).value);
	}
	
	/*
	 * This function is for fetching values from a "multiple Select" object.
	 * This function will return all the selected values as a comma separated string
	 */
	
	function GetMultipleSelectValues(fieldname)
	{
		var selected_values = new Array();
		var list="";
		var myobject = document.getElementById(fieldname);
		
		while (myobject.selectedIndex != -1)
		{
			if (myobject.selectedIndex >= 0)
			{
				selected_values.push(myobject.options[myobject.selectedIndex].value);
			}
			
			myobject.options[myobject.selectedIndex].selected = false;
		}
		
		for(var i=0;i<selected_values.length;i++)
		{
			if(list=="")
			{
				list = selected_values[i];
			}
			
			else
			{
				list = list + "," + selected_values[i];
			}
		}
		
		return list;
	}