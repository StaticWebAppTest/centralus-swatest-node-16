module.exports = async function (context, req) {
  const date = "2023-09-17T19:06:25.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

