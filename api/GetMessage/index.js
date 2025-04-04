module.exports = async function (context, req) {
  const date = "2025-04-04T16:15:20.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

