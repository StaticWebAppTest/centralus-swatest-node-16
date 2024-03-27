module.exports = async function (context, req) {
  const date = "2024-03-27T02:15:41.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

