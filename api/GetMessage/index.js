module.exports = async function (context, req) {
  const date = "2023-06-07T14:08:23.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

