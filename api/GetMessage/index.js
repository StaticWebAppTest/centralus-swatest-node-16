module.exports = async function (context, req) {
  const date = "2022-07-05T16:15:25.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

