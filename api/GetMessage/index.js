module.exports = async function (context, req) {
  const date = "2023-08-07T04:10:29.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

