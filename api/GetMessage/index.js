module.exports = async function (context, req) {
  const date = "2025-01-10T22:11:04.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

