module.exports = async function (context, req) {
  const date = "2024-11-05T18:15:17.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

