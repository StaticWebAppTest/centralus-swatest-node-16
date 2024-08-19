module.exports = async function (context, req) {
  const date = "2024-08-19T20:11:36.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

