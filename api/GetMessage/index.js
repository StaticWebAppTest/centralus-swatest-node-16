module.exports = async function (context, req) {
  const date = "2022-07-11T17:21:04.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

