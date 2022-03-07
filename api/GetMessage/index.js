module.exports = async function (context, req) {
  const date = "2022-03-07T07:10:34.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

