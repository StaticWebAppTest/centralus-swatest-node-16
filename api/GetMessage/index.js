module.exports = async function (context, req) {
  const date = "2023-11-09T14:08:21.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

