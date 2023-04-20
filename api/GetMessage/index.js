module.exports = async function (context, req) {
  const date = "2023-04-20T21:07:49.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

