module.exports = async function (context, req) {
  const date = "2022-07-07T13:34:33.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

