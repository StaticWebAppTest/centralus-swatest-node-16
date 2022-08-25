module.exports = async function (context, req) {
  const date = "2022-08-25T10:12:37.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

