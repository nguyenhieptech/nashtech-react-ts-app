import { useForm, Controller } from 'react-hook-form';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
	remember?: boolean;
};

export default function Login() {
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

	// I haven't finished validation for Login form yet.
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Login
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

					<div>
						<Controller
							name='remember'
							control={control}
							defaultValue={false}
							rules={{ required: true }}
							render={({ field }) => (
								<Checkbox {...field} value='remember' color='primary' />
							)}
						/>
						{'Remember me'}
					</div>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Login
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href='#' variant='body2'>
								{"Don't have an account? Register"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
