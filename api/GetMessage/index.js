module.exports = async function (context, req) {
  const date = "2024-09-05T03:12:02.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

