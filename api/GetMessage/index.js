module.exports = async function (context, req) {
  const date = "2024-07-01T23:10:39.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

