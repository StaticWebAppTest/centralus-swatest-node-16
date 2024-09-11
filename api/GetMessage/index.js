module.exports = async function (context, req) {
  const date = "2024-09-11T17:09:47.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

