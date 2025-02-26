module.exports = async function (context, req) {
  const date = "2025-02-26T16:15:37.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

