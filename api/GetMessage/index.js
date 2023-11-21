module.exports = async function (context, req) {
  const date = "2023-11-21T15:09:13.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

