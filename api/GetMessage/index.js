module.exports = async function (context, req) {
  const date = "2024-01-30T05:08:35.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

