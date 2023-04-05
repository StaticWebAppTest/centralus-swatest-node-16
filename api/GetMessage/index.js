module.exports = async function (context, req) {
  const date = "2023-04-05T02:16:09.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

