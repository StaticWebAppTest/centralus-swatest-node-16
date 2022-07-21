module.exports = async function (context, req) {
  const date = "2022-07-21T16:15:28.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

