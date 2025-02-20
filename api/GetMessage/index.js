module.exports = async function (context, req) {
  const date = "2025-02-20T05:12:00.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

