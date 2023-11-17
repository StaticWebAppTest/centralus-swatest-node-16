module.exports = async function (context, req) {
  const date = "2023-11-17T00:43:19.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

