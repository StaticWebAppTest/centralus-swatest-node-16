module.exports = async function (context, req) {
  const date = "2022-04-15T04:39:29.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

