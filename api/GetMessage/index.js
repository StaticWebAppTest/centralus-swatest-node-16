module.exports = async function (context, req) {
  const date = "2022-07-06T22:11:04.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

