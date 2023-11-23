module.exports = async function (context, req) {
  const date = "2023-11-23T00:43:16.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

