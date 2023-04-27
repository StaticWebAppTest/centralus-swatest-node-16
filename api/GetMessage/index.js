module.exports = async function (context, req) {
  const date = "2023-04-27T05:08:48.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

