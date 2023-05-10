module.exports = async function (context, req) {
  const date = "2023-05-10T13:17:36.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

