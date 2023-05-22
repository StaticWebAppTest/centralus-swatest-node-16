module.exports = async function (context, req) {
  const date = "2023-05-22T12:16:41.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

