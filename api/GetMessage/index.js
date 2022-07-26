module.exports = async function (context, req) {
  const date = "2022-07-26T16:15:10.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

