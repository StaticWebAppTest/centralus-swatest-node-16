module.exports = async function (context, req) {
  const date = "2023-04-05T18:13:11.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

