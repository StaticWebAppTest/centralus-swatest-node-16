module.exports = async function (context, req) {
  const date = "2023-08-22T05:08:11.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

