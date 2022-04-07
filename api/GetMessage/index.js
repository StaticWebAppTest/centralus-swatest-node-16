module.exports = async function (context, req) {
  const date = "2022-04-07T13:21:57.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

