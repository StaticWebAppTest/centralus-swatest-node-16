module.exports = async function (context, req) {
  const date = "2022-04-03T19:08:15.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

