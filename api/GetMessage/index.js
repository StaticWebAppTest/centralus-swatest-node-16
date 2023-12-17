module.exports = async function (context, req) {
  const date = "2023-12-17T12:15:21.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

