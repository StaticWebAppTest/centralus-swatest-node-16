module.exports = async function (context, req) {
  const date = "2022-11-14T14:16:59.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

