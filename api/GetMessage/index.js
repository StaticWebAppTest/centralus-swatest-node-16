module.exports = async function (context, req) {
  const date = "2025-01-02T04:14:20.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

