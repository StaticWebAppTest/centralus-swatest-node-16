module.exports = async function (context, req) {
  const date = "2022-03-05T16:12:24.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

