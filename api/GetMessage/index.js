module.exports = async function (context, req) {
  const date = "2025-02-01T19:08:19.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

