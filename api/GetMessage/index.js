module.exports = async function (context, req) {
  const date = "2024-06-15T20:10:00.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

