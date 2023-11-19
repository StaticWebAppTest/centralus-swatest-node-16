module.exports = async function (context, req) {
  const date = "2023-11-19T23:08:47.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

