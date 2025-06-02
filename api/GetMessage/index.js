module.exports = async function (context, req) {
  const date = "2025-06-02T15:15:00.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

