module.exports = async function (context, req) {
  const date = "2023-01-05T13:19:08.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

