module.exports = async function (context, req) {
  const date = "2023-08-22T04:10:03.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

