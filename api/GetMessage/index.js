module.exports = async function (context, req) {
  const date = "2023-01-22T02:15:17.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

