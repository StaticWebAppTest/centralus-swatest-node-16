module.exports = async function (context, req) {
  const date = "2022-06-09T08:15:24.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

