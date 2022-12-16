module.exports = async function (context, req) {
  const date = "2022-12-16T00:48:37.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

