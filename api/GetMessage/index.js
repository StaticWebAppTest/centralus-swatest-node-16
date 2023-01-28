module.exports = async function (context, req) {
  const date = "2023-01-28T00:51:32.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

