module.exports = async function (context, req) {
  const date = "2025-01-19T12:19:27.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

