module.exports = async function (context, req) {
  const date = "2024-07-26T18:13:38.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

