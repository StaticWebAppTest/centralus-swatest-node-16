module.exports = async function (context, req) {
  const date = "2024-11-22T22:11:09.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

