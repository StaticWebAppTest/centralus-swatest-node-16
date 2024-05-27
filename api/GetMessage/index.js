module.exports = async function (context, req) {
  const date = "2024-05-27T17:08:23.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

