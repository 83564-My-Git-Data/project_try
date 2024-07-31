package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User  extends BaseEntity{

	@Column(name = "Client_name", length = 20, nullable = false)
	private String clientName;
	
	@Column(name = "last_name", length = 20, nullable = false)
	private String teamName;
	
	@Column(name = "phone_no", length = 15, unique = true, nullable = false)
	private String phoneNo;
	
	@Column(name = "email_id", length = 30, unique = true, nullable = false)
	private String emailId;
	
	@Column(length = 250, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private Role role;

	
}
