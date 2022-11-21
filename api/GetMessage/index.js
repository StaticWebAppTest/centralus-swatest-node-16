module.exports = async function (context, req) {
  const date = "2022-11-21T20:11:14.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

