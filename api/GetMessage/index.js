module.exports = async function (context, req) {
  const date = "2022-08-28T20:11:55.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

