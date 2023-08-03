module.exports = async function (context, req) {
  const date = "2023-08-03T17:07:41.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

