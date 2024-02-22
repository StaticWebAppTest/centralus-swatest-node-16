module.exports = async function (context, req) {
  const date = "2024-02-22T02:14:42.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

