module.exports = async function (context, req) {
  const date = "2024-04-21T06:13:00.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

