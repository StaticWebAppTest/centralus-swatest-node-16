module.exports = async function (context, req) {
  const date = "2024-07-22T13:14:47.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

