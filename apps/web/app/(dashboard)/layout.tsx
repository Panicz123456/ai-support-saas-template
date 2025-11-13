import { AuthGuard } from '@/modules/auth/ui/components/auth-guard';
import { OrganizationGuard } from '@/modules/auth/ui/components/organization-guard';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
	//  Double protect with middleware for better security
		<AuthGuard>
			<OrganizationGuard>
				{children}
			</OrganizationGuard>
		</AuthGuard>
	);
};

export default Layout;
