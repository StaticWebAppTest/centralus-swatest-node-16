module.exports = async function (context, req) {
  const date = "2024-02-12T02:16:29.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

