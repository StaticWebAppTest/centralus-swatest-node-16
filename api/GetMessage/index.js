module.exports = async function (context, req) {
  const date = "2022-04-09T20:11:10.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

