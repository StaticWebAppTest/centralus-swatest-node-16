module.exports = async function (context, req) {
  const date = "2022-11-18T20:11:29.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

