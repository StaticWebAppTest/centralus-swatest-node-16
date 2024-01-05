module.exports = async function (context, req) {
  const date = "2024-01-05T20:09:38.762Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

