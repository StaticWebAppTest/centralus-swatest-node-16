module.exports = async function (context, req) {
  const date = "2023-06-11T03:21:00.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

