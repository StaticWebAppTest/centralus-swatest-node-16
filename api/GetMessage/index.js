module.exports = async function (context, req) {
  const date = "2025-03-02T20:12:05.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

