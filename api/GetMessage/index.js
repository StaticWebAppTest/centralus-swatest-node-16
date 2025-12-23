module.exports = async function (context, req) {
  const date = "2025-12-23T08:21:03.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

