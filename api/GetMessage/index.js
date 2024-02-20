module.exports = async function (context, req) {
  const date = "2024-02-20T00:40:26.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

