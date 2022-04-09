module.exports = async function (context, req) {
  const date = "2022-04-09T19:08:03.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

