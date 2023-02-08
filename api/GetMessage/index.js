module.exports = async function (context, req) {
  const date = "2023-02-08T12:18:34.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

