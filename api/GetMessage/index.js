module.exports = async function (context, req) {
  const date = "2023-11-07T15:09:10.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

