module.exports = async function (context, req) {
  const date = "2023-03-10T02:25:49.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

