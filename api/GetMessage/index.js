module.exports = async function (context, req) {
  const date = "2025-02-25T03:19:32.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

