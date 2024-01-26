module.exports = async function (context, req) {
  const date = "2024-01-26T20:09:26.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

