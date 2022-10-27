module.exports = async function (context, req) {
  const date = "2022-10-27T22:11:47.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

