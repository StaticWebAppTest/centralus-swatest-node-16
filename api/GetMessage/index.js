module.exports = async function (context, req) {
  const date = "2022-11-30T20:11:01.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

