module.exports = async function (context, req) {
  const date = "2022-12-04T23:09:06.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

