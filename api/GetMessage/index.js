module.exports = async function (context, req) {
  const date = "2024-07-24T20:11:00.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

