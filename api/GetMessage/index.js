module.exports = async function (context, req) {
  const date = "2025-06-02T06:20:49.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

