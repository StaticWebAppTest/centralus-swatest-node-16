module.exports = async function (context, req) {
  const date = "2022-03-17T02:12:02.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

