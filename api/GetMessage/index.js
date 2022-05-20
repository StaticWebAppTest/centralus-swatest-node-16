module.exports = async function (context, req) {
  const date = "2022-05-20T02:50:28.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

