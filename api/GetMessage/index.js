module.exports = async function (context, req) {
  const date = "2022-11-15T02:52:57.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

