module.exports = async function (context, req) {
  const date = "2022-10-03T01:09:20.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

