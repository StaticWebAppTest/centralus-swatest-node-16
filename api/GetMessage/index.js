module.exports = async function (context, req) {
  const date = "2024-01-26T18:11:17.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

