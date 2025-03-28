module.exports = async function (context, req) {
  const date = "2025-03-28T03:29:11.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

