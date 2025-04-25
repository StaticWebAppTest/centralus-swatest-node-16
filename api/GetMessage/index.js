module.exports = async function (context, req) {
  const date = "2025-04-25T10:13:41.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

