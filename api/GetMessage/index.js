module.exports = async function (context, req) {
  const date = "2022-07-18T22:10:44.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

