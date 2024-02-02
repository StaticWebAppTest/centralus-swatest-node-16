module.exports = async function (context, req) {
  const date = "2024-02-02T08:11:41.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

