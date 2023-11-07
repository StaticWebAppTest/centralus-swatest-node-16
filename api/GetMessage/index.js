module.exports = async function (context, req) {
  const date = "2023-11-07T20:09:20.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

