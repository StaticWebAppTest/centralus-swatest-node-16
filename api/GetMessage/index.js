module.exports = async function (context, req) {
  const date = "2023-04-07T03:09:20.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

