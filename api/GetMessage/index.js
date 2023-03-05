module.exports = async function (context, req) {
  const date = "2023-03-05T21:08:12.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

