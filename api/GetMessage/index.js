module.exports = async function (context, req) {
  const date = "2024-02-07T02:14:17.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

