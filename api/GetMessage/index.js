module.exports = async function (context, req) {
  const date = "2022-09-18T21:10:25.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

