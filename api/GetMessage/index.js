module.exports = async function (context, req) {
  const date = "2024-06-30T20:10:14.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

