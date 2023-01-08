module.exports = async function (context, req) {
  const date = "2023-01-08T00:54:12.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

