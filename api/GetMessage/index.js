module.exports = async function (context, req) {
  const date = "2023-09-05T23:08:14.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

