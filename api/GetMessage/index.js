module.exports = async function (context, req) {
  const date = "2022-07-18T14:19:24.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

