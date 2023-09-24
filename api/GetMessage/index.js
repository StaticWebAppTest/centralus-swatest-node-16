module.exports = async function (context, req) {
  const date = "2023-09-24T04:09:45.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

