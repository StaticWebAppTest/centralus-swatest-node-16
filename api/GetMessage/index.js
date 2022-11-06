module.exports = async function (context, req) {
  const date = "2022-11-06T18:13:29.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

