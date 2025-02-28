module.exports = async function (context, req) {
  const date = "2025-02-28T06:17:06.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

