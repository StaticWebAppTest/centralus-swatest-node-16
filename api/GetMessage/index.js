module.exports = async function (context, req) {
  const date = "2024-11-05T08:15:29.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

