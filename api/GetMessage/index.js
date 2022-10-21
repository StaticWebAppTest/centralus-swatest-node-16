module.exports = async function (context, req) {
  const date = "2022-10-21T20:14:50.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

