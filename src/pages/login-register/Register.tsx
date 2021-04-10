import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

type Inputs = {
	email?: string;
	password?: string;
};

export default function Register() {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit = (data: Inputs) => {
		alert(JSON.stringify(data));
		console.log(JSON.stringify(data));
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Register
				</Typography>

				<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								variant='outlined'
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								autoComplete='email'
								autoFocus
								{...register}
							/>
						)}
						name='email'
						control={control}
					/>

					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								variant='outlined'
								margin='normal'
								required
								fullWidth
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								{...register}
							/>
						)}
						name='password'
						control={control}
					/>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Register
					</Button>
				</form>
			</div>
		</Container>
	);
}
