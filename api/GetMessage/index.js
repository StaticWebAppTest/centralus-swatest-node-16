module.exports = async function (context, req) {
  const date = "2024-04-09T04:12:24.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

