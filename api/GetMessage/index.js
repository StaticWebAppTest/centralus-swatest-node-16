module.exports = async function (context, req) {
  const date = "2023-06-21T13:12:03.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

