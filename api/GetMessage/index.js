module.exports = async function (context, req) {
  const date = "2022-02-25T04:12:17.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

