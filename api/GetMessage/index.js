module.exports = async function (context, req) {
  const date = "2023-04-19T02:02:47.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

