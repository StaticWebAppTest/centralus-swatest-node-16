module.exports = async function (context, req) {
  const date = "2025-12-18T12:30:05.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

