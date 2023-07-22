module.exports = async function (context, req) {
  const date = "2023-07-22T21:07:17.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

