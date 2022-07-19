module.exports = async function (context, req) {
  const date = "2022-07-19T20:11:49.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

