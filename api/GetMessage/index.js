module.exports = async function (context, req) {
  const date = "2023-01-17T15:09:48.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

