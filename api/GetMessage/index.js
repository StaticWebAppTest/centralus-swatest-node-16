module.exports = async function (context, req) {
  const date = "2025-01-15T18:15:27.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

