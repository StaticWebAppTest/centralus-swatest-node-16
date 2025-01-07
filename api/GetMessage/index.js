module.exports = async function (context, req) {
  const date = "2025-01-07T22:10:56.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

