module.exports = async function (context, req) {
  const date = "2023-04-05T05:08:29.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

