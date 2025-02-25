module.exports = async function (context, req) {
  const date = "2025-02-25T16:15:34.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

