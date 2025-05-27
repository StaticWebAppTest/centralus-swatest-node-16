module.exports = async function (context, req) {
  const date = "2025-05-27T20:14:55.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

