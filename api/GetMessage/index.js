module.exports = async function (context, req) {
  const date = "2023-12-22T15:08:54.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

