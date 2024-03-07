module.exports = async function (context, req) {
  const date = "2024-03-07T03:08:41.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

