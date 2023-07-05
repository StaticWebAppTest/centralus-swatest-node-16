module.exports = async function (context, req) {
  const date = "2023-07-05T21:09:13.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

