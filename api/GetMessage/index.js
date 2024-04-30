module.exports = async function (context, req) {
  const date = "2024-04-30T18:14:04.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

