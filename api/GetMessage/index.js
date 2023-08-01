module.exports = async function (context, req) {
  const date = "2023-08-01T21:07:41.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

