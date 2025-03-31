module.exports = async function (context, req) {
  const date = "2025-03-31T20:14:31.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

