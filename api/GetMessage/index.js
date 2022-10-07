module.exports = async function (context, req) {
  const date = "2022-10-07T05:30:29.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

