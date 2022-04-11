module.exports = async function (context, req) {
  const date = "2022-04-11T20:11:49.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

