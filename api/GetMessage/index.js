module.exports = async function (context, req) {
  const date = "2023-12-14T19:07:27.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

