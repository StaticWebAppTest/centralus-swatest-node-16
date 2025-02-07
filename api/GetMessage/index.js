module.exports = async function (context, req) {
  const date = "2025-02-07T12:21:48.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

