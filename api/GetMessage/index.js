module.exports = async function (context, req) {
  const date = "2025-02-12T06:17:00.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

