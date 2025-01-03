module.exports = async function (context, req) {
  const date = "2025-01-03T22:10:39.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

