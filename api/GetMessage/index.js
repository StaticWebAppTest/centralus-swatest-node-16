module.exports = async function (context, req) {
  const date = "2023-07-24T05:09:13.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

