module.exports = async function (context, req) {
  const date = "2023-02-07T00:52:05.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

