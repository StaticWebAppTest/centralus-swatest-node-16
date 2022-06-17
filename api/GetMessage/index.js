module.exports = async function (context, req) {
  const date = "2022-06-17T17:12:47.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

