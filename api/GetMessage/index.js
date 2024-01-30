module.exports = async function (context, req) {
  const date = "2024-01-30T03:09:34.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

