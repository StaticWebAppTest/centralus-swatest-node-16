module.exports = async function (context, req) {
  const date = "2025-06-02T05:14:56.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

