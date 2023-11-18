module.exports = async function (context, req) {
  const date = "2023-11-18T04:10:44.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

