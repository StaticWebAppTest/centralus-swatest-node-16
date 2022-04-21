module.exports = async function (context, req) {
  const date = "2022-04-21T20:13:13.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

