module.exports = async function (context, req) {
  const date = "2024-05-20T21:08:47.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

