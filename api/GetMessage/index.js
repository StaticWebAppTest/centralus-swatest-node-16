module.exports = async function (context, req) {
  const date = "2025-04-22T12:25:22.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

