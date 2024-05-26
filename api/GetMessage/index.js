module.exports = async function (context, req) {
  const date = "2024-05-26T16:12:09.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

