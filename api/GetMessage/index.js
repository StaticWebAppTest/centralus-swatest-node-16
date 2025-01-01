module.exports = async function (context, req) {
  const date = "2025-01-01T22:10:35.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

