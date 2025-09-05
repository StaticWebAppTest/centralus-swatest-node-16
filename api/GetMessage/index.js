module.exports = async function (context, req) {
  const date = "2025-09-05T10:13:44.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

