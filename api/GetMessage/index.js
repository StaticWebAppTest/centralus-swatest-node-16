module.exports = async function (context, req) {
  const date = "2023-12-17T03:09:29.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

