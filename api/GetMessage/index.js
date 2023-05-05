module.exports = async function (context, req) {
  const date = "2023-05-05T05:08:31.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

