module.exports = async function (context, req) {
  const date = "2023-03-07T20:11:02.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

