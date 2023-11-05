module.exports = async function (context, req) {
  const date = "2023-11-05T05:08:05.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

