module.exports = async function (context, req) {
  const date = "2023-04-27T02:01:16.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

