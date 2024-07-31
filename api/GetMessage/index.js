module.exports = async function (context, req) {
  const date = "2024-07-31T20:10:55.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

