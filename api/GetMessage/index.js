module.exports = async function (context, req) {
  const date = "2024-02-21T21:07:48.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

