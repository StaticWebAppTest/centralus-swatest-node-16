module.exports = async function (context, req) {
  const date = "2022-07-21T21:11:30.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

