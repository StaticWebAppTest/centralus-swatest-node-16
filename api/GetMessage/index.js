module.exports = async function (context, req) {
  const date = "2024-03-09T05:10:43.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

