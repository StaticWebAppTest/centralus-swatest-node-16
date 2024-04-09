module.exports = async function (context, req) {
  const date = "2024-04-09T06:12:32.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

