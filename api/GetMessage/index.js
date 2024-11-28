module.exports = async function (context, req) {
  const date = "2024-11-28T02:55:58.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

