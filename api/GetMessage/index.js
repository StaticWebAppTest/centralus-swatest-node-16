module.exports = async function (context, req) {
  const date = "2023-05-17T20:08:56.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

