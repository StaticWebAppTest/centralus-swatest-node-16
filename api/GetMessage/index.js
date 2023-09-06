module.exports = async function (context, req) {
  const date = "2023-09-06T19:06:52.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

