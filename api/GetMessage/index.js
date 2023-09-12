module.exports = async function (context, req) {
  const date = "2023-09-12T09:08:51.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

