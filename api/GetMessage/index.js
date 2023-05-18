module.exports = async function (context, req) {
  const date = "2023-05-18T19:06:58.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

