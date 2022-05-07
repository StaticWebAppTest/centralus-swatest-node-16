module.exports = async function (context, req) {
  const date = "2022-05-07T14:09:35.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

