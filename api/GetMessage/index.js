module.exports = async function (context, req) {
  const date = "2024-07-22T02:03:31.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

