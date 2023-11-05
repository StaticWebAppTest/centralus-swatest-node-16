module.exports = async function (context, req) {
  const date = "2023-11-05T21:07:18.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

