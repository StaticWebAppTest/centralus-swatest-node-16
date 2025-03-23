module.exports = async function (context, req) {
  const date = "2025-03-23T20:12:39.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

