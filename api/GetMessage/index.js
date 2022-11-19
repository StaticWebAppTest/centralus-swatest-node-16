module.exports = async function (context, req) {
  const date = "2022-11-19T08:13:34.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

