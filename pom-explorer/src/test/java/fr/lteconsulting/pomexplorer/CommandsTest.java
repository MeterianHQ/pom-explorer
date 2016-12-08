package fr.lteconsulting.pomexplorer;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import fr.lteconsulting.pomexplorer.commands.Commands;
import fr.lteconsulting.pomexplorer.commands.GavCommand;
import fr.lteconsulting.pomexplorer.tools.StringSplitter;
import fr.lteconsulting.pomexplorer.commands.Commands.CommandCallInfo;

public class CommandsTest extends TestCase
{
	public static Test suite()
	{
		return new TestSuite( CommandsTest.class );
	}

	public void testOne()
	{
		Commands cmd = AppFactory.get().commands();
		Log log = new Log()
		{
			@Override
			public void html( String log )
			{
				System.out.println( log );
			}

			@Override
			public String prompt( String question )
			{
				return "";
			}
		};

		StringSplitter splitter = new StringSplitter();

		assertCommand( cmd.findMethodForCommand( splitter.split( "gav li" ), log ), GavCommand.class.getSimpleName(), "list" );
		assertCommand( cmd.findMethodForCommand( splitter.split( "gAv List" ), log ), GavCommand.class.getSimpleName(), "list" );
	}

	private void assertCommand( CommandCallInfo info, String command, String method )
	{
		assertNotNull( info );
		assertEquals( info.command.getClass().getSimpleName(), command );
		assertEquals( info.method.getName(), method );
	}
}
