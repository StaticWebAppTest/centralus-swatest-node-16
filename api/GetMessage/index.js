module.exports = async function (context, req) {
  const date = "2025-02-28T03:20:05.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

