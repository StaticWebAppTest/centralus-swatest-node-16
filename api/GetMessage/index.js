module.exports = async function (context, req) {
  const date = "2025-05-27T22:12:39.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

