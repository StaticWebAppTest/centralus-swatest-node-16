module.exports = async function (context, req) {
  const date = "2023-12-16T22:08:03.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

