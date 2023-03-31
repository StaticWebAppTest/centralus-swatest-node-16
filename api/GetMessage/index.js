module.exports = async function (context, req) {
  const date = "2023-03-31T19:06:58.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

