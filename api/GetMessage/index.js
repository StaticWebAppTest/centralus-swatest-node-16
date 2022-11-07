module.exports = async function (context, req) {
  const date = "2022-11-07T18:14:12.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

