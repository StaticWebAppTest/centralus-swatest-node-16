module.exports = async function (context, req) {
  const date = "2023-02-05T03:14:15.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

