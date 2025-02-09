module.exports = async function (context, req) {
  const date = "2025-02-09T20:11:05.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

