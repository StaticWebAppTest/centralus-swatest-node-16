module.exports = async function (context, req) {
  const date = "2023-12-17T00:47:48.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

