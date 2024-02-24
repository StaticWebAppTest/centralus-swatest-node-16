module.exports = async function (context, req) {
  const date = "2024-02-24T10:08:57.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

