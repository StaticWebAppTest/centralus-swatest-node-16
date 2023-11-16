module.exports = async function (context, req) {
  const date = "2023-11-16T00:43:34.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

