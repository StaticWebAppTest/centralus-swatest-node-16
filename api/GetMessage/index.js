module.exports = async function (context, req) {
  const date = "2023-01-17T04:11:49.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

