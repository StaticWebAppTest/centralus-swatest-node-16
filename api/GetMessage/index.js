module.exports = async function (context, req) {
  const date = "2023-11-06T04:11:09.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

