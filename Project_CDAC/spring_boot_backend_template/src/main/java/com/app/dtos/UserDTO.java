package com.app.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class UserDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private long id;
	
	@NotBlank(message = "Client Name Can Not Be Blank")
	private String clientName;
	
	@NotBlank(message = "Team Name Can Not Be Blank")
	private String teamName;
	
	@NotBlank(message = "Email-id Can Not Be Blank")
	@Email(message = "Email-id is Not in Standard Format")
	private String emailId;
	
	@NotBlank(message = "Phone No. Can Not Be Blank")
	private String phoneNo;
	
	@NotBlank(message = "Password Can Not Be Blank")
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", message = "Password should be of minimum 8 Character containing One Capital letter, One Small letter, One Special Character and One Digit at least.")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
}

