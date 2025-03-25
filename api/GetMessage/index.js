module.exports = async function (context, req) {
  const date = "2025-03-25T20:13:38.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

