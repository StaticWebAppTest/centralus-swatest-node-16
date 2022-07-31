module.exports = async function (context, req) {
  const date = "2022-07-31T04:27:30.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

