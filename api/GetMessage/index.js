module.exports = async function (context, req) {
  const date = "2024-02-29T22:08:01.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

